"use client";
import Feed from "@components/Feed";

const Home = () => {
  return (
    <>
      <section className="w-full flex-center flex-col">
        <h1 className="mt-5 text-5xl font-extrabold leading-[1.15] text-black sm:text-6xl text-center">
          Create and Share
          <br className="max=md:hidden" />
          <span className="text-center bg-gradient-to-r from-amber-500 via-orange-600 to-yellow-500 bg-clip-text text-transparent">
            Advice and Tips for Everyday
          </span>
        </h1>
        <p className=" mt-5 text-lg text-gray-600 sm:text-xl max-w-2xl text-center">
          Life is tough. We're all lost. Maybe along the way, you discovered
          something worthwhile. Share some wisdom. We all need it.
        </p>
      </section>

      <Feed />
    </>
  );
};

export default Home;
