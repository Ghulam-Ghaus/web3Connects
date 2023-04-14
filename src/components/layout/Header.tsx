import Image from "next/image";
import React from "react";
import Wrapper from "../shared/Wrapper";

const Header = () => {
  return (
    <Wrapper>
      <header className="flex justify-center max-w-screen-xl mx-auto bg-white py-14  items-center">
        <div>
          <h1 className="text-5xl font-bold sm:text-6xl">
            Account Abstraction Task
          </h1>
        </div>
      </header>
    </Wrapper>
  );
};

export default Header;
