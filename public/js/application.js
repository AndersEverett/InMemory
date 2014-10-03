      var map;
      
      function createMap() {
 
        geocoder = new google.maps.Geocoder();
        
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


    function BindListener(controlDiv, map) {

      // Set CSS styles for the DIV containing the control
      // Setting padding to 5 px will offset the control
      // from the edge of the map
      controlDiv.style.padding = '5px';

      // Set CSS for the control border
      var controlUI = document.createElement('div');
      controlUI.style.backgroundColor = 'white';
      controlUI.style.borderStyle = 'solid';
      controlUI.style.borderWidth = '2px';
      controlUI.style.cursor = 'pointer';
      controlUI.style.textAlign = 'center';
      controlUI.title = 'Launch Memorial';
      controlDiv.appendChild(controlUI);

      // Set CSS for the control interior
      var controlText = document.createElement('div');
      controlText.style.fontFamily = 'Arial,sans-serif';
      controlText.style.fontSize = '12px';
      controlText.style.paddingLeft = '4px';
      controlText.style.paddingRight = '4px';
      controlText.innerHTML = '<b>Launch</b>';
      controlUI.appendChild(controlText);

      // Setup the click event listeners: simply set the map to
      // Chicago
      google.maps.event.addDomListener(controlUI, 'click', function() {
        
    
        $.ajax({
              url: '/soldiers',
              type: 'get'

            }).done(function(data) {
                console.log("here's the data")
                $.each(data, function(index, value) {
                  console.log(data[index][0]);
                  console.log(data[index][1]);
                  address = (data[index][0]) + "," + (data[index][1])
                  lightPath(address)
                 });
            }).fail(function() {
               console.log("Something needs to be fixed.")
            });


              var lightPath = function(adr) {
                geocoder.geocode({'address': adr}, function(adr, status){

              if (status == google.maps.GeocoderStatus.OK) {
                console.log("inside if statement")
                    // map.setCenter(results[0].geometry.location);
                    var marker = new google.maps.Marker({
                        map: map,
                        position: adr[0].geometry.location
                        // animation: google.maps.Animation.DROP
                    });
              } else {
                    alert("Geocode was not successful for the following reason: " + status);
                }

                });
              console.log("********inside");
              console.log("****"+adr);
              console.log(status)
                console.log("post attempted");
              }


      });

    }
  
        var launchDiv = document.createElement('div');
        var homeControl = new BindListener(launchDiv, map);
        launchDiv.index = 1;
        map.controls[google.maps.ControlPosition.TOP_RIGHT].push(launchDiv);

      }

google.maps.event.addDomListener(window, 'load', createMap);



