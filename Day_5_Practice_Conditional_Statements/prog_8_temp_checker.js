console.log("--- Program 8: Temperature Check ---");
let temperature = 25;

if (temperature < 10) {
  console.log(`Temperature: ${temperature}°C -> It's very cold.`);
} else if (temperature >= 10 && temperature < 20) {
  console.log(`Temperature: ${temperature}°C -> It's cold.`);
} else if (temperature >= 20 && temperature < 30) {
  console.log(`Temperature: ${temperature}°C -> It's mild.`);
} else if (temperature >= 30) {
  console.log(`Temperature: ${temperature}°C -> It's hot.`);
} else {
  console.log(`Temperature: ${temperature}°C -> Invalid temperature value.`);
}

console.log("-------------------------------------");
