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

mongoose.model('scoutName', matchSchema);
mongoose.model('matchNum', matchSchema);
mongoose.model('teamNum', matchSchema);
mongoose.model('redSwitchCount', matchSchema);
mongoose.model('scaleCount', matchSchema);
mongoose.model('blueSwitchCount', matchSchema);
mongoose.model('levitateCount', matchSchema);
mongoose.model('forceCount', matchSchema);
mongoose.model('boostCount', matchSchema);
mongoose.model('climbMech', matchSchema);
mongoose.model('winLoss', matchSchema);

