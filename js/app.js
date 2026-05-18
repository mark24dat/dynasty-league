let PLAYERS = [];

function computeAvgRank(p){
  const rank=Number(p.manualRank ?? p.avgRank ?? p.rank);
  return Number.isFinite(rank)&&rank>0?rank:null;
}

function processPlayers(raw){
  const list=raw.map(p=>({...p}));
  list.forEach(p=>{
    const manualRank=computeAvgRank(p);
    if(manualRank!=null){
      p.avgRank=manualRank;
      p.manualRank=manualRank;
      p.nsrc=1;
    }else{
      p.avgRank=999;
      delete p.manualRank;
      delete p.nsrc;
    }
  });
  list.sort((a,b)=>a.avgRank-b.avgRank);
  const maxAR=Math.max(149,...list.map(p=>Number(p.manualRank)||0));
  list.forEach((p,i)=>{
    p.rank=i+1;
    p.score=p.manualRank?Math.max(10,Math.round(99-((p.manualRank-1)/maxAR)*89)):10;
    p.trend=Math.round(Math.sin(p.rank*2.3+1.1)*6);
    const base=p.score;
    p.history=Array.from({length:8},(_,j)=>Math.max(10,Math.min(99,Math.round(base+Math.sin((p.rank+j)*1.7)*5))));
  });
  return list;
}

async function loadPlayers(){
  const res=await fetch("data/players.json?cb="+Date.now());
  if(!res.ok)throw new Error("Could not load player list ("+res.status+")");
  const data=await res.json();
  PLAYERS=processPlayers(data.players||[]);
  const label=document.getElementById("update-label");
  if(label){
    const n=data.players?.length||0;
    label.textContent=data.updatedAt?n+" players · updated "+data.updatedAt:n+" players";
  }
  return data;
}

async function bootApp(){
  try{
    await loadPlayers();
    initHome();
    renderRankings();
    document.body.classList.remove("loading-players");
    const el=document.getElementById("load-status");
    if(el)el.remove();
  }catch(err){
    console.error(err);
    const el=document.getElementById("load-status");
    if(el)el.innerHTML='<div style="padding:24px;text-align:center;color:var(--red)">Could not load player list. If you opened the file directly on your computer, use the GitHub Pages link instead.</div>';
  }
}

const TEAMS = {
  naur:{name:'Naur',roster:[
    {name:'Jaxson Dart',pos:'QB'},{name:'Chase Brown',pos:'RB'},{name:'Jahmyr Gibbs',pos:'RB'},
    {name:'Justin Jefferson',pos:'WR'},{name:'Tetairoa McMillan',pos:'WR'},{name:'Brock Bowers',pos:'TE'},
    {name:'Quinshon Judkins',pos:'RB'},{name:'Travis Hunter',pos:'WR'},{name:'Bhayshul Tuten',pos:'RB'},
    {name:'Christian Watson',pos:'WR'},{name:'Rome Odunze',pos:'WR'},{name:'Kyle Pitts Sr.',pos:'TE'},
    {name:'Luther Burden III',pos:'WR'},{name:'Carnell Tate',pos:'WR'},{name:'Kenyon Sadiq',pos:'TE'},
    {name:'Denzel Boston',pos:'WR'},{name:'Emanuel Wilson',pos:'RB'},{name:'Jordan James',pos:'RB'},
    {name:'Patrick Mahomes',pos:'QB'},
  ]},
  no_ragrets:{name:'NO RAGRETS',roster:[
    {name:'Jayden Daniels',pos:'QB'},{name:'Omarion Hampton',pos:'RB'},{name:'Jeremiyah Love',pos:'RB'},
    {name:'Malik Nabers',pos:'WR'},{name:'CeeDee Lamb',pos:'WR'},{name:'Chig Okonkwo',pos:'TE'},
    {name:'Terry McLaurin',pos:'WR'},{name:'Jacory Croskey-Merritt',pos:'RB'},{name:'Emeka Egbuka',pos:'WR'},
    {name:'Woody Marks',pos:'RB'},{name:'George Kittle',pos:'TE'},{name:'Chris Rodriguez Jr.',pos:'RB'},
    {name:'Rachaad White',pos:'RB'},{name:'Antonio Williams',pos:'WR'},{name:'Malik Willis',pos:'QB'},
    {name:"De'Zhaun Stribling",pos:'WR'},{name:'Darnell Mooney',pos:'WR'},{name:'Eli Stowers',pos:'TE'},
  ]},
  kyles:{name:"Kyle's Oedipus Complex",roster:[
    {name:'Sam Darnold',pos:'QB'},{name:'James Cook',pos:'RB'},{name:'Kyren Williams',pos:'RB'},
    {name:'Marvin Harrison Jr.',pos:'WR'},{name:"Ja'Marr Chase",pos:'WR'},{name:'Mark Andrews',pos:'TE'},
    {name:'Jordan Mason',pos:'RB'},{name:'Evan McPherson',pos:'K'},{name:'Tony Pollard',pos:'RB'},
    {name:'Caleb Williams',pos:'QB'},{name:'Jaylen Waddle',pos:'WR'},{name:'Fernando Mendoza',pos:'QB'},
    {name:'Calvin Ridley',pos:'WR'},{name:'Jaylen Wright',pos:'RB'},{name:'Dylan Sampson',pos:'RB'},
    {name:'Kayshon Boutte',pos:'WR'},
  ]},
  isniffundies:{name:'Isniffundies',roster:[
    {name:'Drake Maye',pos:'QB'},{name:'Ashton Jeanty',pos:'RB'},{name:'Cam Skattebo',pos:'RB'},
    {name:'Drake London',pos:'WR'},{name:'DJ Moore',pos:'WR'},{name:'Colston Loveland',pos:'TE'},
    {name:'Michael Pittman Jr.',pos:'WR'},{name:'Chris Boswell',pos:'K'},{name:'Jalen Nailor',pos:'WR'},
    {name:'Michael Wilson',pos:'WR'},{name:'Courtland Sutton',pos:'WR'},{name:'Kenneth Gainwell',pos:'RB'},
    {name:'Blake Corum',pos:'RB'},{name:'AJ Barner',pos:'TE'},{name:'Joe Burrow',pos:'QB'},
    {name:'Josh Downs',pos:'WR'},{name:'Brenton Strange',pos:'TE'},{name:'Tank Bigsby',pos:'RB'},
  ]},
  ny_financier:{name:'New York Financier',roster:[
    {name:'Justin Herbert',pos:'QB'},{name:'Bucky Irving',pos:'RB'},{name:"De'Von Achane",pos:'RB'},
    {name:'DeVonta Smith',pos:'WR'},{name:'Puka Nacua',pos:'WR'},{name:'Sam LaPorta',pos:'TE'},
    {name:'Breece Hall',pos:'RB'},{name:'Chimere Dike',pos:'WR'},{name:'Dak Prescott',pos:'QB'},
    {name:'Jameson Williams',pos:'WR'},{name:'Quentin Johnston',pos:'WR'},{name:'Alec Pierce',pos:'WR'},
    {name:'Jadarian Price',pos:'RB'},{name:'Ricky Pearsall',pos:'WR'},{name:'Germie Bernard',pos:'WR'},
  ]},
  owens:{name:"Owen's Otherworldly Te...",roster:[
    {name:'Lamar Jackson',pos:'QB'},{name:'Aaron Jones Sr.',pos:'RB'},{name:'Derrick Henry',pos:'RB'},
    {name:'Davante Adams',pos:'WR'},{name:'Cooper Kupp',pos:'WR'},{name:'Dalton Schultz',pos:'TE'},
    {name:'Kimani Vidal',pos:'RB'},{name:'RJ Harvey',pos:'RB'},{name:'Jauan Jennings',pos:'WR'},
    {name:'Dallas Goedert',pos:'TE'},{name:'C.J. Stroud',pos:'QB'},{name:'Omar Cooper Jr.',pos:'WR'},
    {name:'Jayden Higgins',pos:'WR'},{name:'Tyler Allgeier',pos:'RB'},
  ]},
  najee:{name:'Najee Germany',roster:[
    {name:'Josh Allen',pos:'QB'},{name:'Josh Jacobs',pos:'RB'},{name:'TreVeyon Henderson',pos:'RB'},
    {name:'Nico Collins',pos:'WR'},{name:'Mike Evans',pos:'WR'},{name:'Tucker Kraft',pos:'TE'},
    {name:'Makai Lemon',pos:'WR'},{name:'Deebo Samuel',pos:'WR'},{name:'Romeo Doubs',pos:'WR'},
    {name:'Jaylen Warren',pos:'RB'},{name:'T.J. Hockenson',pos:'TE'},{name:'Harold Fannin Jr.',pos:'TE'},
    {name:'Tyler Shough',pos:'QB'},{name:'Jonathan Brooks',pos:'RB'},{name:'Tank Dell',pos:'WR'},
  ]},
  ray_rice:{name:'Ray Rice Is Innocent',roster:[
    {name:'Kyler Murray',pos:'QB'},{name:'Braelon Allen',pos:'RB'},{name:'Tyrone Tracy Jr.',pos:'RB'},
    {name:'Amon-Ra St. Brown',pos:'WR'},{name:'George Pickens',pos:'WR'},{name:'Hunter Henry',pos:'TE'},
    {name:'Chuba Hubbard',pos:'RB'},{name:'Trevor Lawrence',pos:'QB'},{name:'Kenneth Walker III',pos:'RB'},
    {name:'Tee Higgins',pos:'WR'},{name:'Ladd McConkey',pos:'WR'},{name:'Jayden Reed',pos:'WR'},
    {name:'Jake Ferguson',pos:'TE'},{name:'Isiah Pacheco',pos:'RB'},
  ]},
  jagkobi:{name:'JAGkobi Never Broke Ag...',roster:[
    {name:'Bo Nix',pos:'QB'},{name:'Travis Etienne Jr.',pos:'RB'},{name:'Javonte Williams',pos:'RB'},
    {name:'Rashee Rice',pos:'WR'},{name:'Jakobi Meyers',pos:'WR'},{name:'Trey McBride',pos:'TE'},
    {name:'Jordan Addison',pos:'WR'},{name:'Khalil Shakir',pos:'WR'},{name:"Wan'Dale Robinson",pos:'WR'},
    {name:'James Conner',pos:'RB'},{name:'MarShawn Lloyd',pos:'RB'},{name:'Daniel Jones',pos:'QB'},
    {name:'Juwan Johnson',pos:'TE'},{name:'Kyle Monangai',pos:'RB'},{name:'Jonah Coleman',pos:'RB'},
    {name:'Jalen Coker',pos:'WR'},{name:'Mike Washington Jr.',pos:'WR'},
  ]},
  tomlin:{name:'Straight Outta Tomlin',roster:[
    {name:'Jalen Hurts',pos:'QB'},{name:"D'Andre Swift",pos:'RB'},{name:'Saquon Barkley',pos:'RB'},
    {name:'Jaxon Smith-Njigba',pos:'WR'},{name:'Matthew Golden',pos:'WR'},{name:'Oronde Gadsden',pos:'TE'},
    {name:'Garrett Wilson',pos:'WR'},{name:'Tyreek Hill',pos:'WR'},{name:'Matthew Stafford',pos:'QB'},
    {name:'Brian Thomas Jr.',pos:'WR'},{name:'J.K. Dobbins',pos:'RB'},{name:'KC Concepcion',pos:'WR'},
    {name:'Zach Charbonnet',pos:'RB'},{name:'Dalton Kincaid',pos:'TE'},{name:'Keaton Mitchell',pos:'RB'},
    {name:'David Njoku',pos:'TE'},{name:'Alvin Kamara',pos:'RB'},
  ]},
  annej:{name:'Annej',roster:[
    {name:'Jared Goff',pos:'QB'},{name:'Christian McCaffrey',pos:'RB'},{name:'Rico Dowdle',pos:'RB'},
    {name:'Rashid Shaheed',pos:'WR'},{name:'A.J. Brown',pos:'WR'},{name:'Travis Kelce',pos:'TE'},
    {name:'Isaiah Likely',pos:'TE'},{name:'Baker Mayfield',pos:'QB'},{name:'Chris Olave',pos:'WR'},
    {name:'Brandon Aiyuk',pos:'WR'},{name:'David Montgomery',pos:'RB'},{name:'Jordyn Tyson',pos:'WR'},
    {name:'Chris Godwin Jr.',pos:'WR'},{name:'Tyjae Spears',pos:'RB'},{name:'Brian Robinson Jr.',pos:'RB'},
  ]},
  hamsal:{name:'HamSal',roster:[
    {name:'Brock Purdy',pos:'QB'},{name:'Bijan Robinson',pos:'RB'},{name:'Kareem Hunt',pos:'RB'},
    {name:'Zay Flowers',pos:'WR'},{name:'Xavier Worthy',pos:'WR'},{name:'Tyler Warren',pos:'TE'},
    {name:'Stefon Diggs',pos:'WR'},{name:'Jordan Love',pos:'QB'},{name:'Jonathan Taylor',pos:'RB'},
    {name:'DK Metcalf',pos:'WR'},{name:'Troy Franklin',pos:'WR'},{name:'Darren Waller',pos:'TE'},
    {name:'Parker Washington',pos:'WR'},{name:'Rhamondre Stevenson',pos:'RB'},{name:'Jerry Jeudy',pos:'WR'},
    {name:'Jalen McMillan',pos:'WR'},
  ]},
};

function applySavedRosters(){
  try{
    const saved=JSON.parse(localStorage.getItem("dc_rosters_v1")||"null");
    if(!saved||typeof saved!=="object")return;
    Object.entries(saved).forEach(([k,roster])=>{
      if(TEAMS[k]&&Array.isArray(roster)){
        TEAMS[k].roster=roster.filter(p=>p&&p.name).map(p=>({name:p.name,pos:(p.pos||"WR").toUpperCase().replace("/ST","")}));
      }
    });
  }catch(e){console.warn("Could not load saved rosters",e);}
}

const OWNER={};
const OWNER_FUZZY={};
function fuzzyName(n){
  return n.toLowerCase()
    .replace(/[.'\-]/g,"")
    .replace(/\b(jr|sr|ii|iii|iv|v)\b/g,"")
    .replace(/\s+/g," ")
    .trim();
}
function syncOwnerMaps(){
  Object.keys(OWNER).forEach(k=>delete OWNER[k]);
  Object.keys(OWNER_FUZZY).forEach(k=>delete OWNER_FUZZY[k]);
  Object.entries(TEAMS).forEach(([k,t])=>t.roster.forEach(r=>{
    OWNER[r.name.toLowerCase()]=t.name;
    OWNER_FUZZY[fuzzyName(r.name)]=t.name;
  }));
}
applySavedRosters();
syncOwnerMaps();

function getP(name){const n=fuzzyName(name);return PLAYERS.find(p=>fuzzyName(p.name)===n)||null;}
function ps(name){const p=getP(name);return p?p.score:42;}
function escHtml(s){return String(s??"").replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));}
function escAttr(s){return escHtml(s);}
function ownerOfPlayer(p){return OWNER_FUZZY[fuzzyName(p.name)]||OWNER[p.name.toLowerCase()]||"";}
function saveRosterState(){
  const out={};
  Object.entries(TEAMS).forEach(([k,t])=>{out[k]=t.roster.map(p=>({name:p.name,pos:p.pos}));});
  localStorage.setItem("dc_rosters_v1",JSON.stringify(out));
}
function refreshRosterViews(){
  syncOwnerMaps();
  saveRosterState();
  if(currentPage==="rankings")renderRankings();
  if(currentPage==="waivers")renderWaivers();
  if(currentPage==="rosters")initRosters();
  if(currentPage==="editor")initEditor();
  if(currentPage==="power")initPower();
  if(currentPage==="improve")initImprove();
}
function removePlayerFromAllRosters(name){
  let removed=null;
  Object.values(TEAMS).forEach(t=>{
    const idx=t.roster.findIndex(r=>fuzzyName(r.name)===fuzzyName(name));
    if(idx>-1)removed=t.roster.splice(idx,1)[0];
  });
  return removed;
}
function rosterPlayerFromRanked(p){return{name:p.name,pos:(p.pos||"WR").replace("/ST","")};}

