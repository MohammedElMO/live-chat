import DislikeOutline from "../svgs/DislikeOutline";
import DoneOutline from "../svgs/DoneOutline";
import Mask from "../svgs/Mask";

type Props = {
  chatText: string;
  chatDate: Date;
  username: string;
};
const formater = (date: Date) => {
  return new Intl.DateTimeFormat("en-US").format(date);
};

function ChatBoxDisplayer({ chatText, chatDate, username }: Props) {
  return (
    <section className="font-roboto ">
      <section className=" bg-white flex flex-col gap-2 px-3 py-1 rounded-lg border ">
        <div className="text-sm flex gap-4 my-2 text-wrap font-light  text-[#000000]  ">
          <span>{username}</span>
          <span>{username + "@gmail.com"}</span>
          <span>{username}</span>
        </div>

        <div className="content flex items-center justify-between text-lg font-semibold leading-8">
          <p>{chatText}</p>

          <div className="flex  min-w-max mr-4   gap-10 ">
            <div className="bg-[#EFEFEF]  cursor-pointer px-3 py-4 rounded-xl shadow-sm">
              <Mask isActive={false} />
            </div>
            <div className="bg-[#EFEFEF] cursor-pointer  px-3 py-4 rounded-xl shadow-sm">
              <DoneOutline />
            </div>
            <div className="bg-[#EFEFEF] cursor-pointer  px-3 py-4 rounded-xl shadow-sm">
              <DislikeOutline />
            </div>
          </div>
        </div>

        <div className="my-3 text-[#989898] font-bold">
          <span>{formater(chatDate)}</span>
        </div>
      </section>
    </section>
  );
}

export default ChatBoxDisplayer;
