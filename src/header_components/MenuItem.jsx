export default function MenuItem({ category, isDropdown, isMobile }) {


  const size = isMobile ? "h-[20px]" : "h-[10px]"
  const position = isMobile ? "rotate-90" : "rotate-180"

  return (
    <div className="flex items-center cursor-pointer group hover:text-[#007b9d] transition-all duration-150">
      <div>{category}</div>
      {isDropdown && (
        <div className="m-0">
          <svg
            viewBox="0 -4.5 20 20"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            className={`ml-0.5 ${size} ${position} group-hover:fill-[#007b9d] group-hover:rotate-0 transition-all duration-120`}
            fill="#000000"
          >
            <title>arrow_up [#337]</title>
            <desc>Created with Sketch.</desc>
            <defs></defs>
            <g
              id="Page-1"
              stroke="none"
              strokeWidth="1"
              // fill="none"
              fillRule="evenodd"
              className=""
            >
              <g
                id="Dribbble-Light-Preview"
                transform="translate(-260.000000, -6684.000000)"
                // fill="#000000"
              >
                <g id="icons" transform="translate(56.000000, 160.000000)">
                  <path
                    d="M223.707692,6534.63378 L223.707692,6534.63378 C224.097436,6534.22888 224.097436,6533.57338 223.707692,6533.16951 L215.444127,6524.60657 C214.66364,6523.79781 213.397472,6523.79781 212.616986,6524.60657 L204.29246,6533.23165 C203.906714,6533.6324 203.901717,6534.27962 204.282467,6534.68555 C204.671211,6535.10081 205.31179,6535.10495 205.70653,6534.69695 L213.323521,6526.80297 C213.714264,6526.39807 214.346848,6526.39807 214.737591,6526.80297 L222.294621,6534.63378 C222.684365,6535.03868 223.317949,6535.03868 223.707692,6534.63378"
                    id="arrow_up-[#337]"
                  ></path>
                </g>
              </g>
            </g>
          </svg>
        </div>
      )}
    </div>
  );
}
