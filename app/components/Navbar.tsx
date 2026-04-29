"use client";

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full flex justify-between items-center px-8 py-5 bg-black/70 backdrop-blur-md z-50">
      <h1 className="text-white font-bold text-lg">
        Brantley Giveaway
      </h1>

      <div className="flex gap-8 text-gray-300">
        <a href="#hero">Home</a>
        <a href="#enter">Enter</a>
        <a href="#features">Info</a>
      </div>
    </nav>
  );
}