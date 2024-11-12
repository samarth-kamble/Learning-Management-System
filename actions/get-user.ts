import { createClerkClient } from "@clerk/nextjs/server";

const clerkClient = createClerkClient({
  secretKey: process.env.CLERK_SECRET_KEY,
});

export const getUser = async () => {
  try {
    const userList = await clerkClient.users.getUserList();
    const name = userList.totalCount;
    // console.log(name);
    console.log(userList);
  } catch (error) {
    console.log("[GET_USER]", error);
  }
};
