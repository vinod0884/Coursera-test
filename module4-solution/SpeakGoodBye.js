(function (window) {
	var GoodbyeGreeter = new Object ();
    var greet = "Good bye";
    GoodbyeGreeter.speakgoodbye = function speakgoodbye (name) {
	console.log(greet + " " + name+ "!");
};
    window.GoodbyeGreeter = GoodbyeGreeter;
})(window);


