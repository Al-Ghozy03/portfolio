"use client";
import { Dialog, Transition } from "@headlessui/react";
import { useState, Fragment } from "react";
import Image from "next/image";
import { Add, Link21 } from "iconsax-react";

export default function CardPortfolio({ title, description, tools, url,thumbnail }) {
  const [open, setOpen] = useState(false);
  return (
    <article>
      <div
        onClick={() => setOpen(true)}
        className="bg-[#212121] px-6 py-4 rounded-xl hover:bg-[#2B2B2B] cursor-pointer transition hover:-translate-y-2"
      >
        <h1 className="font-semibold text-lg">{title}</h1>
        {description.length <= 135 ? (
          <p className="text-[0.800rem]">{description}</p>
        ) : (
          <p className="text-[0.800rem]">
            {description.substring(0, 135)}...{" "}
            <span className="font-semibold text-[#3F50EA]">See more</span>
          </p>
        )}
      </div>
      <Modal
        open={open}
        setOpen={setOpen}
        title={title}
        description={description}
        tools={tools}
        url={url}
        thumbnail={thumbnail}
      />
    </article>
  );
}

function Modal({ open, setOpen, title, description, tools, url,thumbnail }) {
  return (
    <Transition appear show={open} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={() => setOpen(false)}>
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
          <div className="lg:flex min-h-full lg:items-center lg:justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="transform lg:w-2/3 overflow-hidden rounded-2xl bg-[#212121] text-white p-6 text-left align-middle shadow-xl transition-all">
                <div className="lg:flex lg:space-x-6">
                  <button
                    onClick={() => setOpen(false)}
                    className="bg-[#161616] outline-none p-1 rounded-full hover:bg-[#3F3F3F] lg:hidden mb-3"
                  >
                    <Add className="text-white rotate-45" />
                  </button>
                  <Image src={thumbnail} alt={title} width={350} height={350} className="rounded-xl" />
                  <div>
                    <div className="flex justify-between">
                      <Dialog.Title
                        as="h1"
                        className="text-2xl font-bold lg:mt-0 mt-4"
                      >
                        {title}
                      </Dialog.Title>
                      <button
                        onClick={() => setOpen(false)}
                        className="bg-[#161616] outline-none p-1 rounded-full hover:bg-[#3F3F3F] lg:inline hidden"
                      >
                        <Add className="text-white rotate-45" />
                      </button>
                    </div>
                    <h3 className="text-base font-semibold mt-3 mb-0.5">
                      Description
                    </h3>
                    <p className="text-xs">{description}</p>
                    <h3 className="text-base font-semibold mt-2 mb-0.5">
                      Tools
                    </h3>
                    <p className="text-xs">{tools?.join(", ")}</p>
                    <button
                      onClick={() => window.open(url)}
                      className="text-sm flex items-center space-x-1 bg-[#3F50EA] focus:ring outline-none mt-5 font-medium px-5 py-2 rounded-full transition hover:scale-110"
                    >
                      <Link21 className="h-5 w-5" />
                      <p>See</p>
                    </button>
                  </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}
