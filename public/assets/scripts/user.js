//currently does not redirect to home

$(document).on('click','.btn-logout', function () {
  $.get('/logout')
})
