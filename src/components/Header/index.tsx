"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import ThemeToggler from "./ThemeToggler";
import menuData from "./menuData";
import {
  Address,
  Avatar,
  Name,
  Identity,
  EthBalance,
} from '@coinbase/onchainkit/identity';
import { color } from '@coinbase/onchainkit/theme';
import {
  ConnectWallet,
  Wallet,
  WalletDropdown,
  WalletDropdownBasename, 
  WalletDropdownDisconnect,
} from '@coinbase/onchainkit/wallet';
import '@coinbase/onchainkit/styles.css';
import { base } from 'viem/chains';

const Header = () => {
  // Navbar toggle
  const [navbarOpen, setNavbarOpen] = useState(false);
  const navbarToggleHandler = () => {
    setNavbarOpen(!navbarOpen);
  };

  // Sticky Navbar
  const usePathName = usePathname();
  const [sticky, setSticky] = useState(false);
  const handleStickyNavbar = () => {
    if (window.scrollY >= 80) {
      setSticky(true);
    } else {
      setSticky(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleStickyNavbar);
    return () => {
      window.removeEventListener("scroll", handleStickyNavbar);
    };
  }, []);

  // submenu handler
  const [openIndex, setOpenIndex] = useState(-1);
  const handleSubmenu = (index) => {
    if (openIndex === index) {
      setOpenIndex(-1);
    } else {
      setOpenIndex(index);
    }
  };

  // Example address - replace with actual connected wallet address in production
  const address = '0x7D6109a51781FB8dFCae01F5Cd5C70dF412a9CEc';

  return (
    <>
      <header
        className={`header top-0 left-0 z-40 flex w-full items-center bg-transparent ${
          sticky
            ? "!fixed !z-[9999] !bg-white !bg-opacity-80 shadow-sticky backdrop-blur-sm !transition dark:!bg-primary dark:!bg-opacity-20"
            : "absolute"
        }`}
      >
        <div className="container">
          <div className="relative -mx-4 flex items-center justify-between">
            <div className="w-60 max-w-full px-4 xl:mr-12">
              <Link
                href="/"
                className={`header-logo block w-full ${
                  sticky ? "py-5 lg:py-2" : "py-8"
                } `}
              >
                <span className="text-xl font-bold text-primary dark:text-white">EduPay</span>
              </Link>
            </div>
            <div className="flex w-full items-center justify-between px-4">
              <div className="hidden lg:block">
                <nav
                  id="navbarCollapse"
                  className="navbar absolute right-0 z-30 w-[250px] rounded border-[.5px] border-body-color/50 bg-white px-6 py-4 duration-300 dark:border-body-color/20 dark:bg-dark lg:visible lg:static lg:w-auto lg:border-none lg:!bg-transparent lg:p-0 lg:opacity-100"
                >
                  <ul className="block lg:flex lg:space-x-12">
                    {menuData.map((menuItem, index) => (
                      <li key={menuItem.id} className="group relative">
                        {menuItem.path ? (
                          <Link
                            href={menuItem.path}
                            className="flex py-2 text-base text-dark group-hover:opacity-70 dark:text-white lg:mr-0 lg:inline-flex lg:px-0 lg:py-6"
                          >
                            {menuItem.title}
                          </Link>
                        ) : (
                          <>
                            <a
                              onClick={() => handleSubmenu(index)}
                              className="flex cursor-pointer items-center justify-between py-2 text-base text-dark group-hover:opacity-70 dark:text-white lg:mr-0 lg:inline-flex lg:px-0 lg:py-6"
                            >
                              {menuItem.title}
                              <span className="pl-3">
                                <svg width="15" height="14" viewBox="0 0 15 14">
                                  <path
                                    d="M7.81602 9.97495C7.68477 9.97495 7.57539 9.9312 7.46602 9.8437L2.43477 4.89995C2.23789 4.70308 2.23789 4.39683 2.43477 4.19995C2.63164 4.00308 2.93789 4.00308 3.13477 4.19995L7.81602 8.77183L12.4973 4.1562C12.6941 3.95933 13.0004 3.95933 13.1973 4.1562C13.3941 4.35308 13.3941 4.65933 13.1973 4.8562L8.16601 9.79995C8.05664 9.90933 7.94727 9.97495 7.81602 9.97495Z"
                                    fill="currentColor"
                                  />
                                </svg>
                              </span>
                            </a>
                            <div
                              className={`submenu relative left-0 top-full rounded-md bg-white transition-[top] duration-300 group-hover:opacity-100 dark:bg-dark lg:invisible lg:absolute lg:top-[110%] lg:block lg:w-[250px] lg:p-4 lg:opacity-0 lg:shadow-lg lg:group-hover:visible lg:group-hover:top-full ${
                                openIndex === index ? "block" : "hidden"
                              }`}
                            >
                              {menuItem.submenu?.map((submenuItem) => (
                                <Link
                                  href={submenuItem.path}
                                  key={submenuItem.id}
                                  className="block rounded py-2.5 text-sm text-dark hover:opacity-70 dark:text-white lg:px-3"
                                >
                                  {submenuItem.title}
                                </Link>
                              ))}
                            </div>
                          </>
                        )}
                      </li>
                    ))}
                  </ul>
                </nav>
              </div>
              <div className="flex items-center justify-end pr-16 lg:pr-0">
                <div className="flex justify-end mr-4">
                  <Wallet>
                    <ConnectWallet>
                      <Avatar address={address} chain={base} />
                      <Name address={address} chain={base} />
                    </ConnectWallet>
                    <WalletDropdown>
                      <Identity className="px-4 pt-3 pb-2" hasCopyAddressOnClick>
                        <Avatar address={address} chain={base} />
                        <Name address={address} chain={base} />
                        <Address className={color.foregroundMuted} />
                        <EthBalance />
                      </Identity>
                      <WalletDropdownBasename />
                      <WalletDropdownDisconnect />
                    </WalletDropdown>
                  </Wallet>
                </div>
                <div className="mr-4">
                  <ThemeToggler />
                </div>
                <div className="lg:hidden">
                  <button
                    onClick={navbarToggleHandler}
                    id="navbarToggler"
                    aria-label="Mobile Menu"
                    className="absolute right-4 top-1/2 block translate-y-[-50%] rounded-lg px-3 py-[6px] ring-primary focus:ring-2"
                  >
                    <span
                      className={`relative my-1.5 block h-0.5 w-[30px] bg-black transition-all duration-300 dark:bg-white ${
                        navbarOpen ? " top-[7px] rotate-45" : " "
                      }`}
                    />
                    <span
                      className={`relative my-1.5 block h-0.5 w-[30px] bg-black transition-all duration-300 dark:bg-white ${
                        navbarOpen ? "opacity-0 " : " "
                      }`}
                    />
                    <span
                      className={`relative my-1.5 block h-0.5 w-[30px] bg-black transition-all duration-300 dark:bg-white ${
                        navbarOpen ? " top-[-8px] -rotate-45" : " "
                      }`}
                    />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <div
        className={`navbar absolute right-0 z-30 w-[250px] rounded border-[.5px] border-body-color/50 bg-white px-6 py-4 duration-300 dark:border-body-color/20 dark:bg-dark lg:hidden ${
          navbarOpen
            ? "fixed top-[80px] right-0 opacity-100"
            : "fixed top-[80px] right-0 opacity-0 pointer-events-none"
        }`}
      >
        <ul className="block">
          {menuData.map((menuItem, index) => (
            <li key={menuItem.id} className="group relative">
              {menuItem.path ? (
                <Link
                  href={menuItem.path}
                  className="flex py-2 text-base text-dark group-hover:opacity-70 dark:text-white"
                >
                  {menuItem.title}
                </Link>
              ) : (
                <>
                  <a
                    onClick={() => handleSubmenu(index)}
                    className="flex cursor-pointer items-center justify-between py-2 text-base text-dark group-hover:opacity-70 dark:text-white"
                  >
                    {menuItem.title}
                    <span className="pl-3">
                      <svg width="15" height="14" viewBox="0 0 15 14">
                        <path
                          d="M7.81602 9.97495C7.68477 9.97495 7.57539 9.9312 7.46602 9.8437L2.43477 4.89995C2.23789 4.70308 2.23789 4.39683 2.43477 4.19995C2.63164 4.00308 2.93789 4.00308 3.13477 4.19995L7.81602 8.77183L12.4973 4.1562C12.6941 3.95933 13.0004 3.95933 13.1973 4.1562C13.3941 4.35308 13.3941 4.65933 13.1973 4.8562L8.16601 9.79995C8.05664 9.90933 7.94727 9.97495 7.81602 9.97495Z"
                          fill="currentColor"
                        />
                      </svg>
                    </span>
                  </a>
                  <div
                    className={`submenu relative left-0 top-full rounded-md bg-white transition-[top] duration-300 group-hover:opacity-100 dark:bg-dark ${
                      openIndex === index ? "block" : "hidden"
                    }`}
                  >
                    {menuItem.submenu?.map((submenuItem) => (
                      <Link
                        href={submenuItem.path}
                        key={submenuItem.id}
                        className="block rounded py-2.5 text-sm text-dark hover:opacity-70 dark:text-white px-3"
                      >
                        {submenuItem.title}
                      </Link>
                    ))}
                  </div>
                </>
              )}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Header;
