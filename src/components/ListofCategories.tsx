import { Card, ListGroup } from "flowbite-react";
import Link from "next/link";
import { useState } from "react";

export default function ListofCategories({ posts }: any) {
  const listThemas = [
    {
      id: "cultural",
      label: "Cultural",
      explanation:
        "Diving into the rich customs, traditions, and lifestyles of various societies worldwide. It highlights aspects like art, music, cuisine, festivals, and daily practices, offering readers a glimpse into the unique cultural heritage of different regions. By sharing personal stories, interviews, and detailed articles, these blogs aim to promote cross-cultural awareness and understanding, celebrating the diversity that makes our world so fascinating.",
    },
    {
      id: "food",
      label: "Food",
      explanation:
        "Exploring culinary arts, diverse cuisines, and cooking techniques. Featuring recipes, reviews, and tips, it offers inspiration and knowledge for culinary adventures. Highlighting regional specialties and seasonal ingredients, these blogs foster a love for cooking and eating, connecting food enthusiasts worldwide.",
    },
    {
      id: "nature",
      label: "Nature",
      explanation:
        "Exploring the beauty of the natural world, featuring topics like wildlife, landscapes, and conservation. It offers stunning photography, inspiring stories, and practical tips for enjoying the outdoors, all while promoting a deeper connection with nature and a commitment to preserving it.",
    },
    {
      id: "wonder",
      label: "Wonder",
      explanation:
        "A Wonders of the World-themed blog showcases iconic landmarks and monuments, exploring their history, architecture, and cultural significance. It offers guides, insights, and travel tips to inspire readers to discover and appreciate these extraordinary sites, igniting a sense of wonder and adventure.",
    },
    {
      id: "tips",
      label: "Tips",
      explanation:
        "A tips-themed blog provides practical advice on various topics, helping readers improve their lives with expert insights and actionable recommendations. These blogs offer step-by-step guides and useful tricks to empower readers and enhance their everyday experiences.",
    },
  ];

  const [selectedListofCatagories, setSelectedListofCatagories] = useState<any>(
    {}
  );

  const filterPost = posts.filter((post: any) => {
    if (!selectedListofCatagories?.id) return true;
    return (
      selectedListofCatagories?.id &&
      post.tags.includes(selectedListofCatagories?.id)
    );
  });

  return (
    <div>
      <div className="md:px-80 flex flex-col md:mt-10 px-4 ">
        <h1 className="md:text-2xl text-xl font-bold tracking-tight text-gray-900">
          List of Categories
        </h1>
        <div className=" flex md:flex-row flex-col md:mt-10">
          <div className="flex justify-center mr-8">
            <ListGroup className="md:w-48 w-96 md:h-48 ">
              {listThemas &&
                listThemas.slice(0, 5).map((listThema: any) => (
                  <ListGroup.Item
                    key={listThema?.id}
                    onClick={() => {
                      setSelectedListofCatagories(listThema);
                      console.log(listThema);
                    }}
                  >
                    {listThema.label}
                  </ListGroup.Item>
                ))}
            </ListGroup>
          </div>

          <div className="flex flex-col md:ml-32 mt-4 ">
            <h1 className="md:text-xl text-xl font-bold tracking-tight text-gray-900">
              {selectedListofCatagories?.label}
            </h1>
            <h2 className="md:text-sm text-sm tracking-tight text-gray-900">
              {selectedListofCatagories?.explanation}
            </h2>

            <div className="flex  flex-col justify-between">
              {filterPost &&
                filterPost.map((post: any) => (
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
    </div>
  );
}
