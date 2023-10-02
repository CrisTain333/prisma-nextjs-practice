import { prisma } from "@/global/prisma";

export default async function Home() {
  const users = await prisma.user.findMany();

  // console.log(user);

  return (
    <>
      <h2 className="text-5xl text-center mt-20">
        All Users
      </h2>
      {users.map((user) => (
        <p className="text-3xl my-3 font-semibold text-amber-400">
          Hello {user.name}
        </p>
      ))}
    </>
  );
}
