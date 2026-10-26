// Q10: Departmental Employee Evaluator
// Give each department a performance label based on its score.

const departments = [
    ["HR", 72],
    ["Finance", 88],
    ["Tech", 95],
    ["Support", 63]
];

for (const department of departments) {
    const name = department[0];
    const score = department[1];
    let rating;

    if (score >= 90) {
        rating = "Excellent";
    } else if (score >= 75) {
        rating = "Good";
    } else if (score >= 60) {
        rating = "Average";
    } else {
        rating = "Needs Improvement";
    }

    console.log(`${name}: ${score} points — ${rating}`);
}
