import { expCard } from "../constants";

function Experience() {
  return (
    <section id="experienceSection" className="flex flex-col w-full mt-20">
      <h1 className="text-2xl md:text-4xl/snug font-bold mt-10 mx-auto text-center text-pink-500">
        Experience and Educations
      </h1>
      <ul className="mx-auto">
        {expCard.map((element) => (
          <li
            key={element.id}
            className="p-5 m-10 max-w-xl rounded-xl border-3 border-pink-500/20"
          >
            <h1 className="text-lg mb-2 rounded-sm">{element.title}</h1>
            <div className="font-light text-xs mb-5">{element.time}</div>
            <img
              className="object-scale-down w-3/4 mx-auto mb-6 rounded-2xl"
              src={element.imgPath}
            />
            <div className="text-sm/loose w-full">{element.description}</div>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Experience;
