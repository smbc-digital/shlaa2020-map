const tpoStyle = {
    color: '#00ff00',
    weight: 1,
    opacity: 1,
    fillColor: '#00ff00',
    fillOpacity: 0.7
}
const proposedtpoStyle = {
    color: '#f7ff05',
    weight: 1,
    opacity: 1,
    fillColor: '#f7ff05',
    fillOpacity: 0.7
}
const revokedtpoStyle = {
    color: '#2e3330',
    weight: 1,
    opacity: 1,
    fillColor: '#2e3330',
    fillOpacity: 0.7
}
function getColor_floodzones(d) {
switch  (d) {   case 'Zone2'    :
                    return '#a6cee3'    ;
                case 'Zone3'    :
                    return '#1f78b4'    ;
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
    color: '#b2df8a',
    weight: 2,
    opacity: 0.25,
    fillColor: '#b2df8a',
    fillOpacity: 0.25
}

export {
tpoStyle,
proposedtpoStyle,
revokedtpoStyle,
floodzonesStyle,
greenbeltStyle
}