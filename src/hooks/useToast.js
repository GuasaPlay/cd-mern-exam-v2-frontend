import { Slide, toast } from "react-toastify";

export const useToast = () => {
  const showToast = (message, type) => {
    toast(message, {
      bodyClassName: "custom-toast-body",
      position: "bottom-right",
      autoClose: 3000,
      hideProgressBar: true,
      pauseOnHover: false,
      transition: Slide,
      theme: "colored",
      closeButton: true,
      type,
    });
  };
  return { showToast };
};
