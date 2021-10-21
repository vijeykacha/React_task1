import axios from "axios";
import { useEffect, useState } from "react";
import "./App.css";
import Counter from "./Counter";

const App = () => {
  const [counter, setCounter] = useState([]);

  const loadItems = async () => {
    const result = await axios.get("http://localhost:3000/items");
    setCounter(result.data);
  };

  useEffect(() => {
    loadItems();
  }, []);

  return (
    <div>
      <table className="m-4 h-screen w-screen fixed">
        <tbody>
          {counter.map((item, index) => {
            return (
              <tr key={index + 1} className="border-b-2 border-gray-400">
                <td className="font-semibold absolute">{item.name}</td>
                <td className="text-gray-500 relative">&#8377;{item.price}</td>
                <td className="text-gray-500 relative">VP:{item.VP}</td>
                <td>
                  <Counter />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default App;
