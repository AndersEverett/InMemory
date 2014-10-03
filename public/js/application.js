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

        $.ajax({
              url: '/soldiers',
              type: 'get'

            }).done(function(data) {
                console.log("here's the data")
                $.each(data, function(index, value) {
                  console.log(data[index][0]);
                  console.log(data[index][1]);
                  address = (data[index][0]) + "," + (data[index][1]);
                  $('#map-canvas').append("<div> address </div>").addClass('address');
                  setTimeout(lightPath, 2500);
                  // setTimeout('lightPath(' + address + ")" , 2500);
                   // lightPath([37.7833, -122.41467])
                });

            }).fail(function() {
               console.log("Something needs to be fixed.")
            });
          function lightPath() {

            console.log("inside")
            var address = document.getElementById("address").value;
            geocoder = new google.maps.Geocoder();

            geocoder.geocode({'address': address}, function(results, status) {

                    console.log("good so far")
                    console.log("results")
              if (status == google.maps.GeocoderStatus.OK) {
                    // map.setCenter(results[0].geometry.location);
                    var marker = new google.maps.Marker({
                        map: map,
                        position: results[0].geometry.location
                        // animation: google.maps.Animation.DROP
                    });
              } else {
                    alert("Geocode was not successful for the following reason: " + status);
                }
            });
          }
      }





google.maps.event.addDomListener(window, 'load', createMap);



