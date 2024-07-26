"use client"
import { Button } from '@/components/ui/button';
import Link from 'next/link';


function NavbarAuthButtons(){
    return (<>
           <Link href="/login" prefetch={true}><Button>Login</Button></Link>
           <Link href="/signup" prefetch={true}><Button>Sign Up</Button></Link>
    </>
     
        
    )
}

export default NavbarAuthButtons