import { BlogType, getBlog } from "@src/lib/database/blogs";
import { Metadata } from "next";
import Image from "next/image";

interface Props {
  params: {
    slug: string
  }
}

export async function generateMetadata(props: Props) {
  
  const slug = decodeURIComponent(props.params.slug);
  const blog: BlogType = await getBlog(slug);

  return {
    title: blog.meta_title,
    description: blog.meta_description,
  }
}

export default async function Page(props: Props) {

  const slug = decodeURIComponent(props.params.slug);
  const blog: BlogType = await getBlog(slug);

  return (
    <div className="container m-auto pt-[80px]">
      <h1 className="font-semibold text-[32px] text-center">{blog.title}</h1>
      <Image
        src={blog.image}
        layout="responsive"
        width={100}
        alt="blog image"
        className="h-[500px]"
        height={100}
        />
      <div className="flex gap-[116px] mt-[80px]">
        <div className="flex-auto mt-[80px]]" dangerouslySetInnerHTML={{ __html: blog.content }} />
        <div className="w-[448px] rounded-[4px] border border-separatordark p-[24px]">
          <p className="">Author: {blog.author}</p>
          <p>Posted on {new Date(blog.created_at||"").toDateString()}</p>
        </div>
      </div>
    </div>
  );
}