'use server';

import path from 'path';
import { writeFile } from "fs/promises";
import fs from "fs";

import { redirect } from "next/navigation";
import { addBlogCategory, deleteCategory } from "../database/blogCategories";
import { BlogType, createBlog, deleteBlog, updateBlog } from "../database/blogs";
import { revalidateCache, uploadFileToCloudinary } from "../functions/server/helper";

export async function createBlogAction(formData: FormData) {
  const imageData = formData.get("image") as File;
  const buffer = Buffer.from(await imageData.arrayBuffer());
  const filename = Date.now()+".png";
  const _path = path.join(process.cwd(), "public/uploads/" + filename);
  await fs.promises.mkdir(_path, { recursive: true })
  await writeFile(_path, buffer);
  const secure_url="";
  const data: BlogType = {
    title: formData.get("title")?.toString()||'',
    slug: formData.get("slug")?.toString().replace(" ", "-")||'',
    content: formData.get("content")?.toString()||'',
    excerpt: formData.get("excerpt")?.toString()||'',
    image: secure_url,
    meta_title: formData.get("metatitle")?.toString()||'',
    meta_description: formData.get("metadescription")?.toString()||'',
    author: formData.get("author")?.toString()||'',
    category_id: parseInt(formData.get("category_id")?.toString()||'-1'),
  }
  const res = await createBlog(data);
  revalidateCache();
  return res;
}

export async function createBlogCategoryAction(prevState: any, formData: FormData) {
  const name = formData.get('name')?.toString()||'';
  const slug = formData.get('slug')?.toString()||'';
  const res = await addBlogCategory(name, slug);
  if (!res) {
    return {
      error: 'Something went wrong!'
    }
  } else {
    revalidateCache();
    redirect('/admin/blog-categories')
  }
}

export async function deleteBlogAction(prevState: any, formData: FormData) {
  const id = parseInt(formData.get('id')?.toString()||'');
  if (await deleteBlog(id)) {
    return {
      message: 'Blog Deleted!'
    }
  } else {
    return {
      message: 'Something went wrong!'
    }
  }
}

export async function updateBlogAction(blog: BlogType) {
  if (!blog.image.startsWith('https://')) {
    const { secure_url } = await uploadFileToCloudinary(blog.image);
    blog.image = secure_url;
  }
  blog.slug = blog.slug.replace(" ", "-");
  const res = await updateBlog(blog);
  revalidateCache();
  return res;
}

export async function deleteCategoryAction(id: number) {
  const res = await deleteCategory(id);
  return res;
}