const tpoStyle = {
    color: '#e31a1c',
    weight: 1,
    opacity: 1,
    fillColor: '#fb9a99',
    fillOpacity: 0
}
const tcwmdcStyle = {
    color: '#fdb462',
    weight: 2,
    opacity: 1,
    fillColor: '#fdb462',
    fillOpacity: 0
}
const developablesitesStyle = { //This needs changing based on how the input of deliverable and non developable sites works out.
    color: '#bc80bd',
    weight: 2,
    opacity: 1,
    fillColor: '#fccde5',
    fillOpacity: 0.5
}
function getColor_floodzones(d) {
switch  (d) {   case 'Zone2'    :
                    return '#8dd3c7'    
                case 'Zone3'    :
                    return '#80b1d3'    
            }
}
function floodzonesStyle (feature) {
return {
    color: getColor_floodzones (feature.properties.type),
    weight: 1,
    opacity: 1,
    fillColor: getColor_floodzones (feature.properties.type),
    fillOpacity: 0.5
    }
}
const greenbeltStyle = {
    color: '#b3de69',
    weight: 2,
    opacity: 0.25,
    fillColor: '#b3de69',
    fillOpacity: 0.25
}

export {
tpoStyle,
tcwmdcStyle,
developablesitesStyle,
floodzonesStyle,
greenbeltStyle
}