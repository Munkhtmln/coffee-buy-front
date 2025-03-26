import { Button } from "@/components/ui/button";
import { Coffee } from "lucide-react";

export default function Header() {
  return (
    <div>
      <div className="flex w-[100%] h-[56px] justify-between px-20 p-6">
        <h1 className=" flex  font-bold text-base gap-2">
          <Coffee /> Buy me coffee
        </h1>
        <Button className="bg-gray-300  cursor-pointer text-black">
          Log out
        </Button>
      </div>
      <div></div>
    </div>
  );
}
