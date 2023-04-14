import React from "react";
import Wrapper from "../shared/Wrapper";
import Image from "next/image";
import HeroPoster from "../../assets/images/Hero Poster.png";
import Button from "../shared/Button";

const Hero = () => {
  return (
    <section className="py-5 ">
      <Wrapper>
        <div className="flex items-center flex-col md:flex-row">
          {/* Left side */}
          <div className="flex-1 relative">
            <h1 className="text-3xl font-bold sm:text-4xl ">
              Concepts. Transactions. Mint NFTs. SocialWallets
            </h1>
            <p className="mt-6 text-lg text-slate-600">
              Create Wallet with Social Follow this Create Wallets with Social
              tutorial and Create a Next.js project.
            </p>

            <div className="mt-6">
              <Button />
            </div>
            <span className="absolute -top-6 right-14 text-[170px] font-bold -z-10 text-gray-100">
              3
            </span>
          </div>

          {/* Right side */}
          <div className="flex-1">
            <Image src={HeroPoster} alt="poster" />
          </div>
        </div>
      </Wrapper>
    </section>
  );
};

export default Hero;
