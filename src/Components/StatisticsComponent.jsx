import { Typography } from "@material-tailwind/react";

export default function StatisticsComponent() {
  return (
    <div className=" text-center py-5 bg-orange-600 text-white md:mx-5 md:rounded-xl ">
      <Typography variant="lead"> Our Stats </Typography>
      <Typography variant="h3" className=" capitalize "> Your life will be much easier </Typography>
      <Typography variant="paragraph" className=" md:w-3/5 mx-auto ">
        {" "}
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi harum
        laborum sed, voluptates, quaerat dicta officia corporis, provident
        obcaecati atque quisquam?
      </Typography>


      <div className=" flex items-center justify-around py-5  ">
        <div className=" flex flex-col">
            <Typography variant="h1"> 30+ </Typography>
            <Typography> Total Innovations </Typography>
        </div>

        <div className=" flex flex-col">
            <Typography variant="h1"> 38+ </Typography>
            <Typography> Total Incubatees </Typography>
        </div>

        <div className=" flex flex-col">
            <Typography variant="h1"> 659+ </Typography>
            <Typography> Direct Employment </Typography>
        </div>

        <div className=" flex flex-col">
            <Typography variant="h1"> 17000+ </Typography>
            <Typography> Indirect Employment </Typography>
        </div>
      </div>
    </div>
  );
}
