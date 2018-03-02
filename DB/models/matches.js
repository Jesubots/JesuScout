var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var matchSchema = new Schema({
	scoutName: String,
	matchNum: Number,
	teamName: String,
	redSwitchCount: Number,
	scaleCount: Number,
	scaleCount: Number,
	blueSwitchCount: Number,
	levitateCount: Number,
	forceCount: Number,
	boostCount: Number,
	climbMech: String,
	winLoss: String
});

var scoutName 		= module.exports = mongoose.model('scoutName', matchSchema);
var matchNum 		= module.exports = mongoose.model('matchNum', matchSchema);
var teamNum			= module.exports = mongoose.model('teamNum', matchSchema);
var redSwitchCount 	= module.exports = mongoose.model('redSwitchCount', matchSchema);
var scaleCount 		= module.exports = mongoose.model('scaleCount', matchSchema);
var blueSwitchCount = module.exports = mongoose.model('blueSwitchCount', matchSchema);
var levitateCount	= module.exports = mongoose.model('levitateCount', matchSchema);
var forceCount 		= module.exports = mongoose.model('forceCount', matchSchema);
var boostCount 		= module.exports = mongoose.model('boostCount', matchSchema);
var climbMech 		= module.exports = mongoose.model('climbMech', matchSchema);
var winLoss 		= module.exports = mongoose.model('winLoss', matchSchema);

