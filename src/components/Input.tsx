import React from "react";

interface IInputProps {
  placeholder: string;
  type?: React.HTMLInputTypeAttribute;
  defaultValue?: string;
  onChangeHandler?: (_: string) => unknown;
  validator?: (_: string) => boolean;
  className?: string;
  Error: string;
}
export const Input: React.FC<IInputProps> = ({
  type = "text",
  placeholder,
  defaultValue = "",
  onChangeHandler,
  validator,
  className,
  Error,
}) => {
  const [value, setValue] = React.useState<string>(defaultValue);
  const [error, setError] = React.useState<string>("");

  const onChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    const newValue = event.target.value;
    setValue(newValue);

    if (validator && !validator(newValue)) {
      setError(Error);
    } else {
      setError("");
    }

    if (onChangeHandler) onChangeHandler(newValue);
  };

  return (
    <div>
      <input
        type={type}
        placeholder={placeholder}
        onChange={onChange}
        value={value}
        className={`w-[50vw] md:w-[30vw] px-5 py-2  border-b-2 border-gray-300 ${className}`}
      />
      {error && <p className="text-red-500 text-[11px]">{error}</p>}
    </div>
  );
};
