import Image from "next/image";
export default function Home() {
  return (

    <div className="flex flex-col items-center justify-center min-h-screen p-8 sm:p-20">
      <main className="flex flex-col gap-8 items-center w-full max-w-md">
      <Image
        className="dark:invert"
        src="/next.svg"
        alt="Next.js logo"
        width={180}
        height={38}
        priority
      />
      <h1 className="text-2xl font-bold">Sign In</h1>
      <form className="flex flex-col gap-4 w-full">
        <input
        type="email"
        placeholder="Email"
        className="border border-gray-300 p-2 rounded"
        />
        <input
        type="password"
        placeholder="Password"
        className="border border-gray-300 p-2 rounded"
        />
        <button
        type="submit"
        className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
        >
        Sign In
        </button>
      </form>
      <p className="text-sm">
        Don't have an account?{" "}
        <a href="#" className="text-blue-500 hover:underline">
        Sign Up
        </a>
      </p>
      </main>
    </div>
  );
}
