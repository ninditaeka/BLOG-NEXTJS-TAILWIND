
import NavBar from "@/components/Navbar";
import Image from "next/image";
import { Card } from "flowbite-react";


export default function Blog() {
  return (
    <div >
      
      <NavBar/>
      <div className="md:px-80 flex flex-col md:mt-10 px-4 ">
        <Card
          className=" mb-4 md:mb-10 items-center "
          renderImage={() => (
            <Image
              width={500}
              height={200}
              className="flex "
              src="https://img.freepik.com/free-photo/side-view-young-traveller-checking-map_23-2148588538.jpg?ga=GA1.1.641139640.1732779727&semt=ais_hybrid"
              alt="foto"
            />
          )}
        >
          <h3 className="text-2xl  font-bold tracking-tight text-left text-gray-900 ">
            Noteworthy technology acquisitions 2021
          </h3>
          <h3 className=" flex md:flex-row flex-col text-sm  ">
            <h3 className="font-bold mr-3">Written by Marrie Curie</h3>
            <h3 className=" font-normal tracking-tight text-left text-gray-400">
              {" "}
              posted at 20 November 2024{" "}
            </h3>
          </h3>

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
      </div>
    </div>

    
  );
}
