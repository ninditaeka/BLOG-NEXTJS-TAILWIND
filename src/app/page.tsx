"use client";

import NavBar from "@/components/Navbar";
import Hero from "@/components/Hero";
import FeaturePost from "@/components/FeaturePost";
import PopularCategories from "@/components/PopularCategories";
import ListofPost from "@/components/ListofPost";
import { getBlogs } from "./../api/blog";
import { useEffect, useState } from "react";

export default function Home() {
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
      <Hero />
      <FeaturePost posts={blogs.slice(0, 3)} />
      <PopularCategories posts={blogs} />
    </div>
  );
}
