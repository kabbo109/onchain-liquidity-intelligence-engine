export function simulateSwap(pools, fromToken, toToken, amount) {
  console.log("Simulating swap:", fromToken, "->", toToken);

  const selectedPool = pools[0];
  const priceImpact = (amount / selectedPool.reserveA) * 100;

  return {
    from: fromToken,
    to: toToken,
    inputAmount: amount,
    estimatedOutput: amount * 0.95,
    priceImpact: priceImpact.toFixed(2) + "%"
  };
}
