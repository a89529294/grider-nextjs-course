"use client";

import * as actions from "@/actions";
import {
  Avatar,
  Button,
  NavbarItem,
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@nextui-org/react";
import { useSession } from "next-auth/react";

export default function HeaderAuth() {
  const session = useSession();
  session.status;

  if (session.status === "loading") return <div>loading...</div>;
  if (session.status === "authenticated")
    return (
      <Popover placement="left">
        <PopoverTrigger className="cursor-pointer">
          <Avatar src={session.data.user?.image ?? undefined} />
        </PopoverTrigger>
        <PopoverContent>
          <form className="p-4" action={actions.signOut}>
            <Button type="submit" color="secondary" variant="bordered">
              Sign Out
            </Button>
          </form>
        </PopoverContent>
      </Popover>
    );

  return (
    <>
      <NavbarItem>
        <form action={actions.signIn}>
          <Button type="submit" color="secondary" variant="bordered">
            Sign In
          </Button>
        </form>
      </NavbarItem>
      <NavbarItem>
        <form action={actions.signIn}>
          <Button type="submit" color="primary" variant="flat">
            Sign Up
          </Button>
        </form>
      </NavbarItem>
    </>
  );
}
