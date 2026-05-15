const PLAYERS = [
  {name:"Ja'Marr Chase",pos:"WR",nfl:"CIN",age:26,avgRank:2.3,nsrc:12,si:2,pff:3,espn:3,ktc:3,pfn:5,ftn:4,gen:2,ktc2:2,ffc:1,df:1,rb:1,ffa:1},
  {name:"Bijan Robinson",pos:"RB",nfl:"ATL",age:24,avgRank:2.8,nsrc:12,si:3,pff:5,espn:1,ktc:1,pfn:4,ftn:1,gen:1,ktc2:3,ffc:3,df:5,rb:3,ffa:3},
  {name:"Jahmyr Gibbs",pos:"RB",nfl:"DET",age:24,avgRank:4.6,nsrc:12,si:4,pff:4,espn:4,ktc:5,pfn:8,ftn:2,gen:3,ktc2:5,ffc:5,df:6,rb:4,ffa:5},
  {name:"Jaxon Smith-Njigba",pos:"WR",nfl:"SEA",age:24,avgRank:5.0,nsrc:12,si:5,pff:1,espn:5,ktc:4,pfn:6,ftn:6,gen:4,ktc2:4,ffc:18,df:3,rb:2,ffa:2},
  {name:"Puka Nacua",pos:"WR",nfl:"LAR",age:25,avgRank:5.1,nsrc:12,si:1,pff:2,espn:2,ktc:7,pfn:12,ftn:5,gen:4,ktc2:7,ffc:8,df:2,rb:5,ffa:6},
  {name:"CeeDee Lamb",pos:"WR",nfl:"DAL",age:27,avgRank:8.6,nsrc:11,si:8,pff:11,espn:8,ktc:null,pfn:7,ftn:9,gen:7,ktc2:19,ffc:4,df:4,rb:9,ffa:9},
  {name:"Justin Jefferson",pos:"WR",nfl:"MIN",age:27,avgRank:9.5,nsrc:11,si:7,pff:9,espn:null,ktc:13,pfn:14,ftn:21,gen:8,ktc2:13,ffc:2,df:7,rb:6,ffa:4},
  {name:"Amon-Ra St. Brown",pos:"WR",nfl:"DET",age:26,avgRank:9.7,nsrc:12,si:6,pff:7,espn:7,ktc:12,pfn:23,ftn:11,gen:9,ktc2:11,ffc:7,df:8,rb:8,ffa:7},
  {name:"Malik Nabers",pos:"WR",nfl:"NYG",age:23,avgRank:10.6,nsrc:11,si:9,pff:10,espn:null,ktc:10,pfn:16,ftn:15,gen:12,ktc2:10,ffc:6,df:10,rb:7,ffa:12},
  {name:"De'Von Achane",pos:"RB",nfl:"MIA",age:24,avgRank:11.5,nsrc:12,si:12,pff:13,espn:5,ktc:11,pfn:11,ftn:7,gen:6,ktc2:22,ffc:14,df:9,rb:14,ffa:14},
  {name:"Ashton Jeanty",pos:"RB",nfl:"LV",age:22,avgRank:12.2,nsrc:10,si:10,pff:12,espn:null,ktc:null,pfn:10,ftn:16,gen:15,ktc2:16,ffc:11,df:11,rb:10,ffa:11},
  {name:"Jeremiyah Love",pos:"RB",nfl:"ARI",age:20,avgRank:12.6,nsrc:7,si:11,pff:15,espn:null,ktc:14,pfn:null,ftn:null,gen:null,ktc2:14,ffc:null,df:12,rb:12,ffa:10},
  {name:"Drake London",pos:"WR",nfl:"ATL",age:25,avgRank:14.0,nsrc:8,si:14,pff:18,espn:null,ktc:null,pfn:null,ftn:null,gen:12,ktc2:21,ffc:15,df:13,rb:11,ffa:8},
  {name:"James Cook III",pos:"RB",nfl:"BUF",age:27,avgRank:15.0,nsrc:1,si:null,pff:null,espn:null,ktc:null,pfn:null,ftn:null,gen:null,ktc2:null,ffc:null,df:15,rb:null,ffa:null},
  {name:"Brock Bowers",pos:"TE",nfl:"LV",age:23,avgRank:15.5,nsrc:11,si:15,pff:8,espn:null,ktc:8,pfn:13,ftn:26,gen:20,ktc2:8,ffc:13,df:31,rb:13,ffa:15},
  {name:"Trey McBride",pos:"TE",nfl:"ARI",age:26,avgRank:16.4,nsrc:9,si:13,pff:6,espn:null,ktc:null,pfn:null,ftn:14,gen:17,ktc2:17,ffc:24,df:23,rb:15,ffa:19},
  {name:"Jonathan Taylor",pos:"RB",nfl:"IND",age:27,avgRank:18.3,nsrc:10,si:17,pff:17,espn:null,ktc:null,pfn:20,ftn:8,gen:7,ktc2:35,ffc:26,df:16,rb:16,ffa:21},
  {name:"Tetairoa McMillan",pos:"WR",nfl:"CAR",age:23,avgRank:19.0,nsrc:6,si:18,pff:20,espn:null,ktc:null,pfn:null,ftn:null,gen:null,ktc2:27,ffc:null,df:18,rb:18,ffa:13},
  {name:"Nico Collins",pos:"WR",nfl:"HOU",age:27,avgRank:20.3,nsrc:9,si:19,pff:22,espn:null,ktc:null,pfn:null,ftn:17,gen:16,ktc2:42,ffc:10,df:17,rb:20,ffa:20},
  {name:"Drake Maye",pos:"QB",nfl:"NE",age:24,avgRank:20.6,nsrc:8,si:28,pff:21,espn:null,ktc:6,pfn:9,ftn:null,gen:null,ktc2:6,ffc:null,df:25,rb:27,ffa:43},
  {name:"Emeka Egbuka",pos:"WR",nfl:"TB",age:23,avgRank:21.2,nsrc:6,si:20,pff:19,espn:null,ktc:null,pfn:null,ftn:null,gen:null,ktc2:30,ffc:null,df:22,rb:19,ffa:17},
  {name:"Josh Allen",pos:"QB",nfl:"BUF",age:30,avgRank:21.9,nsrc:9,si:22,pff:14,espn:null,ktc:null,pfn:1,ftn:30,gen:24,ktc2:null,ffc:20,df:19,rb:21,ffa:46},
  {name:"Omarion Hampton",pos:"RB",nfl:"LAC",age:23,avgRank:21.9,nsrc:8,si:21,pff:23,espn:null,ktc:null,pfn:null,ftn:19,gen:null,ktc2:25,ffc:23,df:21,rb:25,ffa:18},
  {name:"George Pickens",pos:"WR",nfl:"DAL",age:25,avgRank:23.7,nsrc:7,si:23,pff:25,espn:null,ktc:null,pfn:null,ftn:25,gen:null,ktc2:33,ffc:null,df:20,rb:24,ffa:16},
  {name:"Jayden Daniels",pos:"QB",nfl:"WAS",age:25,avgRank:27.8,nsrc:9,si:41,pff:37,espn:null,ktc:11,pfn:7,ftn:null,gen:null,ktc2:12,ffc:27,df:28,rb:32,ffa:55},
  {name:"Lamar Jackson",pos:"QB",nfl:"BAL",age:29,avgRank:27.9,nsrc:9,si:36,pff:28,espn:null,ktc:15,pfn:2,ftn:null,gen:null,ktc2:15,ffc:25,df:36,rb:31,ffa:63},
  {name:"Garrett Wilson",pos:"WR",nfl:"NYJ",age:26,avgRank:28.1,nsrc:8,si:29,pff:30,espn:null,ktc:null,pfn:null,ftn:29,gen:null,ktc2:40,ffc:21,df:26,rb:23,ffa:27},
  {name:"Rashee Rice",pos:"WR",nfl:"KC",age:26,avgRank:28.6,nsrc:7,si:16,pff:16,espn:null,ktc:null,pfn:null,ftn:13,gen:null,ktc2:null,ffc:70,df:14,rb:26,ffa:45},
  {name:"Ladd McConkey",pos:"WR",nfl:"LAC",age:24,avgRank:29.0,nsrc:6,si:35,pff:36,espn:null,ktc:null,pfn:null,ftn:null,gen:null,ktc2:null,ffc:17,df:27,rb:29,ffa:30},
  {name:"Carnell Tate",pos:"WR",nfl:"TEN",age:21,avgRank:29.2,nsrc:6,si:24,pff:27,espn:null,ktc:null,pfn:null,ftn:null,gen:null,ktc2:36,ffc:null,df:37,rb:22,ffa:29},
  {name:"Jordyn Tyson",pos:"WR",nfl:"NO",age:21,avgRank:32.6,nsrc:5,si:37,pff:41,espn:null,ktc:null,pfn:null,ftn:null,gen:null,ktc2:null,ffc:null,df:29,rb:28,ffa:28},
  {name:"A.J. Brown",pos:"WR",nfl:"PHI",age:29,avgRank:32.7,nsrc:7,si:39,pff:40,espn:null,ktc:null,pfn:null,ftn:28,gen:null,ktc2:null,ffc:16,df:32,rb:35,ffa:39},
  {name:"Chris Olave",pos:"WR",nfl:"NO",age:26,avgRank:34.1,nsrc:7,si:27,pff:29,espn:null,ktc:null,pfn:null,ftn:null,gen:null,ktc2:45,ffc:52,df:30,rb:30,ffa:26},
  {name:"Kenneth Walker III",pos:"RB",nfl:"KC",age:25,avgRank:34.7,nsrc:7,si:31,pff:31,espn:null,ktc:null,pfn:null,ftn:null,gen:null,ktc2:48,ffc:40,df:24,rb:36,ffa:33},
  {name:"Christian McCaffrey",pos:"RB",nfl:"SF",age:30,avgRank:35.1,nsrc:8,si:47,pff:50,espn:null,ktc:null,pfn:null,ftn:3,gen:8,ktc2:null,ffc:31,df:52,rb:34,ffa:56},
  {name:"Colston Loveland",pos:"TE",nfl:"CHI",age:22,avgRank:35.2,nsrc:6,si:34,pff:33,espn:null,ktc:null,pfn:null,ftn:null,gen:null,ktc2:32,ffc:null,df:44,rb:45,ffa:23},
  {name:"Bucky Irving",pos:"RB",nfl:"TB",age:24,avgRank:35.4,nsrc:9,si:32,pff:35,espn:null,ktc:22,pfn:22,ftn:24,gen:null,ktc2:null,ffc:22,df:62,rb:52,ffa:48},
  {name:"Luther Burden III",pos:"WR",nfl:"CHI",age:22,avgRank:35.8,nsrc:5,si:33,pff:34,espn:null,ktc:null,pfn:null,ftn:null,gen:null,ktc2:null,ffc:null,df:40,rb:38,ffa:34},
  {name:"Chase Brown",pos:"RB",nfl:"CIN",age:26,avgRank:37.4,nsrc:8,si:42,pff:43,espn:null,ktc:null,pfn:15,ftn:20,gen:null,ktc2:null,ffc:36,df:50,rb:42,ffa:51},
  {name:"Saquon Barkley",pos:"RB",nfl:"PHI",age:29,avgRank:38.3,nsrc:9,si:56,pff:60,espn:null,ktc:21,pfn:21,ftn:23,gen:null,ktc2:null,ffc:12,df:55,rb:39,ffa:58},
  {name:"TreVeyon Henderson",pos:"RB",nfl:"NE",age:23,avgRank:39.4,nsrc:8,si:26,pff:26,espn:null,ktc:null,pfn:null,ftn:27,gen:null,ktc2:50,ffc:42,df:65,rb:43,ffa:36},
  {name:"Tee Higgins",pos:"WR",nfl:"CIN",age:27,avgRank:40.0,nsrc:6,si:38,pff:38,espn:null,ktc:null,pfn:null,ftn:null,gen:null,ktc2:null,ffc:28,df:57,rb:44,ffa:35},
  {name:"DeVonta Smith",pos:"WR",nfl:"PHI",age:27,avgRank:40.0,nsrc:6,si:40,pff:42,espn:null,ktc:null,pfn:null,ftn:null,gen:null,ktc2:null,ffc:30,df:41,rb:50,ffa:37},
  {name:"Caleb Williams",pos:"QB",nfl:"CHI",age:24,avgRank:40.7,nsrc:7,si:48,pff:51,espn:null,ktc:9,pfn:null,ftn:null,gen:null,ktc2:9,ffc:null,df:54,rb:55,ffa:59},
  {name:"Zay Flowers",pos:"WR",nfl:"BAL",age:26,avgRank:41.8,nsrc:5,si:30,pff:32,espn:null,ktc:null,pfn:null,ftn:null,gen:null,ktc2:null,ffc:null,df:67,rb:49,ffa:31},
  {name:"Breece Hall",pos:"RB",nfl:"NYJ",age:25,avgRank:42.0,nsrc:7,si:45,pff:47,espn:null,ktc:null,pfn:null,ftn:null,gen:null,ktc2:46,ffc:29,df:39,rb:47,ffa:41},
  {name:"Kyren Williams",pos:"RB",nfl:"LAR",age:26,avgRank:42.7,nsrc:7,si:44,pff:46,espn:null,ktc:null,pfn:18,ftn:null,gen:null,ktc2:null,ffc:35,df:35,rb:53,ffa:68},
  {name:"Jaylen Waddle",pos:"WR",nfl:"DEN",age:27,avgRank:43.1,nsrc:7,si:54,pff:59,espn:null,ktc:null,pfn:23,ftn:null,gen:null,ktc2:null,ffc:45,df:33,rb:48,ffa:40},
  {name:"Tyler Warren",pos:"TE",nfl:"IND",age:24,avgRank:43.3,nsrc:6,si:46,pff:39,espn:null,ktc:null,pfn:null,ftn:null,gen:null,ktc2:38,ffc:null,df:47,rb:46,ffa:44},
  {name:"Makai Lemon",pos:"WR",nfl:"PHI",age:21,avgRank:43.6,nsrc:5,si:52,pff:57,espn:null,ktc:null,pfn:null,ftn:null,gen:null,ktc2:null,ffc:null,df:34,rb:37,ffa:38},
  {name:"Rome Odunze",pos:"WR",nfl:"CHI",age:24,avgRank:43.7,nsrc:7,si:51,pff:55,espn:null,ktc:null,pfn:null,ftn:null,gen:null,ktc2:49,ffc:37,df:49,rb:41,ffa:24},
  {name:"Brian Thomas Jr.",pos:"WR",nfl:"JAC",age:23,avgRank:44.3,nsrc:6,si:68,pff:73,espn:null,ktc:null,pfn:null,ftn:null,gen:null,ktc2:null,ffc:9,df:43,rb:51,ffa:22},
  {name:"Marvin Harrison Jr.",pos:"WR",nfl:"ARI",age:24,avgRank:45.0,nsrc:6,si:66,pff:65,espn:null,ktc:null,pfn:null,ftn:null,gen:null,ktc2:null,ffc:19,df:38,rb:33,ffa:49},
  {name:"Joe Burrow",pos:"QB",nfl:"CIN",age:29,avgRank:45.4,nsrc:7,si:49,pff:48,espn:null,ktc:null,pfn:15,ftn:null,gen:null,ktc2:18,ffc:null,df:42,rb:61,ffa:85},
  {name:"Justin Herbert",pos:"QB",nfl:"LAC",age:28,avgRank:48.3,nsrc:7,si:55,pff:49,espn:null,ktc:null,pfn:19,ftn:null,gen:null,ktc2:24,ffc:null,df:46,rb:75,ffa:70},
  {name:"Quinshon Judkins",pos:"RB",nfl:"CLE",age:22,avgRank:48.3,nsrc:7,si:43,pff:44,espn:null,ktc:null,pfn:null,ftn:null,gen:null,ktc2:47,ffc:46,df:68,rb:40,ffa:50},
  {name:"Jalen Hurts",pos:"QB",nfl:"PHI",age:28,avgRank:49.1,nsrc:8,si:50,pff:45,espn:null,ktc:null,pfn:17,ftn:null,gen:null,ktc2:28,ffc:53,df:45,rb:63,ffa:92},
  {name:"Josh Jacobs",pos:"RB",nfl:"GB",age:28,avgRank:49.4,nsrc:8,si:69,pff:72,espn:null,ktc:null,pfn:23,ftn:18,gen:null,ktc2:null,ffc:38,df:64,rb:57,ffa:54},
  {name:"Patrick Mahomes",pos:"QB",nfl:"KC",age:31,avgRank:50.8,nsrc:8,si:58,pff:53,espn:null,ktc:null,pfn:3,ftn:null,gen:null,ktc2:23,ffc:39,df:51,rb:66,ffa:113},
  {name:"Travis Etienne Jr.",pos:"RB",nfl:"NO",age:27,avgRank:52.0,nsrc:7,si:59,pff:63,espn:null,ktc:null,pfn:19,ftn:null,gen:null,ktc2:null,ffc:34,df:66,rb:56,ffa:67},
  {name:"Jameson Williams",pos:"WR",nfl:"DET",age:25,avgRank:54.8,nsrc:5,si:63,pff:66,espn:null,ktc:null,pfn:null,ftn:null,gen:null,ktc2:null,ffc:null,df:59,rb:54,ffa:32},
  {name:"Harold Fannin Jr.",pos:"TE",nfl:"CLE",age:22,avgRank:55.8,nsrc:5,si:57,pff:54,espn:null,ktc:null,pfn:null,ftn:null,gen:null,ktc2:null,ffc:null,df:48,rb:59,ffa:61},
  {name:"Jadarian Price",pos:"RB",nfl:"SEA",age:22,avgRank:59.2,nsrc:5,si:53,pff:56,espn:null,ktc:null,pfn:null,ftn:null,gen:null,ktc2:null,ffc:null,df:80,rb:60,ffa:47},
  {name:"Jaxson Dart",pos:"QB",nfl:"NYG",age:23,avgRank:62.2,nsrc:6,si:60,pff:64,espn:null,ktc:null,pfn:null,ftn:null,gen:null,ktc2:26,ffc:null,df:72,rb:78,ffa:73},
  {name:"KC Concepcion",pos:"WR",nfl:"CLE",age:21,avgRank:64.8,nsrc:5,si:67,pff:74,espn:null,ktc:null,pfn:null,ftn:null,gen:null,ktc2:null,ffc:null,df:70,rb:71,ffa:42},
  {name:"Jordan Addison",pos:"WR",nfl:"MIN",age:24,avgRank:65.0,nsrc:6,si:71,pff:78,espn:null,ktc:null,pfn:null,ftn:null,gen:null,ktc2:null,ffc:41,df:71,rb:64,ffa:65},
  {name:"Tucker Kraft",pos:"TE",nfl:"GB",age:25,avgRank:65.4,nsrc:5,si:61,pff:62,espn:null,ktc:null,pfn:null,ftn:null,gen:null,ktc2:null,ffc:null,df:58,rb:70,ffa:76},
  {name:"Cam Skattebo",pos:"RB",nfl:"NYG",age:24,avgRank:65.4,nsrc:5,si:65,pff:70,espn:null,ktc:null,pfn:null,ftn:null,gen:null,ktc2:null,ffc:null,df:77,rb:58,ffa:57},
  {name:"Sam LaPorta",pos:"TE",nfl:"DET",age:25,avgRank:66.2,nsrc:6,si:76,pff:75,espn:null,ktc:null,pfn:null,ftn:null,gen:null,ktc2:null,ffc:33,df:69,rb:65,ffa:79},
  {name:"Javonte Williams",pos:"RB",nfl:"DAL",age:25,avgRank:66.4,nsrc:5,si:62,pff:68,espn:null,ktc:null,pfn:null,ftn:null,gen:null,ktc2:null,ffc:null,df:87,rb:62,ffa:53},
  {name:"DJ Moore",pos:"WR",nfl:"BUF",age:28,avgRank:67.5,nsrc:4,si:null,pff:null,espn:null,ktc:null,pfn:null,ftn:null,gen:null,ktc2:null,ffc:48,df:93,rb:67,ffa:62},
  {name:"Kyle Pitts Sr.",pos:"TE",nfl:"ATL",age:25,avgRank:68.0,nsrc:5,si:64,pff:69,espn:null,ktc:null,pfn:null,ftn:null,gen:null,ktc2:null,ffc:null,df:53,rb:74,ffa:80},
  {name:"DK Metcalf",pos:"WR",nfl:"PIT",age:28,avgRank:69.2,nsrc:6,si:82,pff:79,espn:null,ktc:null,pfn:null,ftn:null,gen:null,ktc2:null,ffc:44,df:75,rb:69,ffa:66},
  {name:"Bo Nix",pos:"QB",nfl:"DEN",age:26,avgRank:69.8,nsrc:4,si:null,pff:null,espn:null,ktc:null,pfn:null,ftn:null,gen:null,ktc2:31,ffc:null,df:56,rb:96,ffa:96},
  {name:"Terry McLaurin",pos:"WR",nfl:"WAS",age:31,avgRank:70.3,nsrc:7,si:75,pff:82,espn:null,ktc:null,pfn:null,ftn:32,gen:null,ktc2:null,ffc:43,df:83,rb:82,ffa:95},
  {name:"RJ Harvey",pos:"RB",nfl:"DEN",age:25,avgRank:73.8,nsrc:6,si:74,pff:77,espn:null,ktc:null,pfn:17,ftn:null,gen:null,ktc2:null,ffc:null,df:120,rb:84,ffa:71},
  {name:"Christian Watson",pos:"WR",nfl:"GB",age:27,avgRank:74.0,nsrc:5,si:72,pff:80,espn:null,ktc:null,pfn:null,ftn:null,gen:null,ktc2:null,ffc:null,df:79,rb:87,ffa:52},
  {name:"Derrick Henry",pos:"RB",nfl:"BAL",age:32,avgRank:74.4,nsrc:7,si:89,pff:85,espn:null,ktc:null,pfn:null,ftn:29,gen:null,ktc2:null,ffc:75,df:86,rb:73,ffa:84},
  {name:"Bhayshul Tuten",pos:"RB",nfl:"JAC",age:23,avgRank:74.7,nsrc:6,si:90,pff:88,espn:null,ktc:null,pfn:24,ftn:null,gen:null,ktc2:null,ffc:null,df:101,rb:68,ffa:77},
  {name:"Trevor Lawrence",pos:"QB",nfl:"JAC",age:26,avgRank:77.3,nsrc:6,si:70,pff:76,espn:null,ktc:null,pfn:null,ftn:null,gen:null,ktc2:29,ffc:null,df:60,rb:101,ffa:128},
  {name:"Kenyon Sadiq",pos:"TE",nfl:"NYJ",age:21,avgRank:79.2,nsrc:5,si:87,pff:91,espn:null,ktc:null,pfn:null,ftn:null,gen:null,ktc2:null,ffc:null,df:63,rb:81,ffa:74},
  {name:"Xavier Worthy",pos:"WR",nfl:"KC",age:23,avgRank:80.7,nsrc:6,si:86,pff:84,espn:null,ktc:null,pfn:null,ftn:null,gen:null,ktc2:null,ffc:47,df:73,rb:105,ffa:89},
  {name:"Jayden Higgins",pos:"WR",nfl:"HOU",age:23,avgRank:80.8,nsrc:5,si:85,pff:83,espn:null,ktc:null,pfn:null,ftn:null,gen:null,ktc2:null,ffc:null,df:82,rb:90,ffa:64},
  {name:"Matthew Golden",pos:"WR",nfl:"GB",age:23,avgRank:82.6,nsrc:5,si:81,pff:71,espn:null,ktc:null,pfn:null,ftn:null,gen:null,ktc2:null,ffc:null,df:100,rb:89,ffa:72},
  {name:"Michael Pittman Jr.",pos:"WR",nfl:"PIT",age:28,avgRank:83.0,nsrc:7,si:93,pff:92,espn:null,ktc:null,pfn:null,ftn:31,gen:null,ktc2:null,ffc:63,df:92,rb:109,ffa:101},
  {name:"Brock Purdy",pos:"QB",nfl:"SF",age:26,avgRank:83.2,nsrc:6,si:91,pff:87,espn:null,ktc:null,pfn:null,ftn:null,gen:null,ktc2:37,ffc:null,df:61,rb:108,ffa:115},
  {name:"Davante Adams",pos:"WR",nfl:"LAR",age:33,avgRank:84.0,nsrc:3,si:null,pff:null,espn:null,ktc:null,pfn:null,ftn:null,gen:null,ktc2:null,ffc:null,df:94,rb:83,ffa:75},
  {name:"Wan'Dale Robinson",pos:"WR",nfl:"TEN",age:25,avgRank:84.2,nsrc:6,si:94,pff:97,espn:null,ktc:null,pfn:44,ftn:null,gen:null,ktc2:null,ffc:null,df:95,rb:77,ffa:98},
  {name:"Kyle Monangai",pos:"RB",nfl:"CHI",age:24,avgRank:85.2,nsrc:6,si:95,pff:99,espn:null,ktc:null,pfn:35,ftn:null,gen:null,ktc2:null,ffc:null,df:104,rb:88,ffa:90},
  {name:"Omar Cooper Jr.",pos:"WR",nfl:"NYJ",age:22,avgRank:86.4,nsrc:5,si:83,pff:86,espn:null,ktc:null,pfn:null,ftn:null,gen:null,ktc2:null,ffc:null,df:115,rb:79,ffa:69},
  {name:"Courtland Sutton",pos:"WR",nfl:"DEN",age:30,avgRank:89.0,nsrc:6,si:97,pff:98,espn:null,ktc:null,pfn:30,ftn:null,gen:null,ktc2:null,ffc:null,df:113,rb:91,ffa:105},
  {name:"Alec Pierce",pos:"WR",nfl:"IND",age:26,avgRank:89.0,nsrc:2,si:null,pff:null,espn:null,ktc:null,pfn:null,ftn:null,gen:null,ktc2:null,ffc:null,df:102,rb:76,ffa:null},
  {name:"Ricky Pearsall",pos:"WR",nfl:"SF",age:26,avgRank:89.8,nsrc:5,si:108,pff:110,espn:null,ktc:null,pfn:null,ftn:null,gen:null,ktc2:null,ffc:null,df:76,rb:95,ffa:60},
  {name:"Fernando Mendoza",pos:"QB",nfl:"LV",age:22,avgRank:96.3,nsrc:6,si:103,pff:102,espn:null,ktc:null,pfn:null,ftn:null,gen:null,ktc2:41,ffc:null,df:84,rb:125,ffa:123},
  {name:"Jordan Love",pos:"QB",nfl:"GB",age:27,avgRank:96.5,nsrc:6,si:92,pff:89,espn:null,ktc:null,pfn:null,ftn:null,gen:null,ktc2:44,ffc:null,df:109,rb:114,ffa:131},
  {name:"Jaylen Warren",pos:"RB",nfl:"PIT",age:27,avgRank:96.5,nsrc:6,si:110,pff:112,espn:null,ktc:null,pfn:32,ftn:null,gen:null,ktc2:null,ffc:null,df:90,rb:103,ffa:132},
  {name:"Jayden Reed",pos:"WR",nfl:"GB",age:26,avgRank:97.4,nsrc:7,si:125,pff:128,espn:null,ktc:null,pfn:42,ftn:null,gen:null,ktc2:null,ffc:79,df:128,rb:102,ffa:78},
  {name:"Chris Godwin Jr.",pos:"WR",nfl:"TB",age:30,avgRank:98.7,nsrc:3,si:null,pff:null,espn:null,ktc:null,pfn:null,ftn:null,gen:null,ktc2:null,ffc:null,df:105,rb:98,ffa:93},
  {name:"David Montgomery",pos:"RB",nfl:"HOU",age:29,avgRank:99.7,nsrc:6,si:114,pff:117,espn:null,ktc:null,pfn:27,ftn:null,gen:null,ktc2:null,ffc:null,df:136,rb:97,ffa:107},
  {name:"Jakobi Meyers",pos:"WR",nfl:"JAC",age:29,avgRank:100.0,nsrc:6,si:122,pff:125,espn:null,ktc:null,pfn:null,ftn:39,gen:null,ktc2:null,ffc:null,df:124,rb:86,ffa:104},
  {name:"Parker Washington",pos:"WR",nfl:"JAC",age:24,avgRank:100.0,nsrc:5,si:101,pff:104,espn:null,ktc:null,pfn:null,ftn:null,gen:null,ktc2:null,ffc:null,df:112,rb:100,ffa:83},
  {name:"Rhamondre Stevenson",pos:"RB",nfl:"NE",age:28,avgRank:100.3,nsrc:7,si:112,pff:115,espn:null,ktc:null,pfn:30,ftn:null,gen:null,ktc2:null,ffc:69,df:132,rb:142,ffa:102},
  {name:"Jake Ferguson",pos:"TE",nfl:"DAL",age:27,avgRank:100.8,nsrc:4,si:104,pff:106,espn:null,ktc:null,pfn:null,ftn:null,gen:null,ktc2:null,ffc:null,df:78,rb:115,ffa:null},
  {name:"D'Andre Swift",pos:"RB",nfl:"CHI",age:27,avgRank:101.2,nsrc:5,si:100,pff:101,espn:null,ktc:null,pfn:null,ftn:null,gen:null,ktc2:null,ffc:null,df:98,rb:80,ffa:127},
  {name:"Denzel Boston",pos:"WR",nfl:"CLE",age:22,avgRank:103.0,nsrc:5,si:99,pff:96,espn:null,ktc:null,pfn:null,ftn:null,gen:null,ktc2:null,ffc:null,df:134,rb:99,ffa:87},
  {name:"Oronde Gadsden",pos:"TE",nfl:"LAC",age:23,avgRank:103.8,nsrc:5,si:132,pff:133,espn:null,ktc:null,pfn:null,ftn:null,gen:null,ktc2:null,ffc:null,df:74,rb:94,ffa:86},
  {name:"Khalil Shakir",pos:"WR",nfl:"BUF",age:26,avgRank:104.0,nsrc:6,si:123,pff:126,espn:null,ktc:null,pfn:35,ftn:null,gen:null,ktc2:null,ffc:null,df:97,rb:122,ffa:121},
  {name:"Dak Prescott",pos:"QB",nfl:"DAL",age:33,avgRank:104.5,nsrc:2,si:null,pff:null,espn:null,ktc:null,pfn:null,ftn:null,gen:null,ktc2:null,ffc:null,df:96,rb:113,ffa:null},
  {name:"Tony Pollard",pos:"RB",nfl:"TEN",age:28,avgRank:104.7,nsrc:6,si:115,pff:118,espn:null,ktc:null,pfn:25,ftn:null,gen:null,ktc2:null,ffc:77,df:156,rb:137,ffa:null},
  {name:"Josh Downs",pos:"WR",nfl:"IND",age:25,avgRank:104.8,nsrc:5,si:124,pff:127,espn:null,ktc:null,pfn:null,ftn:null,gen:null,ktc2:null,ffc:null,df:99,rb:93,ffa:81},
  {name:"Isaiah Likely",pos:"TE",nfl:"NYG",age:26,avgRank:105.2,nsrc:5,si:107,pff:105,espn:null,ktc:null,pfn:null,ftn:null,gen:null,ktc2:null,ffc:null,df:89,rb:128,ffa:97},
  {name:"Mike Evans",pos:"WR",nfl:"SF",age:33,avgRank:106.0,nsrc:5,si:121,pff:124,espn:null,ktc:null,pfn:null,ftn:null,gen:null,ktc2:null,ffc:null,df:106,rb:85,ffa:94},
  {name:"Dalton Kincaid",pos:"TE",nfl:"BUF",age:27,avgRank:107.6,nsrc:5,si:111,pff:113,espn:null,ktc:null,pfn:null,ftn:null,gen:null,ktc2:null,ffc:null,df:81,rb:107,ffa:126},
  {name:"Bryce Young",pos:"QB",nfl:"CAR",age:24,avgRank:111.0,nsrc:1,si:null,pff:null,espn:null,ktc:null,pfn:null,ftn:null,gen:null,ktc2:null,ffc:null,df:111,rb:null,ffa:null},
  {name:"Zach Charbonnet",pos:"RB",nfl:"SEA",age:25,avgRank:111.6,nsrc:5,si:96,pff:94,espn:null,ktc:null,pfn:null,ftn:null,gen:null,ktc2:null,ffc:null,df:145,rb:104,ffa:119},
  {name:"Chris Bell",pos:"WR",nfl:"MIA",age:21,avgRank:112.0,nsrc:3,si:null,pff:null,espn:null,ktc:null,pfn:null,ftn:null,gen:null,ktc2:null,ffc:null,df:118,rb:119,ffa:99},
  {name:"Chuba Hubbard",pos:"RB",nfl:"CAR",age:27,avgRank:112.4,nsrc:5,si:106,pff:108,espn:null,ktc:null,pfn:null,ftn:null,gen:null,ktc2:null,ffc:null,df:108,rb:120,ffa:120},
  {name:"Quentin Johnston",pos:"WR",nfl:"LAC",age:25,avgRank:112.6,nsrc:5,si:113,pff:116,espn:null,ktc:null,pfn:null,ftn:null,gen:null,ktc2:null,ffc:null,df:122,rb:124,ffa:88},
  {name:"Rico Dowdle",pos:"RB",nfl:"PIT",age:28,avgRank:112.8,nsrc:6,si:126,pff:129,espn:null,ktc:null,pfn:33,ftn:null,gen:null,ktc2:null,ffc:null,df:129,rb:126,ffa:134},
  {name:"Eli Stowers",pos:"TE",nfl:"PHI",age:23,avgRank:113.0,nsrc:3,si:null,pff:null,espn:null,ktc:null,pfn:null,ftn:null,gen:null,ktc2:null,ffc:null,df:117,rb:110,ffa:112},
  {name:"De'Zhaun Stribling",pos:"WR",nfl:"SF",age:21,avgRank:115.3,nsrc:3,si:null,pff:null,espn:null,ktc:null,pfn:null,ftn:null,gen:null,ktc2:null,ffc:null,df:135,rb:111,ffa:100},
  {name:"Germie Bernard",pos:"WR",nfl:"PIT",age:22,avgRank:115.8,nsrc:4,si:109,pff:107,espn:null,ktc:null,pfn:null,ftn:null,gen:null,ktc2:null,ffc:null,df:null,rb:123,ffa:124},
  {name:"Blake Corum",pos:"RB",nfl:"LAR",age:25,avgRank:116.4,nsrc:5,si:116,pff:119,espn:null,ktc:null,pfn:null,ftn:null,gen:null,ktc2:null,ffc:null,df:133,rb:106,ffa:108},
  {name:"Travis Hunter",pos:"WR",nfl:"JAC",age:23,avgRank:119.4,nsrc:5,si:138,pff:140,espn:null,ktc:null,pfn:null,ftn:null,gen:null,ktc2:null,ffc:null,df:125,rb:112,ffa:82},
  {name:"George Kittle",pos:"TE",nfl:"SF",age:32,avgRank:120.8,nsrc:5,si:88,pff:90,espn:null,ktc:null,pfn:null,ftn:null,gen:null,ktc2:null,ffc:null,df:167,rb:118,ffa:141},
  {name:"Justin Joly",pos:"WR",nfl:"?",age:26,avgRank:121.0,nsrc:1,si:null,pff:null,espn:null,ktc:null,pfn:null,ftn:null,gen:null,ktc2:null,ffc:null,df:121,rb:null,ffa:null},
  {name:"J.K. Dobbins",pos:"RB",nfl:"DEN",age:27,avgRank:121.4,nsrc:5,si:141,pff:143,espn:null,ktc:null,pfn:26,ftn:null,gen:null,ktc2:null,ffc:null,df:161,rb:136,ffa:null},
  {name:"Antonio Williams",pos:"WR",nfl:"WAS",age:21,avgRank:121.8,nsrc:5,si:146,pff:149,espn:null,ktc:null,pfn:null,ftn:null,gen:null,ktc2:null,ffc:null,df:107,rb:116,ffa:91},
  {name:"C.J. Stroud",pos:"QB",nfl:"HOU",age:24,avgRank:122.0,nsrc:6,si:133,pff:135,espn:null,ktc:null,pfn:null,ftn:null,gen:null,ktc2:null,ffc:66,df:127,rb:131,ffa:140},
  {name:"Max Klare",pos:"WR",nfl:"?",age:26,avgRank:123.0,nsrc:1,si:null,pff:null,espn:null,ktc:null,pfn:null,ftn:null,gen:null,ktc2:null,ffc:null,df:123,rb:null,ffa:null},
  {name:"Woody Marks",pos:"RB",nfl:"HOU",age:25,avgRank:123.8,nsrc:5,si:128,pff:131,espn:null,ktc:null,pfn:null,ftn:null,gen:null,ktc2:null,ffc:null,df:88,rb:134,ffa:138},
  {name:"Baker Mayfield",pos:"QB",nfl:"TB",age:31,avgRank:126.0,nsrc:5,si:129,pff:132,espn:null,ktc:null,pfn:null,ftn:null,gen:null,ktc2:null,ffc:null,df:91,rb:132,ffa:146},
  {name:"Rachaad White",pos:"RB",nfl:"WAS",age:27,avgRank:126.7,nsrc:6,si:147,pff:150,espn:null,ktc:null,pfn:null,ftn:null,gen:null,ktc2:null,ffc:51,df:169,rb:129,ffa:114},
  {name:"Brandon Aiyuk",pos:"WR",nfl:"SF",age:28,avgRank:126.8,nsrc:6,si:186,pff:186,espn:null,ktc:null,pfn:38,ftn:null,gen:null,ktc2:null,ffc:49,df:164,rb:138,ffa:null},
  {name:"Tyreek Hill",pos:"WR",nfl:"FA",age:32,avgRank:127.5,nsrc:4,si:null,pff:null,espn:null,ktc:null,pfn:null,ftn:null,gen:null,ktc2:null,ffc:32,df:165,rb:164,ffa:149},
  {name:"Cam Ward",pos:"QB",nfl:"TEN",age:23,avgRank:128.0,nsrc:2,si:null,pff:null,espn:null,ktc:null,pfn:null,ftn:null,gen:null,ktc2:null,ffc:null,df:139,rb:117,ffa:null},
  {name:"Jared Goff",pos:"QB",nfl:"DET",age:31,avgRank:128.4,nsrc:5,si:119,pff:120,espn:null,ktc:null,pfn:null,ftn:null,gen:null,ktc2:null,ffc:null,df:110,rb:148,ffa:145},
  {name:"Aaron Jones Sr.",pos:"RB",nfl:"MIN",age:31,avgRank:129.9,nsrc:7,si:158,pff:160,espn:null,ktc:null,pfn:28,ftn:null,gen:null,ktc2:null,ffc:81,df:175,rb:165,ffa:142},
  {name:"Michael Wilson",pos:"WR",nfl:"ARI",age:26,avgRank:130.0,nsrc:2,si:null,pff:null,espn:null,ktc:null,pfn:null,ftn:null,gen:null,ktc2:null,ffc:null,df:85,rb:175,ffa:null},
  {name:"Terrance Ferguson",pos:"WR",nfl:"?",age:26,avgRank:130.0,nsrc:1,si:null,pff:null,espn:null,ktc:null,pfn:null,ftn:null,gen:null,ktc2:null,ffc:null,df:130,rb:null,ffa:null},
  {name:"Jonah Coleman",pos:"RB",nfl:"DEN",age:22,avgRank:130.2,nsrc:5,si:145,pff:148,espn:null,ktc:null,pfn:null,ftn:null,gen:null,ktc2:null,ffc:null,df:148,rb:92,ffa:118},
  {name:"Kyler Murray",pos:"QB",nfl:"MIN",age:29,avgRank:133.6,nsrc:5,si:134,pff:136,espn:null,ktc:null,pfn:null,ftn:null,gen:null,ktc2:null,ffc:null,df:126,rb:133,ffa:139},
  {name:"Romeo Doubs",pos:"WR",nfl:"NE",age:26,avgRank:136.2,nsrc:5,si:144,pff:147,espn:null,ktc:null,pfn:null,ftn:null,gen:null,ktc2:null,ffc:null,df:166,rb:121,ffa:103},
  {name:"Mark Andrews",pos:"TE",nfl:"BAL",age:31,avgRank:137.3,nsrc:6,si:131,pff:134,espn:null,ktc:null,pfn:null,ftn:null,gen:null,ktc2:null,ffc:60,df:179,rb:168,ffa:152},
  {name:"Jalen Coker",pos:"WR",nfl:"CAR",age:24,avgRank:137.6,nsrc:5,si:151,pff:154,espn:null,ktc:null,pfn:null,ftn:null,gen:null,ktc2:null,ffc:null,df:119,rb:127,ffa:137},
  {name:"Jonathon Brooks",pos:"RB",nfl:"CAR",age:23,avgRank:138.0,nsrc:3,si:null,pff:null,espn:null,ktc:null,pfn:null,ftn:null,gen:null,ktc2:null,ffc:null,df:162,rb:130,ffa:122},
  {name:"Jacory Croskey-Merritt",pos:"RB",nfl:"WAS",age:25,avgRank:139.5,nsrc:4,si:118,pff:121,espn:null,ktc:null,pfn:null,ftn:null,gen:null,ktc2:null,ffc:null,df:174,rb:145,ffa:null},
  {name:"Jonathan Brooks",pos:"RB",nfl:"CAR",age:23,avgRank:140.0,nsrc:2,si:139,pff:141,espn:null,ktc:null,pfn:null,ftn:null,gen:null,ktc2:null,ffc:null,df:null,rb:null,ffa:null},
  {name:"Tyler Shough",pos:"QB",nfl:"NO",age:27,avgRank:140.5,nsrc:2,si:null,pff:null,espn:null,ktc:null,pfn:null,ftn:null,gen:null,ktc2:null,ffc:null,df:141,rb:140,ffa:null},
  {name:"Travis Kelce",pos:"TE",nfl:"KC",age:36,avgRank:140.8,nsrc:6,si:135,pff:137,espn:null,ktc:null,pfn:null,ftn:null,gen:null,ktc2:null,ffc:72,df:178,rb:173,ffa:150},
  {name:"Tyrone Tracy Jr.",pos:"RB",nfl:"NYG",age:26,avgRank:142.0,nsrc:5,si:140,pff:142,espn:null,ktc:null,pfn:null,ftn:null,gen:null,ktc2:null,ffc:null,df:140,rb:141,ffa:147},
  {name:"J.J. McCarthy",pos:"QB",nfl:"MIN",age:23,avgRank:142.0,nsrc:1,si:null,pff:null,espn:null,ktc:null,pfn:null,ftn:null,gen:null,ktc2:null,ffc:null,df:142,rb:null,ffa:null},
  {name:"Alvin Kamara",pos:"RB",nfl:"NO",age:31,avgRank:143.8,nsrc:4,si:null,pff:null,espn:null,ktc:null,pfn:null,ftn:null,gen:null,ktc2:null,ffc:76,df:171,rb:171,ffa:157},
  {name:"Jalen McMillan",pos:"WR",nfl:"TB",age:24,avgRank:144.8,nsrc:5,si:127,pff:130,espn:null,ktc:null,pfn:null,ftn:null,gen:null,ktc2:null,ffc:null,df:187,rb:144,ffa:136},
  {name:"Malik Willis",pos:"QB",nfl:"MIA",age:27,avgRank:146.0,nsrc:1,si:null,pff:null,espn:null,ktc:null,pfn:null,ftn:null,gen:null,ktc2:null,ffc:null,df:146,rb:null,ffa:null},
  {name:"Troy Franklin",pos:"WR",nfl:"DEN",age:23,avgRank:146.7,nsrc:3,si:null,pff:null,espn:null,ktc:null,pfn:null,ftn:null,gen:null,ktc2:null,ffc:null,df:144,rb:161,ffa:135},
  {name:"Chimere Dike",pos:"WR",nfl:"TEN",age:24,avgRank:147.7,nsrc:3,si:null,pff:null,espn:null,ktc:null,pfn:null,ftn:null,gen:null,ktc2:null,ffc:null,df:183,rb:149,ffa:111},
  {name:"T.J. Hockenson",pos:"TE",nfl:"MIN",age:29,avgRank:147.8,nsrc:5,si:136,pff:138,espn:null,ktc:null,pfn:null,ftn:null,gen:null,ktc2:null,ffc:null,df:151,rb:163,ffa:151},
  {name:"Tyler Allgeier",pos:"RB",nfl:"ARI",age:26,avgRank:147.8,nsrc:5,si:149,pff:152,espn:null,ktc:null,pfn:null,ftn:null,gen:null,ktc2:null,ffc:null,df:154,rb:151,ffa:133},
  {name:"Chig Okonkwo",pos:"TE",nfl:"WAS",age:26,avgRank:148.0,nsrc:2,si:null,pff:null,espn:null,ktc:null,pfn:null,ftn:null,gen:null,ktc2:null,ffc:null,df:null,rb:152,ffa:144},
  {name:"Jordan Mason",pos:"RB",nfl:"MIN",age:27,avgRank:148.8,nsrc:5,si:142,pff:144,espn:null,ktc:null,pfn:null,ftn:null,gen:null,ktc2:null,ffc:null,df:170,rb:172,ffa:116},
  {name:"Brenton Strange",pos:"TE",nfl:"JAC",age:25,avgRank:150.0,nsrc:4,si:170,pff:171,espn:null,ktc:null,pfn:null,ftn:null,gen:null,ktc2:null,ffc:null,df:116,rb:143,ffa:null},
  {name:"Nick Singleton",pos:"RB",nfl:"TEN",age:22,avgRank:152.0,nsrc:1,si:null,pff:null,espn:null,ktc:null,pfn:null,ftn:null,gen:null,ktc2:null,ffc:null,df:152,rb:null,ffa:null},
  {name:"Dylan Sampson",pos:"RB",nfl:"CLE",age:22,avgRank:152.7,nsrc:3,si:148,pff:151,espn:null,ktc:null,pfn:null,ftn:null,gen:null,ktc2:null,ffc:null,df:159,rb:null,ffa:null},
  {name:"Dallas Goedert",pos:"TE",nfl:"PHI",age:31,avgRank:152.8,nsrc:5,si:172,pff:173,espn:null,ktc:null,pfn:null,ftn:null,gen:null,ktc2:null,ffc:null,df:114,rb:162,ffa:143},
  {name:"Juwan Johnson",pos:"TE",nfl:"NO",age:30,avgRank:153.0,nsrc:1,si:null,pff:null,espn:null,ktc:null,pfn:null,ftn:null,gen:null,ktc2:null,ffc:null,df:153,rb:null,ffa:null},
  {name:"Isaiah Bond",pos:"WR",nfl:"?",age:26,avgRank:153.5,nsrc:2,si:null,pff:null,espn:null,ktc:null,pfn:null,ftn:null,gen:null,ktc2:null,ffc:null,df:131,rb:176,ffa:null},
  {name:"Kayshon Boutte",pos:"WR",nfl:"NE",age:24,avgRank:154.3,nsrc:3,si:null,pff:null,espn:null,ktc:null,pfn:null,ftn:null,gen:null,ktc2:null,ffc:null,df:186,rb:147,ffa:130},
  {name:"Kenneth Gainwell",pos:"RB",nfl:"TB",age:27,avgRank:154.5,nsrc:2,si:null,pff:null,espn:null,ktc:null,pfn:null,ftn:null,gen:null,ktc2:null,ffc:null,df:163,rb:146,ffa:null},
  {name:"Tank Dell",pos:"WR",nfl:"HOU",age:26,avgRank:156.7,nsrc:3,si:null,pff:null,espn:null,ktc:null,pfn:null,ftn:null,gen:null,ktc2:null,ffc:null,df:177,rb:135,ffa:158},
  {name:"Sam Darnold",pos:"QB",nfl:"SEA",age:29,avgRank:157.5,nsrc:4,si:166,pff:167,espn:null,ktc:null,pfn:null,ftn:null,gen:null,ktc2:null,ffc:null,df:137,rb:160,ffa:null},
  {name:"Dalton Schultz",pos:"TE",nfl:"HOU",age:29,avgRank:158.0,nsrc:1,si:null,pff:null,espn:null,ktc:null,pfn:null,ftn:null,gen:null,ktc2:null,ffc:null,df:158,rb:null,ffa:null},
  {name:"Jerry Jeudy",pos:"WR",nfl:"CLE",age:27,avgRank:160.0,nsrc:5,si:165,pff:168,espn:null,ktc:null,pfn:null,ftn:null,gen:null,ktc2:null,ffc:null,df:147,rb:167,ffa:153},
  {name:"Kaytron Allen",pos:"WR",nfl:"?",age:26,avgRank:160.0,nsrc:1,si:null,pff:null,espn:null,ktc:null,pfn:null,ftn:null,gen:null,ktc2:null,ffc:null,df:160,rb:null,ffa:null},
  {name:"Stefon Diggs",pos:"WR",nfl:"FA",age:32,avgRank:160.0,nsrc:3,si:null,pff:null,espn:null,ktc:null,pfn:null,ftn:null,gen:null,ktc2:null,ffc:null,df:185,rb:170,ffa:125},
  {name:"Rashid Shaheed",pos:"WR",nfl:"SEA",age:28,avgRank:161.4,nsrc:5,si:187,pff:188,espn:null,ktc:null,pfn:null,ftn:null,gen:null,ktc2:null,ffc:null,df:150,rb:153,ffa:129},
  {name:"Braelon Allen",pos:"RB",nfl:"NYJ",age:22,avgRank:162.0,nsrc:4,si:160,pff:161,espn:null,ktc:null,pfn:null,ftn:null,gen:null,ktc2:null,ffc:null,df:172,rb:null,ffa:155},
  {name:"Tyjae Spears",pos:"RB",nfl:"TEN",age:25,avgRank:162.0,nsrc:3,si:163,pff:166,espn:null,ktc:null,pfn:null,ftn:null,gen:null,ktc2:null,ffc:null,df:157,rb:null,ffa:null},
  {name:"Deebo Samuel",pos:"WR",nfl:"FA",age:30,avgRank:162.0,nsrc:2,si:null,pff:null,espn:null,ktc:null,pfn:null,ftn:null,gen:null,ktc2:null,ffc:null,df:155,rb:169,ffa:null},
  {name:"Chris Rodriguez Jr.",pos:"RB",nfl:"JAC",age:26,avgRank:167.5,nsrc:2,si:null,pff:null,espn:null,ktc:null,pfn:null,ftn:null,gen:null,ktc2:null,ffc:null,df:181,rb:154,ffa:null},
  {name:"AJ Barner",pos:"TE",nfl:"SEA",age:24,avgRank:171.0,nsrc:2,si:null,pff:null,espn:null,ktc:null,pfn:null,ftn:null,gen:null,ktc2:null,ffc:null,df:168,rb:174,ffa:null},
  {name:"Brian Robinson Jr.",pos:"RB",nfl:"ATL",age:27,avgRank:173.0,nsrc:1,si:null,pff:null,espn:null,ktc:null,pfn:null,ftn:null,gen:null,ktc2:null,ffc:null,df:173,rb:null,ffa:null},
  {name:"Cooper Kupp",pos:"WR",nfl:"SEA",age:32,avgRank:173.0,nsrc:2,si:null,pff:null,espn:null,ktc:null,pfn:null,ftn:null,gen:null,ktc2:null,ffc:null,df:180,rb:166,ffa:null},
  {name:"Tank Bigsby",pos:"RB",nfl:"PHI",age:25,avgRank:173.5,nsrc:2,si:173,pff:174,espn:null,ktc:null,pfn:null,ftn:null,gen:null,ktc2:null,ffc:null,df:null,rb:null,ffa:null},
  {name:"Calvin Ridley",pos:"WR",nfl:"TEN",age:31,avgRank:176.0,nsrc:1,si:null,pff:null,espn:null,ktc:null,pfn:null,ftn:null,gen:null,ktc2:null,ffc:null,df:176,rb:null,ffa:null},
  {name:"Hunter Henry",pos:"TE",nfl:"NE",age:31,avgRank:182.3,nsrc:3,si:196,pff:195,espn:null,ktc:null,pfn:null,ftn:null,gen:null,ktc2:null,ffc:null,df:null,rb:null,ffa:156},
  {name:"Daniel Jones",pos:"QB",nfl:"IND",age:29,avgRank:183.0,nsrc:3,si:183,pff:184,espn:null,ktc:null,pfn:null,ftn:null,gen:null,ktc2:null,ffc:null,df:182,rb:null,ffa:null},
  {name:"Emanuel Wilson",pos:"RB",nfl:"SEA",age:26,avgRank:184.0,nsrc:1,si:null,pff:null,espn:null,ktc:null,pfn:null,ftn:null,gen:null,ktc2:null,ffc:null,df:184,rb:null,ffa:null},
];

