
var userEmail

$(document).ready(function () {

  function getUrlParameter(sParam) {
    const sPageURL = decodeURIComponent(window.location.search.substring(1));
    const sURLVariables = sPageURL.split('&');
    let returner;

    sURLVariables.forEach((paraName) => {
      const sParameterName = paraName.split('=');
      if (sParameterName[0] === sParam) {
        returner = sParameterName[1] === undefined ? true : sParameterName[1];
      }
    });
    return returner;
  }

  userEmail = getUrlParameter('email')
  console.log(userEmail);
})

//currently does not redirect to home
$(document).on('click','.next-after-year', function () {
  var carYear = $('.car-year option:selected').val()
  console.log(carYear)

  $.get(`https://api.edmunds.com/api/vehicle/v2/makes?state=used&year=${carYear}&view=basic&fmt=json&api_key=kr7dpdutd45abpm5vzwkp42k`, data => {
    console.log(data)
    for (let i = 0; i < data.makes.length; i++) {
      $('.car-make').append(`<option value='${data.makes[i].name}' id=${i}>${data.makes[i].name}</option>`)
    }
  })
  .then(data => {
    console.log(data)
    $(document).on('click','.next-after-make', function () {
      var makeID = $('.car-make option:selected').attr('id')
      console.log(makeID)
      for (let j = 0; j < data.makes[makeID].models.length; j++) {
        $('.car-model').append(`<option value='${data.makes[makeID].models[j].name}' id=${data.makes[makeID].models[j].id}>${data.makes[makeID].models[j].name}</option>`)
      }
    })
  })
})
