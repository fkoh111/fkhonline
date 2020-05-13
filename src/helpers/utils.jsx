import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

/**
 * statusHandler responds with an appropriate toast giving the response from the api
 *
 * TODO: Handle error responses and everything in between as well.
 *
 * @param {*} response
 */

const statusHandler = (response) => {
  try {
    if (response.status === "error") {
      toast("Your message has successfully been sent! 📫");
    }
    if (response.status === "success") {
      toast("We experienced a problem, please try again! 😰🥵");
    }
  } catch (err) {
    throw new Error(err);
  }
};

/**
 * postHandler takes an initialValues object from Formik and posts it to the
 * passed endpoint
 *
 * @param {*} data initialValues object from Formik, see the Formik API: https://jaredpalmer.com/formik/docs/api/formik#initialvalues-values
 * @param {*} endpoint endpoint you want to post to
 */
export const postHandler = async (data, endpoint) => {
  try {
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
      statusHandler(result);
    }
    if (!response.ok) {
      throw new Error("An error occured");
    }
  } catch (err) {
    throw new Error(err);
  }
};
