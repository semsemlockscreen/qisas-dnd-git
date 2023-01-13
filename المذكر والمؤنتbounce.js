(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"المذكر والمؤنتbounce_atlas_1", frames: [[0,0,1332,1708]]},
		{name:"المذكر والمؤنتbounce_atlas_2", frames: [[1480,1022,458,408],[560,1583,458,412],[1480,1432,458,408],[0,0,1634,1020],[0,1583,558,414],[669,1022,557,559],[1020,1583,458,412],[0,1022,667,535]]},
		{name:"المذكر والمؤنتbounce_atlas_3", frames: [[460,1197,458,384],[0,1611,458,387],[920,398,458,391],[0,0,458,405],[0,1215,458,394],[460,403,458,398],[460,0,458,401],[0,407,458,404],[0,813,458,400],[460,803,458,392],[920,0,458,396],[1380,0,458,388],[920,791,458,384],[1428,1920,226,93],[1656,1895,226,90],[688,1583,226,96],[1642,1802,226,91],[460,1930,226,95],[460,1583,226,99],[688,1930,226,94],[1770,965,270,270],[1762,1237,270,270],[1380,390,458,380],[1244,1791,182,201],[1428,1791,212,127],[1380,772,388,328],[920,1177,282,513],[1840,0,201,540],[460,1791,574,137],[1840,542,196,421],[1204,1177,225,516],[1036,1791,206,249],[1690,1509,194,291],[1431,1102,329,334],[1431,1438,257,222],[460,1695,1174,94]]},
		{name:"المذكر والمؤنتbounce_atlas_4", frames: [[995,88,16,16],[957,354,40,26],[912,115,83,86],[1020,346,4,4],[912,203,68,68],[912,0,65,113],[803,460,179,32],[0,461,179,32],[181,461,179,32],[803,426,180,32],[0,427,180,32],[365,431,180,32],[804,391,180,33],[183,426,180,33],[621,426,180,33],[228,390,181,34],[621,391,181,33],[228,0,226,87],[456,0,226,87],[684,0,226,83],[0,0,226,89],[228,89,226,77],[684,85,226,80],[456,89,226,74],[0,91,226,71],[456,165,226,65],[684,167,226,62],[0,164,226,68],[228,229,226,56],[228,168,226,59],[228,287,226,52],[456,288,226,51],[684,231,226,55],[684,288,226,50],[0,289,226,50],[456,232,226,54],[0,234,226,53],[684,340,226,49],[0,341,226,48],[228,341,226,47],[456,389,163,40],[997,126,6,24],[1013,88,9,24],[1005,137,5,21],[188,391,2,5],[981,382,3,5],[1021,129,3,6],[976,382,3,6],[411,390,3,5],[997,106,12,18],[979,88,14,24],[1005,126,4,8],[1016,172,5,10],[997,152,6,6],[1020,372,4,4],[1018,390,3,4],[1009,360,7,4],[912,323,65,26],[1011,114,8,21],[982,256,7,7],[1022,268,2,2],[1018,384,4,4],[1023,176,1,1],[1023,179,1,1],[991,256,7,7],[979,0,45,86],[192,391,3,3],[426,394,2,2],[912,273,65,48],[441,390,4,3],[430,394,2,2],[197,391,3,3],[1023,172,1,2],[1020,332,4,5],[1020,339,4,5],[912,351,43,32],[202,391,3,3],[979,273,43,37],[997,181,1,1],[1000,181,1,1],[999,378,3,2],[1019,196,5,5],[1009,366,7,4],[222,391,3,2],[924,385,4,4],[930,385,4,4],[997,184,9,7],[183,391,3,4],[1006,193,11,5],[999,371,5,5],[979,312,39,40],[1018,379,6,3],[425,390,6,2],[964,382,10,2],[997,193,7,8],[1006,372,5,5],[1018,161,6,9],[1000,256,4,12],[982,249,11,5],[1007,172,7,10],[999,359,3,10],[912,385,10,2],[1013,354,9,4],[433,390,6,2],[1004,359,3,10],[1019,249,5,9],[1022,260,2,6],[997,160,9,8],[1003,181,1,1],[1013,372,5,5],[416,394,3,2],[421,394,3,2],[1006,200,1,1],[957,382,5,5],[1006,256,8,5],[936,385,4,4],[1006,263,6,5],[942,385,4,4],[982,203,42,44],[1008,161,8,9],[999,354,12,3],[982,265,13,3],[995,249,10,5],[1018,360,6,4],[964,386,7,2],[1019,184,5,10],[416,390,7,2],[1012,137,10,9],[997,170,8,9],[1018,366,6,4],[1021,114,3,13],[1016,260,4,10],[1007,249,10,5],[1022,148,2,11],[1020,324,4,6],[1008,184,9,7],[1020,312,4,10],[434,394,2,2],[1009,200,1,1],[1012,148,8,11],[222,395,2,2],[948,385,5,3],[207,391,3,3],[212,391,3,3],[447,390,4,3],[217,391,3,3],[986,382,30,28],[1012,200,1,1],[456,341,226,46],[0,391,181,34]]}
];


(lib.AnMovieClip = function(){
	this.currentSoundStreamInMovieclip;
	this.actionFrames = [];
	this.soundStreamDuration = new Map();
	this.streamSoundSymbolsList = [];

	this.gotoAndPlayForStreamSoundSync = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.gotoAndPlay = function(positionOrLabel){
		this.clearAllSoundStreams();
		this.startStreamSoundsForTargetedFrame(positionOrLabel);
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		this.clearAllSoundStreams();
		this.startStreamSoundsForTargetedFrame(this.currentFrame);
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
		this.clearAllSoundStreams();
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
		this.clearAllSoundStreams();
	}
	this.startStreamSoundsForTargetedFrame = function(targetFrame){
		for(var index=0; index<this.streamSoundSymbolsList.length; index++){
			if(index <= targetFrame && this.streamSoundSymbolsList[index] != undefined){
				for(var i=0; i<this.streamSoundSymbolsList[index].length; i++){
					var sound = this.streamSoundSymbolsList[index][i];
					if(sound.endFrame > targetFrame){
						var targetPosition = Math.abs((((targetFrame - sound.startFrame)/lib.properties.fps) * 1000));
						var instance = playSound(sound.id);
						var remainingLoop = 0;
						if(sound.offset){
							targetPosition = targetPosition + sound.offset;
						}
						else if(sound.loop > 1){
							var loop = targetPosition /instance.duration;
							remainingLoop = Math.floor(sound.loop - loop);
							if(targetPosition == 0){ remainingLoop -= 1; }
							targetPosition = targetPosition % instance.duration;
						}
						instance.loop = remainingLoop;
						instance.position = Math.round(targetPosition);
						this.InsertIntoSoundStreamData(instance, sound.startFrame, sound.endFrame, sound.loop , sound.offset);
					}
				}
			}
		}
	}
	this.InsertIntoSoundStreamData = function(soundInstance, startIndex, endIndex, loopValue, offsetValue){ 
 		this.soundStreamDuration.set({instance:soundInstance}, {start: startIndex, end:endIndex, loop:loopValue, offset:offsetValue});
	}
	this.clearAllSoundStreams = function(){
		var keys = this.soundStreamDuration.keys();
		for(var i = 0;i<this.soundStreamDuration.size; i++){
			var key = keys.next().value;
			key.instance.stop();
		}
 		this.soundStreamDuration.clear();
		this.currentSoundStreamInMovieclip = undefined;
	}
	this.stopSoundStreams = function(currentFrame){
		if(this.soundStreamDuration.size > 0){
			var keys = this.soundStreamDuration.keys();
			for(var i = 0; i< this.soundStreamDuration.size ; i++){
				var key = keys.next().value; 
				var value = this.soundStreamDuration.get(key);
				if((value.end) == currentFrame){
					key.instance.stop();
					if(this.currentSoundStreamInMovieclip == key) { this.currentSoundStreamInMovieclip = undefined; }
					this.soundStreamDuration.delete(key);
				}
			}
		}
	}

	this.computeCurrentSoundStreamInstance = function(currentFrame){
		if(this.currentSoundStreamInMovieclip == undefined){
			if(this.soundStreamDuration.size > 0){
				var keys = this.soundStreamDuration.keys();
				var maxDuration = 0;
				for(var i=0;i<this.soundStreamDuration.size;i++){
					var key = keys.next().value;
					var value = this.soundStreamDuration.get(key);
					if(value.end > maxDuration){
						maxDuration = value.end;
						this.currentSoundStreamInMovieclip = key;
					}
				}
			}
		}
	}
	this.getDesiredFrame = function(currentFrame, calculatedDesiredFrame){
		for(var frameIndex in this.actionFrames){
			if((frameIndex > currentFrame) && (frameIndex < calculatedDesiredFrame)){
				return frameIndex;
			}
		}
		return calculatedDesiredFrame;
	}

	this.syncStreamSounds = function(){
		this.stopSoundStreams(this.currentFrame);
		this.computeCurrentSoundStreamInstance(this.currentFrame);
		if(this.currentSoundStreamInMovieclip != undefined){
			var soundInstance = this.currentSoundStreamInMovieclip.instance;
			if(soundInstance.position != 0){
				var soundValue = this.soundStreamDuration.get(this.currentSoundStreamInMovieclip);
				var soundPosition = (soundValue.offset?(soundInstance.position - soundValue.offset): soundInstance.position);
				var calculatedDesiredFrame = (soundValue.start)+((soundPosition/1000) * lib.properties.fps);
				if(soundValue.loop > 1){
					calculatedDesiredFrame +=(((((soundValue.loop - soundInstance.loop -1)*soundInstance.duration)) / 1000) * lib.properties.fps);
				}
				calculatedDesiredFrame = Math.floor(calculatedDesiredFrame);
				var deltaFrame = calculatedDesiredFrame - this.currentFrame;
				if(deltaFrame >= 2){
					this.gotoAndPlayForStreamSoundSync(this.getDesiredFrame(this.currentFrame,calculatedDesiredFrame));
				}
			}
		}
	}
}).prototype = p = new cjs.MovieClip();
// symbols:



