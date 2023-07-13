import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Button,
} from "@material-tailwind/react";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Single = () => {
  const { id } = useParams();
  const [compData, setData] = useState();

  useEffect(() => {
    axios.get(`https://fakestoreapi.com/products/${id}`)
    .then(function (res) {
      setData(res.data);
    });
  }, []);
  // console.log(compData);
  return (
    <>
      <Card className="flex-row w-[100%] mt-5 py-2">
        <CardHeader
          shadow={false}
          floated={false}
          className="w-2/5 shrink-0 m-0 rounded-r-none"
        >
          <img
            src={compData?.image}
            alt="image"
            className="w-full   object-cover"
          />
        </CardHeader>
        <CardBody>
          <Typography variant="h6" color="blue" className="uppercase mb-4">
          {compData?.category}
          </Typography>
          <Typography variant="h4" color="blue-gray" className="mb-2">
          {compData?.title}
          </Typography>
          <Typography color="gray" className="font-normal mb-8">
          {compData?.description}
          </Typography>
          <a href="#" className="inline-block">
            
          </a>
        </CardBody>
      </Card>
    </>
  );
};
export default Single;
