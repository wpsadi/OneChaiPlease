import React from 'react'

function DefaultCommonLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div>
        <section className=" container ">
          <div className="py-8 px-4  max-w-screen-xl  z-[1] lg:py-16 relative ">
                {children}
          </div>
          <div className="bg-gradient-to-b from-blue-50 to-transparent dark:from-gray-900 w-full h-full absolute top-0 left-0 z-0"></div>
        </section>
      </div>
    </>
  )
}

export default DefaultCommonLayout