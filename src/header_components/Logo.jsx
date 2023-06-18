import React from "react";

export default function Logo() {
  return (
    <div className="flex items-center pr-2 cursor-pointer">
      <svg
        className="h-8"
        data-cy="fortune-logo"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 89.5 20.6"
      >
        <path d="M11.5 4.7v11.2a4.75 4.75 0 0 0 9.5 0V4.7a4.75 4.75 0 0 0-9.5 0m3.4 11.2V4.7a1.29 1.29 0 0 1 1.4-1.3 1.26 1.26 0 0 1 1.3 1.3v11.2a1.32 1.32 0 0 1-1.3 1.3 1.35 1.35 0 0 1-1.4-1.3M48.4.2h-9.6v3.4h3.1v16.7h3.4V3.6h3.1V.2zM58.4.2v15.7a1.3 1.3 0 1 1-2.6 0V.2h-3.5v15.7a4.8 4.8 0 0 0 9.6 0V.2zM89.5 3.6V.2h-8.4v20.1h8.4v-3.4h-5v-5.2h3.2V8.3h-3.2V3.6h5zM35.6 20.3H32l-2.5-9.5a2.73 2.73 0 0 0 2.2-2.7V5a1.37 1.37 0 0 0-1.4-1.4H29v16.7h-3.4V.2h4.7a4.76 4.76 0 0 1 4.8 4.6V8a5.37 5.37 0 0 1-1.9 4.4zM73.5.2v11L70 .2h-3.5v20.1H70v-9.8l3.2 9.8H77V.2h-3.5zM0 .5v20.1h3.6V12h3.3V8.6H3.6V3.9h5.2V.5H0z"></path>
      </svg>
    </div>
  );
}
