"use client";

import { Card, Button, Checkbox, Label, TextInput } from "flowbite-react";
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
            Section 1.10.32 of "de Finibus Bonorum et Malorum", written by
            Cicero in 45 BC "Sed ut perspiciatis unde omnis iste natus error sit
            voluptatem accusantium doloremque laudantium, totam rem aperiam,
            eaque ipsa quae ab illo inventore veritatis et quasi architecto
            beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia
            voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur
            magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro
            quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur,
            adipisci velit, sed quia non numquam eius modi tempora incidunt ut
            labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad
            minima veniam, quis nostrum exercitationem ullam corporis suscipit
            laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem
            vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil
            molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas
            nulla pariatur?" 1914 translation by H. Rackham "But I must explain
            to you how all this mistaken idea of denouncing pleasure and
            praising pain was born and I will give you a complete account of the
            system, and expound the actual teachings of the great explorer of
            the truth, the master-builder of human happiness. No one rejects,
            dislikes, or avoids pleasure itself, because it is pleasure, but
            because those who do not know how to pursue pleasure rationally
            encounter consequences that are extremely painful. Nor again is
            there anyone who loves or pursues or desires to obtain pain of
            itself, because it is pain, but because occasionally circumstances
            occur in which toil and pain can procure him some great pleasure. To
            take a trivial example, which of us ever undertakes laborious
            physical exercise, except to obtain some advantage from it? But who
            has any right to find fault with a man who chooses to enjoy a
            pleasure that has no annoying consequences, or one who avoids a pain
            that produces no resultant pleasure?"
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
            Our mission is to inspire and empower our
            readers to explore the world with curiosity and openness. We aim to
            provide valuable insights, tips, and stories that enhance their
            travel experiences while promoting responsible and sustainable
            travel practices. We envision a world where travel brings people
            closer together, fostering a greater understanding and appreciation
            of diverse cultures and environments. Our goal is to be a trusted
            source of travel inspiration and information, helping our readers
            make the most of their journeys. We uphold the values of
            authenticity, sharing genuine experiences and honest advice;
            sustainability, promoting eco-friendly travel practices and
            minimizing our environmental impact; inclusivity, celebrating
            diverse cultures, backgrounds, and perspectives; adventure,
            encouraging exploration and a spirit of adventure; and community,
            building a supportive community of travel enthusiasts. Our travel
            blog is dedicated to making travel accessible, enjoyable, and
            meaningful for everyone. Whether you're a seasoned traveler or
            planning your first trip, we're here to guide and inspire you every
            step of the way. 🌍✈️✨ Happy travels! 😊
          </p>
        </Card>

        <Card className="mt-10">
          <h1 className="text-2xl font-bold tracking-tight text-center text-gray-900 ">
                Reach me in :
          </h1>

<div className="flex flex-row mt-3 gap-4 justify-center">
              <Link href="#">
                <BsInstagram size={"30px"}/>
              </Link>
              <Link href="#">
              <FaXTwitter size={"30px"}/>
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



{/* <form className="flex flex-col gap-1 w-1/2">
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
</form> */}
