import React from "react";
import { fetchApi } from "@/helpers/fetch-api";
import { Post } from "@/interfaces/post";
import { notFound } from "next/navigation";

interface Props {
  params: {
    slug: string;
  };
}

const getData = async (slug: string) => {
  const path = `/posts`;
  const urlParams = {
    filters: {
      slug: slug,
    },
    populate: "image",
  };

  const { data } = await fetchApi(path, urlParams);
  return data[0];
};

const Slug = async ({ params }: Props) => {
  const post: Post = await getData(params.slug);

  if (!post) {
    return notFound();
  }
  return (
    <div>
      <h1>Soy la pagina del slug</h1>
      <pre>{JSON.stringify(post, null, 2)}</pre>
    </div>
  );
};

export default Slug;
