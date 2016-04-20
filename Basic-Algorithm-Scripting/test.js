function palindrome(str) {

  return (str.toLowerCase().replace(/[\W_]+/g, '')).split('').reverse().join('') === str.toLowerCase().replace(/[\W_]+/g, '') ? true:false;
}


console.log(palindrome("eye"));

function findLongestWord(str) {

  var word_list = str.split(" ");
  var max_length = 0;
  for (var i=0; i< word_list.length; i++){
    if (word_list[i].length > max_length){
      max_length = word_list[i].length;
    }
  }
  return max_length;
}

console.log(findLongestWord("The quick brown fox jumped over the lazy dog"));

function titleCase(str) {
  return str.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
}

console.log(titleCase("I'm a little tea pot"));

function largestOfFour(arr) {
  var finalArray = [];
  for (var i =0; i<arr.length; i++){
    var max_number = 0;
    for (var j=0; j<arr[i].length;j++){
      if (max_number < arr[i][j]){
        max_number= arr[i][j];
      }
    }
    finalArray.push(max_number);
  }
  return finalArray;
}

console.log(largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]));

function confirmEnding(str, target) {
    return str.substr((str.length-target.length), str.length)===target ? true:false;
}

console.log(confirmEnding("Bastian", "n"));

function repeatStringNumTimes(str, num) {
  var finalString =[];
  for (var i=0; i<num; i++){
    for (var j=0; j< str.length; j++){
      finalString.push(str[j]);
    }
  }
  str = finalString.join('');
  return str;
}

console.log(repeatStringNumTimes("abc", 3));

function truncateString(str, num) {
  // Clear out that junk in your trunk
  if (str.length >num && num>3){
    return str.slice(0,num-3) +"...";
  }
  else if(str.length === num || num>str.length){
    return str;
  }
  else {
    return str.slice(0,num)+"...";
  }

}

console.log((truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length + 2)));

function chunkArrayInGroups(arr, size) {
  arr.join('');
  if (arr.length%size ===0){
    var w=[];
    for (var i=0; i<arr.length; i+=(size)){
      x=arr.slice(i,(size+i));
      w.push(x);
    }
    return w;
    }
    else {
      rem = arr.length%size;
      var w=[];
      if (rem == 1){
        rem_list = arr.slice(arr.length-1,arr.length);
      }
      else if (rem ==2){
        rem_list =arr.slice(arr.length-2,arr.length);
      }
      else{
        rem_list = arr.slice(size-rem-1, size-1);
      }

      for (var i=0; i<(arr.length - rem); i+=(size)){
        if (i===undefined){
          break;
        }
        else{

          x=arr.slice(i,(size+i));
          w.push(x);
        }
      }
      w.push(rem_list);
      return w;
  }
}

console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5], 4));

function slasher(arr, howMany) {
  // it doesn't always pay to be first
  return arr.splice(howMany);
}

console.log(slasher([1, 2, 3], 2));

function mutation(arr) {
  var x = arr[0].toLowerCase();
  var y = arr[1].toLowerCase();
  for (var i=0; i< y.length; i++){
      if (x.indexOf(y[i]) === -1){
         return false;
      }
  }
  return true;
}

console.log(mutation(["hello", "u"]));

/*Remove all falsy Remove all falsy values from an array.
Falsy values in JavaScript are false, null, 0, "", undefined, and NaN. */
function bouncer(arr) {
  var cleaned_arr = [];
  for (var i =0; i<arr.length;i++){
  if(arr[i]){
      cleaned_arr.push(arr[i]);
  }
}

return cleaned_arr;
}

console.log(bouncer([7, "ate", "", true, 9, NaN, undefined,10]));

/*You will be provided with an initial array (the first argument in the destroyer function), followed by one or more arguments.
Remove all elements from the initial array that are of the same value as these arguments.*/

function destroyer(arr) {
  // Remove all the values
  return arr;
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);
