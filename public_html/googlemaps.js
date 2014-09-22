function initialize() {
    var mapCanvas = document.getElementById('map_canvas');
    var mapOptions = {
        center: new google.maps.LatLng(51.9204173, 4.4697347),
        zoom: 17,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };
        var map = new google.maps.Map(mapCanvas, mapOptions);
};
    google.maps.event.addDomListener(window, 'load', initialize);