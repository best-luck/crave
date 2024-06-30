import { useState } from "react";

export default function Counter({ defaultValue, className, onChange }: { defaultValue: number, className?: string; onChange?: (v: number) => void }) {

  const [number, setNumber] = useState(defaultValue);

  const changeNumber = (offset: number) => {
    if (number + offset > 0) {
      setNumber(number + offset);
      if (onChange)
        onChange(number + offset);
    }
  }

  return (
    <div className={`h-[40px] border border-separatordark rounded-[4px] bg-secondary text-white text-[18px] flex gap-[18px] items-center justify-center px-[10px] ${className}`}>
      <span className="cursor-pointer text-[24px]" onClick={() => changeNumber(-1)}>-</span>
      <span>{number}</span>
      <span className="cursor-pointer text-[24px]" onClick={() => changeNumber(1)}>+</span>
    </div>
  );
}