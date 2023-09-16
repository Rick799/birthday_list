/* eslint react/prop-types: 0 */

const List = ({ people1 }) => {
  return (
    <>
      {people1.map((person) => {
        const { id, name, age, image } = person;
        return (
          <article key={id} className="h-28 w-96 mx-10 flex items-center">
            <img
              className="w-20 h-20 rounded-full object-cover mr-6"
              src={image}
              alt={name}
            />
            <div>
              <h4 className="mb-2 tracking-widest leading-5 font-bold">
                {name}
              </h4>
              <p className="text-slate-700">{age} years</p>
            </div>
          </article>
        );
      })}
    </>
  );
};

export default List;
