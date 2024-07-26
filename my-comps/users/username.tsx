import { CalendarDays } from "lucide-react"
 
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card"
import { Istats } from "./creds"

const UsernameHover = ({username,description,stats,avatar

}:{
    username?:string
    description?:string
    stats?:Array<Istats>
    avatar:string
})=>{
    return (
        <>
            <HoverCard>
                <HoverCardTrigger asChild>
                    <Button variant="link" className="text-2xl lg:text-4xl font-semibold hover:no-underline">
                        {username || "- Username -"}
                    </Button>
                </HoverCardTrigger>
                <HoverCardContent className="w-80">
                    <div className="flex justify-between space-x-4 ">
                        <Avatar>
                            <AvatarImage src={avatar}></AvatarImage>
                            <AvatarFallback>VC</AvatarFallback>
                        </Avatar>
                        <div className="space-y-1">
                            <h4 className="text-sm font-semibold">{username || "- Username -"}</h4>
                            <p className="text-sm">
                                {description || "No description available"}
                            </p>
                            <div className="flex items-start justify-start pt-2 ">
                                <table className="w-full">
                                    <thead>
                                        <tr>
                                            <th className="px-4 py-2">Stat</th>
                                            <th className="px-4 py-2 ">Value</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {stats?.map((stat, index) => (
                                            <tr key={index}>
                                                <td className="px-4 py-2 min-w-[120px]">{stat.name}</td>
                                                <td className="px-4 py-2 font-bold font-mono">{stat.value}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </HoverCardContent>
            </HoverCard>
        </>
    );
}

export default UsernameHover