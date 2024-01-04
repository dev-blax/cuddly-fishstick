import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
} from "@material-tailwind/react";
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";

const ApplyCard = ({ label, description, imageString, href}) => {
  return (
    <Card className="mt-6 mx-5 md:w-96  ">
      <CardHeader color="blue-gray" className="relative h-56">
        <img alt="card-image" src={imageString} />
      </CardHeader>
      <CardBody>
        <Typography variant="h5" color="blue-gray" className="mb-2">
        {label}
        </Typography>
        <Typography>
          {description}
        </Typography>
      </CardBody>
      <CardFooter className="pt-0">
        {/* <Button>Apply Now</Button> */}
        <Link to={href} className=" btn bg-dtbi-orange text-white  "> Apply Now </Link>
      </CardFooter>
    </Card>
  );
}

ApplyCard.propTypes = {
    label: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    imageString: PropTypes.string.isRequired,
    href: PropTypes.string.isRequired
};


export default ApplyCard;

