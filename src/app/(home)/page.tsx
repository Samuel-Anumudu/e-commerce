import Link from "next/link";
export default function Home({ params }: { params: { slug: string } }) {
  return (
    <>
      <section>
        <h1>Home</h1>
        <ul>
          <li>
            <Link className="underline" href={"/shop/headphones"}>
              Headphones
            </Link>
          </li>
          <li>
            <Link className="underline" href={"/shop/earphones"}>
              Earphones
            </Link>
          </li>
          <li>
            <Link className="underline" href={"/shop/speakers"}>
              Speakers
            </Link>
          </li>
        </ul>
      </section>
    </>
  );
}
