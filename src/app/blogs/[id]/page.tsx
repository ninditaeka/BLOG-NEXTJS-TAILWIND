"use client";
import * as React from "react";
import NavBar from "@/components/Navbar";
import { Card } from "flowbite-react";
import { useState, useEffect } from "react";
import { getBlogDetail, getImageDetailBlog } from "@/api/blog";
import { Interweave } from "interweave";
import { documentToHtmlString } from "@contentful/rich-text-html-renderer";

const formatDate = (dateString: string) => {
  const options: any = { day: "numeric", month: "long", year: "numeric" };
  const date = new Date(dateString);
  return date.toLocaleDateString("en-GB", options);
};

export default function BlogDetail({ params }: any) {
  const { id } = React.use(params) as any;
  const [blog, setBlog] = useState<any>(null);
  const [imageBlog, setImageBlog] = useState<any>(null);

  const handleGetBlogDetail = async () => {
    const blogDetail = await getBlogDetail(id);
    console.log("blogDetail = ", blogDetail);
    setBlog(blogDetail);
  };

  const handleGetImageDetailBlog = async (id: string) => {
    const ImageDetailBlog = await getImageDetailBlog(id);
    console.log("ImageDetailBlog =", ImageDetailBlog);
    setImageBlog(ImageDetailBlog);
  };

  useEffect(() => {
    handleGetBlogDetail();
  }, []);

  useEffect(() => {
    if (blog?.banner?.sys?.id) {
      handleGetImageDetailBlog(blog?.banner?.sys?.id);
    }
  }, [blog?.banner?.sys?.id]);

  return (
    <div>
      <NavBar />
      <div className="md:px-80 flex flex-col md:mt-10 px-4 ">
        <Card
          className=" mb-4 md:mb-10 items-center "
          renderImage={() => (
            <img
              width={500}
              height={200}
              className="flex "
              src={imageBlog?.file?.url}
              alt={imageBlog?.file?.fileName}

              // src="https://img.freepik.com/free-photo/side-view-young-traveller-checking-map_23-2148588538.jpg?ga=GA1.1.641139640.1732779727&semt=ais_hybrid"
            />
          )}
        >
          <h3 className="text-2xl  font-bold tracking-tight text-center mt-4 text-gray-900 ">
            {JSON.stringify(blog?.title)}
          </h3>
          <div className=" flex md:flex-row flex-col text-sm  ">
            <h3 className="font-bold mr-3 text-center">
              Written by {JSON.stringify(blog?.author)}
            </h3>
            <h3 className=" font-normal tracking-tight md:text-left  text-center text-gray-400">
              {" "}
              <div> posted at {formatDate(blog?.createdDate)}</div>
            </h3>
          </div>
          <Interweave
            className="mt-4 text-justify"
            content={documentToHtmlString(blog?.body)}
          />
        </Card>
      </div>
    </div>
  );
}
