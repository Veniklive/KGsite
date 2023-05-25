(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"Lab3_5_atlas_1", frames: [[0,0,1335,738]]}
];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:



(lib.Местопреступления = function() {
	this.initialize(ss["Lab3_5_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.Анимация3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFF00").s().p("A2BTWQgTgRANgfQALgYAZgYQFjlAD6mWQkagkkKhpQglgOgXgWQgbgcAJgdQAOgsBVAAQFPAAFRggQAvgFAYgFQAogHAdgOQBdgqA2h3QATgrARg+IAdhtQAoiSB6koQB1kfAoicQAHgdAQgSQATgWAUAJQARAIAHAkQAcCTArG7QAkFyA7DWQIHgIIAhJQArgGAUAIQAQAFAKAOQAKAPgFAPQgDAMgNAKQgIAGgRAHIujGZQgiAOgJASQgGAMACARQABALAGAUQBbEoA0EqQAGAhgGAZQgHAggZAGQgXAFgVgVQgOgOgSgeQgyhWhghQQg7gxh8hQIiwhxQgTgMgJgFQgQgIgOgBQgTgDgXAIQgOAEgaANQozEZo3EBQgcANgUAAQgRAAgLgKgAqnHKQgGAEgHAOQgDAEgHAFIgLAJQgGAIgFAVQgEAHgHAJIgNAPIggAqIhQBrQhqCOg/BIQg9BGhLBGQATgDAagPQAbgRAPgIIAfgNQAUgHAKgHIAWgPQANgJAJgFQAMgGAUgGIAhgKQAYgIAggQIA1gcQAlgUBFgcQBNgfAegPQAdgOA8ghQA6ggAfgPIBWgmQAxgXAfgXIjNhcQh3gxhfgOIgHAAQgHAAgEABgACYIMQhiAzg8AZQgQAGgCAIIB/BbQAcASBBAoQA8AkAgAWQAbATAVARIAyAqIApAjQgLgzgGg1QgDgngGgSIgJgXIgKgXQgHgQgGggQgHgigFgPIgOglQgIgWgIg1QgHgxgLgZQgpATh0A9gAldCaQgxAGgWALQgXAMgcAcQhKBJhGBbQBcAOB6A0QCJA/BFAdQAkAPAVABQAWABAagJQAPgFAdgPIE1icQATgJADgKQAEgKgJgTQgOgjgNhTQgMhPgTgmgArHDIIiEAPQioASijAAQBGAZCQAbQCSAbBEAYQASAHAKgCQAKgBANgNQAOgNARgXIAcgmQAagjAggdQg3AChOAJgANgAiIhOAKQgRABhYADQg1ACiBAKQh1AKhCAAQANAkAOBbQANBSAUAqQAZgEAvgYQCkhRCzhQQB/g3B6gxIgygBQhAAAg+AHgAgXrbQhHClgdBTIh0FsQgSA7gLAeQgSAwgUAlIH9g/QgBgRgMgtQgQg5gNhJQgIgugLhWQgbjHgNh8QgUiygHiTQgdBWhFCjg");
	this.shape.setTransform(0.0058,0.0092);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-142.1,-124.8,284.2,249.7);


(lib.Солнце = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Слой_1
	this.instance = new lib.Анимация3("synched",0);
	this.instance.setTransform(-18.2,-13.15);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:720},149).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-205.8,-200.7,375.3,375.29999999999995);


// stage content:
(lib.Lab3_5 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [0];
	// timeline functions:
	this.frame_0 = function() {
		playSound("WeatherAmbienceWindBlizzardSnowWhistleGust");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(150));

	// Сонце
	this.instance = new lib.Солнце();
	this.instance.setTransform(-218.5,128.55,1,1,0,0,0,-18.2,-13.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({guide:{path:[-218.4,128.6,-198.6,122.5,-186.5,119.2,-156.6,111.1,-118.9,104.3,-30.7,88.4,82.1,83.6,150.1,80.8,285.5,81,468.9,81.4,560.6,82.2,713.2,83.6,835.4,87.4,899.1,89.4,941.5,91.9,999.3,95.4,1046.9,101.4,1047.2,101.5,1094.1,107.9,1122.4,111.7,1141.4,113.4,1163.7,115.4,1208.8,117.1,1253.7,118.8,1276.1,120.8,1289.4,122,1316.6,125.3,1343.4,128.6,1357.1,129.8,1367.1,130.7,1387.5,132.2,1405.6,133.7,1417.7,135.4,1451.8,140.3,1473.5,152.1,1477.4,154.3,1479.2,157.7,1481.1,161.5,1477.7,163.2,1477.6,163.3,1477.4,163.3]}},149).wait(1));

	// Фон
	this.instance_1 = new lib.Местопреступления();
	this.instance_1.setTransform(0,-18);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(150));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(279.4,316.1,1340.1,403.9);
// library properties:
lib.properties = {
	id: '20A53DCA4B4FBE459DC91961ECA48885',
	width: 1280,
	height: 720,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/Lab3_5_atlas_1.png?1684942825788", id:"Lab3_5_atlas_1"},
		{src:"sounds/WeatherAmbienceWindBlizzardSnowWhistleGust.mp3?1684942825810", id:"WeatherAmbienceWindBlizzardSnowWhistleGust"}
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
an.compositions['20A53DCA4B4FBE459DC91961ECA48885'] = {
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
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}
an.handleFilterCache = function(event) {
	if(!event.paused){
		var target = event.target;
		if(target){
			if(target.filterCacheList){
				for(var index = 0; index < target.filterCacheList.length ; index++){
					var cacheInst = target.filterCacheList[index];
					if((cacheInst.startFrame <= target.currentFrame) && (target.currentFrame <= cacheInst.endFrame)){
						cacheInst.instance.cache(cacheInst.x, cacheInst.y, cacheInst.w, cacheInst.h);
					}
				}
			}
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;