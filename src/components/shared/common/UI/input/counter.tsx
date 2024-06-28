import { useState } from "react";

export default function Counter({ defaultValue }: { defaultValue: number }) {

  const [number, setNumber] = useState(defaultValue);

  const changeNumber = (offset: number) => {
    setNumber(number + offset);
  }

  return (
    <div className="h-[40px] border border-separatordark rounded-[4px] bg-secondary text-white text-[18px] flex gap-[18px] items-center px-[10px]">
      <span className="cursor-pointer text-[24px]" onClick={() => changeNumber(-1)}>-</span>
      <span>{number}</span>
      <span className="cursor-pointer text-[24px]" onClick={() => changeNumber(1)}>+</span>
    </div>
  );
}