
var scoutForm = document.getElementById('scoutForm');
var fd = new FormData(scoutForm);    
fd.append( 'file', input.files[0] );

$.ajax({
  url: 'data.json',
  dataType: 'text',
  type: 'POST',
  processData: false,
  contentType: 'application/x-www-form-urlencoded',
  data: fd,
  success: function(data){
    alert(data);
  }
});