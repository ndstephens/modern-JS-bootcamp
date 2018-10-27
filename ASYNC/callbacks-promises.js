//* A BASIC CALLBACK
const getDataCallback = (num, callback) => {
  setTimeout(() => {
    if (typeof num === 'number') {
      callback(undefined, num * 2);
    } else {
      callback('Callback Error: input was not a number');
    }
  }, 2000);
};

getDataCallback(2, (err, data) => {
  if (err) {
    console.log(err);
  } else {
    //* callback nesting/chaining...(CALLBACK HELL)
    getDataCallback(data, (err, data) => {
      if (err) {
        console.log(err);
      } else {
        console.log(`Callback data: ${data}`);
      }
    });
  }
});

//? --------------------------------------------------------
//
//* A BASIC PROMISE
const getDataPromise = (num) =>
  new Promise((resolve, reject) => {
    // this is where you perform your async process, such as an AJAX request
    setTimeout(() => {
      //* 'resolve' sends the data to the function in the '.then()' statement
      typeof num === 'number' ? resolve(num * 2) : reject('Promise Error: input was not a number');
    }, 2000);
  });

//* CRAPPY WAY OF NESTING PROMISES
getDataPromise(3).then(
  //* the data from the promise is sent here and used however you want
  (data) => {
    getDataPromise(data).then(
      (data) => {
        console.log(`Promise data: ${data}`);
      },
      (err) => {
        console.log(err);
      }
    );
  },
  (err) => {
    console.log(err);
  }
);

//* PROMISE CHAINING...BETTER!!!
getDataPromise(10)
  .then((data) => {
    return getDataPromise(data);
  })
  .then((data) => {
    console.log(`Promise Chaining data: ${data}`);
  })
  .catch((err) => {
    //* use '.catch()' for single error handler
    console.log(err);
  });
