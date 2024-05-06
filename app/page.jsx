const Home = () => {
  return (
    <section className="w-full flex-center flex-col">
      <h1 className="mt-5 text-5xl font-extrabold leading-[1.15] text-black sm:text-5xl text-center">
        A toi de decouvrir et partager
        <br className="max=md:hidden" />
        <span className="text-center bg-gradient-to-r from-amber-500 via-orange-600 to-yellow-500 bg-clip-text text-transparent">
          des instructions pour l'IA
        </span>
      </h1>
      <p className=" mt-5 text-lg text-gray-600 sm:text-xl max-w-2xl text-center">
        Suggestions à GoGo est un programme open-source IA. Outil à suggestion
        pour le monde moderne, afin de partager et de decouvrir des suggestions.
      </p>
    </section>
  );
};

export default Home;
