export function calculateSlippage(inputAmount, reserve) {
  const slippage = (inputAmount / reserve) * 100;
  return slippage.toFixed(2) + "%";
}
