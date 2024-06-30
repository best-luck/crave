import Input from "@src/components/shared/common/UI/input/input";
import Select from "@src/components/shared/common/UI/input/select";
import { useStoreContext } from "@src/contexts/StoreContext";
import { useState } from "react";

export default function Shipping() {

  const { pickupAddresses } = useStoreContext();
  const [shippingMethod, setShippingMethod] = useState("Delivery");
  const storeOptions = pickupAddresses.map(addr => ({ value: addr.id.toString(), label: `${addr.city}, ${addr.state} - ${addr.name}` }));
  const dateOptions = [
    {
      label: "Fri, Jun 25, 9AM - 9PM",
      value: "Fri, Jun 25, 9AM - 9PM"
    },
    {
      label: "Fri, Jun 26, 9AM - 9PM",
      value: "Fri, Jun 26, 9AM - 9PM"
    },
    {
      label: "Fri, Jun 27, 9AM - 9PM",
      value: "Fri, Jun 27, 9AM - 9PM"
    },
  ];

  return (
    <div className="mt-[45px]">
      <p className="border-[#FFFFFF33] text-[32px] font-bold">Shipping address</p>
      <div className="mt-[32px] bg-separatordark rounded-[4px] p-[8px] flex text-center gap-[4px] text-[16px]">
        <div className={`cursor-pointer flex-auto py-[11px] ${shippingMethod==="Delivery"?"bg-primary rounded-[4px]":""}`} onClick={() => setShippingMethod("Delivery")}>Delivery</div>
        <div className={`cursor-pointer flex-auto py-[11px] ${shippingMethod==="Pickup"?"bg-primary rounded-[4px]":""}`} onClick={() => setShippingMethod("Pickup")}>Pickup</div>
      </div>
      {
        shippingMethod==="Delivery" ? (
        <div className="mt-[32px] grid grid-cols-1 md:grid-cols-2 gap-x-[24px] gap-y-[16px]">
          <Input
            name="firstname"
            placeholder="First name"
          />
          <Input
            name="lastname"
            placeholder="Last name"
          />
          <Input
            name="address_line1"
            placeholder="Address"
          />
          <Input
            name="address_line2"
            placeholder="Address"
          />
          <Input
            name="City"
            placeholder="City"
          />
          <Input
            name="Country"
            placeholder="Country"
          />
          <Input
            name="Postcode"
            placeholder="Postcode"
          />
        </div>) : (
          <div className="mt-[32px] grid grid-cols-2 gap-x-[24px] gap-y-[16px]">
            <Input
              name="firstname"
              placeholder="First name"
            />
            <Input
              name="lastname"
              placeholder="Last name"
            />
            <div>
              <Select
                options={storeOptions}
                placeholder="Store"
                name="store"
                className="w-full"
                single={true}
              />
            </div>
            <div>
              <Select
                options={dateOptions}
                placeholder="Date"
                name="date"
                className="w-full"
                single={true}
              />
            </div>
          </div>
        )
      }
    </div>
  );
}