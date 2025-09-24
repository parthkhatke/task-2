import React from 'react';
import ReactMarkdown from 'react-markdown';
import Image from "next/image";

const data = await fetch("https://thankful-action-da48caefa8.strapiapp.com/api/about?populate[blocks][populate]=*", { cache: 'no-store' });
const res = await data.json();
const AboutPage = () => {
  const content = res?.data ?? null;
  
  if (!content) {
    return (
      <div className="min-h-screen flex items-center justify-center0">
        Content not found.
      </div>
    );
  }
  
  const { title, blocks } = content;
  const mediaBlock = blocks?.find(b => b.__component === 'shared.media');

  return (
    <div className="hero  ">
      <div className="hero-content flex-col lg:flex-row">
   
          <Image
            width={400} height={400}
            src={`${mediaBlock.file.url}`}
            alt={mediaBlock.file.alternativeText || 'Media'}
            className="max-w-sm rounded-lg shadow-2xl"
          />
  
        <div>
        <h1 className="text-5xl font-bold">{title}</h1>
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
        </div>
      </div>
    </div>
  );
};
{/* <div className="hero bg-base-200 min-h-screen">
  <div >
    <img
      src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
      className="max-w-sm rounded-lg shadow-2xl"
    />
    <div>
      <h1 className="text-5xl font-bold">Box Office News!</h1>
      <p className="py-6">
        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
        quasi. In deleniti eaque aut repudiandae et a id nisi.
      </p>
      <button className="btn btn-primary">Get Started</button>
    </div>
  </div>
</div> */}
export default AboutPage;
