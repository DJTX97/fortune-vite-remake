import Author from "../universal_components/Author";
import PublishDate from "../universal_components/PublishDate";

export default function Banner() {
  return (
    <div className="lg:min-h-[500px] mb-28">
      <div className="flex justify-center flex-col lg:flex-row lg:max-h-[400px] mx-10 bg-[#edf7fd]">
        <div className="flex justify-center lg:justify-end lg:w-1/2 -mt-6 max-h-[400px]">
          <img
            src="src\assets\images\placeholder.jpg"
            className="w-11/12 lg:pb-10"
            alt="image"
          />
        </div>

        <div className="flex flex-col gap-3 lg:w-1/2 pt-6 px-11 pb-6 lg:-mb-20">
          <div className="category-color font-bold uppercase">Category</div>
          <div className="text-2xl xl:text-[40px]/[42px] font-bold">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Asperiores
            ducimus culpa, ipsum, quas vero incidunt voluptatum beatae assumenda
            officia vel maxime temporibus?
          </div>
          <div className="text-lg xl:text-[26px]/[28.5px] font-thin">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Repudiandae fugiat illum in odio beatae.
          </div>
          <div>
            <Author/>
            <PublishDate/>
          </div>
        </div>
      </div>
    </div>
  );
}
