$(function () {
  let amenityCheckBoxes = $(".amenities input");
  let amenities = {};
  for (let i = 0; i < amenityCheckBoxes.length; i++)
  {
    let currentAmenity = amenityCheckBoxes[i]
    $(currentAmenity).change(function () {
      let amenityId = $(currentAmenity).attr('data-id');
      let amenityName = $(currentAmenity).attr('data-name');
      if ($(currentAmenity).is(':checked')) {
	amenities[amenityId] = amenityName;
      } else {
	delete amenities[amenityId];
      }
      $('.amenities h4').text(Object.values(amenities).join(', '));
    });
  }
  $.get('http://0.0.0.0:5001/api/v1/status/', function (data, textStatus) {
    if (data.status === 'OK') {
      $('#api-status').addClass('available');
    }
  })
});
