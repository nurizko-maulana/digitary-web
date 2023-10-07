import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col h-screen bg-cover bg-[url('/images/bg.png')]">
      <div className="flex justify-between px-8 pt-5sh sm:px-32 sm:pt-6">
        <div className="flex ">
          <Image
            className="mr-2"
            width={53}
            height={32}
            src="/logo.svg"
            alt={"logo"}
          />
          <div className="flex flex-col justify-center">
            <div className=" text-white text-2xl font-black font-['Poppins']">
              Digitary
            </div>
            <div className=" text-white text-[7.17px] font-normal font-['Poppins']">
              Creative Agency
            </div>
          </div>
        </div>
        <div className="flex ">
          <div className=" text-white text-[46.26px] font-bold font-['Poppins']">
            #
          </div>
          <div className="flex flex-col justify-center ">
            <div className="text-white text-lg leading-[1rem] font-bold font-['Poppins']">
              Temen
            </div>
            <div className=" text-white text-xl leading-[1rem] font-bold font-['Poppins']">
              Ngonten
            </div>
          </div>
        </div>
      </div>
    
      <div className="h-full pb-16 pt-32 sm:pb-16 flex flex-col justify-between">
        <div className="flex justify-center">
          <Image
            width={600}
            height={600}
            className=" ml-3 px-12 sm:px-0"
            src="/images/hero.png"
            alt={"hero"}
          />
        </div>
          <div className="flex flex-col justify-center px-2">
          <div className=" text-white text-center mb-8 text-3xl sm:text-5xl font-medium font-['Poppins']">
            We are creating something amazing
          </div>
          <div className=" text-white text-center text-xl sm:text-2xl font-normal font-['Poppins']">
            we will launch our website soon.
          </div>
        </div>
        <div className="flex flex-col items-center justify-center sm:flex-row sm:justify-center">
          <a href="https://bit.ly/AdminDigitary" target="_blank" className="w-[188.66px] h-[50px] pl-[42px] pr-[42px] py-[15px] mb-2  sm:mr-2 sm:mb-0 bg-blue-700 rounded-full justify-center items-start inline-flex">
            <div className="text-center text-white text-xl font-medium font-['Poppins'] leading-tight">
              Whatsapp
            </div>
          </a>
          <a href="/Price List Digitary.pdf" target="_blank" className="w-[161.66px] h-[50px] pl-[42px] pr-[42px] py-[15px]  rounded-full border border-blue-700 justify-center items-start inline-flex">
            <div className="text-center text-blue-700 text-xl font-medium font-['Poppins'] leading-tight">
              Pricelist
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}
