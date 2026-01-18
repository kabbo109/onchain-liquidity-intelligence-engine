export function loadLiquidityPools() {
  console.log("Loading liquidity pools...");

  return [
    {
      pair: "TOKEN_A/TOKEN_B",
      reserveA: 500000,
      reserveB: 300000
    },
    {
      pair: "TOKEN_B/TOKEN_C",
      reserveA: 400000,
      reserveB: 600000
    }
  ];
}
