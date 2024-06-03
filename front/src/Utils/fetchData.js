import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const fetchData = async (url, option = {}) => {
  try {
    const res = await fetch(import.meta.env.VITE_API + url, option);
    const data = await res.json();
    return data.data;
  } catch (error) {
    alert("Network Error!");
  }
};

// // toast
// <ToastContainer
//   position="top-center"
//   autoClose={2000}
//   limit={2}
//   hideProgressBar={false}
//   newestOnTop={false}
//   closeOnClick
//   rtl={false}
//   pauseOnFocusLoss
//   draggable
//   pauseOnHover
//   theme="light"
// />;
export default fetchData;
