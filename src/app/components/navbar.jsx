"use client";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import Image from "next/image";
import logo from "../assets/img/logo.png";
import { openEmail } from "../page";
import { HambergerMenu } from "iconsax-react";

export default function Navbar() {
  const [isExpand, setIsExpand] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  function openModal() {
    setIsOpen(true);
  }
  return (
    <>
      <header className="flex justify-between items-center fixed bg-dark w-full lg:px-28 px-10 lg:py-4 py-3.5 backdrop-blur-lg bg-opacity-50 z-50">
        <Image
          src={logo}
          alt="logo"
          height={30}
          priority
          className="lg:h-[1.875rem] lg:w-[8rem] h-[1.4rem] w-24"
        />
        <button className="lg:hidden" onClick={() => setIsExpand(!isExpand)}>
          <HambergerMenu />
        </button>
        <nav className="capitalize hidden lg:flex lg:space-x-5 lg:text-sm items-center">
          <a href="#about">about</a>
          <a href="#skills">skills</a>
          <a href="#my_services">my services</a>
          <a href="#work_experiences">work experiences</a>
          <a href="#portfolio">portfolio</a>
          <div className="bg-gradient-to-r from-[#834D9B] to-[#D04ED6] p-px flex justify-center items-center rounded-full">
            <button
              onClick={openModal}
              className="w-full hover:bg-gradient-to-r hover:from-[#834D9B] hover:to-[#D04ED6] hover:font-semibold bg-[#161616] px-5 py-2.5 rounded-full"
            >
              Contact me
            </button>
          </div>
        </nav>
        <ContactModal isOpen={isOpen} setIsOpen={setIsOpen} />
      </header>
      <nav
        className={`lg:hidden flex flex-col w-full mt-[3rem] capitalize fixed bg-dark z-40 backdrop-blur-lg bg-opacity-50 text-sm px-10 space-y-2 transitio-max-h duration-300 ease-in-out overflow-hidden ${
          isExpand ? "max-h-96 pt-5 pb-5" : "max-h-0"
        }`}
      >
        <a href="#about">about</a>
        <a href="#skills">skills</a>
        <a href="#my_services">my services</a>
        <a href="#work_experiences">work experiences</a>
        <a href="#portfolio">portfolio</a>
        <div className="bg-gradient-to-r from-[#834D9B] to-[#D04ED6] p-px flex justify-center items-center rounded-full">
          <button
            onClick={() => {
              openModal();
              setIsExpand(false);
            }}
            className="w-full hover:bg-gradient-to-r hover:from-[#834D9B] hover:to-[#D04ED6] hover:font-semibold bg-[#161616] px-5 py-2.5 rounded-full"
          >
            Contact me
          </button>
        </div>
      </nav>
    </>
  );
}

