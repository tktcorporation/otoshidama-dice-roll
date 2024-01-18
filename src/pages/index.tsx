import { useState } from "react";
import { Button } from "~/components/ui/button";
import Head from "next/head";

import { api } from "~/utils/api";

function Dice() {
  const [first, setFirst] = useState(0);
  const [second, setSecond] = useState(0);
  const [third, setThird] = useState(0);
  const [total, setTotal] = useState(0);

  const dice = api.dice.dice.useQuery();

  const handleRollClick = () => {
    if (dice.data) {
      setFirst(
        typeof dice.data.diceResult[0] === "number"
          ? dice.data.diceResult[0]
          : 0,
      );
      setSecond(
        typeof dice.data.diceResult[1] === "number"
          ? dice.data.diceResult[1]
          : 0,
      );
      setThird(
        typeof dice.data.diceResult[2] === "number"
          ? dice.data.diceResult[2]
          : 0,
      );
      setTotal(typeof dice.data.total === "number" ? dice.data.total : 0);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center py-2">
      <div className="flex space-x-4">
        <div className="flex h-16 w-16 items-center justify-center rounded-md border-2 border-[#960000]">
          <span className="text-2xl font-bold">{first}</span>
        </div>
        <div className="flex h-16 w-16 items-center justify-center rounded-md border-2 border-[#960000]">
          <span className="text-2xl font-bold">{second}</span>
        </div>
        <div className="flex h-16 w-16 items-center justify-center rounded-md border-2 border-[#960000]">
          <span className="text-2xl font-bold">{third}</span>
        </div>
      </div>

      <h2 className="mt-4 text-2xl font-semibold">Total: ¥{total}</h2>
      {!total && (
        <Button variant="secondary" className="mt-4" onClick={handleRollClick}>
          Roll
        </Button>
      )}
    </div>
  );
}

export default function Home() {
  const hello = api.post.hello.useQuery({ text: "from tRPC" });

  return (
    <>
      <Head>
        <title>お年玉サイコロ</title>
        <meta name="description" content="お年玉サイコロ" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#C99C33] to-[#fff] text-[#960000]">
        <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 ">
          <h1 className="text-5xl font-extrabold tracking-tight sm:text-[4rem]">
            お年玉サイコロ
          </h1>
          {/* <p className="text-2xl text-white">
            {hello.data ? hello.data.greeting : "Loading tRPC query..."}
          </p> */}
          <Dice />
        </div>
      </main>
    </>
  );
}
