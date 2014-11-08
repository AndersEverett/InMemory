      var map;
      var allLatLongs = [];
      var iterator = 0;
      var markers = [];
      function createMap() {

        geocoder = new google.maps.Geocoder();

        var mapOptions = {
          center: { lat: 38.50, lng: -96.28},
          zoom: 5.0, 
          disableDefaultUI: true,
          draggable: false,
          scrollwheel: false,
          navigationControl: false,
          mapTypeControl: false,
          scaleControl: false
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


    function BindListener(controlDiv, map) {

      
      controlDiv.style.padding = '5px';

      var controlUI = document.createElement('div');
      controlUI.style.backgroundColor = 'white';
      controlUI.style.borderStyle = 'solid';
      controlUI.style.borderWidth = '2px';
      controlUI.style.cursor = 'pointer';
      controlUI.style.textAlign = 'center';
      controlUI.title = 'Launch Memorial';
      controlDiv.appendChild(controlUI);

      var controlText = document.createElement('div');
      controlText.style.backgroundColor = '#E6B2CC';
      controlText.style.borderRadius = '5px';
      controlText.style.height = '50px';
      controlText.style.width = '60px';
      controlText.style.fontFamily = 'Helvetica';
      controlText.style.fontSize = '12px';
      controlText.style.paddingLeft = '4px';
      controlText.style.paddingRight = '4px';
      controlText.style.paddingTop = '10px';
      controlText.innerHTML = '<b>Launch Memorial</b>';
      controlUI.appendChild(controlText);

      
      function dropPin() {
        console.log("in pins")
        $.ajax({
              url: '/soldiers',
              type: 'get'

            }).done(function(data) {
                console.log(data.points[16].latitude)
                console.log(data.points[16].longitude)
                data = data.points
                console.log(data)
                $.each(data, function(index, value) {
                  var pin = new google.maps.LatLng(data[index].latitude, data[index].longitude)
                  allLatLongs.push(pin)
                 });
                pins();
            }).fail(function() {
               console.log("Something needs to be fixed.")
            })


        pins = function() {
          for (var i = 0; i< allLatLongs.length; i++) {
            setInterval(function() {
              lightPath();
            }, i*500);
          }
          console.log(markers.length)
        },
        
        lightPath = function() {
          var pin = allLatLongs[iterator]
  		    markers.push(new google.maps.Marker({
    		    position: pin,
            icon: gold,
    	      map: map,
    	      draggable: false,
    	      animation: google.maps.Animation.DROP
  	      }));
  		    iterator++;

  	    }

        var gold = {
          path: 'M 5, 5 m -5, 0 a 5, 5 0 1,0 10,0 a 5,5 0 1,0 -10,0 z',
          fillColor: '#7FFFD4',
          fillOpacity: 0.8,
          scale: 1,
          strokeColor: 'gold',
          strokeWeight: 1
        };


      }


      
      google.maps.event.addDomListener(controlUI, 'click', function() {
            dropPin();
       
      });


    }

        var launchDiv = document.createElement('div');
        var homeControl = new BindListener(launchDiv, map);
        launchDiv.index = 1;
        map.controls[google.maps.ControlPosition.TOP_RIGHT].push(launchDiv);

}

google.maps.event.addDomListener(window, 'load', createMap);
