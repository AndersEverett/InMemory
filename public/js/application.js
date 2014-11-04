      var map;
      var addressTemp;
      var allAddresses = [];
      var iterator = 0;
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

        $.ajax({
              url: '/soldiers',
              type: 'get'

            }).done(function(data) {
                $.each(data, function(index, value) {
                  
                  address = (data[index][0]) + "," + (data[index][1])
                  allAddresses.push(address)
                  return allAddresses;
                 });

            }).fail(function() {
               console.log("Something needs to be fixed.")
            })


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
      controlText.style.fontFamily = 'Arial,sans-serif';
      controlText.style.fontSize = '12px';
      controlText.style.paddingLeft = '4px';
      controlText.style.paddingRight = '4px';
      controlText.innerHTML = '<b>Launch</b>';
      controlUI.appendChild(controlText);

      function dropPin() {
        for (var i = 0; i< allAddresses.length; i++) {
            setTimeout(function() {
              lightPath();
          }, 1000);
        }
      }

      function lightPath() {
      adr = allAddresses[iterator]
      geocoder.geocode({'address': adr}, function(adr, status){

      if (status == google.maps.GeocoderStatus.OK) {

            var marker = new google.maps.Marker({
                map: map,
                position: (adr)[0].geometry.location

            });
      } else {
            alert("Geocode was not successful for the following reason: " + status);
        }

      });

      iterator++;
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



