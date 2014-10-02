
      function initialize() {

        // var mapOptions = {
        //   center: { lat: 38.50, lng: -93.28},
        //   zoom: 5.0
        // };
        var latlng = new google.maps.LatLng(37.7833, 122.4167);

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


        var styledMap = new google.maps.StyledMapType(styles, {name: "Styled Map"});

      

        var map = new google.maps.StyledMapType(document.getElementById('map-canvas'),
            mapOptions);

        map.setOptions({styles: styles});

        map.setMapTypeId('map_style');
        map.mapTypes.set('map_style', styledMap);

        var marker1 = new google.maps.Marker({
        
          position: new google.maps.LatLng(28.4158, 81.2989),
        
          map: map,
          
        });


        
    }
      google.maps.event.addDomListener(window, 'load', initialize);

    

