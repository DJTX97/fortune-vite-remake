import LatestItem from "./LatestItem";

export default function Latest() {
  return (
    <div className="col-span-full order-first lg:order-none lg:col-span-1 min-h-[430px] lg:border-l-4 border-[#edf7fd] px-5">
      <div className="border-b-[1px] mb-3 border-black text-[34px] font-bold">
        Latest
      </div>
      <div className="flex flex-col gap-3 mb-10">
        <LatestItem />
        <LatestItem />
        <LatestItem />
        <LatestItem />
        <LatestItem />
      </div>
    </div>
  );
}
