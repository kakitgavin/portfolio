function About() {
  return (
    <section
      id="aboutSection"
      className="flex flex-col items-center gap-5 px-5 w-full"
    >
      <div>
        <h1 className="text-3xl md:text-5xl font-bold text-center mb-10 mt-10 text-blue-500">
          About Me
        </h1>
        <p className="text-sm/loose max-w-xl mb-5">
          After competing in the WorldSkills 2022 Mobile Robotics, I found my
          passion in software development while creating games with c++.
          Currently inspired to become a full-stack developer who can build
          creative web-applications and provide innovative solutions to real
          life situations.
        </p>
      </div>
    </section>
  );
}

export default About;
