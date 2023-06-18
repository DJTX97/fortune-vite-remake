import { useState } from "react";
import Menu from "./Menu";

export default function MobileNav() {
  const [isVisible, setVisible] = useState(false);

  const toggleVisibility = () => {
    setVisible(!isVisible);
  };

  return (
    <>
      <button className="lg:hidden px-5 mr-2" onClick={toggleVisibility}>
        <svg
          width="24"
          height="16"
          viewBox="0 0 24 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="24" height="2.66667" fill="black"></rect>
          <rect y="6.66675" width="24" height="2.66667" fill="black"></rect>
          <rect y="13.3333" width="24" height="2.66667" fill="black"></rect>
        </svg>
      </button>
      {isVisible && (
        <div className={`absolute top-0 bg-white w-1/2 h-[100vh] z-10`}>
          <div>
            <button onClick={toggleVisibility}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                id="close"
                className="h-10"
              >
                <path d="M13.41,12l6.3-6.29a1,1,0,1,0-1.42-1.42L12,10.59,5.71,4.29A1,1,0,0,0,4.29,5.71L10.59,12l-6.3,6.29a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0L12,13.41l6.29,6.3a1,1,0,0,0,1.42,0,1,1,0,0,0,0-1.42Z"></path>
              </svg>
            </button>
          </div>

          <div className="flex flex-col text-2xl">
            <Menu isMobile={true}/>
          </div>
        </div>
      )}
    </>
  );
}
