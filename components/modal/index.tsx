function Model({ isVisible, onClose, height, children }: any) {
  if (!isVisible) return null;
  const handleClose = (e: any) => {
    console.log(e.target.id);

    if (e.target.id === "wrapper") onClose();
  };
  return (
    <>
      <div className="modal" onClick={handleClose} id="wrapper">
        <div className="w-[600px] pt-20">
          <div
            className={`p-2 px-2 bg-secondary rounded-md lg:px-6 h-${height}`}
          >
            <div className="flex flex-col">
              <button
                onClick={() => onClose()}
                className="absolute text-gray-400 top-8 right-8"
              >
                <span className="sr-only">Close search</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M6 18L18 6M6 6l12 12"
                  ></path>
                </svg>
              </button>
            </div>
            {children}
          </div>
        </div>
      </div>
    </>
  );
}

export default Model;
