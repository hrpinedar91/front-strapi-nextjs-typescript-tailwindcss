import React from "react";
import { fetchApi } from "@/helpers/fetch-api";
import PageHeader from "@/components/PageHeader";
import PageCardImage from "@/components/PageCardImage";
import { Post } from "@/interfaces/post";
// import { Post } from "@/interfaces/post";

const getData = async (page = 1, pageSize = 2) => {
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

const Blog = async () => {
  const { data } = await getData();
  return (
    <div>
      <PageHeader title="Blog" />
      {/* <pre>{JSON.stringify(data, null, 2)}</pre> */}
      <div className="grid gap-4 mt-8">
        {data.map((post: Post) => (
          <PageCardImage key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
};

export default Blog;
