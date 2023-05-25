(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"Lab3_3_atlas_1", frames: [[0,0,360,360]]}
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



(lib.CachedBmp_3 = function() {
	this.initialize(ss["Lab3_3_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
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


(lib.Шар = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.CachedBmp_3();
	this.instance.setTransform(-0.5,-0.5,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Шар, new cjs.Rectangle(-0.5,-0.5,180,180), null);


// stage content:
(lib.Lab3_3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Ball
	this.instance = new lib.Шар();
	this.instance.setTransform(3.55,191.1,1,1,0,0,0,89.5,89.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({rotation:24.6362,x:92.95,y:150},0).wait(1).to({rotation:41.1777,x:143.45,y:195},0).wait(1).to({rotation:54.489,x:169.95,y:244},0).wait(1).to({rotation:65.9298,x:190.2,y:288.5},0).wait(1).to({rotation:76.1169,x:205.5,y:329},0).wait(1).to({rotation:85.3947,x:217.3,y:366.55},0).wait(1).to({rotation:93.9813,x:226.15,y:402.05},0).wait(1).to({rotation:102.0282,x:238.1,y:433.65},0).wait(1).to({rotation:109.65,x:246.25,y:464.65},0).wait(1).to({rotation:116.9419,x:255.7,y:494},0).wait(1).to({rotation:123.9933,x:263.4,y:522.8},0).wait(1).to({rotation:130.9054,x:272.8,y:550.3},0).wait(1).to({rotation:137.8265,x:282.2,y:577.8},0).wait(1).to({rotation:145.0681,x:290.05,y:607.2},0).wait(1).to({rotation:152.2998,x:301.75,y:633.8},0).wait(1).to({rotation:159.0479,x:323.95,y:617.7},0).wait(1).to({rotation:165.2664,x:346.05,y:604.45},0).wait(1).to({rotation:170.9358,x:366.85,y:593.5},0).wait(1).to({rotation:176.0743,x:387.25,y:585.95},0).wait(1).to({rotation:180.7418,x:406.35,y:580.9},0).wait(1).to({rotation:185.0309,x:424.7,y:579.9},0).wait(1).to({rotation:189.0482,x:442,y:579.85},0).wait(1).to({rotation:192.8966,x:458.65,y:579.7},0).wait(1).to({rotation:196.6626,x:474.85},0).wait(1).to({rotation:200.4122,x:491.05,y:579.6},0).wait(1).to({rotation:204.1918,x:506.4,y:584.1},0).wait(1).to({rotation:208.0325,x:522.25,y:588.3},0).wait(1).to({rotation:211.9534,x:538.15,y:593.65},0).wait(1).to({rotation:215.9652,x:553.8,y:600.65},0).wait(1).to({rotation:220.0734,x:567.8,y:610.3},0).wait(1).to({rotation:224.2795,x:581.35,y:621.6},0).wait(1).to({rotation:228.5828,x:596.25,y:631.75},0).wait(1).to({rotation:232.963,x:611.4,y:634.45},0).wait(1).to({rotation:237.358,x:626.2,y:622.95},0).wait(1).to({rotation:241.764,x:640.8,y:611.65},0).wait(1).to({rotation:246.183,x:655.35,y:599.7},0).wait(1).to({rotation:250.6172,x:672.6,y:592},0).wait(1).to({rotation:255.0694,x:690.25,y:585.05},0).wait(1).to({rotation:259.5431,x:708.05,y:579.2},0).wait(1).to({rotation:264.0421,x:726.7,y:573.95},0).wait(1).to({rotation:268.5703,x:746.05,y:572},0).wait(1).to({rotation:273.1304,x:765.6,y:570.5},0).wait(1).to({rotation:277.7209,x:785.35,y:570.2},0).wait(1).to({rotation:282.3338,x:804.2,y:575.35},0).wait(1).to({rotation:286.9538,x:822.3,y:582.45},0).wait(1).to({rotation:291.564,x:839.95,y:590.75},0).wait(1).to({rotation:296.1524,x:851.55,y:606.55},0).wait(1).to({rotation:300.7102,x:863.8,y:621.4},0).wait(1).to({rotation:305.0267,x:876.75,y:634.65},0).wait(1).to({rotation:308.9769,x:890.7,y:628.9},0).wait(1).to({rotation:312.5588,x:903.6,y:620.65},0).wait(1).to({rotation:315.7729,x:916.45,y:615.45},0).wait(1).to({rotation:318.6226,x:926.9,y:611.05},0).wait(1).to({rotation:321.1152,x:937.7,y:610.55},0).wait(1).to({rotation:323.2627,x:946.75,y:609.3},0).wait(1).to({rotation:325.0831,x:954.55,y:608.9},0).wait(1).to({rotation:326.6013,x:960.95,y:608.8},0).wait(1).to({rotation:327.8511,x:966.3,y:608.9},0).wait(1).to({rotation:328.8762,x:970.65,y:608.95},0).wait(1).to({rotation:329.7324,x:974.35,y:609.15},0).wait(1).to({rotation:330.4889,x:977.65,y:609.35},0).wait(1).to({rotation:331.2296,x:980.85,y:609.55},0).wait(1).to({rotation:332.0547,x:984.35,y:609.9},0).wait(1).to({rotation:333.08,x:988.75,y:610.4},0).wait(1).to({rotation:334.437,x:994.55,y:611.2},0).wait(1).to({rotation:336.2328,x:1002.2,y:612.45},0).wait(1).to({rotation:338.1142,x:1010.2,y:614.05},0).wait(1).to({rotation:339.9495,x:1017.95,y:615.45},0).wait(1).to({rotation:341.7291,x:1025.6,y:616.85},0).wait(1).to({rotation:343.4403,x:1032.9,y:617.95},0).wait(1).to({rotation:345.0656,x:1039.7,y:619.45},0).wait(1).to({rotation:346.5814,x:1045.75,y:621.75},0).wait(1).to({rotation:347.9544,x:1051.55,y:623.05},0).wait(1).to({rotation:349.1384,x:1056.15,y:625},0).wait(1).to({rotation:350.073,x:1059.2,y:627.55},0).wait(1).to({rotation:350.6969,x:1061.4,y:628.95},0).wait(1).to({rotation:350.9998,x:1062.7,y:629.3},0).wait(1).to({rotation:351.0987,x:1063.05,y:629.35},0).wait(1).to({rotation:351.2016,x:1063.55,y:629.5},0).wait(1).to({rotation:351.409,x:1064.35,y:629.85},0).wait(1).to({rotation:351.3097,x:1063.9,y:629.65},0).wait(1).to({rotation:351.1526,x:1063.3,y:629.5},0).wait(1).to({rotation:351.1261,x:1063.2,y:629.45},0).wait(1).to({rotation:351.3361,x:1064.1,y:629.7},0).wait(1).to({rotation:351.874,x:1066.25,y:630.4},0).wait(1).to({rotation:352.8411,x:1070.05,y:631.9},0).wait(1).to({rotation:354.3691,x:1075.85,y:634.5},0).wait(1).to({rotation:356.6504,x:1084,y:639.5},0).wait(1).to({rotation:360,x:1096.75,y:639.8},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(553.6,390.7,633.1999999999999,369.7);
// library properties:
lib.properties = {
	id: '1681C0EEB88AA647BFDD9CB1B19F9FA5',
	width: 1280,
	height: 720,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/Lab3_3_atlas_1.png?1684942353279", id:"Lab3_3_atlas_1"}
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
an.compositions['1681C0EEB88AA647BFDD9CB1B19F9FA5'] = {
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