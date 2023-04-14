"use client";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import React, { FC } from "react";
import { useAccount } from "wagmi";

const Button = () => {
  const { address } = useAccount();

  return (
    <div>
      <ConnectButton
        label="Let's Connect Web3"
        accountStatus="full"
        chainStatus="icon"
      />

      {address && <p className="py-7 ">Your Account is :: {address}</p>}
    </div>
  );
};

export default Button;
