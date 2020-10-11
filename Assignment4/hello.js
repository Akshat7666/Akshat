(function (window) {
var speakword ={};
var greeting = "Hello ";
speakword.sayhello = function () {
	console.log(greeting + speakword.names);
}

window.speakword = speakword;

})(window);
