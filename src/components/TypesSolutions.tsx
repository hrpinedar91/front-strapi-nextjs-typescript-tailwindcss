import React from "react";
import Image from "next/image";

const TypesSolutions = () => {
  return (
    <div className="grid grid-cols-6 gap-4 mt-8 text-center font-bold">
      <div className="bg-white grid grid-row justify-center p-3 rounded-md">
        <Image
          src={"/altavoces.png"}
          alt="img_home"
          width={"120"}
          height={"120"}
        />
        <h6>Altavoces</h6>
      </div>
      <div className="bg-white grid grid-row justify-center p-3 rounded-md">
        <Image
          src={"/bateria.png"}
          alt="img_home"
          width={"120"}
          height={"120"}
        />
        <h6>Bateria</h6>
      </div>
      <div className="bg-white grid grid-row justify-center p-3 rounded-md">
        <Image src={"/carga.png"} alt="img_home" width={"120"} height={"120"} />
        <h6>Puerto de carga</h6>
      </div>
      <div className="bg-white grid grid-row justify-center p-3 rounded-md">
        <Image
          src={"/display_broken.png"}
          alt="img_home"
          width={"120"}
          height={"120"}
        />
        <h6>Pantalla rota</h6>
      </div>
      <div className="bg-white grid grid-row justify-center p-3 rounded-md">
        <Image
          src={"/microfono.png"}
          alt="img_home"
          width={"120"}
          height={"120"}
        />
        <h6>Microfono</h6>
      </div>
      <div className="bg-white grid grid-row justify-center p-3 rounded-md">
        <Image
          src={"/vibrador.png"}
          alt="img_home"
          width={"120"}
          height={"120"}
        />
        <h6>Vibrador</h6>
      </div>
    </div>
  );
};

export default TypesSolutions;
