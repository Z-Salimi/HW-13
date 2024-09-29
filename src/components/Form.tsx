import React from "react";
import { Input } from "./Input";
import { Offices } from "./Offices";

// const nameArray = [
//   "componyName",
//   "NatureBusiness",
//   "Address",
//   "PostCode",
//   "ContactName",
//   "ContactPhone",
//   "Email",
//   "Linkedin",
//   "Idea",
//   "File",
// ];

export interface FormTypes {
  ComponyName: string;
  NatureBusiness: string;
  Address: string;
  PostCode: string;
  ContactName: string;
  ContactPhone: string;
  Email: string;
  Linkedin: string;
  Idea: string;
  File: string;
}

export const Form = () => {
  const [values, setValues] = React.useState<FormTypes>({
    ComponyName: "",
    NatureBusiness: "",
    Address: "",
    PostCode: "",
    ContactName: "",
    ContactPhone: "",
    Email: "",
    Linkedin: "",
    Idea: "",
    File: "",
  });

  const [isValid, setIsValid] = React.useState(false);

  const inputChangeHandler = (inputType: keyof FormTypes, value: string) => {
    const newValues = { ...values, [inputType]: value };
    setValues(newValues);
    validateForm(newValues);
  };

  const validateForm = (values: FormTypes) => {
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
    <section className="max-w-[1540px] mx-auto flex flex-col items-center justify-center px-20 py-20 w-full lg:items-start">
      <div className=" flex flex-col gap-10">
        <h2 className="font-bold text-3xl">Contact us</h2>
        <p className="text-gray-500">
          Need an experienced and skilled hand with custom IT projects? <br />
          Fill out the form to get a free consultation.
        </p>
      </div>
      <div className="flex flex-col gap-10 lg:flex-row items-baseline justify-between">
        <div className="flex flex-col justify-center gap-y-10 mt-20">
          <Input
            placeholder="Your Compony Name"
            onChangeHandler={(value) =>
              inputChangeHandler("ComponyName", value)
            }
            validator={(value) => value.length >= 3}
            Error="invalid name More than 3 characters."
          />
          <Input
            placeholder="Nature of Business"
            onChangeHandler={(value) =>
              inputChangeHandler("NatureBusiness", value)
            }
            validator={(value) => value.length >= 3}
            Error="invalid value More than 3 characters."
          />
          <div className="flex flex-col gap-7 lg:flex-row">
            <Input
              placeholder="Address"
              onChangeHandler={(value) => inputChangeHandler("Address", value)}
              validator={(value) => value.length >= 3}
              Error="invalid Address More than 3 characters."
            />
            <Input
              placeholder="Post Code"
              type="number"
              onChangeHandler={(value) => inputChangeHandler("PostCode", value)}
              validator={(value) =>  value.length === 10}
              className="!w-[20vw]"
              Error="invalid postCode must be 10 digits."
            />
          </div>

          <Input
            placeholder="Contact Name"
            onChangeHandler={(value) =>
              inputChangeHandler("ContactName", value)
            }
            validator={(value) => value.length >= 3}
            Error="invalid name More than 3 characters."
          />
          <Input
            placeholder="Contact Phone"
            type="number"
            onChangeHandler={(value) =>
              inputChangeHandler("ContactPhone", value)
            }
            validator={(value) => value.length === 11}
            Error="invalid phone must be 11 digits."
          />
          <Input
            placeholder="Email"
            type="email"
            onChangeHandler={(value) => inputChangeHandler("Email", value)}
            validator={(value) => value.includes("@gmail.com")}
            Error="invalid Email Must includes @gmail.com."
          />
          <Input
            placeholder="Linkedin"
            onChangeHandler={(value) => inputChangeHandler("Linkedin", value)}
            validator={(value) => value.includes("linkedin.com")}
            Error="invalid Linkedin Must includes linkedin.com."
          />
          <Input
            placeholder="Let's talk about your idea"
            onChangeHandler={(value) => inputChangeHandler("Idea", value)}
            validator={(value) => value.length >= 3}
            Error="invalid value More than 3 characters."
          />
          <Input
            placeholder="Upload Additional file"
            type="file"
            onChangeHandler={(value) => inputChangeHandler("File", value)}
            validator={(value) => value !== ""}
            Error="invalid value it's empty."
          />
          <button
            onClick={submit}
            disabled={!isValid}
            className={`w-[50vw] md:w-[40vw] text-white text-sm font-medium  py-3 mt-5 hover:bg-green-800 ${
              !isValid ? "disabled:bg-green-400" : "active: bg-green-600"
            }`}
          >
            Submit
          </button>
        </div>
        <div className="mt-10 lg:mt-0">
          <Offices />
        </div>
      </div>
    </section>
  );
};
