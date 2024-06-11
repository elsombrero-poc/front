'use client'
import { useState } from "react"
import { Toggler } from "../../../../shared/Toggler/Toggler"
import { Button } from "../../../../ui/components/Button/Button"
import { Input } from "../../../../ui/components/Input/Input"
import { Separator } from "../../../../ui/components/Separator/Separator"
import { OAuth2Buttons } from "./OAuth2/OAuth2"
import { useBackOffice } from "../../../../api/bo/client"
import { RootState } from "../../../../shared/store"
import { useSelector } from "react-redux"
import { Metadata } from "../../../../api/types"
import { FormText } from "./Text/Text"

export const LoginForm = ({}: {metadata?: Metadata}) => {
  const [isSignUp, setIsSignUp] = useState<boolean>(false)

  const metadata = useSelector((state: RootState) => state.metadata.value)
  const { wordings, loading } = useBackOffice(metadata)

  if(loading) return (
    <div>
      Skeleton
    </div>
  )

  return (
    <div className="flex flex-col text-center gap-8">
      <FormText metadata={metadata} />
      <div className="w-[350px]">
        <Toggler
          theme="warning"
          titles={[
            wordings('form.button.sign-in', 'Sign'), 
            wordings('form.button.sign-up', 'Sign'),
          ]}
          active={isSignUp}
          onClick={() => setIsSignUp(!isSignUp)}
        />
      </div>
      <form className="flex flex-col gap-3 w-[350px]" action="/services/login" method="POST">
        <Input
          name="email"
          required
          left={<i className="fa-solid fa-envelope text-slate-600"></i>}
          boxClass="w-full"
          inputSize="lg"
          radius="2xl"
          placeholder={wordings('form.email.placeholder', 'Email')}
        />
        <Input
          type="password"
          name="password"
          required
          left={<i className="fa-solid fa-lock text-slate-600"></i>}
          boxClass="w-full"
          inputSize="lg"
          radius="2xl"
          placeholder={wordings('form.password.placeholder', 'Password')}
        />
        <Button variant="primary" theme="warning" size="xl" radius="2xl">
          {wordings('form.button.continue', 'Continue')}
        </Button>
      </form>
      <Separator>
      {wordings('form.separator.text', 'Separator text')}
      </Separator>
      <OAuth2Buttons />
  </div>
  )
}