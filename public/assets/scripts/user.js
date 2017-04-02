
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
$(document).on('click','.btn-logout', function () {
  $.get('/logout')
})
