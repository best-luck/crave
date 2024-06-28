import Order from "./order";

export default function History() {
  return (
    <div>
      <h1 className="font-[32px] font-bold">Order History</h1>
      <div className="mt-[30px]">
        <Order />
        <Order />
        <Order />
        <Order />
      </div>
    </div>
  );
}