import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

toast.configure();

/**
 * statusHandler takes a successful json result and handles the UI according to
 * the values
 *
 * TODO: https://hackernoon.com/create-react-modal-using-reactjs-popup-m24m231v1
 *
 * @param {*} response
 */

const statusHandler = (response) => {
  console.log(response.status);
  if (response.status === "success") {
    toast.info("Your message has successfully been sent! 📫", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  } else {
    return null;
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
