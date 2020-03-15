import Link from "next/link";

const Nav = () => (
  <>
    <Link href="/about" as={process.env.BACKEND_URL + "/about"}>
      <a>about</a>
    </Link>{" "}
    <Link href="/blog" as={process.env.BACKEND_URL + "/blog"}>
      <a>blog</a>
    </Link>
  </>
);

export default Nav;
