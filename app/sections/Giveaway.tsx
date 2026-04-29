"use client";

export default function Giveaway() {
  return (
    <section id="enter" className="py-24 px-6 text-center">
      <h2 className="text-4xl font-bold">
        Enter the Giveaway
      </h2>

      <form className="mt-10 max-w-md mx-auto flex flex-col gap-4">

        <input
          type="text"
          placeholder="Full Name"
          className="p-4 rounded bg-white/10 border border-white/20"
        />

        <input
          type="email"
          placeholder="Email Address"
          className="p-4 rounded bg-white/10 border border-white/20"
        />

        <button className="bg-white text-black py-4 rounded font-semibold">
          Submit Entry
        </button>

      </form>
    </section>
  );
}