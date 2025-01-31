import { getSessionData } from "@src/lib/session/getSession";
import Image from "next/image";
import Link from "next/link";

export default async function AdminHeader() {

  const session = await getSessionData();

  return <header className="bg-black">
    <div className="container m-auto py-4">
      <div className="flex justify-between border-b borer-gray-500 pb-3">
        <div className="flex gap-5 text-white uppercase">
          <Link href="/">
            <Image alt="logo" src="/images/logo.png" width={100} height={50}></Image>
          </Link>
          <Link className="font-bold text-md" href="/admin/">Images</Link>
          <Link className="font-bold text-md" href="/admin/blogs">Blogs</Link>
          <Link className="font-bold text-md" href="/admin/settings">Settings</Link>
          <Link className="font-bold text-md" href="/admin/banner">Banner</Link>
          {
            !session.loggedIn && <Link className="font-bold text-md" href="/admin/login">Login</Link>
          }
        </div>
      </div>
    </div>
  </header>;
}