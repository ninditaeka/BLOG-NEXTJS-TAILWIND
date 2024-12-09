import { Card } from "flowbite-react";
import Image from "next/image";
import Link from "next/link";

export default function ListofCategories() {
  return (
    <div>
      <div className="md:px-80 flex flex-col md:mt-10 px-4 ">
        <h1 className="md:text-2xl text-xl font-bold tracking-tight text-gray-900">
          List of Categories
        </h1>
        <div className="flex flex-col  mt-4 ">
          <Link
            href="#"
            className="hover:bg-gray-100 hover:ps-2 md:text-xl text-xl font-bold tracking-tight text-gray-900"
          >
            Food{" "}
          </Link>
          <h2 className="text-sm">
            Explore the world through food. From street markets to fancy
            restaurants, savor local flavors and traditions. Each dish tells a
            cultural story, making your travel experience richer and more
            memorable. 🍽️✈️😊
          </h2>
          <Card
            className="md:max-w-full  mb-4 md:mb-10"
            renderImage={() => (
              <Image
                width={340}
                height={200}
                className="md:rounded-l-md md:rounded-tr-none rounded-t-md"
                src="https://img.freepik.com/free-photo/side-view-young-traveller-checking-map_23-2148588538.jpg?ga=GA1.1.641139640.1732779727&semt=ais_hybrid"
                alt="foto"
              />
            )}
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
            renderImage={() => (
              <Image
                width={340}
                height={200}
                className="md:rounded-l-md md:rounded-tr-none rounded-t-md"
                src="https://img.freepik.com/free-photo/side-view-young-traveller-checking-map_23-2148588538.jpg?ga=GA1.1.641139640.1732779727&semt=ais_hybrid"
                alt="foto"
              />
            )}
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

          <div className="flex flex-col  mt-4 ">
            <Link
              href="#"
              className="hover:bg-gray-100 hover:ps-2 md:text-xl text-xl font-bold tracking-tight text-gray-900"
            >
              Culture{" "}
            </Link>
            <h2 className="text-sm">
              Culture travel is about immersing yourself in the unique
              traditions, customs, and heritage of different destinations. It's
              a journey of discovery, where you engage with local communities,
              participate in cultural activities, and learn about the history
              and way of life of the people. From festivals and art to
              historical landmarks and local cuisines, culture travel enriches
              your understanding and appreciation of the diverse world we live
              in. 🌍✨
            </h2>
            <Card
              className="md:max-w-full  mb-4 md:mb-10"
              renderImage={() => (
                <Image
                  width={340}
                  height={200}
                  className="md:rounded-l-md md:rounded-tr-none rounded-t-md"
                  src="https://img.freepik.com/free-photo/side-view-young-traveller-checking-map_23-2148588538.jpg?ga=GA1.1.641139640.1732779727&semt=ais_hybrid"
                  alt="foto"
                />
              )}
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
              renderImage={() => (
                <Image
                  width={340}
                  height={200}
                  className="md:rounded-l-md md:rounded-tr-none rounded-t-md"
                  src="https://img.freepik.com/free-photo/side-view-young-traveller-checking-map_23-2148588538.jpg?ga=GA1.1.641139640.1732779727&semt=ais_hybrid"
                  alt="foto"
                />
              )}
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

          <div className="flex flex-col  mt-4 ">
            <Link
              href="#"
              className="hover:bg-gray-100 hover:ps-2 md:text-xl text-xl font-bold tracking-tight text-gray-900"
            >
              Adventure{" "}
            </Link>
            <h2 className="text-sm">
              Adventure travel is all about seeking thrilling and unforgettable
              experiences. It involves activities like hiking, rafting,
              skydiving, and exploring off-the-beaten-path destinations.
              Adventure travel pushes your limits, ignites your spirit of
              discovery, and creates lasting memories. Whether you're scaling
              mountains or diving into the ocean depths, adventure travel
              promises excitement and personal growth. 🌍🏞️✨ Happy adventuring!
            </h2>
            <Card
              className="md:max-w-full  mb-4 md:mb-10"
              renderImage={() => (
                <Image
                  width={340}
                  height={200}
                  className="md:rounded-l-md md:rounded-tr-none rounded-t-md"
                  src="https://img.freepik.com/free-photo/side-view-young-traveller-checking-map_23-2148588538.jpg?ga=GA1.1.641139640.1732779727&semt=ais_hybrid"
                  alt="foto"
                />
              )}
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
              renderImage={() => (
                <Image
                  width={340}
                  height={200}
                  className="md:rounded-l-md md:rounded-tr-none rounded-t-md"
                  src="https://img.freepik.com/free-photo/side-view-young-traveller-checking-map_23-2148588538.jpg?ga=GA1.1.641139640.1732779727&semt=ais_hybrid"
                  alt="foto"
                />
              )}
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

            <div className="flex flex-col  mt-4 ">
              <Link
                href="#"
                className="hover:bg-gray-100 hover:ps-2 md:text-xl text-xl font-bold tracking-tight text-gray-900"
              >
                Family{" "}
              </Link>
              <h2 className="text-sm">
                Family travel is all about creating shared experiences and
                lifelong memories. Whether exploring new destinations or
                revisiting favorites, it offers opportunities for bonding,
                learning, and fun. From kid-friendly activities to
                family-friendly accommodations, every aspect is designed to
                cater to all ages. Family travel enriches relationships and
                provides a break from everyday routines, allowing families to
                reconnect and explore the world together. 🌍👨‍👩‍👧‍👦✨
              </h2>
              <Card
                className="md:max-w-full  mb-4 md:mb-10"
                renderImage={() => (
                  <Image
                    width={340}
                    height={200}
                    className="md:rounded-l-md md:rounded-tr-none rounded-t-md"
                    src="https://img.freepik.com/free-photo/side-view-young-traveller-checking-map_23-2148588538.jpg?ga=GA1.1.641139640.1732779727&semt=ais_hybrid"
                    alt="foto"
                  />
                )}
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
                renderImage={() => (
                  <Image
                    width={340}
                    height={200}
                    className="md:rounded-l-md md:rounded-tr-none rounded-t-md"
                    src="https://img.freepik.com/free-photo/side-view-young-traveller-checking-map_23-2148588538.jpg?ga=GA1.1.641139640.1732779727&semt=ais_hybrid"
                    alt="foto"
                  />
                )}
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
    </div>
  );
}
