"use client";
import Logo from "@/app/_components/Logo";
import { db } from "@/config/firebaseConfig";
import {
  OrganizationSwitcher,
  useAuth,
  UserButton,
  useUser,
} from "@clerk/nextjs";
import { doc, setDoc } from "firebase/firestore";
import React, { useEffect } from "react";

const Header = () => {
  const { orgId } = useAuth();
  const { user } = useUser();

  useEffect(() => {
    user && saveUserDate();
  }, [user]);

  const saveUserDate = async () => {
    const docId = user?.primaryEmailAddress?.emailAddress;
    try {
      await setDoc(doc(db, "LoopUsers", docId), {
        name: user?.fullName,
        email: user?.primaryEmailAddress?.emailAddress,
        avatar: user?.imageUrl,
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex justify-between items-center p-3 shadow-md">
      <Logo />
      <OrganizationSwitcher
        afterLeaveOrganizationUrl={"/dashboard"}
        afterCreateOrganizationUrl={"/dashboard"}
      />
      <UserButton />
    </div>
  );
};

export default Header;
