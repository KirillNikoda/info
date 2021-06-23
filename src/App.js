import axios from "axios";
import { useEffect, useState } from "react";

import "./index.css";

function App() {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get("https://balances.vercel.app/api/getHighestBalance")
      .then((res) => {
        setData(res.data);
        console.log(data);
      });
  }, [data]);

  return (
    <div className="App">
      <table border="1">
        <caption>TVL Rates</caption>
        <tr className="my-tr">
          <th>DAO Name</th>
          <th>TVL</th>
        </tr>
        {data.map((data) => {
          return (
            <tr>
              <td>{data.name}</td>
              <td>{data.usd_value}$</td>
            </tr>
          );
        })}
      </table>
    </div>
  );
}

export default App;
