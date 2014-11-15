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
      var legend = document.getElementById('legend');

      var controlUI = document.createElement('div');
      controlUI.style.height = '70px';
      controlUI.style.width = '70px';
      controlUI.style.marginRight = '100px'
      controlUI.style.marginTop = '20px'
      controlUI.style.paddingTop = '8px';
      controlUI.style.backgroundColor = '#7FFFD4';
      controlUI.style.borderStyle = 'solid';
      controlUI.style.borderWidth = '2px';
      controlUI.style.borderRadius = '50%';
      controlUI.style.cursor = 'pointer';
      controlUI.style.textAlign = 'center';
      controlUI.title = 'Launch Memorial';
      controlDiv.appendChild(controlUI);

      var controlText = document.createElement('div');
      controlText.style.fontFamily = 'Helvetica Neue';
      controlText.style.fontSize = '12px';
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

      var legend = document.getElementById('legend');
      
        // var name = style.name;
        // var icon = style.icon;
        // var div = document.createElement('div');
        // div.innerHTML = icon + " = one hometown of";
        // legend.append"<p>" + icon + "<p>";
      
            
      google.maps.event.addDomListener(controlUI, 'click', function() {
            dropPin();
       
      });
  

    }

        var launchDiv = document.createElement('div');
        var homeControl = new BindListener(launchDiv, map);
        launchDiv.index = 1;
        map.controls[google.maps.ControlPosition.TOP_RIGHT].push(launchDiv);
        map.controls[google.maps.ControlPosition.RIGHT_BOTTOM].push(
          document.getElementById('legend'));

}

google.maps.event.addDomListener(window, 'load', createMap);
