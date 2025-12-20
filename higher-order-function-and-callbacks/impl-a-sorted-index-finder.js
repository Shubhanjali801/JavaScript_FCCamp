function getIndexToIns(arr,num){
  arr.sort((a,b)=>a-b);
  if ((arr.length==0) || (arr[0]>=num)) {
    return 0;
  }
  else if (arr[arr.length-1] < num) {
    return arr.length;
  }
    return arr.findIndex(getIndex(num));
}
console.log(getIndexToIns([20, 3, 5], 19));

function getIndex(num){
  return (numCheck) => num <= numCheck;
}

// method used: arr.sort(), arr.findIndex()