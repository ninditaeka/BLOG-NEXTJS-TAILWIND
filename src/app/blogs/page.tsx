"use client";

import { getBlogs } from "@/api/blog";
import ListofPost from "@/components/ListofPost";
import NavBar from "@/components/Navbar";
import { useEffect, useState } from "react";

export default function Categories() {
  const [blogs, setBlogs] = useState([]);

  const handleGetBlogsData = async () => {
    const data = await getBlogs();
    console.log(data);
    setBlogs(data);
  };

  useEffect(() => {
    handleGetBlogsData();
  }, []);
  return (
    <div>
      <NavBar />
      <ListofPost posts={blogs.slice(3, 5)} />
    </div>
  );
}
