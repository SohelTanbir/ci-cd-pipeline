import Link from "next/link";

export default function HomePage() {
  return (
    <>
      <h3 className="text-xl text-center  my-6">Welcome to the Home </h3>
      <nav className="py-5 bg-gray-500 ">
        <ul className="flex justify-center gap-5 my-5">
          <li>
            <Link href='/'>Home</Link>
          </li>
          <li>
            <Link href='/about'>About</Link>
          </li>
          <li>
            <Link href='/users'>Users</Link>
          </li>
        </ul>
      </nav>

    </>
  );
}
