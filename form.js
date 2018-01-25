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
		
		var climbMech 	= document.getElementById('climbMech').value;
		var winLoss	 	= document.getElementById('winLoss').value;
		
		console.log("Scouter Name: " 	+ scoutName);
		console.log("Match Number: " 	+ matchNum);
		console.log("Team Number: " 	+ teamNum);
		console.log("Climbing Mech: " 	+ climbMech);
		console.log("Win or Loss: " 	+ winLoss);
		console.log(JSON.stringify(blocks));
	});
});

