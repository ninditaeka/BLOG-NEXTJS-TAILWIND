"use client";

import axios from "axios";
const access_token = "kR0zCwrl9tJtEZMrgXe68fJMjGAg7kPjeeBEhfBLqMY";

const formatDate = (dateString: string) => {
  const options: any = { day: "numeric", month: "long", year: "numeric" };
  const date = new Date(dateString);
  return date.toLocaleDateString("en-GB", options);
};

export async function getBlogs() {
  const baseUrl = "https://cdn.contentful.com";
  const spaceID = "a5w4nyh99tn9";
  const getBlogsEndpoint = `${baseUrl}/spaces/${spaceID}/environments/master/entries?access_token=${access_token}&include=1`;
  const res = await axios.get(getBlogsEndpoint);
  const assets = res.data.includes.Asset;

  const blogs = res.data.items.map((item: any) => {
    return {
      ...item,

      id: item?.sys?.id,
      title: item?.fields?.title,
      image_url: (
        Object.values(assets).find(
          (itemAsset: any) => itemAsset?.sys.id === item.fields.banner.sys.id
        ) as any
      ).fields?.file?.url,
      date: formatDate(item?.fields?.createdDate),
      body: item.fields.body.content[0].content[0].value,
      tags: item.metadata.tags.map((tag: any) => {
        return tag.sys.id;
      }),
    };
  });

  return blogs;
}

export async function getBlogDetail(entriesId: string) {
  const res = await axios.get(
    `https://cdn.contentful.com/spaces/a5w4nyh99tn9/environments/master/entries/${entriesId}/?access_token=${access_token}&include=1`
  );

  const blogDetail = res.data.fields;
  return blogDetail;
}

export async function getImageDetailBlog(asset_Id: string) {
  const res = await axios.get(
    `https://cdn.contentful.com/spaces/a5w4nyh99tn9/environments/master/assets/${asset_Id}/?access_token=${access_token}`
  );
  const ImageBlogDetail = res.data.fields;
  return ImageBlogDetail;
}
