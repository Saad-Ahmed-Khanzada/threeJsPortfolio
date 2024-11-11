import {
  Github,
  Home,
  Linkedin,
  NotebookText,
  Palette,
  Phone,
  Twitter,
  User,
  Facebook,
  Instagram
} from "lucide-react";
import Link from "next/link";
import React from "react";
import ResponseComponent from "../ResponseComponent";
import { motion } from "framer-motion";
import clsx from 'clsx';


const getIcon = (icon) => {
  switch (icon) {
    case "home":
      return <Home className="w-full h-auto" strokeWidth={1.5} />;
    case "about":
      return <User className="w-full h-auto" strokeWidth={1.5} />;
    case "projects":
      return <Palette className="w-full h-auto" strokeWidth={1.5} />;
    case "contact":
      return <Phone className="w-full h-auto" strokeWidth={1.5} />;
    case "github":
      return <Github className="w-full h-auto" strokeWidth={1.5} />;
    case "linkedin":
      return <Linkedin className="w-full h-auto" strokeWidth={1.5} />;
    case "instagram":
      return <Instagram className="w-full h-auto" strokeWidth={1.5} />;
    case "resume":
      return <NotebookText className="w-full h-auto" strokeWidth={1.5} />;

    default:
      return <Home className="w-full h-auto" strokeWidth={1.5} />;
  }
};

const item = {
  hidden: { scale: 0 },
  show: { scale: 1 },
};

const NavLink = motion(Link);

const NavButton = ({
  x,
  y,
  label,
  link,
  icon,
  newTab,
  labelDirection = "right",
}) => {
  return (
    <ResponseComponent>
      {({ size }) => {
        return size && size > 480 ? (
          <div
            className="absolute cursor-pointer z-50"
            style={{ transform: `translate(${x},${y})` }}
          >
            <NavLink
              variants={item}
              href={link}
              target={newTab ? "_blank" : "_self"}
              className="text-foreground  rounded-full flex items-center justify-center bg-background/20 border border-accent/30 border-solid backdrop-blur-[6px] shadow-glass-inset hover:shadow-glass-sm"
              aria-label={label}
              name={label}
            >
              <span className="relative  w-14 h-14 p-4 animate-spin-slow-reverse hover:text-accent group-hover:pause">
                {getIcon(icon)}
                <span className="peer bg-transparent absolute top-0 left-0 w-full h-full" />
                <span className="absolute hidden peer-hover:block px-2 py-1 left-full mx-2 top-1/2 -translate-y-1/2 custom-bg">
                  {label}
                </span>
              </span>
            </NavLink>
          </div>
        ) : (
          <div
            className="w-fit cursor-pointer z-50"
            // style={{ transform: `translate(${x},${y})` }}
          >
            <NavLink
              variants={item}
              href={link}
              target={newTab ? "_blank" : "_self"}
              className="text-foreground  rounded-full flex items-center justify-center bg-background/20 border border-accent/30 border-solid backdrop-blur-[6px] shadow-glass-inset hover:shadow-glass-sm"
              aria-label={label}
              name={label}
            >
              <span className="relative w-10 h-10 p-2.5  xs:w-14 xs:h-14 xs:p-4  hover:text-accent ">
                {getIcon(icon)}
                <span className="peer bg-transparent absolute top-0 left-0 w-full h-full" />
                <span
  className={clsx(
    "absolute hidden  peer-hover:block px-2 py-1 mx-2 top-1/2 -translate-y-1/2 custom-bg",
    labelDirection === "left" ? "right-full" : " left-full"
  )}
>
  {label}
</span>


              </span>
            </NavLink>
          </div>
        );
      }}
    </ResponseComponent>
  );
};

export default NavButton;
