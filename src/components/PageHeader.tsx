import React from "react";

interface Props {
  title: string;
}

const PageHeader = ({ title }: Props) => {
  return (
    <h1 className="text-5xl font-extrabold dark:text-black text-center mt-4">
      {title}
    </h1>
  );
};

export default PageHeader;
