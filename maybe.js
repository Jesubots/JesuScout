/*
STUFF that might be useful later once working with socket 
and passing values to server.html, but for now is not needed
*/


/*
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
*/







/*
$(function () {
	//cache table to DOM	(server.html)
	var $sumEnding			= $('#matchSummary');
	
	//cache form elements to DOM	(scouting.html)
	var $scouterName 		= $('#scoutName');
	var $matchNumber 		= $('#matchNum');
	var $teamNumber  		= $('#teamNum');
	var $redSwitchCount 	= $('#redSwitch-count');
	var $scaleCount 		= $('#scale-count');
	var $blueSwitchCount 	= $('#blueSwitch-count');
	var $levitateCount		= $('#levitate-count');
	var $forceCount 		= $('#force-count');
	var $boostCount 		= $('#boost-count');
	var $climbMech 			= $('#climbMech');
	var $winLoss 			= $('#winLoss');
	
	// log elements to console
	logg("Scouter Name: " + $scouterName.val());
	logg("Match Number: " + $matchNumber.val());
	logg("Team Number: "  + $teamNumber.val());
	logg("Red Switch Count: " 	+ $redSwitchCount.val());
	
	var matchTemplate = "" +
		"<tr>"
			"<td>{{Scouter}}</td>" +
			"<td>{{Match}}</td>" +
			"<td>{{Team}}</td>" +
			"<td>{{RedSwitch}}</td>" +
			"<td>{{Scale}}</td>" +
			"<td>{{BlueSwitch}}</td>" +
			"<td>{{Levitate}}</td>" +
			"<td>{{Force}}</td>" +
			"<td>{{Boost}}</td>" +
			"<td>{{ClimbMech}}</td>" +
			"<td>{WinLoss}}</td>" +
		"</tr>";

	function addMatch(matchSum) {
		$sumEnding.append(Moustache.render(matchTemplate, matchSum));
	}
	
	// add ajax listener 
	$('#manualScout').on('click', function() {
		// cache actual values
		var matchSum = {
			Scouter:	$scouterName.val(),
			Match:		$matchNumber.val(),	
			Team:		$teamNumber.val(),
			RedSwitch:	$redSwitchCount.val(),
			Scale:		$scaleCount.val(),
			BlueSwitch:	$blueSwitchCount.val(),
			Levitate:	$levitateCount.val(),
			Force:		$forceCount.val(),
			Boost:		$boostCount.val(),
			ClimbMech:	$climbMech.val(),
			WinLoss:	$winLoss.val()
		};
		
		$.ajax({
			type: 'POST',
			url: 'server.html',
			data: matchSum,
			success: function(newMatch) {
				addMatch(newMatch);
				logg('Match saved successfully!');
			},
			error: function() {
				alert('error saving match');
			}
		});
	});
});
*/

