import { useState } from "react";
import data from "./data.js";
import List from "./List.jsx";

const App = () => {
  const [people, setPeople] = useState(data);

  const handleClear = () => {
    setPeople([]);
  };

  return (
    <main>
      <section className="container">
        <h3>{people.length} Birthday's Today</h3>
        <List people={people} />
        <button type="button" onClick={handleClear} className="btn btn-block">
          Clear All
        </button>
      </section>
    </main>
  );
};
export default App;
