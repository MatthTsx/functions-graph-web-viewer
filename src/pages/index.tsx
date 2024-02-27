import Head from "next/head";
import React from "react";
import { MainComponent } from "~/components";
import Background from "~/components/Background";

export default function Home() {
  const [mousePos, setPos] = React.useState({x: 0, y:0});

  React.useEffect(() => {
    const func = (e:MouseEvent) => setPos({x: e.clientX, y: e.clientY})
    document.addEventListener("mousemove", func)
    return () => document.removeEventListener("mousemove", func)
  })

  return (
    <>
      <Head>
        <title>idk</title>
      </Head>
      <main className="w-screen h-screen flex justify-center items-center bg-neutral-900 relative overflow-hidden">
          <div className="blur-3xl w-screen h-screen absolute bg-blue-900/15"/>
          <div className="w-96 h-96 bg-purple-500/10 blur-[100px] absolute translate-x-[-50%] translate-y-[-50%]" style={{
            top: mousePos.y + "px",
            left: mousePos.x + "px"
          }}/>
          <Background/>
          <MainComponent/>
      </main>
    </>
  );
}