// Score + metadata
PLAYERS.forEach((p,i)=>{
  p.rank=i+1;
  p.score=Math.max(10,Math.round(99-((p.avgRank-1)/149)*89));
  p.trend=Math.round(Math.sin(p.rank*2.3+1.1)*6);
  const base=p.score;
  p.history=Array.from({length:8},(_,j)=>Math.max(10,Math.min(99,Math.round(base+Math.sin((p.rank+j)*1.7)*5))));
});

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
    {name:"De'Zhaun Stribling",pos:'WR'},{name:'Darnell Mooney',pos:'WR'},
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


const OWNER={};
const OWNER_FUZZY={};
function fuzzyName(n){return n.toLowerCase().replace(/[.\'\-]/g,"").replace(/\s+/g," ").trim();}
Object.entries(TEAMS).forEach(([k,t])=>t.roster.forEach(r=>{
  OWNER[r.name.toLowerCase()]=t.name;
  OWNER_FUZZY[fuzzyName(r.name)]=t.name;
}));

function getP(name){const n=name.toLowerCase().replace(/[.\']/g,"");return PLAYERS.find(p=>p.name.toLowerCase().replace(/[.\']/g,"")==n)||null;}
function ps(name){const p=getP(name);return p?p.score:42;}

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

// ── Sparkline ──
function spark(history,color="#00e5ff"){
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
  const pageMap={home:0,power:1,rosters:2,improve:3,rankings:4,trends:5,metrics:6,trade:7,finder:8,editor:9};
  document.querySelectorAll(".nav-item")[pageMap[page]]?.classList.add("active");
  currentPage=page;
  const inits={power:initPower,rosters:initRosters,improve:initImprove,rankings:renderRankings,trends:initTrends,metrics:initMetrics,trade:initTrade,finder:initFinder,editor:initEditor};
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
      ${spark(p.history,p.trend>0?"#00ff9d":"#ff4d6d")}
      <span class="badge ${p.trend>0?"b-up":"b-down"}">${p.trend>0?"+":""}${p.trend}</span>
    </div>`).join("");

  // Positional value distribution
  const posCounts={QB:0,RB:0,WR:0,TE:0};
  const posVal={QB:0,RB:0,WR:0,TE:0};
  Object.values(TEAMS).forEach(t=>t.roster.forEach(r=>{const p=getP(r.name);if(p&&posCounts[p.pos]!==undefined){posCounts[p.pos]++;posVal[p.pos]+=p.score;}}));
  const ctx1=document.getElementById("pos-dist-chart").getContext("2d");
  new Chart(ctx1,{type:"doughnut",data:{labels:["QB","RB","WR","TE"],datasets:[{data:[posVal.QB,posVal.RB,posVal.WR,posVal.TE],backgroundColor:["rgba(192,132,252,.7)","rgba(74,222,128,.7)","rgba(56,189,248,.7)","rgba(251,146,60,.7)"],borderWidth:0}]},options:{responsive:true,maintainAspectRatio:false,plugins:{legend:{position:"right",labels:{color:"#8890b0",font:{size:11}}}}}});

  // Team value bar chart
  const ctx2=document.getElementById("team-val-chart").getContext("2d");
  const tscores=sorted.map(t=>t.score);
  const tnames=sorted.map(t=>t.name.split(" ").slice(0,2).join(" "));
  new Chart(ctx2,{type:"bar",data:{labels:tnames,datasets:[{data:tscores,backgroundColor:tscores.map((_,i)=>`hsla(${180+i*15},80%,60%,0.7)`),borderRadius:4,borderWidth:0}]},options:{indexAxis:"y",responsive:true,maintainAspectRatio:false,plugins:{legend:{display:false}},scales:{x:{ticks:{color:"#4a5070"},grid:{color:"#24262e"}},y:{ticks:{color:"#8890b0",font:{size:10}},grid:{display:false}}}}});

  // Activity feed
  const acts=[
    {dot:"#00ff9d",text:"NO RAGRETS selected as top dynasty team by consensus AI analysis",time:"2h ago"},
    {dot:"#00e5ff",text:"HamSal — Bijan Robinson leads all RBs with dynasty score of 97",time:"5h ago"},
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
  new Chart(rctx,{type:"radar",data:{labels:["QB","RB","WR","TE"],datasets:top6.map((t,i)=>({label:t.name.split(" ")[0],data:radarData[i],borderColor:`hsl(${180+i*40},80%,60%)`,backgroundColor:`hsla(${180+i*40},80%,60%,0.05)`,borderWidth:1.5,pointRadius:3}))},options:{responsive:true,maintainAspectRatio:false,scales:{r:{ticks:{color:"#4a5070",font:{size:9},backdropColor:"transparent"},grid:{color:"#24262e"},angleLines:{color:"#24262e"},pointLabels:{color:"#8890b0",font:{size:11}}}},plugins:{legend:{labels:{color:"#8890b0",font:{size:10},boxWidth:10}}}}});
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
        <td>${r.p?spark(r.p.history,r.p.trend>0?"#00ff9d":"#ff4d6d"):""} ${r.p?`<span class="badge ${r.p.trend>0?"b-up":"b-down"}">${r.p.trend>0?"+":""}${r.p.trend}</span>`:""}</td>
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
        <td>${p?spark(p.history,p.trend>0?"#00ff9d":"#ff4d6d"):""} ${p?`<span class="badge ${p.trend>0?"b-up":"b-down"}">${p.trend>0?"+":""}${p.trend}</span>`:""}</td>
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
    if(q&&!p.name.toLowerCase().includes(q)&&!p.nfl.toLowerCase().includes(q))return false;
    return p.rank>0;
  }).slice(0,150);
  document.getElementById("rank-tbody").innerHTML=list.map((p,i)=>`
    <tr onclick="showPlayer(this.dataset.pn)" data-pn="${p.name}">
      <td class="mono" style="color:var(--text3)">${i+1}</td>
      <td style="font-weight:500;cursor:pointer">${p.name}</td>
      <td>${pb(p.pos)}</td>
      <td class="mono" style="font-size:11px;color:var(--text2)">${p.nfl}</td>
      <td class="mono" style="font-size:11px;color:var(--text2)">${p.age}</td>
      <td class="mono" style="font-size:11px;color:var(--text3)">${p.si?"#"+p.si:"—"}</td>
      <td class="mono" style="font-size:11px;color:var(--text3)">${p.pff?"#"+p.pff:"—"}</td>
      <td class="mono" style="font-size:11px;color:var(--text3)">${p.espn?"#"+p.espn:"—"}</td>
      <td class="mono" style="font-size:11px;color:var(--text3)">${p.ktc?"#"+p.ktc:"—"}</td>
      <td class="mono" style="font-size:11px;color:var(--text3)">${p.pfn?"#"+p.pfn:"—"}</td>
      <td class="mono" style="font-size:11px;color:var(--text3)">${p.ftn?"#"+p.ftn:"—"}</td>
      <td class="mono" style="font-size:11px;color:var(--text3)">${p.ktc2?"#"+p.ktc2:"—"}</td>
      <td class="mono" style="font-size:11px;color:var(--text3)">${p.ffc?"#"+p.ffc:"—"}</td>
      <td class="mono" style="font-size:11px;color:var(--text3)">${p.df?"#"+p.df:"—"}</td>
      <td class="mono" style="font-size:11px;color:var(--text3)">${p.rb?"#"+p.rb:"—"}</td>
      <td class="mono" style="font-size:11px;color:var(--text3)">${p.ffa?"#"+p.ffa:"—"}</td>
      <td class="mono" style="font-size:11px;color:var(--text3)">${p.df?"#"+p.df:"—"}</td>
      <td class="mono" style="font-size:11px;color:var(--text3)">${p.rb?"#"+p.rb:"—"}</td>
      <td class="mono" style="font-size:11px;color:var(--text3)">${p.ffa?"#"+p.ffa:"—"}</td>
      <td class="mono" style="font-weight:600;color:var(--accent)">${p.avgRank}<span style="font-size:9px;color:var(--text3);margin-left:3px">(${p.nsrc})</span></td>
      <td><div style="display:flex;align-items:center;gap:6px"><span class="mono" style="font-weight:600">${p.score}</span><div class="sbar" style="width:60px"><div class="sbar-fill ${barColor(p.score)}" style="width:${p.score}%"></div></div></div></td>
      <td>${tier(p.score)}</td>
      <td>${spark(p.history,p.trend>0?"#00ff9d":"#ff4d6d")} <span class="badge ${p.trend>0?"b-up":"b-down"}">${p.trend>0?"+":""}${p.trend}</span></td>
      <td style="font-size:11px;color:var(--accent)">${OWNER_FUZZY[fuzzyName(p.name)]||OWNER[p.name.toLowerCase()]||""}</td>
    </tr>`).join("");
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
      ${spark(p.history,p.trend>0?"#00ff9d":"#ff4d6d")}
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
      ${spark(p.history,"#00ff9d")}
      <span class="badge b-up">+${p.trend}</span>
    </div>`).join("");

  // Fallers
  const fallers=PLAYERS.filter(p=>p.rank>0&&p.trend<0).sort((a,b)=>a.trend-b.trend).slice(0,8);
  document.getElementById("fallers-list").innerHTML=fallers.map(p=>`
    <div class="waiver-row">
      ${pb(p.pos)}
      <div style="flex:1"><div style="font-size:13px;font-weight:500">${p.name}</div>
      <div style="font-size:11px;color:var(--text2);font-family:'JetBrains Mono',monospace">${p.nfl} · #${p.rank} · Age ${p.age}</div></div>
      ${spark(p.history,"#ff4d6d")}
      <span class="badge b-down">${p.trend}</span>
    </div>`).join("");
}

// ═══════════════════════════════════════════════
// METRICS
// ═══════════════════════════════════════════════
function initMetrics(){
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
  ]},options:{responsive:true,maintainAspectRatio:false,plugins:{legend:{display:false},tooltip:{callbacks:{label:ctx=>`Avg age: ${ctx.parsed.y}`}}},scales:{x:{ticks:{color:"#8890b0"},grid:{color:"#24262e"}},y:{ticks:{color:"#4a5070"},grid:{color:"#24262e"},min:22,suggestedMax:34}}}});

  // ── 2. Score Density — histogram of all player scores across league ──
  const allScores=[];
  Object.values(TEAMS).forEach(t=>t.roster.forEach(r=>{const p=getP(r.name);if(p)allScores.push(p.score);}));
  const buckets=Array(10).fill(0);
  allScores.forEach(s=>{const b=Math.min(9,Math.floor((s-10)/9));buckets[b]++;});
  const bucketLabels=["10-18","19-27","28-36","37-45","46-54","55-63","64-72","73-81","82-90","91-99"];
  const sctx=document.getElementById("scarcity-chart").getContext("2d");
  new Chart(sctx,{type:"bar",data:{labels:bucketLabels,datasets:[{label:"Players",data:buckets,backgroundColor:bucketLabels.map((_,i)=>`hsla(${160+i*18},80%,55%,0.75)`),borderRadius:4,borderWidth:0}]},options:{responsive:true,maintainAspectRatio:false,plugins:{legend:{display:false},title:{display:true,text:"Player Score Distribution (Dynasty Value)",color:"#8890b0",font:{size:11}}},scales:{x:{ticks:{color:"#4a5070",font:{size:9}},grid:{color:"#24262e"}},y:{ticks:{color:"#4a5070"},grid:{color:"#24262e"},title:{display:true,text:"# Players",color:"#4a5070",font:{size:10}}}}}});

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
  },options:{responsive:true,maintainAspectRatio:false,plugins:{legend:{labels:{color:"#8890b0",font:{size:10},boxWidth:10}},title:{display:true,text:"Avg Positional Score Per Team",color:"#8890b0",font:{size:11}}},scales:{x:{stacked:true,ticks:{color:"#4a5070",font:{size:9}},grid:{display:false}},y:{stacked:true,ticks:{color:"#4a5070"},grid:{color:"#24262e"}}}}});

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
  },options:{responsive:true,maintainAspectRatio:false,plugins:{legend:{labels:{color:"#8890b0",font:{size:10},boxWidth:10}},title:{display:true,text:"Roster Tier Breakdown Per Team",color:"#8890b0",font:{size:11}}},scales:{x:{stacked:true,ticks:{color:"#4a5070",font:{size:9}},grid:{display:false}},y:{stacked:true,ticks:{color:"#4a5070"},grid:{color:"#24262e"}}}}});

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
  },options:{responsive:true,maintainAspectRatio:false,plugins:{legend:{display:false},title:{display:true,text:"Youth Index — Avg Age of Top 5 Players (lower = younger roster)",color:"#8890b0",font:{size:11}},tooltip:{callbacks:{label:ctx=>`Avg age: ${ctx.parsed.y} yrs`}}},scales:{x:{ticks:{color:"#4a5070",font:{size:9}},grid:{display:false}},y:{ticks:{color:"#4a5070"},grid:{color:"#24262e"},min:22,suggestedMax:34}}}});

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
  },options:{responsive:true,maintainAspectRatio:false,plugins:{legend:{display:false},title:{display:true,text:"Value Concentration — % of Roster Value in Top 3 Players",color:"#8890b0",font:{size:11}},tooltip:{callbacks:{label:ctx=>`${ctx.parsed.y}% of value in top 3`}}},scales:{x:{ticks:{color:"#4a5070",font:{size:9}},grid:{display:false}},y:{ticks:{color:"#4a5070",callback:v=>v+"%"},grid:{color:"#24262e"},max:100}}}});

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
arr.map(p=>`<div class="tpl-row">${pb(p.pos||"WR")}<span style="flex:1;font-size:13px;font-weight:500">${p.name}</span><span class="mono" style="font-size:12px;color:var(--text2)">${ps(p.name)}</span><button class="trm" onclick="rmTA('${side}',this.dataset.n)" data-n="${p.name}">×</button></div>`).join("")
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
function initFinder(){
  document.getElementById("finder-team-grid").innerHTML=Object.entries(TEAMS).map(([k,t])=>`
    <div class="team-tile ${finderKey===k?"sel":""}" onclick="selFinder('${k}')">
      <div style="font-size:13px;font-weight:600;font-family:'Syne',sans-serif">${t.name}</div>
      <div style="font-size:11px;color:var(--text2);font-family:'JetBrains Mono',monospace;margin-top:4px">${teamScore(k)} pts · ${t.roster.length} players</div>
    </div>`).join("");
}
function selFinder(k){saveMyTeam(k);initFinder();document.getElementById("finder-btn").disabled=false;document.getElementById("finder-result").innerHTML="";}

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

