import { withApiAuthRequired } from "@auth0/nextjs-auth0";
import { NextResponse } from "next/server";

const withApiAuthRequiredExtended = withApiAuthRequired as any;
export const GET = withApiAuthRequiredExtended(
  async (request: NextResponse, response: NextResponse) => {
    try {
      return NextResponse.json({ message: "Hello World" }, { status: 200 });
    } catch (error) {
      return new Response("error");
    }
  }
);
