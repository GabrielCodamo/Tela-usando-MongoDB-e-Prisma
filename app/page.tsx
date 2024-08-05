"use client"

import TelaSemAutenticacao from "@/components/tela-auth"
import TelaAutenticada from "@/components/tela-with-auth"

import { useSession } from "next-auth/react"

export default function HomePage({children}:{children: React.ReactNode}) {

  const { data: session } = useSession()

  if (!session) {
    return(
    <>
       <TelaSemAutenticacao>
        {children}
      </TelaSemAutenticacao >
    </>
    )

  } else {
    return <TelaAutenticada />
  }
}
