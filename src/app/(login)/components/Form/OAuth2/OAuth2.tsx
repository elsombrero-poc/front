import Image from "next/image"
import { Badge } from "../../../../../ui/components/Badge/Badge"

export const OAuth2Buttons = () => {
  return (
    <div className="flex gap-5 justify-center items-center">
      <Badge radius="circular" theme="white" className="border" size="2xl">
        <Image 
          src="/images/google.png"
          width={0}
          height={0}
          sizes="100vw"
          alt="google"
          className="w-[30px] h-[30px]"
        />
      </Badge>
      <Badge radius="circular" size="2xl">
        <i className="fa-brands fa-apple"></i>
      </Badge>
      <Badge radius="circular" size="2xl" className="bg-blue-700">
        <i className="fa-brands fa-facebook-f"></i>
      </Badge>
    </div>
  )
}