import { useCallback } from "react";
import Close from "../../../assets/Icons/Home/Modal/Close";
import { motion } from "framer-motion";
const Modal = ({
  isOpen,
  onClose,
  onSubmit,
  title,
  body,
  actionLabel,
  footer,
  disabled,
}) => {
  const modalVariants = {
    initial: {
      y: 10,
      opacity: 0.5,
    },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.1,
        ease: "easeIn",
      },
    },
  };
  const handleClose = useCallback(() => {
    if (disabled) {
      return;
    }

    onClose();
  }, [onClose, disabled]);

  const handleSubmit = useCallback(() => {
    if (disabled) {
      return;
    }

    onSubmit();
  }, [onSubmit, disabled]);

  if (!isOpen) {
    return null;
  }

  console.log(body);
  return (
    <>
      <div
        className="
            justify-center 
            items-center 
            flex 
            overflow-x-hidden 
            overflow-y-auto 
            fixed 
            inset-0 
            z-[101] 
            outline-none 
            focus:outline-none
            bg-neutral-800
            bg-opacity-30
     
          "
      >
        <motion.div
          initial="initial"
          animate="animate"
          variants={modalVariants}
          className=" relative w-full md:w-[562px] lg:w-[752px] mx-auto lg:max-w-3xl h-full lg:h-auto"
        >
          {/*content*/}
          <div
            className="
             overflow-y-scroll
              h-full
              lg:h-auto
              border-0 
              rounded-lg 
              shadow-lg 
              relative 
              flex 
              flex-col 
              w-full 
              bg-white 
              outline-none 
              focus:outline-none
              "
          >
            {/*header*/}

            {/*body*/}
            <div className="relative p-[24px] flex-auto">
              <div
                className="
                absolute
                flex 
                right-[20px] top-[20px]
                items-center 
                justify-between 
                
                rounded-t
                "
              >
                <button
                  className="
                  
                    ml-auto
                    border-0 
                    text-white 
                    hover:opacity-70
                    transition
                  "
                  onClick={() => onClose()}
                >
                  <Close />
                </button>
              </div>
              {body}
            </div>
            {/*footer*/}
            <div className="flex flex-col gap-2">
              <button
                disabled={disabled}
                label={actionLabel}
                secondary
                fullWidth
                large
                onClick={handleSubmit}
              />
              {footer}
            </div>
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default Modal;