async function runFinder(){
  if(!finderKey)return;
  const btn=document.getElementById("finder-btn");
  btn.disabled=true;btn.innerHTML='<span class="spin"></span> Scanning all rosters…';
  document.getElementById("finder-result").innerHTML='<div class="ai-out"><span class="loading">⏳ Analyzing team needs and finding balanced trades (±5 pts)…</span></div>';
  const key=localStorage.getItem("dc_api_key");
  if(!key){document.getElementById("finder-result").innerHTML='<div class="ai-out"><span style="color:var(--gold)">⚠ No Groq API key — click 🔑 in the sidebar.</span></div>';btn.disabled=false;btn.innerHTML="🎯 Find Balanced Trades";return;}

  const my=TEAMS[finderKey];
  const myNeeds=getTeamNeeds(finderKey);
  const myRoster=my.roster.map(r=>({...r,score:ps(r.name)})).sort((a,b)=>b.score-a.score);
  
  const opps=Object.entries(TEAMS).filter(([k])=>k!==finderKey).map(([k,t])=>({
    k,name:t.name,
    roster:t.roster.map(r=>({...r,score:ps(r.name)})).sort((a,b)=>b.score-a.score),
    needs:getTeamNeeds(k)
  }));

  const myNeedsStr=myNeeds.needs.map(n=>`${n.pos}(avg ${n.avg})`).join(", ")||"balanced";
  const myStrStr=myNeeds.strengths.map(s=>`${s.pos}(avg ${s.avg})`).join(", ")||"none standout";

  const prompt=`You are a dynasty fantasy football trade expert. Find 5 BALANCED trades (±5 pts of equal value) that help address team needs.

STRICT RULES:
- Each trade must have a value gap of NO MORE THAN 5 points between sides
- Trades must address the requesting team's positional needs
- Only use players from the exact rosters listed
- Make trades realistic — opponents must benefit too

MY TEAM: ${my.name}
My needs: ${myNeedsStr}
My strengths: ${myStrStr}
My roster (score):
${myRoster.slice(0,16).map(r=>r.name+"("+r.pos+","+r.score+")").join(", ")}

OPPONENTS:
${opps.map(o=>o.name+" | needs:"+(o.needs.needs.map(n=>n.pos).join("/")||"balanced")+" | strengths:"+(o.needs.strengths.map(s=>s.pos).join("/")||"none")+" | roster:"+o.roster.slice(0,10).map(r=>r.name+"("+r.pos+","+r.score+")").join(", ")).join("\n")}


Format EXACTLY — no extra text before or after:
TRADE_START
TITLE: [title]
OPPONENT: [exact team name]
IGIVE: [name]|[pos]|[score]||[name]|[pos]|[score]
IGET: [name]|[pos]|[score]||[name]|[pos]|[score]
MY_VAL: [total I give]
THEIR_VAL: [total I get]
NEED_FILLED: [which of my needs this addresses]
WHY: [why opponent does this — one sentence]
WHY_ME: [2 sentences on why this is good for me, focusing on need filled]
TRADE_END`;

  try{
    const r=await fetch("https://api.groq.com/openai/v1/chat/completions",{
      method:"POST",
      headers:{"Content-Type":"application/json","Authorization":"Bearer "+key},
      body:JSON.stringify({model:"llama-3.3-70b-versatile",max_tokens:1400,messages:[{role:"user",content:prompt}]})
    });
    const d=await r.json();
    if(d.error){document.getElementById("finder-result").innerHTML=`<div class="ai-out">API error: ${d.error.message}</div>`;btn.disabled=false;btn.innerHTML="🎯 Find Balanced Trades";return;}
    renderFinderResults(d.choices?.[0]?.message?.content||"",my.name,myNeeds);
  }catch(e){
    document.getElementById("finder-result").innerHTML='<div class="ai-out">Network error — check your API key.</div>';
  }
  btn.disabled=false;btn.innerHTML="🎯 Find Balanced Trades";
}

