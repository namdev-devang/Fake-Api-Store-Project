import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CatShow from "./CatShow";

const CategoryData = () => {
  const { name } = useParams();
  const [cateData, setData] = useState([]);

  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products/category/${name}`)
      .then(function (res) {
        setData(res.data);
      });
  }, []);
  console.log(cateData);
  return (
    <>
    <h1 className="text-3xl shadow-lg shadow-blue-gray-100 underline text-center my-14">Get {name} Product's</h1>
      <div className="py-8 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-3">
          {cateData.map((dev) => (
            <CatShow key={dev.name} dev={dev}></CatShow>
          ))}
        </div>
      </div>
    </>
  );
};
export default CategoryData;
