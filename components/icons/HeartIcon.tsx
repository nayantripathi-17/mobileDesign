import React from 'react'

function HeartIcon({ line: { width: lw, height: lh }, heart: { width: hw, height: hh }, fill, scale }: { line: { width: number, height: number }, heart: { width: number, height: number }, fill: string, scale?: number }) {
    return (
        <div className={`relative scale-${scale ? scale : "100"}`}>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width={lw}
                height={lh}
                fill="none"
                className="absolute top-[1.5px] right-[1.5px]"
            >
                <path
                    stroke={fill ? fill : "#fff"}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M1 .645c.476.154.812.578.853 1.077"
                />
            </svg>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width={hw}
                height={hh}
                fill="none"
                className=""
            >
                <path
                    stroke={fill ? fill : "#fff"}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M1.165 4.822c-.477-1.49.08-3.191 1.644-3.695a2.67 2.67 0 0 1 2.414.406c.646-.5 1.587-.67 2.409-.406 1.563.504 2.124 2.206 1.647 3.695C8.537 7.182 5.223 9 5.223 9s-3.29-1.79-4.058-4.178Z"
                    clipRule="evenodd"
                />
            </svg>
        </div>
    )
}

export default HeartIcon