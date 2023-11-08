import Link from "next/link";
import React from "react";

const NotFound = () => {
  return (
    <div className="grid grid-cols-1 place-items-center h-screen">
      <div className="text-center space-y-4">
        <h1 className="text-3xl">Not Found</h1>
        <p>No se pudo encontrar el recurso solicitado 😒</p>
        <Link
          href="/blog"
          className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          volver a todos los posts
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
