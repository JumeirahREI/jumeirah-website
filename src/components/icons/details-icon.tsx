import { SVGProps } from "react";

const DetailsIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 54 54" // Added for better scaling
    {...props}
  >
    <path
      stroke="currentColor" // Changed from #999
      strokeWidth={3.5}
      d="M7.61 49.24c3.582 2.647 8.692 2.647 18.91 2.647 10.22 0 15.33 0 18.912-2.647a13.745 13.745 0 0 0 3.014-3.067c2.602-3.643 2.602-8.84 2.602-19.236 0-10.395 0-15.593-2.602-19.237a13.747 13.747 0 0 0-3.014-3.066C41.849 1.986 36.74 1.986 26.52 1.986c-10.22 0-15.329 0-18.91 2.648A13.747 13.747 0 0 0 4.595 7.7c-2.603 3.644-2.603 8.842-2.603 19.237 0 10.395 0 15.593 2.603 19.236A13.744 13.744 0 0 0 7.61 49.24Z"
    />
    <path
      stroke="currentColor" // Changed from #999
      strokeWidth={2.5}
      d="M16 33.25h5a.75.75 0 0 1 .75.75v5a.75.75 0 0 1-.75.75h-5a.75.75 0 0 1-.75-.75v-5a.75.75 0 0 1 .75-.75Z"
    />
    <path
      stroke="currentColor" // Changed from #999
      strokeLinecap="round"
      strokeWidth={3}
      d="M15 24h16M15 16h24M31 40V24M39 40V16"
    />
  </svg>
);
export default DetailsIcon;
