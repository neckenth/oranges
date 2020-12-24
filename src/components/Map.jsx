import React from "react";
import "../../public/styles.css";

const Map = (props) => {
  const colorMap = props.props.reduce(
    (acc, elem) => ({ ...acc, [elem["name"]]: elem["color"] }),
    {}
  );

  return (
    <svg
      viewBox="0 0 307 557"
      height={window.innerHeight - 13}
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xlink="http://www.w3.org/1999/xlink"
      {...props}
      className="svg"
    >
      <title>Group</title>
      <desc>Created with Sketch.</desc>
      <g
        id="Page-1"
        stroke="none"
        strokeWidth="1"
        fill="none"
        fillRule="evenodd"
      >
        <g id="Mobile" transform="translate(-7.000000, -234.000000)">
          <g id="Group" transform="translate(7.000000, 234.000000)">
            <g
              id="Line-3"
              transform="translate(6.500000, 6.500000)"
              stroke="#FB6C00"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="8"
            >
              <g id="Line-2">
                <polyline
                  id="Line"
                  points="204 6.40559322e-17 204 264.345391 191.48156 281.50637 0 544"
                ></polyline>
              </g>
            </g>
            <circle
              id="Forest Hills"
              stroke="#000000"
              fill={colorMap["Forest Hills"]}
              cx="6.5"
              cy="550.5"
              r="6"
            ></circle>
            <circle
              id="Green Street"
              stroke="#000000"
              fill={colorMap["Green Street"]}
              cx="27.5"
              cy="522.5"
              r="6"
            ></circle>
            <circle
              id="Stony Brook"
              stroke="#000000"
              fill={colorMap["Stony Brook"]}
              cx="47.5"
              cy="494.5"
              r="6"
            ></circle>
            <circle
              id="Jackson Square"
              stroke="#000000"
              fill={colorMap["Jackson Square"]}
              cx="67.5"
              cy="467.5"
              r="6"
            ></circle>
            <circle
              id="Roxbury Crossing"
              stroke="#000000"
              fill={colorMap["Roxbury Crossing"]}
              cx="88.5"
              cy="438.5"
              r="6"
            ></circle>
            <circle
              id="Ruggles"
              stroke="#000000"
              fill={colorMap["Ruggles"]}
              cx="108.5"
              cy="410.5"
              r="6"
            ></circle>
            <circle
              id="Massachusetts Avenue"
              stroke="#000000"
              fill={colorMap["Massachusetts Avenue"]}
              cx="130.5"
              cy="382.5"
              r="6"
            ></circle>
            <circle
              id="Back Bay"
              stroke="#000000"
              fill={colorMap["Back Bay"]}
              cx="149.5"
              cy="355.5"
              r="6"
            ></circle>
            <circle
              id="Tufts Medical Center"
              stroke="#000000"
              fill={colorMap["Tufts Medical Center"]}
              cx="169.5"
              cy="327.5"
              r="6"
            ></circle>
            <circle
              id="Chinatown"
              stroke="#000000"
              fill={colorMap["Chinatown"]}
              cx="189.5"
              cy="299.5"
              r="6"
            ></circle>
            <circle
              id="Downtown Crossing"
              stroke="#000000"
              fill={colorMap["Downtown Crossing"]}
              cx="210.5"
              cy="271.5"
              r="6"
            ></circle>
            <circle
              id="State"
              stroke="#000000"
              fill={colorMap["State"]}
              cx="210.5"
              cy="241.5"
              r="6"
            ></circle>
            <circle
              id="Haymarket"
              stroke="#000000"
              fill={colorMap["Haymarket"]}
              cx="210.5"
              cy="211.5"
              r="6"
            ></circle>
            <circle
              id="North Station"
              stroke="#000000"
              fill={colorMap["North Station"]}
              cx="210.5"
              cy="180.5"
              r="6"
            ></circle>
            <circle
              id="Community College"
              stroke="#000000"
              fill={colorMap["Community College"]}
              cx="210.5"
              cy="149.5"
              r="6"
            ></circle>
            <circle
              id="Sullivan Square"
              stroke="#000000"
              fill={colorMap["Sullivan Square"]}
              cx="210.5"
              cy="120.5"
              r="6"
            ></circle>
            <circle
              id="Assembly"
              stroke="#000000"
              fill={colorMap["Assembly"]}
              cx="210.5"
              cy="90.5"
              r="6"
            ></circle>
            <circle
              id="Wellington"
              stroke="#000000"
              fill={colorMap["Wellington"]}
              cx="210.5"
              cy="62.5"
              r="6"
            ></circle>
            <circle
              id="Malden Center"
              stroke="#000000"
              fill={colorMap["Malden Center"]}
              cx="210.5"
              cy="35.5"
              r="6"
            ></circle>
            <circle
              id="Oak Grove"
              stroke="#000000"
              fill={colorMap["Oak Grove"]}
              cx="210.5"
              cy="6.5"
              r="6"
            ></circle>
            <text
              id="Green-Street"
              fontFamily="Arial-BoldMT, Arial"
              fontSize="9"
              fontWeight="bold"
              fill="#000000"
            >
              <tspan x="37" y="526">
                Green Street
              </tspan>
            </text>
            <text
              id="forestHillsLabel"
              fontFamily="Arial-BoldMT, Arial"
              fontSize="9"
              fontWeight="bold"
              fill="#000000"
            >
              <tspan x="17" y="554">
                Forest Hills
              </tspan>
            </text>
            <text
              id="stonyBrookLabel"
              fontFamily="Arial-BoldMT, Arial"
              fontSize="9"
              fontWeight="bold"
              fill="#000000"
            >
              <tspan x="58" y="498">
                Stony Brook
              </tspan>
            </text>
            <text
              id="jacksonSquareLabel"
              fontFamily="Arial-BoldMT, Arial"
              fontSize="9"
              fontWeight="bold"
              fill="#000000"
            >
              <tspan x="77" y="471">
                Jackson Square
              </tspan>
            </text>
            <text
              id="rugglesLabel"
              fontFamily="Arial-BoldMT, Arial"
              fontSize="9"
              fontWeight="bold"
              fill="#000000"
            >
              <tspan x="119" y="414">
                Ruggles
              </tspan>
            </text>

            <text
              id="oakGroveLabel"
              fontFamily="Arial-BoldMT, Arial"
              fontSize="9"
              fontWeight="bold"
              fill="#000000"
            >
              <tspan x="220" y="10">
                Oak Grove
              </tspan>
            </text>
            <text
              id="maldenCenterLabel"
              fontFamily="Arial-BoldMT, Arial"
              fontSize="9"
              fontWeight="bold"
              fill="#000000"
            >
              <tspan x="220" y="39">
                Malden Center
              </tspan>
            </text>
            <text
              id="wellingtonLabel"
              fontFamily="Arial-BoldMT, Arial"
              fontSize="9"
              fontWeight="bold"
              fill="#000000"
            >
              <tspan x="220" y="67">
                Wellington
              </tspan>
            </text>
            <text
              id="assemblyLabel"
              fontFamily="Arial-BoldMT, Arial"
              fontSize="9"
              fontWeight="bold"
              fill="#000000"
            >
              <tspan x="220" y="95">
                Assembly
              </tspan>
            </text>
            <text
              id="sullivanSquareLabel"
              fontFamily="Arial-BoldMT, Arial"
              fontSize="9"
              fontWeight="bold"
              fill="#000000"
            >
              <tspan x="220" y="124">
                Sullivan Square
              </tspan>
            </text>
            <text
              id="communityCollegeLabel"
              fontFamily="Arial-BoldMT, Arial"
              fontSize="9"
              fontWeight="bold"
              fill="#000000"
            >
              <tspan x="220" y="153">
                Community College
              </tspan>
            </text>
            <text
              id="northStationLabel"
              fontFamily="Arial-BoldMT, Arial"
              fontSize="9"
              fontWeight="bold"
              fill="#000000"
            >
              <tspan x="220" y="184">
                North Station
              </tspan>
            </text>
            <text
              id="haymarketLabel"
              fontFamily="Arial-BoldMT, Arial"
              fontSize="9"
              fontWeight="bold"
              fill="#000000"
            >
              <tspan x="220" y="215">
                Haymarket
              </tspan>
            </text>
            <text
              id="stateLabel"
              fontFamily="Arial-BoldMT, Arial"
              fontSize="9"
              fontWeight="bold"
              fill="#000000"
            >
              <tspan x="221" y="246">
                State
              </tspan>
            </text>
            <text
              id="downtownCrossingLabel"
              fontFamily="Arial-BoldMT, Arial"
              fontSize="9"
              fontWeight="bold"
              fill="#000000"
            >
              <tspan x="220" y="275">
                Downtown Crossing
              </tspan>
            </text>
            <text
              id="chinatownLabel"
              fontFamily="Arial-BoldMT, Arial"
              fontSize="9"
              fontWeight="bold"
              fill="#000000"
            >
              <tspan x="199" y="304">
                Chinatown
              </tspan>
            </text>
            <text
              id="tuftsMedicalCenterLabel"
              fontFamily="Arial-BoldMT, Arial"
              fontSize="9"
              fontWeight="bold"
              fill="#000000"
            >
              <tspan x="179" y="332">
                Tufts Medical Center
              </tspan>
            </text>
            <text
              id="backBayLabel"
              fontFamily="Arial-BoldMT, Arial"
              fontSize="9"
              fontWeight="bold"
              fill="#000000"
            >
              <tspan x="159" y="360">
                Back Bay
              </tspan>
            </text>
            <text
              id="massachusettsAvenueLabel"
              fontFamily="Arial-BoldMT, Arial"
              fontSize="9"
              fontWeight="bold"
              fill="#000000"
            >
              <tspan x="139" y="387">
                Massachusetts Avenue
              </tspan>
            </text>
            <text
              id="roxburyCrossingLabel"
              fontFamily="Arial-BoldMT, Arial"
              fontSize="9"
              fontWeight="bold"
              fill="#000000"
            >
              <tspan x="99" y="442">
                Roxbury Crossing
              </tspan>
            </text>
          </g>
        </g>
      </g>
    </svg>
  );
};

export default Map;
