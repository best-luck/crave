import { getSessionData } from "@src/lib/session/getSession"
import { redirect } from "next/navigation";

export default async function Page() { 
  const session = await getSessionData();
  return redirect(`/${session.store||"cravemonroe"}`);
}