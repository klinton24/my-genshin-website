const charName = location.pathname.substring(location.pathname.lastIndexOf("/") + 1).slice(0, -5);
let charMainStat;
let charSubStat1;
let charSubStat2;
let charSubStat3;
let charSubStat4;
let charComments;

function goBack() {
    window.history.back();
}


(async function getCharData() {
  let response = await fetch("./charData.json");
  let data = await response.json();
  return data;
});

(async function wtf()  {
  const charData = await getCharData();
  let charMainStat;
  for (var i = 0; i < charData.length; i++) {
      if (charData[i].cName == "diona") {
        console.log(charData[i].mainStat);
        // instead of console.log you would do what you want with the data besides returning
        charMainStat = charData[i].mainStat;
        console.log(charMainStat); // This returns the value I want
      }
  }
  console.log(charMainStat); //This returns undefined?
});


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
    <p>Main Stat: ${charMainStat}</p>
    </div>    
    <img class ="artifactPic box" src="../images/${charName}/${charName}-flower.png" />
    <img class ="artifactPic box" src="../images/${charName}/${charName}-plume.png" />
    <img class ="artifactPic box" src="../images/${charName}/${charName}-sands.png" />
    <img class ="artifactPic box" src="../images/${charName}/${charName}-goblet.png" />
    <img class ="artifactPic box" src="../images/${charName}/${charName}-circlet.png" />
    </div>
`;