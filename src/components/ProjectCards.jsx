function ProjectCards({ id, name, description, imgPath }) {
  return (
    <div className="border-2 border-yellow-300 w-full min-w-60 max-w-100 rounded-xl overflow-hidden mx-auto">
      <img src={imgPath} />
      <h1 className="text-center text-lg mt-5 px-5 font-bold">{name}</h1>
      <p className="p-3 text-xs/normal ml-4">{description}</p>
    </div>
  );
}

export default ProjectCards;
