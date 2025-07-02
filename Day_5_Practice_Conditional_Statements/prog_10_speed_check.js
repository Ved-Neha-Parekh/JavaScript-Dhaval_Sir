console.log("--- Program 10: Speed Check ---");
let currentSpeed = 80;
let speedLimit = 70;

if (currentSpeed < speedLimit) {
  console.log(`Speed: ${currentSpeed} km/h -> Driving below the speed limit.`);
} else if (currentSpeed === speedLimit) {
  console.log(
    `Speed: ${currentSpeed} km/h -> Driving exactly at the speed limit.`
  );
} else if (currentSpeed > speedLimit && currentSpeed <= speedLimit + 10) {
  console.log(
    `Speed: ${currentSpeed} km/h -> Driving slightly over the speed limit. Warning!`
  );
} else {
  console.log(
    `🚨 Speed: ${currentSpeed} km/h -> Driving significantly over the speed limit. Fine may apply!`
  );
}
console.log("-------------------------------");
