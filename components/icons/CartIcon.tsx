import React from 'react'

function CartIcon() {
    return (
        <div className="flex flex-col items-center">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width={17}
                height={13}
                fill="none"
            >
                <path
                    fill="#000"
                    fillRule="evenodd"
                    d="M14.85 3.143c.499 0 .825.171 1.152.547.326.375.384.914.31 1.403l-.775 5.355a2.083 2.083 0 0 1-2.066 1.788H4.564a2.08 2.08 0 0 1-2.073-1.91L1.74 1.428.507 1.215A.615.615 0 0 1 .009.513a.624.624 0 0 1 .71-.506L2.666.3c.278.05.482.277.506.555l.155 1.829a.498.498 0 0 0 .498.458h11.026ZM9.904 7.387h2.262a.611.611 0 0 0 .612-.612.606.606 0 0 0-.612-.613H9.903a.606.606 0 0 0-.612.613c0 .334.27.612.612.612Z"
                    clipRule="evenodd"
                />
            </svg>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width={12}
                height={3}
                fill="none"
            >
                <path
                    fill="#000"
                    fillRule="evenodd"
                    d="M.193 1.767c0-.686.555-1.241 1.24-1.241a1.237 1.237 0 1 1-1.24 1.24Zm9.184 0c0-.686.555-1.241 1.241-1.241a1.237 1.237 0 1 1-1.24 1.24Z"
                    clipRule="evenodd"
                    opacity={0.4}
                />
            </svg>
        </div>
    )
}

export default CartIcon