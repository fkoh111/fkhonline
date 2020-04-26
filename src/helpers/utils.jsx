/**
 * Catch errors and all that jazz. Pass proper messages from the backend
 */

/**
 * postHandler takes an initialValues object from Formik, gives it a timestamp,
 * and posts it to the passed endpoint
 *
 * @param {*} data initialValues object from Formik, see the Formik API: https://jaredpalmer.com/formik/docs/api/formik#initialvalues-values
 * @param {*} endpoint endpoint you want to post to
 */
const postHandler = async (data, endpoint) => {
  try {
    data.timestamp = Date.now();
    const payload = JSON.stringify(data);
    const response = await fetch(endpoint, {
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
    if (!response.ok) {
      throw new Error("An error occured");
    }
  } catch (err) {
    throw new Error(err);
  }
};

export default postHandler;
