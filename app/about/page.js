import React from 'react';
import ReactMarkdown from 'react-markdown';

const data = await fetch('http://localhost:1337/api/about?populate=*', { cache: 'no-store' });
const res = await data.json();

const AboutPage = () => {
  const content = res?.data ?? null;

  if (!content) {
    return (
      <div className="min-h-screen flex items-center justify-center text-slate-600">
        Content not found.
      </div>
    );
  }

  const { title, blocks } = content;

  return (
    <main className="min-h-screen py-12 bg-amber-100 ">
      <div className="max-w-4xl mx-auto px-6">
        <h1 className="text-4xl font-extrabold text-amber-800 mb-6">{title}</h1>

        <section className="grid gap-6 prose prose-lg prose-indigo text-black bg-amber-200 rounded-lg p-6 shadow-md">
          {blocks &&
            blocks.map((block) => {
              if (block.__component === 'shared.rich-text') {
                return (
                  <ReactMarkdown key={block.id} >
                    {block.body}
                  </ReactMarkdown>
                );
              }
              return null;
            })}
        </section>
      </div>
    </main>
  );
};

export default AboutPage;
