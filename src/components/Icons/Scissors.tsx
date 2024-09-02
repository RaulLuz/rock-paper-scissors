const Scissors = ({ width, height }: { width: string; height: string }) => {
  return (
    <button>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={height}
        viewBox="0 0 204 209"
        fill="none"
      >
        <g filter="url(#filter0_d_0_1777)">
          <ellipse cx="102" cy="101.5" rx="99" ry="101.5" fill="#C76C1B" />
        </g>
        <ellipse cx="102" cy="97" rx="99" ry="97" fill="#EB9F0E" />
        <ellipse
          cx="102"
          cy="97"
          rx="99"
          ry="97"
          fill="url(#paint0_linear_0_1777)"
        />
        <circle cx="102" cy="99" r="76" fill="#BABFD4" />
        <ellipse
          cx="102"
          cy="103"
          rx="76"
          ry="72"
          fill="url(#paint1_linear_0_1777)"
        />
        <path
          d="M82.1599 98.3494L90.3693 86.8064C86.957 86.2376 80.691 86.1115 75.5583 91.2442C67.4676 99.3349 64.1909 116.813 63.5079 121.044L84.0706 141.606C87.7722 141.289 104.162 139.101 119.954 123.309C120.121 122.968 123.968 120.125 120.823 116.98C119.322 115.479 116.837 115.507 115.303 117.041C114.522 117.822 113.308 117.833 112.543 117.069C111.779 116.304 111.79 115.09 112.571 114.309L118.151 108.728C120.987 105.892 118.314 101.108 114.356 102.258L109.788 106.169C108.953 106.896 107.713 106.77 107.027 105.977C106.319 105.157 106.47 103.915 107.277 103.215C123.235 89.2135 120.906 90.8998 131.173 81.2763C135.009 78.0824 130.183 72.4328 126.403 75.6675L101.566 98.0027C100.843 98.6181 99.7357 98.6297 99.0246 97.9746C98.2041 97.266 98.1852 96.245 98.7216 95.4384L116.046 68.5052C118.579 65.0757 113.595 61.2668 110.927 64.7242L85.3117 100.55C84.6939 101.443 83.4491 101.648 82.6006 101.023C81.7496 100.452 81.5166 99.2119 82.1599 98.3494Z"
          fill="#3B4262"
        />
        <defs>
          <filter
            id="filter0_d_0_1777"
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
              result="effect1_dropShadow_0_1777"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow_0_1777"
              result="shape"
            />
          </filter>
          <linearGradient
            id="paint0_linear_0_1777"
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
            id="paint1_linear_0_1777"
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

export default Scissors;
