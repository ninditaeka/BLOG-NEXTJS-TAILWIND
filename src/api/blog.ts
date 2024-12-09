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

  const blogs = res.data.items.map((item: any, index: number) => {
    let paragraph = "";
    return {
      ...item,
      /*
      name:item.name,
      number:item.number 
      key:item.key 
      */
      id: item?.sys?.id,
      title: item?.fields?.title,
      image_url: Object.values(assets).find(
        (itemAsset: any) => itemAsset?.sys.id === item.fields.banner.sys.id
      )?.fields?.file?.url,
      date: formatDate(item?.fields?.createdDate),
      body: item.fields.body.content[0].content[0].value + "...",
      // body: Object.values(item.fields.body.content).map(function(content:any, key:number){
      //   // Object.values
      // console.log(content.content[0].value)
      // paragraph+= content.content[0].value

      // if (key==item.fields.body.content.length-1){

      //   return paragraph
      // }

      // }),
      //   // body:"okkkkeee"
      // // body:item.fields.body.content.content.value
    };
  });

  return blogs;
}

export async function getBlogDetail(enteriesId: string) {
  const getBlogDetailEndPoint =
    "https://cdn.contentful.com/spaces/a5w4nyh99tn9/environments/master/entries/${entriesId}/?{access_token}";
  const blogDetail = res.data.fields;
  return blogDetail;
}
