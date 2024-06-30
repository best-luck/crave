import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useStoreContext } from "@src/contexts/StoreContext";
import { useRouter } from "next/navigation";

export default function Breadcrumb({ link }: { link: string }) {
  const links = link.split("/");
  const activeLink = links[links.length - 1];
  const router = useRouter();
  const { shortName } = useStoreContext();

  const navigate = (_link: string, idx: number) => {
    if (idx === 0) {
      router.push("/"+shortName);
    } else if (idx === 1) {
      router.push(`/${shortName}/catalogue`);
    }
  }

  return (
    <div className="bg-primary container py-[43px]">
      <div className="flex mb-[19px] items-center gap-x-[10px]"> 
        {
          links.map((_link, idx) => (
            <>
              <span className={`${_link === activeLink ? 'text-white': 'text-subtext'} cursor-pointer`} onClick={() => navigate(_link, idx)}>{_link}</span>
              <span className={`${_link === activeLink ? 'hidden': 'text-subtext'}`}><FontAwesomeIcon icon={faChevronRight} fontSize={12} /></span>
            </>
          ))
        }
      </div>
      <h1 className="text-[32px] font-semibold">{activeLink}</h1>
    </div>
  );
}