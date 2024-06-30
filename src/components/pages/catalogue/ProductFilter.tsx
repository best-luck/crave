import Select from "@src/components/shared/common/UI/input/select";
import { useStoreContext } from "@src/contexts/StoreContext";
import { useEffect, useMemo, useState } from "react";

export default function ProductFilter({ filterProducts, hideBrandFilter, hideCategoryFilter }: { filterProducts: (c: string[], b: string[]) => void; hideBrandFilter?: boolean; hideCategoryFilter?: boolean }) {

  const { brands, categories } = useStoreContext();
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);

  const brandOption = useMemo(() => {
    return brands.map(brand => ({value: brand, label: brand}));
  }, [brands]);
  const categoryOption = useMemo(() => {
    return categories.map(category => ({value: category.name, label: category.name}));
  }, [categories]);
  useEffect(() => {
    filterProducts(selectedCategories, selectedBrands);
  }, [selectedBrands, selectedCategories]);

  return (
    <div className="flex justify-between">
      <div className="flex gap-x-[16px]">
        {
          !hideBrandFilter? <Select
            options={brandOption}
            name="brands"
            placeholder="Brands"
            onChange={(options) => setSelectedBrands(options)}
          />: ''
        }
        {
          !hideCategoryFilter? <Select
            options={categoryOption}
            name="category"
            placeholder="Categories"
            single={true}
            onChange={(options) => setSelectedCategories(options)}
          />: ''
        }
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