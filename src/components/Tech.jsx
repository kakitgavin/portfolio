import { techCard } from "../constants";

function Tech() {
  return (
    <section className="flex flex-col items-center gap-5 px-5 w-full mt-20">
      <h1 className="text-3xl md:text-5xl font-bold text-center mb-10 mt-10 text-green-400">
        Tech Stack
      </h1>
      <ul className="grid grid-cols-3 md:grid-cols-4 gap-5">
        {techCard.map((element) => (
          <li key={element.id} className="w-full flex flex-col items-center">
            <img src={element.imgPath} className="object-scale-down w-30" />
            <div className="text-sm mt-2">{element.name}</div>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Tech;
