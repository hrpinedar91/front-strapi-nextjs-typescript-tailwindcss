import React from "react";
import { fetchApi } from "@/helpers/fetch-api";

const getData = async () => {
  const path = "/posts";
  const urlParams = {
    populate: "*",
    sort: {
      createdAt: "asc",
    },
    pagination: {
      page: 1,
      pageSize: 2,
    },
  };

  const data = fetchApi(path, urlParams);
  return data;
};

const Blog = async () => {
  const data = await getData();
  return (
    <div>
      <h1>Pagina del blog</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
};

export default Blog;
