import { useState } from "react";
import data from "./data";
import List from "./list";

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
          <List persons={persons} />
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
