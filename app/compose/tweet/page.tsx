// import Link from "next/link";
import React from "react";
import TweetForm from "./_components/tweet-form";
import { UserButton, auth, clerkClient, currentUser } from "@clerk/nextjs";

const TweetPage = async () => {
  // how to get author and author email from fucking
  // const { session } = auth();
  // const userEmail = session.
  // console.log(userEmail);
  const user = await currentUser();
  const authorEmail = user?.emailAddresses[0].emailAddress || "";
  const author = `${user?.firstName} ${user?.lastName}`;
  const authorImage = user?.imageUrl || "";

  return (
    <div>
      <div className="flex justify-between">
        {/* <Link href="/home">back</Link> */}
      </div>
      <TweetForm
        authorImage={authorImage}
        author={author}
        authorEmail={authorEmail}
      />
    </div>
  );
};

export default TweetPage;
