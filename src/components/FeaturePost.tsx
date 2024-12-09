"use client";

import { Card } from "flowbite-react";
import Image from "next/image";
import Link from "next/link";

export default function FeaturePost({ posts }: any) {
  return (
    <div className="md:px-80 flex flex-col md:mt-0 mt-8 px-4  ">
      <h1 className="md:text-2xl text-2xl font-bold tracking-tight text-gray-900">
        Feature Post
      </h1>

      <div className="flex md:flex-row flex-col justify-between">
        {posts &&
          posts.map((post: any) => (
            <Card
              key={post?.id}
              className="md:max-w-xs md:mt-6 mb-6"
              renderImage={() => (
                <img
                  width={340}
                  height={200}
                  className=" rounded-t-md h-40 object-cover"
                  src={post.image_url}
                  alt={post.title}
                />
              )}
            >
              <div className="flex flex-col h-full gap-2 justify-between">
                <h5 className="text-2xl font-bold  text-gray-900 justify-start dark:text-white">
                  {post.title}
                </h5>
                <div className="flex flex-col">
                <p className="font-normal line-clamp-3 text-gray-700 text-justify dark:text-gray-400">
                  {post.body}
                </p>
                <div className="flex flex-row justify-between items-center">
                  <h1 className=" text-gray-500 text-sm ">{post.date}</h1>
                  <Link
                    href={"/blogs/"+post?.id}
                    className=" px-4 py-2 text-center  text-sm font-medium text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:border-gray-600 dark:bg-gray-800 dark:text-white dark:hover:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-700"
                  >
                    Read More
                  </Link>
                </div>
                </div>

              </div>
            </Card>
          ))}
      </div>
    </div>
  );
}
