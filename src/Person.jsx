const Person = ({ id, name, age, image }) => {
  return (
    <article key={id} className="person">
      <img src={image} alt={name} className="img" />
      <div>
        <p>{name}</p>
        <p>{age}</p>
      </div>
    </article>
  );
};

export default Person;
