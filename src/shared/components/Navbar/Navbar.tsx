import { NavbarLogo } from "./Logo/Logo"
import { NavbarBalance } from "./Balance/Balance"
import { NavbarItem } from "./Items/Items"
import { components } from "../../../api/bo-schema"

interface NavbarProps {
  links?: components["schemas"]["NavigationListResponseDataItem"][]
}

export const Navbar = ({ links }: NavbarProps) => {
  return (
    <nav className="p-5 w-[200px] h-screen bg-white flex flex-col items-center justify-between">
      <div className="flex flex-col w-full items-center gap-5">
        <NavbarLogo />
        <div className="flex flex-col gap-3 w-full">
          {links?.map((item, index) => (
            <NavbarItem active={index === 0} href={item.attributes?.url} key={item.id}>
              <i className={`fa fa-${item.attributes?.icon}`}></i>
              {item.attributes?.label}
            </NavbarItem>
          ))}
        </div>
      </div>
      <NavbarBalance />
    </nav>
  )
}