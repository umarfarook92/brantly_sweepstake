"use client";

import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden text-white">

      {/* Background */}
     <Image
  src="/images/bg.png"
  alt="Background"
  fill
  priority
  className="object-cover"
/>

      {/* Overlay (dark + red gradient like Figma) */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-red-900/50" />

      {/* Right Content */}
      <div className="relative z-10 h-full flex items-center justify-end px-[120px]">

        <div className="max-w-[520px]">

          {/* Logo */}
          <Image
            src="/images/logo.png"
            alt="Logo"
            width={260}
            height={117}
            className="mb-[24px]"
          />

          {/* Heading */}
          <h2 className="text-[20px] font-semibold tracking-wide leading-[28px] mb-[20px]">
            PRE-SAVE THE NEW ALBUM <br />
            FOR A CHANCE TO WIN!
          </h2>

          {/* Car Image */}
          <div className="mb-[20px]">
            <Image
              src="/images/car.png"
              alt="Car"
              width={260}
              height={150}
            />
          </div>

          {/* Prize List */}
          <div className="text-[13px] leading-[20px] text-gray-200 space-y-[4px] mb-[20px]">
            <p>WIN A POLARIS RZR 1000</p>
            <p>FOUR (4) TICKETS TO A 2026 BRANTLEY GILBERT SHOW</p>
            <p>MEET & GREET WITH BRANTLEY GILBERT</p>
            <p>SIGNED BRANTLEY GILBERT GUITAR</p>
          </div>

          {/* Small description */}
          <p className="text-[12px] text-gray-400 mb-[20px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>

          {/* CTA Button */}
          <button className="bg-black px-[28px] py-[12px] text-[14px] font-semibold tracking-widest hover:bg-gray-800 transition">
            ENTER HERE
          </button>

        </div>
      </div>
    </section>
  );
}