(function (window) {
	var HelloGreeter = new Object ();
    var greet = "Hello";
    HelloGreeter.speakhello = function speakhello (name) {
	console.log (greet + " " + name + "!")
};
   window.HelloGreeter = HelloGreeter;
})(window);
