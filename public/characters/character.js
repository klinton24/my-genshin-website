const charName = location.pathname.substring(location.pathname.lastIndexOf("/") + 1).slice(0, -5);

document.getElementById("app").innerHTML = `
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
    <img class ="artifactPic" src="../images/${charName}/${charName}-flower.png" />
    <img class ="artifactPic" src="../images/${charName}/${charName}-plume.png" />
    <img class ="artifactPic" src="../images/${charName}/${charName}-sands.png" />
    <img class ="artifactPic" src="../images/${charName}/${charName}-goblet.png" />
    <img class ="artifactPic" src="../images/${charName}/${charName}-circlet.png" />
    </div>
`;