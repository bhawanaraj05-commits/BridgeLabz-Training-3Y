// Q5: Boolean Logic Access System
// The home is secure only when every required condition is true.

let isDoorLocked = true;
let isWindowClosed = true;
let isAlarmOn = true;
let isOwnerInside = true;

function checkSecurity() {
    // || and ! help detect any condition that makes the home unsafe.
    if (!isAlarmOn || !isDoorLocked || !isWindowClosed || !isOwnerInside) {
        console.log("Unsafe");
    } else if (isAlarmOn && isDoorLocked && isWindowClosed && isOwnerInside) {
        console.log("Secure");
    }
}

checkSecurity(); // Secure

// Try a different situation to check the result.
isWindowClosed = false;
checkSecurity(); // Unsafe
