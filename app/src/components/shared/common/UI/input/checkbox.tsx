import { faCheck, faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

export default function Checkbox({ name, className, required }: 
  { name: string; className?: string; type?: string; required?: boolean; }) {

  const [isChecked, setIsChecked] = useState(false);

  return (
    <span className={`${className} w-[24px] h-[24px] rounded-[4px] border border-[#FFFFFF66] background-[#FFFFFF0D] cursor-pointer`} onClick={() => setIsChecked(!isChecked)}>
      {
        isChecked ? <FontAwesomeIcon icon={faCheck} fontSize={20} /> : <></>
      }  
      <input type="checkbox" className="hidden" name={name} required={required||true} checked={isChecked} />
    </span>
  );
}