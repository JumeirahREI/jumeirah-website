import { SVGProps } from "react";

const CarouselBorderIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 85 85"
    fill="none"
    {...props}
  >
    <g>
      <path
        fill="url(#carousel-border-gradient-fill)"
        fillOpacity={0.13}
        fillRule="evenodd"
        d="M42.5 0C19.028 0 0 19.028 0 42.5S19.028 85 42.5 85 85 65.972 85 42.5 65.972 0 42.5 0ZM5.93 42.5c0-20.197 16.373-36.57 36.57-36.57S79.07 22.303 79.07 42.5 62.697 79.07 42.5 79.07 5.93 62.697 5.93 42.5Z"
        clipRule="evenodd"
      />
      <path
        stroke="url(#carousel-border-gradient-stroke)"
        strokeOpacity={0.5}
        d="M42.5.5c23.196 0 42 18.804 42 42s-18.804 42-42 42-42-18.804-42-42 18.804-42 42-42Zm0 4.93C22.027 5.43 5.43 22.028 5.43 42.5S22.028 79.57 42.5 79.57 79.57 62.972 79.57 42.5 62.972 5.43 42.5 5.43Z"
      />
    </g>
    <defs>
      <linearGradient
        id="carousel-border-gradient-fill"
        x1={96.965}
        x2={-20.851}
        y1={204.96}
        y2={202.523}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#fff" />
        <stop offset={1} stopColor="#999" />
      </linearGradient>
      <linearGradient
        id="carousel-border-gradient-stroke"
        x1={-0.964}
        x2={116.409}
        y1={-25.264}
        y2={3.203}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#CCC" />
        <stop offset={1} stopColor="#565656" />
      </linearGradient>
    </defs>
  </svg>
);

export default CarouselBorderIcon;
