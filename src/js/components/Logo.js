// Dependencies
import React from 'react';

// Components
import SVGIcon from 'grommet/components/SVGIcon';

export default function Logo (props) {
  return (
    <SVGIcon
      viewBox='0 0 100 88'
      version='1.1'
      type='logo'
      a11yTitle='Casa dos Contos'>
      <g><path d="M0.000 55.800 L 0.000 111.600 200.000 111.600 L 400.000 111.600 400.000 55.800 L 400.000 0.000 200.000 0.000 L 0.000 0.000 0.000 55.800 M13.893 9.823 C 21.510 11.777,25.751 12.192,38.200 12.196 C 50.371 12.200,53.586 11.945,64.328 10.119 L 70.455 9.077 75.328 9.958 C 93.553 13.254,113.054 13.211,126.500 9.846 L 131.600 8.569 131.600 25.698 L 131.600 42.827 130.632 44.713 C 128.316 49.226,128.427 49.945,128.413 30.257 L 128.400 12.313 127.300 12.594 C 118.865 14.749,106.528 15.463,90.600 14.720 L 84.600 14.440 86.986 15.230 C 95.339 17.996,111.526 19.174,121.700 17.756 L 123.600 17.491 123.600 38.156 L 123.600 58.820 122.100 61.710 L 120.600 64.600 120.497 42.662 L 120.393 20.724 114.497 21.004 C 103.961 21.503,91.233 19.773,82.000 16.588 C 76.074 14.543,75.961 14.527,77.600 15.946 C 83.833 21.344,95.699 24.911,109.300 25.476 L 115.200 25.721 115.200 50.459 L 115.200 75.197 176.100 75.299 C 229.922 75.388,237.000 75.470,237.000 76.000 C 237.000 77.004,106.261 76.896,100.600 75.887 C 94.491 74.799,90.355 73.747,86.817 72.382 L 83.600 71.142 83.600 60.917 C 83.600 49.285,83.447 48.407,80.945 45.623 C 74.959 38.965,62.494 40.050,58.240 47.600 L 57.000 49.800 56.800 60.600 L 56.600 71.400 52.200 72.880 C 45.066 75.279,35.667 76.795,27.900 76.799 L 25.200 76.800 25.200 51.258 L 25.200 25.716 31.100 25.488 C 43.866 24.994,56.518 21.320,62.521 16.363 C 64.592 14.653,64.285 14.606,60.374 16.033 C 50.220 19.739,34.759 21.831,24.300 20.914 L 20.400 20.573 20.400 42.486 C 20.400 54.539,20.259 64.400,20.088 64.400 C 19.916 64.400,19.106 63.047,18.288 61.393 L 16.800 58.387 16.800 37.979 L 16.800 17.571 20.500 17.886 C 31.528 18.823,43.870 17.930,52.702 15.557 C 57.303 14.321,56.896 14.273,46.132 14.784 C 33.231 15.395,18.590 14.469,14.084 12.756 C 11.898 11.925,12.017 10.979,11.904 30.230 L 11.800 48.059 10.300 45.282 L 8.800 42.504 8.800 25.409 C 8.800 9.288,8.840 8.330,9.500 8.595 C 9.885 8.749,11.862 9.301,13.893 9.823 M152.988 11.195 C 154.026 11.590,154.028 11.599,153.914 15.695 L 153.800 19.800 152.200 19.800 L 150.600 19.800 150.472 18.001 C 150.271 15.171,147.879 13.584,146.814 15.574 C 145.913 17.258,146.279 65.079,147.200 66.000 C 148.786 67.586,150.311 66.420,150.479 63.492 C 150.608 61.259,151.957 60.402,153.424 61.620 C 154.167 62.237,154.248 69.192,153.520 69.920 C 151.718 71.722,143.753 70.052,141.838 67.471 C 140.861 66.154,140.267 18.690,141.188 15.526 C 142.267 11.817,148.554 9.510,152.988 11.195 M292.539 11.306 C 293.130 11.738,293.214 12.396,293.116 15.806 L 293.000 19.800 291.400 19.800 L 289.800 19.800 289.587 17.677 C 289.463 16.445,289.127 15.399,288.787 15.183 C 287.807 14.564,286.452 14.755,286.014 15.574 C 285.483 16.565,285.441 63.929,285.969 65.319 C 286.900 67.767,289.600 66.667,289.600 63.840 C 289.600 61.823,290.254 61.085,291.876 61.271 L 293.000 61.400 293.115 65.567 C 293.252 70.544,293.398 70.386,288.635 70.394 C 284.521 70.401,282.164 69.392,280.902 67.084 C 280.170 65.746,279.567 22.229,280.206 16.896 C 280.688 12.881,283.600 10.824,288.824 10.809 C 290.644 10.803,292.123 11.001,292.539 11.306 M344.091 18.100 L 344.200 25.400 346.915 25.263 C 350.135 25.101,350.800 25.501,350.800 27.600 C 350.800 29.777,350.148 30.136,346.809 29.801 L 344.000 29.519 344.000 46.933 C 344.000 64.835,344.126 66.400,345.566 66.400 C 346.614 66.400,346.946 65.788,347.193 63.400 C 347.398 61.420,347.414 61.400,348.800 61.400 L 350.200 61.400 350.314 65.025 C 350.458 69.609,350.054 70.112,346.071 70.310 C 343.932 70.416,343.145 70.283,342.122 69.640 C 339.316 67.880,339.422 68.661,339.200 48.018 L 339.000 29.400 337.725 29.528 C 336.185 29.682,334.943 29.079,334.605 28.016 C 334.241 26.867,335.069 25.600,336.183 25.600 C 338.935 25.600,340.240 22.833,340.616 16.200 C 340.928 10.698,340.891 10.800,342.578 10.800 L 343.982 10.800 344.091 18.100 M237.798 11.596 C 237.932 11.814,238.085 24.369,238.136 39.496 C 238.188 54.623,238.385 67.523,238.574 68.163 C 239.174 70.194,233.549 71.667,232.481 69.758 C 232.151 69.169,232.019 69.169,230.881 69.758 C 228.641 70.917,225.822 70.615,224.094 69.031 L 222.600 67.662 222.489 48.415 C 222.367 27.368,222.385 27.185,224.679 25.958 C 226.326 25.076,229.324 25.245,230.750 26.300 C 231.420 26.795,232.155 27.200,232.384 27.200 C 233.125 27.200,232.916 16.513,232.132 14.325 C 231.200 11.725,231.686 11.200,235.025 11.200 C 236.415 11.200,237.663 11.378,237.798 11.596 M68.581 14.819 C 61.798 21.766,45.000 27.919,32.600 27.998 C 31.500 28.005,30.195 28.119,29.700 28.252 L 28.800 28.493 28.800 51.306 L 28.800 74.118 33.500 73.894 C 38.696 73.647,44.649 72.551,49.936 70.867 L 53.400 69.764 53.600 58.982 C 53.828 46.675,53.984 45.995,57.333 42.646 C 65.433 34.546,81.094 36.573,85.892 46.343 C 86.999 48.598,87.000 48.611,87.200 59.200 L 87.400 69.800 90.800 70.913 C 95.980 72.608,101.683 73.652,107.100 73.896 L 112.000 74.116 112.000 51.283 L 112.000 28.449 110.300 28.238 C 109.365 28.122,107.160 27.918,105.400 27.786 C 92.547 26.821,79.432 21.785,72.223 15.048 C 69.873 12.852,70.466 12.889,68.581 14.819 M271.119 22.678 L 271.237 25.157 273.006 25.422 C 275.468 25.791,275.649 26.153,275.516 30.460 L 275.400 34.200 273.400 34.200 L 271.400 34.200 271.272 32.408 C 271.118 30.236,270.649 29.600,269.200 29.600 C 267.367 29.600,267.093 30.353,267.262 34.923 L 267.415 39.054 270.674 45.627 C 277.302 58.997,277.929 66.062,272.790 69.516 C 271.444 70.420,271.394 70.548,271.200 73.525 L 271.000 76.600 269.000 76.600 L 267.000 76.600 266.883 73.500 L 266.766 70.400 265.260 70.400 C 262.608 70.400,262.353 69.939,262.484 65.394 L 262.600 61.400 264.128 61.274 C 266.142 61.108,266.800 61.722,266.800 63.769 C 266.800 65.641,267.334 66.400,268.651 66.400 C 272.695 66.400,271.684 58.803,266.064 46.965 C 260.645 35.549,260.420 28.590,265.392 26.231 C 266.782 25.571,266.800 25.531,266.800 23.048 C 266.800 20.028,266.878 19.931,269.185 20.082 L 271.000 20.200 271.119 22.678 M168.200 25.642 C 173.548 27.102,173.600 27.321,173.600 48.544 C 173.600 63.566,173.688 66.348,174.171 66.533 C 175.070 66.878,175.542 65.955,175.676 63.588 L 175.800 61.400 177.200 61.400 L 178.600 61.400 178.715 64.852 C 178.894 70.244,174.524 72.592,170.645 69.186 L 169.263 67.972 167.432 69.263 C 164.162 71.568,160.384 70.837,158.687 67.572 C 158.049 66.342,157.987 65.138,158.087 55.967 L 158.200 45.735 159.404 43.788 C 160.067 42.717,161.597 41.070,162.804 40.128 C 168.566 35.633,170.075 32.514,167.738 29.931 C 165.805 27.796,163.183 29.480,164.218 32.192 C 165.896 36.585,161.558 39.774,159.189 35.889 C 155.813 30.352,161.551 23.825,168.200 25.642 M193.815 26.012 C 194.257 26.379,194.400 27.471,194.400 30.470 L 194.400 34.442 192.300 34.321 L 190.200 34.200 190.072 32.408 C 189.919 30.247,189.448 29.600,188.031 29.600 C 184.264 29.600,185.086 36.627,190.020 46.616 C 197.718 62.199,196.509 70.400,186.515 70.400 C 181.181 70.400,181.200 70.417,181.200 65.629 C 181.200 61.362,181.286 61.200,183.553 61.200 C 185.060 61.200,185.600 61.886,185.600 63.800 C 185.600 65.709,186.140 66.400,187.631 66.400 C 189.418 66.400,189.689 65.644,189.525 61.115 C 189.358 56.471,188.975 55.339,184.252 45.531 C 178.916 34.452,179.489 27.669,185.937 25.564 C 187.391 25.089,193.094 25.414,193.815 26.012 M209.400 25.642 C 214.749 27.103,214.800 27.319,214.800 48.564 C 214.800 60.942,214.932 66.435,215.235 66.622 C 216.011 67.102,216.589 66.015,216.797 63.683 L 217.000 61.400 218.400 61.400 L 219.800 61.400 219.915 64.852 C 220.094 70.244,215.724 72.592,211.845 69.186 L 210.463 67.972 208.632 69.263 C 205.361 71.568,201.579 70.836,199.890 67.572 C 199.256 66.345,199.192 65.117,199.290 55.967 L 199.400 45.735 200.604 43.788 C 201.267 42.717,202.797 41.070,204.004 40.128 C 209.788 35.616,211.056 33.056,208.977 30.089 C 207.282 27.668,204.314 29.411,205.380 32.202 C 206.899 36.181,203.749 39.385,201.010 36.646 C 196.085 31.722,202.217 23.679,209.400 25.642 M252.600 25.642 C 257.994 27.115,258.054 27.373,257.916 48.525 L 257.800 66.200 256.868 67.506 C 256.356 68.224,255.366 69.109,254.668 69.472 L 253.400 70.131 255.703 70.657 C 263.147 72.357,267.102 78.150,263.567 82.176 C 260.565 85.595,252.914 84.824,250.654 80.874 C 249.379 78.645,251.230 76.319,253.771 76.957 C 254.859 77.230,255.198 78.000,254.229 78.000 C 253.571 78.000,252.000 79.855,252.000 80.632 C 252.000 83.880,258.708 84.537,260.870 81.501 C 265.104 75.556,255.291 68.090,247.800 71.558 C 242.453 74.034,242.225 78.227,247.085 84.710 C 251.010 89.945,251.077 90.196,250.315 96.798 C 250.053 99.069,260.244 101.712,263.697 100.269 C 266.745 98.995,270.049 95.573,270.746 92.967 C 270.994 92.038,271.382 91.755,272.955 91.353 C 274.777 90.889,274.834 90.899,274.217 91.582 C 273.282 92.614,273.483 99.916,274.463 100.532 C 276.513 101.821,282.558 97.169,284.402 92.885 C 285.320 90.751,286.000 90.194,286.000 91.575 C 286.000 92.002,287.096 93.806,288.436 95.584 L 290.872 98.816 291.683 97.785 C 294.991 93.579,294.701 87.424,291.111 85.648 L 289.596 84.899 290.811 84.395 C 292.545 83.677,294.365 84.301,295.530 86.013 C 297.207 88.476,296.167 92.141,292.151 97.919 C 289.954 101.079,289.959 101.127,292.500 101.305 C 294.317 101.432,294.209 101.462,291.700 101.526 C 289.455 101.583,288.800 101.474,288.800 101.044 C 288.800 100.583,285.926 96.301,284.773 95.042 C 284.589 94.842,283.411 95.734,282.097 97.070 C 276.516 102.738,270.800 103.231,270.800 98.044 C 270.800 94.992,270.782 94.989,268.079 97.618 C 263.868 101.713,258.584 102.671,251.509 100.620 L 248.129 99.641 245.593 100.665 C 240.054 102.903,231.565 101.056,233.215 97.972 C 234.800 95.011,242.792 94.492,248.500 96.980 C 251.025 98.081,248.763 92.236,245.041 88.047 C 238.113 80.246,238.568 74.294,246.318 71.334 L 248.046 70.674 246.136 69.637 C 245.085 69.067,243.815 67.988,243.313 67.241 L 242.400 65.882 242.400 48.121 C 242.400 33.647,242.504 30.160,242.962 29.280 C 244.614 26.105,248.679 24.570,252.600 25.642 M309.165 26.382 C 312.502 28.084,312.397 27.379,312.399 48.086 L 312.400 66.372 311.106 67.846 C 307.976 71.411,301.624 71.411,298.494 67.846 L 297.200 66.372 297.203 48.086 C 297.205 30.970,297.253 29.728,297.945 28.678 C 300.125 25.371,305.163 24.340,309.165 26.382 M330.314 25.630 C 333.041 26.581,332.978 26.105,333.200 47.400 C 333.328 59.688,333.554 66.960,333.828 67.600 C 334.722 69.692,333.867 70.384,330.376 70.395 C 327.836 70.402,326.999 69.717,327.411 67.965 C 327.953 65.658,328.090 30.390,327.559 29.751 C 326.472 28.441,323.526 29.939,323.003 32.066 C 322.662 33.453,323.017 66.376,323.390 67.965 C 323.809 69.753,322.961 70.400,320.200 70.400 C 317.436 70.400,316.590 69.753,317.015 67.965 C 317.457 66.108,317.474 29.788,317.034 27.860 C 316.586 25.896,316.999 25.614,320.337 25.606 C 322.541 25.601,322.902 25.705,323.084 26.400 C 323.199 26.840,323.317 27.199,323.347 27.198 C 323.376 27.197,324.286 26.747,325.368 26.198 C 327.539 25.097,328.475 24.989,330.314 25.630 M365.534 26.170 C 366.738 26.796,368.082 28.177,368.750 29.474 C 369.063 30.082,369.200 35.738,369.200 48.115 L 369.200 65.882 368.288 67.235 C 365.235 71.766,356.895 71.501,354.500 66.798 C 353.487 64.808,353.077 33.300,354.020 29.903 C 355.064 26.143,361.483 24.062,365.534 26.170 M386.100 25.807 C 386.704 26.047,386.800 26.656,386.800 30.243 L 386.800 34.400 384.800 34.400 L 382.800 34.400 382.800 32.889 C 382.800 30.061,379.946 28.259,378.814 30.374 C 377.279 33.243,378.572 38.730,382.827 47.400 C 390.254 62.535,388.876 70.403,378.800 70.392 C 373.773 70.386,373.948 70.565,374.085 65.567 L 374.200 61.400 376.000 61.400 L 377.800 61.400 378.013 63.523 C 378.233 65.711,378.750 66.383,380.220 66.394 C 383.917 66.421,382.799 58.521,377.510 47.237 C 371.562 34.550,371.650 28.051,377.800 25.774 C 379.409 25.179,384.573 25.199,386.100 25.807 M227.590 30.226 C 227.359 30.833,227.200 38.086,227.200 48.000 C 227.200 57.914,227.359 65.167,227.590 65.774 C 228.107 67.134,229.934 67.162,231.478 65.835 L 232.600 64.870 232.716 48.935 C 232.780 40.171,232.727 32.580,232.600 32.066 C 231.971 29.535,228.358 28.207,227.590 30.226 M248.238 30.067 C 247.286 31.427,247.272 64.553,248.223 65.911 C 249.255 67.384,251.419 67.077,252.340 65.326 C 253.025 64.025,252.974 31.769,252.285 30.400 C 251.569 28.977,249.141 28.778,248.238 30.067 M302.962 30.042 C 302.238 30.842,302.200 31.730,302.200 48.000 C 302.200 66.949,302.179 66.800,304.800 66.800 C 307.421 66.800,307.400 66.949,307.400 48.000 C 307.400 31.730,307.362 30.843,306.638 30.042 C 305.662 28.963,303.938 28.963,302.962 30.042 M359.549 29.861 C 359.102 30.400,359.000 33.789,359.000 48.094 C 359.000 67.612,358.885 66.800,361.654 66.800 C 363.989 66.800,364.000 66.710,364.000 48.000 C 364.000 29.009,364.026 29.200,361.426 29.200 C 360.679 29.200,359.858 29.489,359.549 29.861 M166.120 42.359 C 163.431 44.307,163.200 45.400,163.200 56.175 C 163.200 66.627,163.226 66.800,164.810 66.800 C 168.257 66.800,168.400 66.233,168.400 52.620 C 168.400 46.339,168.247 41.200,168.060 41.200 C 167.873 41.200,167.000 41.722,166.120 42.359 M207.559 42.103 C 204.709 43.997,204.400 45.364,204.400 56.052 C 204.400 61.267,204.509 65.819,204.643 66.167 C 205.185 67.579,208.159 66.758,209.135 64.926 C 209.686 63.890,209.805 41.200,209.259 41.200 C 209.072 41.200,208.307 41.606,207.559 42.103 M387.000 76.000 C 387.000 76.703,275.377 77.137,274.676 76.436 C 273.476 75.236,275.331 75.198,330.924 75.299 C 380.458 75.388,387.000 75.470,387.000 76.000 M273.226 83.214 C 274.160 83.714,274.246 85.020,273.367 85.357 C 271.330 86.139,269.646 84.574,271.288 83.424 C 272.344 82.684,272.254 82.694,273.226 83.214 M362.026 83.214 C 362.944 83.705,363.053 85.128,362.199 85.456 C 360.331 86.173,358.644 84.197,360.300 83.232 C 361.178 82.721,361.105 82.721,362.026 83.214 M307.527 91.986 C 309.359 92.495,310.634 92.506,312.303 92.028 C 313.694 91.629,313.990 91.979,312.974 92.822 C 310.319 95.025,310.792 100.400,313.640 100.400 C 315.653 100.400,318.876 97.826,321.287 94.291 C 322.729 92.176,327.001 90.980,329.326 92.039 C 330.078 92.382,330.560 92.338,331.525 91.839 C 332.204 91.488,332.814 91.200,332.880 91.200 C 332.946 91.199,332.939 93.199,332.863 95.643 C 332.702 100.901,332.858 101.192,335.335 100.246 C 337.655 99.360,341.315 95.518,342.680 92.538 C 343.588 90.554,343.769 90.363,344.040 91.097 C 344.434 92.163,347.304 92.674,349.608 92.089 C 351.500 91.609,351.512 91.644,350.100 93.496 C 347.946 96.320,348.951 100.400,351.801 100.400 C 353.994 100.400,359.398 95.218,359.681 92.842 C 359.779 92.022,360.134 91.763,361.700 91.365 C 363.441 90.923,364.406 91.205,363.000 91.745 C 362.280 92.021,362.129 98.745,362.814 100.026 C 364.003 102.247,369.136 99.204,372.487 94.291 C 373.929 92.176,378.201 90.980,380.526 92.039 C 381.278 92.382,381.760 92.338,382.725 91.839 C 383.404 91.488,384.014 91.200,384.080 91.199 C 384.146 91.199,384.140 93.269,384.066 95.799 C 383.918 100.834,384.084 101.205,386.131 100.426 C 387.579 99.876,387.484 100.232,385.976 101.012 C 384.082 101.992,381.925 101.650,381.265 100.266 L 380.724 99.132 379.862 99.939 C 376.986 102.633,371.200 101.715,371.200 98.564 C 371.200 97.330,371.031 97.350,369.198 98.801 C 363.858 103.031,359.600 102.498,359.600 97.600 C 359.600 94.702,359.880 94.699,356.873 97.624 C 349.480 104.813,342.167 101.149,348.942 93.650 L 349.800 92.701 348.800 93.012 C 346.892 93.606,344.994 93.981,343.800 93.999 C 342.868 94.013,342.350 94.370,341.484 95.595 C 338.008 100.508,331.458 103.187,330.065 100.266 L 329.524 99.132 328.662 99.939 C 325.656 102.755,320.000 101.709,320.000 98.338 L 320.000 97.146 318.277 98.558 C 311.039 104.489,304.792 100.652,310.945 94.054 C 312.167 92.743,312.174 92.716,311.200 93.016 C 309.226 93.623,307.379 93.981,306.167 93.990 C 305.202 93.998,304.638 94.370,303.572 95.700 C 301.612 98.147,298.921 100.344,297.831 100.386 C 297.629 100.394,298.323 99.830,299.374 99.134 C 301.655 97.623,304.012 94.753,305.048 92.225 C 305.462 91.216,305.857 90.658,305.927 90.984 C 305.997 91.310,306.717 91.761,307.527 91.986 M324.160 93.360 C 320.421 97.099,324.301 102.172,328.700 99.296 C 330.036 98.423,330.044 93.557,328.711 92.623 C 327.238 91.591,325.676 91.844,324.160 93.360 M375.360 93.360 C 371.638 97.082,375.473 102.141,379.900 99.349 C 381.238 98.505,381.247 93.558,379.911 92.623 C 378.438 91.591,376.876 91.844,375.360 93.360 M236.080 96.475 C 234.541 97.253,235.047 98.822,237.185 99.900 C 239.926 101.282,246.569 100.892,247.094 99.317 C 247.559 97.923,238.062 95.472,236.080 96.475 " stroke="none" fill="#eed5c3" fillRule="evenodd"></path><path id="path1" d="M8.800 25.409 L 8.800 42.504 10.300 45.282 L 11.800 48.059 11.904 30.230 C 12.017 10.979,11.898 11.925,14.084 12.756 C 18.590 14.469,33.231 15.395,46.132 14.784 C 56.896 14.273,57.303 14.321,52.702 15.557 C 43.870 17.930,31.528 18.823,20.500 17.886 L 16.800 17.571 16.800 37.979 L 16.800 58.387 18.288 61.393 C 19.106 63.047,19.916 64.400,20.088 64.400 C 20.259 64.400,20.400 54.539,20.400 42.486 L 20.400 20.573 24.300 20.914 C 34.759 21.831,50.220 19.739,60.374 16.033 C 64.285 14.606,64.592 14.653,62.521 16.363 C 56.518 21.320,43.866 24.994,31.100 25.488 L 25.200 25.716 25.200 51.258 L 25.200 76.800 27.900 76.799 C 35.667 76.795,45.066 75.279,52.200 72.880 L 56.600 71.400 56.800 60.600 L 57.000 49.800 58.240 47.600 C 62.494 40.050,74.959 38.965,80.945 45.623 C 83.447 48.407,83.600 49.285,83.600 60.917 L 83.600 71.142 86.817 72.382 C 90.355 73.747,94.491 74.799,100.600 75.887 C 106.261 76.896,237.000 77.004,237.000 76.000 C 237.000 75.470,229.922 75.388,176.100 75.299 L 115.200 75.197 115.200 50.459 L 115.200 25.721 109.300 25.476 C 95.699 24.911,83.833 21.344,77.600 15.946 C 75.961 14.527,76.074 14.543,82.000 16.588 C 91.233 19.773,103.961 21.503,114.497 21.004 L 120.393 20.724 120.497 42.662 L 120.600 64.600 122.100 61.710 L 123.600 58.820 123.600 38.156 L 123.600 17.491 121.700 17.756 C 111.526 19.174,95.339 17.996,86.986 15.230 L 84.600 14.440 90.600 14.720 C 106.528 15.463,118.865 14.749,127.300 12.594 L 128.400 12.313 128.413 30.257 C 128.427 49.945,128.316 49.226,130.632 44.713 L 131.600 42.827 131.600 25.698 L 131.600 8.569 126.500 9.846 C 113.054 13.211,93.553 13.254,75.328 9.958 L 70.455 9.077 64.328 10.119 C 44.195 13.541,20.184 12.874,9.500 8.595 C 8.840 8.330,8.800 9.288,8.800 25.409 M145.299 11.333 C 140.700 13.001,140.738 12.743,140.879 41.671 C 141.016 69.542,140.770 67.511,144.238 69.493 C 146.043 70.526,152.612 70.828,153.520 69.920 C 154.248 69.192,154.167 62.237,153.424 61.620 C 151.957 60.402,150.608 61.259,150.479 63.492 C 150.311 66.420,148.786 67.586,147.200 66.000 C 146.279 65.079,145.913 17.258,146.814 15.574 C 147.879 13.584,150.271 15.171,150.472 18.001 L 150.600 19.800 152.200 19.800 L 153.800 19.800 153.914 15.695 C 154.028 11.599,154.026 11.590,152.988 11.195 C 151.590 10.664,146.913 10.747,145.299 11.333 M284.183 11.552 C 281.814 12.628,280.507 14.384,280.206 16.896 C 279.567 22.229,280.170 65.746,280.902 67.084 C 282.164 69.392,284.521 70.401,288.635 70.394 C 293.398 70.386,293.252 70.544,293.115 65.567 L 293.000 61.400 291.876 61.271 C 290.254 61.085,289.600 61.823,289.600 63.840 C 289.600 66.667,286.900 67.767,285.969 65.319 C 285.441 63.929,285.483 16.565,286.014 15.574 C 286.452 14.755,287.807 14.564,288.787 15.183 C 289.127 15.399,289.463 16.445,289.587 17.677 L 289.800 19.800 291.400 19.800 L 293.000 19.800 293.116 15.806 C 293.214 12.396,293.130 11.738,292.539 11.306 C 291.457 10.515,286.122 10.671,284.183 11.552 M341.020 11.300 C 340.935 11.575,340.753 13.780,340.616 16.200 C 340.240 22.833,338.935 25.600,336.183 25.600 C 335.069 25.600,334.241 26.867,334.605 28.016 C 334.943 29.079,336.185 29.682,337.725 29.528 L 339.000 29.400 339.200 48.018 C 339.422 68.661,339.316 67.880,342.122 69.640 C 343.145 70.283,343.932 70.416,346.071 70.310 C 350.054 70.112,350.458 69.609,350.314 65.025 L 350.200 61.400 348.800 61.400 C 347.414 61.400,347.398 61.420,347.193 63.400 C 346.946 65.788,346.614 66.400,345.566 66.400 C 344.126 66.400,344.000 64.835,344.000 46.933 L 344.000 29.519 346.809 29.801 C 350.148 30.136,350.800 29.777,350.800 27.600 C 350.800 25.501,350.135 25.101,346.915 25.263 L 344.200 25.400 344.091 18.100 L 343.982 10.800 342.578 10.800 C 341.805 10.800,341.105 11.024,341.020 11.300 M231.979 11.825 C 231.551 12.341,231.577 12.778,232.132 14.325 C 232.916 16.513,233.125 27.200,232.384 27.200 C 232.155 27.200,231.420 26.795,230.750 26.300 C 229.324 25.245,226.326 25.076,224.679 25.958 C 222.385 27.185,222.367 27.368,222.489 48.415 L 222.600 67.662 224.094 69.031 C 225.822 70.615,228.641 70.917,230.881 69.758 C 232.019 69.169,232.151 69.169,232.481 69.758 C 233.549 71.667,239.174 70.194,238.574 68.163 C 238.385 67.523,238.188 54.623,238.136 39.496 C 238.085 24.369,237.932 11.814,237.798 11.596 C 237.380 10.920,232.573 11.110,231.979 11.825 M72.223 15.048 C 79.432 21.785,92.547 26.821,105.400 27.786 C 107.160 27.918,109.365 28.122,110.300 28.238 L 112.000 28.449 112.000 51.283 L 112.000 74.116 107.100 73.896 C 101.683 73.652,95.980 72.608,90.800 70.913 L 87.400 69.800 87.200 59.200 C 87.000 48.611,86.999 48.598,85.892 46.343 C 81.094 36.573,65.433 34.546,57.333 42.646 C 53.984 45.995,53.828 46.675,53.600 58.982 L 53.400 69.764 49.936 70.867 C 44.649 72.551,38.696 73.647,33.500 73.894 L 28.800 74.118 28.800 51.306 L 28.800 28.493 29.700 28.252 C 30.195 28.119,31.500 28.005,32.600 27.998 C 45.000 27.919,61.798 21.766,68.581 14.819 C 70.466 12.889,69.873 12.852,72.223 15.048 M267.085 20.248 C 266.928 20.405,266.800 21.665,266.800 23.048 C 266.800 25.531,266.782 25.571,265.392 26.231 C 260.420 28.590,260.645 35.549,266.064 46.965 C 271.684 58.803,272.695 66.400,268.651 66.400 C 267.334 66.400,266.800 65.641,266.800 63.769 C 266.800 61.722,266.142 61.108,264.128 61.274 L 262.600 61.400 262.484 65.394 C 262.353 69.939,262.608 70.400,265.260 70.400 L 266.766 70.400 266.883 73.500 L 267.000 76.600 269.000 76.600 L 271.000 76.600 271.200 73.525 C 271.394 70.548,271.444 70.420,272.790 69.516 C 277.929 66.062,277.302 58.997,270.674 45.627 L 267.415 39.054 267.262 34.923 C 267.093 30.353,267.367 29.600,269.200 29.600 C 270.649 29.600,271.118 30.236,271.272 32.408 L 271.400 34.200 273.400 34.200 L 275.400 34.200 275.516 30.460 C 275.649 26.153,275.468 25.791,273.006 25.422 L 271.237 25.157 271.119 22.678 L 271.000 20.200 269.185 20.082 C 268.187 20.016,267.242 20.091,267.085 20.248 M163.062 25.783 C 158.945 27.251,157.006 32.310,159.189 35.889 C 161.558 39.774,165.896 36.585,164.218 32.192 C 163.183 29.480,165.805 27.796,167.738 29.931 C 170.075 32.514,168.566 35.633,162.804 40.128 C 161.597 41.070,160.067 42.717,159.404 43.788 L 158.200 45.735 158.087 55.967 C 157.987 65.138,158.049 66.342,158.687 67.572 C 160.384 70.837,164.162 71.568,167.432 69.263 L 169.263 67.972 170.645 69.186 C 174.524 72.592,178.894 70.244,178.715 64.852 L 178.600 61.400 177.200 61.400 L 175.800 61.400 175.676 63.588 C 175.542 65.955,175.070 66.878,174.171 66.533 C 173.688 66.348,173.600 63.566,173.600 48.544 C 173.600 28.960,173.598 28.946,171.142 27.092 C 168.754 25.289,165.793 24.810,163.062 25.783 M185.937 25.564 C 179.489 27.669,178.916 34.452,184.252 45.531 C 188.975 55.339,189.358 56.471,189.525 61.115 C 189.689 65.644,189.418 66.400,187.631 66.400 C 186.140 66.400,185.600 65.709,185.600 63.800 C 185.600 61.886,185.060 61.200,183.553 61.200 C 181.286 61.200,181.200 61.362,181.200 65.629 C 181.200 70.417,181.181 70.400,186.515 70.400 C 196.509 70.400,197.718 62.199,190.020 46.616 C 185.086 36.627,184.264 29.600,188.031 29.600 C 189.448 29.600,189.919 30.247,190.072 32.408 L 190.200 34.200 192.300 34.321 L 194.400 34.442 194.400 30.470 C 194.400 27.471,194.257 26.379,193.815 26.012 C 193.094 25.414,187.391 25.089,185.937 25.564 M204.230 25.795 C 199.574 27.454,197.799 33.435,201.010 36.646 C 203.749 39.385,206.899 36.181,205.380 32.202 C 204.314 29.411,207.282 27.668,208.977 30.089 C 211.056 33.056,209.788 35.616,204.004 40.128 C 202.797 41.070,201.267 42.717,200.604 43.788 L 199.400 45.735 199.290 55.967 C 199.192 65.117,199.256 66.345,199.890 67.572 C 201.579 70.836,205.361 71.568,208.632 69.263 L 210.463 67.972 211.845 69.186 C 215.724 72.592,220.094 70.244,219.915 64.852 L 219.800 61.400 218.400 61.400 L 217.000 61.400 216.797 63.683 C 216.589 66.015,216.011 67.102,215.235 66.622 C 214.932 66.435,214.800 60.942,214.800 48.564 C 214.800 28.958,214.799 28.946,212.342 27.092 C 209.943 25.281,206.995 24.809,204.230 25.795 M247.257 25.797 C 246.299 26.096,245.067 26.759,244.519 27.270 C 242.373 29.275,242.400 29.009,242.400 48.121 L 242.400 65.882 243.313 67.241 C 243.815 67.988,245.085 69.067,246.136 69.637 L 248.046 70.674 246.318 71.334 C 238.568 74.294,238.113 80.246,245.041 88.047 C 248.763 92.236,251.025 98.081,248.500 96.980 C 242.792 94.492,234.800 95.011,233.215 97.972 C 231.565 101.056,240.054 102.903,245.593 100.665 L 248.129 99.641 251.509 100.620 C 258.584 102.671,263.868 101.713,268.079 97.618 C 270.782 94.989,270.800 94.992,270.800 98.044 C 270.800 103.231,276.516 102.738,282.097 97.070 C 283.411 95.734,284.589 94.842,284.773 95.042 C 285.926 96.301,288.800 100.583,288.800 101.044 C 288.800 101.474,289.455 101.583,291.700 101.526 C 294.209 101.462,294.317 101.432,292.500 101.305 C 289.959 101.127,289.954 101.079,292.151 97.919 C 296.167 92.141,297.207 88.476,295.530 86.013 C 294.365 84.301,292.545 83.677,290.811 84.395 L 289.596 84.899 291.111 85.648 C 294.701 87.424,294.991 93.579,291.683 97.785 L 290.872 98.816 288.436 95.584 C 287.096 93.806,286.000 92.002,286.000 91.575 C 286.000 90.194,285.320 90.751,284.402 92.885 C 282.558 97.169,276.513 101.821,274.463 100.532 C 273.483 99.916,273.282 92.614,274.217 91.582 C 274.834 90.899,274.777 90.889,272.955 91.353 C 271.382 91.755,270.994 92.038,270.746 92.967 C 270.049 95.573,266.745 98.995,263.697 100.269 C 260.244 101.712,250.053 99.069,250.315 96.798 C 251.077 90.196,251.010 89.945,247.085 84.710 C 242.225 78.227,242.453 74.034,247.800 71.558 C 255.291 68.090,265.104 75.556,260.870 81.501 C 258.708 84.537,252.000 83.880,252.000 80.632 C 252.000 79.855,253.571 78.000,254.229 78.000 C 255.198 78.000,254.859 77.230,253.771 76.957 C 251.230 76.319,249.379 78.645,250.654 80.874 C 252.914 84.824,260.565 85.595,263.567 82.176 C 267.102 78.150,263.147 72.357,255.703 70.657 L 253.400 70.131 254.668 69.472 C 255.366 69.109,256.356 68.224,256.868 67.506 L 257.800 66.200 257.916 48.525 C 258.044 28.974,258.044 28.981,255.542 27.092 C 253.134 25.274,250.337 24.837,247.257 25.797 M301.969 25.723 C 297.034 27.569,297.206 26.764,297.203 48.086 L 297.200 66.372 298.494 67.846 C 301.624 71.411,307.976 71.411,311.106 67.846 L 312.400 66.372 312.399 48.086 C 312.397 30.639,312.361 29.741,311.614 28.516 C 310.078 25.997,305.094 24.554,301.969 25.723 M325.368 26.198 C 324.286 26.747,323.376 27.197,323.347 27.198 C 323.317 27.199,323.199 26.840,323.084 26.400 C 322.902 25.705,322.541 25.601,320.337 25.606 C 316.999 25.614,316.586 25.896,317.034 27.860 C 317.474 29.788,317.457 66.108,317.015 67.965 C 316.590 69.753,317.436 70.400,320.200 70.400 C 322.961 70.400,323.809 69.753,323.390 67.965 C 323.017 66.376,322.662 33.453,323.003 32.066 C 323.526 29.939,326.472 28.441,327.559 29.751 C 328.090 30.390,327.953 65.658,327.411 67.965 C 326.999 69.717,327.836 70.402,330.376 70.395 C 333.867 70.384,334.722 69.692,333.828 67.600 C 333.554 66.960,333.328 59.688,333.200 47.400 C 332.978 26.105,333.041 26.581,330.314 25.630 C 328.475 24.989,327.539 25.097,325.368 26.198 M358.691 25.709 C 356.433 26.444,354.498 28.181,354.020 29.903 C 353.077 33.300,353.487 64.808,354.500 66.798 C 356.895 71.501,365.235 71.766,368.288 67.235 L 369.200 65.882 369.200 48.115 C 369.200 29.642,369.195 29.588,367.450 27.662 C 365.619 25.641,361.629 24.752,358.691 25.709 M377.800 25.774 C 371.650 28.051,371.562 34.550,377.510 47.237 C 382.799 58.521,383.917 66.421,380.220 66.394 C 378.750 66.383,378.233 65.711,378.013 63.523 L 377.800 61.400 376.000 61.400 L 374.200 61.400 374.085 65.567 C 373.948 70.565,373.773 70.386,378.800 70.392 C 388.876 70.403,390.254 62.535,382.827 47.400 C 378.572 38.730,377.279 33.243,378.814 30.374 C 379.946 28.259,382.800 30.061,382.800 32.889 L 382.800 34.400 384.800 34.400 L 386.800 34.400 386.800 30.243 C 386.800 25.409,386.990 25.620,382.400 25.355 C 380.355 25.237,378.890 25.371,377.800 25.774 M231.325 30.166 C 232.843 31.572,232.842 31.564,232.716 48.935 L 232.600 64.870 231.478 65.835 C 229.934 67.162,228.107 67.134,227.590 65.774 C 227.359 65.167,227.200 57.914,227.200 48.000 C 227.200 38.086,227.359 30.833,227.590 30.226 C 228.107 28.867,229.893 28.838,231.325 30.166 M252.285 30.400 C 252.974 31.769,253.025 64.025,252.340 65.326 C 251.419 67.077,249.255 67.384,248.223 65.911 C 247.272 64.553,247.286 31.427,248.238 30.067 C 249.141 28.778,251.569 28.977,252.285 30.400 M306.638 30.042 C 307.362 30.843,307.400 31.730,307.400 48.000 C 307.400 66.949,307.421 66.800,304.800 66.800 C 302.179 66.800,302.200 66.949,302.200 48.000 C 302.200 31.730,302.238 30.842,302.962 30.042 C 303.938 28.963,305.662 28.963,306.638 30.042 M363.377 30.089 C 363.917 30.860,364.000 33.241,364.000 48.000 C 364.000 66.710,363.989 66.800,361.654 66.800 C 358.885 66.800,359.000 67.612,359.000 48.094 C 359.000 33.789,359.102 30.400,359.549 29.861 C 360.371 28.871,362.618 29.005,363.377 30.089 M168.400 52.620 C 168.400 66.233,168.257 66.800,164.810 66.800 C 163.226 66.800,163.200 66.627,163.200 56.175 C 163.200 45.400,163.431 44.307,166.120 42.359 C 167.000 41.722,167.873 41.200,168.060 41.200 C 168.247 41.200,168.400 46.339,168.400 52.620 M209.600 52.626 C 209.600 65.906,209.393 66.754,206.143 66.787 C 204.404 66.805,204.400 66.779,204.400 56.052 C 204.400 47.013,204.442 46.486,205.300 44.788 C 206.096 43.212,208.316 41.200,209.259 41.200 C 209.447 41.200,209.600 46.342,209.600 52.626 M274.579 75.633 C 274.431 75.873,274.475 76.235,274.676 76.436 C 275.377 77.137,387.000 76.703,387.000 76.000 C 387.000 75.233,275.052 74.868,274.579 75.633 M271.288 83.424 C 269.646 84.574,271.330 86.139,273.367 85.357 C 274.246 85.020,274.160 83.714,273.226 83.214 C 272.254 82.694,272.344 82.684,271.288 83.424 M360.300 83.232 C 358.644 84.197,360.331 86.173,362.199 85.456 C 363.053 85.128,362.944 83.705,362.026 83.214 C 361.105 82.721,361.178 82.721,360.300 83.232 M305.048 92.225 C 304.012 94.753,301.655 97.623,299.374 99.134 C 298.323 99.830,297.629 100.394,297.831 100.386 C 298.921 100.344,301.612 98.147,303.572 95.700 C 304.638 94.370,305.202 93.998,306.167 93.990 C 307.379 93.981,309.226 93.623,311.200 93.016 C 312.174 92.716,312.167 92.743,310.945 94.054 C 304.792 100.652,311.039 104.489,318.277 98.558 L 320.000 97.146 320.000 98.338 C 320.000 101.709,325.656 102.755,328.662 99.939 L 329.524 99.132 330.065 100.266 C 331.458 103.187,338.008 100.508,341.484 95.595 C 342.350 94.370,342.868 94.013,343.800 93.999 C 344.994 93.981,346.892 93.606,348.800 93.012 L 349.800 92.701 348.942 93.650 C 342.167 101.149,349.480 104.813,356.873 97.624 C 359.880 94.699,359.600 94.702,359.600 97.600 C 359.600 102.498,363.858 103.031,369.198 98.801 C 371.031 97.350,371.200 97.330,371.200 98.564 C 371.200 101.715,376.986 102.633,379.862 99.939 L 380.724 99.132 381.265 100.266 C 381.925 101.650,384.082 101.992,385.976 101.012 C 387.484 100.232,387.579 99.876,386.131 100.426 C 384.084 101.205,383.918 100.834,384.066 95.799 C 384.140 93.269,384.146 91.199,384.080 91.199 C 384.014 91.200,383.404 91.488,382.725 91.839 C 381.760 92.338,381.278 92.382,380.526 92.039 C 378.201 90.980,373.929 92.176,372.487 94.291 C 369.136 99.204,364.003 102.247,362.814 100.026 C 362.129 98.745,362.280 92.021,363.000 91.745 C 364.406 91.205,363.441 90.923,361.700 91.365 C 360.134 91.763,359.779 92.022,359.681 92.842 C 359.398 95.218,353.994 100.400,351.801 100.400 C 348.951 100.400,347.946 96.320,350.100 93.496 C 351.512 91.644,351.500 91.609,349.608 92.089 C 347.304 92.674,344.434 92.163,344.040 91.097 C 343.769 90.363,343.588 90.554,342.680 92.538 C 341.315 95.518,337.655 99.360,335.335 100.246 C 332.858 101.192,332.702 100.901,332.863 95.643 C 332.939 93.199,332.946 91.199,332.880 91.200 C 332.814 91.200,332.204 91.488,331.525 91.839 C 330.560 92.338,330.078 92.382,329.326 92.039 C 327.001 90.980,322.729 92.176,321.287 94.291 C 318.876 97.826,315.653 100.400,313.640 100.400 C 310.792 100.400,310.319 95.025,312.974 92.822 C 313.990 91.979,313.694 91.629,312.303 92.028 C 309.873 92.725,306.170 92.118,305.927 90.984 C 305.857 90.658,305.462 91.216,305.048 92.225 M328.711 92.623 C 330.044 93.557,330.036 98.423,328.700 99.296 C 326.443 100.772,324.118 100.455,323.252 98.554 C 321.502 94.713,325.497 90.371,328.711 92.623 M379.911 92.623 C 381.247 93.558,381.238 98.505,379.900 99.349 C 377.637 100.776,375.309 100.436,374.452 98.554 C 372.702 94.713,376.697 90.371,379.911 92.623 M244.118 97.580 C 247.468 98.987,247.729 99.464,245.576 100.242 C 241.699 101.643,235.550 100.286,235.280 97.970 C 235.010 95.651,239.099 95.471,244.118 97.580 " stroke="none" fill="#23c5e4" fillRule="evenodd"></path></g>
    </SVGIcon>
  );
}
