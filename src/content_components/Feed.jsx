import FeedItem from "./FeedItem";
import Latest from "./Latest";

export default function Feed() {
  return (
    <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-16 px-10">
      <FeedItem/>
      <FeedItem/>
      <FeedItem/>
      <Latest/>
      <FeedItem/>
      <FeedItem/>
      <FeedItem/>
      <FeedItem/>
    </div>
  );
}
