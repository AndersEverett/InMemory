//  var createButtonBind = function() {
//    google.maps.event.addDomListener(controlUI, 'click', function() {

//             function dropPin() {
//               console.log("$$$$$$"+ allAddresses[5] )
//               for (var i = 0; i< allAddresses.length; i++) {
//                   console.log("before the loop" +allAddresses[i])
//                 console.log("in the loop************")
//                 setTimeout(function() {
//                   lightPath(allAddresses[i]);
//                 }, i*100);
//               }
//             }

//               var lightPath = function(adr) {
//                 console.log("in the matrix********")
//                 geocoder.geocode({'address': adr}, function(adr, status){

//               if (status == google.maps.GeocoderStatus.OK) {
//                     console.log(adr[0].geometry.location)
//                     var marker = new google.maps.Marker({
//                         map: map,
//                         position: adr[0].geometry.location

//                     });
//               } else {
//                     alert("Geocode was not successful for the following reason: " + status);
//                 }

//                 });

//               }
//       });
// }
// google.maps.event.addDomListener(window, 'load', createButtonBind);
// geocoder = new google.maps.Geocoder();

// var launchDiv = document.createElement('div');
// var homeControl = new HomeControl(launchDiv, map);
// launchDiv.index = 1;
// map.controls[google.maps.ControlPosition.TOP_RIGHT].push(launchDiv);

// function BindListener(controlDiv, map) {

//   // Set CSS styles for the DIV containing the control
//   // Setting padding to 5 px will offset the control
//   // from the edge of the map
//   controlDiv.style.padding = '5px';

//   // Set CSS for the control border
//   var controlUI = document.createElement('div');
//   controlUI.style.backgroundColor = 'white';
//   controlUI.style.borderStyle = 'solid';
//   controlUI.style.borderWidth = '2px';
//   controlUI.style.cursor = 'pointer';
//   controlUI.style.textAlign = 'center';
//   controlUI.title = 'Launch Memorial';
//   controlDiv.appendChild(controlUI);

//   // Set CSS for the control interior
//   var controlText = document.createElement('div');
//   controlText.style.fontFamily = 'Arial,sans-serif';
//   controlText.style.fontSize = '12px';
//   controlText.style.paddingLeft = '4px';
//   controlText.style.paddingRight = '4px';
//   controlText.innerHTML = '<b>Launch</b>';
//   controlUI.appendChild(controlText);

//   // Setup the click event listeners: simply set the map to
//   // Chicago
//   google.maps.event.addDomListener(controlUI, 'click', function() {
//     plotPoints();
//   });

// }

// var plotPoints = function() {
// $.ajax({
//    url: '/soldiers',
//    type: 'get'

//    }).done(function(data) {
//      $.each(data, function(index, value) {
//         address = (data[index][0]) + "," + (data[index][1])
//         function lightPath(address) {

// 		    geocoder.geocode({'address': adress}, function(adress, status) {
// 		    console.log("********inside" + adress);

// 		    if (status == google.maps.GeocoderStatus.OK) {
// 		      console.log("inside if statement")

// 		      var marker = new google.maps.Marker({
// 		        map: map,
// 		        position: adr[0].geometry.location
// 		                        // animation: google.maps.Animation.DROP
// 		      });
// 		    }else {
// 		      alert("Geocode was not successful for the following reason: " + status);
// 		    }

// 		    });
// 	    console.log("post attempted");
//         };

//       });

//      }).fail(function() {
//         console.log("Something needs to be fixed.")
//      });





// }

// google.maps.event.addDomListener(window, 'load', bindListener);
