function truthCheck(collection, pre) {
  return collection.every(obj => Boolean(obj[pre]));
}

console.log(
  truthCheck(
    [
      { name: "Quincy", role: "Founder", isBot: false },
      { name: "Naomi", role: "", isBot: false },
      { name: "Camperbot", role: "Bot", isBot: true }
    ],
    "isBot"
  )
);
// Output: false (because false is not truthy)

console.log(
  truthCheck(
    [
      { name: "Quincy", role: "Founder", isBot: true },
      { name: "Naomi", role: "Engineer", isBot: true },
      { name: "Camperbot", role: "Bot", isBot: true }
    ],
    "isBot"
  )
);
// Output: true

console.log(
  truthCheck(
    [
      { name: "Quincy", role: "Founder" },
      { name: "Naomi", role: "" },
      { name: "Camperbot", role: "Bot" }
    ],
    "role"
  )
);
// Output: false (because "" is falsy)

// method used: arr.every()