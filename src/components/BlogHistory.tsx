"use client";

import { Card} from "flowbite-react";
import Image from "next/image";
import Link from "next/link";
import { BsInstagram } from "react-icons/bs";
import { FaXTwitter } from "react-icons/fa6";
import { SiLinkedin } from "react-icons/si";
import { TfiEmail } from "react-icons/tfi";

export default function BlogHistory() {
  return (
    <div className="flex flex-col">
      <div className="md:px-80 flex flex-col md:mt-10 px-4 ">
        <Card>
          <h1 className="text-2xl  font-bold tracking-tight text-left text-gray-900 ">
            Blog History
          </h1>

          <p className="font-normal text-gray-700 dark:text-gray-400 text-justify">
            Evergreen content refers to blog posts that remain relevant and
            valuable over a long period of time, unlike seasonal content that
            might only be relevant for a short while. Evergreen blog posts are
            designed to be timeless, providing useful information that readers
            will find helpful regardless of when they come across it. The
            mission of an evergreen blog focused on travel would typically be to
            inspire and guide travelers by sharing valuable tips, destination
            guides, and personal experiences. The vision might be to become a
            trusted resource for travelers worldwide, helping them plan their
            trips more effectively and enjoyably. Travel tips and places to
            visit could include advice like packing light to make travels
            easier, staying safe by being aware of surroundings, budgeting
            wisely by planning expenses and looking for savings, and learning
            local phrases to improve communication. Highlighting places to visit
            such as Bali, Indonesia, known for its beautiful beaches and vibrant
            culture; Kyoto, Japan, famous for its temples, traditional tea
            houses, and cherry blossoms; Paris, France, the city of love with
            landmarks like the Eiffel Tower and Louvre Museum; and New Zealand,
            offering stunning landscapes perfect for adventure activities like
            hiking and bungee jumping, can provide readers with inspiration and
            valuable insights for their travel plans. By focusing on such
            content, an evergreen travel blog can provide readers with timeless
            advice and inspiration, ensuring that the information remains useful
            and relevant for years to come.
          </p>
        </Card>

        <Card className="mt-10">
          <h1 className="text-2xl font-bold tracking-tight text-center text-gray-900 ">
            Author Bio
          </h1>

          <div className="flex md:flex-row  flex-col">
            <div className="flex flex-col">
              <Card
                className="md:max-w-full  mb-4 md:mb-10"
                renderImage={() => (
                  <Image
                    width={340}
                    height={200}
                    className="md:rounded-l-md md:rounded-tr-none rounded-t-md"
                    src="https://img.freepik.com/free-vector/woman-floral-traditional-costume_1308-176159.jpg?ga=GA1.1.641139640.1732779727&semt=ais_tags_boosted"
                    alt="foto"
                  />
                )}
                horizontal
              ></Card>
            </div>

            <Card className="mb-4 md:mb-10 ml-3 mx-1">
              <h4 className="flex md:flex-row flex-col">
                <p className="font-bold">Name: </p> Nindita Eka Setyahandani{" "}
              </h4>
              <h4 className="flex md:flex-row flex-col">
                <p className="font-bold">Title:</p> Web Development and
                Traveller{" "}
              </h4>
              <h4 className="flex flex-col mb-2">
                <p className="font-bold">Interest:</p>Balancing full-time travel
                with part-time web development is an adventurous and flexible
                lifestyle. Exploring new places by day and coding by night
                offers the best of both worlds. This way, you get to experience
                diverse cultures while maintaining a sustainable career, making
                each day an exciting journey. 🌍💻✨
              </h4>
            </Card>
          </div>
        </Card>

        <Card className="mt-10">
          <h1 className="text-2xl font-bold tracking-tight text-left text-gray-900 ">
            Mission and Vision
          </h1>

          <p className="font-normal text-gray-700 dark:text-gray-400 text-justify">
            Our mission is to inspire and empower our readers to explore the
            world with curiosity and openness. We aim to provide valuable
            insights, tips, and stories that enhance their travel experiences
            while promoting responsible and sustainable travel practices. We
            envision a world where travel brings people closer together,
            fostering a greater understanding and appreciation of diverse
            cultures and environments. Our goal is to be a trusted source of
            travel inspiration and information, helping our readers make the
            most of their journeys. We uphold the values of authenticity,
            sharing genuine experiences and honest advice; sustainability,
            promoting eco-friendly travel practices and minimizing our
            environmental impact; inclusivity, celebrating diverse cultures,
            backgrounds, and perspectives; adventure, encouraging exploration
            and a spirit of adventure; and community, building a supportive
            community of travel enthusiasts. Our travel blog is dedicated to
            making travel accessible, enjoyable, and meaningful for everyone.
            Whether you are a seasoned traveler or planning your first trip,
            we are here to guide and inspire you every step of the way. 🌍✈️✨
            Happy travels! 😊
          </p>
        </Card>

        <Card className="mt-10">
          <h1 className="text-2xl font-bold tracking-tight text-center text-gray-900 ">
            Reach me in :
          </h1>

          <div className="flex flex-row mt-3 gap-4 justify-center">
            <Link href="#">
              <BsInstagram size={"30px"} />
            </Link>
            <Link href="#">
              <FaXTwitter size={"30px"} />
            </Link>
            <Link href="#">
              <SiLinkedin size={"30px"} />
            </Link>
            <Link href="#">
              <TfiEmail size={"30px"} />
            </Link>
          </div>
        </Card>
      </div>
    </div>
  );
}

{
  /* <form className="flex flex-col gap-1 w-1/2">
<div className="mb-2 block">
  <Label htmlFor="name" value="Name" />
</div>
<TextInput id="name" type="text" sizing="md" />
<div className="mb-2 block">
  <Label htmlFor="email1" value="Your email" />
</div>
<TextInput
  id="email1"
  type="email"
  placeholder="name@flowbite.com"
  required
/>

<div>
  <div className="mb-2 block">
    <Label htmlFor="description" value="Description" />
  </div>
  <TextInput id="description" type="description" required />
</div>

<Button type="submit">Submit</Button>
</form> */
}
