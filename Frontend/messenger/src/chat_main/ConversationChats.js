import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import * as ActionCreators from "../redux/messages/actionCreator";

const user1 = 11;
const user2 = 12;
let lastchatdate = "";
let user1_lasttime = "";
let user2_lasttime = "";
let user1_lastkey = "";

const ConversationChats = () => {
  const dispatcher = useDispatch();
  const store = useSelector((store) => store.message.messages);
  const AC = bindActionCreators(ActionCreators, dispatcher);

  //console.log(store.messages);
  // const a = useSelector((state) => state.messages);
  //console.log(store);
  const Chats = store.map((msg, index) => {
    let showTime = true;
    if (index-1 < store.length-1) {
      let next_item = store[index];
      if (next_item.from == msg.from && next_item.time == msg.time) {
      showTime = false;
      }
    }

    //console.log(next);
    if (msg.from === user1) {
      return (
        <div key={msg.id}>
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
              <div className="text-gray-400 text-sm ">10:50 pm</div>
            </div>
          </div>
        </div>
      );
    } else if (msg.from === user2) {
      return (
        <div key={msg.id}>
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
      );
    }
  });

  return (
    <>
      {Chats}
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
            accessibility and keyboard features, perfect for building completely
            custom modal and dialog windows for your next application.
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
            element. This is most commonly used to remove a border radius that
            was applied at a smaller breakpoint.
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

      <div className="w-full m-3" style={{ textAlign: "center" }}>
        <button
          type="button"
          className=" align-middle px-4 py-2 text-sm font-medium text-blue-900 bg-blue-100 border border-transparent rounded-md hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
        >
          Today
        </button>
      </div>
    </>
  );
};

export default ConversationChats;
