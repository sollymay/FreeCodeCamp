function sumAll(arr) {
var sumValue =0;
if (arr[0]>arr[1]){
  for (var i=arr[1]; i<=arr[0];i++){
    sumValue+=i;
  }
} else {
  for (var j=arr[0]; j<=arr[1]; j++){
    sumValue+=j;
  }
}
  return sumValue;
}

console.log(sumAll([1, 4]));


function diffArray(arr1, arr2) {
  var newArr1 = [];
  var newArr2 = [];
  var newArr3 = [];
      for (var i=0;i<arr1.length;i++){
          newArr1.push(arr2.indexOf(arr1[i]));

          if (newArr1[i]===-1){
            newArr3.push(arr1[i]);
          }
      }

      for (var j=0; j<arr2.length;j++){
          newArr2.push(arr1.indexOf(arr2[j]));

          if (newArr2[j]===-1){
            newArr3.push(arr2[j]);
          }
      }

      return newArr3;
}

console.log(diffArray(["andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]));

function convertToRoman(num) {
  var lookup = {M:1000,CM:900,D:500,CD:400,C:100,XC:90,L:50,XL:40,X:10,IX:9,V:5,IV:4,I:1},roman = '',i;
  for ( i in lookup ) {
    while ( num >= lookup[i] ) {
      roman += i;
      num -= lookup[i];
    }
  }
  return roman;
}


console.log(convertToRoman(3201));


function whereAreYou(collection, source) {
  // What's in a name?
  var final_list =[];
  var current_entry;
  var source_keys = Object.keys(source);

  for (var x =0; x<collection.length; x++){
    current_entry = collection[x];
    current_properties = Object.keys(current_entry);
    //console.log(current_properties);
    console.log();
    for (var w=0; w<current_properties.length; w++){
      if (source_keys.length > 1){
        count =1;
        for (var k=0; k<source_keys.length; k++){

          if (source[source_keys[k]] == current_entry[current_properties[w]] && source_keys[k]==current_properties[w]){
            if (count == source_keys.length){
              if (final_list[final_list.length -1]!== current_entry){
                final_list.push(current_entry);
              }
            }
          }
          count++;
        }
      }
      else{
        if (current_entry[current_properties[w]] == source[Object.keys(source)]){
          console.log(current_entry);
          final_list.push(current_entry);
        }

      }
    }
  }
  return final_list;

}
console.log(whereAreYou([{ "a": 1, "b": 2 }, { "a": 1 }, { "a": 1, "b": 2, "c": 2 }], { "a": 1, "c": 2 }));

function myReplace(str, before, after) {
  function toTitleCase(after)
  {
  return after.replace(/\w\S*/g, function(after){return after.charAt(0).toUpperCase() + after.substr(1).toLowerCase();});
  }
  afterUpper = after;
  if (before[0] == before[0].toUpperCase()){
    afterUpper = toTitleCase(after);
  }
  var newstr = str.replace(before, afterUpper);
  return newstr;
}

console.log(myReplace("He is Sleeping on the couch", "Sleeping", "sitting"));



function translatePigLatin(str) {
    var characters =[];
    if (/a|e|i|o|u/.test(str[0])){
      return (str+'way');
    }
    else if (/[b-df-hj-np-tv-z]/.test(str[1])){
      characters= str[0]+str[1];
      return (str.substr(2,str.length) + characters + 'ay');
    } else{
      return str.replace(/(^\w)(.+)/, '$2$1ay');
    }

}

console.log(translatePigLatin("glove"));


function pairElement(str) {
  var paired_list = [];
  var splitted_element = str.split("");

  for (var i=0; i< splitted_element.length;i++){
    switch (splitted_element[i]){
      case "A":
      paired_list.push(["A","T"]);
      break;
      case "G":
      paired_list.push(["G","C"]);
      break;
      case "C":
      paired_list.push(["C","G"]);
      break;
      case "T":
      paired_list.push(["T","A"]);
      break;
      default:
      console.log("you put the wrong values");
      break;
    }

  }
  return paired_list;
}

console.log(pairElement("ATCGA"));

function fearNotLetter(str) {
  var final = undefined;
  var abc = {a:1,b:2,c:3,d:4,e:5,f:6,g:7,h:8,i:9,j:10,k:11,l:12,m:13,n:14,o:15,p:16,q:17,r:18,s:19,t:20,u:21,v:22,w:23,x:24,y:25,z:26};

  Object.prototype.getKeyByValue = function( value ) {
  for( var prop in this ) {
      if( this.hasOwnProperty( prop ) ) {
           if( this[ prop ] === value )
               return prop;
             }
           }
         };
    var counter = abc[str[0]];
    for (var test=0; test<str.length; test++){
      if (counter!== abc[str[test]]){
        final =  abc.getKeyByValue( counter ) ;
        break;
      }

      counter++;
    }
    return final;

}

console.log(fearNotLetter("bcd"));

function booWho(bool) {
  // What is the new fad diet for ghost developers? The Boolean.
  return (bool===true || bool===false)?true:false;
}

console.log(booWho(null));

function uniteUnique(arr1, arr2, arr3) {
  var another_array=[]
  var testArray =[]
  for (var i=0; i<arguments.length; i++){
      testArray=arguments[i]
     for (var j=0; j<testArray.length; j++){

       if (!(testArray[j] in another_array)){
         another_array.push(testArray[j])
       }
     }
     testArray=[]
  }

  return another_array


}

console.log(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]));

function convertHTML(str) {
  var tempStr = str

  for (var i=0; i<tempStr.length; i++){
    switch (tempStr[i]) {
      case '&':
        tempStr = tempStr.replace('&', '&amp;');
        break;
      case '<':
        tempStr = tempStr.replace('<', '&lt;');
        break;
      case '>':
        tempStr = tempStr.replace('>', '&gt;');
        break;
      case"'":
      tempStr = tempStr.replace("'", '&apos;');
        break;
      case '"':
      tempStr = tempStr.replace('"', '&quot;');
        break;
      default:
        break;

    }
  }
  // &colon;&rpar;
  return tempStr;
}

console.log(convertHTML('Stuff in "quotation marks"'));


function spinalCase(str) {
  // "It's such a fine line between stupid, and clever."
  // --David St. Hubbins
  return str.replace(/(?!^)([A-Z])/g, ' $1')
              .replace(/[_\s]+(?=[a-zA-Z])/g, '-').toLowerCase();

}

console.log(spinalCase('This Is Spinal Tap'));


function sumFibs(num) {
  var w = 1; //start the fibonacci at 1 to add it
  var a = 0, b = 1, f = 1; //do the fibonacci sequence loop
    for(var i = 2; i <= num; i++) {
        f = a + b;
        a = b;
        b = f;
        if (b> num){ //break at the moment we get to the value in question
          break;
        }
        if (f%2 !==0){ //only add the odd values
          w += f;

        }

    }
     return w;
}

console.log(sumFibs(1));

function sumPrimes(num) {
  var sum=0;
  function isPrime(value){
    for(var i = 2; i < value; i++) {
    if(value % i === 0) {
        return false;
      }
    }
    return value;
  }

  for (var i=2; i<=num; i++){
    if (isPrime(i) === false){}
    else{
        sum+= isPrime(i);
    }

  }
  return sum;
}

console.log(sumPrimes(5));


function smallestCommons(arr) {
  // Euclid algorithm for Greates Common Divisor
  function gcd(a, b)
  {
  	return !b ? a : gcd(b, a % b);
  }

  // Least Common Multiple function
  function lcm(a, b)
  {
  	return a * (b / gcd(a,b));
  }

  if(arr[0] > arr[1]) (arr = [arr[1], arr[0]]);

	for(x = result = arr[0]; x <= arr[1]; x++) {
		result = lcm(x, result);
	}

	return result;

}

console.log(smallestCommons([1,5]));

function findElement(arr, func) {

  for (var x=0; x<arr.length; x++){
    var test = arr[x];
    if (func(test)===true){
      return test;

    }
    else{

    }

  }
  return undefined;

}
console.log(findElement([1, 3, 5, 8, 9, 10], function(num) { return num % 2 === 0; }));

function dropElements(arr, func) {
  // Drop them elements.
  var filtered_array=[];
  for (var i=0; i<arr.length; i++){
    if (func(arr[i])===true){
      filtered_array=(arr.slice(i,arr.length));
      break;
    }

  }
  return filtered_array;
}

console.log(dropElements([1, 2, 3], function(n) {return n >1; }));

function steamrollArray(arr) {
  var final_array = [];
  for (var i=0; i<arr.length; i++){
      checkArray(arr[i]);
  }

  function checkArray(testObject){
    if (Array.isArray(testObject)){
      for (var j=0;j<testObject.length;j++){
          checkArray(testObject[j]);
      }
    }
    else {
      final_array.push(testObject);
    }
  }
  // I'm a steamroller, baby
  return final_array;
}

console.log(steamrollArray([1, [2], [3, [[4]]]]));


function binaryAgent(str) {
  var w = [];
  var characters = str.split(" ");
  for (var i=0; i<characters.length; i++){
     w.push(String.fromCharCode(parseInt(characters[i], 2)));

  }

  return w.join("");
}

console.log(binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111"));

function truthCheck(collection, pre) {
  // Is everyone being true
  var counter=0;

  for (var i=0; i<collection.length;i++){
    var newValue = collection[i][pre] || 0;

    if (newValue===0 ){

    }
    else {
      counter++;
    }
  }
  if (counter== collection.length){
    return true;
  }
  return false;
}

console.log(truthCheck([{"user": "Tinky-Winky", "sex": "male", "age": 0}, {"user": "Dipsy", "sex": "male", "age": 3}, {"user": "Laa-Laa", "sex": "female", "age": 5}, {"user": "Po", "sex": "female", "age": 4}], "age"));

function addTogether() {

  function isNumber(testNumber){
    if (typeof testNumber == 'number'){
      return true;
    }
    else return false;
  }

  if (arguments.length >=2){
    if (isNumber(arguments[0]) && isNumber(arguments[1])){
      return arguments[0] + arguments[1];
    }
    else {
      return undefined;
    }
  }

  else{
      var arg1 = arguments[0];
      if (isNumber(arg1)){
      return function(newNumber){
        if(isNumber(newNumber)){
          return arg1 + newNumber;
        }
      };

      }
      else {
        return undefined;
      }
  }
}


console.log(addTogether(2)(3));
