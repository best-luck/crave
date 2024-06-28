import Input from "@src/components/shared/common/UI/input/input";

export default function Shipping() {
  return (
    <div className="mt-[45px]">
      <p className="border-[#FFFFFF33] text-[32px] font-bold">Shipping address</p>
      <div className="mt-[32px] bg-separatordark rounded-[4px] p-[8px] flex text-center gap-[4px] text-[16px]">
        <div className="bg-primary flex-auto rounded-[4px] py-[11px]">Delivery</div>
        <div className="flex-auto py-[11px]">Pickup</div>
      </div>
      <form className="mt-[32px] grid grid-cols-2 gap-x-[24px] gap-y-[16px]">
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
      </form>
    </div>
  );
}