import { runQuery } from "@/service/queryservice";
import { NextResponse } from "next/server";

export async function POST(req: Request): Promise<NextResponse> {
  try {
    const { username, email, password } = await req.json();
    const getUser = `SELECT * FROM "public"."User" WHERE "Username" = $1`;

    console.log("user", username);

    const user = await runQuery(getUser, [username]);

    if (user.length <= 0) {
      return new NextResponse(JSON.stringify({ error: "user not found" }), {
        status: 401,
      });
    }
    // const passwordcheck = user[0].password === password;
    // if (!passwordcheck) {
    //   return new NextResponse(JSON.stringify({ error: "incorrect password" }), {
    //     status: 401,
    //   });
    // }
    const createUser = `INSERT INTO "User"(username, email,password) VALUES($1, $2 , $3) `;
    const newUser = await runQuery(createUser, [username, email, password]);

    return new NextResponse(
      JSON.stringify({ user: newUser[0], message: "goy shsaala" }),
      { status: 201 }
    );
  } catch (err) {
    console.error("Failed to run query:", err);
    return new NextResponse(JSON.stringify({ error: "Failed to run query" }), {
      status: 500,
    });
  }
}
