import Image from "next/image"

export const NavbarBalance = () => {
  return (
    <div className="w-full h-[120px] bg-slate-950 rounded-xl text-white flex flex-col justify-between items-center">
      <Image
        className="relative bottom-[35px]"
        src="/images/gift.png"
        width={80}
        height={80}
        alt="gift"
      />
      <div className="text-center flex flex-col relative bottom-[20px]">
        <small className="text-slate-400">My balance</small>
        <strong className="text-xl">
          € 14.34
        </strong>
      </div>
    </div>
  )
}