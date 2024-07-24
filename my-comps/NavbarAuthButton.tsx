"use client"
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';
function NavbarAuthButtons(){
    const router = useRouter()
    return (<>
           <Button onClick={()=>router.push("/login")}>Login</Button>
           <Button onClick={()=>router.push("/signup")}>Sign Up</Button>
    </>
     
        
    )
}

export default NavbarAuthButtons