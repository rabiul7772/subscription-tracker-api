// const fetch = global.fetch || require('node-fetch');

// async function checkRateLimit() {
//   console.log('Starting 20 requests to http://localhost:5500/ ...');
//   let successCount = 0;
//   let failCount = 0;
//   let rateLimitCount = 0;

//   for (let i = 1; i <= 20; i++) {
//     try {
//       const res = await fetch('http://localhost:5500/');
//       if (res.ok) {
//         successCount++;
//         console.log(`Request ${i}: OK (${res.status})`);
//       } else {
//         failCount++;
//         console.log(`Request ${i}: Failed (${res.status}) - ${res.statusText}`);
//         if (res.status === 429) rateLimitCount++;
//       }
//     } catch (err) {
//       console.error(`Request ${i}: Error - ${err.message}`);
//     }
//     // Small delay to ensure sequential processing but fast enough to hit rate limit
//     await new Promise(r => setTimeout(r, 100));
//   }

//   console.log('--- Summary ---');
//   console.log(`Total: 20`);
//   console.log(`Success: ${successCount}`);
//   console.log(`Failed: ${failCount}`);
//   console.log(`Rate Limited (429): ${rateLimitCount}`);
// }

// checkRateLimit();
