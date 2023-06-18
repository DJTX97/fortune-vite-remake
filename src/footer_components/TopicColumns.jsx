import TopicItem from "./TopicItem";

export default function TopicColumns({ layout, category }) {
  const categID = (categ) => {
    let categNum;

    if (categ === "rankings") {
      categNum = 8;
    } else if (categ === "sections") {
      categNum = 21;
    } else {
      categNum = 6;
    }

    return categNum;
  };

  let categNum = categID(category);
  categNum = Array.from({ length: categNum }, (_, index) => {
    return <TopicItem key={index} />;
  });

  return <div className={`${layout} gap-y-3 gap-x-2`}>{categNum}</div>;
}
