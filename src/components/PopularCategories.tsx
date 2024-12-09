"use client";

import { Card, ListGroup } from "flowbite-react";
import Image from "next/image";
import Link from "next/link";

export default function PopularCategories() {
  return (
    <div>
      <div className="md:px-80 flex flex-col md:mt-10 px-4 ">
        <h1 className="md:text-2xl text-xl font-bold tracking-tight text-gray-900">
          Popular Categories
        </h1>
        <div className=" flex md:flex-row flex-col md:mt-10">
          <div className="flex justify-center">
            <ListGroup className="md:w-48 w-96 md:h-20">
              <ListGroup.Item>
                Food
              </ListGroup.Item>
              <ListGroup.Item>
                Cultural
                </ListGroup.Item>
              
            </ListGroup>
          </div>
          <div className="flex flex-col md:ml-32 mt-4 ">
            <Link href="#"
                className="hover:bg-gray-100 hover:ps-2 md:text-xl text-xl font-bold tracking-tight text-gray-900"
                >Food </Link>
            <Card
              className="md:max-w-full  mb-4 md:mb-10"
              renderImage={()=> <Image width={340} height={200} className= "md:rounded-l-md md:rounded-tr-none rounded-t-md" src="https://img.freepik.com/free-photo/side-view-young-traveller-checking-map_23-2148588538.jpg?ga=GA1.1.641139640.1732779727&semt=ais_hybrid" alt="foto"/>}
              horizontal
            >
              <h5 className="text-2xl font-bold tracking-tight  text-gray-900 dark:text-white">
                Premier Travel Destination in 2024
              </h5>
              <p className="text-base font-normal text-gray-700 dark:text-gray-400">
                The most wanted travel destination for 2024 boasts a vibrant
                cityscape filled with rich cultural experiences and iconic
                landmarks...
              </p>

              <div className="flex flex-row justify-between ">
                <h1 className=" text-gray-500 text-sm justify-end">
                  20 November 2024
                </h1>
                <Link
                  href="#"
                  className="inline-flex items-center  bg-white px-4 py-2 text-center text-sm font-medium text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:border-gray-600 dark:bg-gray-800 dark:text-white dark:hover:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-700"
                >
                  Read Me
                </Link>
              </div>
            </Card>
               <Card
              className="md:max-w-full  mb-4 md:mb-10"
              renderImage={()=> <Image width={340} height={200} className= "md:rounded-l-md md:rounded-tr-none rounded-t-md" src="https://img.freepik.com/free-photo/side-view-young-traveller-checking-map_23-2148588538.jpg?ga=GA1.1.641139640.1732779727&semt=ais_hybrid" alt="foto"/>}
              horizontal
            >
              <h5 className="text-2xl font-bold tracking-tight  text-gray-900 dark:text-white">
                Premier Travel Destination in 2024
              </h5>
              <p className="text-base font-normal text-gray-700 dark:text-gray-400">
                The most wanted travel destination for 2024 boasts a vibrant
                cityscape filled with rich cultural experiences and iconic
                landmarks...
              </p>

              <div className="flex flex-row justify-between ">
                <h1 className=" text-gray-500 text-sm justify-end">
                  20 November 2024
                </h1>
                <Link
                  href="#"
                  className="inline-flex items-center  bg-white px-4 py-2 text-center text-sm font-medium text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:border-gray-600 dark:bg-gray-800 dark:text-white dark:hover:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-700"
                >
                  Read Me
                </Link>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