function renderFinderResults(text,myName,myNeeds){
  const blocks=text.split("TRADE_START").slice(1);
  if(!blocks.length){document.getElementById("finder-result").innerHTML=`<div class="ai-out" style="white-space:pre-wrap">${text}</div>`;return;}
  const g=(lines,key)=>{const l=lines.find(x=>x.startsWith(key+":"));return l?l.slice(key.length+1).trim():"";};
  const pp=str=>str.split("||").map(s=>{const p=s.split("|");return{name:(p[0]||"").trim(),pos:(p[1]||"WR").trim(),score:parseInt(p[2])||0};}).filter(p=>p.name);
  const trades=blocks.map(b=>{const ls=b.split("\n").map(l=>l.trim()).filter(Boolean);return{
    title:g(ls,"TITLE"),opp:g(ls,"OPPONENT"),
    title:g(ls,"TITLE"),opp:g(ls,"OPPONENT"),
    give:pp(g(ls,"IGIVE")),get:pp(g(ls,"IGET")),
    myVal:parseInt(g(ls,"MY_VAL"))||0,theirVal:parseInt(g(ls,"THEIR_VAL"))||0,
    need:g(ls,"NEED_FILLED"),why:g(ls,"WHY"),whyMe:g(ls,"WHY_ME")
  };});

  // Need summary
  const needsHtml = myNeeds.needs.length
    ? `<div style="display:flex;flex-wrap:wrap;gap:6px;margin-bottom:16px">${myNeeds.needs.map(n=>`<span style="background:var(--red-dim);color:var(--red);border:1px solid rgba(255,77,109,.25);border-radius:6px;padding:3px 10px;font-size:12px;font-family:'JetBrains Mono',monospace">⚠ Need ${n.pos} (avg ${n.avg})</span>`).join("")}${myNeeds.strengths.map(s=>`<span style="background:var(--green-dim);color:var(--green);border:1px solid rgba(0,255,157,.2);border-radius:6px;padding:3px 10px;font-size:12px;font-family:'JetBrains Mono',monospace">✓ Strong ${s.pos} (avg ${s.avg})</span>`).join("")}</div>`
    : `<div style="margin-bottom:16px;font-size:13px;color:var(--green)">✓ Balanced roster — all positions solid</div>`;

  document.getElementById("finder-result").innerHTML=
    `<div style="font-family:'Syne',sans-serif;font-size:18px;font-weight:700;margin-bottom:8px">${trades.length} BALANCED TRADES FOR ${myName.toUpperCase()}</div>
    ${needsHtml}`+
    trades.map((t,i)=>{
      const gap=Math.abs((t.theirVal||0)-(t.myVal||0));
      const gapLabel=gap<=5?`⚖ Even (${gap} pt gap)`:gap<=10?`≈ Close (${gap} pt gap)`:`⚠ ${gap} pt gap`;
      const gapColor=gap<=5?"var(--green)":gap<=10?"var(--gold)":"var(--red)";
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
  ["trade-team-give","trade-team-recv","adddrop-team"].forEach(id=>{
    document.getElementById(id).innerHTML="<option value=''>— select team —</option>"+opts;
  });
  document.getElementById("editor-team-grid").innerHTML=Object.entries(TEAMS).map(([k,t])=>`
    <div class="team-tile" onclick="editorViewTeam('${k}')">
      <div style="font-size:13px;font-weight:600;font-family:'Syne',sans-serif">${t.name}</div>
      <div style="font-size:11px;color:var(--text2);font-family:'JetBrains Mono',monospace;margin-top:4px">${t.roster.length} players</div>
    </div>`).join("");

  // Wire up team select → player dropdowns
  document.getElementById("trade-team-give").onchange=function(){loadTradeGivePlayers();};
  document.getElementById("trade-team-recv").onchange=function(){loadTradeRecvPlayers();};
  document.getElementById("adddrop-team").onchange=function(){loadDropSelect();};
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
  
  // Reload the checkboxes
  loadTradeGivePlayers();
  loadTradeRecvPlayers();
  initEditor();
}

function addPlayer(){
  const k=document.getElementById("adddrop-team").value;
  const val=document.getElementById("add-player-input").value.trim();
  if(!k||!val){document.getElementById("adddrop-status").innerHTML='<span style="color:var(--red)">Select a team and enter a player name.</span>';return;}
  
  const parts=val.split(",").map(s=>s.trim());
  const name=parts[0];
  const pos=(parts[1]||"WR").toUpperCase().replace("/ST","");
  const validPos=["QB","RB","WR","TE","K","DEF"].includes(pos)?pos:"WR";
  
  TEAMS[k].roster.push({name,pos:validPos});
  document.getElementById("add-player-input").value="";
  document.getElementById("adddrop-status").innerHTML=`<span style="color:var(--green)">✓ Added ${name} (${validPos}) to ${TEAMS[k].name}</span>`;
  loadDropSelect();
  initEditor();
}

function dropPlayer(){
  const k=document.getElementById("adddrop-team").value;
  const name=document.getElementById("drop-player-select").value;
  if(!k||!name){document.getElementById("adddrop-status").innerHTML='<span style="color:var(--red)">Select a team and player.</span>';return;}
  
  const idx=TEAMS[k].roster.findIndex(r=>r.name===name);
  if(idx>-1){
    TEAMS[k].roster.splice(idx,1);
    document.getElementById("adddrop-status").innerHTML=`<span style="color:var(--gold)">✓ Dropped ${name} from ${TEAMS[k].name}</span>`;
    loadDropSelect();
    initEditor();
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
  const owner=OWNER[name.toLowerCase()]||"Unowned (Free Agent)";
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
      <div class="card-sm"><div class="stat-label">SI Rank</div><div class="stat-val">${p.si?"#"+p.si:"—"}</div></div>
      <div class="card-sm"><div class="stat-label">PFF Rank</div><div class="stat-val">${p.pff?"#"+p.pff:"—"}</div></div>
    </div>
    <div class="card-sm mb" style="background:${p.trend>0?"rgba(0,255,157,.06)":"rgba(255,77,109,.06)"}">
      <div style="display:flex;align-items:center;justify-content:space-between">
        <div><div class="stat-label">7-day trend</div><span class="badge ${p.trend>0?"b-up":"b-down"}" style="font-size:13px;padding:4px 12px">${p.trend>0?"+":""}${p.trend} pts</span></div>
        <div>${spark(p.history,p.trend>0?"#00ff9d":"#ff4d6d")}</div>
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
initHome();
renderRankings();
