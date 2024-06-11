import { FetchMetadata } from "../../api/bo/server";
import { ClientWrapper } from "../../shared/store/wrapper/wrapper";
import { LoginForm } from "./components/Form/Form";
import { LoginLogo } from "./components/Logo/Logo";

export const revalidate = 1

export default async function Login() {
  const { metadata } = await FetchMetadata('login')

  return (
    <div>
      <div className="flex h-screen">
        <div className="w-2/5 h-full bg-white flex flex-col items-center justify-between p-10">
          <ClientWrapper metadata={metadata}>
            <LoginLogo />
            <LoginForm metadata={metadata} />
          </ClientWrapper>
          <p className="text-center text-sm text-slate-400">
            {}
          </p>
        </div>
        <div className="w-3/5 h-full">
          <video
            src="/images/login.mp4"
            className="w-full h-full object-cover object-center"
            autoPlay
            muted
            loop
          />
        </div>
      </div>
    </div>
  )
}