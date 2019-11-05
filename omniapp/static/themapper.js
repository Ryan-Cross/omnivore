var omnivoremap = L.map(themap,
    {
        center:[50.688634, -120.357448],
        zoom:8
    });

var marker = L.marker([50.688634, -120.357448], {
        color: 'red',
        fillColor: '#f03',
        fillOpacity: 0.5,
        radius: 10
    }).addTo(omnivoremap);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(omnivoremap);