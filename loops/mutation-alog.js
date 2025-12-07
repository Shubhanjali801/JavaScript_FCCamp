function mutation(arr) {
  let fstStr = arr[0].toLowerCase();
  let sndStr = arr[1].toLowerCase();

  for (let char of sndStr) {
    if (!fstStr.includes(char)) {
      return false;
    }
  }
  return true;
}


console.log(mutation(["hello", "hey"]));