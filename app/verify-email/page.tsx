import { getSessionData } from "@src/lib/session/getSession";
import ClientPage from "./clientPage";

export default async function Page() {

  const session = await getSessionData();

  return <ClientPage email={session.user.email} />
}