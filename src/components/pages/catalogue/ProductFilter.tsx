import Select from "@src/components/shared/common/UI/input/select";

export default function ProductFilter() {
  return (
    <div className="flex justify-between">
      <div className="flex gap-x-[16px]">
        <Select
          options={[]}
          name="brands"
          placeholder="Brands"
        />
        <Select
          options={[]}
          name="category"
          placeholder="Categories"
        />
      </div>
      <div>
        <Select
          options={[]}
          name="category"
          placeholder="Sort: Popular"
        />
      </div>
    </div>
  );
}