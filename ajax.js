
$(function () {
	//cache tablesetting to DOM
	var $sumEnding			= $('#matchSummary');
	
	//cache form elements to DOM
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
	
	var matchTemplate = "" +
		"<tr>"
			"<th><strong>Scouter:</strong> {{Scouter}}</th>" +
			"<th><strong>Match:</strong> {{Match}}</th>" +
			"<th><strong>Match:</strong> {{Match}}</th>" +
			"<th><strong>Team:</strong> {{Team}}</th>" +
			"<th><strong>Red Switch Count:</strong> {{RedSwitch}}</th>" +
			"<th><strong>Scale Count:</strong> {{Scale}}</th>" +
			"<th><strong>Blue Switch Count:</strong> {{BlueSwitch}}</th>" +
			"<th><strong>Levitate Count:</strong> {{Levitate}}</th>" +
			"<th><strong>Force Count:</strong> {{Force}}</th>" +
			"<th><strong>Boost Count:</strong> {{Boost}}</th>" +
			"<th><strong>Climb Mechanism:</strong> {{ClimbMech}}</th>" +
			"<th><strong>W/L:</strong> {{WinLoss}}</th>" +
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
			url: '../html/server.html',
			data: matchSum,
			success: function(newMatch) {
				addMatch(newMatch);
				console.log('Match saved successfully!');
			},
			error: function() {
				alert('error saving match');
			}
		});
	});
});