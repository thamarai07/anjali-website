import { useEffect, useState } from "react";
import db from "../../database"

const MyComponent = () => {
  const [data, setData] = useState<any>([]);

  useEffect(() => {
    db.query('SELECT * FROM users', (err, results) => {
      if (err) {
        console.log(err);
        return;
      }

      setData(results);
    });
  }, []);

  return (
    <div>
      <h1>My Component</h1>
      <ul>
        {data.map((values : any)=>(
          values
        ))}
      </ul>
    </div>
  );
};

export default MyComponent;