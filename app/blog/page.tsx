import getBlogs from "@src/lib/database/blogs";
import ClientPage from "./clientPage";

export default async function Page() {
  const blogs = await getBlogs('');

  return (
    <ClientPage
      blogs={blogs}
    />
  );
}