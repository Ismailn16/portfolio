import * as React from "react";

const SvgComponent = (props) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="48" // Set width to match text-5xl
        height="48" // Set height to match text-5xl
        viewBox="0 0 64 64" // Ensure viewBox is set correctly to maintain aspect ratio
        {...props}
    >
        <path
            d="m437.367 100.62-33.046 370.199L255.778 512l-148.134-41.123L74.633 100.62z"
            style={{
                fill: "#264de4",
            }}
            transform="matrix(.15557 0 0 .15557 -7.811 -15.654)"
        />
        <path
            d="m256 480.523 120.03-33.277 28.24-316.352H256z"
            style={{
                fill: "#2965f1",
            }}
            transform="matrix(.15557 0 0 .15557 -7.811 -15.654)"
        />
        <path
            d="M256 268.217H150.31l4.07 45.41H256zM256 176.305H142.132l4.128 45.411H256zM156.409 336.333l6.362 71.301 93.02 25.823.209-.058v-47.246l-.199.053-50.574-13.656-3.233-36.217h-24.575z"
            style={{
                fill: "#ebebeb",
            }}
            transform="matrix(.15557 0 0 .15557 -7.811 -15.654)"
        />
        <path
            d="m311.761 313.627-5.271 58.894-50.647 13.67v47.244l93.094-25.801.683-7.672 10.671-119.551 1.108-12.194 8.198-91.912H255.843v45.411h63.988l-4.132 46.501h-59.856v45.41z"
            style={{
                fill: "#fff",
            }}
            transform="matrix(.15557 0 0 .15557 -7.811 -15.654)"
        />
    </svg>
);

export default SvgComponent;
