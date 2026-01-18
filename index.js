import { connectRPC } from "./rpc.client.js";
import { loadLiquidityPools } from "./liquidity.engine.js";
import { simulateSwap } from "./swap.simulator.js";
import { generateReport } from "./analytics.report.js";
import { NETWORK } from "./network.config.js";

console.log("Onchain Liquidity Intelligence Engine");
console.log("Connected Network:", NETWORK);

const provider = connectRPC();
const pools = loadLiquidityPools();

const simulationResult = simulateSwap(pools, "TOKEN_A", "TOKEN_B", 1000);

generateReport(simulationResult);
