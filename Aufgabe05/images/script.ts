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

/*Afrika*/
console.log(`Die Emission von Afrika ist ${africa18} kg CO2.`);
console.log(`Relativ zur Gesamtemission der Welt verursacht Afrika damit ${africa18 / emissionWhole * 100}%`);
console.log(`Für Afrika hat sich 2018 im Vergleich zu 2008 die Emission um ${(africa18 - africa08) / africa08 *100}% verändert`);
console.log(`2018 im Vergleich zu 2008 sind das ${africa18 - africa08} kg CO2`);
console.log('');

/*Südamerika*/
console.log(`Die Emission von Südamerika ist ${southAmerica18} kg CO2.`);
console.log(`Relativ zur Gesamtemission der Welt verursacht Südamerika damit ${southAmerica18 / emissionWhole * 100}%`);
console.log(`Für Südamerika hat sich 2018 im Vergleich zu 2008 die Emission um ${(southAmerica18 - southAmerica08) / southAmerica08 *100}% verändert`);
console.log(`2018 im Vergleich zu 2008 sind das ${southAmerica18 - southAmerica08} kg CO2`);
console.log('');

/*Europa*/
console.log(`Die Emission von Europa ist ${europe18} kg CO2.`);
console.log(`Relativ zur Gesamtemission der Welt verursacht Europa damit ${europe18 / emissionWhole * 100}%`);
console.log(`Für Europa hat sich 2018 im Vergleich zu 2008 die Emission um ${(europe18 - europe08) / europe08 * 100 }% verändert`);
console.log(`2018 im Vergleich zu 2008 sind das ${europe18 - europe08} kg CO2`);
console.log('');

/*Nordamerika*/
console.log(`Die Emission von Nordamerika ist ${northAmerica18} kg CO2.`);
console.log(`Relativ zur Gesamtemission der Welt verursacht Nordamerika damit ${northAmerica18 / emissionWhole * 100}%`);
console.log(`Für Nordamerika hat sich 2018 im Vergleich zu 2008 die Emission um ${(northAmerica18 - northAmerica08) / northAmerica08 *100}% verändert`);
console.log(`2018 im Vergleich zu 2008 sind das ${northAmerica18 - northAmerica08} kg CO2`);
console.log('');

/*Asian*/
console.log(`Die Emission von Asien ist ${asia18} kg CO2.`);
console.log(`Relativ zur Gesamtemission der Welt verursacht Asien damit ${asia18 / emissionWhole * 100}%`);
console.log(`Für Asien hat sich 2018 im Vergleich zu 2008 die Emission um ${(asia18 - africa08) / asia08 *100}% verändert`);
console.log(`2018 im Vergleich zu 2008 sind das ${asia18 - asia08} kg CO2`);
console.log('');

/*Australien*/
console.log(`Die Emission von Australien ist ${australia18} kg CO2.`);
console.log(`Relativ zur Gesamtemission der Welt verursacht Australien damit ${australia18 / emissionWhole * 100}%`);
console.log(`Für Australien hat sich 2018 im Vergleich zu 2008 die Emission um ${(australia18 - australia08) / australia08 *100}% verändert`);
console.log(`2018 im Vergleich zu 2008 sind das ${australia18 - australia08} kg CO2`);