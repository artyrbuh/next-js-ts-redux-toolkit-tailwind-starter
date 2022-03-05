import Link from "next/link";

const Nav = (): JSX.Element => (
  <nav className="container flex items-center py-4 mt-4 sm:mt-12">
    <div>
      <h1 className=" text-2xl">🤙</h1>
    </div>
    <ul className="flex-1 flex justify-end items-center gap-12">
      <li><Link href="/">Home</Link></li>
      <li><Link href="/blog">Blog</Link></li>
      <li><Link href="/redux">Redux</Link></li>
      <li><Link href="/async-redux">Async Redux</Link></li>
    </ul>
  </nav>
);

export default Nav;
