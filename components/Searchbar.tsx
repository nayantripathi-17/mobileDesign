import { Input } from '@mantine/core'
import React from 'react'
import SearchIcon from './icons/SearchIcon'

function Searchbar() {
    return (
        <div className="mx-6 my-5 flex flex-grow justify-between items-center">
            <Input
                className="w-[80%]"
                classNames={{ input: "bg-[#F3F4F5] text-[#AAAAAA] h-12 w-full pl-16 border-0", icon: "ml-6" }}
                icon={<SearchIcon />}
                placeholder="Search..."
                radius="xl"
            />
            <div className="bg-black rounded-full w-14 h-14 flex flex-col items-center justify-center cursor-pointer">
                <div className="items-center">
                    <div className="flex justify-between w-full flex-grow items-center my-0">
                        <div className="w-2 h-2 mr-1 rounded-full bg-white border-0"></div>
                        <hr className="h-1 bg-white my-1 border-0 rounded opacity-50 w-3 text-white inline-block" />
                    </div>
                    <div className="flex justify-between items-center">
                        <hr className="h-1 bg-white border-0 my-1 rounded opacity-50 w-3 text-white inline-block" />
                        <div className="w-2 h-2 rounded-full ml-1 bg-white border-0"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Searchbar