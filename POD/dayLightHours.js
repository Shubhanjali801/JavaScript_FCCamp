function daylightHours(latitude) {
  // Table of latitude to daylight hours
  const table = {
    "-90": 24,
    "-75": 23,
    "-60": 21,
    "-45": 15,
    "-30": 13,
    "-15": 12,
     "0": 12,
     "15": 11,
     "30": 10,
     "45": 9,
     "60": 6,
     "75": 2,
     "90": 0
  };

  // Convert keys to numbers
  const latitudes = Object.keys(table).map(Number);

  // Find the closest latitude
  let closestLat = latitudes.reduce((prev, curr) => 
    Math.abs(curr - latitude) < Math.abs(prev - latitude) ? curr : prev
  );

  return table[closestLat];
}

// Examples:
console.log(daylightHours(-33)); // → 13 (closest to -30)
console.log(daylightHours(47));  // → 9 (closest to 45)
console.log(daylightHours(89));  // → 0 (closest to 90)
console.log(daylightHours(-82)); // → 24 (closest to -90)