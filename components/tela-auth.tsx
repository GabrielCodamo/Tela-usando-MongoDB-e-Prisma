import Link from "next/link"
import { Button } from "@/components/ui/button"
import TelaHomeLayoutAutenticacao from "@/components/layouttela"


export default function TelaSemAutenticação({ children }: {
    children: React.ReactNode
}) {
    return (
        <TelaHomeLayoutAutenticacao>
            <Link href={"/login"} passHref>
                <Button>
                    Entrar
                </Button>
            </Link>
        </TelaHomeLayoutAutenticacao>
    )
}

