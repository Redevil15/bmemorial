import { Button, Navbar } from "flowbite-react";
import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "../redux/theme/themeSlice";
import { RootState } from "../redux/store";
import { FaMoon, FaSun } from "react-icons/fa";

interface HeaderComponentProps {
  className?: string
}

export default function HeaderComponent({
  className
}: HeaderComponentProps) {
  const dispatch = useDispatch();
  const currentTheme = useSelector((state: RootState) => state.theme.theme);

  console.log(currentTheme)

  return (
    <Navbar className="border-b-2">
      <div
        /* className='self-center whitespace-nowrap text-sm sm:text-xl font-semibold dark:text-white' */
        className={className}
      >

        <span
          className="px-2 py-1 bg-gradient-to-r from-red-400 via-orange-400 to-yellow-400 rounded-lg text-white"
        >
          BMemorial
        </span>
      </div>
      <div className="flex gap-2">
        <Button
          className="w-12 h-10 inline"
          color='gray'
          pill
          onClick={() => dispatch(toggleTheme())}
        >
          {currentTheme === "light" ? <FaMoon /> : <FaSun />}
        </Button>
      </div>
    </Navbar>
  )
}
