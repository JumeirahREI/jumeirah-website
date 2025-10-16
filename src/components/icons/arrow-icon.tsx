import React from "react";

interface ArrowIconProps extends React.SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}

const ArrowIcon: React.FC<ArrowIconProps> = ({
  color = "currentColor",
  size = 46,
  ...props
}) => {
  const height = (size * 39) / 46; // maintain original aspect ratio

  return (
    <svg
      width={size}
      height={height}
      viewBox="0 0 46 39"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M20.9115 2.46597C21.5423 3.08726 21.5423 4.09456 20.9115 4.71585L7.51527 17.9091H42.3846C43.2768 17.9091 44 18.6214 44 19.5C44 20.3786 43.2768 21.0909 42.3846 21.0909H7.51527L20.9115 34.2841C21.5423 34.9054 21.5423 35.9127 20.9115 36.534C20.2806 37.1553 19.2578 37.1553 18.627 36.534L2.47314 20.6249C1.84229 20.0037 1.84229 18.9963 2.47314 18.3751L18.627 2.46597C19.2578 1.84468 20.2806 1.84468 20.9115 2.46597Z"
        fill={color}
        stroke={color}
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default ArrowIcon;
