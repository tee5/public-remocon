
document.addEventListener("DOMContentLoaded", init);

function init() {
    document.querySelector("#bedroomLightOnButton").addEventListener("click", onclickBedroomLightOnButton);
    document.querySelector("#bedroomLightOffButton").addEventListener("click", onclickBedroomLightOffButton);
    document.querySelector("#bedroomLightNightButton").addEventListener("click", onclickBedroomLightNightButton);
}

function onclickBedroomLightNightButton() {
    const url = "https://maker.ifttt.com/trigger/BEDROOM_LIGHT_NIGHT/with/key/dHtrMPsLT6qsQQWOK-VAr4";
    fetch(url)
        .then(function (respons) {
            return respons.json();
        })
        .then(function (json) {
            console.log(JSON.stringify(json));
        })
}

function onclickBedroomLightOffButton() {
    const url = "https://maker.ifttt.com/trigger/BEDROOM_LIGHT_OFF/with/key/dHtrMPsLT6qsQQWOK-VAr4";
    fetch(url)
        .then(function (respons) {
            return respons.json();
        })
        .then(function (json) {
            console.log(JSON.stringify(json));
        })
}

function onclickBedroomLightOnButton() {
    const url = "https://maker.ifttt.com/trigger/BEDROOM_LIGHT_ON/with/key/dHtrMPsLT6qsQQWOK-VAr4";
    fetch(url)
        .then(function (respons) {
            return respons.json();
        })
        .then(function (json) {
            console.log(JSON.stringify(json));
        })
}
