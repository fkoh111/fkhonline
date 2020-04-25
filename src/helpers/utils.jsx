/**
 * Write some commments for the function
 *
 * Potentially add endpoint as param as well.
 *
 * Catch errors and all that jazz. Pass proper messages from the backend
 */

const postHandler = async (data) => {
  data.timestamp = Date.now();
  const payload = JSON.stringify(data);
  /*console.log(payload);*/
  const response = await fetch(`http://localhost:5000/api/form/contact`, {
    method: "POST",
    body: payload,
    headers: {
      "Content-Type": "application/json",
      Accept: "text/plain",
    },
  });
  if (response.ok) {
    const result = await response.json();
    console.log(result);
    return result;
  }
};

export default postHandler;
