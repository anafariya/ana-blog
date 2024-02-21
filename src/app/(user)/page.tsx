import Image from "next/image";
import '../../globals.css'
import { groq } from "next-sanity";
import { client } from "../../../lib/sanity.client";
import { Suspense } from "react";
import BlogList from "@/components/BlogList";

const query = groq `
*[_type=='post']{
  ...,
  author->,
  categories[]->
} | order(_createdAt desc)`

export default async function Home() {
  const posts = await client.fetch(query)
  return (
    <div>
      <Suspense fallback={<p>Loading feed...</p>}>
        <BlogList posts={posts}/>
      </Suspense>
    </div> 
  );
}
