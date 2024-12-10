
"use client"

import { getBlogs } from "@/api/blog";
import ListofCategories from "@/components/ListofCategories";
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
      <ListofCategories posts={blogs} />
      {/* <ListofCategories posts={blogs.slice(0, 3)} /> */}
    </div>
  );
}
