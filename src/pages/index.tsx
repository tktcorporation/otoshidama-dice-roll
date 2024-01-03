import Head from "next/head";

import { api } from "~/utils/api";

function Dice() {
  return (
    <div className="flex flex-col items-center justify-center bg-gray-100 py-2">
      <div className="flex space-x-4">
        <div className="flex h-16 w-16 items-center justify-center rounded-md border-2 border-gray-300">
          <span className="text-2xl font-bold">3</span>
        </div>
        <div className="flex h-16 w-16 items-center justify-center rounded-md border-2 border-gray-300">
          <span className="text-2xl font-bold">4</span>
        </div>
        <div className="flex h-16 w-16 items-center justify-center rounded-md border-2 border-gray-300">
          <span className="text-2xl font-bold">5</span>
        </div>
      </div>
      <h2 className="mt-4 text-2xl font-semibold">Total: $12</h2>
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
      <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c]">
        <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 ">
          <h1 className="text-5xl font-extrabold tracking-tight text-white sm:text-[5rem]">
            お年玉サイコロ
          </h1>
          <p className="text-2xl text-white">
            {hello.data ? hello.data.greeting : "Loading tRPC query..."}
          </p>
          <Dice />
        </div>
      </main>
    </>
  );
}
