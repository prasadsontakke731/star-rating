import * as React from "react";
const Star = ({ isFilled }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlSpace="preserve"
        width={122.88}
        height={116.864}
        className={`star ${isFilled ? "star_filled" : ""}`}
    >
        <path
            fillRule="evenodd"
            d="m61.44 0 16.911 41.326 44.529 3.312-34.077 28.853 10.609 43.373L61.44 93.371l-37.972 23.493 10.61-43.373L0 44.638l44.529-3.312L61.44 0z"
            clipRule="evenodd"
        />
    </svg>
);
export default Star;