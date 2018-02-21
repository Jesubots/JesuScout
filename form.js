
$(document).ready(function() {
	
	var button = document.getElementById('manualScout');
	
	button.addEventListener("click", function () {
		var scoutName = document.getElementById('scoutName').value;
		var matchNum  = document.getElementById('matchNum').value;
		var teamNum	  = document.getElementById('teamNum').value;
		
		var blocks = {};
		blocks.redSwitch	=	$("#redSwitch-count").val();
		blocks.scale		=	$("#scale-count").val();
		blocks.blueSwitch	=	$("#blueSwitch-count").val();
		blocks.levitate		=	$("#levitate-count").val();
		blocks.force		=	$("#force-count").val();
		blocks.boost		=	$("#boost-count").val();
		
		var climbMech 		= 	document.getElementById('climbMech').value;
		var winLoss	 		= 	document.getElementById('winLoss').value;
		
		logg("Scouter Name: " 	+ scoutName);
		logg("Match Number: " 	+ matchNum);
		logg("Team Number: " 	+ teamNum);
		logg("Climbing Mech: " 	+ climbMech);
		logg("Win or Loss: " 	+ winLoss);
		logg(JSON.stringify(blocks));
	});
	
	// object format
	$( "form" ).submit(function( event ) {
  		logg( $( this ).serializeArray() );
  		event.preventDefault();
	});
	
});


// console log that prevents circular object reference in javascript
var logg = function(msg, obj) {
    console.log('\n');
    if(obj) {
        try {
            console.log(msg + JSON.stringify(obj));
        } catch(err) {
            var simpleObject = {};
            for (var prop in obj ){
                if (!obj.hasOwnProperty(prop)){
                    continue;
                }
                if (typeof(obj[prop]) == 'object'){
                    continue;
                }
                if (typeof(obj[prop]) == 'function'){
                    continue;
                }
                simpleObject[prop] = obj[prop];
            }
            console.log('circular-' + msg + JSON.stringify(simpleObject)); // returns cleaned up JSON
        }        
    } else {
        console.log(msg);
    }
};


