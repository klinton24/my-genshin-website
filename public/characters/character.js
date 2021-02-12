const charName = location.pathname.substring(location.pathname.lastIndexOf("/") + 1).slice(0, -5);

/*
function charMainStat() {
for(var i = 0; i < charData.length; i++) {
    if(charData[i].cName == charName){
      console.log(charData[i].mainStat);
    }}
}
*/


function goBack() {
    window.history.back();
}
/*
const charData = fetch("./charData.json")
.then(response => {
   return response.json();
})

console.log(charData);
//console.log(charData.length); //undefined
//console.log(charData[1].cName); //breaks it cannot read property 'cName of undefined'
console.log(charName);


function charMainStat() {
  for(var i = 0; i < charData.length; i++) {
    if(charData[i].cName == charName){
      console.log(charData[i].mainStat);
    }}};
    charMainStat();
*/

function charMainStat()  {fetch("./charData.json")
.then(response => {
   return response.json();
})
.then(charData => {
  for(var i = 0; i < charData.length; i++) {
    if(charData[i].cName == charName){
      return (charData[i].mainStat);
    }}});
}

charMainStat();

function charSubStat1()  {fetch("./charData.json")
.then(response => {
   return response.json();
})
.then(charData => {
  for(var i = 0; i < charData.length; i++) {
    if(charData[i].cName == charName){
      console.log(charData[i].substat1);
    }}});
}

charSubStat1();

function charSubStat2()  {fetch("./charData.json")
.then(response => {
   return response.json();
})
.then(charData => {
  for(var i = 0; i < charData.length; i++) {
    if(charData[i].cName == charName){
      console.log(charData[i].substat2);
    }}});
}

charSubStat2();

function charSubStat3()  {fetch("./charData.json")
.then(response => {
   return response.json();
})
.then(charData => {
  for(var i = 0; i < charData.length; i++) {
    if(charData[i].cName == charName){
      console.log(charData[i].substat3);
    }}});
}

charSubStat3();

function charSubStat4()  {fetch("./charData.json")
.then(response => {
   return response.json();
})
.then(charData => {
  for(var i = 0; i < charData.length; i++) {
    if(charData[i].cName == charName){
      console.log(charData[i].substat4);
    }}});
}

charSubStat4();

function charComments()  {fetch("./charData.json")
.then(response => {
   return response.json();
})
.then(charData => {
  for(var i = 0; i < charData.length; i++) {
    if(charData[i].cName == charName){
      console.log(charData[i].comments);
    }}});
}

charComments();



document.getElementById("app").innerHTML = `
<button class="backBtn" onclick="goBack()">Go Back</button>
    <header>
    <h1>${charName}</h1>
    <img class="profilePic" src="../images/${charName}/${charName}-profile.png" />
    </header>
    <div class="contentWrap">
    <div class="informationWrap">
    <br><br>
    <h2>Stats to prioritize:</h2>
    <p>Main Stat: ${charMainStat()}</p>
    <p>Sub Stat #1: ${charSubStat1()}</p>
    <p>Sub Stat #2: ${charSubStat2()}</p>
    <p>Sub Stat #3: ${charSubStat3()}</p>
    <p>Sub Stat #4: ${charSubStat4()}</p>
    <p>General Comments: ${charComments()} </p>
    </div>    
    <img class ="artifactPic box" src="../images/${charName}/${charName}-flower.png" />
    <img class ="artifactPic box" src="../images/${charName}/${charName}-plume.png" />
    <img class ="artifactPic box" src="../images/${charName}/${charName}-sands.png" />
    <img class ="artifactPic box" src="../images/${charName}/${charName}-goblet.png" />
    <img class ="artifactPic box" src="../images/${charName}/${charName}-circlet.png" />
    </div>
`;