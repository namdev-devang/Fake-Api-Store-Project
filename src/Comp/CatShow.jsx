import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
} from "@material-tailwind/react";
const CatShow = ({ dev }) => {
  const { category, description, image, price } = dev;
  return (
    <>
      <Card className="w-96 shadow-2xl rounded-2xl ml-2">
        <CardHeader color="blue-gray" className="relative">
          <img
            src={image}
            alt="img-blur-shadow"
            layout="fill"
            className="h-[25rem] w-auto"
          />
        </CardHeader>
        <CardBody>
          <Typography variant="h5" color="blue-gray" className="mb-2">
            <b>${price}</b> <br />
            <b>{category}</b> <br />
          </Typography>
          <Typography>{description.slice(0, 100)}</Typography>
        </CardBody>
        <CardFooter className="pt-0">
        
        </CardFooter>
      </Card>
    </>
  );
};
export default CatShow;
