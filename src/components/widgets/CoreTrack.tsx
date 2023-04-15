import React from "react";
import Wrapper from "../shared/Wrapper";
import Link from "next/link";

const CoreTrack = () => {
  const header = "Core Courses \n (Common in All Specializations):";

  const CoreTrackData = [
    {
      header: "Step01: Account Creation and Transaction",
      title: "Stackup quick start",
      ERC4337_Account: "0x9F9205077A12a138f6f7Cf4e40a41268821CaFDa",
      description: "Transction Histories",
      trx: "https://goerli.etherscan.io/tx/0x798946bf0fb609f3ae6417b3efe24de873af22ba4b42965396662e15d84abd70",
      number: 1,
    },
    {
      header: "Step02: Mint NFT",
      title: "Hello World Smart Contract Node.js App",
      ERC4337_Account: "0x5AA1F2e74b276fe8a13b1Fc879B6b3F5a1150eAd",
      description: "Transction Histories",
      trx: "https://mumbai.polygonscan.com/address/0x5AA1F2e74b276fe8a13b1Fc879B6b3F5a1150eAd#tokentxnsErc721",
      number: 2,
    },
  ];

  return (
    <section className="mt-28 lg:mt-16">
      <Wrapper>
        <div className="my-20 gap-x-8 gap-y-6 flex-col">
          {CoreTrackData.map((item, i) => (
            // eslint-disable-next-line react/jsx-key
            <div className="border rounded-md relative my-5 px-8 py-16 flex flex-col flex-1 justify-center">
              <h4 className="font-bold text-3xl">{item.header}</h4>
              <p className="mt-2 text-slate-600">{item.title}</p>
              <p className="mt-2 text-slate-600 overflow-hidden">
                Account Address -- {item.ERC4337_Account}
              </p>
              <p className="mt-2  text-slate-600 self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                {item.description}
              </p>
              <Link
                className="overflow-hidden text-blue-500 rounded px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-primary transition duration-150 ease-in-out hover:bg-neutral-100 hover:text-primary-600 focus:text-primary-600 focus:outline-none focus:ring-0 active:text-primary-700 dark:hover:bg-neutral-700"
                href={item.trx}
              >
                {item.trx}
              </Link>
              <span className="absolute -top-10 right-10 text-[170px] font-bold -z-10 text-gray-200">
                {item.number}
              </span>
            </div>
          ))}
        </div>
      </Wrapper>
    </section>
  );
};

export default CoreTrack;
