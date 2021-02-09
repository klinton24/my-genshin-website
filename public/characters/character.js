const charName = location.pathname.substring(location.pathname.lastIndexOf("/") + 1).slice(0, -5);

<<<<<<< HEAD
function goBack() {
    window.history.back();
  }

document.getElementById("app").innerHTML = `
<button class="backBtn" onclick="goBack()">Go Back</button>
    <header>
=======
document.getElementById("app").innerHTML = `
<header>
>>>>>>> d76a61a199387a5b16a7bc188cc9e42e88ff9003
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
<<<<<<< HEAD
    <img class ="artifactPic box" src="../images/${charName}/${charName}-flower.png" />
    <img class ="artifactPic box" src="../images/${charName}/${charName}-plume.png" />
    <img class ="artifactPic box" src="../images/${charName}/${charName}-sands.png" />
    <img class ="artifactPic box" src="../images/${charName}/${charName}-goblet.png" />
    <img class ="artifactPic box" src="../images/${charName}/${charName}-circlet.png" />
=======
    <img class ="artifactPic" src="../images/${charName}/${charName}-flower.png" />
    <img class ="artifactPic" src="../images/${charName}/${charName}-plume.png" />
    <img class ="artifactPic" src="../images/${charName}/${charName}-sands.png" />
    <img class ="artifactPic" src="../images/${charName}/${charName}-goblet.png" />
    <img class ="artifactPic" src="../images/${charName}/${charName}-circlet.png" />
>>>>>>> d76a61a199387a5b16a7bc188cc9e42e88ff9003
    </div>
`;