import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const fetchData = async (url, option = {}) => {
  try {
  } catch (error) {
    toast.error(error);
  }
};

// toast 
<ToastContainer
  position="top-center"
  autoClose={2000}
  limit={2}
  hideProgressBar={false}
  newestOnTop={false}
  closeOnClick
  rtl={false}
  pauseOnFocusLoss
  draggable
  pauseOnHover
  theme="light"
/>;
export default fetchData