/* eslint-disable react/react-in-jsx-scope */
import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="grid grid-cols-2">
        <div>
          <h1 className="text-3xl pt-24 pb-8 font-bold text-bluep">
            Encuentra los Mejores Accesorios para tu Celular y Servicio Técnico
            Garantizado
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum vero
            quas harum? Deserunt fuga ducimus et tempore illo, aliquid rem illum
            vitae, sit natus quasi sunt commodi minus modi ullam.
          </p>
        </div>
        <div className="grid justify-center">
          <Image
            className="pt-8"
            src={"/img_home.svg"}
            alt="img_home"
            width={"400"}
            height={"400"}
          />
        </div>
      </div>
      <div className="grid grid-cols-3 justify-center">
        <div className="flex items-center justify-center gap-3">
          <Image src={"/truck.svg"} alt={""} width={"50"} height={"50"} />
          <span>Domicilios en la ciudad</span>
        </div>
        <div className="flex items-center justify-center gap-3">
          <Image src={"/tools.svg"} alt={""} width={"50"} height={50} />
          <span>Diagnostico rapido</span>
        </div>
        <div className="flex items-center justify-center gap-3">
          <Image src={"/price.svg"} alt={""} width={"50"} height={50} />
          <span>Mejor precio</span>
        </div>
      </div>
    </>
  );
}
