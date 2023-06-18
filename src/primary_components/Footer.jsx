import Copyright from "../footer_components/Copyright";
import Social from "../footer_components/Social";
import Topic from "../footer_components/Topic";

export default function Footer() {
  const topics = [
    "rankings",
    "sections",
    "customer support",
    "commercial services",
    "about us",
  ];

  const socialIcons = [
    "facebook-icon.png",
    "instagram-icon.png",
    "linkedin-icon.png",
    "pinterest-icon.png",
    "twitter-icon.png",
  ];

  return (
    <div className="flex flex-col">
      <div className="flex flex-wrap lg:flex-nowrap sm:justify-center lg:justify-center gap-3 mb-6">
        {topics.map((topic, index) => {
          return <Topic key={index} category={topic} topics={topics} />;
        })}
      </div>
      <div className="flex justify-center gap-1.5 mb-6">
        {socialIcons.map((icon, index) => (
          <Social icon={icon} key={index} />
        ))}
      </div>
      <Copyright/>
    </div>
  );
}
