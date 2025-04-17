import "./styles.css";
import { useState, useMemo, useEffect } from "react";
import debouce from "lodash.debounce";

const fruits = [
  "apple",
  "orange",
  "banana",
  "pear",
  "grapefruit",
  "peach",
  "apricot",
  "nectarine",
  "plum",
  "mango",
  "strawberry",
  "blueberry",
  "kiwi",
  "passionfruit",
  "raspberry",
  "watermelon"
];

export default function App() {
  const [searchTerm, setSearchTerm] = useState("");

  let listToDisplay = fruits;

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  if (searchTerm !== "") {
    listToDisplay = fruits.filter(fruit=> fruit.includes(searchTerm))
  }

  const debouncedResults = useMemo(() => {
    return debouce(handleChange, 300);
  }, []);

  useEffect(() => {
    return ()=> debouncedResults.cancel();
  });

  return (
    <div className="App">
      <h1>Fruit Stand</h1>
      <input type="text" onChange={debouncedResults} />
      <ul>
        {
            listToDisplay.map((fruit, i) => <li key={i}>{fruit}</li>)
        }
      </ul>
    </div>
  );
}
