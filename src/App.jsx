import { useState } from "react";
import data from "./data";

const App = () => {
  const [persons, setPersons] = useState(data);

  const clearAllHandler = () => {
    setPersons([]);
  };

  return (
    <>
      <main>
        <section className="container">
          <h3>{persons.length} Birthdays Today</h3>
          <section>
            {persons.map((person) => {
              const { id, name, age, image } = person;
              return (
                <article key={id} className="person">
                  <img src={image} alt={name} className="img" />
                  <div>
                    <h4>{name}</h4>
                    <p>{age} years</p>
                  </div>
                </article>
              );
            })}
          </section>
          <section>
            <button
              type="button"
              className="btn btn-block"
              onClick={clearAllHandler}
            >
              Clear all
            </button>
          </section>
        </section>
      </main>
    </>
  );
};
export default App;
