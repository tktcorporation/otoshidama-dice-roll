import { useState } from "react";
import { Button } from "~/components/ui/button";
import Head from "next/head";

import { api } from "~/utils/api";

function Dice() {
  const [dice, setDice] = useState({
    diceResult: [1, 1, 1],
    total: "0",
  });
  const { refetch } = api.dice.dice.useQuery(undefined, {
    enabled: false,
    onSuccess: (data) => {
      if (data) {
        setDice({
          diceResult: [
            data.diceResult[0],
            data.diceResult[1],
            data.diceResult[2],
          ],
          total: data.total.toLocaleString(),
        });
      }
    },
  });

  const handleRollClick = async () => {
    await refetch();
  };

  return (
    <div className="flex flex-col items-center justify-center py-2">
      <div className="flex space-x-4">
        <div className="flex h-16 w-16 items-center justify-center rounded-md border-2 border-[#960000]">
          <span className="text-2xl font-bold">{dice.diceResult[0]}</span>
        </div>
        <div className="flex h-16 w-16 items-center justify-center rounded-md border-2 border-[#960000]">
          <span className="text-2xl font-bold">{dice.diceResult[1]}</span>
        </div>
        <div className="flex h-16 w-16 items-center justify-center rounded-md border-2 border-[#960000]">
          <span className="text-2xl font-bold">{dice.diceResult[2]}</span>
        </div>
      </div>

      <h2 className="mt-6 text-2xl font-semibold">Total: ¥{dice.total}</h2>
      {dice.total === "0" && (
        <Button variant="secondary" className="mt-6" onClick={handleRollClick}>
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
