// "server only";

import pathnames from "@/constants/pathnames";
import { redirect } from "next/navigation";
import { cookies } from "next/headers";

// import {  } from 'next'

export default function withAuth(Component: React.ComponentType) {
  return async function (props: any) {
    const accessToken = (await cookies()).get("accessToken");

    if (!accessToken) {
      return redirect(pathnames.LOGIN);
    }

    return <Component {...props} />;
  };
}
