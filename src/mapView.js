"use strict";
function initMap() {
    //latitude and longtitude of the selected location
    const myLatLng = { lat: 64.13849063434732, lng: -21.94668353068848 };
    //the map, centered at selected location
    const map = new google.maps.Map(document.getElementById("mapCanvas"), {
        zoom: 12,
        center: myLatLng
    });
    //info window content
    let contentString = '<div id="content" class= w-56>' +
        '<h1 class="font-lexend pb-2 text-2xl font-bold text-orange";">GRÍMUR opening</h1>' +
        '<div id="bodyContent">' +
        '<div style="float:left; width:40%;"><img src="images/grimur.jpg" width="100" height="80"/></div>' +
        '<div style="float:right; width:50%;margine-top: -19px;">' +
        '<p class = "font-lexend text-gray">A large exhibition titled MASKS at the Nordic House. Over 200 photograps and slides bubbling with queer rhetoric and aesthetics.' +
        '</div>' +
        '</div>' +
        '</div>';
    // Add info window
    const infowindow = new google.maps.InfoWindow({
        content: contentString
    });
    // Add info window
    const marker = new google.maps.Marker({
        position: myLatLng,
        map: map,
        title: 'Klambratun'
    });
    //Marker click event: open info window
    google.maps.event.addListener(marker, 'click', function () {
        infowindow.open(map, marker);
    });
    //open info window on load
    infowindow.open(map, marker);
}
window.initMap = initMap;
