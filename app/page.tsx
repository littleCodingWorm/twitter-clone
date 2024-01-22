import {
  BellIcon,
  HomeIcon,
  MailIcon,
  SearchIcon,
  SettingsIcon,
} from 'lucide-react';
import Image from 'next/image';

const page = () => {
  return (
    <main className="pt-2 px-3 h-full relative flex flex-col justify-between ">
      {/* top stuff */}
      <div className="flex justify-between sm:ml-10 items-center">
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
      <div className="h-full relative p-2">
        <button className="rounded-full absolute w-10 bottom-5 right-2 flex h-10 justify-center items-center bg-sky-500">
          T
        </button>
      </div>
      <div className="flex absolute sm:left-0 sm:pt-4 sm:flex-col sm:top-0 sm:items-start sm:justify-start gap-6 w-full bottom-0 justify-around sm:w-auto sm:border-t-0 sm:border-r border-t items-center p-2">
        <HomeIcon className="sm:h-6 sm:w-6" />
        <SearchIcon className="sm:h-6 sm:w-6" />
        <BellIcon className="sm:h-6 sm:w-6" />
        <MailIcon className="sm:h-6 sm:w-6" />
      </div>
    </main>
  );
};

export default page;
