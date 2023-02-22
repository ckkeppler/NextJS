import Link from "next/link";

export default function Home() {
  return (
    <>
      <h1>Welcome!</h1>
      <p>
        Adipisicing amet culpa sunt amet irure in mollit Lorem aliquip ad est.
      </p>
      <Link href="/about">Visit About page</Link>
    </>
  );
}
