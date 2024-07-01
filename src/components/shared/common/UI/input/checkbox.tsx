import { faCheck, faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useRef, useState } from "react";

export default function Checkbox({ name, className, required, onClick, checked }: 
  { name: string; className?: string; type?: string; required?: boolean; onClick?: () => void; checked?: boolean }) {

  const [isChecked, setIsChecked] = useState(false);

  const onClickHandler = () => {
    setIsChecked(!isChecked);
    if (onClick)
      onClick();
  }
  useEffect(() => {
    if (checked !== undefined && checked !== null) {
      setIsChecked(checked);
    }
  }, [checked]);

  return (
    <span onClick={onClickHandler} className={`${className} ${isChecked?'bg-primary':''} inline-flex justify-center items-center w-[24px] h-[24px] rounded-[4px] border border-[#FFFFFF66] background-[#FFFFFF0D] cursor-pointer`}>
      {
        isChecked ? <FontAwesomeIcon icon={faCheck} fontSize={20} /> : <></>
      }  
    </span>
  );
}