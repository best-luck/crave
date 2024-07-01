import { ReactNode } from "react";

interface ButtonProps {
  onClick: () => void;
  className?: string;
  children?: ReactNode;
  text?: string;
  disabled?: boolean;
  type?: "button" | "submit" | "reset" | undefined | null;
}

export default function Button(props: ButtonProps) {
  return (
    <button onClick={props.onClick} className={`bg-primary rounded-[4px] h-[50px] px-[22px] py-[14px] disabled:opacity-80 disabled:cursor-not-allowed ${props.className}`} type={props.type||'button'} disabled={props.disabled}>
      {props.text?props.text:props.children}
    </button>
  )
};