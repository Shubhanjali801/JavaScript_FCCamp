function whatIsInAName(collection, source) {
  // Get the keys from the source object
  const sourceKeys = Object.keys(source);

  // Use filter to keep only objects that match all key-value pairs
  return collection.filter(obj =>sourceKeys.every(key => obj.hasOwnProperty(key) && obj[key] === source[key]));
}

// method Used: Object.keys(), arr.filter(), arr.every(), obj.hasOwnProperty()