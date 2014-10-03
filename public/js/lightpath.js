// geocoder = new google.maps.Geocoder();
allAddresses = [];
// var launchDiv = document.createElement('div');
// var homeControl = new HomeControl(launchDiv, map);
// launchDiv.index = 1;
// map.controls[google.maps.ControlPosition.TOP_RIGHT].push(launchDiv);

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
    plotPoints();
  });

}

var plotPoints = function() {
$.ajax({
   url: '/soldiers',
   type: 'get'

   }).done(function(data) {
     $.each(data, function(index, value) {
        address = (data[index][0]) + "," + (data[index][1])
        function lightPath(address) {
        
		    geocoder.geocode({'address': adress}, function(adress, status) {
		    console.log("********inside" + adress);
	    
		    if (status == google.maps.GeocoderStatus.OK) {
		      console.log("inside if statement")
		                    
		      var marker = new google.maps.Marker({
		        map: map,
		        position: adr[0].geometry.location
		                        // animation: google.maps.Animation.DROP
		      });
		    }else {
		      alert("Geocode was not successful for the following reason: " + status);
		    }

		    });
	    console.log("post attempted");
        };
        
      });

     }).fail(function() {
        console.log("Something needs to be fixed.")
     });
 
     
   
    
  
}

// google.maps.event.addDomListener(window, 'load', bindListener);