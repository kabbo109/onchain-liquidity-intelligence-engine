export function monitorPools(pools) {
  console.log("Monitoring pool health...");

  pools.forEach(pool => {
    console.log("Pool:", pool.pair);
    console.log("Reserve A:", pool.reserveA);
    console.log("Reserve B:", pool.reserveB);
  });
}
