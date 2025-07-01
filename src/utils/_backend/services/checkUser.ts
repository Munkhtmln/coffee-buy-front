import { getUsers } from "./getUsers";

export async function checkUser({
  username,
  password,
}: {
  username: string;
  password: string;
}) {
  const users = await getUsers();
  const foundUser = users.find((user) => user.email === username);
  if (!foundUser) {
    return new Response(
      JSON.stringify({ message: "Хэрэглэгч олдсонгүй", error: true }),
      {
        status: 404,
      }
    );
  }
  const isCorrect = foundUser.password === password;

  if (!isCorrect) {
    return new Response(
      JSON.stringify({ message: "Нууц үг буруу байна!", error: true }),
      {
        status: 404,
      }
    );
  }
  return new Response(
    JSON.stringify({ message: "Амжилттай нэвтэрлээ", foundUser }),
    {
      status: 200,
    }
  );
}
