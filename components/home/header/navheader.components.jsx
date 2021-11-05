import React, { useState } from "react";
import { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
// import Link from "next/link";
import { useRouter } from "next/router";
// import Link from "next/link";
// import { route } from "next/dist/server/router";
import { signOut } from "firebase/auth";
import { auth } from "../../../services/firebase/firebase";
import { useUser } from "../../../services/context/userContext";

const navigation = [
  { name: "Home", href: "/", current: false },
  // { name: "Dashboard", href: "/dashboard", current: true },
  { name: "Clients", href: "/clients", current: false },
  { name: "About", href: "/about", current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function NavHeader() {
  // const [currentLink, setCurrentLink] = useState(false);
  const { user } = useUser();
  const router = useRouter();
  // console.log(user);
  const handleClick = (e, href) => {
    e.preventDefault();
    router.push(href);
    // console.log("router: ", router.pathname);
  };
  const handleLogout = async (e, href) => {
    // e.preventDefault();
    await signOut(auth);
    handleClick(e, href);

    // console.log("router: ", router.pathname);
  };

  // const currentRoute = useHistory().location.pathname.toLowerCase();
  return (
    <Disclosure as="nav" className="bg-gray-800 z-20 sticky top-0  ">
      {({ open }) => (
        <>
          <div className="max-w-screen-2xl mx-auto px-2 sm:px-6 lg:px-8">
            <div className="relative flex items-center justify-between h-16">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex-shrink-0 flex items-center">
                  <div
                    className="cursor-pointer"
                    onClick={(e) => handleClick(e, "/")}
                  >
                    <img
                      className="block lg:hidden h-14 w-auto "
                      // src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg"
                      src="/logo/tailorlogo2.png"
                      alt="tailorsdb logo"
                    />
                  </div>
                  <div
                    className="cursor-pointer"
                    onClick={(e) => handleClick(e, "/")}
                  >
                    <img
                      className="hidden lg:block h-16 w-auto"
                      // src="https://tailwindui.com/img/logos/workflow-logo-indigo-500-mark-white-text.svg"
                      src="/logo/tailorlogo2.png"
                      alt="Workflow"
                    />
                  </div>
                </div>
                <div className="hidden sm:flex sm:ml-6 items-center">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className={classNames(
                          // item.current
                          router.pathname === item.href
                            ? "bg-gray-900 text-white"
                            : "text-gray-300 hover:bg-gray-700 hover:text-white",
                          "px-3 py-2 rounded-md text-md font-medium cursor-pointer transition duration-500 ease-in-out"
                        )}
                        aria-current={
                          router.pathname === item.href ? "page" : undefined
                        }
                        onClick={(e) => handleClick(e, item.href)}
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                {!user ? (
                  <a
                    href="!#"
                    onClick={(e) => handleClick(e, "/login")}
                    className="rounded-md px-3.5 py-2 m-1 overflow-hidden relative group cursor-pointer border-2 font-medium border-indigo-600 text-indigo-600"
                  >
                    <span className="absolute w-64 h-0 transition-all duration-300 origin-center rotate-45 -translate-x-20 bg-indigo-600 top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"></span>
                    <span className="relative text-white transition duration-300 group-hover:text-white ease">
                      Login
                    </span>
                  </a>
                ) : (
                  // <Link href="/login"> </Link>
                  <Menu as="div" className="ml-3 relative">
                    <div>
                      <Menu.Button className="bg-gray-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                        <span className="sr-only">Open user menu</span>
                        <img
                          className="h-8 w-8 rounded-full"
                          src="https://avatars.dicebear.com/api/micah/tailor.svg?mouth[]=laughing"
                          alt="profile image"
                        />
                      </Menu.Button>
                    </div>
                    <Transition
                      as={Fragment}
                      enter="transition ease-out duration-100"
                      enterFrom="transform opacity-0 scale-95"
                      enterTo="transform opacity-100 scale-100"
                      leave="transition ease-in duration-75"
                      leaveFrom="transform opacity-100 scale-100"
                      leaveTo="transform opacity-0 scale-95"
                    >
                      <Menu.Items className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                        <Menu.Item>
                          {({ active }) => (
                            <a
                              href="#"
                              className={classNames(
                                active ? "bg-gray-100" : "",
                                "block px-4 py-2 text-sm text-gray-700"
                              )}
                            >
                              Your Profile
                            </a>
                          )}
                        </Menu.Item>

                        <Menu.Item>
                          {({ active }) => (
                            <a
                              href="#"
                              onClick={(e) => {
                                handleLogout(e, "/");
                              }}
                              className={classNames(
                                active ? "bg-gray-100" : "",
                                "block px-4 py-2 text-sm text-gray-700"
                              )}
                            >
                              Sign out
                            </a>
                          )}
                        </Menu.Item>
                      </Menu.Items>
                    </Transition>
                  </Menu>
                )}
              </div>
            </div>
          </div>

          <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Disclosure.Panel className="sm:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className={classNames(
                      // item.current
                      router.pathname === item.href
                        ? "bg-gray-900 text-white"
                        : "text-gray-300 hover:bg-gray-700 hover:text-white",
                      " block px-3 py-2 rounded-md text-md font-medium cursor-pointer transition duration-500 ease-in-out"
                    )}
                    aria-current={
                      router.pathname === item.href ? "page" : undefined
                    }
                    onClick={(e) => handleClick(e, item.href)}
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </Disclosure.Panel>
          </Transition>
        </>
      )}
    </Disclosure>
  );
}
