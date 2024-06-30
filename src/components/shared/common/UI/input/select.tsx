import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useRef, useState } from "react";
import Checkbox from "./checkbox";
import Radio from "./radio";

export interface Option {
  label: string;
  value: string;
}

export default function Select({ options, placeholder, name, single, onChange, className }:  { options: Option[], placeholder: string, name: string, single?: boolean, onChange?: (options: string[])=>void; className?: string }) {

  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const [isSelected, setIsSelected] = useState<boolean[]>(Array(options.length).fill(false));

  useEffect(() => {
    const handleOutSideClick = (event: MouseEvent | TouchEvent) => {
      if (!ref.current?.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    window.addEventListener("mousedown", handleOutSideClick);

    return () => {
      window.removeEventListener("mousedown", handleOutSideClick);
    };
  }, [ref]);
  const toggleSelect = (index: number) => {
    let _isSelected;
    if (single)
      _isSelected = isSelected.map((selected, idx) => idx===index?true:false);
    else
      _isSelected = isSelected.map((selected, idx) => idx===index?(!selected):selected);
    triggerOnChange(_isSelected);
    setIsSelected(_isSelected)
  }
  const triggerOnChange = (_isSelected: boolean[]) => {
    const selectedOptions: string[] = [];
    _isSelected.forEach((selected, idx) => selected&&selectedOptions.push(options[idx].value));
    if (onChange)
      onChange(selectedOptions);
  }

  return (
    <div className={`relative ${className}`} ref={ref}>
      <button onClick={() => setIsOpen(!isOpen)} className={`h-[48px] rounded-[4px] w-full border px-[10px] flex items-center justify-between w-[216px] ${isOpen?"border-primary text-white":"border-separatordark text-subtext"}`}>
        <span>{placeholder}</span>
        <FontAwesomeIcon icon={faChevronDown} />
      </button>
      <div className={`${isOpen?'':'hidden'} bg-[#1B0024] border border-separatordark absolute left-0 top-[calc(100% + 8px)] w-[320px] rounded-[4px] p-[16px] z-[100000] max-h-[400px] overflow-auto`}>
        {
          options.map((option, index) => (
            <div className="mt-[16px] pb-[16px] text-[16px] font-medium flex gap-x-[16px] items-center border-b border-separatordark" key={`filter-${name}-${index}`}>
              {
                !single ? <Checkbox onClick={() => toggleSelect(index)} name={name}  /> : <Radio name={name} checked={isSelected[index]} onClick={() => toggleSelect(index)} />
              }
              <span>{option.label}</span>
            </div>
          ))
        }
      </div>
    </div>
  );
}