import React from "react";
import Person from "./person";

const List = ({ persons }) => {
  return (
    <section>
      {persons.map((people) => {
        return <Person key={people.id} {...people} />;
      })}
    </section>
  );
};

export default List;
