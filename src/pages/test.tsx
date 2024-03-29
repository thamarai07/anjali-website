import { useEffect, useState } from "react";
import db from "../../database";

const MyComponent = () => {
  const [data, setData] = useState<any>([]);

  useEffect(() => {
    db.query('SELECT * FROM users', (err: any, results: any) => {
      if (err) {
        console.error('Error executing query:', err);
        return;
      }
      
      setData(results);
    });
  }, []);

  return (
    <div>
      <h1>My Component</h1>
      <ul>
        {data.map((value: any, index: number) => (
          <li key={index}>{value}</li> // Adjust this according to your data structure
        ))}
      </ul>
    </div>
  );
};

export default MyComponent;
