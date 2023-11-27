import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Acordion = () => {
  return (
    <Accordion type="single" collapsible className="w-full">
      <AccordionItem value="item-1">
        <AccordionTrigger>
          ¿Cómo puedo contactar con Movil Center para reparar mi celular?
        </AccordionTrigger>
        <AccordionContent>
          <ul>
            <li>
              Teléfono: <b>+57 3217515890</b>
            </li>
            <li>Correo electrónico: movilcenter@gmail.com</li>
            <li>
              Página web: <a>www.movil-center.com</a>
            </li>
          </ul>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>
          ¿Pierdo la garantia si reparo mi celular?
        </AccordionTrigger>
        <AccordionContent>
          Si pierdes la garantia original de fabrica. Pero puedes estar seguro
          de que tu celular quedará en las mejores manos, y que no tendrás
          ningún problema después de la reparación.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>
          ¿Cual es el tiempo de garantia por las reparaciones
        </AccordionTrigger>
        <AccordionContent>
          1 año de garantia en todas nuestras reparaciones
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

export default Acordion;
