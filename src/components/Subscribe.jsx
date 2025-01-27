const Subscribe = () => {
  return (
    <section
      className="w-full h-auto py-5"
      style={{
        background: "linear-gradient(96.22deg, #FFA229 9%, #1C4670 59.37%)",
      }}
    >
      <div className="lg:container mx-auto px-5 mt-5">
        <p className="font-inter text-[14px] font-semibold leading-[20px] tracking-[-0.1px] text-center decoration-skip-ink text-[rgba(255,255,255,1)]">
          1% OF THE INDUSTRY
        </p>
        <h1 className="font-inter text-[32px] font-bold leading-[40px] tracking-[-0.015em] text-center decoration-skip-ink mt-4 text-[rgba(255,255,255,1)]">
          Welcome to your new digital reality. Now.
        </h1>
      </div>
      <div className="lg:container mx-auto flex justify-center mt-5">
        <input
          type="email"
          placeholder="Enter your email"
          className="px-4 py-2 rounded-l-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button className="bg-[rgba(235,141,21,1)] text-white px-6 py-2 rounded-r-md font-semibold hover:bg-green-700">
          Subscribe
        </button>
      </div>
      <div className="flex mt-5 space-x-4 justify-center">
        <label className="flex items-center">
          <div className="w-4 h-4 rounded-full bg-white border border-gray-400 flex items-center justify-center">
            ✓
          </div>
          <span className="ml-2 text-white">Instant results</span>
        </label>
        <label className="flex items-center">
          <div className="w-4 h-4 rounded-full bg-white border border-gray-400 flex items-center justify-center">
            ✓
          </div>
          <span className="ml-2 text-white">User-friendly interface</span>
        </label>
        <label className="flex items-center">
          <div className="w-4 h-4 rounded-full bg-white border border-gray-400 flex items-center justify-center">
            ✓
          </div>
          <span className="ml-2 text-white">Personalized customization</span>
        </label>
      </div>
    </section>
  );
};

export default Subscribe;
