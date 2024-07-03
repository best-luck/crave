//@ts-ignore

import { getSessionData } from "@src/lib/session/getSession";
import { setSessionData } from "@src/lib/session/setSession";
import { redirect } from 'next/navigation'

export async function GET(request: Request) {
  const body = await request.json();
  const { store } = body;
  const session = await getSessionData();
  let user = session.user;
  user[store] = null;
  await setSessionData("user", user);
  redirect("/"+store+"/signin");
}

// The next lines are required for Pages API Routes only
// export const config = {
//   api: {
//     bodyParser: false,
//   },
// };