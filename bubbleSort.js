function bubbleSort(arr) {
  // set current to an initial value;
  var current = arr[0];
  var length = arr.length;
  console.log('Array contains: ' + length);
  var next;
  var previous;
  for(var j = 0; j <= arr.length-1; j++) {
    for(var i = 0; i <= (arr.length-1)-1; i++) {
      console.log("index is: " + i);
      console.log("comparing " + arr[i] + " and " + arr[i+1] +"\n");

      if(arr[i] > arr[i+1]) {
        console.log("value at " + arr[i] + " is greater than " + arr[i+1] +"\n");
        var temp = arr[i];
        arr[i] = arr[i+1];
        arr[i+1] = temp;
        console.log(arr);
      } else if (arr[i] < arr[i+1]) {
        console.log("value at " + arr[i] + " is less than " + arr[i+1] +"\n");
        console.log(arr);

        continue;
      } else {
        console.log("value at " + arr[i] + " is equal to " + arr[i+1] +"\n");
        console.log(arr);

        continue;
      }
      console.log('comparing next set of values\n')
    } // end of internal for loop

  } // end of external for loop
  return arr;
}
