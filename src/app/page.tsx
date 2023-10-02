import { prisma } from "@/global/prisma";
import CreateUser from "./components/CreateUser";
import UserCard from "./components/UserCard";

export default async function Home() {
  const users = await prisma.user.findMany();

  // console.log(user);

  return (
    <>
      <div>
        <CreateUser />
      </div>

      <h2 className="text-5xl text-center mt-20">
        All Users
      </h2>
      {/* {users.map((user) => (
        <p className="text-3xl my-3 font-semibold text-amber-400">
          Hello {user.id}.{user.name}
        </p>
      ))} */}
      <UserCard data={users} />
    </>
  );
}
