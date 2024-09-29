import React from "react";
import { Input } from "./Input";

export function Offices() {
  interface EmailType {
    Email: string;
  }
  const [values, setValues] = React.useState<EmailType>({
    Email: "",
  });

  const [isValid, setIsValid] = React.useState(false);

  const inputChangeHandler = (inputType: keyof EmailType, value: string) => {
    const newValues = { ...values, [inputType]: value };
    setValues(newValues);
    validateForm(newValues);
  };

  const validateForm = (values: EmailType) => {
    const isFormValid = Object.values(values).every(
      (value) => value.trim() !== ""
    );
    setIsValid(isFormValid);
  };

  const submit = () => {
    if (isValid) {
      console.log(values);
    } else {
      console.log("Form is not valid");
    }
  };
  return (
    <section className="flex flex-col gap-10 font-sans lg:px-12 ">
      <h4 className="font-bold text-gray-600">Offices</h4>
      <div>
        <p className="text-gray-600">United States</p>
        <p className="text-gray-600">500 5th Avenue Suite 400,NY 10110</p>
      </div>
      <div>
        <p className="text-gray-600">United Kingdom</p>
        <p className="text-gray-600">High St, Bromley BR1 1DN</p>
      </div>
      <div>
        <p className="text-gray-600">France</p>
        <p className="text-gray-600">80 avenue des terroirs de France, Paris</p>
      </div>
      <div className="flex flex-col gap-3">
        <h4 className="text-gray-600 font-bold">For Quick Inquiries</h4>
        
        <p className="text-gray-600 flex items-center gap-x-2"><i className="material-icons">flag</i> +44 7777777777</p>
        <p className="text-gray-600 flex items-center gap-x-2"><i className="material-icons">flag</i> +1 3333333330</p>
      </div>
      <div className=" flex flex-col gap-5">
        <h4 className="text-gray-600 font-bold min-w-full w-full">
          Would you like to join our newsletter?
        </h4>
        <div className="flex">
          <Input
            type="email"
            placeholder="Email"
            className="!w-[20vw] px-5 py-1 border-b-2 border-gray-300 mt-7 mr-4"
            onChangeHandler={(value) => inputChangeHandler("Email", value)}
            validator={(value) => value.includes("@gmail.com")}
            Error="invalid Email Must includes @gmail.com."
          />
          <button
            onClick={submit}
            disabled={!isValid}
            className={`text-sm font-medium w-[60px] h-[50px] py-2 mt-6 bg-green-600 hover:bg-green-8001
          ${!isValid ? "disabled:bg-green-400" : "active: bg-green-600"}`}
          >
            <i className="fa fa-check text-white flex justify-center"></i>
          </button>
        </div>
      </div>
    </section>
  );
}
