/* eslint-disable react/react-in-jsx-scope */
"use client";

import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { toast } from "./ui/use-toast";

const formSchema = z.object({
  email: z.string().email("Email invalido"),
});

export function EmailForm() {
  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    toast({
      title: "Tu mensaje ha sido enviado",
      description: (
        // <pre>
        //   <code>Hola mundo</code>
        // </pre>
        <></>
      ),
    });
    console.log(values);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-xs">Usuario</FormLabel>
              <FormControl>
                <Input placeholder="movilcenter@gmail.com" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button
          type="submit"
          className="w-full bg-gradient-to-r from-rose-500 to-orange-500 shadow-xl"
        >
          Enviar
        </Button>
      </form>
    </Form>
  );
}

export default EmailForm;
