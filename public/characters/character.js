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

fetch("./charData.json")
.then(response => {
   return response.json();
})
.then(data => {
  for(var i = 0; i < data.length; i++) {
    if(data[i].cName == charName){
      console.log(data[i].mainStat);
    }}});

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
    <p>Main Stat: HP %</p>
    <p>Attack %</p>
    <p>HP</p>
    <p>Energy Recharge %</p>
    </div>    
    <img class ="artifactPic box" src="../images/${charName}/${charName}-flower.png" />
    <img class ="artifactPic box" src="../images/${charName}/${charName}-plume.png" />
    <img class ="artifactPic box" src="../images/${charName}/${charName}-sands.png" />
    <img class ="artifactPic box" src="../images/${charName}/${charName}-goblet.png" />
    <img class ="artifactPic box" src="../images/${charName}/${charName}-circlet.png" />
    </div>
`;