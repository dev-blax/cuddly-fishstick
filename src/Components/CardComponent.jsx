import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Button,
  } from "@material-tailwind/react";
import { animated } from '@react-spring/web'
   
  export function CardComponent() {
    return (
      

        
        <Card className="mt-6 w-96">
        <CardHeader color="blue-gray" className="relative h-56">
          <img
            src="https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
            alt="card-image"
          />
        </CardHeader>
        <CardBody>
          <Typography variant="h5" color="blue-gray" className="mb-2">
            Lorem ipsum dolor sit amet, consectetur adipisicing.
          </Typography>
          <Typography variant="small" className=" font-bold">
            13 March 2024
          </Typography>
          <Typography>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, ipsum suscipit itaque animi consequatur accusantium autem laborum velit quo voluptates ducimus dolores ipsam corporis possimus!
          </Typography>
        </CardBody>
        <CardFooter className="pt-0">
          <Button>Read More</Button>
        </CardFooter>
      </Card>
    );
  }