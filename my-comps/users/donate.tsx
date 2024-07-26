import * as React from "react"
 
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
function DonateUser({UserDetails}:{
    UserDetails:any
}) {
    
return (
    <Card className="w-[350px]">
        <CardHeader>
            <CardTitle>Donate Now!</CardTitle>
            <CardDescription>
                Send your support to {UserDetails.name || "Unknown"} (
                <span className="font-mono font-bold text-lg">
                    {UserDetails.username}
                </span>
                )
            </CardDescription>
        </CardHeader>
        <form>
        <CardContent>
           
                <div className="grid w-full items-center gap-4">
                    <div className="flex flex-col space-y-1.5">
                        <Label htmlFor="name">Name</Label>
                        <Input id="name" placeholder="Your name" required />
                    </div>
                    <div className="flex flex-col space-y-1.5">
                        <Label htmlFor="amount">Amount</Label>
                        <Input
                            id="amount"
                            required
                            placeholder="$10.00"
                            pattern="^\$?[0-9]+(\.[0-9]{2})?$"
                        />
                    </div>
                    <div className="flex flex-col space-y-1.5">
                        <Label htmlFor="message">Message</Label>
                        <Input
                            id="message"
                            required
                            defaultValue={"Keep working! Love your work"}
                        />
                    </div>
                </div>
           
        </CardContent>
        <CardFooter className="flex justify-between">
            <div></div>
            {/* <Button variant="outline">Cancel</Button> */}
            <Button>Send</Button>
        </CardFooter>
        </form>
    </Card>
);
}

export default DonateUser