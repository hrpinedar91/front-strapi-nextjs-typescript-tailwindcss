import React from "react";
import { fetchApi } from "@/helpers/fetch-api";
import PageHeader from "@/components/PageHeader";
import PageCardImage from "@/components/PageCardImage";
import { Post } from "@/interfaces/post";
import PagePagination from "@/components/PagePagination";

const getData = async (page = 1, pageSize = 3) => {
  const path = "/posts";
  const urlParams = {
    populate: "*",
    sort: {
      createdAt: "asc",
    },
    pagination: {
      page: page,
      pageSize: pageSize,
    },
  };

  const { data, meta } = await fetchApi(path, urlParams);
  return {
    data,
    pagination: meta.pagination,
  };
};

interface Props {
  searchParams: {
    page: string;
  };
}

const Blog = async ({ searchParams }: Props) => {
  const { page } = searchParams;

  let pageNumber = page ? parseInt(page) : 1;

  if (isNaN(pageNumber) || pageNumber < 1) {
    pageNumber = 1;
  }
  const { data, pagination } = await getData(pageNumber);

  console.log(page);

  return (
    <div>
      <PageHeader title="Ultimos Post" />
      <PagePagination pagination={pagination} />
      <div className="grid gap-4 mt-8">
        {data.map((post: Post) => (
          <PageCardImage key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
};

export default Blog;
