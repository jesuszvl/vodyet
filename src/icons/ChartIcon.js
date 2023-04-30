import React from "react";

export default function ChartIcon({
  width = 32,
  height = 32,
  stroke = "#14a180",
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 24 24"
    >
      <path d="M4 21h17v-2H5V3H3v17a1 1 0 0 0 1 1z"></path>
      <circle cx="10" cy="8" r="2"></circle>
      <circle cx="18" cy="12" r="2"></circle>
      <circle cx="11.5" cy="13.5" r="1.5"></circle>
      <circle cx="16.5" cy="6.5" r="1.5"></circle>
    </svg>
  );
}
