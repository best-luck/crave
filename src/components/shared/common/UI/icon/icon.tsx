import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Icon({ icon, className, size }: { icon:any, className?: string; size?: number; }) {
  return (
    <span className={`bg-secondary inline-flex justify-center items-center border border-[#ffffff1A] w-[40px] h-[40px] p-auto text-white border-r rounded-[4px] border-[1.5px] ${size}`}>
      <FontAwesomeIcon icon={icon} className="text-2xl" fontSize={size||24} />
    </span>
  );
}