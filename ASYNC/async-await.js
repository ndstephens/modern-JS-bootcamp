//* ADDING ASYNC CAUSES A FUNCTION TO RETURN A PROMISE !!!

//* by adding 'async' this function now returns a Promise with '12' going to its 'resolve' function (without 'async' it would simply return 12, not a promise)

//* ASYNC
const processStuff = async () => {
  return 12;
};

processStuff()
  .then((data) => {
    console.log(data); // 12
  })
  .catch((err) => {
    console.log(`Error: ${err}`);
  });

//
//? --------------------------------------------------
//* ASYNC / AWAIT

//* a basic promise to use in Async/Await example
const getDataPromise = (num) =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      typeof num === 'number' ? resolve(num * 2) : reject('Input was not a number');
    }, 2000);
  });

const processData = async () => {
  let data = await getDataPromise(2);
  data = await getDataPromise(data);
  return data; // 8
};

processData()
  .then((data) => {
    console.log(data); // 8
  })
  .catch((err) => {
    console.log(`Error: ${err}`);
  });
