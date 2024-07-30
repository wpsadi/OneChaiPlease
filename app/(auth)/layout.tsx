import DefaultCommonLayout from "@/my-comps/defaultCommonLayout"



export default function Layout({ children }:{children:React.ReactNode}) {
    return (
      <>

<div>
     <DefaultCommonLayout>
     <div className="flex justify-center items-center min-h-[80vh]">
                {children }
            </div>
     </DefaultCommonLayout>
      </div>
      </>
    )
  }