import { groq } from "next-sanity";
import { client } from "../../../../../lib/sanity.client";
import Image from "next/image";
import urlFor from "../../../../../lib/urlFor";
import { PortableText } from '@portabletext/react'
import {RichTextComponents} from "@/components/RichTextComponents";
type Props = {
  params: {
    slug: string;
  };
};
async function Post({ params: { slug } }: Props) {
  const query = groq`
    *[_type == 'post' && slug.current == $slug][0]
    {
        ...,
        author->,
        categories[]->
    }
    `;

  const post: Post = await client.fetch(query, { slug });
  return (
    <article className="px-10 pb-28">
      <section className="space-y-2 border border-red-300 text-black">
        <div className="relative min-h-56 flex flex-col md:flex-row justify-between">
          <div className="absolute top-0 w-full h-full opacity-10 blur-sm p-10">
            <Image
              className="object-cover object-center mx-auto"
              src={urlFor(post.mainImage).url()}
              alt={post.author.name}
              fill
            />
          </div>
          <section className="p-5 w-full bg-red-300">
            <div className="flex flex-col md:flex-row justify-between gap-y-5">
              <div>
                <h1 className="text-4xl font-extrabold">{post.title}</h1>
                <p>
                  {new Date(post._createdAt).toLocaleDateString("en-US", {
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                  })}
                </p>
              </div>
              <div className="flex items-center space-x-2">
                <Image
                  className="rounded-full"
                  src={urlFor(post.author.image).url()}
                  alt={post.author.name}
                  height={80}
                  width={80}
                />
                <div className="w-64 font-bold">
                  <h3>{post.author.name}</h3>
                  <div>{/* Author Bio */}</div>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-end">
                <h4 className="bg-red-950 text-white px-3 py-1 rounded-full text-sm font-semibold mt-4">
                {post.categories[0].title}

                </h4>
            </div>
          </section>
        </div>
      </section>

      <PortableText value={post.body} components={RichTextComponents} />
    </article>
  );
}

export default Post;
