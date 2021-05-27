(function () {
	var name = ["Raul", "Yaakov", "James", "Harry", "Jake", "Joe", "John", "Paul", "Mike", "Jenifer"];
for (var i = 0; i < name.length;  i++) {
	var firstletter = name[i].charAt(0).toLowerCase(0);
	if (firstletter === 'j') {
		GoodbyeGreeter.speakgoodbye(name[i]);
	} 
	else {
         HelloGreeter.speakhello(name[i]); 
	}
}
})();
