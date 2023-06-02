function ProfileIcon() {
    return (
        <div className="flex flex-col items-center">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width={9}
                height={9}
                fill="none"
            >
                <path
                    fill="#000"
                    d="M4.398 8.467A4.219 4.219 0 0 0 8.63 4.234 4.219 4.219 0 0 0 4.398 0 4.22 4.22 0 0 0 .164 4.234a4.22 4.22 0 0 0 4.234 4.233Z"
                    opacity={0.4}
                />
            </svg>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width={13}
                height={6}
                fill="none"
            >
                <path
                    fill="#000"
                    d="M6.398.54C2.948.54 0 1.084 0 3.26S2.929 6 6.398 6c3.45 0 6.397-.544 6.397-2.72 0-2.177-2.928-2.74-6.397-2.74Z"
                />
            </svg>
        </div>
    )
}

export default ProfileIcon