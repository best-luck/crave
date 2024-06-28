import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Button from "@src/components/shared/common/UI/button";

export default function Video() {
  return (
    <div className="bg-center bg-cover w-full h-[600px] mt-[80px] flex justify-center items-center" style={{backgroundImage: 'url(/images/home/video-placeholder.png)'}}>
      <div className="bg-[#827B8433] w-[522px] p-[24px]">
        <p className="text-[32px] font-semibold">Crave high-quality cannabis products safely & conveniently to your doorstep.</p>
        <div className="flex justify-between mt-[12px]">
          <div className="flex items-center">
            <span>Play video</span>
            <span className="inline-block w-[30px] h-[1px] bg-white ml-[8px]"></span>
          </div>
          <Button onClick={() => {}} className="w-[58px] h-[58px]">
            <FontAwesomeIcon icon={faPlay} fontSize={12} />
          </Button>
        </div>
      </div>
    </div>
  );
}