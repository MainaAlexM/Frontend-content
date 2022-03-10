    //forEach loops through
var numbers = [1,2,3,4,5];
var doubledNumbers = [];
numbers.forEach(function(number) {
  doubledNumbers.push(number * 2);
});
alert(doubledNumbers);


    //map transforms
    var numbers = [1,2,3,4,5];

var doubledNumbers = numbers.map(function(number) {
return number * 2;
});

alert(doubledNumbers);


// for 
//initialization, condition, and final expression.
var languages = ['HTML', 'CSS', 'Javascript'];
for (var index = 0; index < languages.length; index += 1) {
  alert('I love ' + languages[index] + '!');
}

var total = 0;
for (var currentNumber = 1; currentNumber <= 5; currentNumber += 1) {
  total += currentNumber;
}
alert("Total is: " + total);