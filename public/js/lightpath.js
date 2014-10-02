// var hometowns = [
//   new google.maps.LatLng(37.7833, 122.4167),
//   new google.maps.LatLng(38.6272, 90.1978),
//   new google.maps.LatLng(28.4158, 81.2989),
//   new google.maps.LatLng(46.5778, 116.7078)
// ];

// var markers = [];
// var iterator = 0;


// function drop() {
//   console.log("drop")
//   for (var i = 0; i < hometowns.length; i++) {
//     setTimeout(function() {
//       addMarker();
//     }, i * 200);
//   }
// }
//  var map;
// function addMarker() {
//   markers.push(new google.maps.Marker({
//     position: hometowns[iterator],
//     map: map,
//     draggable: false,
//     animation: google.maps.Animation.DROP
//   }));
//   iterator++;
// }

// google.maps.event.addDomListener(window, 'load', drop);


//single marker:

 // var marker = new google.maps.Marker({
        //   position: new google.maps.LatLng(46.5778, 116.7078)
        //   map: styledMap
        // });