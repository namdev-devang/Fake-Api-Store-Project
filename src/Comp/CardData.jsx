import axios from "axios";
import { useEffect, useState } from "react";
import CategoriesData from "./CategoriesData";
import ShowData from "./ShowData";
const CardData = () => {
  const [temData, setData] = useState([]);

  useEffect(() => {
    axios
    .get("https://fakestoreapi.com/products")
    .then(function (res) {
      setData(res.data);
    });
  }, []);

  console.log(temData);
  return (
    <>
      <CategoriesData />  
      <div className="py-8 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {
              temData.map(data => <ShowData key={data.id} data={data}></ShowData>)
          }
        </div>
      </div>
    </>
  );
};
export default CardData;
