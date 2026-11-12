const API = "./colors.json";
let globalData = [];

async function init() {
    const response = await fetch(API);
    const data = await response.json();
    globalData = data
    displayColors();
}


function displayColors() {
    const mainSection = document.getElementById('mainSection');
    for (var i = 0; i < globalData.length; i++) {
        const colorDiv = document.createElement('div');
        const cssValue = globalData[i].cssValue;
        let isLight = false;
        if ( globalData[i].textColor === 'light' ) {
            isLight = true;
            colorDiv.style.color = "white";
        }
        else
        {
            isLight = false;
            colorDiv.style.color = "black"; 
        }

        colorDiv.style.backgroundColor = cssValue;
        colorDiv.innerHTML = globalData[i].name;
        mainSection.appendChild(colorDiv);
    }
}

init();