// ── Team scoring ──
function teamScore(key){
  const byPos={};
  TEAMS[key].roster.forEach(p=>{if(!byPos[p.pos])byPos[p.pos]=[];byPos[p.pos].push(ps(p.name));});
  let t=0;
  Object.entries(byPos).forEach(([pos,sc])=>{sc.sort((a,b)=>b-a);const top=pos==="WR"||pos==="RB"?3:pos==="QB"||pos==="TE"?1:0;sc.slice(0,top).forEach(s=>t+=s);});
  return t;
}

// ── Pos badge ──
function pb(pos){const cl=pos.replace("/ST","").replace("/","");return `<span class="badge b-${cl||"K"}">${pos}</span>`;}

// ── Tier badge ──
function tier(s){
  if(s>=88)return'<span class="badge b-elite">ELITE</span>';
  if(s>=74)return'<span class="badge b-great">TOP TIER</span>';
  if(s>=58)return'<span class="badge b-solid">SOLID</span>';
  return'<span class="badge b-depth">DEPTH</span>';
}

// ── Bar color ──
function barColor(s){return s>=74?"sg-high":s>=55?"sg-mid":"sg-low";}

function cssVar(name){return getComputedStyle(document.documentElement).getPropertyValue(name).trim();}
function chartText(){return cssVar("--text2")||"#526071";}
function chartMuted(){return cssVar("--text3")||"#8793a5";}
function chartGrid(){return "rgba(15,23,42,.09)";}
function resetChart(id){
  const el=document.getElementById(id);
  const existing=el&&Chart.getChart?Chart.getChart(el):null;
  if(existing)existing.destroy();
}
function windowBucket(profile, scoreRank){
  if(scoreRank<=4&&profile.avgAge<=27.4)return{label:"Young Contender",cls:"window-young",color:"rgba(37,99,235,.72)"};
  if(scoreRank<=4)return{label:"Win-Now Contender",cls:"window-contender",color:"rgba(5,150,105,.72)"};
  if(profile.avgAge>=29)return{label:"Aging Core",cls:"window-aging",color:"rgba(202,138,4,.72)"};
  if(profile.avgAge<=26.5)return{label:"Rebuild / Ascending",cls:"window-rebuild",color:"rgba(220,38,38,.62)"};
  return{label:"Balanced Middle",cls:"",color:"rgba(124,58,237,.62)"};
}
function dynastyWindowProfiles(){
  const base=Object.entries(TEAMS).map(([k,t])=>{
    const scored=t.roster.map(r=>({roster:r,p:getP(r.name),score:ps(r.name)})).sort((a,b)=>b.score-a.score);
    const core=scored.filter(x=>x.p&&Number(x.p.age)).slice(0,8);
    const avgAge=core.length?Math.round(core.reduce((s,x)=>s+Number(x.p.age),0)/core.length*10)/10:0;
    const top75=scored.filter(x=>x.p&&x.p.rank<=75).length;
    return{k,name:t.name,score:teamScore(k),avgAge,top75,coreCount:core.length};
  }).sort((a,b)=>b.score-a.score);
  return base.map((p,i)=>({...p,scoreRank:i+1,window:windowBucket(p,i+1)}));
}

// ── Sparkline ──
function spark(history,color="#2563eb"){
  const w=60,h=22,mn=Math.min(...history),mx=Math.max(...history),rng=mx-mn||1;
  const pts=history.map((v,i)=>`${Math.round(i*(w/(history.length-1)))},${Math.round(h-((v-mn)/rng)*(h-2)-1)}`).join(" ");
  return `<svg class="spark" width="${w}" height="${h}" viewBox="0 0 ${w} ${h}"><polyline points="${pts}" fill="none" stroke="${color}" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>`;
}

// ═══════════════════════════════════════════════
// NAVIGATION
// ═══════════════════════════════════════════════
let currentPage="home";
function go(page){
  document.querySelectorAll(".page").forEach(p=>p.classList.remove("active"));
  document.querySelectorAll(".nav-item").forEach(n=>n.classList.remove("active"));
  document.getElementById("page-"+page).classList.add("active");
  const pageMap={home:0,power:1,rosters:2,improve:3,rankings:4,waivers:5,trends:6,metrics:7,trade:8,finder:9,editor:10};
  document.querySelectorAll(".nav-item")[pageMap[page]]?.classList.add("active");
  currentPage=page;
  const inits={power:initPower,rosters:initRosters,improve:initImprove,rankings:renderRankings,waivers:initWaivers,trends:initTrends,metrics:initMetrics,trade:initTrade,finder:initFinder,editor:initEditor};
  if(inits[page])inits[page]();
}

// ═══════════════════════════════════════════════
// HOME
// ═══════════════════════════════════════════════
function initHome(){
  // Quick power rankings
  const sorted=Object.entries(TEAMS).map(([k,t])=>({k,name:t.name,score:teamScore(k)})).sort((a,b)=>b.score-a.score);
  const max=sorted[0].score;
  document.getElementById("home-pr").innerHTML=sorted.slice(0,5).map((t,i)=>`
    <div class="pr-row" onclick="go('power')">
      <div class="pr-num ${i===0?"gold":i===1?"silver":i===2?"bronze":""}">${i+1}</div>
      <div class="pr-body">
        <div class="pr-name">${t.name}</div>
        <div class="pr-bar"><div class="pr-bar-fill sg-high" style="width:${Math.round(t.score/max*100)}%"></div></div>
      </div>
      <div class="pr-score">${t.score}</div>
    </div>`).join("");

  // Trending players
  const trending=PLAYERS.filter(p=>p.rank>0).slice(0,20).sort((a,b)=>Math.abs(b.trend)-Math.abs(a.trend)).slice(0,6);
  document.getElementById("home-trending").innerHTML=trending.map(p=>`
    <div class="waiver-row">
      ${pb(p.pos)}
      <div style="flex:1">
        <div style="font-size:13px;font-weight:500">${p.name}</div>
        <div style="font-size:11px;color:var(--text2);font-family:'JetBrains Mono',monospace">${p.nfl} · #${p.rank}</div>
      </div>
      ${spark(p.history,p.trend>0?"#059669":"#dc2626")}
      <span class="badge ${p.trend>0?"b-up":"b-down"}">${p.trend>0?"+":""}${p.trend}</span>
    </div>`).join("");

  // Positional value distribution
  const posCounts={QB:0,RB:0,WR:0,TE:0};
  const posVal={QB:0,RB:0,WR:0,TE:0};
  Object.values(TEAMS).forEach(t=>t.roster.forEach(r=>{const p=getP(r.name);if(p&&posCounts[p.pos]!==undefined){posCounts[p.pos]++;posVal[p.pos]+=p.score;}}));
  const ctx1=document.getElementById("pos-dist-chart").getContext("2d");
  new Chart(ctx1,{type:"doughnut",data:{labels:["QB","RB","WR","TE"],datasets:[{data:[posVal.QB,posVal.RB,posVal.WR,posVal.TE],backgroundColor:["rgba(192,132,252,.7)","rgba(74,222,128,.7)","rgba(56,189,248,.7)","rgba(251,146,60,.7)"],borderWidth:0}]},options:{responsive:true,maintainAspectRatio:false,plugins:{legend:{position:"right",labels:{color:"#475569",font:{size:11}}}}}});

  // Team value bar chart
  const ctx2=document.getElementById("team-val-chart").getContext("2d");
  const tscores=sorted.map(t=>t.score);
  const tnames=sorted.map(t=>t.name.split(" ").slice(0,2).join(" "));
  new Chart(ctx2,{type:"bar",data:{labels:tnames,datasets:[{data:tscores,backgroundColor:tscores.map((_,i)=>`hsla(${180+i*15},80%,60%,0.7)`),borderRadius:4,borderWidth:0}]},options:{indexAxis:"y",responsive:true,maintainAspectRatio:false,plugins:{legend:{display:false}},scales:{x:{ticks:{color:"#64748b"},grid:{color:"rgba(15,23,42,.08)"}},y:{ticks:{color:"#475569",font:{size:10}},grid:{display:false}}}}});

  // Activity feed
  const acts=[
    {dot:"#059669",text:"NO RAGRETS selected as top dynasty team by consensus AI analysis",time:"2h ago"},
    {dot:"#2563eb",text:"HamSal — Bijan Robinson leads all RBs with dynasty score of 97",time:"5h ago"},
    {dot:"#ffd700",text:"Puka Nacua crowned #1 overall after 96.3 PFF receiving grade over 2 seasons",time:"1d ago"},
    {dot:"#b06cff",text:"Jeremiyah Love rises to #11 overall — youngest elite RB in the pool at age 20",time:"1d ago"},
    {dot:"#ff9a3c",text:"Rankings updated: SI Fabiano post-draft top 200 published (May 14)",time:"2d ago"},
    {dot:"#38bdf8",text:"PFF Nathan Jahnke 1QB dynasty top 200 updated (May 4)",time:"11d ago"},
  ];
  document.getElementById("activity-feed").innerHTML=acts.map(a=>`
    <div class="activity-row">
      <div class="act-dot" style="background:${a.dot}"></div>
      <div><div class="act-text">${a.text}</div><div class="act-time">${a.time}</div></div>
    </div>`).join("");
}

// ═══════════════════════════════════════════════
// POWER RANKINGS
// ═══════════════════════════════════════════════
let powerSel=null;
function initPower(){
  const sorted=Object.entries(TEAMS).map(([k,t])=>({k,name:t.name,score:teamScore(k)})).sort((a,b)=>b.score-a.score);
  const max=sorted[0].score;
  const medals=["🥇","🥈","🥉"];
  document.getElementById("power-list").innerHTML=sorted.map((t,i)=>{
    const top3=TEAMS[t.k].roster.map(r=>({n:r.name,s:ps(r.name)})).sort((a,b)=>b.s-a.s).slice(0,3);
    const barGrad=i===0?"sg-high":i<4?"sg-mid":"sg-low";
    return `<div class="pr-row" onclick="selectPower('${t.k}')">
      <div class="pr-num ${i===0?"gold":i===1?"silver":i===2?"bronze":""}">${medals[i]||i+1}</div>
      <div class="pr-body">
        <div class="pr-name">${t.name}</div>
        <div class="pr-tags">${top3.map(p=>`<span class="badge b-depth">${p.n.split(" ").pop()}</span>`).join("")}</div>
        <div class="pr-bar"><div class="pr-bar-fill ${barGrad}" style="width:${Math.round(t.score/max*100)}%"></div></div>
      </div>
      <div><div class="pr-score">${t.score}</div><div class="pr-delta" style="color:var(--text3)">pts</div></div>
    </div>`;}).join("");

  // Radar chart — avg score by pos for top 6 teams
  const top6=sorted.slice(0,6);
  const radarData=top6.map(t=>{
    const byPos={QB:[],RB:[],WR:[],TE:[]};
    TEAMS[t.k].roster.forEach(r=>{
      const pos=r.pos.replace("/ST","");
      if(byPos[pos]!==undefined) byPos[pos].push(ps(r.name));
    });
    return["QB","RB","WR","TE"].map(pos=>{
      const sc=byPos[pos].slice().sort((a,b)=>b-a);
      const top=pos==="WR"||pos==="RB"?3:1;
      const use=sc.slice(0,top);
      return use.length?Math.round(use.reduce((a,b)=>a+b,0)/use.length):0;
    });
  });
  const rctx=document.getElementById("radar-chart").getContext("2d");
  new Chart(rctx,{type:"radar",data:{labels:["QB","RB","WR","TE"],datasets:top6.map((t,i)=>({label:t.name.split(" ")[0],data:radarData[i],borderColor:`hsl(${180+i*40},80%,60%)`,backgroundColor:`hsla(${180+i*40},80%,60%,0.05)`,borderWidth:1.5,pointRadius:3}))},options:{responsive:true,maintainAspectRatio:false,scales:{r:{ticks:{color:"#64748b",font:{size:9},backdropColor:"transparent"},grid:{color:"rgba(15,23,42,.08)"},angleLines:{color:"rgba(15,23,42,.08)"},pointLabels:{color:"#475569",font:{size:11}}}},plugins:{legend:{labels:{color:"#475569",font:{size:10},boxWidth:10}}}}});
}

