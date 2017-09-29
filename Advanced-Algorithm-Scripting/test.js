
function telephoneCheck(str) {
  var criteria =/^(?:(?:\+?1\s*(?:[.-]\s*)?)?(?:\(\s*([2-9]1[02-9]|[2-9][02-8]1|[2-9][02-8][02-9])\s*\)|([2-9]1[02-9]|[2-9][02-8]1|[2-9][02-8][02-9]))\s*(?:[.-]\s*)?)?([2-9]1[02-9]|[2-9][02-9]1|[2-9][02-9]{2})\s*(?:[.-]\s*)?([0-9]{4})$/;
  if (criteria.test(str)){
    return true;
  }
  else {
    return false;
  }
}
telephoneCheck("5555555");

function sym() {
  var arrays = [].slice.call(arguments);

  function diff(arr1, arr2) {
    var arr = [];

    arr1.forEach(function(v) {
      if ( !~arr2.indexOf(v) && !~arr.indexOf(v) ) {
        arr.push( v );
      }
    });

    arr2.forEach(function(v) {
      if ( !~arr1.indexOf(v) && !~arr.indexOf(v) ) {
        arr.push( v );
      }
    });
    return arr;
  }

  var result = diff(arrays.shift(), arrays.shift());

  while (arrays.length > 0) {
    result = diff(result, arrays.shift());
  }

  return result;
}

sym([1, 1, 2, 5], [2, 2, 3, 5], [3, 4, 5, 5]);

function checkCashRegister(price, cash, cid) {
  cash = cash*100;
  price = price*100;
  var change = cash-price;
  var change2 = change;

  var total = 0;
  var getTotalInRegister = function(cid){

     for (var index=0; index< cid.length; index++){
        total+=cid[index][1]*100;
     }
     return total.toFixed(2);
  };


  var calculateChange = function(price, cash, cid){
    var finalResult = [];
    var totalInRegister = getTotalInRegister(cid);

    if (totalInRegister < change){
      return "Insufficient Funds";
    }
    else if (totalInRegister==change) {
      return "Closed";
    }
    else {

      for (var i = cid.length -1; i >= 0; i--) {
        var denominationTotalValue = cid[i][1]*100,
            denominationValue = getValue(cid[i][0]),
            denominationAmount = denominationTotalValue / denominationValue,
            changeCalc = 0;

        while (change2 >= denominationValue && denominationAmount >0) {
          change2 -= denominationValue;
          denominationAmount--;
          changeCalc++;
        }
        if (changeCalc >0){
          finalResult.push([cid[i][0], changeCalc*(denominationValue/100)]);
        }
      }
      if (change2 != 0){
        return "Insufficient Funds";
      }
      return finalResult;
    }
  };
  var getValue = function(denomination){
    switch(denomination){
      case 'PENNY':
          return 1;
      case 'NICKEL':
          return 5;
      case 'DIME':
          return 10;
      case 'QUARTER':
          return 25;
      case 'ONE':
          return 100;
      case 'FIVE':
          return 500;
      case 'TEN':
          return 1000;
      case 'TWENTY':
          return 2000;
      case 'ONE HUNDRED':
          return 10000;
    }
  };
  return calculateChange(price, cash, cid);

}

// Example cash-in-drawer array:
// [["PENNY", 1.01],
// ["NICKEL", 2.05],
// ["DIME", 3.10],
// ["QUARTER", 4.25],
// ["ONE", 90.00],
// ["FIVE", 55.00],
// ["TEN", 20.00],
// ["TWENTY", 60.00],
// ["ONE HUNDRED", 100.00]]

console.log(checkCashRegister(19.50, 20.00, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.10], ["QUARTER", 4.25], ["ONE", 90.00], ["FIVE", 55.00], ["TEN", 20.00], ["TWENTY", 60.00], ["ONE HUNDRED", 100.00]]));



var Person = function(firstAndLast) {
  var fullName = firstAndLast;
  var fullSplit = fullName.split(" ");


   this.getFirstName = function(){
    return fullSplit[0];
  };
    this.getLastName = function(){
    return fullSplit[1];
  };
    this.getFullName = function(){
    return fullName;
  };
    this.setFirstName = function(first){
    fullSplit[0] = first;
    fullName = fullSplit.join(' ');
  };
    this.setLastName = function(last){
    fullSplit[1] = last;
    fullName = fullSplit.join(' ');
  };
    this.setFullName = function(firstAndLast){
      fullName = firstAndLast;
      fullSplit = fullName.split(" ");
  };
};

function updateInventory(arr1, arr2) {
    if (arr1.length ===0){
        var arr2_fixed = reverseList(arr2);
        arr2_fixed.sort();
        finalArray = reverseList(arr2_fixed);
        return finalArray;
    }
    for (var i = 0; i<arr2.length;i++){
      var count=0;
      for (var j = 0; j< arr1.length; j++){
        count++;
        if (arr2[i][1] == arr1[j][1]){
          arr1[j][0] += arr2[i][0];
          count=0;
        }
        else if (count==arr1.length && arr2[i][1] !== arr1[j][1]){
          arr1.push(arr2[i]);
          count=0;
          break;
        }

      }
    }
    function reverseList(arr1){
      var reversedArray = [];
      for (var k=0; k<arr1.length;k++){
        reversedArray.push([arr1[k][1],arr1[k][0]]);
      }
      return reversedArray;
    }
    var arr3 = reverseList(arr1);
    arr3.sort();
    finalArray = reverseList(arr3);

    return finalArray;
}

// Example inventory lists
var curInv = [
    [21, "Bowling Ball"],
    [2, "Dirty Sock"],
    [1, "Hair Pin"],
    [5, "Microphone"],
    [123,"Test"],
    [212,"zanax"]
];

var newInv = [
    [2, "Hair Pin"],
    [3, "Half-Eaten Apple"],
    [67, "Bowling Ball"],
    [7, "Toothpaste"],
    [13, "Papas"],
    [45, "Comida"]
];
