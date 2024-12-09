import { Card, ListGroup } from "flowbite-react";
import Image from "next/image";
import Link from "next/link";

export default function ListofCategories({ posts }: any) {
  return (
    <div>
      <div className="md:px-80 flex flex-col md:mt-10 px-4 ">
        <h1 className="md:text-2xl text-xl font-bold tracking-tight text-gray-900">
          List of Categories
        </h1>
        <div className=" flex md:flex-row flex-col md:mt-10">
          <div className="flex justify-center mr-8">
            <ListGroup className="md:w-48 w-96 md:h-48 ">
              <ListGroup.Item>Food</ListGroup.Item>
              <ListGroup.Item>Cultural</ListGroup.Item>
              <ListGroup.Item>Wonders of the World</ListGroup.Item>
              <ListGroup.Item>Nature</ListGroup.Item>
              <ListGroup.Item>Tips Travel</ListGroup.Item>
            </ListGroup>
          </div>

          <div className="flex  flex-col justify-between">
            {posts &&
              posts.map((post: any) => (
                <Card
                  key={post?.id}
                  className="md:max-w-full  mb-4 md:mb-10"
                  renderImage={() => (
                    <img
                      width={340}
                      height={200}
                      className="md:rounded-l-md md:rounded-tr-none rounded-t-md"
                      src={post.image_url}
                      alt={post.title}
                    />
                  )}
                  horizontal
                >
                  <h1 className="text-2xl font-bold tracking-tight  text-gray-900 dark:text-white">
                    {post.title}
                  </h1>
                  <p className="text-base font-normal line-clamp-4 text-gray-700 dark:text-gray-400">
                    {post.body}
                  </p>

                  <div className="flex flex-row justify-between ">
                    <h1 className=" text-gray-500 text-sm justify-end">
                      {post.date}
                    </h1>
                    <Link
                      href={"/blogs/" + post?.id}
                      className="inline-flex items-center  bg-white px-4 py-2 text-center text-sm font-medium text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:border-gray-600 dark:bg-gray-800 dark:text-white dark:hover:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-700"
                    >
                      Read Me
                    </Link>
                  </div>
                </Card>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}