function selectPower(key){
  powerSel=key;
  const team=TEAMS[key];

  // Build scored roster
  const scored = team.roster.map(r=>({...r, p:getP(r.name), score:ps(r.name)})).sort((a,b)=>b.score-a.score);

  // ── League-wide positional rankings ──
  // For each position, rank ALL players across ALL teams
  const leaguePos = {};
  Object.entries(TEAMS).forEach(([k,t])=>{
    t.roster.forEach(r=>{
      const pos = r.pos.replace("/ST","");
      if(!["QB","RB","WR","TE"].includes(pos)) return;
      if(!leaguePos[pos]) leaguePos[pos]=[];
      leaguePos[pos].push({name:r.name, teamKey:k, teamName:TEAMS[k].name, score:ps(r.name), p:getP(r.name)});
    });
  });
  // Sort each position by score desc, assign league rank
  Object.keys(leaguePos).forEach(pos=>{
    leaguePos[pos].sort((a,b)=>b.score-a.score);
    leaguePos[pos].forEach((p,i)=>p.leagueRank=i+1);
  });

  // For this team's players, find their league rank at their position
  const withLeagueRank = scored.map(r=>{
    const pos = r.pos.replace("/ST","");
    if(!leaguePos[pos]) return {...r, leagueRank:null, leagueRankOf:null};
    const entry = leaguePos[pos].find(p=>p.name===r.name);
    return {...r, leagueRank: entry?entry.leagueRank:null, leagueRankOf: leaguePos[pos]?.length||null};
  });

  // ── Positional summary: rank teams by avg of ALL players at each position ──
  const posOrder=["QB","RB","WR","TE"];
  const posTopN={QB:99,RB:99,WR:99,TE:99};
  const posSummary = posOrder.map(pos=>{
    const teamPlayers = withLeagueRank.filter(r=>r.pos===pos);
    const n = posTopN[pos];
    const allTeamAvgScores = Object.entries(TEAMS).map(([k,t])=>{
      const pl = t.roster.filter(r=>r.pos===pos).map(r=>ps(r.name)).sort((a,b)=>b-a);
      const avg = pl.length ? Math.round(pl.reduce((a,b)=>a+b,0)/pl.length) : 0;
      return {teamKey:k, teamName:TEAMS[k].name, avg, count:pl.length};
    }).sort((a,b)=>b.avg-a.avg);
    const teamPosRank = allTeamAvgScores.findIndex(t=>t.teamKey===key)+1;
    const myEntry = allTeamAvgScores.find(t=>t.teamKey===key);
    return {pos, teamPlayers, teamPosRank, total:allTeamAvgScores.length, allTeamAvgScores, myEntry, n};
  });

  const byPos={QB:[],RB:[],WR:[],TE:[],K:[],DEF:[]};
  withLeagueRank.forEach(r=>{const pos=r.pos.replace("/ST","");if(!byPos[pos])byPos[pos]=[];byPos[pos].push(r);});

  // Rank badge color
  function rankColor(r, total){
    const pct = r/total;
    if(pct<=0.15) return "var(--accent)";
    if(pct<=0.33) return "var(--green)";
    if(pct<=0.60) return "var(--gold)";
    return "var(--red)";
  }

  let html=`<div class="card mb">
    <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:16px;flex-wrap:wrap;gap:8px">
      <div style="font-family:'Syne',sans-serif;font-size:20px;font-weight:700">${team.name}</div>
      <div style="font-family:'JetBrains Mono',monospace;font-size:13px;color:var(--text2)">Roster value: <strong style="color:var(--accent)">${teamScore(key)}</strong></div>
    </div>

    <!-- Positional rank summary cards -->
    <div style="display:grid;grid-template-columns:repeat(4,1fr);gap:10px;margin-bottom:20px">
    ${posOrder.map(pos=>{
      const s = posSummary.find(p=>p.pos===pos);
      const col = rankColor(s.teamPosRank, s.total);
      const medal = s.teamPosRank===1?"🥇":s.teamPosRank===2?"🥈":s.teamPosRank===3?"🥉":"";
      const topPlayer = s.teamPlayers.sort((a,b)=>b.score-a.score)[0];
      return `<div style="background:var(--bg3);border:1px solid var(--border);border-radius:10px;padding:12px;text-align:center">
        <div style="font-size:10px;font-family:'JetBrains Mono',monospace;text-transform:uppercase;letter-spacing:.1em;color:var(--text3);margin-bottom:6px">${pos}</div>
        <div style="font-family:'Syne',sans-serif;font-size:26px;font-weight:800;color:${col};line-height:1">${medal||("#"+s.teamPosRank)}</div>
        <div style="font-size:10px;color:var(--text3);margin-top:2px">of ${s.total} teams</div>
        <div style="font-size:11px;color:var(--text2);margin-top:6px;font-weight:500">${s.myEntry?"Avg: "+s.myEntry.avg:"—"}</div>
        <div style="font-size:10px;color:var(--text3)">${s.myEntry?s.myEntry.count+" players avg":""}</div>
      </div>`;
    }).join("")}
    </div>

    <!-- League-wide positional rankings: team avg bars + individual player chips -->
    <div style="margin-bottom:20px">
      ${posOrder.map(pos=>{
        const s = posSummary.find(p=>p.pos===pos);
        // All players at this position across entire league, sorted by score
        const allLeaguePlayers = Object.entries(TEAMS).flatMap(([k,t])=>
          t.roster.filter(r=>r.pos===pos).map(r=>({name:r.name,teamKey:k,teamName:TEAMS[k].name,score:ps(r.name)}))
        ).sort((a,b)=>b.score-a.score);
        return `<div style="margin-bottom:22px">

          <!-- Section header -->
          <div style="font-size:10px;font-family:'JetBrains Mono',monospace;text-transform:uppercase;letter-spacing:.12em;color:var(--text3);margin-bottom:10px;padding-bottom:5px;border-bottom:1px solid var(--border);display:flex;justify-content:space-between">
            <span>${pos} — Team averages (all roster players)</span>
            <span>${allLeaguePlayers.length} players across league</span>
          </div>

          <!-- Team average bars -->
          <div style="display:flex;flex-direction:column;gap:4px;margin-bottom:14px">
          ${s.allTeamAvgScores.map((t,i)=>{
            const isMe = t.teamKey===key;
            const col = rankColor(i+1, s.allTeamAvgScores.length);
            const barW = s.allTeamAvgScores[0].avg > 0 ? Math.round((t.avg/s.allTeamAvgScores[0].avg)*100) : 0;
            const topPl = TEAMS[t.teamKey].roster.filter(r=>r.pos===pos).map(r=>({name:r.name,score:ps(r.name)})).sort((a,b)=>b.score-a.score).slice(0,3);
            return `<div style="display:flex;align-items:center;gap:8px;padding:5px 10px;background:${isMe?"rgba(0,229,255,0.07)":"var(--bg3)"};border:1px solid ${isMe?"var(--accent)":"var(--border)"};border-radius:7px">
              <span style="font-family:'JetBrains Mono',monospace;font-size:11px;font-weight:700;color:${col};min-width:26px">${i===0?"🥇":i===1?"🥈":i===2?"🥉":"#"+(i+1)}</span>
              <span style="font-size:12px;font-weight:${isMe?"700":"500"};color:${isMe?"var(--accent)":"var(--text)"};min-width:150px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis">${t.teamName}</span>
              <div style="flex:1;max-width:100px"><div style="height:3px;background:var(--bg4);border-radius:2px"><div style="height:3px;border-radius:2px;background:${col};width:${barW}%"></div></div></div>
              <span style="font-family:'JetBrains Mono',monospace;font-size:11px;font-weight:600;color:${col};min-width:32px">${t.avg}</span>
              <span style="font-size:10px;color:var(--text3);flex:1;white-space:nowrap;overflow:hidden;text-overflow:ellipsis">${topPl.map(p=>p.name.split(" ").slice(-1)[0]+" ("+p.score+")").join(" · ")}</span>
            </div>`;
          }).join("")}
          </div>

          <!-- Individual player chips ranked across entire league -->
          <div style="font-size:10px;font-family:'JetBrains Mono',monospace;text-transform:uppercase;letter-spacing:.08em;color:var(--text3);margin-bottom:6px">All ${pos}s ranked league-wide — your players highlighted</div>
          <div style="display:flex;flex-wrap:wrap;gap:4px">
          ${allLeaguePlayers.map((p,i)=>{
            const isMe = p.teamKey===key;
            const col = rankColor(i+1, allLeaguePlayers.length);
            return `<div title="${p.name} · ${p.teamName} · Score: ${p.score}" style="display:inline-flex;align-items:center;gap:4px;background:${isMe?"rgba(0,229,255,0.12)":"var(--bg3)"};border:1px solid ${isMe?"rgba(0,229,255,0.5)":"var(--border)"};border-radius:6px;padding:4px 8px;cursor:default;transition:border-color .15s" onmouseover="this.style.borderColor='var(--border2)'" onmouseout="this.style.borderColor='${isMe?"rgba(0,229,255,0.5)":"var(--border)"}'">
              <span style="font-family:'JetBrains Mono',monospace;font-size:10px;font-weight:700;color:${col};min-width:20px">#${i+1}</span>
              <span style="font-size:11px;font-weight:${isMe?"700":"400"};color:${isMe?"var(--accent)":"var(--text)"}">${p.name.split(" ").slice(-1)[0]}</span>
              <span style="font-size:10px;color:var(--text3)">${p.score}</span>
            </div>`;
          }).join("")}
          </div>
        </div>`;
      }).join("")}
    </div>

    <!-- Full roster table -->
    <div style="font-family:'Syne',sans-serif;font-size:14px;font-weight:700;margin-bottom:10px;color:var(--text2)">Full Roster</div>
    <div class="tbl-wrap"><table>
    <thead><tr><th>Pos</th><th>Player</th><th>NFL</th><th>Age</th><th>Rank</th><th>Score</th><th>League Pos Rank</th><th>Tier</th><th>Trend</th></tr></thead>
    <tbody>`;

  posOrder.concat(["K","DEF"]).forEach(pos=>{
    if(!byPos[pos]||!byPos[pos].length)return;
    byPos[pos].forEach(r=>{
      const lrk = r.leagueRank;
      const lof = r.leagueRankOf;
      const lrkColor = lrk&&lof ? rankColor(lrk,lof) : "var(--text3)";
      const lrkLabel = lrk&&lof ? `<span style="font-family:'JetBrains Mono',monospace;font-size:12px;font-weight:600;color:${lrkColor}">#${lrk}</span><span style="font-size:10px;color:var(--text3)"> of ${lof}</span>` : "—";
      html+=`<tr onclick="showPlayer(this.dataset.pn)" data-pn="${r.name}">
        <td>${pb(r.pos)}</td>
        <td style="font-weight:500">${r.name}</td>
        <td class="mono" style="font-size:11px;color:var(--text2)">${r.p?r.p.nfl:"—"}</td>
        <td class="mono" style="font-size:11px;color:var(--text2)">${r.p?r.p.age:"—"}</td>
        <td class="mono" style="color:var(--text3)">${r.p?"#"+r.p.rank:"—"}</td>
        <td><div style="display:flex;align-items:center;gap:6px"><span class="mono" style="font-weight:600">${r.score}</span><div class="sbar" style="width:50px"><div class="sbar-fill ${barColor(r.score)}" style="width:${r.score}%"></div></div></div></td>
        <td>${lrkLabel}</td>
        <td>${r.p?tier(r.score):"<span class='badge b-depth'>—</span>"}</td>
        <td>${r.p?spark(r.p.history,r.p.trend>0?"#059669":"#dc2626"):""} ${r.p?`<span class="badge ${r.p.trend>0?"b-up":"b-down"}">${r.p.trend>0?"+":""}${r.p.trend}</span>`:""}</td>
      </tr>`;
    });
  });
  html+=`</tbody></table></div></div>`;
  document.getElementById("power-detail").innerHTML=html;
  document.getElementById("power-detail").scrollIntoView({behavior:"smooth"});
}

// ═══════════════════════════════════════════════
// ROSTERS
// ═══════════════════════════════════════════════
let rosterSel=null;
function initRosters(){
  document.getElementById("roster-team-grid").innerHTML=Object.entries(TEAMS).map(([k,t])=>`
    <div class="team-tile ${rosterSel===k?"sel":""}" onclick="selectRoster('${k}')">
      <div style="font-size:13px;font-weight:600;font-family:'Syne',sans-serif">${t.name}</div>
      <div style="font-size:11px;color:var(--text2);font-family:'JetBrains Mono',monospace;margin-top:4px">${t.roster.length} players · ${teamScore(k)} pts</div>
    </div>`).join("");
}
function selectRoster(key){
  rosterSel=key;
  initRosters();
  const team=TEAMS[key];
  const byPos={QB:[],RB:[],WR:[],TE:[],K:[],DEF:[]};
  team.roster.forEach(r=>{const pos=r.pos.replace("/ST","");if(!byPos[pos])byPos[pos]=[];byPos[pos].push(r);});
  const posOrder=["QB","RB","WR","TE","K","DEF"];
  let html=`<div class="card mb">
    <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:16px">
      <div style="font-family:'Syne',sans-serif;font-size:20px;font-weight:700">${team.name}</div>
      <div style="font-family:'JetBrains Mono',monospace;font-size:13px;color:var(--text2)">Roster value: <strong style="color:var(--accent)">${teamScore(key)}</strong></div>
    </div>
    <div class="tbl-wrap"><table>
    <thead><tr><th>Pos</th><th>Player</th><th>NFL</th><th>Age</th><th>Rank</th><th>Score</th><th>Tier</th><th>Trend</th></tr></thead>
    <tbody>`;
  posOrder.forEach(pos=>{
    if(!byPos[pos]||!byPos[pos].length)return;
    byPos[pos].forEach(r=>{
      const p=getP(r.name);
      html+=`<tr onclick="showPlayer(this.dataset.pn)" data-pn="${r.name}">
        <td>${pb(r.pos)}</td>
        <td style="font-weight:500;cursor:pointer">${r.name}</td>
        <td class="mono" style="font-size:11px;color:var(--text2)">${p?p.nfl:"—"}</td>
        <td class="mono" style="font-size:11px;color:var(--text2)">${p?p.age:"—"}</td>
        <td class="mono" style="color:var(--text3)">${p?"#"+p.rank:"—"}</td>
        <td><div style="display:flex;align-items:center;gap:6px"><span class="mono" style="font-weight:600">${p?p.score:"—"}</span>${p?`<div class="sbar" style="width:50px"><div class="sbar-fill ${barColor(p.score)}" style="width:${p.score}%"></div></div>`:""}</div></td>
        <td>${p?tier(p.score):"<span class='badge b-depth'>—</span>"}</td>
        <td>${p?spark(p.history,p.trend>0?"#059669":"#dc2626"):""} ${p?`<span class="badge ${p.trend>0?"b-up":"b-down"}">${p.trend>0?"+":""}${p.trend}</span>`:""}</td>
      </tr>`;
    });
  });
  html+=`</tbody></table></div></div>`;
  document.getElementById("roster-detail").innerHTML=html;
  document.getElementById("roster-detail").scrollIntoView({behavior:"smooth"});
}

// ═══════════════════════════════════════════════
// TEAM IMPROVEMENTS
// ═══════════════════════════════════════════════
let improveKey=localStorage.getItem("dc_my_team")||null;
if(improveKey&&!TEAMS[improveKey])improveKey=null;

function saveMyTeam(k){
  improveKey=k;
  if(k)localStorage.setItem("dc_my_team",k);
  else localStorage.removeItem("dc_my_team");
  finderKey=k;
}

function impRankColor(rank,total){
  const pct=rank/total;
  if(pct<=0.25)return"var(--green)";
  if(pct<=0.5)return"var(--accent)";
  if(pct<=0.67)return"var(--gold)";
  return"var(--red)";
}

function getPosImprovementData(key){
  const posOrder=["QB","RB","WR","TE"];
  const starterTop={QB:1,RB:3,WR:3,TE:1};
  return posOrder.map(pos=>{
    const allTeams=Object.entries(TEAMS).map(([k,t])=>{
      const scores=t.roster.filter(r=>r.pos.replace("/ST","")===pos).map(r=>ps(r.name)).sort((a,b)=>b-a);
      const topN=starterTop[pos];
      const starterAvg=scores.length?Math.round(scores.slice(0,topN).reduce((a,b)=>a+b,0)/Math.min(topN,scores.length)):0;
      return{teamKey:k,starterAvg,count:scores.length};
    }).sort((a,b)=>b.starterAvg-a.starterAvg);
    const rank=allTeams.findIndex(t=>t.teamKey===key)+1;
    const myPlayers=TEAMS[key].roster.filter(r=>r.pos.replace("/ST","")===pos).map(r=>{
      const p=getP(r.name);
      return{name:r.name,pos:r.pos,score:ps(r.name),age:p?p.age:null,p};
    }).sort((a,b)=>b.score-a.score);
    const leagueStarterAvg=Math.round(allTeams.reduce((s,t)=>s+t.starterAvg,0)/allTeams.length);
    const myStarterAvg=myPlayers.length?Math.round(myPlayers.slice(0,starterTop[pos]).reduce((s,p)=>s+p.score,0)/Math.min(starterTop[pos],myPlayers.length)):0;
    const gap=myStarterAvg-leagueStarterAvg;
    return{pos,rank,total:allTeams.length,myPlayers,myStarterAvg,leagueStarterAvg,gap,depth:myPlayers.length};
  });
}

