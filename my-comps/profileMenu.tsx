"use client";
import {
  Cloud,
  CreditCard,
  Keyboard,
  LifeBuoy,
  LogOut,
  Mail,
  MessageSquare,
  Plus,
  PlusCircle,
  Settings,
  User,
  UserPlus,
  Users,
} from "lucide-react";
import { FaGithub } from "react-icons/fa6";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Image from "next/image";
import { signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useAuthStore } from "@/store/Auth";

interface avatarParams {
  name: string | undefined;
  background?: string | undefined;
  color?: string | undefined;
  size?: number | undefined;
  rounded?: boolean | undefined;
  length?: number | undefined;
  [key: string]: string | number | boolean | undefined;
}

function generateUrl(
  params: avatarParams = { name: "Anonymous" },
  baseUrl = "https://ui-avatars.com/api"
) {
  const urlObject = new URL(baseUrl);
  Object.keys(params).forEach((key) =>
    urlObject.searchParams.append(key, params[key]?.toString() || "")
  );
  return urlObject.toString();
}

export function ProfileMenu() {
    const router = useRouter();
    const {sessionInfo,clearSession} = useAuthStore()
    const session = sessionInfo;

  const avatarGeneratorParams = {
    name: session?.user?.name || "Anonymous",
    background: "random",
    color: "random",
    size: 100,
    rounded: true,
    length: 2,
  };

  const dropdownDetails = {
    heading: "My Account",
    options: [
      [
        {
          name: "Profile",
          icon: User,
          shortcut: "",
          hide:false,
          subMenu: false,
          subMenuItems: [],
          disabled: false,
          group: 1,
          clickEvent: (e: any | undefined | unknown) => {router.push("/profile")},
        },
        {
          name: "My Page",
          icon: User,
          shortcut: "",
          hide:false,
          subMenu: false,
          subMenuItems: [],
          disabled: false,
          group: 1,
          clickEvent: (e: any | undefined | unknown) => {router.push("/user/wpsadi")},
        },
        {
          name: "Edit Page",
          icon: User,
          shortcut: "",
          hide:false,
          subMenu: false,
          subMenuItems: [],
          disabled: false,
          group: 1,
          clickEvent: (e: any | undefined | unknown) => {router.push("/user/wpsadi")},
        },
        {
          name: "Billing",
          icon: CreditCard,
          shortcut: "",
          hide:false,
          subMenu: false,
          subMenuItems: [],
          disabled: false,
          group: 1,
          clickEvent: (e: any | undefined | unknown) => {},
        },
        {
          name: "Settings",
          icon: Settings,
          shortcut: "",
          hide:false,
          subMenu: false,
          subMenuItems: [],
          disabled: true,
          group: 1,
          clickEvent: (e: any | undefined | unknown) => {
            console.log("Settings clicked");
          },
        },
        {
          name: "Keyboard shortcuts",
          icon: Keyboard,
          shortcut: "⌘K",
          hide:false,
          subMenu: false,
          subMenuItems: [],
          disabled: false,
          group: 1,
          clickEvent: (e: any | undefined | unknown) => {},
        },
      ],
      [
        {
          name: "Team",
          icon: Users,
          shortcut: "",
          hide:false,
          subMenu: false,
          subMenuItems: [],
          disabled: true,
          group: 2,
          clickEvent: (e: any | undefined | unknown) => {},
        },
        {
          name: "Invite users",
          icon: UserPlus,
          shortcut: "",
          hide:false,
          disabled: true,
          clickEvent: (e: any | undefined | unknown) => {}, // If subMenu is true, then `clickEvent` won't be called!
          subMenu: true,
          subMenuItems: [
            [
              {
                name: "Email",
                icon: Mail,
                hide:false,
                clickEvent: (e: any | undefined | unknown) => {},
              },
              {
                name: "Message",
                icon: MessageSquare,
                hide:false,
                clickEvent: (e: any | undefined | unknown) => {},
              },
            ],
            [
              {
                name: "More...",
                icon: PlusCircle,
                hide:false,
                clickEvent: (e: any | undefined | unknown) => {},
              },
            ],
          ],
          group: 2,
        },
        {
          name: "New Team",
          icon: Plus,
          shortcut: "",
          hide:false,
          subMenu: false,
          subMenuItems: [],
          disabled: true,
          group: 2,
          clickEvent: (e: any | undefined | unknown) => {},
        },
      ],
      [
        {
          name: "GitHub",
          icon: FaGithub,
          shortcut: "",
          hide:false,
          subMenu: false,
          subMenuItems: [],
          disabled: true,
          group: 3,
          clickEvent: (e: any | undefined | unknown) => {},
        },
        {
          name: "Support",
          icon: LifeBuoy,
          shortcut: "",
          hide:false,
          subMenu: false,
          subMenuItems: [],
          disabled: true,
          group: 3,
          clickEvent: (e: any | undefined | unknown) => {},
        },
        {
          name: "API",
          icon: Cloud,
          shortcut: "",
          hide:false,
          subMenu: false,
          subMenuItems: [],
          disabled: true,
          group: 3,
          clickEvent: (e: any | undefined | unknown) => {},
        },
      ],
      [
        {
          name: "Log out",
          icon: LogOut,
          shortcut: "",
          hide:false,
          subMenu: false,
          subMenuItems: [],
          disabled: false,
          group: 4,
          clickEvent: (e: any | undefined | unknown) => { 
            
            clearSession();
            
          },
        },
      ],
    ],
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild className="border-none">
        <Button variant="outline" className="w-fit rounded-full border-none">
          <Image
            src={session?.user?.image || generateUrl(avatarGeneratorParams)}
            className="rounded-full"
            height={35}
            width={35}
            alt={`Avatar`}
          />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>{dropdownDetails.heading}</DropdownMenuLabel>

        {/* Menu options */}

        {dropdownDetails.options &&
          dropdownDetails.options.map((group, index) => (
            <div key={index}>
              <DropdownMenuSeparator />
              <DropdownMenuGroup>
                {group &&
                  group.map((options, index) => {
                    if (options["hide"]){
                        return null;
                    }

                    if (options.subMenu) {
                      return (
                        <div key={index}>
                          <DropdownMenuSub>
                            <DropdownMenuSubTrigger>
                              <options.icon className="mr-2 h-4 w-4" />
                              <span>{options.name}</span>
                            </DropdownMenuSubTrigger>
                            <DropdownMenuPortal>
                              <DropdownMenuSubContent>
                                {options.subMenuItems &&
                                  options.subMenuItems.map(
                                    (subMenuGroup, index) => (
                                      <div key={index}>
                                        <DropdownMenuSeparator />
                                        {subMenuGroup &&
                                          subMenuGroup.map(
                                            (subMenuItem, index) => {
                                                if (subMenuItem.hide){
                                                    return null
                                                }

                                                return (
                                                
                                                    <div key={index}>
                                                      <DropdownMenuItem
                                                        onClick={(e) =>
                                                          subMenuItem.clickEvent(e)
                                                        }
                                                      >
                                                        <subMenuItem.icon className="mr-2 h-4 w-4" />
                                                        <span>
                                                          {subMenuItem.name ||
                                                            "Errr..."}
                                                        </span>
                                                      </DropdownMenuItem>
                                                    </div>
                                                  )
                                            }
                                                
                                          )}
                                      </div>
                                    )
                                  )}
                              </DropdownMenuSubContent>
                            </DropdownMenuPortal>
                          </DropdownMenuSub>
                        </div>
                      );
                    }

                    return (
                      <div key={index}>
                        <DropdownMenuItem
                          disabled={options.disabled || false}
                          onClick={(e) => options.clickEvent(e)}
                        >
                          <options.icon className="mr-2 h-4 w-4" />
                          <span>{options.name}</span>
                          <DropdownMenuShortcut>
                            {options.shortcut}
                          </DropdownMenuShortcut>
                        </DropdownMenuItem>
                      </div>
                    );
                  })}
              </DropdownMenuGroup>
            </div>
          ))}
        <DropdownMenuSeparator />
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
