import Image from "next/image";
import Link from "next/link";

import NavBar from "@/components/NavBar";



export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212]">
      <NavBar/>
      <div class="container mt-24 mx-auto px-12 py-20">
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <div className="col-span-7 place-self-center text-center sm:text-left">
      <h1 className="text-white mb-4 text-4xl sm:text-4xl lg:text-6xl font-extrabold ">
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-900 via-blue-500 to-pink-300">Easy Carbon: <br></br>
        Revolutionizing <br>
        </br> Environmental <br>
        </br>
        Impact </span>
      </h1>
      <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl pt-10 ">
      Unlock the power of verified carbon credits with our innovative tokenization engine. Seamlessly manage your climate action journey through secure user accounts, transparent pricing, and compliant trading.
      </p>
      <div>
        <button className="px-6 py-5 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-blue-700 via-pink-300 to-pink-500 hover:bg-slate-200 text-black">Get Started</button>
      </div>
      </div>
      <div className="col-span-5 place-self-center mt-4 lg:mt-0">
        <div className="rounded-full bg-[#181818] w-100 h-500">
      <Image
       src = "/Image/hero-image.png"
       alt = "hero image"
       width={500}
       height={500}
      />
      </div>
      </div>
      </div>
      <div className="pt-10">
        
      </div>
      </div>
    </main>
  );
}
