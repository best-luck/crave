import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Icon({ icon, className, size, onClick }: { icon:any, className?: string; size?: number; onClick?: () => void }) {

  const onClickHandler = () => {
    if (onClick)
      onClick();
  }

  return (
    <span onClick={onClickHandler} className={`bg-secondary inline-flex justify-center items-center border border-[#ffffff1A] w-[40px] h-[40px] p-auto text-white border-r rounded-[4px] border-[1.5px] ${className}`}>
      <FontAwesomeIcon icon={icon} className="text-2xl" fontSize={size||24} />
    </span>
  );
}