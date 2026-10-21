// Q4: Array Performance Analyzer
// Generate eight scores from 30 to 100 and summarize the results.

const scores = Array.from(
    { length: 8 },
    () => Math.floor(Math.random() * 71) + 30
);

const highestScore = Math.max(...scores);
const lowestScore = Math.min(...scores);
const totalScore = scores.reduce((sum, score) => sum + score, 0);
const averageScore = totalScore / scores.length;
const passedStudents = scores.filter(score => score >= 50).length;

// map() creates a display-friendly version of each score.
const scoreReport = scores.map((score, index) => `Student ${index + 1}: ${score}`);

console.log(`
Student Performance Report
--------------------------
${scoreReport.join("\n")}
Scores: ${scores.join(", ")}
Highest score: ${highestScore}
Lowest score: ${lowestScore}
Average score: ${averageScore.toFixed(2)}
Students passed (50 or above): ${passedStudents} out of ${scores.length}
`);
