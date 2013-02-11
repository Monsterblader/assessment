var startsWith = function (testString){
  return /[^ ]+/g.exec(testString)[0] === testString;
}

console.log("'This is only a test' should be false:", startsWith("This is only a test."));
console.log("'Hello' should be true:", startsWith("Hello"));

//Capitalizes everything which grievously annoys me, but, hey, 80% is 80%.
var titlize = function(inputString){
  var regex = /[^ .]+/g;
  var capitalizedSentence = "";
  var extractedWord;
  while (extractedWord = regex.exec(inputString)) {
    capitalizedSentence += extractedWord[0][0].toUpperCase() + extractedWord[0].slice(1) + " ";
  }
  return capitalizedSentence.slice(0, -1) + ".";
};

console.log(titlize("This is a sentence."), "has been titleized.");

function BakedGoods() {
  this.eat = function() {
    console.log("C is for cookie.");
  }
}

function Cookie (cookieType){
  this.type = cookieType;
};

Cookie.prototype = new BakedGoods();
Cookie.prototype.constructor = Cookie;
Cookie.prototype.whatCookie = function (){
  console.log("You have a " + this.type);
}
var sugarCookie = new Cookie("Sugar cookie");
sugarCookie.whatCookie();
sugarCookie.eat();

/*A stack is a LIFO data holder.  That is, the newest item that it receives is the first item to be returned when data are requested.
A queue is a FIFO data holder.  That is, the oldest item that it carries is the first item to be returned when data are requested.
*/

Array.prototype.last = function (){
  return this[this.length - 1];
}

Array.prototype.first = function (){
  return this[0];
}

// Alternate method would be to use .splice()
Array.prototype.removeAtIndex = function (removeIndex){
  var returnArray = new Array(this.length - 1);
  for (var i = 0; i <= removeIndex; i += 1) {
    returnArray[i] = this[i];
  }
  for (var i = removeIndex + 1; i < this.length; i += 1) {
    returnArray[i - 1] = this[i];
  }
  return returnArray;
}

var arr = [1, 3, 4];
console.log("[1, 3, 4].last() =", arr.last());
console.log("[1, 3, 4].first() =", arr.first());
console.log("[1, 3, 4].removeAtIndex(1) =", arr.removeAtIndex(1));

/* _.each receives an object or array and a function, known as a callback.
  It executes the callback once for each element of the object or array and passes the current element, the key of the element, and the original object or array as parameters of the callback in that order.
*/

// Array functionality only.
var _ = {
  map: function (newData, callbackFn){
    var returnArray = [];
    for (var i = 0; i < newData.length; i += 1) {
      returnArray.push(callbackFn(newData[i], i, newData));
    }
    return returnArray;
  },

  filter: function (newData, callbackFn){
    var returnArray = [];
    for (var i = 0; i < newData.length; i += 1) {
      callbackFn(newData[i], i, newData) && returnArray.push(newData[i]);
    }
    return returnArray;
  }
}

console.log("_.map([1,2,3], function (val) { return val * 2; }) =", _.map([1,2,3], function (val) { return val * 2; }));
console.log("_.filter([2,4,6], function (val) { return val % 3 !== 0; }) =", _.filter([2,4,6], function (val) { return val % 3 !== 0; }));