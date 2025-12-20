function diffArray(arr1, arr2) {
  // Filter items in arr1 that are not in arr2
  const onlyInArr1 = arr1.filter(item => !arr2.includes(item));
  
  // Filter items in arr2 that are not in arr1
  const onlyInArr2 = arr2.filter(item => !arr1.includes(item));
  
  // Combine both results
  return [...onlyInArr1, ...onlyInArr2];
}

// method used: arr.filter(), arr.includes(), spreadOperator