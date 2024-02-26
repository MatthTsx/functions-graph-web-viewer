import Head from "next/head";
import { MainComponent } from "~/components";

export default function Home() {
  return (
    <>
      <Head>
        <title>idk</title>
      </Head>
      <main className="w-screen h-screen flex justify-center items-center bg-neutral-900">
          <div className="blur-3xl w-screen h-screen absolute bg-blue-900/15"/>
          <MainComponent/>
      </main>
    </>
  );
}
