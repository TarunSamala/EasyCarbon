import Image from "next/image";
import Link from "next/link";

import NavBar from "@/components/NavBar";
import List from "@/components/Listpage";
import Listpage from "@/components/Listpage";



export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212]">
      <NavBar/>
      <nav>

      </nav>
      <div class="container mt-24 mx-auto px-12 py-20">
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <div className="col-span-7 place-self-center text-center sm:text-left">
      <h1 className="text-white mb-4 text-4xl sm:text-4xl lg:text-6xl font-extrabold ">
        <span className="text-transparent bg-clip-text bg-gradient-to-r text-white"><span className="text-yellow-400">Easy Carbon:</span> <br></br>
        Revolutionizing <br>
        </br> Environmental <br>
        </br>
        Impact </span>
      </h1>
      <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl pt-10 ">
      Unlock the power of verified carbon credits with our innovative tokenization engine. Seamlessly manage your climate action journey through secure user accounts, transparent pricing, and compliant trading.
      </p>
      <div className="pt-10">
        <button className="px-6 py-5 w-full sm:w-fit rounded-md mr-4 bg-gradient-to-br from-yellow-400 via-yellow-300 to-yellow-500 hover:bg-slate-200 text-black">Get Started</button>
        <button className="px-6 py-5 w-full sm:w-fit rounded-md mr-4 bg-gradient-to-br bg-black text-white border-white bg-blend-normal">Learn More</button>
      </div>
      </div>
      <div className="col-span-5 place-self-center mt-4 lg:mt-0">
        <div className="">
      <Image
       src = "/Image/hero-navi.jpg"
       alt = "hero image"
       width={1000}
       height={0}
      />
      </div>
      </div>
      </div>
      <div className="mt-24 flex flex-col items-center justify-center py-20 ">
        <div className="text-yellow-400  text-6xl" >Add Carbon Credits</div>
        <div className="text-[#ADB7BE] pt-6 text-xl">Enter the amount of credits you want to add and upload the relevant certificates,<br/>the tokens will be credited to your wallet automatically</div>
        <div className="pt-8 ">
        <input className="rounded-md bg-transparent border-yellow-200 p-2" placeholder="Amount"></input></div>
      </div>

      </div>
    </main>
  );
}
