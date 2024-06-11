import Image from "next/image"

export const NavbarLogo = () => {
  return (
    <div className="flex items-center gap-2">
      <Image
        width={30}
        height={30}
        src="/images/deliverman.png"
        alt="logo"
      />
      <strong>
        Deliver
        <span className="text-rose-500">Man</span>
      </strong>
    </div>
  )
}