function improveLabel(rank,total){
  if(rank<=2)return{label:"Strength",badge:"b-great",color:"var(--green)"};
  if(rank<=Math.ceil(total/2))return{label:"Solid",badge:"b-solid",color:"var(--gold)"};
  if(rank<=total-3)return{label:"Needs work",badge:"b-down",color:"var(--orange)"};
  return{label:"Priority fix",badge:"b-down",color:"var(--red)"};
}

function posAdvice(pos,rank,total,myPlayers,gap,depth){
  const tips=[];
  const weak=myPlayers.filter(p=>p.score<55);
  const elite=myPlayers.filter(p=>p.score>=74);
  if(rank>=total-2)tips.push(`Your ${pos} room ranks near the bottom of the league. Target upgrades via trade or draft capital.`);
  else if(rank>Math.ceil(total/2))tips.push(`Below-average ${pos} production vs other teams. Look to add a higher-scored starter.`);
  if(gap<-8)tips.push(`Starter quality is about ${Math.abs(gap)} pts below league average — closing that gap should be a focus.`);
  if(depth<(pos==="WR"?5:pos==="RB"?4:2))tips.push(`Thin depth at ${pos} (${depth} rostered). Dynasty value often comes from depth at this spot.`);
  if(weak.length)tips.push(`Weakest links: ${weak.map(p=>p.name.split(" ").pop()+" (${p.score})").join(", ")}.`);
  if(!elite.length)tips.push(`No elite-tier ${pos} on roster (74+ score). One star can anchor the room.`);
  const ages=myPlayers.filter(p=>p.age).map(p=>p.age);
  if(ages.length&&ages.reduce((a,b)=>a+b,0)/ages.length>29)tips.push(`Aging ${pos} group — consider younger upside for long-term dynasty value.`);
  if(!tips.length)tips.push(`Competitive ${pos} room. Maintain depth and monitor trade windows.`);
  return tips;
}

function renderImprovements(key){
  const team=TEAMS[key];
  const sorted=Object.entries(TEAMS).map(([k])=>({k,score:teamScore(k)})).sort((a,b)=>b.score-a.score);
  const overallRank=sorted.findIndex(t=>t.k===key)+1;
  const score=teamScore(key);
  const {needs,strengths}=getTeamNeeds(key);
  const posData=getPosImprovementData(key);
  const top5=team.roster.map(r=>{const p=getP(r.name);return{score:ps(r.name),age:p?p.age:26};}).sort((a,b)=>b.score-a.score).slice(0,5);
  const youthAvg=top5.length?Math.round(top5.reduce((s,p)=>s+p.age,0)/top5.length*10)/10:0;
  const eliteCount=team.roster.filter(r=>ps(r.name)>=80).length;
  const depthCount=team.roster.filter(r=>ps(r.name)<50).length;

  const priorities=[];
  posData.filter(p=>p.rank>=9).forEach(p=>{
    priorities.push({sev:"high",title:`Upgrade ${p.pos}`,text:posAdvice(p.pos,p.rank,p.total,p.myPlayers,p.gap,p.depth)[0]});
  });
  posData.filter(p=>p.rank>=6&&p.rank<9).forEach(p=>{
    priorities.push({sev:"med",title:`Improve ${p.pos}`,text:`Ranked #${p.rank} of ${p.total} — starter avg ${p.myStarterAvg} vs league ${p.leagueStarterAvg}.`});
  });
  if(youthAvg>=29)priorities.push({sev:"med",title:"Roster aging at the top",text:`Top-5 players average ${youthAvg} years old. Youth adds long-term upside in dynasty.`});
  if(eliteCount<=1)priorities.push({sev:"med",title:"Star power",text:`Only ${eliteCount} elite player(s) (80+ score). Building around 1–2 studs helps in trades and contention.`});
  if(depthCount>=6)priorities.push({sev:"low",title:"Replaceable depth",text:`${depthCount} players score under 50 — consider consolidating into a starter upgrade.`});
  if(!priorities.length)priorities.push({sev:"low",title:"Stay aggressive",text:"No glaring holes. Target buy-low windows and keep depth on the waiver wire."});

  const sevStyle={high:"var(--red)",med:"var(--gold)",low:"var(--text2)"};

  let html=`<div class="card mb">
    <div style="display:flex;align-items:flex-start;justify-content:space-between;flex-wrap:wrap;gap:16px;margin-bottom:20px">
      <div>
        <div style="font-family:'Syne',sans-serif;font-size:22px;font-weight:700">${team.name}</div>
        <div style="font-size:13px;color:var(--text2);margin-top:4px">Dynasty roster breakdown · where to improve next</div>
      </div>
      <div style="display:flex;gap:12px;flex-wrap:wrap">
        <div class="card-sm" style="text-align:center;min-width:90px">
          <div class="stat-label">Power rank</div>
          <div class="stat-val" style="color:${impRankColor(overallRank,sorted.length)}">#${overallRank}</div>
          <div class="stat-sub">of ${sorted.length}</div>
        </div>
        <div class="card-sm" style="text-align:center;min-width:90px">
          <div class="stat-label">Roster score</div>
          <div class="stat-val" style="color:var(--accent)">${score}</div>
        </div>
        <div class="card-sm" style="text-align:center;min-width:90px">
          <div class="stat-label">Elite players</div>
          <div class="stat-val">${eliteCount}</div>
          <div class="stat-sub">80+ score</div>
        </div>
        <div class="card-sm" style="text-align:center;min-width:90px">
          <div class="stat-label">Top-5 age</div>
          <div class="stat-val" style="color:${youthAvg<=26?"var(--green)":youthAvg<=29?"var(--gold)":"var(--red)"}">${youthAvg}</div>
          <div class="stat-sub">yrs avg</div>
        </div>
      </div>
    </div>

    <div class="g2 mb">
      <div>
        <div class="section-title" style="color:var(--green)">✓ Strengths</div>
        <div style="display:flex;flex-wrap:wrap;gap:8px">
        ${strengths.length?strengths.map(s=>`<span class="badge b-great">${s.pos} · avg ${s.avg}</span>`).join(""):`<span style="font-size:13px;color:var(--text3)">No clear surplus positions — focus on upgrades below.</span>`}
        </div>
      </div>
      <div>
        <div class="section-title" style="color:var(--red)">⚠ Needs attention</div>
        <div style="display:flex;flex-wrap:wrap;gap:8px">
        ${needs.length?needs.map(n=>`<span class="badge b-down">${n.pos} · avg ${n.avg}</span>`).join(""):`<span style="font-size:13px;color:var(--text3)">No critical positional gaps flagged.</span>`}
        </div>
      </div>
    </div>

    <div class="section-title">🎯 Priority improvements</div>
    <div style="display:flex;flex-direction:column;gap:10px;margin-bottom:8px">
    ${priorities.slice(0,6).map((p,i)=>`
      <div style="display:flex;gap:12px;padding:12px 14px;background:var(--bg3);border:1px solid var(--border);border-left:3px solid ${sevStyle[p.sev]};border-radius:8px">
        <span style="font-family:'JetBrains Mono',monospace;font-size:11px;color:var(--text3);min-width:18px">${i+1}</span>
        <div>
          <div style="font-weight:600;font-size:14px;margin-bottom:4px">${p.title}</div>
          <div style="font-size:13px;color:var(--text2);line-height:1.5">${p.text}</div>
        </div>
      </div>`).join("")}
    </div>
    <button class="btn btn-primary" style="margin-top:8px" onclick="saveMyTeam('${key}');go('finder')">Find trades for this team →</button>
  </div>`;

  html+=`<div class="section-title mb" style="margin-top:8px">Position-by-position breakdown</div>`;
  html+=`<div class="g2">`;
  posData.forEach(p=>{
    const lab=improveLabel(p.rank,p.total);
    const tips=posAdvice(p.pos,p.rank,p.total,p.myPlayers,p.gap,p.depth);
    const starters=p.myPlayers.slice(0,p.pos==="RB"||p.pos==="WR"?3:1);
    html+=`<div class="card">
      <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:12px">
        <div style="display:flex;align-items:center;gap:10px">
          ${pb(p.pos)}
          <span style="font-family:'Syne',sans-serif;font-size:16px;font-weight:700">${p.pos}</span>
        </div>
        <span class="badge ${lab.badge}">${lab.label}</span>
      </div>
      <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:8px;margin-bottom:14px;text-align:center">
        <div class="card-sm" style="padding:10px">
          <div style="font-size:10px;color:var(--text3);font-family:'JetBrains Mono',monospace">LEAGUE RANK</div>
          <div style="font-family:'Syne',sans-serif;font-size:22px;font-weight:800;color:${lab.color}">#${p.rank}</div>
          <div style="font-size:10px;color:var(--text3)">of ${p.total}</div>
        </div>
        <div class="card-sm" style="padding:10px">
          <div style="font-size:10px;color:var(--text3);font-family:'JetBrains Mono',monospace">STARTER AVG</div>
          <div style="font-family:'Syne',sans-serif;font-size:22px;font-weight:800;color:var(--accent)">${p.myStarterAvg}</div>
          <div style="font-size:10px;color:var(--text3)">league ${p.leagueStarterAvg}</div>
        </div>
        <div class="card-sm" style="padding:10px">
          <div style="font-size:10px;color:var(--text3);font-family:'JetBrains Mono',monospace">DEPTH</div>
          <div style="font-family:'Syne',sans-serif;font-size:22px;font-weight:800">${p.depth}</div>
          <div style="font-size:10px;color:var(--text3)">players</div>
        </div>
      </div>
      <div style="font-size:11px;font-family:'JetBrains Mono',monospace;text-transform:uppercase;letter-spacing:.08em;color:var(--text3);margin-bottom:6px">Starters</div>
      <div style="margin-bottom:12px">
      ${starters.length?starters.map(pl=>`
        <div style="display:flex;align-items:center;justify-content:space-between;padding:6px 0;border-bottom:1px solid var(--border)">
          <span style="font-size:13px;font-weight:500">${pl.name}</span>
          <span class="mono" style="font-size:12px;color:var(--accent)">${pl.score}</span>
        </div>`).join(""):`<span style="font-size:12px;color:var(--text3)">No ${p.pos} on roster</span>`}
      </div>
      <div style="font-size:11px;font-family:'JetBrains Mono',monospace;text-transform:uppercase;letter-spacing:.08em;color:var(--text3);margin-bottom:6px">What to do</div>
      <ul style="margin:0;padding-left:18px;font-size:13px;color:var(--text2);line-height:1.6">
        ${tips.map(t=>`<li style="margin-bottom:4px">${t}</li>`).join("")}
      </ul>
    </div>`;
  });
  html+=`</div>`;

  document.getElementById("improve-detail").innerHTML=html;
  document.getElementById("improve-detail").scrollIntoView({behavior:"smooth"});
}

function initImprove(){
  const leagueSorted=Object.entries(TEAMS).map(([kk])=>({kk,score:teamScore(kk)})).sort((a,b)=>b.score-a.score);
  document.getElementById("improve-team-grid").innerHTML=Object.entries(TEAMS).map(([k,t])=>`
    <div class="team-tile ${improveKey===k?"sel":""}" onclick="selImprove('${k}')">
      <div style="font-size:13px;font-weight:600;font-family:'Syne',sans-serif">${t.name}</div>
      <div style="font-size:11px;color:var(--text2);font-family:'JetBrains Mono',monospace;margin-top:4px">${teamScore(k)} pts · #${leagueSorted.findIndex(x=>x.kk===k)+1} in league</div>
    </div>`).join("");
  if(improveKey)renderImprovements(improveKey);
  else document.getElementById("improve-detail").innerHTML=`<div class="card" style="text-align:center;padding:40px;color:var(--text3)"><div style="font-size:32px;margin-bottom:12px">👆</div><div style="font-size:14px">Select your team above to see strengths, weaknesses, and upgrade priorities.</div></div>`;
}

function selImprove(k){
  saveMyTeam(k);
  initImprove();
}

// ═══════════════════════════════════════════════
// RANKINGS TABLE
// ═══════════════════════════════════════════════
let rankPos="ALL";
function setRankPos(pos,btn){rankPos=pos;document.querySelectorAll("#rank-pills .pill").forEach(b=>b.classList.remove("active"));btn.classList.add("active");renderRankings();}
function renderRankings(){
  const q=(document.getElementById("rank-search")||{value:""}).value.toLowerCase();
  const uniq={};
  let list=PLAYERS.filter(p=>{
    if(uniq[p.name])return false;uniq[p.name]=true;
    if(rankPos!=="ALL"&&p.pos!==rankPos)return false;
    if(q&&!p.name.toLowerCase().includes(q)&&!(p.nfl&&p.nfl.toLowerCase().includes(q)))return false;
    return p.rank>0;
  });
  document.getElementById("rank-tbody").innerHTML=list.map((p,i)=>{
    const owner=ownerOfPlayer(p);
    return `<tr class="rank-row" onclick="showPlayer(this.dataset.pn)" data-pn="${escAttr(p.name)}">
      <td class="rank-overall"><span>${i+1}</span></td>
      <td class="rank-player-cell">
        <div class="rank-player-main">
          ${pb(p.pos)}
          <div class="rank-player-copy">
            <div class="rank-player-name">${escHtml(p.name)}</div>
            <div class="rank-player-meta">${escHtml(p.nfl||"FA")} · Age ${p.age??"—"} · ${tier(p.score)}</div>
          </div>
        </div>
      </td>
      <td><span class="rank-pill">${p.manualRank?"#"+p.manualRank:"—"}</span></td>
      <td class="rank-value-cell">
        <div class="rank-score-line"><span class="rank-score">${p.score}</span><span class="rank-score-label">score</span></div>
        <div class="sbar rank-score-bar"><div class="sbar-fill ${barColor(p.score)}" style="width:${p.score}%"></div></div>
      </td>
      <td class="rank-trend-cell">${spark(p.history,p.trend>0?"#059669":"#dc2626")} <span class="badge ${p.trend>0?"b-up":"b-down"}">${p.trend>0?"+":""}${p.trend}</span></td>
      <td class="rank-owner-cell">${owner?`<span>${escHtml(owner)}</span>`:`<span class="rank-free-agent">Waivers</span>`}</td>
    </tr>`;
  }).join("");
}

