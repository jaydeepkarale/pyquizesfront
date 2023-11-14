import React, { useState } from "react";
import useDarkSide from "./useDarkSide";
import { DarkModeSwitch } from "react-toggle-dark-mode";
import { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";
import "./App.css";

const navigation = [
  { name: "Python Quiz", href: "#", current: true },
  { name: "Flask Quiz", href: "#", current: false },
  { name: "Django Quiz", href: "#", current: false },
  { name: "FastAPI Quiz", href: "#", current: false },
  { name: "Machine Learning Quiz", href: "#", current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

function Navbar() {  
  const [colorTheme, setTheme] = useDarkSide();
  const [darkSide, setDarkSide] = useState(
    colorTheme == "light" ? true : false
  );
  const toggleDarkMode = (checked) => {
    setTheme(colorTheme);
    setDarkSide(checked);
  };
  return (
    <>
      <Disclosure
        as="nav"
        class="flex flex-col  p-2 md:flex-row md:space-x-28 md:space-y-0  items-center dark:text-gray-300"
      >
        <div>
          <img
            class="h-12"
            src="https://www.python.org/static/community_logos/python-logo-generic.svg"
            alt="Python Official logo"
          />
        </div>
        {navigation.map((item) => (
          <div key={item.name}>            
            <a    
              href={item.href}
              class={classNames(
                "text-black-300 hover:bg-gray-700 hover:text-white",
                "rounded-md px-2 py-2 text-xl font-bold transition"
              )}
              aria-current={item.current ? "page" : undefined}
            >
              {item.name}
            </a>
          </div>
        ))}
        <div class="md:flex-grow">
            <DarkModeSwitch
              checked={darkSide}
              onChange={toggleDarkMode}
              size={32}              
            />        
        </div>
      </Disclosure>
    </>
  );
}

export default Navbar;
