const getResult = (idArray, asyncCallback, resultCallback) => {
  if (
    !idArray ||
    !Array.isArray(idArray) ||
    typeof asyncCallback !== "function" ||
    typeof resultCallback !== "function"
  )
    return; // not valid args

  let arrOfPromise = [];

  idArray.forEach((item) => {
    arrOfPromise = [
      ...arrOfPromise,
      new Promise(async (resolve, reject) => {
        try {
          resolve(await asyncCallback(item));
        } catch (err) {
          reject(err);
        }
      }),
    ];
  });

  Promise.all(arrOfPromise)
    .then(resultCallback)
    .catch((err) => {
      console.error(err);
    });
};

module.exports = {
  getResult,
};
