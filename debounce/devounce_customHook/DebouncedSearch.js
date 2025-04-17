// DebouncedSearch.js
import{ useState, useEffect } from 'react';
import useDebounce from './useDebounce';

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

export default function DebouncedSearch() {

  const [input, setInput] = useState('');
  const debouncedInput = useDebounce(input, 500);
  const [results, setResults] = useState([]);

  useEffect(()=>{
    setResults(fruits.filter(fruit=> fruit.includes(debouncedInput)))
  }, [debouncedInput])

  return (
    <div>
      <input type="text" value={input} onChange={(e) => setInput(e.target.value)} />

      <ul>
        {results.length > 0 ? (
          results.map((item, index) => <li key={index}>{item}</li>)
        ) : debouncedInput ? (
          <li>No results found</li>
        ) : (
          <li>No results found</li>
        )}
      </ul>
    </div>
  );
};


