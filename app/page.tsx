import { ThreeDCardDemo } from "@/aceternity/3dcard";
import DefaultCommonLayout from "@/my-comps/defaultCommonLayout";
export default function Home() {
  const threeDCardDetails = {
    bigHeading: "WELCOME",
    description:
      "A website to fund your projects by allowing them to send donations to you",
    imageURL:
      "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    buttons: {
      buttonLeft: {
        text: "Login",
        link: "/login",
      },
      buttonRight: {
        text: "Sign Up",
        link: "/signup",
      },
    },
  };
  const HomeDetails = {
    title: "OneChaiPlease",
  };
  return (
    <div>
      <DefaultCommonLayout>
        <div className="flex justify-center items-center min-h-[80vh]">
          <div className="text-center">
          <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
            Make some help come to you
          </h1>
          <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 lg:px-48 dark:text-gray-200">
            Here at {HomeDetails.title} we focus on strengthing the bond
            betweeen a creator and his audience.
          </p>
          <ThreeDCardDemo CardDetails={threeDCardDetails} />
          </div>
         
        </div>
      </DefaultCommonLayout>
    </div>
  );
}
