const markerGroups = [
    {
        "iconUrl": "media/ranger-base-icon.png",
        "popupHeader": "Ranger Base",
        "popupFooter": "",
        "layerName": "Ranger Bases",
        "markers": [
            {
                "coords": [-11.75079, 142.58221],
                "popupText": "Heathlands Ranger Base."
            }
        ]
    },
    {
        "iconUrl": "media/permit-icon.png",
        "popupHeader": "Camping Permit Kiosk",
        "popupFooter": "Learn about camping permits in the <a href=\"camping.html\">camping section</a>.",
        "layerName": "Camping",
        "markers": [
            {
                "coords": [-11.75050, 142.58141],
                "popupText": ""
            }
        ]
    },
    {
        "iconUrl": "media/toilet-icon.png",
        "popupHeader": "Public Toilet",
        "popupFooter": "",
        "layerName": "Amenities",
        "markers": [
            {
                "coords": [-11.75037, 142.58215],
                "popupText": ""
            },
            {
                "coords": [-11.38742, 142.41341],
                "popupText": ""
            },
            {
                "coords": [-11.63227, 142.85580],
                "popupText": "",
            },
            {
                "coords": [-11.43933, 142.43377],
                "popupText": "",
            }
        ]
    },
    {
        "iconUrl": "media/tent-icon.png",
        "popupHeader": "Camp Site",
        "popupFooter": "<i>A camping permit may be required. See the <a href=\"camping.html\">camping section</a> for more information.</i>",
        "layerName": "Camping",
        "markers": [
            {
                "coords": [-11.38721, 142.41334],
                "popupText": "Elliot Falls Campground."
            },
            {
                "coords": [-11.63166, 142.85587],
                "popupText": "Captain Billy Landing Campground."
            },
            {
                "coords": [-11.17218, 142.79498],
                "popupText": "Ussher Point South Campground."
            },
            {
                "coords": [-11.15697, 142.79705],
                "popupText": "Ussher Point North Campground."
            },
            {
                "coords": [-11.44143, 142.43324],
                "popupText": "Fruitbat Falls Campground."
            }
        ]
    },
    {
        "iconUrl": "media/caution-icon.png",
        "popupHeader": "Caution",
        "popupFooter": "",
        "layerName": "Hazards",
        "markers": [
            {
                "coords": [-11.14005, 142.36146],
                "popupText": "No river crossing."
            },
            {
                "coords": [-11.38631, 142.41490],
                "popupText": "Water level can change unexpectedly.", 
            }
        ]
    },
    {
        "iconUrl": "media/tap-icon.png",
        "popupHeader": "Tap Water Available",
        "popupFooter": "<i>Do not rely on indicated water sources as your only source of drinking water. Always bring enough water for your journey.</i>",
        "layerName": "Amenities",
        "markers": [
            {
                "coords": [-11.38728, 142.41353],
                "popupText": ""
            }
        ]
    },
    {
        "iconUrl": "media/interest-icon.png",
        "popupHeader": "Point of Interest",
        "popupFooter": "",
        "layerName": "Points of Interest",
        "markers": [
            {
                "coords": [-11.63173, 142.85614],
                "popupText": "Captain Billy Landing.<br>A remote beach with camping and fishing opportunities."
            },
            {
                "coords": [-10.68722, 142.53155],
                "popupText": "Cape York.<br>The northenmost point of mainland Australia."
            },
            {
                "coords": [-11.38625, 142.41449],
                "popupText": "Elliot Falls. A picturesque waterfall with space for swimming."
            }
        ]
    }
];

function initialiseMap()
{
    var map = L.map('map');
    
    // A pair of coordinates that define a bounding box around Cape York.
    const bounds = [
        [ -18.420057, 140.530369 ],
        [ -10.479154, 146.807641 ]
    ];
    
    // Fit the map view to the bounding box and prevent zooming / panning out of that box.
    map.fitBounds(bounds);
    map.setMaxBounds(bounds);
    map.setMinZoom(map.getZoom());
    
    // Provide OpenStreetMap tiles for the map to display.
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);
    
    var markerLayers = {};
    
    for (i = 0; i < markerGroups.length; i++) {
        var markerGroup = markerGroups[i];
        
        if (!(markerGroup["layerName"] in markerLayers)) {
            markerLayers[markerGroup["layerName"]] = L.layerGroup().addTo(map);
        }
        
        var icon = L.icon({
                iconUrl: markerGroup["iconUrl"],
                iconSize:     [40, 60],
                iconAnchor:   [20, 60],
                popupAnchor:  [0, -60]
            }
        );
        
        for (j = 0; j < markerGroup["markers"].length; j++) {
            var markerData = markerGroup["markers"][j];
            var marker = L.marker(markerData["coords"], {icon: icon}).addTo(markerLayers[markerGroup["layerName"]]);
            var popupText = "";
            if (markerGroup["popupHeader"].length > 0) {
                popupText += "<b>" + markerGroup["popupHeader"] + "</b>";
            }
            if (markerData["popupText"].length > 0) {
                popupText += "<br>" + markerData["popupText"];
            }
            if (markerGroup["popupFooter"].length > 0) {
                popupText += "<br>" + markerGroup["popupFooter"];
            }
            
            marker.bindPopup(popupText);
        }
    }
    
    var baseLayers = {"No overlay": L.layerGroup().addTo(map)};
    L.control.layers(baseLayers, markerLayers, {collapsed: false}).addTo(map);
}

initialiseMap();