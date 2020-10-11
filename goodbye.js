(function (window) {
var speakword ={};
var greeting = "Goodbye ";
speakword.saygoodbye = function () {
	console.log(greeting + speakword.names);
}

window.speakword = speakword;

})(window);
