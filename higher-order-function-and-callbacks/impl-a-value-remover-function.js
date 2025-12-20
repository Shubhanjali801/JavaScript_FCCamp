function destroyer(arr, ...valuesToRemove) {
  // Use filter to keep only items not included in valuesToRemove
  return arr.filter(item => !valuesToRemove.includes(item));
}

// method Used: arr.filter(), arr.includes()