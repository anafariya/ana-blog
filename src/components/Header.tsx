import Image from "next/image";
import Link from "next/link";

function Header() {
  return (
    <header className="flex w-70vw items-center justify-between px-10 py-5">
      <div>
        <Link href="./">
          <Image
            src="/AF_Logo.png"
            alt="AF logo"
            width={100}
            height={100}
            className="rounded-full"
          />
        </Link>
      </div>

      <div>
        <Link href="https://github.com/anafariya">
          <h3 className="bg-pink-400 font-medium px-5 py-3 text-red-900 text-lg md:text-base rounded-full cursor-pointer">My GitHub</h3>
        </Link>
      </div>
    </header>
  );
}

export default Header;
