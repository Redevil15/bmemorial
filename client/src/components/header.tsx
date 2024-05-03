import { Button, Navbar } from "flowbite-react";

export default function HeaderComponent() {
  return (
    <Navbar className="border-b-2">
      <div
        className='self-center whitespace-nowrap text-sm sm:text-xl font-semibold dark:text-white'
      >

        <span
          className="px-2 py-1 bg-gradient-to-r from-red-400 via-orange-400 to-yellow-400 rounded-lg text-white"
        >
          BMemorial
        </span>
      </div>
      <div className="flex gap-2">
        <Button
          className="w-12 h-10 hidden sm:inline"
        >

        </Button>
      </div>
    </Navbar>
  )
}
