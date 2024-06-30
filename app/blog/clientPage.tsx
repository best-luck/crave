"use client";

import Button from "@src/components/shared/common/UI/button";
import { BlogType } from "@src/lib/database/blogs";
import { convertToPlain } from "@src/lib/functions/client/helper";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function ClientPage({ blogs }: { blogs: BlogType[] }) {

  const [contents, setContents] = useState<string[]>([]);

  useEffect(() => {
    setContents(blogs.map(blog => convertToPlain(blog.content)));
  }, []);

  return (
    <div className="m-auto py-10">
      <div className="bg-cover bg-center bg-no-repeat h-[600px] px-[32px] relative" style={{background: "url('/images/blogs/guide.png')"}}>
        <div className="absolute bottom-[80px]">
          <Button onClick={() => {}}>Topic</Button>
          <p className="mt-[12px] font-medium text-[56px]">Health benefits of cannabis, according to experts</p>
          <Button className="text-black bg-white mt-[32px]" onClick={() => {}}>Read more</Button>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-10 gap-[16px] container">
        {
          blogs.map((blog: BlogType, index) => (
            <div className="w-full sm:w-[332px] rounded-[4px] border-[2px] border-separatordark overflow-hidden bg-[#FFFFFF0D] flex flex-col" key={`blog-index-${blog.id}`}>
              <Image
                alt="blog"
                width={100}
                height={100}
                layout="responsive"
                className="min-h-[205px] max-h-[205px]"
                src={blog.image}
              />
              <div className="p-[16px] flex flex-col flex-auto">
                <p className="text-[16px] font-semibold mb-[12px]">{blog.title}</p>
                <p className="line-clamp-3 text-[14px] text-subtext mb-[25px]">{contents[index]||""}</p>
                <div className="mt-auto">
                  <Link
                    href={`/blog/${blog.slug}`}
                    className="text-primary font-semibold text-[16px]">
                    Read More
                  </Link>
                </div>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  );
}