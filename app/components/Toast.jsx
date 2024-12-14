import { toast } from "react-toastify";

const notifySuccess = () => {
  toast.success("Movie added to the list", {
    className: "toast",
    position: "top-right",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "colored",
  });
};

const notifyError = (message) => {
  toast.error("Movie already in the list", {
    className: "toast",
    position: "top-right",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "colored",
  });
};

// const notifySuccessRemoved = () => {
//   toast.success("Data successfully cleared", {
//     className: "toast",
//     position: "top-right",
//     autoClose: 3000,
//     hideProgressBar: false,
//     closeOnClick: true,
//     pauseOnHover: true,
//     draggable: true,
//     progress: undefined,
//     theme: "colored",
//   });
// };

export { notifySuccess, notifyError };