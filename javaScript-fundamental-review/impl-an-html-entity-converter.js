function convertHTML(str) {
  // Create a mapping object
  const htmlEntities = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&apos;"
  };

  // Use regex to find all special characters and replace them
  return str.replace(/[&<>"']/g, match => htmlEntities[match]);
}

// Example tests
console.log(convertHTML("Dolce & Gabbana")); 

console.log(convertHTML("<>")); 
// Output: &lt;&gt;
