export interface Option {
  label: string;
  value: string;
}

export default function Select({ options, placeholder, name }:  { options: Option[], placeholder: string, name: string }) {
  return (
    <select name={name} className="rounded-[4px] bg-[#1B0024] border border-[#FFFFFF33]">
      <option value="" disabled selected>{placeholder}</option>
      {
        options.map((option, key) => <option key={`${name}-${key}`} value={option.value}>{option.label}</option>)
      }
    </select>
  );
}