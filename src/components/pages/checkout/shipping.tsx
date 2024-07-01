import Input from "@src/components/shared/common/UI/input/input";
import Select from "@src/components/shared/common/UI/input/select";
import { useAuthContext } from "@src/contexts/AuthContext";
import { useStoreContext } from "@src/contexts/StoreContext";
import { ChangeEvent, FormEvent, useEffect, useState } from "react";

const date = new Date();
const oneday = new Date(new Date().getTime() + 1000 * 60 * 60 * 24);
const twodays = new Date(new Date().getTime() + 1000 * 60 * 60 * 24 * 2);
const dateOptions = [
  {
    label: new Date().toDateString() + ", 9AM - 9PM",
    value: new Date().toDateString() + ", 9AM - 9PM"
  },
  {
    label: oneday.toDateString() + ", 9AM - 9PM",
    value: oneday.toDateString() + ", 9AM - 9PM"
  },
  {
    label: twodays.toDateString() + ", 9AM - 9PM",
    value: twodays.toDateString() + ", 9AM - 9PM"
  },
];

export default function Shipping({ onChangeData }: { onChangeData: (data: any) => void; }) {

  const { pickupAddresses } = useStoreContext();
  const [shippingMethod, setShippingMethod] = useState("DELIVERY");
  const { user } = useAuthContext();
  const storeOptions = pickupAddresses.map(addr => ({ value: addr.id.toString(), label: `${addr.city}, ${addr.state} - ${addr.name}` }));
  const [data, setData] = useState({
    street: "",
    street2: "",
    city: "",
    county: "",
    zip: "",
    date: "",
    method: "",
  });

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const _data = {
      ...data,
      [e.target.name]: e.target.value
    }
    setData(_data);
  }
  const onDateOptionChange = (options: string[]) => {
    setData({
      ...data,
      date: options[0]
    });
  }
  useEffect(() => {
    onChangeData(data);
  }, [data]);
  useEffect(() => {
    setData({
      ...data,
      method: shippingMethod
    });
  }, [shippingMethod]);

  return (
    <div className="mt-[45px]">
      <p className="border-[#FFFFFF33] text-[32px] font-bold">Shipping address</p>
      <div className="mt-[32px] bg-separatordark rounded-[4px] p-[8px] flex text-center gap-[4px] text-[16px]">
        <div className={`cursor-pointer flex-auto py-[11px] ${shippingMethod==="DELIVERY"?"bg-primary rounded-[4px]":""}`} onClick={() => setShippingMethod("DELIVERY")}>Delivery</div>
        <div className={`cursor-pointer flex-auto py-[11px] ${shippingMethod==="PICKUP"?"bg-primary rounded-[4px]":""}`} onClick={() => setShippingMethod("PICKUP")}>Pickup</div>
      </div>
      <div className="mt-[32px] grid grid-cols-1 md:grid-cols-2 gap-x-[24px] gap-y-[16px]">
        <Input
          name="firstname"
          placeholder="First name"
          disabled={true}
          defaultValue={user?.fullname.split(" ")[0]}
        />
        <Input
          name="lastname"
          placeholder="Last name"
          disabled={true}
          defaultValue={user?.fullname.split(" ")[1]}
        />
        {
          shippingMethod==="DELIVERY" ? (
          <>
            <Input
              name="street"
              placeholder="Address1"
              onChange={onChange}
              required={true}
            />
            <Input
              name="street2"
              placeholder="Address2"
              onChange={onChange}
              required={true}
            />
            <Input
              name="city"
              placeholder="City"
              onChange={onChange}
              required={true}
            />
            <Input
              name="county"
              placeholder="County"
              onChange={onChange}
              required={true}
            />
            <Input
              name="zip"
              placeholder="Postcode"
              onChange={onChange}
              required={true}
            />
          </>) : (
            <>
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
                  onChange={onDateOptionChange}
                />
              </div>
            </>
          )
        }
      </div>
    </div>
  );
}