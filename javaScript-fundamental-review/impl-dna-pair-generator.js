function pairElement(str) {
  // Define the pairing rules
  const pairs = {
    "A": "T",
    "T": "A",
    "C": "G",
    "G": "C"
  };

  // Split the string into individual bases
  return str.split("").map(base => [base, pairs[base]]);
}

// Example usage:
console.log(pairElement("ATCG"));
// Output: [["A","T"], ["T","A"], ["C","G"], ["G","C"]]

console.log(pairElement("GCG"));
// Output: [["G","C"], ["C","G"], ["G","C"]]