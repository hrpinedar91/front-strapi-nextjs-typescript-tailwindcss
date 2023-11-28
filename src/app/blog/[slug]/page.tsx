import React from "react";
import { fetchApi } from "@/helpers/fetch-api";
import { Post } from "@/interfaces/post";
import { notFound } from "next/navigation";
import Image from "next/image";
import { formatDate } from "@/helpers/format-date-helper";
import PageHeader from "@/components/PageHeader";
import { MDXRemote } from "next-mdx-remote/rsc";

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

  const { title, description, body, publishedAt, image } = post.attributes;
  const { url, width, height } = image.data.attributes.formats.medium;
  return (
    <div className="space-y-8">
      {/* <h1 className="text-5xl font-extrabold dark:text-white">{title}</h1> */}
      <PageHeader title={title} />
      <p className="text-gray-500 mb-2">{formatDate(publishedAt)}</p>
      <Image
        className="h-auto rounded-lg"
        src={url}
        alt={`imagen de ${title}`}
        width={width}
        height={height}
      />
      <p className="mb-3 text-gray-500 dark:text-gray-500 first-line:uppercase first-line:tracking-widest first-letter:text-7xl first-letter:font-bold first-letter:text-gray-900 dark:first-letter:text-black first-letter:mr-3 first-letter:float-left">
        {description}
      </p>
      <div className="prose">
        <MDXRemote source={body}></MDXRemote>
      </div>
    </div>
  );
};

export default Slug;
