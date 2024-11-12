import DislikeOutline from "../svgs/DislikeOutline";
import DoneOutline from "../svgs/DoneOutline";
import Mask from "../svgs/Mask";

type Props = {
  chatText: string;
  chatDate: Date;
  username: string;
};
const formater = (d: Date) => {
  const [time, date] = new Intl.DateTimeFormat("en-US", {
    dateStyle: "short",
    timeStyle: "short",
    timeZone: "Africa/Casablanca",
  })
    .format(d)
    .split(/\s/);
  return [date, time];
};

function ChatBoxDisplayer({ chatText, chatDate, username }: Props) {
  const [time, date] = formater(chatDate);
console.log(time,date)
  return (
    <section className="font-roboto ">
      <section className=" bg-white flex flex-col gap-2 px-3 py-1 rounded-lg border ">
        <div className="text-sm flex gap-4 my-2 text-wrap font-light  text-[#000000]  ">
          <span>{username}</span>
          <span>{username + "@gmail.com"}</span>
          <span>{username}</span>
        </div>

        <div className="content flex items-center justify-between text-lg font-semibold leading-8">
          <p className="text-base">{chatText}</p>

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
          <span className="flex items-center gap-3 text-sm">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#989898"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-calendar size-4"
            >
              <path d="M8 2v4" />
              <path d="M16 2v4" />
              <rect width="18" height="18" x="3" y="4" rx="2" />
              <path d="M3 10h18" />
            </svg>
            <span>
              {time}
              {" · "}
              {date.replace(',','')}
            </span>
          </span>
        </div>
      </section>
    </section>
  );
}

export default ChatBoxDisplayer;
