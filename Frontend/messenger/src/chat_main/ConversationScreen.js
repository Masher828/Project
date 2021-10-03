import React from "react";

const ConversationScreen = () => {
  return (
    <>
      <div className="drop-shadow-2xl w-12/12  h-16 mt-2 ml-2 mr-2 rounded-lg bg-green-200 "></div>
      <div className="flex flex-row h-full w-full">
        <div className="flex flex-col h-full w-full p-2">
          <div className="h-full flex flex-col w-full ">
            <div className="h-auto w-auto self-start p-1 flex ">
              <div className="h-18 w-10 mr-2 object-cover object-center rounded-full ">
                <img
                  className="object-contain rounded-full"
                  src="https://www.vhv.rs/dpng/d/426-4261485_free-user-avatar-icons-flat-customer-icon-png.png"
                />
              </div>
              <div>
                <div
                  className="bg-blue-400  p-3 rounded-lg max-w-lg text-white"
                  style={{ minWidth: "4rem" }}
                >
                  tt!
                </div>
              </div>
            </div>
            <div className="h-auto w-auto self-start p-1 flex ">
              <div className="h-18 w-10 mr-2 object-cover object-center rounded-full "></div>
              <div>
                <div
                  className="bg-blue-400  p-3 rounded-lg max-w-lg text-white"
                  style={{ minWidth: "4rem" }}
                >
                  A fully-managed, renderless dialog component jam-packed with
                  accessibility and keyboard features, perfect for building
                  completely custom modal and dialog windows for your next
                  application.
                </div>
                <div className="text-gray-400 text-sm ">10:50 pm</div>
              </div>
            </div>

            <div className="h-auto w-auto self-end p-1 flex ">
              <div>
                <div
                  className="bg-gray-200  p-3 rounded-lg max-w-lg "
                  style={{ minWidth: "4rem" }}
                >
                  Use rounded-none to remove an existing border radius from an
                  element. This is most commonly used to remove a border radius
                  that was applied at a smaller breakpoint.
                </div>
                <div className="text-gray-400 text-sm ">10:50 pm</div>
              </div>
              <div className="h-18 w-10 ml-2 object-cover object-center rounded-full ">
                <img
                  className="object-contain rounded-full"
                  src="https://www.kindpng.com/picc/m/664-6643641_avatar-transparent-background-user-icon-hd-png-download.png"
                />
              </div>
            </div>
          </div>
          <div className="h-16 w-full  p-2">
            <form className="flex w-full">
              <input
                type="text"
                className="w-5/6  h-10 border-gray-300 border-solid border rounded-full p-3  "
              />
              <input type="submit" value="Send" className="ml-3 p-2" />
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default ConversationScreen;
