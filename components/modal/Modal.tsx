

function Modal({ isVisible, onClose, children }: any) {
  if (!isVisible) return null;
  const handleClose = (e: any) => {
    console.log(e.target.id);

    if (e.target.id === "wrapper") onClose();
  };
  return (
    <>
      <div
        className="absolute modal left-[20%] "
        onClick={handleClose}
        id="wrapper"
      >
        <div className="w-10/12 pt-10 ">
          <div className="p-2 px-2 bg-white rounded-md drop-shadow-2xl lg:px-6">
           {children}
          </div>
        </div>
      </div>
    </>
  );
}

export default Modal;
