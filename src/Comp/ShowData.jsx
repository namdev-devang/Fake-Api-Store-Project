import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";  
import { Link } from "react-router-dom";

const ShowData = ({data}) =>{
    const { category, description, image, price, id } = data;
    return(
        <>  
      <Card className="mt-10 w-96 shadow-2xl rounded-2xl ml-2">
        <CardHeader color="blue-gray" className="relative">
          <img src={image} alt="img-blur-shadow" layout="fill" className="h-[25rem] w-auto" />
        </CardHeader>
        <CardBody>
          <Typography variant="h5" color="blue-gray" className="mb-2">
           <b>${price}</b> <br />
           <b>{category}</b> <br />
          </Typography>
          <Typography>{description.slice(0, 50)}</Typography>
        </CardBody>
        <CardFooter className="pt-0">
          <Link to={`/product/${id}`}>
            <Button className="bg-blue-500 rounded-md py-2 my-2 ml-1">Qucik View</Button>
          </Link>
        </CardFooter>
      </Card>
        </>
    )
}
export default ShowData; 