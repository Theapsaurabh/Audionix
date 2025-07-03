import {Card, CardContent } from "@/components/ui/card"
import { Loader } from "lucide-react"


const AuthCallback = () => {
  return (
    <div className="h-screen w-full bg-black flex item-center justify-center">
      <Card className=" w-[90%]  max-w-md bg-zinc-900 border-zinc-800">

        <CardContent className="flex flex-col items-center  pt-6 gap-4 ">
          <Loader className="size-6 text-emerald-500 animate-spin"/>
          <h3 className="text-zinc-400  text-xl font-bold">Logging You in</h3>
          <p className="text-zinc-400 text-sm">Redirecting.....</p>

        </CardContent>
      </Card>
     
    </div>
  )
}

export default AuthCallback
