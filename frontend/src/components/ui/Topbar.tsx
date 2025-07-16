import { SignedIn, SignedOut, SignOutButton, UserButton } from "@clerk/clerk-react";
import {  LayoutDashboardIcon } from "lucide-react";
import { Link } from "react-router-dom";
import SignInOAuthButtons from "./SignInOAuthButtons";
import { useAuthStore } from "@/stores/useAuthStore";
const Topbar = () => {
  const {isAdmin} = useAuthStore()
   console.log({isAdmin})
  return (
    <div
      className="flex items-center justify-between p-4  sticky top-0 bg-zinc-900/75
    backdrop-blur-md z-10"
    >
      <div className="flex gap-2 items-center">
        <img src="/Audionix.png" alt="Audionix logo"  className="size-8 "/>
        Audionix 

      </div>
      <div className="flex gap-4 items-center">
       {isAdmin && (
        <Link to={"/admin"} >
            <LayoutDashboardIcon className="size-4 mr-2 "></LayoutDashboardIcon>
            Admin Dashboard
            </Link>
       )} 
       <SignedIn>
        <SignOutButton/>
       </SignedIn>
       



       <SignedOut>
        <SignInOAuthButtons />
       </SignedOut>
       <UserButton></UserButton>
      </div>
    </div>
  );
};

export default Topbar;
