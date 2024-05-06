// "use client";

import Link from "next/link";
import Image from "next/image";
import { signIn, signOut, getServerSession, getProviders } from "next-auth";

const Nav = () => {
  return (
    <nav className="flex-between w-full mb-16 pt-3">
      <Link href="/" className="flex gap-2 flex-center">
        <Image
          src="/assets/images/logo.svg"
          alt="logo"
          width={30}
          height={30}
          className="object-contain"
        />
        <p className="max-sm:hidden font-satoshi font-semibold text-lg text-black tracking-wide">
          Suggestions à Gogo
        </p>
      </Link>
    </nav>
  );
};

export default Nav;
