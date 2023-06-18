import Author from "../universal_components/Author";
import PublishDate from "../universal_components/PublishDate";

export default function FeedItem() {
  return (
    <div className="flex flex-col gap-5 px-6">
      <img src="src\assets\images\placeholder.jpg" className="flex flex-col" />
      <div className="category-color font-bold uppercase">category</div>
      <div className="font-bold text-[24px]">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit.
      </div>
      <div>
        <Author />
        <PublishDate />
      </div>
    </div>
  );
}
