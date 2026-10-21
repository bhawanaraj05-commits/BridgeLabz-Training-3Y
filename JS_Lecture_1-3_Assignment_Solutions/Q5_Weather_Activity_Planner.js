// Q5: Weather Activity Planner
// Suggest an activity using temperature, rain, and wind speed.

const temperature = 22;
const isRaining = false;
const windSpeed = 12;

if (isRaining) {
    console.log("Stay indoors with hot coffee.");
} else if (temperature > 35) {
    console.log("Go swimming.");
} else if (temperature < 15 && windSpeed > 20) {
    console.log("Too cold and windy — stay home.");
} else {
    console.log("Perfect day for a walk.");
}

// Example of combining logical operators:
// It is comfortable for a walk if it is not raining and either
// the temperature is moderate or the wind is calm.
const goodForWalk = !isRaining && (temperature >= 15 || windSpeed <= 20);
console.log(`Conditions suitable for a walk: ${goodForWalk}`);
