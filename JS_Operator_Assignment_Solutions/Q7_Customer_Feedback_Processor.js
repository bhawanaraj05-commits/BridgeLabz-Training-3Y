// Q7: Customer Feedback Processor
// Count the words in a review and check for negative keywords.

const feedback = "Great product! Fast delivery and amazing sound quality!";
const wordCount = feedback.trim().split(/\s+/).length;
const feedbackLowercase = feedback.toLowerCase();

const hasNegativeWords =
    feedbackLowercase.includes("bad") ||
    feedbackLowercase.includes("poor");

console.log(`Feedback: ${feedback}`);
console.log(`Word count: ${wordCount}`);

if (hasNegativeWords) {
    console.log("Needs Improvement");
} else {
    console.log("Positive Feedback");
}
