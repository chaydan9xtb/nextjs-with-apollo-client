import Link from "next/link";
import Head from "next/head";

const PostLink = (props) => (
  <li>
    <Link as={`/post/${props.id}`} href={`/post?title=${props.title}`}>
      <a className="italic font-bold">{props.title}</a>
    </Link>
  </li>
);

export default function Home(props) {
  return (
    <div>
      <Head>
        <title>Next JS</title>
      </Head>
      <p>Next Js</p>
      <ul className="mt-16">
        <PostLink id="hello-next" title="Hello Next.js" />
        <PostLink id="learn-next" title="Learn Next.js is awesome" />
        <PostLink id="deploy" title="Deploy apps with Zeit" />
      </ul>
    </div>
  );
}
