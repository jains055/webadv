
var article1 = new Array("The", "A", "One", "Some", "Any", "That", "Her"); 
var noun = new Array("baby", "girl", "dog", "garden", "car", "food", "toy"); 
var verb = new Array("drove", "jumped", "ran", "walked", "skipped", "read", "wrote"); 
var article2 = new Array("the", "a", "one", "some", "any", "that", "her"); 
var preposition = new Array("to", "from", "over", "under", "on", "in", "through"); 



var timer = 0;
var counter = 0;

for (var i = 1; i <=7000; i++) {
    setTimeout(function() {
var rand1 = Math.floor ( Math.random() * article1.length ); 
var rand2 = Math.floor ( Math.random() * noun.length ); 
var rand2a = Math.floor ( Math.random() * noun.length ); 
while (rand2 == rand2a) {rand2a = Math.floor ( Math.random() * noun.length ); }
var rand3 = Math.floor ( Math.random() * verb.length ); 
var rand4 = Math.floor ( Math.random() * article2.length ); 
while (rand4 == rand1) {rand4 = Math.floor ( Math.random() * article2.length ); }
var rand5 = Math.floor ( Math.random() * preposition.length );
var space = " ";

console.log((article1[rand1] + space + noun[rand2] + space + verb[rand3] + space + preposition[rand5] + space + article2[rand4] + space + noun[rand2a] + "."));

    }, timer);
    timer += 1000;
    counter++;
}



