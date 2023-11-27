/* eslint-disable react/react-in-jsx-scope */
import BannerHome from "@/components/BannerHome";
import TypesSolutions from "@/components/TypesSolutions";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Acordion from "@/components/Acordion";
import CardComponent from "@/components/CardComponent";

export default function Home() {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 p-6">
        <div>
          <h1 className="text-3xl md:pt-24 pb-8 font-bold text-bluep">
            Encuentra los Mejores Accesorios para tu Celular y Servicio Técnico
            Garantizado
          </h1>
          <p>
            Servicio técnico garantizado, que te brinda un diagnóstico rápido y
            el mejor precio. No importa cuál sea el problema de tu equipo,
            nosotros lo solucionamos.
          </p>
          <Button className="bg-[#07EF99] mt-8 rounded-xl text-bluep">
            Consultar Servicio
          </Button>
        </div>
        <div className="grid justify-center">
          <Image
            className="pt-8"
            src={"/img_desktop.svg"}
            alt="img_home"
            width={"400"}
            height={"400"}
          />
        </div>
      </div>
      <div className="pt-8">
        <BannerHome />
      </div>

      <div className="grid grid-cols-2 justify-center mt-8 py-8">
        <div className="flex justify-center items-center">
          <Image
            src={"/process_repair.svg"}
            width={"350"}
            height={"350"}
            alt=""
          />
        </div>
        <div>
          <Image src={"/Icon_repair.svg"} width={"80"} height={"80"} alt="" />
          <h2 className="py-8 text-2xl font-bold text-bluep">
            Como es el proceso de la reparación
          </h2>
          <p>
            Se verifica el estado y funcionamiento del equipo, se identifica la
            avería y se determina la solución más conveniente. Se informa al
            cliente del diagnóstico, el presupuesto y el tiempo estimado de la
            reparación.
          </p>
          <Link href={"/contacto"}>
            <Button className="bg-[#07EF99] mt-8 rounded-xl text-bluep">
              Soporte Técnico
            </Button>
          </Link>
        </div>
      </div>
      <h2 className="text-center py-8 mt-8 text-2xl font-bold text-bluep">
        Soluciones
      </h2>

      <TypesSolutions />

      <div>
        <div className="grid md:grid-cols-2 mt-8 place-content-center">
          <div className="grid justify-center">
            <CardComponent></CardComponent>
          </div>

          <div>
            <h2 className="py-8 text-2xl text-center font-bold text-bluep">
              Preguntas
            </h2>
            <Acordion></Acordion>
          </div>
        </div>
      </div>
    </>
  );
}
