import Header from "@/components/layout/Header";
import Hero from "@/components/layout/Hero";
import HomeMenu from "@/components/layout/HomeMenu.js";
import SectionHeader from "@/components/layout/SectionHeader";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <HomeMenu />
      <section className="text-center my-16">
        {" "}
        <SectionHeader subHeader={"Our story"} mainHeader={"About us"} />
        <div className=" text-gray-500 max-w-md mx-auto mt-4 flex flex-col gap-5">
          <p className="">
            {" "}
            uwetfw f shgfjhs srjhfbsjhf fbsahj fs sajhf bsjhf jshd sfshb
            fsjhdfss s fshjdbvjhsdf sfsdhf s fsdjhf sdfvbsdhj sfhsb djh sd
            fjhszdv uwetfw f shgfjhs srjhfbsjhf fbsahj fs sajhf bsjhf jshd sfshb
            fsjhdfss s fshjdbvjhsdf{" "}
          </p>
          <p className="">
            {" "}
            uwetfw f shgfjhs srjhfbsjhf fbsahj fs sajhf bsjhf jshd sfshb
            fsjhdfss s fshjdbvjhsdf sfsdhf s fsdjhf sdfvbsdhj sfhsb djh sd
            fjhszdv uwetfw f shgfjhs srjhfbsjhf fbsahj fs sajhf bsjhf jshd sfshb
            fsjhdfss s fshjdbvjhsdf{" "}
          </p>
          <p>
            uwetfw f shgfjhs srjhfbsjhf fbsahj fs sajhf bsjhf jshd sfshb
            fsjhdfss s fshjdbvjhsdf
          </p>
        </div>
      </section>
      <section className="text-center my-8">
        <SectionHeader subHeader={"Don't hesitate"} mainHeader={"Contact us"} />
        <div className="mt-8">
          <a
            className="text-4xl underline text-gray-500"
            href="tel:18001800161"
          >
            {" "}
            1800 1800 161
          </a>
        </div>
      </section>
      <footer className="border-t p-8 text-center text-gray-500 mt-16">
        &copy;2024 All rights reserved
      </footer>
    </>
  );
}
