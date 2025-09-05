import { SVGProps } from "react";

const FullscreenIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M7.617 49.254c3.582 2.647 8.691 2.647 18.91 2.647 10.22 0 15.33 0 18.911-2.647a13.747 13.747 0 0 0 3.015-3.067c2.602-3.643 2.602-8.841 2.602-19.236 0-10.396 0-15.593-2.602-19.237a13.747 13.747 0 0 0-3.015-3.067C41.856 2 36.747 2 26.528 2 16.308 2 11.199 2 7.617 4.647a13.746 13.746 0 0 0-3.015 3.067C2 11.358 2 16.555 2 26.95c0 10.395 0 15.593 2.602 19.236a13.746 13.746 0 0 0 3.015 3.067Z"
    />
    <path
      stroke="currentColor" // Changed from #999
      strokeLinecap="round"
      strokeWidth={3}
      d="M26.007 16.014h13M29.007 39.014h-13M39.007 29.014v-13M16.007 26.014v13"
    />
  </svg>
);
export default FullscreenIcon;
