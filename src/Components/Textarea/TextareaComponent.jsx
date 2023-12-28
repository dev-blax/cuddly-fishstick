import { Textarea } from "@material-tailwind/react";
import PropTypes from "prop-types";

const TextareaComponent = ({ label }) => {
  return (
    <div className=" flex flex-col w-full gap-3 ">
      <label className=" text-sm text-gray-500 " htmlFor="">
        {label}
      </label>
      <div className="">
        <Textarea label="Your Response" />
      </div>
    </div>
  );
};

TextareaComponent.propTypes = {
  label: PropTypes.string.isRequired,
};

export default TextareaComponent;
