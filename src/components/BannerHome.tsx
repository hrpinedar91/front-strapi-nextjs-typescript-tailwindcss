import Image from "next/image";
import React from "react";

const BannerHome = () => {
  return (
    <div className="grid grid-rows-3 md:grid-cols-3 md:grid-rows-1 mx-8 justify-center bg-white p-4 rounded-xl shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
      <div className="flex flex-col md:flex-row items-center justify-center gap-3">
        <Image src={"/truck.svg"} alt={""} width={"50"} height={"50"} />
        <span className="text-[#4B4AEF]">Domicilios en la ciudad</span>
      </div>
      <div className="flex flex-col md:flex-row items-center justify-center gap-3">
        <Image src={"/tools.svg"} alt={""} width={"50"} height={50} />
        <span className="text-[#FF9900]">Diagnostico rapido</span>
      </div>
      <div className="flex flex-col md:flex-row items-center justify-center gap-3">
        <Image src={"/price.svg"} alt={""} width={"50"} height={50} />
        <span className="text-[#03C12D]">Mejor precio</span>
      </div>
    </div>
  );
};

export default BannerHome;
