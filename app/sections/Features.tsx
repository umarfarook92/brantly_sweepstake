export default function Features() {
  return (
    <section id="features" className="py-24 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">

        <div className="p-8 bg-white/5 rounded-2xl">
          <h3 className="text-xl font-bold">Easy Entry</h3>
          <p className="text-gray-400 mt-3">
            Simple signup process in seconds.
          </p>
        </div>

        <div className="p-8 bg-white/5 rounded-2xl">
          <h3 className="text-xl font-bold">Exclusive Rewards</h3>
          <p className="text-gray-400 mt-3">
            Win premium experiences.
          </p>
        </div>

        <div className="p-8 bg-white/5 rounded-2xl">
          <h3 className="text-xl font-bold">Secure</h3>
          <p className="text-gray-400 mt-3">
            Your data is safe and protected.
          </p>
        </div>

      </div>
    </section>
  );
}