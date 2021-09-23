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
    
    var exampleMarker = L.marker([-10.6886, 142.5317]).addTo(map);
    exampleMarker.bindPopup("<b>Example marker!</b><br>This is the northenmost point of Cape York.")
}

initialiseMap();