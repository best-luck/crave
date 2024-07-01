import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ChangeEvent, useState } from "react";

export default function Input({ placeholder, name, className, label, type, required, onChange, disabled, defaultValue }: 
  { placeholder: string; name: string; className?: string; label?: string; type?: string; required?: boolean; onChange?: (e: ChangeEvent<HTMLInputElement>) => void; disabled?: boolean; defaultValue?: string; }) {

  const [currentType, setCurrentType] = useState(type||"text");
  const onChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
    if (onChange)
      onChange(e);
  }

  return (
    <div className={className}>
      {
        label ? <label className="block mb-[16px] font-medium text-[16px]">{label}</label> : <></>
      }
      <div className="relative">
        <input
          className="h-[50px] px-[16px] py-[15.5px] text-[14px] border-[#FFFFFF33] bg-transparent rounded-[4px] text-white w-full"
          placeholder={placeholder}
          name={name}
          type={currentType}
          required={required||true}
          onChange={onChangeInput}
          disabled={disabled}
          defaultValue={defaultValue}
        />
        {
          type==="password" ? (
            <div className="absolute right-[13px] h-full items-center top-0 py-[13px] cursor-pointer" onClick={() => setCurrentType(currentType==="text"?"password":"text")}>
              <FontAwesomeIcon icon={currentType==="password"?faEye:faEyeSlash} fontSize={24} />
            </div>
          ): <></>
        }
      </div>
    </div>
  );
}