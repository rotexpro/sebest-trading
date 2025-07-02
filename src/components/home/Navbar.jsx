import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import Logo from "../../assets/Logo.svg";

const pages = [
  { path: "/", label: "Home" },
  { path: "/about", label: "About us" },
  { path: "/services", label: "Services" },
  { path: "/gallery", label: "Gallery" },
  { path: "/contact", label: "Contact us" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  const navLinkClasses = ({ isActive }) => {
    const base =
      "relative transition-colors after:content-[''] after:absolute after:-bottom-0.5 " +
      "after:left-0 after:h-[2px] after:bg-primary after:transition-[width] after:duration-300";
    const active = "text-primary font-semibold after:w-full";
    const inactive =
      "text-gray-700 hover:text-primary-hover after:w-0 lg:hover:after:w-full";
    return `${base} ${isActive ? active : inactive}`;
  };

  return (
    <>
      {open && (
        <div
          className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm lg:hidden"
          onClick={() => setOpen(false)}
        />
      )}

      <nav className="fixed top-0 z-50 flex w-full justify-center pt-4">
        <div
          className="container mx-4 flex w-full items-center justify-between rounded-md
             bg-white/80 px-4 py-2 shadow-md backdrop-blur-sm lg:shadow-none"
        >
          <NavLink to="/" aria-label="Sebest Trading home" className="flex">
            <img src={Logo} alt="Sebest Trading logo" className="h-10 w-auto" />
          </NavLink>

          <button
            className="relative z-50 ml-4 rounded p-2 lg:hidden"
            aria-label="Toggle navigation"
            onClick={() => setOpen((prev) => !prev)}
          >
            <svg
              className={`h-6 w-6 text-gray-800 transition-transform duration-300 ${
                open ? "rotate-90" : ""
              }`}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              {open ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <>
                  <path d="M3 6h18" />
                  <path d="M3 12h18" />
                  <path d="M3 18h18" />
                </>
              )}
            </svg>
          </button>

          <ul className="hidden gap-6 lg:flex">
            {pages.map(({ path, label }) => (
              <li key={path}>
                <NavLink to={path} className={navLinkClasses}>
                  {label}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      <aside
        className={`fixed left-0 top-0 z-50 h-full w-4/5 max-w-xs transform bg-white
                    p-8 pt-24 shadow-lg transition-transform duration-300 ease-in-out
                    lg:hidden ${open ? "translate-x-0" : "-translate-x-full"}`}
      >
        <ul>
          {pages.map(({ path, label }) => (
            <li key={path} className="mb-6">
              <NavLink
                to={path}
                className={navLinkClasses}
                onClick={() => setOpen(false)}
              >
                {label}
              </NavLink>
            </li>
          ))}
        </ul>
      </aside>
    </>
  );
}
