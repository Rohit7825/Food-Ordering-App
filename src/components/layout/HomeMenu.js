import Image from "next/image";
import MenuItem from "../menu/MenuItem";
import SectionHeader from "./SectionHeader";

export default function HomeMenu() {
  return (
    <section>
      <div className=" absolute left-0 right-0 justify-start w-full">
        <div className=" absolute text-left left-0 -top-[70px] -z-10">
          <Image src={"/sallad1.png"} alt={"sallad"} width={109} height={189} />
        </div>
        <div className="absolute -top-[100px] right-0 -z-10">
          <Image src={"/sallad2.png"} alt={"sallad"} width={107} height={195} />
        </div>
      </div>
      <SectionHeader subHeader={"Check out"} mainHeader={"Menu"} />
      <div className="grid grid-cols-3 gap-4">
        {" "}
        <MenuItem />
        <MenuItem />
        <MenuItem />
        <MenuItem />
        <MenuItem />
        <MenuItem />
      </div>
    </section>
  );
}
