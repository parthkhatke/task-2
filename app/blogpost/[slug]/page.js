import React from "react";
import ReactMarkdown from "react-markdown";

export default async function Page({ params }) {
  const { slug } = await params;

  const url = `http://localhost:1337/api/articles?sort[0]=title:asc&filters[slug][$eq]=${encodeURIComponent(
    slug
  )}&status=published&locale[0]=en&populate=*`;

  const data = await fetch(url, { cache: "no-store" });
  const res = await data.json();

   const post = res?.data?.[0] ?? null;
  const blocks = post?.blocks ?? [];
  const { title } = post;
  return (
    <main>
      <h1 >
        {title}
      </h1>

      <section >
           {blocks?.filter((item) => item.__component === "shared.rich-text")
             .map((item) => (
            <ReactMarkdown key={item.id}>{item.body}</ReactMarkdown>
    ))}
</section>
    </main>
  );
}