import {
  BellIcon,
  HomeIcon,
  MailIcon,
  SearchIcon,
  SettingsIcon,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const page = () => {
  return (
    <>
      <div className="flex items-center justify-between sm:ml-10">
        <div>user</div>
        <div className="">
          <Image
            className="bg-white"
            src="/twitter.png"
            height={28}
            width={28}
            alt="twitter logo"
          />
        </div>
        <div>
          <SettingsIcon />
        </div>
      </div>
      <div className="relative h-full p-2">
        <Link
          href="/compose/tweet"
          className="absolute bottom-16 right-2 flex h-10 w-10 items-center justify-center rounded-full bg-sky-500 sm:right-6 sm:h-16 sm:w-16"
        >
          T
        </Link>
      </div>
      <div className="absolute bottom-0 flex w-full items-center justify-around gap-6 border-t p-2 sm:left-0 sm:top-0 sm:w-auto sm:flex-col sm:items-start sm:justify-start sm:border-r sm:border-t-0 sm:pt-4">
        <HomeIcon className="sm:h-6 sm:w-6" />
        <SearchIcon className="sm:h-6 sm:w-6" />
        <BellIcon className="sm:h-6 sm:w-6" />
        <MailIcon className="sm:h-6 sm:w-6" />
      </div>
    </>
  );
};

export default page;
