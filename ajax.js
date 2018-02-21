
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


// logger that prevents circular object reference in javascript
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