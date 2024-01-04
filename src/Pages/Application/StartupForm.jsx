import TextareaComponent from "../../Components/Textarea/TextareaComponent";
import { Select, Option } from "@material-tailwind/react";
import { Button, Input, Typography } from "@material-tailwind/react";

export default function StartupForm() {
  return (
    <div className=" flex flex-col mt-10 gap-10 px-5  ">
      <form className=" overflow-hidden w-full flex flex-col gap-5 border border-dtbi-blue rounded-lg bg-gray-100 max-w-7xl mx-auto ">
        <div className=" bg-dtbi-blue text-white p-5 ">
          <header className=" text-center capitalize  md:text-2xl">
            {" "}
            Apply for Startup Stage{" "}
          </header>
        </div>

        <div className=" flex flex-col gap-5 p-5">
          <header className=" font-semibold text-2xl text-dtbi-blue  ">
            {" "}
            Startup Details{" "}
          </header>
          <div className=" flex flex-col md:flex-row gap-5">
            <Input variant="outlined" label="Startup Name" />
            <Input
              variant="outlined"
              label="Startup Website/Social Network Link *"
            />
          </div>

          <div className=" flex flex-col md:flex-row gap-5">
            <Select
              variant="outlined"
              label="Is Your Business Registered? *"
              animate={{
                mount: { y: 0 },
                unmount: { y: 25 },
              }}
            >
              <Option> Yes </Option>
              <Option> No </Option>
            </Select>
            <Select
              variant="outlined"
              label="Business Ownership"
              animate={{
                mount: { y: 0 },
                unmount: { y: 25 },
              }}
            >
              <Option> Sole Proprietorship </Option>
              <Option> Partnership </Option>
              <Option> Company Limited By Shares </Option>
            </Select>
          </div>

          <header className=" font-semibold text-2xl text-dtbi-blue  ">
            {" "}
            Location and Contact{" "}
          </header>

          <div className=" flex flex-col md:flex-row gap-5">
            <div className=" w-full ">
              <Input type="number" label="Number of Employees" />

              <Typography
                color="yellow"
                className=" text-dtbi-orange mt-2 flex items-center gap-1 font-normal text-xs "
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="-mt-px h-4 w-4"
                >
                  <path
                    fillRule="evenodd"
                    d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm8.706-1.442c1.146-.573 2.437.463 2.126 1.706l-.709 2.836.042-.02a.75.75 0 01.67 1.34l-.04.022c-1.147.573-2.438-.463-2.127-1.706l.71-2.836-.042.02a.75.75 0 11-.671-1.34l.041-.022zM12 9a.75.75 0 100-1.5.75.75 0 000 1.5z"
                    clipRule="evenodd"
                  />
                </svg>
                Excluding yourself
              </Typography>
            </div>
            <Input variant="outlined" label="Postal Address" />
            <Input type="password" label="Street Name *" />
            <Input type="password" label="Apartment/Building Number *" />
          </div>

          <div className=" flex flex-col md:flex-row gap-5 ">
            <Input variant="outlined" label="Ward/Province/State *" />
            <Input variant="outlined" label="District Name *" />
            <Input type="email" variant="outlined" label="Current Business Address and Location *" />
          </div>
          <div className=" flex flex-col md:flex-row gap-5 ">
            <Input variant="outlined" label="Country Name *" />
            <Input variant="outlined" label="Phone Number *" />
            <Input type="email" variant="outlined" label="Email Address *" />
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
                label="Select Industry"
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
            Startup Information{" "}
          </header>

          <div className=" flex flex-col md:flex-row gap-5 ">
            <TextareaComponent label="Product information *" />
            <TextareaComponent label="What problem is your product/service solving?" />
          </div>
          <div className=" flex flex-col md:flex-row gap-5 ">
            <TextareaComponent label="Who is your target customer?" />
            <TextareaComponent label="What is your business model?" />
          </div>
          <div className=" flex flex-col md:flex-row gap-5 ">
            <TextareaComponent label="What is unique and/or innovative with your business?" />
            <TextareaComponent label="Who are your primary direct and indirect competitors as you view them? How do you differentiate yourself from your competitors?" />
          </div>

          <div className=" flex flex-col md:flex-row gap-5 ">
            <TextareaComponent label="Traction and financials: Please describe the traction of your company has reached. Include the number of customer and/or users, market feedback, any pilots you have conducted, partnerships etc" />
            <TextareaComponent label="Is your company pre or post revenue? Has it made any money? (Please explain)" />
          </div>

          <div className=" flex flex-col md:flex-row gap-5 ">
            <TextareaComponent label="Describe your fundraising. Include the type of capital (equity, loans, grants, awards), amount, reception month and year. What are your fundraising objectives in the future? How much are you seeking to raise?" />
            <TextareaComponent label="Describe your targeted market and its associated characteristics. Include age, gender, career and life style in less than 200 words" />
          </div>

          <div className=" flex flex-col md:flex-row gap-5 ">
            <TextareaComponent label="Describe your exit strategy: How will you generate returns on capital for outside investors? Scale and impact" />
            <TextareaComponent label="Describe your company’s national and international strategy and/or plans for expansion into new markets. Include any specific milestones or a broad overview" />
          </div>

          <div className=" flex flex-col md:flex-row gap-5 ">
            <TextareaComponent label="Describe your impact. If your company is successful, how will the world be different? Please include metrics you are using to measure your impact." />
            <TextareaComponent label="Team (Why are you thing you have a winning team?)" />
          </div>

          <div className=" flex flex-col md:flex-row gap-5 ">
            <TextareaComponent label="How is the spread of COVID-19 affecting your business? How is your team responding to mitigate the overreaching impacts of the pandemic to your business?" />
          </div>
        </div> 

        <Button ripple={true} className=" bg-dtbi-orange m-5 ">
          {" "}
          Submit{" "}
        </Button>
      </form>
    </div>
  );
}
