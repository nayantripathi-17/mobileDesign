import { Avatar } from "@mantine/core"

function NavBar() {
  return (
    <div className="mt-12 mx-6 flex flex-grow items-center justify-between">
      <div className="bg-black rounded-full w-10 h-10 flex flex-col items-center justify-center cursor-pointer">
        <div>
          <hr className="h-[1.75px] bg-white rounded border-0 my-1 w-[0.625rem] ml-auto mr-0" />
          <hr className="h-[1.75px] bg-white rounded border-0 my-1 w-[1.25rem]" />
          <hr className="h-[1.75px] bg-white rounded border-0 my-1 w-[0.625rem] mr-auto ml-0" />
        </div>
      </div>
      <Avatar src="/Rectangle 97.png" className="w-14 h-14 bg-[#DDDDDD]"
        classNames={{ image: "dropShadow" }}
        radius="xl"
      />
    </div>
  )
}

export default NavBar