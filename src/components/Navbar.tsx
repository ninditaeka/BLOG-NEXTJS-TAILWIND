"use client";

import { Navbar, TextInput } from "flowbite-react";
import { IoIosSearch } from "react-icons/io";

export default function NavBar() {
  return (
    <div className="md:px-80 flex flex-row w-full">
      <Navbar className="flex w-full justify-between">
        <Navbar.Brand href="/">
          <img
            className="w-20 h-20"
            src="https://www.logoai.com/uploads/output/2021/12/21/a40b79883497c9cf19e38b2bea41a4a7.jpg"
            alt="logo"
          />
        </Navbar.Brand>

  
        <div className="mb-1 block">
          <TextInput
            icon={IoIosSearch}
            className="text-sm"
            id="search"
            type="search"
            placeholder="search"
            required
          />
        </div>
 

        <Navbar.Toggle className="text-sm" />
        <Navbar.Collapse>
          <Navbar.Link href="/" active>
            Home
          </Navbar.Link>
          <Navbar.Link href="/blogs">Blog Post</Navbar.Link>
          <Navbar.Link href="/categories">Categories</Navbar.Link>
          <Navbar.Link href="/about">About</Navbar.Link>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}