function ContactModal({ isOpen, setIsOpen }) {
  function closeModal() {
    setIsOpen(false);
  }

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-[999]" onClose={closeModal}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-25" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-dark p-6 text-left align-middle shadow-xl transition-all">
                <Dialog.Title
                  as="h3"
                  className="text-2xl text-center font-bold"
                >
                  Get in touch with me
                </Dialog.Title>
                <p className="text-center lg:text-sm text-[0.85rem] my-2">
                  Please feel free to contact me anytime. I'm available to
                  discuss your project in more detail and answer any questions
                  you may have
                </p>
                <div className="flex space-x-5 justify-center mt-4">
                  <a href="https://github.com/Al-Ghozy03" target="_blank">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="35"
                      height="35"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fill="currentColor"
                        d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59c.4.07.55-.17.55-.38c0-.19-.01-.82-.01-1.49c-2.01.37-2.53-.49-2.69-.94c-.09-.23-.48-.94-.82-1.13c-.28-.15-.68-.52-.01-.53c.63-.01 1.08.58 1.23.82c.72 1.21 1.87.87 2.33.66c.07-.52.28-.87.51-1.07c-1.78-.2-3.64-.89-3.64-3.95c0-.87.31-1.59.82-2.15c-.08-.2-.36-1.02.08-2.12c0 0 .67-.21 2.2.82c.64-.18 1.32-.27 2-.27c.68 0 1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82c.44 1.1.16 1.92.08 2.12c.51.56.82 1.27.82 2.15c0 3.07-1.87 3.75-3.65 3.95c.29.25.54.73.54 1.48c0 1.07-.01 1.93-.01 2.2c0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"
                      />
                    </svg>
                  </a>
                  <a
                    href="https://www.linkedin.com/in/muhammad-faiz-al-ghozi"
                    target="_blank"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="35"
                      height="35"
                      viewBox="0 0 128 128"
                    >
                      <path
                        fill="#0076b2"
                        d="M116 3H12a8.91 8.91 0 0 0-9 8.8v104.42a8.91 8.91 0 0 0 9 8.78h104a8.93 8.93 0 0 0 9-8.81V11.77A8.93 8.93 0 0 0 116 3z"
                      />
                      <path
                        fill="#fff"
                        d="M21.06 48.73h18.11V107H21.06zm9.06-29a10.5 10.5 0 1 1-10.5 10.49a10.5 10.5 0 0 1 10.5-10.49m20.41 29h17.36v8h.24c2.42-4.58 8.32-9.41 17.13-9.41C103.6 47.28 107 59.35 107 75v32H88.89V78.65c0-6.75-.12-15.44-9.41-15.44s-10.87 7.36-10.87 15V107H50.53z"
                      />
                    </svg>
                  </a>
                  <button onClick={openEmail}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="35"
                      height="35"
                      viewBox="0 0 256 193"
                    >
                      <path
                        fill="#4285F4"
                        d="M58.182 192.05V93.14L27.507 65.077L0 49.504v125.091c0 9.658 7.825 17.455 17.455 17.455h40.727Z"
                      />
                      <path
                        fill="#34A853"
                        d="M197.818 192.05h40.727c9.659 0 17.455-7.826 17.455-17.455V49.505l-31.156 17.837l-27.026 25.798v98.91Z"
                      />
                      <path
                        fill="#EA4335"
                        d="m58.182 93.14l-4.174-38.647l4.174-36.989L128 69.868l69.818-52.364l4.669 34.992l-4.669 40.644L128 145.504z"
                      />
                      <path
                        fill="#FBBC04"
                        d="M197.818 17.504V93.14L256 49.504V26.231c0-21.585-24.64-33.89-41.89-20.945l-16.292 12.218Z"
                      />
                      <path
                        fill="#C5221F"
                        d="m0 49.504l26.759 20.07L58.182 93.14V17.504L41.89 5.286C24.61-7.66 0 4.646 0 26.23v23.273Z"
                      />
                    </svg>
                  </button>
                  <a href="https://wa.me/6387818197732" target="_blank">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="35"
                      height="35"
                      viewBox="0 0 256 258"
                    >
                      <defs>
                        <linearGradient
                          id="logosWhatsappIcon0"
                          x1="50%"
                          x2="50%"
                          y1="100%"
                          y2="0%"
                        >
                          <stop offset="0%" stopColor="#1FAF38" />
                          <stop offset="100%" stopColor="#60D669" />
                        </linearGradient>
                        <linearGradient
                          id="logosWhatsappIcon1"
                          x1="50%"
                          x2="50%"
                          y1="100%"
                          y2="0%"
                        >
                          <stop offset="0%" stopColor="#F9F9F9" />
                          <stop offset="100%" stopColor="#FFF" />
                        </linearGradient>
                      </defs>
                      <path
                        fill="url(#logosWhatsappIcon0)"
                        d="M5.463 127.456c-.006 21.677 5.658 42.843 16.428 61.499L4.433 252.697l65.232-17.104a122.994 122.994 0 0 0 58.8 14.97h.054c67.815 0 123.018-55.183 123.047-123.01c.013-32.867-12.775-63.773-36.009-87.025c-23.23-23.25-54.125-36.061-87.043-36.076c-67.823 0-123.022 55.18-123.05 123.004"
                      />
                      <path
                        fill="url(#logosWhatsappIcon1)"
                        d="M1.07 127.416c-.007 22.457 5.86 44.38 17.014 63.704L0 257.147l67.571-17.717c18.618 10.151 39.58 15.503 60.91 15.511h.055c70.248 0 127.434-57.168 127.464-127.423c.012-34.048-13.236-66.065-37.3-90.15C194.633 13.286 162.633.014 128.536 0C58.276 0 1.099 57.16 1.071 127.416Zm40.24 60.376l-2.523-4.005c-10.606-16.864-16.204-36.352-16.196-56.363C22.614 69.029 70.138 21.52 128.576 21.52c28.3.012 54.896 11.044 74.9 31.06c20.003 20.018 31.01 46.628 31.003 74.93c-.026 58.395-47.551 105.91-105.943 105.91h-.042c-19.013-.01-37.66-5.116-53.922-14.765l-3.87-2.295l-40.098 10.513l10.706-39.082Z"
                      />
                      <path
                        fill="#FFF"
                        d="M96.678 74.148c-2.386-5.303-4.897-5.41-7.166-5.503c-1.858-.08-3.982-.074-6.104-.074c-2.124 0-5.575.799-8.492 3.984c-2.92 3.188-11.148 10.892-11.148 26.561c0 15.67 11.413 30.813 13.004 32.94c1.593 2.123 22.033 35.307 54.405 48.073c26.904 10.609 32.379 8.499 38.218 7.967c5.84-.53 18.844-7.702 21.497-15.139c2.655-7.436 2.655-13.81 1.859-15.142c-.796-1.327-2.92-2.124-6.105-3.716c-3.186-1.593-18.844-9.298-21.763-10.361c-2.92-1.062-5.043-1.592-7.167 1.597c-2.124 3.184-8.223 10.356-10.082 12.48c-1.857 2.129-3.716 2.394-6.9.801c-3.187-1.598-13.444-4.957-25.613-15.806c-9.468-8.442-15.86-18.867-17.718-22.056c-1.858-3.184-.199-4.91 1.398-6.497c1.431-1.427 3.186-3.719 4.78-5.578c1.588-1.86 2.118-3.187 3.18-5.311c1.063-2.126.531-3.986-.264-5.579c-.798-1.593-6.987-17.343-9.819-23.64"
                      />
                    </svg>
                  </a>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}
