import TextareaComponent from "../../Components/Textarea/TextareaComponent";
import { Select, Option } from "@material-tailwind/react";
import { Button, Input } from "@material-tailwind/react";

export default function CompanyForm() {
  return (
    <div className=" flex flex-col mt-10 gap-10 px-5  ">
      <form className=" overflow-hidden w-full flex flex-col gap-5 border border-dtbi-blue rounded-lg bg-gray-100 max-w-7xl mx-auto ">
        <div className=" bg-dtbi-blue text-white p-5 ">
          <header className=" text-center capitalize  md:text-2xl">
            {" "}
            Apply for Company Stage{" "}
          </header>
        </div>

        <div className=" flex flex-col gap-5 p-5">
          <header className=" font-semibold text-2xl text-dtbi-blue  ">
            {" "}
            Company Details{" "}
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
            Company Information{" "}
          </header>

          <div className=" flex flex-col md:flex-row gap-5 ">
            <TextareaComponent label="Product information *" />
            <TextareaComponent label="What does your company do?" />
          </div>
          <div className=" flex flex-col md:flex-row gap-5 ">
            <TextareaComponent label="What is your product/service and how does it work?" />
            <TextareaComponent label="Who is your target customer?" />
          </div>
          <div className=" flex flex-col md:flex-row gap-5 ">
            <TextareaComponent label="What is your business model?" />
            <TextareaComponent label="What is unique and/or innovative with your business?" />
          </div>

          <div className=" flex flex-col md:flex-row gap-5 ">
            <TextareaComponent label="How do you differentiate yourself from your competitors?" />
            <TextareaComponent label="Share your company's traction, covering customer/user numbers, market feedback, conducted pilots, and partnerships." />
          </div>

          <div className=" flex flex-col md:flex-row gap-5 ">
            <TextareaComponent label="Is your company pre or post-revenue? Provide details on its financial status and any revenue generated." />
            <TextareaComponent label="Detail your fundraising history, specifying capital type, amount, reception date, and future fundraising goals." />
          </div>

          <div className=" flex flex-col md:flex-row gap-5 ">
            <TextareaComponent label="Define your target market, covering demographics such as age, gender, career, and lifestyle." />
            <TextareaComponent label="Outline your exit strategy, emphasizing how you'll generate returns for investors through scale and impact." />
          </div>

          <div className=" flex flex-col md:flex-row gap-5 ">
            <TextareaComponent label="Detail your company's national and international expansion strategy, including key milestones or an overview." />
            <TextareaComponent label="Detail the impact of your company's success and how it will change the world. Include metrics used to measure this impact." />
          </div>

          <div className=" flex flex-col md:flex-row gap-5 ">
            <TextareaComponent label="Team (Why are you thing you have a winning team?)" />
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
