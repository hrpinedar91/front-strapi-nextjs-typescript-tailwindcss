/* eslint-disable react/react-in-jsx-scope */
import BannerHome from "@/components/BannerHome";
import TypesSolutions from "@/components/TypesSolutions";
// import { Accordion, AccordionItem } from "@nextui-org/react";
import Image from "next/image";

export default function Home() {
  // const defaultContent =
  //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";

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
      <BannerHome />
      <h2 className="text-center py-8 mt-8 text-2xl font-bold text-bluep">
        Categoria de soluciones
      </h2>

      <TypesSolutions />

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
            Como es el processo de reparacion de mi equipo? Lorem ipsum dolor
            sit amet consectetur adipisicing elit. Sapiente quisquam corrupti
            delectus quam distinctio fuga id modi, suscipit earum porro commodi
            culpa tempore placeat quas odit eaque quae doloribus nulla!
          </p>
          <button
            type="button"
            className="focus:outline-none text-white mt-4 bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"
          >
            Contáctame
          </button>
        </div>
      </div>
      <div>
        <h2 className="py-8 text-2xl text-center font-bold text-bluep">
          Preguntas
        </h2>
        <div>
          {/* <Accordion>
            <AccordionItem
              key="1"
              aria-label="Accordion 1"
              subtitle="Press to expand"
              title="Accordion 1"
            >
              {defaultContent}
            </AccordionItem>
            <AccordionItem
              key="2"
              aria-label="Accordion 2"
              subtitle={
                <span>
                  Press to expand <strong>key 2</strong>
                </span>
              }
              title="Accordion 2"
            >
              {defaultContent}
            </AccordionItem>
            <AccordionItem
              key="3"
              aria-label="Accordion 3"
              subtitle="Press to expand"
              title="Accordion 3"
            >
              {defaultContent}
            </AccordionItem>
          </Accordion> */}
        </div>
      </div>
    </>
  );
}