// ═══════════════════════════════════════════════
// WAIVER WIRE
// ═══════════════════════════════════════════════
let waiverPos="ALL";
function getWaiverPlayers(){
  return PLAYERS.filter(p=>p.rank>0&&!ownerOfPlayer(p)).sort((a,b)=>a.rank-b.rank);
}
function setWaiverPos(pos,btn){
  waiverPos=pos;
  document.querySelectorAll("#waiver-pills .pill").forEach(b=>b.classList.remove("active"));
  btn.classList.add("active");
  renderWaivers();
}
function initWaivers(){
  const opts=Object.entries(TEAMS).map(([k,t])=>`<option value="${k}">${escHtml(t.name)}</option>`).join("");
  const addSel=document.getElementById("waiver-team-select");
  const dropTeam=document.getElementById("waiver-drop-team");
  if(addSel&&!addSel.dataset.loaded){
    addSel.innerHTML="<option value=''>Add to team…</option>"+opts;
    addSel.dataset.loaded="1";
  }
  if(dropTeam){
    dropTeam.innerHTML="<option value=''>— select team —</option>"+opts;
  }
  loadWaiverDropSelect();
  renderWaivers();
}
function renderWaivers(){
  const all=getWaiverPlayers();
  const q=(document.getElementById("waiver-search")||{value:""}).value.toLowerCase();
  const list=all.filter(p=>{
    if(waiverPos!=="ALL"&&p.pos!==waiverPos)return false;
    if(q&&!p.name.toLowerCase().includes(q)&&!(p.nfl&&p.nfl.toLowerCase().includes(q)))return false;
    return true;
  });
  const byPos=pos=>all.filter(p=>p.pos===pos).length;
  const best=all[0];
  const upside=all.filter(p=>Number(p.age)&&p.age<=24).slice(0,3);
  document.getElementById("waiver-summary").innerHTML=`
    <div class="card-sm waiver-stat"><div class="stat-label">Available</div><div class="stat-val">${all.length}</div><div class="stat-sub">ranked free agents</div></div>
    <div class="card-sm waiver-stat"><div class="stat-label">Best Player</div><div class="stat-val" style="font-size:17px">${best?escHtml(best.name):"—"}</div><div class="stat-sub">${best?`${best.nfl||"FA"} · #${best.rank} · ${best.score}`:"No waivers"}</div></div>
    <div class="card-sm waiver-stat"><div class="stat-label">Top Youth</div><div class="stat-val" style="font-size:15px">${upside.length?upside.map(p=>escHtml(p.name.split(" ").slice(-1)[0])).join(" · "):"—"}</div><div class="stat-sub">age 24 or younger</div></div>
    <div class="card-sm waiver-stat"><div class="stat-label">By Position</div><div class="stat-sub">QB ${byPos("QB")} · RB ${byPos("RB")} · WR ${byPos("WR")} · TE ${byPos("TE")}</div></div>`;
  const board=document.getElementById("waiver-board");
  if(!list.length){
    board.innerHTML=`<div style="padding:24px;text-align:center;color:var(--text3)">No matching waiver players.</div>`;
    return;
  }
  board.innerHTML=list.slice(0,120).map((p,i)=>`
    <div class="waiver-card" onclick="showPlayer(this.dataset.pn)" data-pn="${escAttr(p.name)}">
      <div class="waiver-player-body">
        <div class="waiver-name">${escHtml(p.name)}</div>
        <div class="waiver-meta">${pb(p.pos)} <span>${escHtml(p.nfl||"FA")} · Age ${p.age??"—"} · Score ${p.score}</span></div>
        <div class="sbar"><div class="sbar-fill ${barColor(p.score)}" style="width:${p.score}%"></div></div>
      </div>
      <div class="waiver-chip ${i<12?"hot":""}">${i<12?"Priority Add":"Depth Watch"}</div>
      <button class="btn btn-primary waiver-add" onclick="addWaiverToTeam(event,this.dataset.name)" data-name="${escAttr(p.name)}">Add</button>
    </div>`).join("");
}
function addWaiverToTeam(event,name){
  event.stopPropagation();
  const teamKey=document.getElementById("waiver-team-select").value;
  const status=document.getElementById("waiver-status");
  if(!teamKey){status.innerHTML='<span style="color:var(--red)">Pick a team first.</span>';return;}
  const p=getP(name);
  if(!p){status.innerHTML='<span style="color:var(--red)">Could not find that player.</span>';return;}
  removePlayerFromAllRosters(p.name);
  TEAMS[teamKey].roster.push(rosterPlayerFromRanked(p));
  status.innerHTML=`<span style="color:var(--green)">✓ Added ${escHtml(p.name)} to ${escHtml(TEAMS[teamKey].name)}. Waivers updated.</span>`;
  refreshRosterViews();
}
function loadWaiverDropSelect(){
  const teamKey=document.getElementById("waiver-drop-team")?.value;
  const sel=document.getElementById("waiver-drop-player");
  if(!sel)return;
  if(!teamKey){sel.innerHTML="<option value=''>— pick player to drop —</option>";return;}
  sel.innerHTML="<option value=''>— pick player to drop —</option>"+
    TEAMS[teamKey].roster.map(r=>`<option value="${escAttr(r.name)}">${escHtml(r.name)} (${escHtml(r.pos)}) — ${ps(r.name)}</option>`).join("");
}
function dropPlayerToWaivers(){
  const teamKey=document.getElementById("waiver-drop-team").value;
  const name=document.getElementById("waiver-drop-player").value;
  const status=document.getElementById("waiver-status");
  if(!teamKey||!name){status.innerHTML='<span style="color:var(--red)">Select a team and player to drop.</span>';return;}
  const idx=TEAMS[teamKey].roster.findIndex(r=>r.name===name);
  if(idx<0){status.innerHTML='<span style="color:var(--red)">Player was not found on that roster.</span>';return;}
  const dropped=TEAMS[teamKey].roster.splice(idx,1)[0];
  status.innerHTML=`<span style="color:var(--gold)">✓ Dropped ${escHtml(dropped.name)} from ${escHtml(TEAMS[teamKey].name)}. They are now on waivers.</span>`;
  refreshRosterViews();
  loadWaiverDropSelect();
}

// ═══════════════════════════════════════════════
// TRENDS
// ═══════════════════════════════════════════════
function initTrends(){
  // Top trending cards (biggest moves)
  const big=PLAYERS.filter(p=>p.rank>0).sort((a,b)=>Math.abs(b.trend)-Math.abs(a.trend)).slice(0,6);
  document.getElementById("trend-grid").innerHTML=big.map(p=>`
    <div class="trend-card">
      <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:6px">
        ${pb(p.pos)} ${p.trend>0?'<span class="badge b-hot">🔥 RISING</span>':`<span class="badge b-down">📉 FALLING</span>`}
      </div>
      <div class="trend-name">${p.name}</div>
      <div class="trend-meta">${p.nfl} · #${p.rank} · Score ${p.score}</div>
      ${spark(p.history,p.trend>0?"#059669":"#dc2626")}
      <span class="badge ${p.trend>0?"b-up":"b-down"}" style="margin-left:6px">${p.trend>0?"+":""}${p.trend} this week</span>
      <div class="sbar" style="margin-top:8px"><div class="sbar-fill ${barColor(p.score)}" style="width:${p.score}%"></div></div>
    </div>`).join("");

  // Risers
  const risers=PLAYERS.filter(p=>p.rank>0&&p.trend>0).sort((a,b)=>b.trend-a.trend).slice(0,8);
  document.getElementById("risers-list").innerHTML=risers.map(p=>`
    <div class="waiver-row">
      ${pb(p.pos)}
      <div style="flex:1"><div style="font-size:13px;font-weight:500">${p.name}</div>
      <div style="font-size:11px;color:var(--text2);font-family:'JetBrains Mono',monospace">${p.nfl} · #${p.rank} · Age ${p.age}</div></div>
      ${spark(p.history,"#059669")}
      <span class="badge b-up">+${p.trend}</span>
    </div>`).join("");

  // Fallers
  const fallers=PLAYERS.filter(p=>p.rank>0&&p.trend<0).sort((a,b)=>a.trend-b.trend).slice(0,8);
  document.getElementById("fallers-list").innerHTML=fallers.map(p=>`
    <div class="waiver-row">
      ${pb(p.pos)}
      <div style="flex:1"><div style="font-size:13px;font-weight:500">${p.name}</div>
      <div style="font-size:11px;color:var(--text2);font-family:'JetBrains Mono',monospace">${p.nfl} · #${p.rank} · Age ${p.age}</div></div>
      ${spark(p.history,"#dc2626")}
      <span class="badge b-down">${p.trend}</span>
    </div>`).join("");
}

// ═══════════════════════════════════════════════
// METRICS
// ═══════════════════════════════════════════════
function initMetrics(){
  ["dynasty-window-chart","age-chart","scarcity-chart","pos-breakdown-chart","elite-dist-chart","youth-chart","concentration-chart"].forEach(resetChart);
  const windowProfiles=dynastyWindowProfiles();
  const wctx=document.getElementById("dynasty-window-chart").getContext("2d");
  new Chart(wctx,{type:"bubble",data:{datasets:[{
    label:"Dynasty Window",
    data:windowProfiles.map(p=>({x:p.avgAge,y:p.score,r:Math.max(9,Math.min(28,8+p.top75*4)),team:p.name,top75:p.top75,window:p.window.label,rank:p.scoreRank})),
    backgroundColor:windowProfiles.map(p=>p.window.color),
    borderColor:windowProfiles.map(p=>p.window.color.replace(".72",".95").replace(".62",".9")),
    borderWidth:2,
    hoverBorderWidth:3
  }]},options:{responsive:true,maintainAspectRatio:false,plugins:{legend:{display:false},tooltip:{callbacks:{label:ctx=>{const p=ctx.raw;return`${p.team}: ${p.window} · score ${p.y} · core age ${p.x} · top-75 ${p.top75}`;}}}},scales:{x:{title:{display:true,text:"Average age of top 8 core",color:chartMuted(),font:{size:11}},ticks:{color:chartText()},grid:{color:chartGrid()},suggestedMin:24,suggestedMax:31},y:{title:{display:true,text:"Roster value score",color:chartMuted(),font:{size:11}},ticks:{color:chartText()},grid:{color:chartGrid()},suggestedMin:250}}}});
  document.getElementById("dynasty-window-legend").innerHTML=windowProfiles.map(p=>`
    <div class="window-chip ${p.window.cls}">
      <div class="window-chip-title">${p.name}</div>
      <div class="window-chip-meta">${p.window.label} · score ${p.score} · age ${p.avgAge} · ${p.top75} top-75</div>
    </div>`).join("");

  // ── 1. Age Distribution by Position (box-style via bar) ──
  const posAges={QB:[],RB:[],WR:[],TE:[]};
  Object.values(TEAMS).forEach(t=>t.roster.forEach(r=>{
    const pos=r.pos.replace("/ST","");
    if(posAges[pos]===undefined) return;
    const p=getP(r.name);
    const age=p?p.age:26;
    posAges[pos].push(age);
  }));
  const avgAge=pos=>posAges[pos].length?Math.round(posAges[pos].reduce((a,b)=>a+b,0)/posAges[pos].length*10)/10:0;
  const actx=document.getElementById("age-chart").getContext("2d");
  new Chart(actx,{type:"bar",data:{labels:["QB","RB","WR","TE"],datasets:[
    {label:"Avg Age",data:["QB","RB","WR","TE"].map(avgAge),backgroundColor:["rgba(192,132,252,.7)","rgba(74,222,128,.7)","rgba(56,189,248,.7)","rgba(251,146,60,.7)"],borderRadius:4,borderWidth:0}
  ]},options:{responsive:true,maintainAspectRatio:false,plugins:{legend:{display:false},tooltip:{callbacks:{label:ctx=>`Avg age: ${ctx.parsed.y}`}}},scales:{x:{ticks:{color:"#475569"},grid:{color:"rgba(15,23,42,.08)"}},y:{ticks:{color:"#64748b"},grid:{color:"rgba(15,23,42,.08)"},min:22,suggestedMax:34}}}});

  // ── 2. Score Density — histogram of all player scores across league ──
  const allScores=[];
  Object.values(TEAMS).forEach(t=>t.roster.forEach(r=>{const p=getP(r.name);if(p)allScores.push(p.score);}));
  const buckets=Array(10).fill(0);
  allScores.forEach(s=>{const b=Math.min(9,Math.floor((s-10)/9));buckets[b]++;});
  const bucketLabels=["10-18","19-27","28-36","37-45","46-54","55-63","64-72","73-81","82-90","91-99"];
  const sctx=document.getElementById("scarcity-chart").getContext("2d");
  new Chart(sctx,{type:"bar",data:{labels:bucketLabels,datasets:[{label:"Players",data:buckets,backgroundColor:bucketLabels.map((_,i)=>`hsla(${160+i*18},80%,55%,0.75)`),borderRadius:4,borderWidth:0}]},options:{responsive:true,maintainAspectRatio:false,plugins:{legend:{display:false},title:{display:true,text:"Player Score Distribution (Dynasty Value)",color:"#475569",font:{size:11}}},scales:{x:{ticks:{color:"#64748b",font:{size:9}},grid:{color:"rgba(15,23,42,.08)"}},y:{ticks:{color:"#64748b"},grid:{color:"rgba(15,23,42,.08)"},title:{display:true,text:"# Players",color:"#64748b",font:{size:10}}}}}});

  // ── 3. Team Positional Depth — stacked bar by position ──
  const teams=Object.entries(TEAMS);
  const posColors={QB:"rgba(192,132,252,.8)",RB:"rgba(74,222,128,.8)",WR:"rgba(56,189,248,.8)",TE:"rgba(251,146,60,.8)"};
  const pctx=document.getElementById("pos-breakdown-chart").getContext("2d");
  new Chart(pctx,{type:"bar",data:{
    labels:teams.map(([k,t])=>t.name.split(" ")[0]),
    datasets:["QB","RB","WR","TE"].map(pos=>({
      label:pos,
      data:teams.map(([k,t])=>{const pl=t.roster.filter(r=>r.pos===pos||r.pos===pos+"/ST");return pl.length?Math.round(pl.map(r=>ps(r.name)).reduce((a,b)=>a+b,0)/pl.length):0;}),
      backgroundColor:posColors[pos],borderWidth:0,borderRadius:2
    }))
  },options:{responsive:true,maintainAspectRatio:false,plugins:{legend:{labels:{color:"#475569",font:{size:10},boxWidth:10}},title:{display:true,text:"Avg Positional Score Per Team",color:"#475569",font:{size:11}}},scales:{x:{stacked:true,ticks:{color:"#64748b",font:{size:9}},grid:{display:false}},y:{stacked:true,ticks:{color:"#64748b"},grid:{color:"rgba(15,23,42,.08)"}}}}});

  // ── 4. Elite vs Depth breakdown per team ──
  const ectx=document.getElementById("elite-dist-chart").getContext("2d");
  new Chart(ectx,{type:"bar",data:{
    labels:teams.map(([k,t])=>t.name.split(" ")[0]),
    datasets:[
      {label:"Elite (80+)",data:teams.map(([k,t])=>t.roster.filter(r=>ps(r.name)>=80).length),backgroundColor:"rgba(0,229,255,.7)",borderRadius:3,borderWidth:0},
      {label:"Top Tier (65-79)",data:teams.map(([k,t])=>t.roster.filter(r=>{const s=ps(r.name);return s>=65&&s<80;}).length),backgroundColor:"rgba(0,255,157,.6)",borderRadius:3,borderWidth:0},
      {label:"Solid (50-64)",data:teams.map(([k,t])=>t.roster.filter(r=>{const s=ps(r.name);return s>=50&&s<65;}).length),backgroundColor:"rgba(255,215,0,.5)",borderRadius:3,borderWidth:0},
      {label:"Depth (<50)",data:teams.map(([k,t])=>t.roster.filter(r=>ps(r.name)<50).length),backgroundColor:"rgba(255,77,109,.4)",borderRadius:3,borderWidth:0},
    ]
  },options:{responsive:true,maintainAspectRatio:false,plugins:{legend:{labels:{color:"#475569",font:{size:10},boxWidth:10}},title:{display:true,text:"Roster Tier Breakdown Per Team",color:"#475569",font:{size:11}}},scales:{x:{stacked:true,ticks:{color:"#64748b",font:{size:9}},grid:{display:false}},y:{stacked:true,ticks:{color:"#64748b"},grid:{color:"rgba(15,23,42,.08)"}}}}});

  // ── 5. Youth Index — avg age of top 5 players per team (younger = more upside) ──
  const yctx=document.getElementById("youth-chart").getContext("2d");
  const youthData=teams.map(([k,t])=>{
    const top5=t.roster.map(r=>{const p=getP(r.name);return{score:ps(r.name),age:p?p.age:26};}).sort((a,b)=>b.score-a.score).slice(0,5);
    return top5.length?Math.round(top5.reduce((s,p)=>s+p.age,0)/top5.length*10)/10:0;
  });
  const youthSorted=[...youthData].sort((a,b)=>a-b);
  new Chart(yctx,{type:"bar",data:{
    labels:teams.map(([k,t])=>t.name.split(" ")[0]),
    datasets:[{label:"Avg age of top 5 players",data:youthData,backgroundColor:youthData.map(v=>`hsla(${200-Math.round((v-24)/10*80)},80%,55%,0.75)`),borderRadius:4,borderWidth:0}]
  },options:{responsive:true,maintainAspectRatio:false,plugins:{legend:{display:false},title:{display:true,text:"Youth Index — Avg Age of Top 5 Players (lower = younger roster)",color:"#475569",font:{size:11}},tooltip:{callbacks:{label:ctx=>`Avg age: ${ctx.parsed.y} yrs`}}},scales:{x:{ticks:{color:"#64748b",font:{size:9}},grid:{display:false}},y:{ticks:{color:"#64748b"},grid:{color:"rgba(15,23,42,.08)"},min:22,suggestedMax:34}}}});

  // ── 6. Trade Value Concentration — how top-heavy is each roster ──
  const tctx=document.getElementById("concentration-chart").getContext("2d");
  const concData=teams.map(([k,t])=>{
    const scores=t.roster.map(r=>ps(r.name)).sort((a,b)=>b-a);
    const top3=scores.slice(0,3).reduce((a,b)=>a+b,0);
    const total=scores.reduce((a,b)=>a+b,0);
    return total>0?Math.round((top3/total)*100):0;
  });
  new Chart(tctx,{type:"bar",data:{
    labels:teams.map(([k,t])=>t.name.split(" ")[0]),
    datasets:[{label:"% of total value in top 3 players",data:concData,backgroundColor:concData.map(v=>v>60?"rgba(255,77,109,.7)":v>50?"rgba(255,215,0,.7)":"rgba(0,229,255,.7)"),borderRadius:4,borderWidth:0}]
  },options:{responsive:true,maintainAspectRatio:false,plugins:{legend:{display:false},title:{display:true,text:"Value Concentration — % of Roster Value in Top 3 Players",color:"#475569",font:{size:11}},tooltip:{callbacks:{label:ctx=>`${ctx.parsed.y}% of value in top 3`}}},scales:{x:{ticks:{color:"#64748b",font:{size:9}},grid:{display:false}},y:{ticks:{color:"#64748b",callback:v=>v+"%"},grid:{color:"rgba(15,23,42,.08)"},max:100}}}});

  // ── Needs matrix ──
  const posOrder2=["QB","RB","WR","TE"];
  let matrix=`<div style="overflow-x:auto"><table><thead><tr><th>Team</th>${posOrder2.map(p=>`<th>${p} Avg</th>`).join("")}<th>Overall</th><th>Youth Index</th><th>Elite Players</th></tr></thead><tbody>`;
  teams.forEach(([k,t],idx)=>{
    const byPos={};
    t.roster.forEach(r=>{if(!byPos[r.pos])byPos[r.pos]=[];byPos[r.pos].push(ps(r.name));});
    matrix+=`<tr>`;
    matrix+=`<td style="font-weight:500;font-size:12px;white-space:nowrap">${t.name}</td>`;
    posOrder2.forEach(pos=>{
      const sc=byPos[pos]||[];
      const avg=sc.length?Math.round(sc.reduce((a,b)=>a+b,0)/sc.length):0;
      const col=avg>=72?"var(--green)":avg>=60?"var(--gold)":"var(--red)";
      matrix+=`<td><div style="display:flex;align-items:center;gap:4px"><span style="font-family:'JetBrains Mono',monospace;font-size:12px;color:${col};font-weight:500">${avg||"—"}</span></div></td>`;
    });
    matrix+=`<td style="font-family:'JetBrains Mono',monospace;font-size:12px;color:var(--accent);font-weight:600">${teamScore(k)}</td>`;
    const top5=t.roster.map(r=>{const p=getP(r.name);return{score:ps(r.name),age:p?p.age:26};}).sort((a,b)=>b.score-a.score).slice(0,5);
    const avgAge=top5.length?Math.round(top5.reduce((s,p)=>s+p.age,0)/top5.length*10)/10:0;
    const ageCol=avgAge<=26?"var(--green)":avgAge<=29?"var(--gold)":"var(--red)";
    matrix+=`<td style="font-family:'JetBrains Mono',monospace;font-size:12px;color:${ageCol};font-weight:500">${avgAge}</td>`;
    const eliteCount=t.roster.filter(r=>ps(r.name)>=80).length;
    matrix+=`<td style="font-family:'JetBrains Mono',monospace;font-size:12px;color:var(--accent);font-weight:600">${eliteCount}</td>`;
    matrix+=`</tr>`;
  });
  matrix+=`</tbody></table></div>`;
  document.getElementById("needs-matrix").innerHTML=matrix;
}
// ═══════════════════════════════════════════════
// TRADE ANALYZER
// ═══════════════════════════════════════════════
let taA=[],taB=[];
function initTrade(){
  const opts=Object.entries(TEAMS).map(([k,t])=>`<option value="${k}">${t.name}</option>`).join("");
  ["a","b"].forEach(s=>{
    document.getElementById("ta-team-"+s).innerHTML="<option value=''>— select team —</option>"+opts;
    document.getElementById("ta-player-"+s).innerHTML="<option value=''>— pick player —</option>";
  });
}
function loadTA(s){
  const k=document.getElementById("ta-team-"+s).value;
  const sel=document.getElementById("ta-player-"+s);
  if(!k){sel.innerHTML="<option value=''>— pick player —</option>";return;}
  const arr=s==="a"?taA:taB;
  sel.innerHTML="<option value=''>— pick player —</option>"+TEAMS[k].roster.filter(r=>!arr.find(x=>x.name===r.name)).map(r=>`<option value="${r.name}|${r.pos}">${r.name} (${r.pos}) — ${ps(r.name)}</option>`).join("");
}
function addTA(s){
  const k=document.getElementById("ta-team-"+s).value;
  const v=document.getElementById("ta-player-"+s).value;
  if(!k||!v)return;
  const [name,pos]=v.split("|");
  const arr=s==="a"?taA:taB;
  if(!arr.find(p=>p.name===name))arr.push({name,pos,teamName:TEAMS[k].name});
  renderTASides();
  document.getElementById("ta-result").innerHTML="";
}
function rmTA(s,name){if(s==="a")taA=taA.filter(p=>p.name!==name);else taB=taB.filter(p=>p.name!==name);renderTASides();document.getElementById("ta-result").innerHTML="";}
function renderTASides(){
  ["a","b"].forEach(s=>{
    const arr=s==="a"?taA:taB;
    const el=document.getElementById("ta-side-"+s);
    if(!arr.length){el.innerHTML="<span style='font-size:12px;color:var(--text3)'>No players added</span>";return;}
    el.innerHTML=arr.map(p=>`<div class="tpl-row">${pb(p.pos||"WR")}<span style="flex:1;font-size:13px;font-weight:500">${escHtml(p.name)}</span><span class="mono" style="font-size:12px;color:var(--text2)">${ps(p.name)}</span><button class="trm" onclick="rmTA('${s}',this.dataset.n)" data-n="${escAttr(p.name)}">×</button></div>`).join("");
  });
}
async function runTradeAnalysis(){
  if(!taA.length||!taB.length){document.getElementById("ta-result").innerHTML="<div style='color:var(--text3);padding:1rem;font-size:13px'>Add players to both sides first.</div>";return;}
  const tA=taA[0].teamName,tB=taB[0].teamName;
  const sA=taA.reduce((s,p)=>s+ps(p.name),0),sB=taB.reduce((s,p)=>s+ps(p.name),0);
  const diff=sA-sB,abs=Math.abs(diff);
  let vc,tag,msg;
  if(abs<6){vc="v-fair";tag="EVEN TRADE";msg="Near-equal dynasty value. Both sides can feel good about this deal.";}
  else if(abs<16){const w=diff>0?tB:tA;vc="v-slight";tag=`SLIGHT EDGE → ${w}`;msg=`${w} wins by ${abs} pts. Within negotiable range — a reasonable deal.`;}
  else{const w=diff>0?tB:tA,l=diff>0?tA:tB;vc="v-lop";tag=`LOPSIDED → ${w} WINS`;msg=`${w} wins decisively (+${abs} pts). ${l} should demand more value.`;}
  const el=document.getElementById("ta-result");
  el.innerHTML=`<div class="verdict ${vc}" style="margin-bottom:16px"><div style="font-family:'JetBrains Mono',monospace;font-size:11px;font-weight:600;margin-bottom:6px">${tag}</div><div style="font-size:13px;line-height:1.6">${msg}</div></div>
  <div class="g2 mb"><div class="card-sm"><div class="stat-label">${tA} gives</div><div class="stat-val">${sA}</div><div class="stat-sub">${taA.map(p=>p.name).join(" + ")}</div></div><div class="card-sm"><div class="stat-label">${tB} gives</div><div class="stat-val">${sB}</div><div class="stat-sub">${taB.map(p=>p.name).join(" + ")}</div></div></div>
  <div class="ai-out" id="ai-out"><span class="loading">⏳ Generating AI analysis…</span></div>`;
  const key=localStorage.getItem("dc_api_key");
  if(!key){document.getElementById("ai-out").innerHTML="<span style='color:var(--gold)'>⚠ No Groq API key — click 🔑 in the sidebar for free setup.</span>";return;}
  const prompt=`Dynasty fantasy football trade analysis (12-team PPR 1QB, May 2026):
${tA} gives: ${taA.map(p=>p.name+" ("+p.pos+", score:"+ps(p.name)+")").join(", ")}
${tB} gives: ${taB.map(p=>p.name+" ("+p.pos+", score:"+ps(p.name)+")").join(", ")}
Provide: 1) Clear winner, 2) Age/upside for each player, 3) Positional fit, 4) Counter-offer if lopsided. 200 words max.`;
  try{
    const r=await fetch("https://api.groq.com/openai/v1/chat/completions",{method:"POST",headers:{"Content-Type":"application/json","Authorization":"Bearer "+key},body:JSON.stringify({model:"llama-3.3-70b-versatile",max_tokens:600,messages:[{role:"user",content:prompt}]})});
    const d=await r.json();
    if(d.error){document.getElementById("ai-out").textContent="API error: "+d.error.message;return;}
    document.getElementById("ai-out").textContent=d.choices?.[0]?.message?.content||"No response.";
  }catch(e){document.getElementById("ai-out").textContent="Network error — check your API key.";}
}

// ═══════════════════════════════════════════════
// TRADE FINDER
// ═══════════════════════════════════════════════
let finderKey=localStorage.getItem("dc_my_team")||null;
if(finderKey&&!TEAMS[finderKey])finderKey=null;
let finderMode="any";
let finderShop=[];
let finderTargetTeam="";
let finderTargetName="";
let finderTargetThrowIn="";
function initFinder(){
  document.getElementById("finder-team-grid").innerHTML=Object.entries(TEAMS).map(([k,t])=>`
    <div class="team-tile ${finderKey===k?"sel":""}" onclick="selFinder('${k}')">
      <div style="font-size:13px;font-weight:600;font-family:'Syne',sans-serif">${t.name}</div>
      <div style="font-size:11px;color:var(--text2);font-family:'JetBrains Mono',monospace;margin-top:4px">${teamScore(k)} pts · ${t.roster.length} players</div>
    </div>`).join("");
  renderFinderControls();
}
function selFinder(k){saveMyTeam(k);finderShop=[];finderTargetTeam="";finderTargetName="";finderTargetThrowIn="";initFinder();document.getElementById("finder-btn").disabled=false;document.getElementById("finder-result").innerHTML="";}
function setFinderMode(mode){
  finderMode=mode;
  document.getElementById("finder-mode-any")?.classList.toggle("active",mode==="any");
  document.getElementById("finder-mode-shop")?.classList.toggle("active",mode==="shop");
  document.getElementById("finder-mode-target")?.classList.toggle("active",mode==="target");
  document.getElementById("finder-result").innerHTML="";
  renderFinderControls();
}
function toggleFinderShop(name){
  if(finderShop.includes(name))finderShop=finderShop.filter(n=>n!==name);
  else if(finderShop.length<3)finderShop.push(name);
  else{document.getElementById("finder-result").innerHTML='<div class="ai-out">Select up to 3 players to shop at once.</div>';}
  renderFinderControls();
}
function setFinderTargetTeam(teamKey){
  finderTargetTeam=teamKey;
  finderTargetName="";
  finderTargetThrowIn="";
  document.getElementById("finder-result").innerHTML="";
  renderFinderControls();
}
function setFinderTargetName(name){
  finderTargetName=name;
  finderTargetThrowIn="";
  document.getElementById("finder-result").innerHTML="";
  renderFinderControls();
}
function setFinderTargetThrowIn(name){
  finderTargetThrowIn=name;
  document.getElementById("finder-result").innerHTML="";
}
function renderFinderControls(){
  const picker=document.getElementById("finder-player-picker");
  if(!picker)return;
  if(!finderKey){picker.innerHTML='<div style="font-size:12px;color:var(--text3)">Pick your team first.</div>';return;}
  if(finderMode==="any"){
    picker.innerHTML=`<div style="font-size:12px;color:var(--text2);font-family:'JetBrains Mono',monospace">Mode: scan your roster and find the closest even-value deals.</div>`;
    return;
  }
  if(finderMode==="target"){
    const teams=Object.entries(TEAMS).filter(([k])=>k!==finderKey);
    const targetTeam=TEAMS[finderTargetTeam];
    const players=targetTeam?targetTeam.roster.map(tradePlayer).sort((a,b)=>b.score-a.score):[];
    const throwIns=players.filter(p=>p.name!==finderTargetName);
    picker.innerHTML=`
      <div style="font-size:12px;color:var(--text2);margin-bottom:10px;font-family:'JetBrains Mono',monospace">Pick the team and player you want. Optional: add a second player coming back to balance a bigger offer. Your side will always include at least 2 players.</div>
      <div class="finder-target-row">
        <select class="inp" onchange="setFinderTargetTeam(this.value)">
          <option value="">— choose opponent team —</option>
          ${teams.map(([k,t])=>`<option value="${k}" ${finderTargetTeam===k?"selected":""}>${escHtml(t.name)}</option>`).join("")}
        </select>
        <select class="inp" onchange="setFinderTargetName(this.value)" ${players.length?"":"disabled"}>
          <option value="">— choose target player —</option>
          ${players.map(p=>`<option value="${escAttr(p.name)}" ${finderTargetName===p.name?"selected":""}>${escHtml(p.name)} (${p.pos}) — ${p.score}</option>`).join("")}
        </select>
        <select class="inp" onchange="setFinderTargetThrowIn(this.value)" ${finderTargetName?"":"disabled"}>
          <option value="">Optional throw-in coming back</option>
          ${throwIns.map(p=>`<option value="${escAttr(p.name)}" ${finderTargetThrowIn===p.name?"selected":""}>${escHtml(p.name)} (${p.pos}) — ${p.score}</option>`).join("")}
        </select>
      </div>`;
    return;
  }
  const roster=TEAMS[finderKey].roster.map(tradePlayer).sort((a,b)=>b.score-a.score);
  const selectedVal=roster.filter(p=>finderShop.includes(p.name)).reduce((s,p)=>s+p.score,0);
  picker.innerHTML=`
    <div style="font-size:12px;color:var(--text2);margin-bottom:10px;font-family:'JetBrains Mono',monospace">Choose 1-3 players you want to trade away. Selected value: ${selectedVal||"—"}</div>
    <div class="finder-player-grid">
      ${roster.map(p=>`<button class="finder-player-chip ${finderShop.includes(p.name)?"sel":""}" onclick="toggleFinderShop(this.dataset.n)" data-n="${escAttr(p.name)}">
        ${pb(p.pos)}<span class="chip-name">${escHtml(p.name)}</span><span class="chip-score">${p.score}</span>
      </button>`).join("")}
    </div>`;
}

function getTeamNeeds(key){
  const byPos={QB:[],RB:[],WR:[],TE:[]};
  TEAMS[key].roster.forEach(r=>{const pos=r.pos.replace("/ST","");if(byPos[pos])byPos[pos].push(ps(r.name));});
  const needs=[],strengths=[];
  const thresholds={QB:65,RB:62,WR:62,TE:60};
  const minCounts={QB:1,RB:3,WR:4,TE:1};
  Object.entries(byPos).forEach(([pos,scores])=>{
    scores.sort((a,b)=>b-a);
    const topScores=scores.slice(0,minCounts[pos]);
    const avg=topScores.length?Math.round(topScores.reduce((a,b)=>a+b,0)/topScores.length):0;
    if(avg<thresholds[pos]||topScores.length<minCounts[pos]) needs.push({pos,avg,count:scores.length});
    else if(avg>=thresholds[pos]+12) strengths.push({pos,avg,count:scores.length});
  });
  return{needs,strengths};
}

function tradePlayer(r){
  const p=getP(r.name);
  return{name:r.name,pos:(r.pos||p?.pos||"WR").replace("/ST",""),score:ps(r.name),age:p?p.age:null,rank:p?p.rank:null};
}
function tradeCombos(roster,max=2){
  const pool=roster.map(tradePlayer).filter(p=>p.score>=32).sort((a,b)=>b.score-a.score).slice(0,14);
  const out=pool.map(p=>[p]);
  if(max>=2){
    for(let i=0;i<pool.length;i++){
      for(let j=i+1;j<pool.length;j++){
        const combo=[pool[i],pool[j]];
        const val=combo.reduce((s,p)=>s+p.score,0);
        if(val<=178)out.push(combo);
      }
    }
  }
  if(max>=3){
    for(let i=0;i<pool.length;i++){
      for(let j=i+1;j<pool.length;j++){
        for(let k=j+1;k<pool.length;k++){
          const combo=[pool[i],pool[j],pool[k]];
          const val=combo.reduce((s,p)=>s+p.score,0);
          if(val<=235)out.push(combo);
        }
      }
    }
  }
  return out;
}
function comboVal(players){return players.reduce((s,p)=>s+p.score,0);}
function comboLabel(players){return players.map(p=>p.name).join(" + ");}
function positionalFit(players,needs){
  const needPos=new Set(needs.needs.map(n=>n.pos));
  return players.reduce((s,p)=>s+(needPos.has(p.pos)?2:0),0);
}
function generateBalancedTrades(myKey,fixedGive=null){
  const my=TEAMS[myKey];
  const myNeeds=getTeamNeeds(myKey);
  const myCombos=fixedGive&&fixedGive.length?[fixedGive]:tradeCombos(my.roster,2);
  const trades=[];
  Object.entries(TEAMS).filter(([k])=>k!==myKey).forEach(([oppKey,opp])=>{
    const oppNeeds=getTeamNeeds(oppKey);
    const oppCombos=tradeCombos(opp.roster,fixedGive&&fixedGive.length?3:2);
    myCombos.forEach(give=>{
      const giveVal=comboVal(give);
      oppCombos.forEach(get=>{
        const getVal=comboVal(get);
        const gap=Math.abs(giveVal-getVal);
        if(gap>3)return;
        const myFit=positionalFit(get,myNeeds);
        const oppFit=positionalFit(give,oppNeeds);
        if(myNeeds.needs.length&&myFit===0)return;
        if(give.length===2&&get.length===1&&getVal<giveVal)return;
        if(get.length===2&&give.length===1&&giveVal<getVal)return;
        const fit=myFit+oppFit;
        trades.push({
          title:`${comboLabel(give)} for ${comboLabel(get)}`,
          opp:opp.name,
          give,
          get,
          myVal:giveVal,
          theirVal:getVal,
          gap,
          fit,
          need:myFit?get.filter(p=>myNeeds.needs.some(n=>n.pos===p.pos)).map(p=>p.pos).join(", "):"Value match",
          why:oppFit?`${opp.name} gets help at ${give.filter(p=>oppNeeds.needs.some(n=>n.pos===p.pos)).map(p=>p.pos).join(", ")} while keeping value even.`:"The value is close enough to be negotiable without a major overpay.",
          whyMe:`This is a strict value match (${gap} point gap). ${fixedGive&&fixedGive.length?"Because you selected the outgoing side, this only searches return packages that fit those players. ":""}You add ${get.map(p=>`${p.name} (${p.pos}, ${p.score})`).join(" and ")} without giving away more total score than you receive.`
        });
      });
    });
  });
  const seen=new Set();
  return trades
    .sort((a,b)=>a.gap-b.gap||b.fit-a.fit||b.theirVal-a.theirVal)
    .filter(t=>{
      const key=[t.opp,comboLabel(t.give),comboLabel(t.get)].join("|");
      if(seen.has(key))return false;
      seen.add(key);
      return true;
    })
    .slice(0,8);
}

function generateTargetTrades(myKey,targetTeamKey,targetName,throwInName=""){
  const targetTeam=TEAMS[targetTeamKey];
  if(!targetTeam)return[];
  const targetRosterPlayer=targetTeam.roster.find(r=>fuzzyName(r.name)===fuzzyName(targetName));
  if(!targetRosterPlayer)return[];
  const target=tradePlayer(targetRosterPlayer);
  const throwInRosterPlayer=throwInName?targetTeam.roster.find(r=>fuzzyName(r.name)===fuzzyName(throwInName)&&fuzzyName(r.name)!==fuzzyName(targetName)):null;
  const throwIn=throwInRosterPlayer?tradePlayer(throwInRosterPlayer):null;
  const returnPlayers=throwIn?[target,throwIn]:[target];
  const myNeeds=getTeamNeeds(myKey);
  const oppNeeds=getTeamNeeds(targetTeamKey);
  const myCombos=tradeCombos(TEAMS[myKey].roster,3).filter(give=>give.length>=2);
  const trades=myCombos.map(give=>{
    const giveVal=comboVal(give);
    const getVal=comboVal(returnPlayers);
    const gap=Math.abs(giveVal-getVal);
    if(gap>3)return null;
    const oppFit=positionalFit(give,oppNeeds);
    return{
      title:`Offer ${comboLabel(give)} for ${comboLabel(returnPlayers)}`,
      opp:targetTeam.name,
      give,
      get:returnPlayers,
      myVal:giveVal,
      theirVal:getVal,
      gap,
      fit:oppFit,
      need:`Target: ${comboLabel(returnPlayers)}`,
      why:oppFit?`${targetTeam.name} gets need help at ${give.filter(p=>oppNeeds.needs.some(n=>n.pos===p.pos)).map(p=>p.pos).join(", ")} while staying within ${gap} points of value.`:`This is a value-matched offer for ${target.name}; it may need team-fit persuasion because it does not directly hit a listed need.`,
      whyMe:`You get ${returnPlayers.map(p=>`${p.name} (${p.pos}, ${p.score})`).join(" and ")} with a strict ${gap}-point value gap. Your outgoing side uses ${give.length} players, so the package is closer to a realistic consolidation offer. ${myNeeds.needs.length?`It also fits your roster if ${target.pos} is a priority.`:"This is primarily a star-target move."}`
    };
  }).filter(Boolean);
  return trades.sort((a,b)=>a.gap-b.gap||b.fit-a.fit||a.give.length-b.give.length||b.myVal-a.myVal).slice(0,8);
}

function runFinder(){
  if(!finderKey)return;
  const btn=document.getElementById("finder-btn");
  btn.disabled=true;btn.innerHTML='<span class="spin"></span> Finding even trades…';
  const my=TEAMS[finderKey];
  const myNeeds=getTeamNeeds(finderKey);
  let fixedGive=null;
  if(finderMode==="shop"){
    fixedGive=TEAMS[finderKey].roster.filter(r=>finderShop.includes(r.name)).map(tradePlayer);
    if(!fixedGive.length){
      document.getElementById("finder-result").innerHTML='<div class="ai-out">Pick at least one player to shop, or switch back to Find Any Trade.</div>';
      btn.disabled=false;btn.innerHTML="🎯 Find Balanced Trades";
      return;
    }
  }
  if(finderMode==="target"){
    if(!finderTargetTeam||!finderTargetName){
      document.getElementById("finder-result").innerHTML='<div class="ai-out">Pick the opponent team and target player first.</div>';
      btn.disabled=false;btn.innerHTML="🎯 Find Balanced Trades";
      return;
    }
    const targetRosterPlayer=TEAMS[finderTargetTeam]?.roster.find(r=>fuzzyName(r.name)===fuzzyName(finderTargetName));
    if(!targetRosterPlayer){
      document.getElementById("finder-result").innerHTML='<div class="ai-out">That target is no longer on the selected roster. Pick a target again.</div>';
      btn.disabled=false;btn.innerHTML="🎯 Find Balanced Trades";
      return;
    }
    const target=tradePlayer(targetRosterPlayer);
    const trades=generateTargetTrades(finderKey,finderTargetTeam,finderTargetName,finderTargetThrowIn);
    const heading=finderTargetThrowIn
      ? `TARGETING ${target.name.toUpperCase()} + ${finderTargetThrowIn.toUpperCase()}`
      : `TARGETING ${target.name.toUpperCase()}`;
    renderFinderCandidates(trades,my.name,myNeeds,heading);
    btn.disabled=false;btn.innerHTML="🎯 Find Balanced Trades";
    return;
  }
  const trades=generateBalancedTrades(finderKey,fixedGive);
  renderFinderCandidates(trades,my.name,myNeeds);
  btn.disabled=false;btn.innerHTML="🎯 Find Balanced Trades";
}

function renderFinderCandidates(trades,myName,myNeeds,heading){
  if(!trades.length){
    document.getElementById("finder-result").innerHTML=`<div class="ai-out">No strict matches found within a 3-point gap. Try a larger outgoing package, a different target, or use Trade Analyzer manually.</div>`;
    return;
  }
  renderFinderTradeCards(trades,myName,myNeeds,heading);
}

function renderFinderResults(text,myName,myNeeds){
  const blocks=text.split("TRADE_START").slice(1);
  if(!blocks.length){document.getElementById("finder-result").innerHTML=`<div class="ai-out" style="white-space:pre-wrap">${text}</div>`;return;}
  const g=(lines,key)=>{const l=lines.find(x=>x.startsWith(key+":"));return l?l.slice(key.length+1).trim():"";};
  const pp=str=>str.split("||").map(s=>{const p=s.split("|");return{name:(p[0]||"").trim(),pos:(p[1]||"WR").trim(),score:parseInt(p[2])||0};}).filter(p=>p.name);
  const trades=blocks.map(b=>{const ls=b.split("\n").map(l=>l.trim()).filter(Boolean);return{
    title:g(ls,"TITLE"),opp:g(ls,"OPPONENT"),
    give:pp(g(ls,"IGIVE")),get:pp(g(ls,"IGET")),
    myVal:parseInt(g(ls,"MY_VAL"))||0,theirVal:parseInt(g(ls,"THEIR_VAL"))||0,
    need:g(ls,"NEED_FILLED"),why:g(ls,"WHY"),whyMe:g(ls,"WHY_ME")
  };}).filter(t=>Math.abs((t.theirVal||0)-(t.myVal||0))<=3);
  renderFinderTradeCards(trades,myName,myNeeds);
}

function renderFinderTradeCards(trades,myName,myNeeds,heading){
  // Need summary
  const needsHtml = myNeeds.needs.length
    ? `<div style="display:flex;flex-wrap:wrap;gap:6px;margin-bottom:16px">${myNeeds.needs.map(n=>`<span style="background:var(--red-dim);color:var(--red);border:1px solid rgba(255,77,109,.25);border-radius:6px;padding:3px 10px;font-size:12px;font-family:'JetBrains Mono',monospace">⚠ Need ${n.pos} (avg ${n.avg})</span>`).join("")}${myNeeds.strengths.map(s=>`<span style="background:var(--green-dim);color:var(--green);border:1px solid rgba(0,255,157,.2);border-radius:6px;padding:3px 10px;font-size:12px;font-family:'JetBrains Mono',monospace">✓ Strong ${s.pos} (avg ${s.avg})</span>`).join("")}</div>`
    : `<div style="margin-bottom:16px;font-size:13px;color:var(--green)">✓ Balanced roster — all positions solid</div>`;

  document.getElementById("finder-result").innerHTML=
    `<div style="font-family:'Syne',sans-serif;font-size:18px;font-weight:700;margin-bottom:8px">${trades.length} ${heading||`BALANCED TRADES FOR ${myName.toUpperCase()}`}</div>
    <div style="font-size:12px;color:var(--text2);margin-bottom:12px;font-family:'JetBrains Mono',monospace">Only showing trades with a 0-3 point score gap.</div>
    ${needsHtml}`+
    trades.map((t,i)=>{
      const gap=Math.abs((t.theirVal||0)-(t.myVal||0));
      const gapLabel=gap===0?`Perfect match`:gap===1?`1 pt gap`:`${gap} pt gap`;
      const gapColor=gap<=1?"var(--green)":gap<=3?"var(--gold)":"var(--red)";
      return `<div class="prop-card">
        <div style="display:flex;align-items:flex-start;justify-content:space-between;margin-bottom:12px;gap:8px;flex-wrap:wrap">
          <div><div class="prop-title">${t.title||"Trade "+(i+1)}</div><div class="prop-opp">vs. ${t.opp}</div></div>
          <div style="display:flex;gap:6px;flex-wrap:wrap;align-items:center">
            ${t.need?`<span style="background:rgba(0,229,255,.1);color:var(--accent);border:1px solid rgba(0,229,255,.2);border-radius:5px;padding:2px 8px;font-size:11px;font-family:'JetBrains Mono',monospace">Fills: ${t.need}</span>`:""}
            <span style="font-family:'JetBrains Mono',monospace;font-size:11px;color:${gapColor};background:rgba(0,0,0,.3);padding:3px 10px;border-radius:999px;border:1px solid ${gapColor}">${gapLabel}</span>
          </div>
        </div>
        <div class="g2" style="margin-bottom:10px">
          <div style="background:rgba(255,77,109,.05);border:1px solid rgba(255,77,109,.15);border-radius:8px;padding:10px">
            <div style="font-size:10px;font-family:'JetBrains Mono',monospace;text-transform:uppercase;letter-spacing:.1em;color:var(--red);margin-bottom:6px">You give</div>
            ${(t.give||[]).map(p=>`<div class="tpl-row">${pb(p.pos||"WR")}<span style="flex:1;font-size:13px;font-weight:500">${p.name}</span><span class="mono" style="font-size:12px;color:var(--text2)">${p.score}</span></div>`).join("")}
            <div class="mono" style="font-size:11px;color:var(--text3);margin-top:6px">Total: ${t.myVal}</div>
          </div>
          <div style="background:rgba(0,255,157,.05);border:1px solid rgba(0,255,157,.15);border-radius:8px;padding:10px">
            <div style="font-size:10px;font-family:'JetBrains Mono',monospace;text-transform:uppercase;letter-spacing:.1em;color:var(--green);margin-bottom:6px">You get</div>
            ${(t.get||[]).map(p=>`<div class="tpl-row">${pb(p.pos||"WR")}<span style="flex:1;font-size:13px;font-weight:500">${p.name}</span><span class="mono" style="font-size:12px;color:var(--text2)">${p.score}</span></div>`).join("")}
            <div class="mono" style="font-size:11px;color:var(--text3);margin-top:6px">Total: ${t.theirVal}</div>
          </div>
        </div>
        ${t.why?`<div class="mono" style="font-size:11px;color:var(--text3);margin-bottom:8px">WHY THEY DO IT: ${t.why}</div>`:""}
        ${t.whyMe?`<div style="font-size:13px;color:var(--text2);line-height:1.65;border-left:2px solid var(--accent);padding-left:10px">${t.whyMe}</div>`:""}
      </div>`;
    }).join("");
}

// ═══ ROSTER EDITOR ═══
function initEditor(){
  const opts=Object.entries(TEAMS).map(([k,t])=>`<option value="${k}">${t.name}</option>`).join("");
  const prevAddDropTeam=document.getElementById("adddrop-team")?.value||"";
  ["trade-team-give","trade-team-recv","adddrop-team"].forEach(id=>{
    document.getElementById(id).innerHTML="<option value=''>— select team —</option>"+opts;
  });
  if(prevAddDropTeam&&TEAMS[prevAddDropTeam])document.getElementById("adddrop-team").value=prevAddDropTeam;
  document.getElementById("editor-team-grid").innerHTML=Object.entries(TEAMS).map(([k,t])=>`
    <div class="team-tile" onclick="editorViewTeam('${k}')">
      <div style="font-size:13px;font-weight:600;font-family:'Syne',sans-serif">${t.name}</div>
      <div style="font-size:11px;color:var(--text2);font-family:'JetBrains Mono',monospace;margin-top:4px">${t.roster.length} players</div>
    </div>`).join("");

  // Wire up team select → player dropdowns
  document.getElementById("trade-team-give").onchange=function(){loadTradeGivePlayers();};
  document.getElementById("trade-team-recv").onchange=function(){loadTradeRecvPlayers();};
  document.getElementById("adddrop-team").onchange=function(){loadAddSelect();loadDropSelect();};
  loadAddSelect();
  loadDropSelect();
}

function loadTradeGivePlayers(){
  const k=document.getElementById("trade-team-give").value;
  const el=document.getElementById("trade-give-players");
  if(!k){el.innerHTML="";return;}
  el.innerHTML=`<div style="font-size:12px;color:var(--text2);margin-bottom:6px">Select players being sent:</div>`+
    TEAMS[k].roster.map(r=>`<label style="display:flex;align-items:center;gap:8px;padding:4px 0;cursor:pointer;font-size:13px">
      <input type="checkbox" value="${r.name}" style="width:auto;margin:0"> ${r.name} ${pb(r.pos)} <span class="mono" style="font-size:11px;color:var(--text3)">${ps(r.name)}</span>
    </label>`).join("");
}

function loadTradeRecvPlayers(){
  const k=document.getElementById("trade-team-recv").value;
  const el=document.getElementById("trade-recv-players");
  if(!k){el.innerHTML="";return;}
  el.innerHTML=`<div style="font-size:12px;color:var(--text2);margin-bottom:6px">Select players coming back:</div>`+
    TEAMS[k].roster.map(r=>`<label style="display:flex;align-items:center;gap:8px;padding:4px 0;cursor:pointer;font-size:13px">
      <input type="checkbox" value="${r.name}" style="width:auto;margin:0"> ${r.name} ${pb(r.pos)} <span class="mono" style="font-size:11px;color:var(--text3)">${ps(r.name)}</span>
    </label>`).join("");
}

function loadDropSelect(){
  const k=document.getElementById("adddrop-team").value;
  const sel=document.getElementById("drop-player-select");
  if(!k){sel.innerHTML="<option value=''>— pick player to drop —</option>";return;}
  sel.innerHTML="<option value=''>— pick player to drop —</option>"+
    TEAMS[k].roster.map(r=>`<option value="${r.name}">${r.name} (${r.pos})</option>`).join("");
}

function loadAddSelect(){
  const k=document.getElementById("adddrop-team").value;
  const sel=document.getElementById("add-player-select");
  if(!sel)return;
  const waiverPlayers=getWaiverPlayers();
  if(!k){sel.innerHTML="<option value=''>— select team first —</option>";return;}
  sel.innerHTML="<option value=''>— pick waiver player to add —</option>"+
    waiverPlayers.map(p=>`<option value="${escAttr(p.name)}">${escHtml(p.name)} (${p.pos}) — ${p.nfl||"FA"} · ${p.score}</option>`).join("");
}

function executeTrade(){
  const giveKey=document.getElementById("trade-team-give").value;
  const recvKey=document.getElementById("trade-team-recv").value;
  if(!giveKey||!recvKey){document.getElementById("trade-exec-status").innerHTML='<span style="color:var(--red)">Select both teams first.</span>';return;}
  
  const givePlayers=[...document.querySelectorAll("#trade-give-players input:checked")].map(i=>i.value);
  const recvPlayers=[...document.querySelectorAll("#trade-recv-players input:checked")].map(i=>i.value);
  
  if(!givePlayers.length&&!recvPlayers.length){document.getElementById("trade-exec-status").innerHTML='<span style="color:var(--red)">Select at least one player to move.</span>';return;}

  // Move give players from giveTeam to recvTeam
  givePlayers.forEach(name=>{
    const idx=TEAMS[giveKey].roster.findIndex(r=>r.name===name);
    if(idx>-1){
      const player=TEAMS[giveKey].roster.splice(idx,1)[0];
      TEAMS[recvKey].roster.push(player);
    }
  });
  // Move recv players from recvTeam to giveTeam
  recvPlayers.forEach(name=>{
    const idx=TEAMS[recvKey].roster.findIndex(r=>r.name===name);
    if(idx>-1){
      const player=TEAMS[recvKey].roster.splice(idx,1)[0];
      TEAMS[giveKey].roster.push(player);
    }
  });

  const giveNames=givePlayers.join(", ")||"—";
  const recvNames=recvPlayers.join(", ")||"—";
  document.getElementById("trade-exec-status").innerHTML=`<span style="color:var(--green)">✓ Trade executed! ${TEAMS[giveKey].name} gave ${giveNames} · received ${recvNames}</span>`;
  refreshRosterViews();
  
  // Reload the checkboxes
  loadTradeGivePlayers();
  loadTradeRecvPlayers();
}

function addPlayer(){
  const k=document.getElementById("adddrop-team").value;
  const name=document.getElementById("add-player-select").value;
  if(!k||!name){document.getElementById("adddrop-status").innerHTML='<span style="color:var(--red)">Select a team and waiver player.</span>';return;}
  const ranked=getP(name);
  if(!ranked||ownerOfPlayer(ranked)){document.getElementById("adddrop-status").innerHTML='<span style="color:var(--red)">That player is no longer available on waivers.</span>';loadAddSelect();return;}
  removePlayerFromAllRosters(name);
  TEAMS[k].roster.push(rosterPlayerFromRanked(ranked));
  refreshRosterViews();
  document.getElementById("adddrop-status").innerHTML=`<span style="color:var(--green)">✓ Added ${escHtml(ranked.name)} (${ranked.pos}) from waivers to ${escHtml(TEAMS[k].name)}</span>`;
  loadAddSelect();
  loadDropSelect();
}

function dropPlayer(){
  const k=document.getElementById("adddrop-team").value;
  const name=document.getElementById("drop-player-select").value;
  if(!k||!name){document.getElementById("adddrop-status").innerHTML='<span style="color:var(--red)">Select a team and player.</span>';return;}
  
  const idx=TEAMS[k].roster.findIndex(r=>r.name===name);
  if(idx>-1){
    TEAMS[k].roster.splice(idx,1);
    refreshRosterViews();
    document.getElementById("adddrop-status").innerHTML=`<span style="color:var(--gold)">✓ Dropped ${escHtml(name)} from ${escHtml(TEAMS[k].name)}. Player is now on waivers.</span>`;
    loadAddSelect();
    loadDropSelect();
  }
}

function editorViewTeam(k){
  const team=TEAMS[k];
  const byPos={QB:[],RB:[],WR:[],TE:[],K:[],DEF:[]};
  team.roster.forEach(r=>{const pos=r.pos.replace("/ST","");if(!byPos[pos])byPos[pos]=[];byPos[pos].push(r);});
  let html=`<div class="card" style="margin-top:12px">
    <div style="font-family:'Syne',sans-serif;font-size:16px;font-weight:700;margin-bottom:12px">${team.name} — ${team.roster.length} players</div>`;
  ["QB","RB","WR","TE","K","DEF"].forEach(pos=>{
    if(!byPos[pos]||!byPos[pos].length)return;
    html+=`<div style="font-size:10px;font-family:'JetBrains Mono',monospace;text-transform:uppercase;letter-spacing:.1em;color:var(--text3);padding:6px 0 3px;border-top:1px solid var(--border);margin-top:4px">${pos}</div>`;
    html+=byPos[pos].map(r=>`<div style="display:flex;align-items:center;gap:8px;padding:4px 0">${pb(r.pos)}<span style="flex:1;font-size:13px">${r.name}</span><span class="mono" style="font-size:12px;color:var(--text3)">${ps(r.name)}</span></div>`).join("");
  });
  html+=`</div>`;
  document.getElementById("editor-roster-view").innerHTML=html;
}


// ═══════════════════════════════════════════════
// PLAYER MODAL
// ═══════════════════════════════════════════════
function showPlayer(name){
  const p=getP(name);
  if(!p)return;
  const owner=ownerOfPlayer(p)||"Unowned (Free Agent)";
  document.getElementById("player-modal-content").innerHTML=`
    <div style="display:flex;align-items:flex-start;justify-content:space-between;margin-bottom:16px">
      <div>
        <div style="font-family:'Syne',sans-serif;font-size:22px;font-weight:700">${p.name}</div>
        <div style="font-size:12px;color:var(--text2);font-family:'JetBrains Mono',monospace;margin-top:4px">${p.nfl} · Age ${p.age} · ${tier(p.score)}</div>
      </div>
      ${pb(p.pos)}
    </div>
    <div class="g4 mb" style="gap:8px">
      <div class="card-sm"><div class="stat-label">Score</div><div class="stat-val" style="color:var(--accent)">${p.score}</div></div>
      <div class="card-sm"><div class="stat-label">Overall Rank</div><div class="stat-val">#${p.rank}</div></div>
      <div class="card-sm"><div class="stat-label">Manual Rank</div><div class="stat-val">${p.manualRank?"#"+p.manualRank:"—"}</div></div>
      <div class="card-sm"><div class="stat-label">NFL Team</div><div class="stat-val">${p.nfl||"—"}</div></div>
    </div>
    <div class="card-sm mb" style="background:${p.trend>0?"rgba(0,255,157,.06)":"rgba(255,77,109,.06)"}">
      <div style="display:flex;align-items:center;justify-content:space-between">
        <div><div class="stat-label">7-day trend</div><span class="badge ${p.trend>0?"b-up":"b-down"}" style="font-size:13px;padding:4px 12px">${p.trend>0?"+":""}${p.trend} pts</span></div>
        <div>${spark(p.history,p.trend>0?"#059669":"#dc2626")}</div>
      </div>
    </div>
    <div class="card-sm mb">
      <div class="stat-label" style="margin-bottom:6px">8-Week Value History</div>
      <div style="display:flex;align-items:flex-end;gap:3px;height:40px">
        ${p.history.map(v=>`<div style="flex:1;background:var(--accent);opacity:${0.3+v/150};border-radius:2px 2px 0 0;height:${Math.round(v/99*100)}%"></div>`).join("")}
      </div>
    </div>
    <div class="card-sm mb">
      <div class="stat-label">Owned By</div>
      <div style="font-size:15px;font-weight:600;color:${owner==="Unowned (Free Agent)"?"var(--text3)":"var(--accent)"};margin-top:4px">${owner}</div>
    </div>
    <button class="btn btn-ghost btn-full" onclick="closePlayerModal()">Close</button>`;
  document.getElementById("player-modal").classList.add("open");
}
function closePlayerModal(e){if(!e||e.target===document.getElementById("player-modal"))document.getElementById("player-modal").classList.remove("open");}

// ═══════════════════════════════════════════════
// API KEY
// ═══════════════════════════════════════════════
function openApiModal(){
  const saved=localStorage.getItem("dc_api_key");
  if(saved)document.getElementById("api-input").value=saved;
  document.getElementById("api-modal").classList.add("open");
}
function closeApiModal(e){if(!e||e.target===document.getElementById("api-modal"))document.getElementById("api-modal").classList.remove("open");}
function saveKey(){
  const k=document.getElementById("api-input").value.trim();
  if(!k){document.getElementById("api-status").textContent="⚠ Enter a key first";return;}
  localStorage.setItem("dc_api_key",k);
  document.getElementById("api-status").textContent="✓ Key saved! AI features active.";
  document.getElementById("api-btn").classList.add("connected");
  setTimeout(closeApiModal,1200);
}
window.addEventListener("load",()=>{if(localStorage.getItem("dc_api_key"))document.getElementById("api-btn").classList.add("connected");});

// ═══════════════════════════════════════════════
// INIT
// ═══════════════════════════════════════════════
bootApp();
