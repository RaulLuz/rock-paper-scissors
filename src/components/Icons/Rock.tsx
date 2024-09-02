const Rock = ({ width, height }: { width: string; height: string }) => {
  return (
    <button>
      <svg
        width={width}
        height={height}
        viewBox="0 0 204 209"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g filter="url(#filter0_d_0_1787)">
          <ellipse cx="102" cy="101.5" rx="99" ry="101.5" fill="#9D1634" />
        </g>
        <ellipse cx="102" cy="97" rx="99" ry="97" fill="#DB2E4D" />
        <ellipse
          cx="102"
          cy="97"
          rx="99"
          ry="97"
          fill="url(#paint0_linear_0_1787)"
        />
        <circle cx="102" cy="99" r="76" fill="#BABFD4" />
        <ellipse
          cx="102"
          cy="103"
          rx="76"
          ry="72"
          fill="url(#paint1_linear_0_1787)"
        />
        <path
          d="M131.441 88.0849C130.564 76.9814 118.149 78.1152 118.149 78.1152C112.909 68.8366 104.723 75.5573 104.723 75.5573C98.4334 66.4636 90.548 74.8903 90.548 74.8903C76.9523 73.4176 77.4792 84.5827 77.4792 84.5827C77.1593 88.132 79.3953 99.1125 79.3953 99.1125C77.3783 92.7837 73.0034 98.0372 73.0034 98.0372C67.6251 106.374 71.6736 110.937 71.6736 110.937C78.9512 119.504 94.4608 129.787 94.4608 129.787C100.077 133.018 97.7013 135.9 97.7013 135.9L131.669 130.262L132.45 123.792C137.614 108.105 131.441 88.0849 131.441 88.0849Z"
          fill="#3B4262"
        />
        <defs>
          <filter
            id="filter0_d_0_1787"
            x="0"
            y="0"
            width="204"
            height="209"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dy="3" />
            <feGaussianBlur stdDeviation="1.5" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.196706 0"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow_0_1787"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow_0_1787"
              result="shape"
            />
          </filter>
          <linearGradient
            id="paint0_linear_0_1787"
            x1="3"
            y1="0"
            x2="3"
            y2="194"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="white" stop-opacity="0.0966455" />
            <stop offset="1" stop-color="white" stop-opacity="0.01" />
          </linearGradient>
          <linearGradient
            id="paint1_linear_0_1787"
            x1="176.74"
            y1="175"
            x2="176.74"
            y2="33.3868"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#F3F3F3" />
            <stop offset="1" stop-color="#DADADA" />
          </linearGradient>
        </defs>
      </svg>
    </button>
  );
};

export default Rock;