(lib.CachedBmp_228 = function() {
	this.initialize(ss["المذكر والمؤنتbounce_atlas_4"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_229 = function() {
	this.initialize(ss["المذكر والمؤنتbounce_atlas_4"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_231 = function() {
	this.initialize(ss["المذكر والمؤنتbounce_atlas_4"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_227 = function() {
	this.initialize(ss["المذكر والمؤنتbounce_atlas_4"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_230 = function() {
	this.initialize(ss["المذكر والمؤنتbounce_atlas_4"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_226 = function() {
	this.initialize(ss["المذكر والمؤنتbounce_atlas_4"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_224 = function() {
	this.initialize(ss["المذكر والمؤنتbounce_atlas_3"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_223 = function() {
	this.initialize(ss["المذكر والمؤنتbounce_atlas_3"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_222 = function() {
	this.initialize(ss["المذكر والمؤنتbounce_atlas_3"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_218 = function() {
	this.initialize(ss["المذكر والمؤنتbounce_atlas_3"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_221 = function() {
	this.initialize(ss["المذكر والمؤنتbounce_atlas_3"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_220 = function() {
	this.initialize(ss["المذكر والمؤنتbounce_atlas_3"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_219 = function() {
	this.initialize(ss["المذكر والمؤنتbounce_atlas_3"]);
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_217 = function() {
	this.initialize(ss["المذكر والمؤنتbounce_atlas_2"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_216 = function() {
	this.initialize(ss["المذكر والمؤنتbounce_atlas_2"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_212 = function() {
	this.initialize(ss["المذكر والمؤنتbounce_atlas_3"]);
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_213 = function() {
	this.initialize(ss["المذكر والمؤنتbounce_atlas_2"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_211 = function() {
	this.initialize(ss["المذكر والمؤنتbounce_atlas_3"]);
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_209 = function() {
	this.initialize(ss["المذكر والمؤنتbounce_atlas_3"]);
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_210 = function() {
	this.initialize(ss["المذكر والمؤنتbounce_atlas_3"]);
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_208 = function() {
	this.initialize(ss["المذكر والمؤنتbounce_atlas_3"]);
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_207 = function() {
	this.initialize(ss["المذكر والمؤنتbounce_atlas_3"]);
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_183 = function() {
	this.initialize(ss["المذكر والمؤنتbounce_atlas_4"]);
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_184 = function() {
	this.initialize(ss["المذكر والمؤنتbounce_atlas_4"]);
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_185 = function() {
	this.initialize(ss["المذكر والمؤنتbounce_atlas_4"]);
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_182 = function() {
	this.initialize(ss["المذكر والمؤنتbounce_atlas_4"]);
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_181 = function() {
	this.initialize(ss["المذكر والمؤنتbounce_atlas_4"]);
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_180 = function() {
	this.initialize(ss["المذكر والمؤنتbounce_atlas_4"]);
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_179 = function() {
	this.initialize(ss["المذكر والمؤنتbounce_atlas_4"]);
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_178 = function() {
	this.initialize(ss["المذكر والمؤنتbounce_atlas_4"]);
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_177 = function() {
	this.initialize(ss["المذكر والمؤنتbounce_atlas_4"]);
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_175 = function() {
	this.initialize(ss["المذكر والمؤنتbounce_atlas_4"]);
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_176 = function() {
	this.initialize(ss["المذكر والمؤنتbounce_atlas_4"]);
	this.gotoAndStop(16);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_161 = function() {
	this.initialize(ss["المذكر والمؤنتbounce_atlas_3"]);
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_162 = function() {
	this.initialize(ss["المذكر والمؤنتbounce_atlas_3"]);
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_163 = function() {
	this.initialize(ss["المذكر والمؤنتbounce_atlas_4"]);
	this.gotoAndStop(17);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_160 = function() {
	this.initialize(ss["المذكر والمؤنتbounce_atlas_3"]);
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_155 = function() {
	this.initialize(ss["المذكر والمؤنتbounce_atlas_4"]);
	this.gotoAndStop(18);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_156 = function() {
	this.initialize(ss["المذكر والمؤنتbounce_atlas_3"]);
	this.gotoAndStop(16);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_157 = function() {
	this.initialize(ss["المذكر والمؤنتbounce_atlas_3"]);
	this.gotoAndStop(17);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_159 = function() {
	this.initialize(ss["المذكر والمؤنتbounce_atlas_3"]);
	this.gotoAndStop(18);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_148 = function() {
	this.initialize(ss["المذكر والمؤنتbounce_atlas_3"]);
	this.gotoAndStop(19);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_164 = function() {
	this.initialize(ss["المذكر والمؤنتbounce_atlas_4"]);
	this.gotoAndStop(19);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_147 = function() {
	this.initialize(ss["المذكر والمؤنتbounce_atlas_4"]);
	this.gotoAndStop(20);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_166 = function() {
	this.initialize(ss["المذكر والمؤنتbounce_atlas_4"]);
	this.gotoAndStop(21);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_165 = function() {
	this.initialize(ss["المذكر والمؤنتbounce_atlas_4"]);
	this.gotoAndStop(22);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_167 = function() {
	this.initialize(ss["المذكر والمؤنتbounce_atlas_4"]);
	this.gotoAndStop(23);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_168 = function() {
	this.initialize(ss["المذكر والمؤنتbounce_atlas_4"]);
	this.gotoAndStop(24);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_170 = function() {
	this.initialize(ss["المذكر والمؤنتbounce_atlas_4"]);
	this.gotoAndStop(25);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_171 = function() {
	this.initialize(ss["المذكر والمؤنتbounce_atlas_4"]);
	this.gotoAndStop(26);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_169 = function() {
	this.initialize(ss["المذكر والمؤنتbounce_atlas_4"]);
	this.gotoAndStop(27);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_173 = function() {
	this.initialize(ss["المذكر والمؤنتbounce_atlas_4"]);
	this.gotoAndStop(28);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_172 = function() {
	this.initialize(ss["المذكر والمؤنتbounce_atlas_4"]);
	this.gotoAndStop(29);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_132 = function() {
	this.initialize(ss["المذكر والمؤنتbounce_atlas_4"]);
	this.gotoAndStop(30);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_131 = function() {
	this.initialize(ss["المذكر والمؤنتbounce_atlas_4"]);
	this.gotoAndStop(31);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_135 = function() {
	this.initialize(ss["المذكر والمؤنتbounce_atlas_4"]);
	this.gotoAndStop(32);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_129 = function() {
	this.initialize(ss["المذكر والمؤنتbounce_atlas_4"]);
	this.gotoAndStop(33);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_130 = function() {
	this.initialize(ss["المذكر والمؤنتbounce_atlas_4"]);
	this.gotoAndStop(34);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_134 = function() {
	this.initialize(ss["المذكر والمؤنتbounce_atlas_4"]);
	this.gotoAndStop(35);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_133 = function() {
	this.initialize(ss["المذكر والمؤنتbounce_atlas_4"]);
	this.gotoAndStop(36);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_128 = function() {
	this.initialize(ss["المذكر والمؤنتbounce_atlas_4"]);
	this.gotoAndStop(37);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_127 = function() {
	this.initialize(ss["المذكر والمؤنتbounce_atlas_4"]);
	this.gotoAndStop(38);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_126 = function() {
	this.initialize(ss["المذكر والمؤنتbounce_atlas_4"]);
	this.gotoAndStop(39);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_122 = function() {
	this.initialize(ss["المذكر والمؤنتbounce_atlas_4"]);
	this.gotoAndStop(40);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_119 = function() {
	this.initialize(ss["المذكر والمؤنتbounce_atlas_4"]);
	this.gotoAndStop(41);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_118 = function() {
	this.initialize(ss["المذكر والمؤنتbounce_atlas_4"]);
	this.gotoAndStop(42);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_117 = function() {
	this.initialize(ss["المذكر والمؤنتbounce_atlas_4"]);
	this.gotoAndStop(43);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_124 = function() {
	this.initialize(ss["المذكر والمؤنتbounce_atlas_3"]);
	this.gotoAndStop(20);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_116 = function() {
	this.initialize(ss["المذكر والمؤنتbounce_atlas_4"]);
	this.gotoAndStop(44);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_115 = function() {
	this.initialize(ss["المذكر والمؤنتbounce_atlas_4"]);
	this.gotoAndStop(45);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_114 = function() {
	this.initialize(ss["المذكر والمؤنتbounce_atlas_4"]);
	this.gotoAndStop(46);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_123 = function() {
	this.initialize(ss["المذكر والمؤنتbounce_atlas_3"]);
	this.gotoAndStop(21);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_113 = function() {
	this.initialize(ss["المذكر والمؤنتbounce_atlas_4"]);
	this.gotoAndStop(47);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_111 = function() {
	this.initialize(ss["المذكر والمؤنتbounce_atlas_4"]);
	this.gotoAndStop(48);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_110 = function() {
	this.initialize(ss["المذكر والمؤنتbounce_atlas_4"]);
	this.gotoAndStop(49);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_109 = function() {
	this.initialize(ss["المذكر والمؤنتbounce_atlas_4"]);
	this.gotoAndStop(50);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_225 = function() {
	this.initialize(ss["المذكر والمؤنتbounce_atlas_3"]);
	this.gotoAndStop(22);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_112 = function() {
	this.initialize(ss["المذكر والمؤنتbounce_atlas_4"]);
	this.gotoAndStop(51);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_108 = function() {
	this.initialize(ss["المذكر والمؤنتbounce_atlas_4"]);
	this.gotoAndStop(52);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_107 = function() {
	this.initialize(ss["المذكر والمؤنتbounce_atlas_4"]);
	this.gotoAndStop(53);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_103 = function() {
	this.initialize(ss["المذكر والمؤنتbounce_atlas_4"]);
	this.gotoAndStop(54);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_102 = function() {
	this.initialize(ss["المذكر والمؤنتbounce_atlas_4"]);
	this.gotoAndStop(55);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_101 = function() {
	this.initialize(ss["المذكر والمؤنتbounce_atlas_4"]);
	this.gotoAndStop(56);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_105 = function() {
	this.initialize(ss["المذكر والمؤنتbounce_atlas_4"]);
	this.gotoAndStop(57);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_100 = function() {
	this.initialize(ss["المذكر والمؤنتbounce_atlas_4"]);
	this.gotoAndStop(58);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_97 = function() {
	this.initialize(ss["المذكر والمؤنتbounce_atlas_4"]);
	this.gotoAndStop(59);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_99 = function() {
	this.initialize(ss["المذكر والمؤنتbounce_atlas_4"]);
	this.gotoAndStop(60);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_98 = function() {
	this.initialize(ss["المذكر والمؤنتbounce_atlas_4"]);
	this.gotoAndStop(61);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_104 = function() {
	this.initialize(ss["المذكر والمؤنتbounce_atlas_4"]);
	this.gotoAndStop(62);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_93 = function() {
	this.initialize(ss["المذكر والمؤنتbounce_atlas_4"]);
	this.gotoAndStop(63);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_94 = function() {
	this.initialize(ss["المذكر والمؤنتbounce_atlas_4"]);
	this.gotoAndStop(64);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_90 = function() {
	this.initialize(ss["المذكر والمؤنتbounce_atlas_4"]);
	this.gotoAndStop(65);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_89 = function() {
	this.initialize(ss["المذكر والمؤنتbounce_atlas_4"]);
	this.gotoAndStop(66);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_86 = function() {
	this.initialize(ss["المذكر والمؤنتbounce_atlas_4"]);
	this.gotoAndStop(67);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_91 = function() {
	this.initialize(ss["المذكر والمؤنتbounce_atlas_4"]);
	this.gotoAndStop(68);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_85 = function() {
	this.initialize(ss["المذكر والمؤنتbounce_atlas_4"]);
	this.gotoAndStop(69);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_87 = function() {
	this.initialize(ss["المذكر والمؤنتbounce_atlas_4"]);
	this.gotoAndStop(70);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_83 = function() {
	this.initialize(ss["المذكر والمؤنتbounce_atlas_4"]);
	this.gotoAndStop(71);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_84 = function() {
	this.initialize(ss["المذكر والمؤنتbounce_atlas_4"]);
	this.gotoAndStop(72);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_82 = function() {
	this.initialize(ss["المذكر والمؤنتbounce_atlas_4"]);
	this.gotoAndStop(73);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_79 = function() {
	this.initialize(ss["المذكر والمؤنتbounce_atlas_4"]);
	this.gotoAndStop(74);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_78 = function() {
	this.initialize(ss["المذكر والمؤنتbounce_atlas_4"]);
	this.gotoAndStop(75);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_80 = function() {
	this.initialize(ss["المذكر والمؤنتbounce_atlas_4"]);
	this.gotoAndStop(76);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_77 = function() {
	this.initialize(ss["المذكر والمؤنتbounce_atlas_4"]);
	this.gotoAndStop(77);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_76 = function() {
	this.initialize(ss["المذكر والمؤنتbounce_atlas_4"]);
	this.gotoAndStop(78);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_75 = function() {
	this.initialize(ss["المذكر والمؤنتbounce_atlas_4"]);
	this.gotoAndStop(79);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_74 = function() {
	this.initialize(ss["المذكر والمؤنتbounce_atlas_4"]);
	this.gotoAndStop(80);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_71 = function() {
	this.initialize(ss["المذكر والمؤنتbounce_atlas_4"]);
	this.gotoAndStop(81);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_70 = function() {
	this.initialize(ss["المذكر والمؤنتbounce_atlas_4"]);
	this.gotoAndStop(82);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_73 = function() {
	this.initialize(ss["المذكر والمؤنتbounce_atlas_4"]);
	this.gotoAndStop(83);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_72 = function() {
	this.initialize(ss["المذكر والمؤنتbounce_atlas_4"]);
	this.gotoAndStop(84);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_68 = function() {
	this.initialize(ss["المذكر والمؤنتbounce_atlas_4"]);
	this.gotoAndStop(85);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_66 = function() {
	this.initialize(ss["المذكر والمؤنتbounce_atlas_4"]);
	this.gotoAndStop(86);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_69 = function() {
	this.initialize(ss["المذكر والمؤنتbounce_atlas_4"]);
	this.gotoAndStop(87);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_64 = function() {
	this.initialize(ss["المذكر والمؤنتbounce_atlas_4"]);
	this.gotoAndStop(88);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_63 = function() {
	this.initialize(ss["المذكر والمؤنتbounce_atlas_4"]);
	this.gotoAndStop(89);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_67 = function() {
	this.initialize(ss["المذكر والمؤنتbounce_atlas_4"]);
	this.gotoAndStop(90);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_65 = function() {
	this.initialize(ss["المذكر والمؤنتbounce_atlas_4"]);
	this.gotoAndStop(91);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_62 = function() {
	this.initialize(ss["المذكر والمؤنتbounce_atlas_4"]);
	this.gotoAndStop(92);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_61 = function() {
	this.initialize(ss["المذكر والمؤنتbounce_atlas_4"]);
	this.gotoAndStop(93);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_59 = function() {
	this.initialize(ss["المذكر والمؤنتbounce_atlas_4"]);
	this.gotoAndStop(94);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_58 = function() {
	this.initialize(ss["المذكر والمؤنتbounce_atlas_4"]);
	this.gotoAndStop(95);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_57 = function() {
	this.initialize(ss["المذكر والمؤنتbounce_atlas_4"]);
	this.gotoAndStop(96);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_56 = function() {
	this.initialize(ss["المذكر والمؤنتbounce_atlas_4"]);
	this.gotoAndStop(97);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_60 = function() {
	this.initialize(ss["المذكر والمؤنتbounce_atlas_4"]);
	this.gotoAndStop(98);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_54 = function() {
	this.initialize(ss["المذكر والمؤنتbounce_atlas_4"]);
	this.gotoAndStop(99);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_55 = function() {
	this.initialize(ss["المذكر والمؤنتbounce_atlas_4"]);
	this.gotoAndStop(100);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_52 = function() {
	this.initialize(ss["المذكر والمؤنتbounce_atlas_4"]);
	this.gotoAndStop(101);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_51 = function() {
	this.initialize(ss["المذكر والمؤنتbounce_atlas_4"]);
	this.gotoAndStop(102);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_53 = function() {
	this.initialize(ss["المذكر والمؤنتbounce_atlas_4"]);
	this.gotoAndStop(103);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_49 = function() {
	this.initialize(ss["المذكر والمؤنتbounce_atlas_4"]);
	this.gotoAndStop(104);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_47 = function() {
	this.initialize(ss["المذكر والمؤنتbounce_atlas_4"]);
	this.gotoAndStop(105);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_50 = function() {
	this.initialize(ss["المذكر والمؤنتbounce_atlas_4"]);
	this.gotoAndStop(106);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_48 = function() {
	this.initialize(ss["المذكر والمؤنتbounce_atlas_4"]);
	this.gotoAndStop(107);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_46 = function() {
	this.initialize(ss["المذكر والمؤنتbounce_atlas_4"]);
	this.gotoAndStop(108);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_41 = function() {
	this.initialize(ss["المذكر والمؤنتbounce_atlas_4"]);
	this.gotoAndStop(109);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_43 = function() {
	this.initialize(ss["المذكر والمؤنتbounce_atlas_4"]);
	this.gotoAndStop(110);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_44 = function() {
	this.initialize(ss["المذكر والمؤنتbounce_atlas_4"]);
	this.gotoAndStop(111);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_45 = function() {
	this.initialize(ss["المذكر والمؤنتbounce_atlas_4"]);
	this.gotoAndStop(112);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_42 = function() {
	this.initialize(ss["المذكر والمؤنتbounce_atlas_4"]);
	this.gotoAndStop(113);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_40 = function() {
	this.initialize(ss["المذكر والمؤنتbounce_atlas_4"]);
	this.gotoAndStop(114);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_38 = function() {
	this.initialize(ss["المذكر والمؤنتbounce_atlas_4"]);
	this.gotoAndStop(115);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_35 = function() {
	this.initialize(ss["المذكر والمؤنتbounce_atlas_4"]);
	this.gotoAndStop(116);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_39 = function() {
	this.initialize(ss["المذكر والمؤنتbounce_atlas_4"]);
	this.gotoAndStop(117);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_37 = function() {
	this.initialize(ss["المذكر والمؤنتbounce_atlas_4"]);
	this.gotoAndStop(118);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_36 = function() {
	this.initialize(ss["المذكر والمؤنتbounce_atlas_4"]);
	this.gotoAndStop(119);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_30 = function() {
	this.initialize(ss["المذكر والمؤنتbounce_atlas_4"]);
	this.gotoAndStop(120);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_34 = function() {
	this.initialize(ss["المذكر والمؤنتbounce_atlas_4"]);
	this.gotoAndStop(121);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_31 = function() {
	this.initialize(ss["المذكر والمؤنتbounce_atlas_4"]);
	this.gotoAndStop(122);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_33 = function() {
	this.initialize(ss["المذكر والمؤنتbounce_atlas_4"]);
	this.gotoAndStop(123);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_32 = function() {
	this.initialize(ss["المذكر والمؤنتbounce_atlas_4"]);
	this.gotoAndStop(124);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_29 = function() {
	this.initialize(ss["المذكر والمؤنتbounce_atlas_4"]);
	this.gotoAndStop(125);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_121 = function() {
	this.initialize(ss["المذكر والمؤنتbounce_atlas_2"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_23 = function() {
	this.initialize(ss["المذكر والمؤنتbounce_atlas_4"]);
	this.gotoAndStop(126);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_24 = function() {
	this.initialize(ss["المذكر والمؤنتbounce_atlas_4"]);
	this.gotoAndStop(127);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_27 = function() {
	this.initialize(ss["المذكر والمؤنتbounce_atlas_4"]);
	this.gotoAndStop(128);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_28 = function() {
	this.initialize(ss["المذكر والمؤنتbounce_atlas_4"]);
	this.gotoAndStop(129);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_26 = function() {
	this.initialize(ss["المذكر والمؤنتbounce_atlas_4"]);
	this.gotoAndStop(130);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_25 = function() {
	this.initialize(ss["المذكر والمؤنتbounce_atlas_4"]);
	this.gotoAndStop(131);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_22 = function() {
	this.initialize(ss["المذكر والمؤنتbounce_atlas_4"]);
	this.gotoAndStop(132);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_19 = function() {
	this.initialize(ss["المذكر والمؤنتbounce_atlas_4"]);
	this.gotoAndStop(133);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_20 = function() {
	this.initialize(ss["المذكر والمؤنتbounce_atlas_4"]);
	this.gotoAndStop(134);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_21 = function() {
	this.initialize(ss["المذكر والمؤنتbounce_atlas_4"]);
	this.gotoAndStop(135);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_17 = function() {
	this.initialize(ss["المذكر والمؤنتbounce_atlas_4"]);
	this.gotoAndStop(136);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_14 = function() {
	this.initialize(ss["المذكر والمؤنتbounce_atlas_4"]);
	this.gotoAndStop(137);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_16 = function() {
	this.initialize(ss["المذكر والمؤنتbounce_atlas_4"]);
	this.gotoAndStop(138);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_18 = function() {
	this.initialize(ss["المذكر والمؤنتbounce_atlas_4"]);
	this.gotoAndStop(139);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_13 = function() {
	this.initialize(ss["المذكر والمؤنتbounce_atlas_4"]);
	this.gotoAndStop(140);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_10 = function() {
	this.initialize(ss["المذكر والمؤنتbounce_atlas_4"]);
	this.gotoAndStop(141);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_12 = function() {
	this.initialize(ss["المذكر والمؤنتbounce_atlas_4"]);
	this.gotoAndStop(142);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_8 = function() {
	this.initialize(ss["المذكر والمؤنتbounce_atlas_4"]);
	this.gotoAndStop(143);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_11 = function() {
	this.initialize(ss["المذكر والمؤنتbounce_atlas_4"]);
	this.gotoAndStop(144);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_9 = function() {
	this.initialize(ss["المذكر والمؤنتbounce_atlas_4"]);
	this.gotoAndStop(145);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_7 = function() {
	this.initialize(ss["المذكر والمؤنتbounce_atlas_4"]);
	this.gotoAndStop(146);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_15 = function() {
	this.initialize(ss["المذكر والمؤنتbounce_atlas_4"]);
	this.gotoAndStop(147);
}).prototype = p = new cjs.Sprite();



(lib.ابدأ = function() {
	this.initialize(ss["المذكر والمؤنتbounce_atlas_3"]);
	this.gotoAndStop(23);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_6 = function() {
	this.initialize(ss["المذكر والمؤنتbounce_atlas_3"]);
	this.gotoAndStop(24);
}).prototype = p = new cjs.Sprite();



(lib.شجرة1 = function() {
	this.initialize(ss["المذكر والمؤنتbounce_atlas_3"]);
	this.gotoAndStop(25);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_125 = function() {
	this.initialize(ss["المذكر والمؤنتbounce_atlas_4"]);
	this.gotoAndStop(148);
}).prototype = p = new cjs.Sprite();



(lib.طبيبة33x = function() {
	this.initialize(ss["المذكر والمؤنتbounce_atlas_3"]);
	this.gotoAndStop(26);
}).prototype = p = new cjs.Sprite();



(lib.بقرة23x = function() {
	this.initialize(ss["المذكر والمؤنتbounce_atlas_2"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_205 = function() {
	this.initialize(ss["المذكر والمؤنتbounce_atlas_4"]);
	this.gotoAndStop(149);
}).prototype = p = new cjs.Sprite();



(lib.معلم13x = function() {
	this.initialize(ss["المذكر والمؤنتbounce_atlas_3"]);
	this.gotoAndStop(27);
}).prototype = p = new cjs.Sprite();



(lib.كلب = function() {
	this.initialize(ss["المذكر والمؤنتbounce_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.Asset2 = function() {
	this.initialize(ss["المذكر والمؤنتbounce_atlas_3"]);
	this.gotoAndStop(28);
}).prototype = p = new cjs.Sprite();



(lib.book2x = function() {
	this.initialize(ss["المذكر والمؤنتbounce_atlas_2"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.سروال13x = function() {
	this.initialize(ss["المذكر والمؤنتbounce_atlas_3"]);
	this.gotoAndStop(29);
}).prototype = p = new cjs.Sprite();



(lib.قلم1 = function() {
	this.initialize(ss["المذكر والمؤنتbounce_atlas_3"]);
	this.gotoAndStop(30);
}).prototype = p = new cjs.Sprite();



(lib.rfgv42x = function() {
	this.initialize(ss["المذكر والمؤنتbounce_atlas_3"]);
	this.gotoAndStop(31);
}).prototype = p = new cjs.Sprite();



(lib.وردة1 = function() {
	this.initialize(ss["المذكر والمؤنتbounce_atlas_3"]);
	this.gotoAndStop(32);
}).prototype = p = new cjs.Sprite();



(lib._46092Converted = function() {
	this.initialize(img._46092Converted);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2491,1808);


(lib.hnbg22x = function() {
	this.initialize(ss["المذكر والمؤنتbounce_atlas_3"]);
	this.gotoAndStop(33);
}).prototype = p = new cjs.Sprite();



(lib.foka3a2x = function() {
	this.initialize(ss["المذكر والمؤنتbounce_atlas_3"]);
	this.gotoAndStop(34);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_5 = function() {
	this.initialize(ss["المذكر والمؤنتbounce_atlas_3"]);
	this.gotoAndStop(35);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_215 = function() {
	this.initialize(ss["المذكر والمؤنتbounce_atlas_2"]);
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_4 = function() {
	this.initialize(ss["المذكر والمؤنتbounce_atlas_2"]);
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.win2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.CachedBmp_231();
	this.instance.setTransform(-10.3,-11.45,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-10.3,-11.4,41.5,43);


(lib.win1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.hnbg22x();
	this.instance.setTransform(31,0,0.2371,0.2307);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(31,0,78,77.1);


(lib.win = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.CachedBmp_230();
	this.instance.setTransform(57,19,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(57,19,34,34);


(lib.winMc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	this.isSingleFrame = false;
	// timeline functions:
	this.frame_0 = function() {
		if(this.isSingleFrame) {
			return;
		}
		if(this.totalFrames == 1) {
			this.isSingleFrame = true;
		}
		var that = this
		function randomIntFromInterval(min, max) { // min and max included 
			return Math.floor(Math.random() * (max - min + 1) + min)
		}
		
		function randomFromInterval(min, max) {
			return Math.random() * (max - min) + min;
		}
		
		
		var inter = setInterval(() => {
		  addNjm(); 
		}, 200);
		
		
		setTimeout(
		
		clearInterval
		
		, 4000 , inter
		)
		function addNjm() {
		
			for (var i = 0 ; i < 7 ; i++) {
		
				var scl = randomFromInterval(0.2, 1)
		
				var inverse = randomIntFromInterval(0, 1)
				inverse = inverse == 0 ? -1 : 1
		
				var inv_scl = scl * inverse
		
				var xs = randomIntFromInterval(300, 500)
		
				var njm = i % 2 == 0 ? new lib.nejm() : i % 3 == 0 ?new lib.nejm2():new lib.nejm1()
		
		
				njm.x = xs
				njm.y = 300
		
				njm.scaleX = inv_scl
				njm.scaleY = scl
		
		
				that.addChild(njm)
		
			
		}
			
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.winMc, new cjs.Rectangle(0,0,0,0), null);


(lib.whites = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.CachedBmp_226();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,32.5,56.5);


(lib.warda = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.وردة1();
	this.instance.setTransform(0,0,0.1931,0.1537);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.warda, new cjs.Rectangle(0,0,37.5,44.7), null);


(lib.Tween2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.foka3a2x();
	this.instance.setTransform(-128.5,-111);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-128.5,-111,257,222);


(lib.tabiba = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.طبيبة33x();
	this.instance.setTransform(0,0,0.1867,0.1486);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.tabiba, new cjs.Rectangle(0,0,52.7,76.3), null);


(lib.Symbol4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);


(lib.sirwal = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.سروال13x();
	this.instance.setTransform(0,0,0.1891,0.1505);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.sirwal, new cjs.Rectangle(0,0,37.1,63.4), null);


(lib.scorBar = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.Asset2();
	this.instance.setTransform(0,0,1.3552,0.6137);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.scorBar, new cjs.Rectangle(0,0,777.9,84.1), null);


(lib.qalam = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.قلم1();
	this.instance.setTransform(0,0,0.1043,0.0831);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.qalam, new cjs.Rectangle(0,0,23.5,42.9), null);


(lib.pin = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_3
	this.instance = new lib.CachedBmp_227();
	this.instance.setTransform(15.15,1.1,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer_2
	this.instance_1 = new lib.CachedBmp_228();
	this.instance_1.setTransform(12.7,-0.5,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// Layer_1
	this.instance_2 = new lib.CachedBmp_229();
	this.instance_2.setTransform(-1.5,1.85,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1.5,-0.5,22.2,15.4);


(lib.men = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.معلم13x();
	this.instance.setTransform(0,0,0.1867,0.1486);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.men, new cjs.Rectangle(0,0,37.5,80.3), null);


(lib.loger = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop()
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2));

	// Layer_1
	this.instance = new lib.CachedBmp_123();
	this.instance.setTransform(-2.5,-2.5,0.3768,0.3768);

	this.instance_1 = new lib.CachedBmp_124();
	this.instance_1.setTransform(-2.5,-2.5,0.3768,0.3768);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2.5,-2.5,101.7,101.7);


(lib.leps = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.CachedBmp_122();
	this.instance.setTransform(-7.7,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-7.7,0,81.5,20);


(lib.kalb = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.كلب();
	this.instance.setTransform(0,0,0.0356,0.0283);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.kalb, new cjs.Rectangle(0,0,47.4,48.4), null);


(lib.head = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.CachedBmp_225();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,229,190);


(lib.CompoundPath_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.CachedBmp_90();
	this.instance.setTransform(-0.05,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.CompoundPath_3, new cjs.Rectangle(0,0,22.5,43), null);


(lib.Symbol9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2
	this.instance = new lib.book2x();
	this.instance.setTransform(0,0,0.2272,0.1895);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,126.6,106);


(lib.Symbol5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.CachedBmp_5();
	this.instance.setTransform(68.1,-4.7,0.4883,0.4883);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(68.1,-4.7,573.1999999999999,45.900000000000006);


(lib.droped = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.CachedBmp_4();
	this.instance.setTransform(-1.45,-1.45,0.2354,0.2354);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.droped, new cjs.Rectangle(-1.4,-1.4,157,125.9), null);


(lib.chajar = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.شجرة1();
	this.instance.setTransform(0,0,0.26,0.2069);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.chajar, new cjs.Rectangle(0,0,100.9,67.9), null);


(lib.baqa = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.بقرة23x();
	this.instance.setTransform(0,0,0.1852,0.1474);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.baqa, new cjs.Rectangle(0,0,103.3,61), null);


(lib.nejm2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_89 = function() {
		this.stop()
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(89).call(this.frame_89).wait(1));

	// Layer_1
	this.instance = new lib.win1("synched",0);
	this.instance.setTransform(99,796.55,1,1,0,0,0,67.6,44.6);

	this.instance_1 = new lib.win2("synched",0);
	this.instance_1.setTransform(113.95,-191.4,1,1,74.9998,0,0,67.6,44.6);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true,rotation:74.9998,x:113.95,y:-191.4},13,cjs.Ease.quadOut).to({_off:false,y:848.6},75,cjs.Ease.cubicInOut).to({_off:true},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({_off:false},13,cjs.Ease.quadOut).to({_off:true,y:848.6},75,cjs.Ease.cubicInOut).wait(2));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-281.1,170.3,1178.1);


(lib.nejm1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_89 = function() {
		this.stop()
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(89).call(this.frame_89).wait(1));

	// Layer_1
	this.instance = new lib.win1("synched",0);
	this.instance.setTransform(99,732.55,1,1,0,0,0,67.6,44.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:247,y:-247.45},12,cjs.Ease.quadOut).wait(1).to({regX:70,regY:38.5,rotation:5.659,x:249.95,y:-253.3},0).wait(1).to({rotation:12.8373,x:250.65,y:-252.85},0).wait(1).to({rotation:21.6077,x:251.4,y:-252.2},0).wait(1).to({rotation:32.0485,x:252.2,y:-251.3},0).wait(1).to({rotation:44.2443,x:252.9,y:-250.1},0).wait(1).to({rotation:58.2859,x:253.35,y:-248.6},0).wait(1).to({scaleX:0.9999,scaleY:0.9999,rotation:74.2715,x:253.4,y:-246.85},0).wait(1).to({rotation:92.3074,x:252.9,y:-244.85},0).wait(1).to({rotation:112.5087,x:251.6,y:-243},0).wait(1).to({regX:67.8,regY:44.7,rotation:135.0006,x:246.9,y:-247.5},0).wait(1).to({regX:70,regY:38.5,x:249.7,y:-227.7},0).wait(1).to({y:-213.9},0).wait(1).to({y:-200.05},0).wait(1).to({y:-186.15},0).wait(1).to({y:-172.3},0).wait(1).to({y:-158.35},0).wait(1).to({y:-144.45},0).wait(1).to({y:-130.5},0).wait(1).to({y:-116.5},0).wait(1).to({y:-102.5},0).wait(1).to({y:-88.5},0).wait(1).to({y:-74.45},0).wait(1).to({y:-60.4},0).wait(1).to({y:-46.3},0).wait(1).to({y:-32.2},0).wait(1).to({y:-18.05},0).wait(1).to({y:-3.9},0).wait(1).to({y:10.25},0).wait(1).to({y:24.4},0).wait(1).to({y:38.6},0).wait(1).to({y:52.85},0).wait(1).to({y:67.1},0).wait(1).to({y:81.4},0).wait(1).to({y:95.7},0).wait(1).to({y:110.05},0).wait(1).to({y:124.4},0).wait(1).to({y:138.75},0).wait(1).to({y:153.15},0).wait(1).to({y:167.55},0).wait(1).to({y:182},0).wait(1).to({y:196.45},0).wait(1).to({y:210.9},0).wait(1).to({y:225.4},0).wait(1).to({y:239.95},0).wait(1).to({y:254.5},0).wait(1).to({y:269.05},0).wait(1).to({y:283.65},0).wait(1).to({y:298.25},0).wait(1).to({y:312.9},0).wait(1).to({y:327.55},0).wait(1).to({y:342.2},0).wait(1).to({y:356.9},0).wait(1).to({y:371.65},0).wait(1).to({y:386.4},0).wait(1).to({y:401.15},0).wait(1).to({y:415.95},0).wait(1).to({y:430.75},0).wait(1).to({y:445.6},0).wait(1).to({y:460.45},0).wait(1).to({y:475.3},0).wait(1).to({y:490.2},0).wait(1).to({y:505.15},0).wait(1).to({y:520.1},0).wait(1).to({y:535.05},0).wait(1).to({y:550.05},0).wait(1).to({y:565.05},0).wait(1).to({y:580.1},0).wait(1).to({y:595.15},0).wait(1).to({y:610.25},0).wait(1).to({y:625.35},0).wait(1).to({y:640.45},0).wait(1).to({y:655.6},0).wait(1).to({y:670.8},0).wait(1).to({y:685.95},0).wait(1).to({y:701.2},0).wait(1).to({regX:67.8,regY:44.7,x:246.9,y:710.5},0).to({_off:true},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-304.9,307.8,1076.1);


(lib.nejm = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_79 = function() {
		this.stop()
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(79).call(this.frame_79).wait(1));

	// Layer_1
	this.instance = new lib.win("synched",0);
	this.instance.setTransform(104,594.05,1,1,0,0,0,67.6,44.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:192,y:-186.95},15,cjs.Ease.quadOut).to({x:283,y:738},63,cjs.Ease.quadInOut).to({_off:true},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-212.5,306.4,958.9);


(lib.pinMc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop()
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2));

	// Layer_1
	this.instance = new lib.pin("synched",0);
	this.instance.setTransform(27.55,-28.5,0.9852,0.9812,0,0,0,25.9,-16.9);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({alpha:1},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0.6,-12.3,21.9,15);


(lib.MFdnd2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// pin
	this.pinlgrldndff = new lib.pinMc();
	this.pinlgrldndff.name = "pinlgrldndff";
	this.pinlgrldndff.setTransform(228.1,296.35,1,1,0,0,0,14.1,-13);

	this.pinlgrkdndff = new lib.pinMc();
	this.pinlgrkdndff.name = "pinlgrkdndff";
	this.pinlgrkdndff.setTransform(93.1,286.85,1,1,0,0,0,14.1,-13);

	this.pinlgrxdndmm = new lib.pinMc();
	this.pinlgrxdndmm.name = "pinlgrxdndmm";
	this.pinlgrxdndmm.setTransform(571.05,310.85,1,1,0,0,0,14.1,-13);

	this.pinlgrtdndmm = new lib.pinMc();
	this.pinlgrtdndmm.name = "pinlgrtdndmm";
	this.pinlgrtdndmm.setTransform(451.05,307.85,1,1,0,0,0,14.1,-13);

	this.pinlgrgdndmm = new lib.pinMc();
	this.pinlgrgdndmm.name = "pinlgrgdndmm";
	this.pinlgrgdndmm.setTransform(566.55,215.85,1,1,0,0,0,14.1,-13);

	this.pinlgrrdndmm = new lib.pinMc();
	this.pinlgrrdndmm.name = "pinlgrrdndmm";
	this.pinlgrrdndmm.setTransform(440.05,204.35,1,1,0,0,0,14.1,-13);

	this.pinlgredndff = new lib.pinMc();
	this.pinlgredndff.name = "pinlgredndff";
	this.pinlgredndff.setTransform(223.1,204.35,1,1,0,0,0,14.1,-13);

	this.pinlgrmdndff = new lib.pinMc();
	this.pinlgrmdndff.name = "pinlgrmdndff";
	this.pinlgrmdndff.setTransform(89.05,208.45,1,1,0,0,0,15.1,-13.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.pinlgrmdndff},{t:this.pinlgredndff},{t:this.pinlgrrdndmm},{t:this.pinlgrgdndmm},{t:this.pinlgrtdndmm},{t:this.pinlgrxdndmm},{t:this.pinlgrkdndff},{t:this.pinlgrldndff}]}).wait(1));

	// logr
	this.lgrkdndff = new lib.loger();
	this.lgrkdndff.name = "lgrkdndff";
	this.lgrkdndff.setTransform(82.85,338.55,0.793,0.9588,0,0,0,48.6,48.5);

	this.lgrgdndmm = new lib.loger();
	this.lgrgdndmm.name = "lgrgdndmm";
	this.lgrgdndmm.setTransform(555.55,258.8,0.732,0.7724,0,0,0,48.6,48.4);

	this.lgrldndff = new lib.loger();
	this.lgrldndff.name = "lgrldndff";
	this.lgrldndff.setTransform(215.1,344,1.3271,0.8454,0,0,0,48.5,48.7);

	this.lgrxdndmm = new lib.loger();
	this.lgrxdndmm.name = "lgrxdndmm";
	this.lgrxdndmm.setTransform(559,348.05,0.6598,0.6598,0,0,0,48.5,48.5);

	this.lgrmdndff = new lib.loger();
	this.lgrmdndff.name = "lgrmdndff";
	this.lgrmdndff.setTransform(77.1,248.6,0.6763,0.6804,0,0,0,48.5,48.6);

	this.lgrtdndmm = new lib.loger();
	this.lgrtdndmm.name = "lgrtdndmm";
	this.lgrtdndmm.setTransform(438,346.5,0.6392,0.6918,0,0,0,48.5,48.5);

	this.lgrrdndmm = new lib.loger();
	this.lgrrdndmm.name = "lgrrdndmm";
	this.lgrrdndmm.setTransform(433.5,257.15,0.567,0.9415,0,0,0,48.5,48.5);

	this.lgredndff = new lib.loger();
	this.lgredndff.name = "lgredndff";
	this.lgredndff.setTransform(225.65,259.2,1.3123,0.8539,0,0,0,55.7,55.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.lgredndff},{t:this.lgrrdndmm},{t:this.lgrtdndmm},{t:this.lgrmdndff},{t:this.lgrxdndmm},{t:this.lgrldndff},{t:this.lgrgdndmm},{t:this.lgrkdndff}]}).wait(1));

	// Layer_1
	this.kdndff = new lib.tabiba();
	this.kdndff.name = "kdndff";
	this.kdndff.setTransform(452.3,146.1,1,1,0,0,0,26.3,38.1);

	this.mdndff = new lib.warda();
	this.mdndff.name = "mdndff";
	this.mdndff.setTransform(338.7,159.4,1,1,0,0,0,18.7,22.4);

	this.xdndmm = new lib.qalam();
	this.xdndmm.name = "xdndmm";
	this.xdndmm.setTransform(205.8,159.4,1,1,0,0,0,11.8,21.4);

	this.ldndff = new lib.chajar();
	this.ldndff.name = "ldndff";
	this.ldndff.setTransform(59.5,160,1,1,0,0,0,50.5,34);

	this.gdndmm = new lib.sirwal();
	this.gdndmm.name = "gdndmm";
	this.gdndmm.setTransform(460.5,70.7,1,1,0,0,0,18.5,31.7);

	this.tdndmm = new lib.kalb();
	this.tdndmm.name = "tdndmm";
	this.tdndmm.setTransform(333.7,74.2,1,1,0,0,0,23.7,24.2);

	this.rdndmm = new lib.men();
	this.rdndmm.name = "rdndmm";
	this.rdndmm.setTransform(195.8,75.1,1,1,0,0,0,18.8,40.1);

	this.edndff = new lib.baqa();
	this.edndff.name = "edndff";
	this.edndff.setTransform(51.6,80.5,1,1,0,0,0,51.6,30.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.edndff},{t:this.rdndmm},{t:this.tdndmm},{t:this.gdndmm},{t:this.ldndff},{t:this.xdndmm},{t:this.mdndff},{t:this.kdndff}]}).wait(1));

	// Layer_2
	this.jtrgmm = new lib.droped();
	this.jtrgmm.name = "jtrgmm";
	this.jtrgmm.setTransform(495,300.55,1.9265,1.5618,0,0,0,77,61.5);

	this.dtrgff = new lib.droped();
	this.dtrgff.name = "dtrgff";
	this.dtrgff.setTransform(163.2,298.65,2.1241,1.5444,0,0,0,72.6,59.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.dtrgff},{t:this.jtrgmm}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.MFdnd2, new cjs.Rectangle(0,35,646.3,364), null);


(lib.MFdnd1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// pin
	this.pinlgrldndff = new lib.pinMc();
	this.pinlgrldndff.name = "pinlgrldndff";
	this.pinlgrldndff.setTransform(228.1,296.35,1,1,0,0,0,14.1,-13);

	this.pinlgrkdndff = new lib.pinMc();
	this.pinlgrkdndff.name = "pinlgrkdndff";
	this.pinlgrkdndff.setTransform(93.1,286.85,1,1,0,0,0,14.1,-13);

	this.pinlgrxdndmm = new lib.pinMc();
	this.pinlgrxdndmm.name = "pinlgrxdndmm";
	this.pinlgrxdndmm.setTransform(571.05,310.85,1,1,0,0,0,14.1,-13);

	this.pinlgrtdndmm = new lib.pinMc();
	this.pinlgrtdndmm.name = "pinlgrtdndmm";
	this.pinlgrtdndmm.setTransform(451.05,307.85,1,1,0,0,0,14.1,-13);

	this.pinlgrgdndmm = new lib.pinMc();
	this.pinlgrgdndmm.name = "pinlgrgdndmm";
	this.pinlgrgdndmm.setTransform(566.55,215.85,1,1,0,0,0,14.1,-13);

	this.pinlgrrdndmm = new lib.pinMc();
	this.pinlgrrdndmm.name = "pinlgrrdndmm";
	this.pinlgrrdndmm.setTransform(440.05,204.35,1,1,0,0,0,14.1,-13);

	this.pinlgredndff = new lib.pinMc();
	this.pinlgredndff.name = "pinlgredndff";
	this.pinlgredndff.setTransform(223.1,204.35,1,1,0,0,0,14.1,-13);

	this.pinlgrmdndff = new lib.pinMc();
	this.pinlgrmdndff.name = "pinlgrmdndff";
	this.pinlgrmdndff.setTransform(89.05,208.45,1,1,0,0,0,15.1,-13.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.pinlgrmdndff},{t:this.pinlgredndff},{t:this.pinlgrrdndmm},{t:this.pinlgrgdndmm},{t:this.pinlgrtdndmm},{t:this.pinlgrxdndmm},{t:this.pinlgrkdndff},{t:this.pinlgrldndff}]}).wait(1));

	// logr
	this.lgrkdndff = new lib.loger();
	this.lgrkdndff.name = "lgrkdndff";
	this.lgrkdndff.setTransform(82.85,338.55,0.793,0.9588,0,0,0,48.6,48.5);

	this.lgrgdndmm = new lib.loger();
	this.lgrgdndmm.name = "lgrgdndmm";
	this.lgrgdndmm.setTransform(555.55,258.8,0.732,0.7724,0,0,0,48.6,48.4);

	this.lgrldndff = new lib.loger();
	this.lgrldndff.name = "lgrldndff";
	this.lgrldndff.setTransform(215.1,344,1.3271,0.8454,0,0,0,48.5,48.7);

	this.lgrxdndmm = new lib.loger();
	this.lgrxdndmm.name = "lgrxdndmm";
	this.lgrxdndmm.setTransform(559,348.05,0.6598,0.6598,0,0,0,48.5,48.5);

	this.lgrmdndff = new lib.loger();
	this.lgrmdndff.name = "lgrmdndff";
	this.lgrmdndff.setTransform(77.1,248.6,0.6763,0.6804,0,0,0,48.5,48.6);

	this.lgrtdndmm = new lib.loger();
	this.lgrtdndmm.name = "lgrtdndmm";
	this.lgrtdndmm.setTransform(438,346.5,0.6392,0.6918,0,0,0,48.5,48.5);

	this.lgrrdndmm = new lib.loger();
	this.lgrrdndmm.name = "lgrrdndmm";
	this.lgrrdndmm.setTransform(433.5,257.15,0.567,0.9415,0,0,0,48.5,48.5);

	this.lgredndff = new lib.loger();
	this.lgredndff.name = "lgredndff";
	this.lgredndff.setTransform(225.65,259.2,1.3123,0.8539,0,0,0,55.7,55.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.lgredndff},{t:this.lgrrdndmm},{t:this.lgrtdndmm},{t:this.lgrmdndff},{t:this.lgrxdndmm},{t:this.lgrldndff},{t:this.lgrgdndmm},{t:this.lgrkdndff}]}).wait(1));

	// Layer_1
	this.kdndff = new lib.tabiba();
	this.kdndff.name = "kdndff";
	this.kdndff.setTransform(452.3,146.1,1,1,0,0,0,26.3,38.1);

	this.mdndff = new lib.warda();
	this.mdndff.name = "mdndff";
	this.mdndff.setTransform(338.7,159.4,1,1,0,0,0,18.7,22.4);

	this.xdndmm = new lib.qalam();
	this.xdndmm.name = "xdndmm";
	this.xdndmm.setTransform(205.8,159.4,1,1,0,0,0,11.8,21.4);

	this.ldndff = new lib.chajar();
	this.ldndff.name = "ldndff";
	this.ldndff.setTransform(59.5,160,1,1,0,0,0,50.5,34);

	this.gdndmm = new lib.sirwal();
	this.gdndmm.name = "gdndmm";
	this.gdndmm.setTransform(460.5,70.7,1,1,0,0,0,18.5,31.7);

	this.tdndmm = new lib.kalb();
	this.tdndmm.name = "tdndmm";
	this.tdndmm.setTransform(333.7,74.2,1,1,0,0,0,23.7,24.2);

	this.rdndmm = new lib.men();
	this.rdndmm.name = "rdndmm";
	this.rdndmm.setTransform(195.8,75.1,1,1,0,0,0,18.8,40.1);

	this.edndff = new lib.baqa();
	this.edndff.name = "edndff";
	this.edndff.setTransform(51.6,80.5,1,1,0,0,0,51.6,30.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.edndff},{t:this.rdndmm},{t:this.tdndmm},{t:this.gdndmm},{t:this.ldndff},{t:this.xdndmm},{t:this.mdndff},{t:this.kdndff}]}).wait(1));

	// Layer_2
	this.jtrgmm = new lib.droped();
	this.jtrgmm.name = "jtrgmm";
	this.jtrgmm.setTransform(495,300.55,1.9265,1.5618,0,0,0,77,61.5);

	this.dtrgff = new lib.droped();
	this.dtrgff.name = "dtrgff";
	this.dtrgff.setTransform(163.2,298.65,2.1241,1.5444,0,0,0,72.6,59.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.dtrgff},{t:this.jtrgmm}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.MFdnd1, new cjs.Rectangle(0,35,646.3,364), null);


(lib.MFdnd0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// pin
	this.pinlgrldndff = new lib.pinMc();
	this.pinlgrldndff.name = "pinlgrldndff";
	this.pinlgrldndff.setTransform(228.1,296.35,1,1,0,0,0,14.1,-13);

	this.pinlgrkdndff = new lib.pinMc();
	this.pinlgrkdndff.name = "pinlgrkdndff";
	this.pinlgrkdndff.setTransform(93.1,286.85,1,1,0,0,0,14.1,-13);

	this.pinlgrxdndmm = new lib.pinMc();
	this.pinlgrxdndmm.name = "pinlgrxdndmm";
	this.pinlgrxdndmm.setTransform(571.05,310.85,1,1,0,0,0,14.1,-13);

	this.pinlgrtdndmm = new lib.pinMc();
	this.pinlgrtdndmm.name = "pinlgrtdndmm";
	this.pinlgrtdndmm.setTransform(451.05,307.85,1,1,0,0,0,14.1,-13);

	this.pinlgrgdndmm = new lib.pinMc();
	this.pinlgrgdndmm.name = "pinlgrgdndmm";
	this.pinlgrgdndmm.setTransform(566.55,215.85,1,1,0,0,0,14.1,-13);

	this.pinlgrrdndmm = new lib.pinMc();
	this.pinlgrrdndmm.name = "pinlgrrdndmm";
	this.pinlgrrdndmm.setTransform(440.05,204.35,1,1,0,0,0,14.1,-13);

	this.pinlgredndff = new lib.pinMc();
	this.pinlgredndff.name = "pinlgredndff";
	this.pinlgredndff.setTransform(223.1,204.35,1,1,0,0,0,14.1,-13);

	this.pinlgrmdndff = new lib.pinMc();
	this.pinlgrmdndff.name = "pinlgrmdndff";
	this.pinlgrmdndff.setTransform(89.05,208.45,1,1,0,0,0,15.1,-13.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.pinlgrmdndff},{t:this.pinlgredndff},{t:this.pinlgrrdndmm},{t:this.pinlgrgdndmm},{t:this.pinlgrtdndmm},{t:this.pinlgrxdndmm},{t:this.pinlgrkdndff},{t:this.pinlgrldndff}]}).wait(1));

	// logr
	this.lgrkdndff = new lib.loger();
	this.lgrkdndff.name = "lgrkdndff";
	this.lgrkdndff.setTransform(82.85,338.55,0.793,0.9588,0,0,0,48.6,48.5);

	this.lgrgdndmm = new lib.loger();
	this.lgrgdndmm.name = "lgrgdndmm";
	this.lgrgdndmm.setTransform(555.55,258.8,0.732,0.7724,0,0,0,48.6,48.4);

	this.lgrldndff = new lib.loger();
	this.lgrldndff.name = "lgrldndff";
	this.lgrldndff.setTransform(215.1,344,1.3271,0.8454,0,0,0,48.5,48.7);

	this.lgrxdndmm = new lib.loger();
	this.lgrxdndmm.name = "lgrxdndmm";
	this.lgrxdndmm.setTransform(559,348.05,0.6598,0.6598,0,0,0,48.5,48.5);

	this.lgrmdndff = new lib.loger();
	this.lgrmdndff.name = "lgrmdndff";
	this.lgrmdndff.setTransform(77.1,248.6,0.6763,0.6804,0,0,0,48.5,48.6);

	this.lgrtdndmm = new lib.loger();
	this.lgrtdndmm.name = "lgrtdndmm";
	this.lgrtdndmm.setTransform(438,346.5,0.6392,0.6918,0,0,0,48.5,48.5);

	this.lgrrdndmm = new lib.loger();
	this.lgrrdndmm.name = "lgrrdndmm";
	this.lgrrdndmm.setTransform(433.5,257.15,0.567,0.9415,0,0,0,48.5,48.5);

	this.lgredndff = new lib.loger();
	this.lgredndff.name = "lgredndff";
	this.lgredndff.setTransform(225.65,259.2,1.3123,0.8539,0,0,0,55.7,55.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.lgredndff},{t:this.lgrrdndmm},{t:this.lgrtdndmm},{t:this.lgrmdndff},{t:this.lgrxdndmm},{t:this.lgrldndff},{t:this.lgrgdndmm},{t:this.lgrkdndff}]}).wait(1));

	// Layer_1
	this.kdndff = new lib.tabiba();
	this.kdndff.name = "kdndff";
	this.kdndff.setTransform(452.3,146.1,1,1,0,0,0,26.3,38.1);

	this.mdndff = new lib.warda();
	this.mdndff.name = "mdndff";
	this.mdndff.setTransform(338.7,159.4,1,1,0,0,0,18.7,22.4);

	this.xdndmm = new lib.qalam();
	this.xdndmm.name = "xdndmm";
	this.xdndmm.setTransform(205.8,159.4,1,1,0,0,0,11.8,21.4);

	this.ldndff = new lib.chajar();
	this.ldndff.name = "ldndff";
	this.ldndff.setTransform(59.5,160,1,1,0,0,0,50.5,34);

	this.gdndmm = new lib.sirwal();
	this.gdndmm.name = "gdndmm";
	this.gdndmm.setTransform(460.5,70.7,1,1,0,0,0,18.5,31.7);

	this.tdndmm = new lib.kalb();
	this.tdndmm.name = "tdndmm";
	this.tdndmm.setTransform(333.7,74.2,1,1,0,0,0,23.7,24.2);

	this.rdndmm = new lib.men();
	this.rdndmm.name = "rdndmm";
	this.rdndmm.setTransform(195.8,75.1,1,1,0,0,0,18.8,40.1);

	this.edndff = new lib.baqa();
	this.edndff.name = "edndff";
	this.edndff.setTransform(51.6,80.5,1,1,0,0,0,51.6,30.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.edndff},{t:this.rdndmm},{t:this.tdndmm},{t:this.gdndmm},{t:this.ldndff},{t:this.xdndmm},{t:this.mdndff},{t:this.kdndff}]}).wait(1));

	// Layer_2
	this.jtrgmm = new lib.droped();
	this.jtrgmm.name = "jtrgmm";
	this.jtrgmm.setTransform(495,300.55,1.9265,1.5618,0,0,0,77,61.5);

	this.dtrgff = new lib.droped();
	this.dtrgff.name = "dtrgff";
	this.dtrgff.setTransform(163.2,298.65,2.1241,1.5444,0,0,0,72.6,59.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.dtrgff},{t:this.jtrgmm}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.MFdnd0, new cjs.Rectangle(0,35,646.3,364), null);


(lib.grapghayma = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.CachedBmp_119();
	this.instance.setTransform(7.75,21.5,0.4973,0.4973);

	this.instance_1 = new lib.CachedBmp_118();
	this.instance_1.setTransform(7.75,21.5,0.4973,0.4973);

	this.instance_2 = new lib.CachedBmp_117();
	this.instance_2.setTransform(19.95,0,0.4973,0.4973);

	this.instance_3 = new lib.CachedBmp_116();
	this.instance_3.setTransform(20.9,35.7,0.4973,0.4973);

	this.instance_4 = new lib.CompoundPath_3();
	this.instance_4.setTransform(10.7,35.75,0.0581,0.0588,0,0,0,10.3,25.6);
	this.instance_4.alpha = 0.4688;

	this.instance_5 = new lib.CachedBmp_115();
	this.instance_5.setTransform(16.4,34.1,0.4973,0.4973);

	this.instance_6 = new lib.CachedBmp_114();
	this.instance_6.setTransform(18.95,32,0.4973,0.4973);

	this.instance_7 = new lib.CachedBmp_113();
	this.instance_7.setTransform(13.65,35.7,0.4973,0.4973);

	this.instance_8 = new lib.CachedBmp_112();
	this.instance_8.setTransform(14.9,29.4,0.4973,0.4973);

	this.instance_9 = new lib.CachedBmp_111();
	this.instance_9.setTransform(12.3,32.1,0.4973,0.4973);

	this.instance_10 = new lib.CachedBmp_110();
	this.instance_10.setTransform(21.95,26.6,0.4973,0.4973);

	this.instance_11 = new lib.CachedBmp_109();
	this.instance_11.setTransform(20.75,26.6,0.4973,0.4973);

	this.instance_12 = new lib.CachedBmp_108();
	this.instance_12.setTransform(24.25,20.65,0.4973,0.4973);

	this.instance_13 = new lib.CachedBmp_107();
	this.instance_13.setTransform(23.7,17.1,0.4973,0.4973);

	this.instance_14 = new lib.CachedBmp_107();
	this.instance_14.setTransform(6.3,17.3,0.4973,0.4973);

	this.instance_15 = new lib.CachedBmp_105();
	this.instance_15.setTransform(0,15.4,0.4973,0.4973);

	this.instance_16 = new lib.CachedBmp_104();
	this.instance_16.setTransform(27.55,21.65,0.4973,0.4973);

	this.instance_17 = new lib.CachedBmp_103();
	this.instance_17.setTransform(18.7,10.9,0.4973,0.4973);

	this.instance_18 = new lib.CachedBmp_102();
	this.instance_18.setTransform(12.9,10.95,0.4973,0.4973);

	this.instance_19 = new lib.CachedBmp_101();
	this.instance_19.setTransform(14.8,19.95,0.4973,0.4973);

	this.instance_20 = new lib.CachedBmp_100();
	this.instance_20.setTransform(19.95,0,0.4973,0.4973);

	this.instance_21 = new lib.CachedBmp_99();
	this.instance_21.setTransform(19.7,16.1,0.4973,0.4973);

	this.instance_22 = new lib.CachedBmp_98();
	this.instance_22.setTransform(20.2,15.55,0.4973,0.4973);

	this.instance_23 = new lib.CachedBmp_97();
	this.instance_23.setTransform(19.15,14.5,0.4973,0.4973);

	this.instance_24 = new lib.CachedBmp_99();
	this.instance_24.setTransform(11,16.2,0.4973,0.4973);

	this.instance_25 = new lib.CachedBmp_98();
	this.instance_25.setTransform(11.5,15.65,0.4973,0.4973);

	this.instance_26 = new lib.CachedBmp_94();
	this.instance_26.setTransform(10.45,14.6,0.4973,0.4973);

	this.instance_27 = new lib.CachedBmp_93();
	this.instance_27.setTransform(29.85,15.25,0.4973,0.4973);

	this.instance_28 = new lib.CachedBmp_104();
	this.instance_28.setTransform(27.55,21.65,0.4973,0.4973);

	this.instance_29 = new lib.CachedBmp_91();
	this.instance_29.setTransform(0,4.7,0.4973,0.4973);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_29},{t:this.instance_28},{t:this.instance_27},{t:this.instance_26},{t:this.instance_25},{t:this.instance_24},{t:this.instance_23},{t:this.instance_22},{t:this.instance_21},{t:this.instance_20},{t:this.instance_19},{t:this.instance_18},{t:this.instance_17},{t:this.instance_16},{t:this.instance_15},{t:this.instance_14},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,32.4,38.7);


(lib.emogiCorrEe = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop()
	}
	this.frame_1 = function() {
		this.stop()
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

	// Isolation Mode
	this.instance = new lib.CachedBmp_89();
	this.instance.setTransform(0,1.4,0.3953,0.3953);

	this.instance_1 = new lib.CachedBmp_89();
	this.instance_1.setTransform(-7.9,1.4,0.3953,0.3953);

	this.instance_2 = new lib.CachedBmp_87();
	this.instance_2.setTransform(-1.5,-1.05,0.3953,0.3953);

	this.instance_3 = new lib.CachedBmp_86();
	this.instance_3.setTransform(-6.1,-1.2,0.3953,0.3953);

	this.instance_4 = new lib.CachedBmp_85();
	this.instance_4.setTransform(-4,3.35,0.3953,0.3953);

	this.instance_5 = new lib.CachedBmp_84();
	this.instance_5.setTransform(-1.45,1.65,0.3953,0.3953);

	this.instance_6 = new lib.CachedBmp_83();
	this.instance_6.setTransform(-1.2,1.35,0.3953,0.3953);

	this.instance_7 = new lib.CachedBmp_82();
	this.instance_7.setTransform(-1.7,0.75,0.3953,0.3953);

	this.instance_8 = new lib.CachedBmp_84();
	this.instance_8.setTransform(-5.7,1.65,0.3953,0.3953);

	this.instance_9 = new lib.CachedBmp_80();
	this.instance_9.setTransform(-5.45,1.35,0.3953,0.3953);

	this.instance_10 = new lib.CachedBmp_79();
	this.instance_10.setTransform(-5.95,0.75,0.3953,0.3953);

	this.instance_11 = new lib.CachedBmp_78();
	this.instance_11.setTransform(-11.75,-5.05,0.3953,0.3953);

	this.instance_12 = new lib.CachedBmp_77();
	this.instance_12.setTransform(-11.45,-4.4,0.3953,0.3953);

	this.instance_13 = new lib.grapghayma("synched",0);
	this.instance_13.setTransform(-7.75,1.35,0.6378,0.7948,0,0,0,16.1,19.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).to({state:[{t:this.instance_13}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-18,-13.8,23.6,30.7);


(lib.emogiCorr = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop()
	}
	this.frame_7 = function() {
		this.stop()
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(7).call(this.frame_7).wait(1));

	// Layer_1
	this.instance = new lib.CachedBmp_16();
	this.instance.setTransform(16.55,17.7,0.5,0.5);

	this.instance_1 = new lib.CachedBmp_15();
	this.instance_1.setTransform(9.9,17.85,0.5,0.5);

	this.instance_2 = new lib.CachedBmp_14();
	this.instance_2.setTransform(15.6,14.95,0.5,0.5);

	this.instance_3 = new lib.CachedBmp_13();
	this.instance_3.setTransform(9.9,14.85,0.5,0.5);

	this.instance_4 = new lib.CachedBmp_12();
	this.instance_4.setTransform(17.35,19.25,0.5,0.5);

	this.instance_5 = new lib.CachedBmp_11();
	this.instance_5.setTransform(8.45,19.55,0.5,0.5);

	this.instance_6 = new lib.CachedBmp_10();
	this.instance_6.setTransform(12.25,19.95,0.5,0.5);

	this.instance_7 = new lib.CachedBmp_9();
	this.instance_7.setTransform(16.15,17.1,0.5,0.5);

	this.instance_8 = new lib.CachedBmp_8();
	this.instance_8.setTransform(9.45,17.3,0.5,0.5);

	this.instance_9 = new lib.CachedBmp_7();
	this.instance_9.setTransform(6,11.25,0.5,0.5);

	this.instance_10 = new lib.CachedBmp_46();
	this.instance_10.setTransform(13.25,16.05,0.5,0.5);

	this.instance_11 = new lib.CachedBmp_45();
	this.instance_11.setTransform(3.9,16.25,0.5,0.5);

	this.instance_12 = new lib.CachedBmp_44();
	this.instance_12.setTransform(11.9,11.7,0.5,0.5);

	this.instance_13 = new lib.CachedBmp_43();
	this.instance_13.setTransform(3.9,11.6,0.5,0.5);

	this.instance_14 = new lib.CachedBmp_42();
	this.instance_14.setTransform(14.4,18.45,0.5,0.5);

	this.instance_15 = new lib.CachedBmp_41();
	this.instance_15.setTransform(1.85,18.95,0.5,0.5);

	this.instance_16 = new lib.CachedBmp_40();
	this.instance_16.setTransform(7.15,19.5,0.5,0.5);

	this.instance_17 = new lib.CachedBmp_39();
	this.instance_17.setTransform(12.7,15.15,0.5,0.5);

	this.instance_18 = new lib.CachedBmp_38();
	this.instance_18.setTransform(3.3,15.4,0.5,0.5);

	this.instance_19 = new lib.CachedBmp_37();
	this.instance_19.setTransform(-1.55,6,0.5,0.5);

	this.instance_20 = new lib.CachedBmp_36();
	this.instance_20.setTransform(-1.75,26.55,0.5,0.5);

	this.instance_21 = new lib.CachedBmp_35();
	this.instance_21.setTransform(-3.4,24.05,0.5,0.5);

	this.instance_22 = new lib.CachedBmp_34();
	this.instance_22.setTransform(-8.6,12.25,0.5,0.5);

	this.instance_23 = new lib.CachedBmp_33();
	this.instance_23.setTransform(-4.25,8.4,0.5,0.5);

	this.instance_24 = new lib.CachedBmp_32();
	this.instance_24.setTransform(-5.95,16.75,0.5,0.5);

	this.instance_25 = new lib.CachedBmp_31();
	this.instance_25.setTransform(-7.6,20.7,0.5,0.5);

	this.instance_26 = new lib.CachedBmp_30();
	this.instance_26.setTransform(20.2,19.45,0.5,0.5);

	this.instance_27 = new lib.CachedBmp_29();
	this.instance_27.setTransform(3.3,28.5,0.5,0.5);

	this.instance_28 = new lib.CachedBmp_28();
	this.instance_28.setTransform(18.95,22.95,0.5,0.5);

	this.instance_29 = new lib.CachedBmp_27();
	this.instance_29.setTransform(16.6,26,0.5,0.5);

	this.instance_30 = new lib.CachedBmp_26();
	this.instance_30.setTransform(9.35,29,0.5,0.5);

	this.instance_31 = new lib.CachedBmp_25();
	this.instance_31.setTransform(13.7,28.3,0.5,0.5);

	this.instance_32 = new lib.CachedBmp_24();
	this.instance_32.setTransform(-3.45,3.9,0.5,0.5);

	this.instance_33 = new lib.CachedBmp_23();
	this.instance_33.setTransform(20.55,15.45,0.5,0.5);

	this.instance_34 = new lib.CachedBmp_22();
	this.instance_34.setTransform(19.9,10.6,0.5,0.5);

	this.instance_35 = new lib.CachedBmp_21();
	this.instance_35.setTransform(18,5.75,0.5,0.5);

	this.instance_36 = new lib.CachedBmp_20();
	this.instance_36.setTransform(2.2,2.9,0.5,0.5);

	this.instance_37 = new lib.CachedBmp_19();
	this.instance_37.setTransform(6.5,-0.5,0.5,0.5);

	this.instance_38 = new lib.CachedBmp_18();
	this.instance_38.setTransform(14.55,0.6,0.5,0.5);

	this.instance_39 = new lib.CachedBmp_17();
	this.instance_39.setTransform(10.6,-0.05,0.5,0.5);

	this.instance_40 = new lib.Symbol4("synched",0);
	this.instance_40.setTransform(11.3,15.3,0.701,0.701,0,0,0,16.8,16.9);

	this.instance_41 = new lib.CachedBmp_76();
	this.instance_41.setTransform(18.35,15.65,0.5,0.5);

	this.instance_42 = new lib.CachedBmp_75();
	this.instance_42.setTransform(9.8,15.85,0.5,0.5);

	this.instance_43 = new lib.CachedBmp_74();
	this.instance_43.setTransform(17.1,11.65,0.5,0.5);

	this.instance_44 = new lib.CachedBmp_73();
	this.instance_44.setTransform(9.8,11.6,0.5,0.5);

	this.instance_45 = new lib.CachedBmp_72();
	this.instance_45.setTransform(19.4,17.85,0.5,0.5);

	this.instance_46 = new lib.CachedBmp_71();
	this.instance_46.setTransform(7.95,18.3,0.5,0.5);

	this.instance_47 = new lib.CachedBmp_70();
	this.instance_47.setTransform(12.8,18.85,0.5,0.5);

	this.instance_48 = new lib.CachedBmp_69();
	this.instance_48.setTransform(17.85,14.85,0.5,0.5);

	this.instance_49 = new lib.CachedBmp_68();
	this.instance_49.setTransform(9.25,15.05,0.5,0.5);

	this.instance_50 = new lib.CachedBmp_67();
	this.instance_50.setTransform(4.8,6.5,0.5,0.5);

	this.instance_51 = new lib.CachedBmp_66();
	this.instance_51.setTransform(1.7,23.35,0.5,0.5);

	this.instance_52 = new lib.CachedBmp_65();
	this.instance_52.setTransform(1.35,20.55,0.5,0.5);

	this.instance_53 = new lib.CachedBmp_64();
	this.instance_53.setTransform(-0.1,8.65,0.5,0.5);

	this.instance_54 = new lib.CachedBmp_63();
	this.instance_54.setTransform(4.75,5.95,0.5,0.5);

	this.instance_55 = new lib.CachedBmp_62();
	this.instance_55.setTransform(1.1,13.25,0.5,0.5);

	this.instance_56 = new lib.CachedBmp_61();
	this.instance_56.setTransform(-1.5,17.1,0.5,0.5);

	this.instance_57 = new lib.CachedBmp_60();
	this.instance_57.setTransform(23.7,21.6,0.5,0.5);

	this.instance_58 = new lib.CachedBmp_59();
	this.instance_58.setTransform(5.65,25.95,0.5,0.5);

	this.instance_59 = new lib.CachedBmp_58();
	this.instance_59.setTransform(21.8,24.3,0.5,0.5);

	this.instance_60 = new lib.CachedBmp_57();
	this.instance_60.setTransform(19,26.5,0.5,0.5);

	this.instance_61 = new lib.CachedBmp_56();
	this.instance_61.setTransform(10.7,27.55,0.5,0.5);

	this.instance_62 = new lib.CachedBmp_55();
	this.instance_62.setTransform(15.7,27.85,0.5,0.5);

	this.instance_63 = new lib.CachedBmp_54();
	this.instance_63.setTransform(6.45,2.2,0.5,0.5);

	this.instance_64 = new lib.CachedBmp_53();
	this.instance_64.setTransform(24.9,18.4,0.5,0.5);

	this.instance_65 = new lib.CachedBmp_52();
	this.instance_65.setTransform(25.2,14.55,0.5,0.5);

	this.instance_66 = new lib.CachedBmp_51();
	this.instance_66.setTransform(24.45,9.75,0.5,0.5);

	this.instance_67 = new lib.CachedBmp_50();
	this.instance_67.setTransform(11.75,2.65,0.5,0.5);

	this.instance_68 = new lib.CachedBmp_49();
	this.instance_68.setTransform(15.5,0.7,0.5,0.5);

	this.instance_69 = new lib.CachedBmp_48();
	this.instance_69.setTransform(22.1,4.25,0.5,0.5);

	this.instance_70 = new lib.CachedBmp_47();
	this.instance_70.setTransform(18.85,2.25,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).to({state:[{t:this.instance_40},{t:this.instance_39},{t:this.instance_38},{t:this.instance_37},{t:this.instance_36},{t:this.instance_35},{t:this.instance_34},{t:this.instance_33},{t:this.instance_32},{t:this.instance_31},{t:this.instance_30},{t:this.instance_29},{t:this.instance_28},{t:this.instance_27},{t:this.instance_26},{t:this.instance_25},{t:this.instance_24},{t:this.instance_23},{t:this.instance_22},{t:this.instance_21},{t:this.instance_20},{t:this.instance_19},{t:this.instance_18},{t:this.instance_17},{t:this.instance_16},{t:this.instance_15},{t:this.instance_14},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10}]},4).to({state:[{t:this.instance_70},{t:this.instance_69},{t:this.instance_68},{t:this.instance_67},{t:this.instance_66},{t:this.instance_65},{t:this.instance_64},{t:this.instance_63},{t:this.instance_62},{t:this.instance_61},{t:this.instance_60},{t:this.instance_59},{t:this.instance_58},{t:this.instance_57},{t:this.instance_56},{t:this.instance_55},{t:this.instance_54},{t:this.instance_53},{t:this.instance_52},{t:this.instance_51},{t:this.instance_50},{t:this.instance_49},{t:this.instance_48},{t:this.instance_47},{t:this.instance_46},{t:this.instance_45},{t:this.instance_44},{t:this.instance_43},{t:this.instance_42},{t:this.instance_41}]},3).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-8.6,-0.5,38.8,36);


(lib.Symbol4copy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_24 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(24).call(this.frame_24).wait(1));

	// Layer_1
	this.instance = new lib.Symbol5("synched",0);
	this.instance.setTransform(173.9,104.65,0.0254,1,0,0,0,333.2,19.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:332.8,scaleX:0.4766,scaleY:0.7699,x:153.8,y:108.25},24).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(27.7,80.6,273.2,45.900000000000006);


(lib.Symbol1copy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.Tween2("synched",0);
	this.instance.setTransform(0,222,1,1,0,0,0,-128.5,111);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,257,222);


(lib.allhead = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.whites("synched",0);
	this.instance.setTransform(322.15,243.25,1,1,0,0,0,16.2,28.2);

	this.instance_1 = new lib.leps("synched",0);
	this.instance_1.setTransform(404.95,311.55,1,1,0,0,0,37.2,7);

	this.instance_2 = new lib.CachedBmp_125();
	this.instance_2.setTransform(347,298.1,0.5,0.5);

	this.instance_3 = new lib.CachedBmp_205();
	this.instance_3.setTransform(357,256.05,0.5,0.5);

	this.instance_4 = new lib.CachedBmp_215();
	this.instance_4.setTransform(288,173,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(288,173,229,206);


(lib.lossMc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_77 = function() {
		this.stop()
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(77).call(this.frame_77).wait(1));

	// white
	this.instance = new lib.whites("synched",0);
	this.instance.setTransform(322.15,243.25,1,1,0,0,0,16.2,28.2);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(18).to({_off:false},0).wait(12).to({startPosition:0},0).to({x:319.65,y:251.25},9).to({x:320.65,y:242.25},3).to({x:321.15,y:251.25},10).to({x:320.65,y:242.25},4).to({x:322.15,y:248.75},12).to({y:243.25},9).wait(1));

	// Layer_2
	this.instance_1 = new lib.allhead("synched",0);
	this.instance_1.setTransform(402.5,123,1,1,0,0,0,402.5,276);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({y:276},17,cjs.Ease.elasticOut).to({_off:true},1).wait(60));

	// leps
	this.instance_2 = new lib.leps("synched",0);
	this.instance_2.setTransform(404.95,311.55,1,1,0,0,0,37.2,7);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(18).to({_off:false},0).wait(2).to({x:408.95,y:304.55},0).wait(2).to({startPosition:0},0).wait(2).to({y:303.05},0).wait(2).to({startPosition:0},0).wait(2).to({y:301.55},0).to({_off:true},2).wait(48));

	// mouth
	this.instance_3 = new lib.CachedBmp_125();
	this.instance_3.setTransform(347,298.1,0.5,0.5);

	this.instance_4 = new lib.CachedBmp_126();
	this.instance_4.setTransform(347,297.65,0.5,0.5);

	this.instance_5 = new lib.CachedBmp_127();
	this.instance_5.setTransform(347,297.2,0.5,0.5);

	this.instance_6 = new lib.CachedBmp_128();
	this.instance_6.setTransform(347,296.75,0.5,0.5);

	this.instance_7 = new lib.CachedBmp_129();
	this.instance_7.setTransform(347,296.3,0.5,0.5);

	this.instance_8 = new lib.CachedBmp_130();
	this.instance_8.setTransform(347,295.85,0.5,0.5);

	this.instance_9 = new lib.CachedBmp_131();
	this.instance_9.setTransform(347,295.4,0.5,0.5);

	this.instance_10 = new lib.CachedBmp_132();
	this.instance_10.setTransform(347,294.95,0.5,0.5);

	this.instance_11 = new lib.CachedBmp_133();
	this.instance_11.setTransform(347,294.5,0.5,0.5);

	this.instance_12 = new lib.CachedBmp_134();
	this.instance_12.setTransform(347,294,0.5,0.5);

	this.instance_13 = new lib.CachedBmp_135();
	this.instance_13.setTransform(347,293.55,0.5,0.5);

	this.instance_14 = new lib.CachedBmp_173();
	this.instance_14.setTransform(347,293.1,0.5,0.5);

	this.instance_15 = new lib.CachedBmp_172();
	this.instance_15.setTransform(347,289.5,0.5,0.5);

	this.instance_16 = new lib.CachedBmp_171();
	this.instance_16.setTransform(347,285.85,0.5,0.5);

	this.instance_17 = new lib.CachedBmp_170();
	this.instance_17.setTransform(347,282.2,0.5,0.5);

	this.instance_18 = new lib.CachedBmp_169();
	this.instance_18.setTransform(347,278.55,0.5,0.5);

	this.instance_19 = new lib.CachedBmp_168();
	this.instance_19.setTransform(347,274.95,0.5,0.5);

	this.instance_20 = new lib.CachedBmp_167();
	this.instance_20.setTransform(347,271.3,0.5,0.5);

	this.instance_21 = new lib.CachedBmp_166();
	this.instance_21.setTransform(347,267.65,0.5,0.5);

	this.instance_22 = new lib.CachedBmp_165();
	this.instance_22.setTransform(347,264,0.5,0.5);

	this.instance_23 = new lib.CachedBmp_164();
	this.instance_23.setTransform(347,260.4,0.5,0.5);

	this.instance_24 = new lib.CachedBmp_147();
	this.instance_24.setTransform(347,257.25,0.5,0.5);

	this.instance_25 = new lib.CachedBmp_148();
	this.instance_25.setTransform(347,254.05,0.5,0.5);

	this.instance_26 = new lib.CachedBmp_159();
	this.instance_26.setTransform(347,250.9,0.5,0.5);

	this.instance_27 = new lib.CachedBmp_157();
	this.instance_27.setTransform(347,253.05,0.5,0.5);

	this.instance_28 = new lib.CachedBmp_156();
	this.instance_28.setTransform(347,255.15,0.5,0.5);

	this.instance_29 = new lib.CachedBmp_155();
	this.instance_29.setTransform(347,257.3,0.5,0.5);

	this.instance_30 = new lib.CachedBmp_160();
	this.instance_30.setTransform(347,251.6,0.5,0.5);

	this.instance_31 = new lib.CachedBmp_161();
	this.instance_31.setTransform(347,252.3,0.5,0.5);

	this.instance_32 = new lib.CachedBmp_162();
	this.instance_32.setTransform(347,253,0.5,0.5);

	this.instance_33 = new lib.CachedBmp_163();
	this.instance_33.setTransform(347,253.7,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_3}]},18).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_14}]},1).to({state:[{t:this.instance_14}]},1).to({state:[{t:this.instance_15,p:{y:289.5}}]},1).to({state:[{t:this.instance_16,p:{y:285.85}}]},1).to({state:[{t:this.instance_17,p:{y:282.2}}]},1).to({state:[{t:this.instance_18,p:{y:278.55}}]},1).to({state:[{t:this.instance_19,p:{y:274.95}}]},1).to({state:[{t:this.instance_20,p:{y:271.3}}]},1).to({state:[{t:this.instance_21,p:{y:267.65}}]},1).to({state:[{t:this.instance_22,p:{y:264}}]},1).to({state:[{t:this.instance_23,p:{y:260.4}}]},1).to({state:[{t:this.instance_24}]},1).to({state:[{t:this.instance_25}]},1).to({state:[{t:this.instance_26}]},1).to({state:[{t:this.instance_26}]},6).to({state:[{t:this.instance_27}]},1).to({state:[{t:this.instance_28}]},1).to({state:[{t:this.instance_29}]},1).to({state:[{t:this.instance_23,p:{y:259.4}}]},1).to({state:[{t:this.instance_29}]},1).to({state:[{t:this.instance_28}]},1).to({state:[{t:this.instance_27}]},1).to({state:[{t:this.instance_26}]},1).to({state:[{t:this.instance_26}]},7).to({state:[{t:this.instance_30}]},1).to({state:[{t:this.instance_31}]},1).to({state:[{t:this.instance_32}]},1).to({state:[{t:this.instance_33}]},1).to({state:[{t:this.instance_23,p:{y:254.4}}]},1).to({state:[{t:this.instance_22,p:{y:258.7}}]},1).to({state:[{t:this.instance_21,p:{y:263}}]},1).to({state:[{t:this.instance_20,p:{y:267.3}}]},1).to({state:[{t:this.instance_19,p:{y:271.6}}]},1).to({state:[{t:this.instance_18,p:{y:275.9}}]},1).to({state:[{t:this.instance_17,p:{y:280.2}}]},1).to({state:[{t:this.instance_16,p:{y:284.5}}]},1).to({state:[{t:this.instance_15,p:{y:288.8}}]},1).to({state:[{t:this.instance_14}]},1).wait(1));

	// eyes
	this.instance_34 = new lib.CachedBmp_205();
	this.instance_34.setTransform(357,256.05,0.5,0.5);
	this.instance_34._off = true;

	this.instance_35 = new lib.CachedBmp_175();
	this.instance_35.setTransform(357.05,256.2,0.5,0.5);

	this.instance_36 = new lib.CachedBmp_176();
	this.instance_36.setTransform(357.05,256.35,0.5,0.5);

	this.instance_37 = new lib.CachedBmp_177();
	this.instance_37.setTransform(357.1,256.45,0.5,0.5);

	this.instance_38 = new lib.CachedBmp_178();
	this.instance_38.setTransform(357.15,256.55,0.5,0.5);

	this.instance_39 = new lib.CachedBmp_179();
	this.instance_39.setTransform(357.15,256.65,0.5,0.5);

	this.instance_40 = new lib.CachedBmp_180();
	this.instance_40.setTransform(357.15,256.75,0.5,0.5);

	this.instance_41 = new lib.CachedBmp_181();
	this.instance_41.setTransform(357.15,256.85,0.5,0.5);

	this.instance_42 = new lib.CachedBmp_182();
	this.instance_42.setTransform(357.2,256.9,0.5,0.5);

	this.instance_43 = new lib.CachedBmp_183();
	this.instance_43.setTransform(357.25,256.95,0.5,0.5);

	this.instance_44 = new lib.CachedBmp_184();
	this.instance_44.setTransform(357.25,257,0.5,0.5);

	this.instance_45 = new lib.CachedBmp_185();
	this.instance_45.setTransform(357.3,257.05,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_34}]},18).to({state:[{t:this.instance_35}]},1).to({state:[{t:this.instance_36}]},1).to({state:[{t:this.instance_37}]},1).to({state:[{t:this.instance_38}]},1).to({state:[{t:this.instance_39}]},1).to({state:[{t:this.instance_40}]},1).to({state:[{t:this.instance_41}]},1).to({state:[{t:this.instance_42}]},1).to({state:[{t:this.instance_43}]},1).to({state:[{t:this.instance_44}]},1).to({state:[{t:this.instance_45}]},1).to({state:[{t:this.instance_34}]},1).to({state:[{t:this.instance_34}]},1).to({state:[{t:this.instance_34}]},1).to({state:[{t:this.instance_34}]},1).to({state:[{t:this.instance_34}]},1).to({state:[{t:this.instance_34}]},1).to({state:[{t:this.instance_34}]},1).to({state:[{t:this.instance_34}]},1).to({state:[{t:this.instance_34}]},1).to({state:[{t:this.instance_34}]},1).to({state:[{t:this.instance_34}]},29).to({state:[{t:this.instance_34}]},1).to({state:[{t:this.instance_34}]},1).to({state:[{t:this.instance_34}]},1).to({state:[{t:this.instance_34}]},1).to({state:[{t:this.instance_34}]},1).to({state:[{t:this.instance_34}]},1).to({state:[{t:this.instance_34}]},1).to({state:[{t:this.instance_34}]},1).to({state:[{t:this.instance_34}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_34).wait(18).to({_off:false},0).to({_off:true},1).wait(11).to({_off:false},0).wait(1).to({y:251.6},0).wait(1).to({y:247.15},0).wait(1).to({y:242.7},0).wait(1).to({y:238.25},0).wait(1).to({y:233.85},0).wait(1).to({y:229.4},0).wait(1).to({y:224.95},0).wait(1).to({y:220.5},0).wait(1).to({y:216.05},0).wait(30).to({y:220.5},0).wait(1).to({y:224.95},0).wait(1).to({y:229.4},0).wait(1).to({y:233.85},0).wait(1).to({y:238.25},0).wait(1).to({y:242.7},0).wait(1).to({y:247.15},0).wait(1).to({y:251.6},0).wait(1).to({y:256.05},0).wait(1));

	// headGraph
	this.instance_46 = new lib.head("synched",0);
	this.instance_46.setTransform(402.5,283.95,1,1,0,0,0,114.5,95);
	this.instance_46._off = true;

	this.instance_47 = new lib.CachedBmp_225();
	this.instance_47.setTransform(288,188.95,0.5,0.5);

	this.instance_48 = new lib.CachedBmp_207();
	this.instance_48.setTransform(288,186.95,0.5,0.5);

	this.instance_49 = new lib.CachedBmp_208();
	this.instance_49.setTransform(288,184.95,0.5,0.5);

	this.instance_50 = new lib.CachedBmp_209();
	this.instance_50.setTransform(288,182.95,0.5,0.5);

	this.instance_51 = new lib.CachedBmp_210();
	this.instance_51.setTransform(288,181,0.5,0.5);

	this.instance_52 = new lib.CachedBmp_211();
	this.instance_52.setTransform(288,179,0.5,0.5);

	this.instance_53 = new lib.CachedBmp_212();
	this.instance_53.setTransform(288,177,0.5,0.5);

	this.instance_54 = new lib.CachedBmp_213();
	this.instance_54.setTransform(288,175,0.5,0.5);

	this.instance_55 = new lib.CachedBmp_216();
	this.instance_55.setTransform(288,173,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_46}]},40).to({state:[{t:this.instance_46}]},2).to({state:[{t:this.instance_46}]},6).to({state:[{t:this.instance_46}]},4).to({state:[{t:this.instance_46}]},4).to({state:[{t:this.instance_46}]},7).to({state:[{t:this.instance_46}]},5).to({state:[{t:this.instance_47}]},1).to({state:[{t:this.instance_48}]},1).to({state:[{t:this.instance_49}]},1).to({state:[{t:this.instance_50}]},1).to({state:[{t:this.instance_51}]},1).to({state:[{t:this.instance_52}]},1).to({state:[{t:this.instance_53}]},1).to({state:[{t:this.instance_54}]},1).to({state:[{t:this.instance_55}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_46).wait(40).to({_off:false},0).to({y:278.95},2).to({y:283.95},6).to({y:287.95},4).to({y:280.95},4).to({y:284.95},7).to({y:286.95},5).to({_off:true},1).wait(9));

	// head
	this.instance_56 = new lib.CachedBmp_215();
	this.instance_56.setTransform(288,173,0.5,0.5);

	this.instance_57 = new lib.CachedBmp_216();
	this.instance_57.setTransform(288,173,0.5,0.5);

	this.instance_58 = new lib.CachedBmp_217();
	this.instance_58.setTransform(288,174.8,0.5,0.5);

	this.instance_59 = new lib.CachedBmp_218();
	this.instance_59.setTransform(288,176.55,0.5,0.5);

	this.instance_60 = new lib.CachedBmp_219();
	this.instance_60.setTransform(288,178.35,0.5,0.5);

	this.instance_61 = new lib.CachedBmp_220();
	this.instance_61.setTransform(288,180.1,0.5,0.5);

	this.instance_62 = new lib.CachedBmp_221();
	this.instance_62.setTransform(288,181.85,0.5,0.5);

	this.instance_63 = new lib.CachedBmp_222();
	this.instance_63.setTransform(288,183.6,0.5,0.5);

	this.instance_64 = new lib.CachedBmp_223();
	this.instance_64.setTransform(288,185.4,0.5,0.5);

	this.instance_65 = new lib.CachedBmp_224();
	this.instance_65.setTransform(288,187.15,0.5,0.5);

	this.instance_66 = new lib.CachedBmp_225();
	this.instance_66.setTransform(288,188.95,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_56}]},18).to({state:[{t:this.instance_57}]},12).to({state:[{t:this.instance_58}]},1).to({state:[{t:this.instance_59}]},1).to({state:[{t:this.instance_60}]},1).to({state:[{t:this.instance_61}]},1).to({state:[{t:this.instance_62}]},1).to({state:[{t:this.instance_63}]},1).to({state:[{t:this.instance_64}]},1).to({state:[{t:this.instance_65}]},1).to({state:[{t:this.instance_66}]},1).to({state:[]},1).wait(38));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(288,20,229,411.8);


(lib.Symbol7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_64 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(64).call(this.frame_64).wait(1));

	// Layer_3
	this.instance = new lib.ابدأ();
	this.instance.setTransform(10,-69,0.3624,0.2936);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(64).to({_off:false},0).wait(1));

	// Layer_3
	this.instance_1 = new lib.Symbol9("synched",0);
	this.instance_1.setTransform(-19.1,58.35,1,1,0,0,0,46.6,42.3);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(33).to({_off:false},0).wait(32));

	// Layer_5
	this.instance_2 = new lib.CachedBmp_6();
	this.instance_2.setTransform(-16.85,-66.25,0.4883,0.4883);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(64).to({_off:false},0).wait(1));

	// Layer_4
	this.instance_3 = new lib.Symbol1copy("synched",0);
	this.instance_3.setTransform(-2.15,11.2,0.0522,0.0502,0,0,0,39.2,222.9);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(44).to({_off:false},0).to({regX:39.6,regY:222.8,scaleX:0.4249,scaleY:0.3814},20).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-65.7,-73.7,155.9,195.7);


(lib.hijabb = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// star
	this.start = new lib.Symbol7();
	this.start.name = "start";
	this.start.setTransform(404,267.1);

	this.timeline.addTween(cjs.Tween.get(this.start).wait(1));

	// quiste
	this.instance = new lib.Symbol4copy();
	this.instance.setTransform(239.4,31.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer_4
	this.instance_1 = new lib.CachedBmp_121();
	this.instance_1.setTransform(2,0,0.4883,0.4883);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.hijabb, new cjs.Rectangle(2,0,797.8,498), null);


// stage content:
(lib.المذكروالمؤنتbounce = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	this.actionFrames = [0];
	this.isSingleFrame = false;
	// timeline functions:
	this.frame_0 = function() {
		if(this.isSingleFrame) {
			return;
		}
		if(this.totalFrames == 1) {
			this.isSingleFrame = true;
		}
		this.clearAllSoundStreams();
		 
		var that = this
		
		createjs.Touch.enable(stage, true, true);
		
		stage.preventSelection = false;
		
		var sumOfdraged = 0
		var currentpage = 0;
		var farExercice = 0 
		var gameIsOver = false
		var numOfQ = 3
		
		var myListofArraysCorr = [
			[],
			[],
			[]
		];
		var myListofArraysFaul = [
			[],
			[],
			[]
		];
		
		var autorizedSingleQ = 3;
		
		var from_checkPrecedentQ = false
		
		
		
		var allQ_pages = [
			[],
			[],
			[]
		];
		
		var score = null
		function scorCalcul() {
		
			//correlated correct answer CCA
			// CCA =  correct answers(myListofArraysCorr) - incorrect(myListofArraysFaul)
			//If the correct answer CA in DND game is equal to wrong answer WA then
			// CCA is equal to 0	
		
		
			//weighted CCA 	
			// we devide CCA by all draged element in the exercices	done intel now
			//  CCA / sumOfdragged
		
			//we multiply by  (exercices done / total exercices)
		
			//lengOfLists(myListofArraysCorr) / (allQ_pages.length + lengOfLists(myListofArraysFaul))
		
			var sco = (lengOfLists(myListofArraysCorr) - lengOfLists(myListofArraysFaul)) / sumOfdraged
		    sco = Math.max(0 , sco)
			
			var DoneByTotal = (farExercice + 1) / allQ_pages.length
		
			var scoreForStudnt = sumInner(allQ_pages) / allQ_pages.length
			
			console.log('sco', sco)
			console.log('sumOfdraged ', sumOfdraged)
		
			console.log('DoneByTotal', DoneByTotal)
		
			return [Math.round(sco * DoneByTotal * 100) , Math.round(scoreForStudnt * 100)];
		
		}
		
		
		that.hijab.start.addEventListener('click', startfirst)
		function startfirst(e) {
		
			that.hijab.start.removeEventListener('click', startfirst)
			startSound('ibdaa')
				score = [0, 0]
			console.log('score', score)
			setTimeout(startSession, titleDuration['ibdaa'])
		
		}
		
		
		var cont = new createjs.Container();
		that.addChildAt(cont, 1)
		
		
		
		var emoErrArray = []
		var emoCorrArray = []
		
		setTimeout(function () {
		
			getEmo();
		
		
		}, 10);
		
		
		function getEmo() {
		
		
			var parent = that;
			var keys = Object.keys(parent);
			var len = keys.length;
		
			while (--len) {
		
		
				if (keys[len].slice(0, 4) == ("emoC")) {
		
					parent[keys[len]].name = keys[len];
		
					emoCorrArray.push(parent[keys[len]]);
		
		
		
		
				}
		
				if (keys[len].slice(0, 4) == ("emoE")) {
		
					parent[keys[len]].name = keys[len];
		
					emoErrArray.push(parent[keys[len]]);
		
		
		
				}
		
		
			}
		
			sortbyName(emoErrArray)
			sortbyName(emoCorrArray)
		
			console.log('after sort', emoErrArray)
		}
		
		
		function sortbyName(arr) {
		
			arr.sort(function (a, b) {
				if (a.name < b.name) {
					return -1;
				}
				if (a.name > b.name) {
					return 1;
				}
				return 0;
		
			})
		
		
		}
		
		function showLossWinMc(boo) {
		
			createjs.Sound.stop()
		
			var lMc = boo ? new lib.winMc() : new lib.lossMc()
		
			var lsnd = boo ? 'win' : 'loss'
		
			startSound(lsnd)
			that.addChild(lMc)
		}
		
		function gameOver() {
		
			console.log('+++++++++++++++++game over+++++++++++++++++++')
			cont.mc.mouseEnabled = false
			showError()
			
			setTimeout( function () {
				
			showLossWinMc (false)
			}, 1200)
			
			send_statis()
		}
		
		function checkGameOver() {
		
			if (lengOfLists(myListofArraysFaul) == emoErrArray.length) {
		
		       gameIsOver = true
		
				gameOver()
			}
		
		}
		
		function showError() {
		
			for (var i = 0; i < emoErrArray.length; i++) {
		
				createjs.Tween.get(emoErrArray[i]).to({
					rotation: 360
				}, 1000);
		
			}
		}
		
		function showNumOfemoError() {
		
			for (var i = lengOfLists(myListofArraysFaul) - 1; i > lengOfLists(myListofArraysFaul) - 4; i--) {
		
				createjs.Tween.get(emoErrArray[i])
				.to({
					rotation: 360
				}, 1000)
				.to({
					rotation:0
				}, 0);
		
		
			}
		
		}
		function showResu(bool) {
		
			if (bool) {
		
				var sm = sumInner(allQ_pages)
				console.log('sumInner(allQ_pages)', sm)
				emoCorrArray[sm].gotoAndPlay(1)
		
			} else {
		
		
		
				console.log('lengOfLists(myListofArraysFaul)', lengOfLists(myListofArraysFaul))
				emoErrArray[lengOfLists(myListofArraysFaul)].gotoAndPlay(1)
		
			}
		}
		
		function sumInner(lists) {
		
			var total = 0;
			for (var i = 0; i < lists.length; i++) {
				console.log('sumInner first loop', i)
				for (var j = 0; j < lists[i].length; j++) {
					total += lists[i][j];
				}
		
			}
			return total
		}
		
		
		function lengOfLists(lists) {
		
		
			var lengths = 0;
		
			for (var i = 0; i < lists.length; i++) {
		
				lengths = lengths + lists[i].length
		
			}
			return lengths
		}
		
		
		
		
		
		function startSession() {
		
			
			
			createjs.Sound.stop()
		
			that.hijab.visible = false
			cont.removeAllChildren()
		
			cont.mc = new lib['MFdnd' + currentpage]();
			cont.mc.name = 'MFdnd' + currentpage;
		
			farExercice = Math.max(farExercice ,  currentpage)
			console.log('MFdnd' + currentpage)
			cont.mc.x = lib.properties["width"] / 2 - (cont.mc.getBounds().width / 2);
			cont.mc.y = lib.properties["height"] / 2 - (cont.mc.getBounds().height / 2);
		
		
			var ind = that.getChildIndex(that.scoreBoard)
			that.addChildAt(cont, ind)
		
		
			getElementAndAlpha_mc(cont.mc);
		
		
			setTimeout(function () {
		
		
		
				cont.addChild(cont.mc);
				
				animeImages()
				
				dnd_Manager(cont.mc)
		
			}, 20);
		
		
		
		
		
		
		}
		
		
		var draggedArray = []
		var dropArray = []
		var logerArray = []
		var pinLogerArray = []
			function getElementAndAlpha_mc(dndMc) {
		
				draggedArray = []
				dropArray = []
				logerArray = []
				pinLogerArray = []
				setTimeout(function () {
		
					getDrag();
		
		
				}, 10);
		
		
		
				function getDrag() {
		
					console.log('getElementAndAlpha_mc ', dndMc)
					var parent = dndMc;
					var keys = Object.keys(parent);
					var len = keys.length;
		
					while (--len) {
		
		
						if (keys[len].slice(1, 4) == ("dnd")) {
		
		
		
							parent[keys[len]].name = keys[len];
		
							//parent[keys[len]].regX = parent[keys[len]].width / 2;
							//parent[keys[len]].regY = parent[keys[len]].height / 2;
		
							parent[keys[len]].startx = parent[keys[len]].x;
							parent[keys[len]].starty = parent[keys[len]].y;
		
		
							parent[keys[len]].alpha = 0
							parent[keys[len]].y -= 30
							draggedArray.push(parent[keys[len]]);
		
		
		
						} else if (keys[len].slice(1, 4) == ("trg")) {
		
		
							parent[keys[len]].name = keys[len];
							//parent[keys[len]].regX = parent[keys[len]].width / 2;
							//parent[keys[len]].regY = parent[keys[len]].height / 2;
		
							//parent[keys[len]].alpha = 0
							dropArray.push(parent[keys[len]]);
		
						}
						
						else if (keys[len].slice(0, 3) == ("lgr")) {
		
		
							parent[keys[len]].name = keys[len];
						
							logerArray.push(parent[keys[len]]);
		
						}
		
		else if (keys[len].slice(0, 3) == ("pin")){
			
				parent[keys[len]].name = keys[len];
						
							pinLogerArray.push(parent[keys[len]]);
		
		}
					}
					console.log('draggedArray getElementAndAlpha_mc', draggedArray)
				if( ! from_checkPrecedentQ) sumOfdraged += draggedArray.length
		
				}
		
				
		
				
			}
		
			var imageTimeAnime = 2000
			function animeImages() {
		
				for (var u = 0; u < draggedArray.length; u++) {
		
					
				createjs.Tween.get(draggedArray[u], {
					loop: false
				})
					.to({
						alpha: 1,
						y:draggedArray[u].y + 30
					}, imageTimeAnime, createjs.Ease.getPowInOut(2))
			}
			
			setTimeout(function () {
		
		
		        addTitle()
		
				}, imageTimeAnime);
		}
			function addTitle() {
		
		
		
				startSound('title' + 0) //('q' + currentpage)
				console.log('titleDuration', titleDuration)
		
		
		
			}
			
		
			function dnd_Manager(dndMc) {
		
				var currentHit;
				var currentHitString;
		
		
				var loger_target = []
				var isCorr = false
		
				setlisteners();
		
		
				function setlisteners() {
		
					for (var u1 = 0; u1 < draggedArray.length; u1++) {
		
		
		
						draggedArray[u1].addEventListener("mousedown", onmousedown);
						draggedArray[u1].addEventListener("pressup", onpressup);
						draggedArray[u1].addEventListener("pressmove", onpressmove);
		
					}
		
		
				}
		
		
		
				function removelisteners() {
		
					for (var u1 = 0; u1 < draggedArray.length; u1++) {
		
		
		
						draggedArray[u1].removeEventListener("mousedown", onmousedown);
						draggedArray[u1].removeEventListener("pressup", onpressup);
						draggedArray[u1].removeEventListener("pressmove", onpressmove);
		
					}
		
		
				}
		
				dndMc.addEventListener("removed", onRemove);
		
				function onRemove(ev) {
					removelisteners()
					dndMc.removeEventListener("removed", onRemove);
		
				}
		
		
				function onmousedown(e) {
		
		
		
					e.nativeEvent.preventDefault();
		
					e.currentTarget.startx = e.currentTarget.x;
					e.currentTarget.starty = e.currentTarget.y;
		
		
				}
		
		
		
				function onpressmove(evt) {
		
		
					evt.nativeEvent.preventDefault();
		
		
		
					evt.currentTarget.parent.setChildIndex(evt.currentTarget, evt.currentTarget.parent.numChildren - 1);
		
					var pt = dndMc.globalToLocal(evt.stageX, evt.stageY);
		
					evt.currentTarget.x = pt.x;
					evt.currentTarget.y = pt.y;
		
		
					//targetTozero();
					var isHitsome = checkHit(evt.currentTarget);
					if (isHitsome) {
		
						currentHit.gotoAndStop(1);
		
		
		
					}
					stage.update();
		
		
				}
		
		
				function onpressup(evt) {
		
					var isHit = false;
		
					isHit = checkHit(evt.currentTarget);
					if (isHit) {
						isCorr = correct(evt.currentTarget);
					}
		
					if (isHit && isCorr) {
						
					   var contin = new createjs.Container()
						
		
						const [loge , pin] = findLoger(evt.currentTarget.name)
						
						
						animebounce(evt.currentTarget , loge)
						
						evt.currentTarget.mouseEnabled = false
		
						startSound('dropsound')
						loge.gotoAndStop(1);
						
						pin.gotoAndStop(1);
		
						loger_target.push(loge)
						
						console.log('loge is ' ,loge)
		
							myListofArraysCorr[currentpage].push(currentHitString)
					} else {
		
						returntoFirstplace(evt.currentTarget);
		
						if (isHit) {
		
							startSound('return')
		
		
							myListofArraysFaul[currentpage].push(currentHitString)
						}
					}
		
					checkGameOver()
					//targetTozero();
		
		
					if (conditionChangeSess() && !gameIsOver) {
		
		
						if (sessionAfterRightResp) {
		
							setTimeout(startNextSession, 2000);
		
						} else {
		
							showNumOfemoError()
							removelisteners()
							startNextSession();
						}
					}
				}
		
				
				function animebounce(img , lg ){
					
					img.x = lg.x
					img.y = lg.y - img.getTransformedBounds().height/2;
					
					img.rotation = 45
					
					img.regY = 0
					
					createjs.Tween.get(img).to({
					rotation: 0
				}, 2000 , createjs.Ease.elasticOut);
				
				
				lg.y = lg.y - lg.getTransformedBounds().height/2;
				lg.rotation = 45
				lg.regY = 0
				createjs.Tween.get(lg).to({
					rotation: 0
				}, 2000 , createjs.Ease.elasticOut);
					
				}
				
				
				function findLoger(nam){
					
					var logr = null
					var pin = null
					
					for (var u1 = 0; u1 < logerArray.length; u1++) {
		
					if(logerArray[u1].name.slice(3) == nam){
						logr = logerArray[u1]
						break 
					}
					
				}
					for (var u = 0; u < pinLogerArray.length; u++) {
		
					if(pinLogerArray[u].name.slice(6) == nam){
						pin = pinLogerArray[u]
						break 
					}
					
				}
				
				    if( logr == null ||  pin == null){
						
						alert(' loger or pin not found')
					}
					return [logr , pin]
				}
		
				function conditionChangeSess() {
		
					
					console.log('dropArray', dropArray)
					console.log('myListofArraysFaul[currentpage]', myListofArraysFaul[currentpage])
					console.log('allQ_pages', allQ_pages)
					if (loger_target.length == draggedArray.length) {
		
						showResu(true); //show Resu score befor filling the allQ_pages array
						allQ_pages[currentpage].push(1)
		
						sessionAfterRightResp = true
						return true;
					}
		
					if ((myListofArraysFaul[currentpage].length + 1) % (autorizedSingleQ + (autorizedSingleQ * allQ_pages[currentpage].length) + 1) == 0) {
		
						allQ_pages[currentpage].push(0)
						sessionAfterRightResp = false
						return true;
		
					}
		
					sessionAfterRightResp = false
					return false
				}
		
		
		
				that.hijab.addEventListener('click', startfirst)
				function startfirst(e) {
		
		
					alert('gggg')
					startSession()
		
				}
		
				function startNextSession() {
		
					send_statis()
					
					console.log('from startNextSession check', from_checkPrecedentQ)
		
					if (currentpage == numOfQ - 1 || from_checkPrecedentQ) {
		
						checkPrecedentQ()
		
						return
					}
					if (allQ_pages[currentpage + 1].length == 0 || allQ_pages[currentpage + 1] == 0) {
						currentpage = currentpage + 1;
		
		
						setTimeout(function () {
		
							startSound('session')
		
						}, 1000);
		
		
						setTimeout(function () {
		
							startSession()
						}, 2500);
		
					}
		
		
		
		
				}
		
				function checkPrecedentQ() {
		
					from_checkPrecedentQ = false;
					console.log('from checkPrecedentQ : allQ_pages', allQ_pages)
					for (var i = 0; i < allQ_pages.length; i++) {
		
						if (allQ_pages[i].length == 0 || allQ_pages[i][allQ_pages[i].length - 1] == 0) {
		
							currentpage = i
		
							from_checkPrecedentQ = true;
		
							startSession();
		
							break
						}
					}
		
					if (!from_checkPrecedentQ) {
		
						showLossWinMc(true)
						
						alert('anihhhhaaaaya')
		
						send_statis();
					}
		
				}
		
		
		
				function targetTozero() {
		
					for (var u = 0; u < dropArray.length; u++) {
		
						if (dropArray[u] != currentHit) {
		
							dropArray[u].gotoAndStop(0);
		
						}
		
					}
				}
				function correct(obj) {
		
		
					if (currentHit.name.slice(4) == obj.name.slice(4)) {
		
						//showResu(true);
						return true
		
					}
		
					showResu(false);
					return false
		
				}
		
		
				function checkHit(obj) {
		
					var lastDist = 1000;
		
					currentHitString = null;
		
					currentHit = null;
		
					var rect = {
		
						x: obj.x,
						y: obj.y,
						width: obj.getTransformedBounds().width,
						height: obj.getTransformedBounds().height
					}
		
		
					for (var u = 0; u < dropArray.length; u++) {
		
		
		
						var rect2 = dropArray[u];
		
						//	if (Math.abs(rect.x - rect2.x) < (rect.width / 2 + rect2.getTransformedBounds().width / 2) && Math.abs(rect.y - rect2.y) < (rect.height / 2 + rect2.getTransformedBounds().height / 2)) {
						if (Math.abs(rect.x - rect2.x) < (rect.width / 2 + rect2.getTransformedBounds().width / 2) && Math.abs(rect.y - rect2.y) < (rect.height / 2 + rect2.getTransformedBounds().height / 2)) {
		
		
							if (Math.abs(rect.x - rect2.x) < lastDist) {
		
		
								currentHitString = rect2.name;
		
								currentHit = rect2;
		
								lastDist = Math.abs(rect.x - rect2.x)
		
							}
		
						}
		
					}
					if (currentHit != null) {
						return true;
					}
		
					return false;
				}
		
		
				function returntoFirstplace(mc) {
		
		
		
					mc.x = mc.startx;
					mc.y = mc.starty;
		
		
				}
		
				dndMc.addEventListener("removed", onDNDRemove);
				function onDNDRemove(ev) {
		
		
					removelisteners();
					dndMc.removeEventListener("removed", onDNDRemove);
				}
		
			}
		
			function send_statis() {
		
					console.log('==++++++++++++++++++++++++++++++++++++++++++++++++==')
					console.log()
					console.log('allQ_pages', allQ_pages)
		
					console.log('myListofArraysFaul', myListofArraysFaul)
		        score = scorCalcul()
				console.log('score ', score)
				}
		
				
		
		var titleDuration = {}
		
		var sound_manif = [];
		
		///////////////  sound  //////////////////////
		
		
		if (!createjs.Sound.isReady()) {
			// createjs.FlashAudioPlugin.swfPath = "../src/soundjs/flashaudio/";
			createjs.Sound.registerPlugins([createjs.WebAudioPlugin, createjs.HTMLAudioPlugin, createjs.FlashAudioPlugin]);
		}
		
		
		var sound_listener = createjs.Sound.on("fileload", handleFileLoad);
		createjs.Sound.alternateExtensions = ["ogg"];
		soundIsReady = createjs.Sound.registerSounds(
			[{
				id: "ibdaa",
				src: "ibdaa.mp3"
			},{
				id: "title0",
				src: "title0.mp3"
			}], "mysound/");
		
		
		function handleFileLoad(event) {
			// A sound has been preloaded. This will fire multiple time
		
			//if (!event.id.startsWith('title')) return;
		
			sound_manif.push(event.id);
		
			//if we dont need sound duration 
			//titleDuration[parseInt(event.id.slice(5))] = 0
			//to get duration of title sound before play them
		
			myInstance = createjs.Sound.createInstance(event.id);
			console.log(event.id, myInstance.duration)
			titleDuration[event.id] = Math.round(myInstance.duration) + 200
		
		
		}
		
		
		
		
		
		
		function startSound(sout) {
		
			console.log('sound name to ply', sout);
		
			if (sound_manif.includes(sout)) {
		
				console.log('sound_manif.includes == true');
				music_play(sout);
				return;
			}
		
		
			createjs.Sound.on("fileload", handleLoad);
			//createjs.Sound.alternateExtensions = ["ogg"];
			///createjs.Sound.addEventListener("fileload", handleLoad);
		
			soundIsReady = createjs.Sound.registerSound("mysound/" + sout + ".mp3", sout);
		
		}
		
		
		function handleLoad(event) {
		
			music_play(event.id);
			sound_manif.push(event.id);
		
		}
		
		
		
		
		function music_play(sound_sout) {
		
			//createjs.Sound.stop();
		
			if (soundIsReady) {
		
		
				that.music = createjs.Sound.play(sound_sout);
		
				that.music.on("complete", handleComplete);
		
		
			}
		
		}
		
		function handleComplete() {
		
			console.log('sound complete');
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// hijab
	this.hijab = new lib.hijabb();
	this.hijab.name = "hijab";
	this.hijab.setTransform(-2.85,-7.1,1.015,1.024,0,0,0,0,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.hijab).wait(1));

	// emoE5
	this.emoE5 = new lib.emogiCorrEe();
	this.emoE5.name = "emoE5";
	this.emoE5.setTransform(79.2,45.3,1.024,1.2649,0,0,0,0,0.1);

	this.timeline.addTween(cjs.Tween.get(this.emoE5).wait(1));

	// emoE4
	this.emoE4 = new lib.emogiCorrEe();
	this.emoE4.name = "emoE4";
	this.emoE4.setTransform(140.1,45.3,1.024,1.2649,0,0,0,0.1,0.1);

	this.timeline.addTween(cjs.Tween.get(this.emoE4).wait(1));

	// emoE3
	this.emoE3 = new lib.emogiCorrEe();
	this.emoE3.name = "emoE3";
	this.emoE3.setTransform(200.15,45.3,1.024,1.2649,0,0,0,0,0.1);

	this.timeline.addTween(cjs.Tween.get(this.emoE3).wait(1));

	// emoE2
	this.emoE2 = new lib.emogiCorrEe();
	this.emoE2.name = "emoE2";
	this.emoE2.setTransform(259.95,45.3,1.024,1.2649,0,0,0,0,0.1);

	this.timeline.addTween(cjs.Tween.get(this.emoE2).wait(1));

	// emoE1
	this.emoE1 = new lib.emogiCorrEe();
	this.emoE1.name = "emoE1";
	this.emoE1.setTransform(317.05,45.15,1.024,1.2649);

	this.timeline.addTween(cjs.Tween.get(this.emoE1).wait(1));

	// emoC3
	this.emoC3 = new lib.emogiCorr();
	this.emoC3.name = "emoC3";
	this.emoC3.setTransform(613.9,29.65);

	this.timeline.addTween(cjs.Tween.get(this.emoC3).wait(1));

	// emoC2
	this.emoC2 = new lib.emogiCorr();
	this.emoC2.name = "emoC2";
	this.emoC2.setTransform(681.7,44.45,1,1,0,0,0,16.8,14.8);

	this.timeline.addTween(cjs.Tween.get(this.emoC2).wait(1));

	// emoC1
	this.emoC1 = new lib.emogiCorr();
	this.emoC1.name = "emoC1";
	this.emoC1.setTransform(727.95,44.45,1,1,0,0,0,16.8,14.8);

	this.timeline.addTween(cjs.Tween.get(this.emoC1).wait(1));

	// scoreBoard
	this.scoreBoard = new lib.scorBar();
	this.scoreBoard.name = "scoreBoard";
	this.scoreBoard.setTransform(411.05,22.1,1,0.786,0,0,0,388.9,0.1);

	this.timeline.addTween(cjs.Tween.get(this.scoreBoard).wait(1));

	// 46092-[Converted].jpg
	this.instance = new lib._46092Converted();
	this.instance.setTransform(0,0,0.3212,0.2766);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(399.2,243,409.8,260);
// library properties:
lib.properties = {
	id: '7B1FBFCDB39D17419239CACEC87E08F8',
	width: 800,
	height: 500,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/_46092Converted.jpg?1673631033893", id:"_46092Converted"},
		{src:"images/المذكر والمؤنتbounce_atlas_1.png?1673631033697", id:"المذكر والمؤنتbounce_atlas_1"},
		{src:"images/المذكر والمؤنتbounce_atlas_2.png?1673631033698", id:"المذكر والمؤنتbounce_atlas_2"},
		{src:"images/المذكر والمؤنتbounce_atlas_3.png?1673631033699", id:"المذكر والمؤنتbounce_atlas_3"},
		{src:"images/المذكر والمؤنتbounce_atlas_4.png?1673631033704", id:"المذكر والمؤنتbounce_atlas_4"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['7B1FBFCDB39D17419239CACEC87E08F8'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}			
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;			
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});			
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;			
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused){
			stageChild.syncStreamSounds();
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;