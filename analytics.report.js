export function generateReport(result) {
  console.log("----- Swap Analytics Report -----");
  console.log("From Token:", result.from);
  console.log("To Token:", result.to);
  console.log("Input Amount:", result.inputAmount);
  console.log("Estimated Output:", result.estimatedOutput);
  console.log("Price Impact:", result.priceImpact);
  console.log("--------------------------------");
}
