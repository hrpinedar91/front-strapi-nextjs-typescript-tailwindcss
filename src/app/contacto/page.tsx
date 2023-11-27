import React from "react";
import Image from "next/image";
import ItemList from "@/components/ItemList";
import EmailForm from "@/components/EmailForm";

const page = () => {
  return (
    <div>
      <div className="min-h-screen grid place-content-start md:place-content-center">
        <article className="grid grid-cols-1 md:grid-cols-2 bg-white md:max-w-[650px] md:max-h-[700px] items-center md:p-8 rounded-3xl">
          <section className="space-y-4 p-4 order-last">
            <h1 className="text-3xl font-bold bg-gradient-to-r from-slate-800 to-slate-500 bg-clip-text text-transparent">
              Consulta tu reparación
            </h1>
            <p>
              Suscríbete a nuestro boletín y recibe las últimas novedades sobre
              accesorios y servicio técnico para tu celular.
            </p>
            <ul className="flex flex-col gap-4">
              <ItemList>Piezas originales</ItemList>
              <ItemList>Servicio garantizado</ItemList>
              <ItemList>Atencion personalizada</ItemList>
            </ul>
            <EmailForm />
          </section>
          <section className="md:order-last hidden md:block">
            <Image
              src={"/desktop_form.svg"}
              alt=""
              width="500"
              height="500"
              className="object-cover w-full"
            />
          </section>
          <section className="md:order-last block md:hidden">
            <Image
              src={"/mobile.svg"}
              alt=""
              width="500"
              height="500"
              className="object-cover w-full"
            />
          </section>
        </article>
      </div>
    </div>
  );
};

export default page;
