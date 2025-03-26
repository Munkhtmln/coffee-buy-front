import { Coffee } from "lucide-react";

export default function Leftside() {
  return (
    <div className="bg-amber-400 w-[50%] flex flex-col max-h-[1150px] h-[100vh] justify-center items-center relative">
      <h1 className="absolute left-10 flex top-10 font-bold text-base gap-2">
        <Coffee /> Buy me coffee
      </h1>
      <div className="flex justify-center items-center flex-col">
        <div className="w-[240px] h-[240px] flex justify-center bg-amber-600 rounded-full items-end overflow-hidden">
          <img className="" src="./cup.png" alt="" />
        </div>
        <div className="flex flex-col justify-center  items-center">
          <h1 className="align-text-top flex font-bold text-2xl ">
            Fund your creative work{" "}
          </h1>
          <p className="flex  align-middle font-normal text-base">
            Accept support. Start a membership. Setup a shop. It’s easier <br />
            than you think.
          </p>
        </div>
      </div>
    </div>
  );
}
