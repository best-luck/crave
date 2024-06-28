export default function Radio({ name, checked }: { name: string, checked: boolean }) {
  return (
    <span className={`inline-flex min-w-[24px] min-h-[24px] items-center justify-center rounded-full border border-separatordark ${checked?'bg-primary':'bg-[#FFFFFF0D]'}`}>
      {
        checked?<span className="w-[16px] h-[16px] inline-block rounded-full bg-[#FFFFFF99]"></span>:''
      }
    </span>
  );
}