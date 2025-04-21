import Galaxy from "./Galaxy";

function Hero() {
  return (
    <section className="h-screen min-h-80 flex flex-col items-center mt-5">
      <h1 className="mt-30 font-bold text-2xl md:text-4xl text-center mb-5">
        Hi, I'm Gavin
      </h1>
      <p className="max-w-xl text-md/loose text-center">
        I am a full-stack developer who aims to create web applications with
        innovative ideas and great user experience.
      </p>
      <Galaxy />
    </section>
  );
}

export default Hero;
