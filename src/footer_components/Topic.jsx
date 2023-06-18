import TopicColumns from "./TopicColumns";

export default function Topic({ category, topics }) {
  let layout = "";

  if (category === "rankings") {
    layout = "grid grid-cols-2";
  } else if (category === "sections") {
    layout = "grid grid-cols-5";
  } else {
    layout = "grid";
  }

  return (
    <div
      className={`mt-10 lg:px-5 border-color ${
        category !== topics[topics.length - 1] && "lg:border-r"
      }`}
    >
      <div className="mb-5 category-color font-bold text-[16px] capitalize">
        {category}
      </div>

      <TopicColumns layout={layout} category={category} />
    </div>
  );
}
