//import { delsitesPopup, devsitesPopup, notdevsitesPopup, permissionedsitesPopup } from './Popups'
import { tclaStyle, tcwmdcStyle, greenbeltStyle, floodzonesStyle} from './Styles'

const Configuration = {
    Map: {
        StartingLatLng: [53.391067,-2.1197936],
        StartingZoom: 2,
        FullscreenControl: true,
        DisplayLayerControls: true,
        DisplayGrayScale: true,
        DisplayStreets: true,
        EnableAddressSearch: true,
        EnableLocateControl: true
    },
    DynamicData: 
    [
        //{
          //  key: 'Tree Preservation Orders',
            //url: 'https://spatial.stockport.gov.uk/geoserver/wfs?service=WFS&version=1.1.0&request=GetFeature&typeName=trees:tpo_merged&outputFormat=application/json&bbox={0},EPSG:4326&srsName=EPSG:4326',
            //layerOptions: {
            //    onEachFeature: tpoPopup,
            //    maxZoom: 2,
            //    style: tpoStyle
            //},
            //displayOverlay: true,
            //visibleByDefault: true
        //},

        //{
            //key: 'TPO - Proposed',
            //url: 'https://spatial.stockport.gov.uk/geoserver/wfs?service=WFS&version=1.1.0&request=GetFeature&typeName=trees:tpo_proposed&outputFormat=application/json&bbox={0},EPSG:4326&srsName=EPSG:4326',
            //layerOptions: {
            //    onEachFeature: tpoPopup,
            //    maxZoom: 2,
            //    style: proposedtpoStyle
            //},
            //displayOverlay: true,
            //visibleByDefault: true
        //},

        //{
            //key: 'TPO - Revoked',
            //url: 'https://spatial.stockport.gov.uk/geoserver/wfs?service=WFS&version=1.1.0&request=GetFeature&typeName=trees:tpo_revoked&outputFormat=application/json&bbox={0},EPSG:4326&srsName=EPSG:4326',
            //layerOptions: {
            //    onEachFeature: tpoPopup,
            //    maxZoom: 2,
            //    style: revokedtpoStyle
            //},
            //displayOverlay: true,
            //visibleByDefault: true
        //},

        //{
        //    key: 'Conservation Areas',
        //    url: 'https://spatial.stockport.gov.uk/geoserver/wfs?service=WFS&version=1.1.0&request=GetFeature&typeName=heritage:conservation_area&outputFormat=application/json&bbox={0},EPSG:4326&srsName=EPSG:4326',
        //    layerOptions: {
        //        onEachFeature: conservationPopup,
        //        maxZoom: 2,
        //        style: conservationStyle
        //    },
        //    displayOverlay: true,
        //    visibleByDefault: true
        //},

        {
            key: 'Green Belt',
            url: 'https://spatial.stockport.gov.uk/geoserver/wfs?service=WFS&version=1.1.0&request=GetFeature&typeName=planning:green_belt_os&outputFormat=application/json&bbox={0},EPSG:4326&srsName=EPSG:4326',
            layerOptions: {
                maxZoom: 2,
                style: greenbeltStyle
            },
            displayOverlay: true,
            visibleByDefault: true
        },
        
        {
            key: 'Flood Risk Zones',
            url: 'https://spatial.stockport.gov.uk/geoserver/wfs?service=WFS&version=1.1.0&request=GetFeature&typeName=flooding:flood_zones&outputFormat=application/json&bbox={0},EPSG:4326&srsName=EPSG:4326',
            layerOptions: {
                maxZoom: 2,
                style: floodzonesStyle
            },
            displayOverlay: true,
            visibleByDefault: true
        },

        {
            key: 'Town Centre Living Area',
            url: 'https://spatial.stockport.gov.uk/geoserver/wfs?service=WFS&version=1.1.0&request=GetFeature&typeName=planning:town_centre_living_area&outputFormat=application/json&bbox={0},EPSG:4326&srsName=EPSG:4326',
            layerOptions: {
                maxZoom: 2,
                style: tclaStyle
            },
            displayOverlay: true,
            visibleByDefault: true
        },
        
        {
            key: 'Town Centre West Mayoral Development Corporation',
            url: 'https://spatial.stockport.gov.uk/geoserver/wfs?service=WFS&version=1.1.0&request=GetFeature&typeName=planning:town_centre_west_mdc&outputFormat=application/json&bbox={0},EPSG:4326&srsName=EPSG:4326',
            layerOptions: {
                maxZoom: 2,
                style: tcwmdcStyle
            },
            displayOverlay: true,
            visibleByDefault: true
        },

        {
            key: 'os1250_line',
            url: 'http://spatial.stockport.gov.uk/geoserver/wms?',
            layerOptions: {
                maxZoom: 20,
                minZoom: 18,
                layers: 'base_maps:os1250_line',
                format: 'image/png',
                transparent: true
            },
            displayOverlay: false,
            visibleByDefault: true
        },
        {
            key: 'os1250_text',
            url: 'http://spatial.stockport.gov.uk/geoserver/wms?',
            layerOptions: {
                maxZoom: 20,
                minZoom: 18,
                layers: 'base_maps:os1250_text',
                format: 'image/png',
                transparent: true
            },
            displayOverlay: false,
            visibleByDefault: true
        }
        
    ],
    StaticData: 
    [
        {
            key: 'boundary',
            url: 'https://spatialgeojson.s3-eu-west-1.amazonaws.com/webmapping/boundary.geojson',
            layerOptions: {
                interactive: false,
                maxZoom: 9,
                style: {
                    color: '#000',
                    weight: 4,
                    opacity: 1,
                    fillColor: '#000',
                    fillOpacity: 0
                }
            }
        }
    ]
}

export default Configuration