      var map;
      // var heatmap;

      function createMap() {

        var mapOptions = {
          center: { lat: 38.50, lng: -96.28},
          zoom: 5.0
        };
        var map = new google.maps.Map(document.getElementById('map-canvas'),
            mapOptions);

        map.set('styles',  [
            {
            featureType: "road",
            elementType: "all",
            stylers: [
              {visibility: "off"}
            ]
          },{
            featureType: "landscape",
            elementType: "all",
            stylers: [
              {visibility: "simplified"},
              {color: "#163d04"},
              {hue: "#dd00ff"},
          {saturation: -11},
              {lightness: -17},
              { gamma: 1.04 }
            ]
          },{
            featureType: "all",
            elementType: "labels",
            stylers: [
              { visibility: "off" }
            ]
          },{
            featureType: "water",
            elementType: "all",
            stylers: [
              {color: "#a3899a"},
              {hue: "#ff0008"},
              {saturation: 13},
              {lightness: -17},
              {gamma: 0.68},
            ]
          },
        ]);

        console.log("map set");

        function lightPath(coords) {
          var marker1 = new google.maps.Marker({
              map: map,
              position: new google.maps.LatLng(coords[0], coords[1]),
              // icon: 'images/light.png',
              animation: google.maps.Animation.DROP
            });
        }
          lightPath([37.7833, -122.41467]);
        }

google.maps.event.addDomListener(window, 'load', createMap);



