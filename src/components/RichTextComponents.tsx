import Image from "next/image";
import Link from "next/link";
import urlFor from "../../lib/urlFor";
import { PortableTextReactComponents } from '@portabletext/react';

export const RichTextComponents: PortableTextReactComponents = {
  types: {
    image: ({ value }: any) => (
      <div className="relative w-full h-96 m-10 mx-auto">
        <Image
          className="object-contain"
          src={urlFor(value).url()}
          alt="Blog Post Image"
          fill
        />
      </div>
    )
  },
  marks: {
    link: ({ children, value }: any) => {
      const rel = !value.href.startsWith("/") ? "noreferrer noopener" : undefined;
      return (
        <Link
          href={value.href}
          rel={rel}
          className="underline decoration-red-400 hover:decoration-red-800"
        >
          {children}
        </Link>
      );
    }
  },
  list: {
    bullet: ({ children }: any) => (
      <ul className="ml-0 py-5 list-disc space-y-5">{children}</ul>
    ),
    number: ({ children }: any) => (
      <ol className="mt-lg list-decimal">
        {children}
      </ol>
    )
  },
  block: {
    h1: ({ children }: any) => (
      <h1 className="text-5xl py-10 font-bold">
        {children}
      </h1>
    ),
    h2: ({ children }: any) => (
      <h2 className="text-4xl px-10 font-bold">
        {children}
      </h2>
    ),
    h3: ({ children }: any) => (
      <h3 className="text-3xl py-10 font-bold">
        {children}
      </h3>
    ),
    h4: ({ children }: any) => (
      <h4 className="text-2xl py-10 font-bold">
        {children}
      </h4>
    ),
    blockquote: ({ children }: any) => (
      <blockquote className="border-red-500 border-l-4 pl-5 py-5 my-5">
        {children}
      </blockquote>
    ),
  },
  listItem: ({ children }) => <li>{children}</li>,
  hardBreak: () => <br />, // Function returning <br> element
  unknownMark: ({ children }) => <span>{children}</span>,
  unknownBlockStyle: ({ children }) => <div>{children}</div>,
  unknownList: ({ children }) => <ul>{children}</ul>,
  unknownListItem: ({ children }) => <li>{children}</li>,
  unknownType: ({ children }) => <div>{children}</div>, // Add the unknownType property
};
