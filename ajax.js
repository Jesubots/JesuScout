// pull form inputs for transport
var scoutForm = document.getElementById('scoutForm');
var fd = new FormData(scoutForm);    

// formData is for file usage in forms
fd.append( 'file', input.files[0] );

//jquery format
$.ajax({
  	url: 'data.json',
  	dataType: 'text',
  	type: 'POST',
  	processData: false,
  	contentType: 'application/x-www-form-urlencoded',
  	data: fd,
  	success: function(data){
  		alert("success!");
		console.log(JSON.stringify(data));
  	},
  	error: function() {
		alert("error");
		console.log("error");
  	}
});