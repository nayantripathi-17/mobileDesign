import { Button, Group } from "@mantine/core"
import { Dispatch, SetStateAction } from "react"

function SizeSelector({ sizes, size, setSize }: { sizes: string[], size: string, setSize: Dispatch<SetStateAction<string>> }) {
    return (
        <div className="mt-6 mx-0">
            <h1 className="font-semibold text-lg">
                Size
            </h1>
            <div className="flex flex-grow justify-start space-x-4 mt-4 pt-0">
                {sizes.map((item) => {
                    return (
                        <Button
                            key={item}
                            className={`${size === item ? "bg-black border border-black text-white" : "bg-white border border-[#DDDDDD] text-[#888888]"} rounded-full w-10 h-10 text-sm p-0 m-0 font-semibold uppercase`}
                            onClick={() => setSize(item)}
                        >
                            {item}
                        </Button>
                    )
                })
                }
            </div>
        </div>
    )
}

export default SizeSelector