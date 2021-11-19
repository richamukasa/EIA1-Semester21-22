window.addEventListener("load", function () {
var africa08: number = 1028;
var africa18: number = 1235.5;
var southAmerica08: number = 1132.6;
var southAmerica18: number = 1261.5;
var europe08: number = 4965.7;
var europe18: number = 4209.3;
var northAmerica08: number = 6600.4;
var northAmerica18: number = 6035.6;
var asia08: number = 12954.7;
var asia18: number = 16274.1;
var australia08: number = 1993;
var australia18: number = 2100.5;

/*Damit man die Rechnung nicht sechs Mal machen muss*/
var emissionWhole: number = africa18 + southAmerica18 + europe18 + northAmerica18 + asia18 + australia18;

function activeCountry(country18:number, country08:number, country:string): void {
    document.querySelector("#titleRegion").innerHTML=country;
    document.querySelector("#detailRegion").innerHTML=country;
    document.querySelector(".absoluteEmission").innerHTML=`${country18}`;
    document.querySelector(".relativeEmission").innerHTML= `${Math.round(country18 / emissionWhole * 10000) / 100}%`;
    document.querySelector(".growthPercent").innerHTML=`${Math.round((country18 - country08) / country08 * 10000) / 100}%`;
    document.querySelector(".growthAbsolute").innerHTML=(country18 - country08).toFixed(2);

    var barDiagram:HTMLElement = document.querySelector(".chart");
    barDiagram.style.height = `${Math.round(country18 / emissionWhole * 10000) / 100}%`;
}

document.querySelector(".africa").addEventListener('click', function(){activeCountry(africa18, africa08, "Africa")});
document.querySelector(".asia").addEventListener('click', function(){activeCountry(asia18, asia08, "Asia")});
document.querySelector(".australia").addEventListener('click', function(){activeCountry(australia18, australia08, "Australia")});
document.querySelector(".europe").addEventListener('click', function(){activeCountry(europe18, europe08, "Europe")});
document.querySelector(".northAmerica").addEventListener('click', function(){activeCountry(northAmerica18, northAmerica08, "North America")});
document.querySelector(".southAmerica").addEventListener('click', function(){activeCountry(southAmerica18, southAmerica08, "South America")});

});