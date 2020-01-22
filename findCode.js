if (navigator.geolocation) {
navigator.geolocation.getCurrentPosition(showPosition);
} else {
console.log('not');
}

function showPosition(position) {
    var my_lat_split = String(position.coords.latitude).split(".")[0];
    var my_lng_split = String(position.coords.longitude).split(".")[0];
    jQuery.get('country.json', function(data) {
        for (var i = 0; i < data.length; i++) {
            var lat = String(data[i].lat).split(".")[0];
            var lng = String(data[i].lng).split(".")[0];
            if(my_lat_split == lat && my_lng_split == lng){
                $("#code option").each(function( index ) {
                  if(data[i].iso2 == $(this).text().split(" ")[0]){
                    $(this).attr('selected', 'selected');
                  }
                });
            }
        }
    });
}
