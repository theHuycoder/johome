import React from "react";

export default function Calendar(props: any) {
 return (
  <svg
   width="20"
   height="20"
   viewBox="0 0 20 20"
   fill="none"
   xmlns="http://www.w3.org/2000/svg"
   {...props}
  >
   <path
    fillRule="evenodd"
    clipRule="evenodd"
    d="M17 4H3C2.44772 4 2 4.44772 2 5V17C2 17.5523 2.44772 18 3 18H17C17.5523 18 18 17.5523 18 17V5C18 4.44771 17.5523 4 17 4ZM3 2C1.34315 2 0 3.34315 0 5V17C0 18.6569 1.34315 20 3 20H17C18.6569 20 20 18.6569 20 17V5C20 3.34315 18.6569 2 17 2H3Z"
    fill="#6B7280"
   />
   <path
    fillRule="evenodd"
    clipRule="evenodd"
    d="M8 10C7.44772 10 7 10.4477 7 11C7 11.5523 7.44772 12 8 12H15C15.5523 12 16 11.5523 16 11C16 10.4477 15.5523 10 15 10H8ZM5 14C4.44771 14 4 14.4477 4 15C4 15.5523 4.44771 16 5 16H11C11.5523 16 12 15.5523 12 15C12 14.4477 11.5523 14 11 14H5Z"
    fill="#6B7280"
   />
   <path
    fillRule="evenodd"
    clipRule="evenodd"
    d="M5 0C4.44771 0 4 0.447715 4 1V5C4 5.55228 4.44771 6 5 6C5.55228 6 6 5.55228 6 5V1C6 0.447715 5.55228 0 5 0ZM15 0C14.4477 0 14 0.447715 14 1V5C14 5.55228 14.4477 6 15 6C15.5523 6 16 5.55228 16 5V1C16 0.447715 15.5523 0 15 0Z"
    fill="#6B7280"
   />
  </svg>
 );
}
