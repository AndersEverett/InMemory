  var geocoder;

  function initialize() {
    geocoder = new google.maps.Geocoder();
    var that = this;
    $.ajax({
      url: '/soldiers',
      type: 'get',
      data: $(that).serialize()
    }).done(function(data) {
        $(data).each(function(index) {
          address = index[0] + " " + index[1];
          setTimeout('codeAddress(' + address + ")" , 2500);
        });
      console.log(data.length)
      console.log(data[0][0])
      console.log(data[0][1])
    }).fail(function() {
       console.log("Something needs to be fixed.")
    });
    
  }

  function codeAddress(address) {
    // var address = document.getElementById("address").value;
    geocoder.geocode( { 'address': address}, function(results, status) {
      if (status == google.maps.GeocoderStatus.OK) {
        map.setCenter(results[0].geometry.location);
        var marker = new google.maps.Marker({
            map: map,
            position: results[0].geometry.location
        });
      } else {
        alert("Geocode was not successful for the following reason: " + status);
      }
    });
  }

  google.maps.event.addDomListener(window, 'load', initialize);