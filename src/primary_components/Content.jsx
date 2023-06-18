import Banner from "../content_components/Banner";
import Feed from "../content_components/Feed";

export default function Content() {
  return (
    <div className="pb-16 border-color border-b">
      <Banner />
      <Feed />
    </div>
  );
}
