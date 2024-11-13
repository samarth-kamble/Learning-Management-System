import { createClerkClient } from "@clerk/nextjs/server";

const clerkClient = createClerkClient({
  secretKey: process.env.CLERK_SECRET_KEY,
});

export const getUser = async () => {
  try {
    const userList = await clerkClient.users.getUserList();

    const users = userList.data.map((user: any) => ({
      id: user.id,
      firstName: user.firstName,
      lastName: user.lastName,
      createdAt: user.createdAt,
    }));

    console.log(users);
    console.log(userList);
  } catch (error) {
    console.log("[GET_USER]", error);
  }
};
