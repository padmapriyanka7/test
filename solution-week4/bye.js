(function(window) {
	// body...
	var byeSpeaker={};
	var speakWord = "GoodBye";
	byeSpeaker.speak=function(name){
		 	console.log(speakWord + " " + name);
	}
	window.byeSpeaker=byeSpeaker;

})(window);

