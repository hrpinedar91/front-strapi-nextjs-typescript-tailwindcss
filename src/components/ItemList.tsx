import React from "react";
import { Check } from "lucide-react";

interface Props {
  children: React.ReactNode;
}

const ItemList = ({ children }: Props) => {
  return (
    <li className="flex gap-x-3 items-center">
      <span className="bg-[#FF5E5A] rounded-full w-6 h-6 grid place-content-center">
        <Check className="stroke-white w-4 h-4" />
      </span>
      <span>{children}</span>
    </li>
  );
};

export default ItemList;
