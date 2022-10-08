function stretch() {
  // Your code here
  return new Promise(resolve => {
    setTimeout(() => {
      resolve();
      console.log('done stretching');
    }, 1000);
  });
}

function runOnTreadmill() {
  // Your code here
  return new Promise(resolve => {
    setTimeout(() => {
      console.log('done running on treadmill');
      resolve();
    }, 500);
  });
}

function liftWeights() {
  // Your code here
  return new Promise(resolve => {
    setTimeout(() => {
      console.log('done lifting weights');
      resolve();
    }, 2000);
  });
}

async function workout() {
  // Your code here
  await stretch();
  await runOnTreadmill();
  await liftWeights();
}

/* ============================ TEST YOUR CODE ============================

Run the file (`node phase-1.js`) and check your output against the expected
output.
*/

workout();
// should print out the following:
// done stretching
// done running on treadmill
// done lifting weights
// done working out
