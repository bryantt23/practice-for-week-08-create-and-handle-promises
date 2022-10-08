function stretch(timeLeft) {
  // refactor your code from phase 1
  // Your code here
  const remainingTime = timeLeft - 1000;
  if (remainingTime < 0) {
    throw Error('you dont have enough time to stretch');
  }
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(remainingTime);
      console.log('done stretching');
    }, 1000);
  });
}

function runOnTreadmill(timeLeft) {
  // refactor your code from phase 1
  // Your code here
  const remainingTime = timeLeft - 500;
  if (remainingTime < 0) {
    throw Error('you dont have enough time to run on treadmill');
  }
  return new Promise(resolve => {
    setTimeout(() => {
      console.log('done running on treadmill');
      resolve(remainingTime);
    }, 500);
  });
}

function liftWeights(timeLeft) {
  // refactor your code from phase 1
  // Your code here

  const remainingTime = timeLeft - 2000;
  if (remainingTime < 0) {
    throw Error('you dont have enough time to lift weights');
  }
  return new Promise(resolve => {
    setTimeout(() => {
      console.log('done lifting weights');
      resolve(remainingTime);
    }, 2000);
  });
}

function workout(totalTime) {
  // refactor your code from phase 1
  // Your code here
  stretch(totalTime)
    .then(runOnTreadmill)
    .then(liftWeights)
    .then(res =>
      console.log(`done working out with ${res / 1000} seconds left`)
    )
    .catch(e => console.log(e));
}

/* ============================ TEST YOUR CODE ============================

Comment in each invocation of your workout function below and run the file
(node phase-2.js) to see if you get the expected output.
*/

// workout(500);
// should print out the following:
// Error:  you dont have enough time to stretch

// workout(1000);
// should print out the following:
// done stretching
// Error:  you dont have enough time to run on treadmill

// workout(2000);
// should print out the following:
// done stretching
// done running on treadmill
// Error:  you dont have enough time to lift weights

workout(4000);
// should print out the following:
//   done stretching
//   done running on treadmill
//   done lifting weights
//   done working out with 0.5 seconds left
