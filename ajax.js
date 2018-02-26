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
*/