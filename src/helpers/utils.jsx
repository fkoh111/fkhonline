/**
 * Write some commments for the function
 *
 * Potentially add endpoint as param as well.
 */

const postHandler = (data) => {
  data.timestamp = Date.now();
  const payload = JSON.stringify(data);
  console.log(payload);
};

export default postHandler;
