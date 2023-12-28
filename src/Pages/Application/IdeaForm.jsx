import TextareaComponent from "../../Components/Textarea/TextareaComponent";
import { Select, Option } from "@material-tailwind/react";
import { Button, Input } from "@material-tailwind/react";


export default function IdeaForm() {
  return (
    <div className=" flex flex-col mt-10 gap-10 px-5  ">
        {/* <div className=" w-full  ">
          <img
            src="public\images\application\startup.jpg"
            className=" rounded-2xl  "
            alt="startup-team"
          />
        </div> */}
        <form
          className= " overflow-hidden w-full flex flex-col gap-5 border border-dtbi-blue rounded-lg bg-gray-100 max-w-7xl mx-auto "
        >
          <div className=" bg-dtbi-blue text-white p-5 ">
            <header className=" text-center capitalize  md:text-2xl"> Apply for Idea Stage </header>
          </div>

          <div className=" flex flex-col gap-5 p-5">
            <header className=" font-semibold text-2xl text-dtbi-blue  ">
              {" "}
              Personal Details{" "}
            </header>
            <div className=" flex flex-col md:flex-row gap-5">
              <Input variant="outlined" label="Surname" />
              <Input variant="outlined" label="First Name" />
              <Input variant="outlined" label="Middle Name" />
            </div>

            <div className=" flex flex-col md:flex-row gap-5">
              <Input type="number" label="Age" />
              <Select
                variant="outlined"
                label="Gender"
                animate={{
                  mount: { y: 0 },
                  unmount: { y: 25 },
                }}
              >
                <Option> Male </Option>
                <Option> Female </Option>
              </Select>
            </div>

            <header className=" font-semibold text-2xl text-dtbi-blue  ">
              {" "}
              Location and Contact{" "}
            </header>

            <div className=" flex flex-col md:flex-row gap-5">
              <Input variant="outlined" label="Postal Address" />
              <Input variant="outlined" label="Street name" />
              <Input variant="outlined" label="Current Residence" />
              <Input variant="outlined" label="House Number" />
            </div>

            <div className=" flex flex-col md:flex-row gap-5 ">
              <Input variant="outlined" label="Country name" />
              <Input variant="outlined" label="Phone Number" />
              <Input type="email" variant="outlined" label="Email Address" />
            </div>

            <header className=" font-semibold text-2xl text-dtbi-blue  ">
              Category{" "}
            </header>

            <div className=" flex flex-col md:flex-row gap-5 ">
              <div className=" w-full flex flex-col gap-3">
                <label className=" text-sm text-gray-500" htmlFor="">
                  {" "}
                  How did you learn about DTBi Incubation Program? *{" "}
                </label>
                <Select
                  variant="outlined"
                  label="Your Response"
                  animate={{
                    mount: { y: 0 },
                    unmount: { y: 25 },
                  }}
                >
                  <Option>Internet</Option>
                  <Option>Social Media</Option>
                  <Option> Friends/Colleagues </Option>
                  <Option> DTBi Website </Option>
                  <Option>COSTECH Program </Option>
                  <Option> Startup Event </Option>
                  <Option> Social Network </Option>
                  <Option> DTBi Office </Option>
                  <Option> DTBi Staff/ Post Employee </Option>
                </Select>
              </div>

              <div className=" w-full flex flex-col gap-3 ">
                <label className=" text-sm text-gray-500" htmlFor="">
                  {" "}
                  In which industry category does your business idea fits in?{" "}
                </label>
                <Select
                  variant="outlined"
                  label="Select Version"
                  animate={{
                    mount: { y: 0 },
                    unmount: { y: 25 },
                  }}
                >
                  <Option> Agribusiness</Option>
                  <Option> Manufacturing</Option>
                  <Option> Tourism</Option>
                  <Option> Insurance</Option>
                  <Option> Energy</Option>
                  <Option> Health</Option>
                  <Option> Other</Option>
                </Select>
              </div>
            </div>
            <header className=" font-semibold text-2xl text-dtbi-blue  ">
              Idea Information{" "}
            </header>

            <div className=" flex flex-col md:flex-row gap-5 ">
              <TextareaComponent label="Describe the problem you are solving in less than 200 words" />
              <TextareaComponent label="Indicate your target market in less than 200 words" />
            </div>
            <div className=" flex flex-col md:flex-row gap-5 ">
              <TextareaComponent label="Briefly describe the solution you are bringing in the market in less than 200 words" />
              <TextareaComponent label="Explain your solution competitive advantage in less than 200 words" />
            </div>
          </div>

          <Button ripple={true} className=" bg-dtbi-orange m-5 ">
            {" "}
            Submit{" "}
          </Button>
        </form>
      </div>
  )
}
