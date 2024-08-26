import {
  Popover,
  PopoverButton,
  PopoverPanel,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import {
  IoIosArrowDown,
  IoIosSettings,
  IoMdHelpCircleOutline,
} from "react-icons/io";
import { SiStatista, SiShortcut } from "react-icons/si";
import { Link } from "react-router-dom";
import { RiAdvertisementFill, RiEdit2Fill } from "react-icons/ri";

export default function More() {
  return (
    <Popover className="relative">
      <PopoverButton className="py-[3px] block group outline-none">
        <div className="p-3 rounded-full transition-colors inline-flex items-center gap-5 group-hover:bg-[#eff3f41a]">
          <div className="w-[26.25px] h-[26.25px] relative">
            <svg viewBox="0 0 24 24" width={26.25} height={26.25}>
              <path
                fill="#e7e9ea"
                d="M3.75 12c0-4.56 3.69-8.25 8.25-8.25s8.25 3.69 8.25 8.25-3.69 8.25-8.25 8.25S3.75 16.56 3.75 12zM12 1.75C6.34 1.75 1.75 6.34 1.75 12S6.34 22.25 12 22.25 22.25 17.66 22.25 12 17.66 1.75 12 1.75zm-4.75 11.5c.69 0 1.25-.56 1.25-1.25s-.56-1.25-1.25-1.25S6 11.31 6 12s.56 1.25 1.25 1.25zm9.5 0c.69 0 1.25-.56 1.25-1.25s-.56-1.25-1.25-1.25-1.25.56-1.25 1.25.56 1.25 1.25 1.25zM13.25 12c0 .69-.56 1.25-1.25 1.25s-1.25-.56-1.25-1.25.56-1.25 1.25-1.25 1.25.56 1.25 1.25z"
              />
            </svg>
          </div>

          <div className="pr-4 text-xl">Daha Fazla</div>
        </div>
      </PopoverButton>
      <PopoverPanel className="w-[318px] absolute bottom-0 left-0 bg-black shadow-box rounded-xl overflow-hidden">
        <button className="px-4 h-14 w-full transition-colors inline-flex items-center gap-5 hover:bg-[#eff3f41a]">
          <div className="w-[26.25px] h-[26.25px] relative">
            <svg viewBox="0 0 24 24" width={26.25} height={26.25}>
              <path
                fill="#e7e9ea"
                d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"
              />
            </svg>
          </div>

          <div className="pr-4 text-xl font-bold">Bağlan</div>
        </button>
        <button className="px-4 h-14 w-full transition-colors inline-flex items-center gap-5 hover:bg-[#eff3f41a]">
          <div className="w-[26.25px] h-[26.25px] relative">
            <svg viewBox="0 0 24 24" width={26.25} height={26.25}>
              <path
                fill="#e7e9ea"
                d="M23 3v14h-2V5H5V3h18zM10 17c1.1 0 2-1.34 2-3s-.9-3-2-3-2 1.34-2 3 .9 3 2 3zM1 7h18v14H1V7zm16 10c-1.1 0-2 .9-2 2h2v-2zm-2-8c0 1.1.9 2 2 2V9h-2zM3 11c1.1 0 2-.9 2-2H3v2zm0 4c2.21 0 4 1.79 4 4h6c0-2.21 1.79-4 4-4v-2c-2.21 0-4-1.79-4-4H7c0 2.21-1.79 4-4 4v2zm0 4h2c0-1.1-.9-2-2-2v2z"
              ></path>
            </svg>
          </div>

          <div className="pr-4 text-xl font-bold">Para kazanma</div>
        </button>

        <Disclosure>
          <DisclosureButton className="h-[52px] flex items-center px-4 font-bold justify-between w-full hover:bg-[#eff3f41a] transition-colors">
            İçerik Üretici Stüdyosu
            <IoIosArrowDown />
          </DisclosureButton>

          <DisclosurePanel className="text-gray-500">
            <Link
              to="/"
              className="flex items-center px-3 h-11 gap-3 text-[15px] font-medium hover:bg-[#eff3f41a] transition-colors text-white"
            >
              {" "}
              <SiStatista /> İstatistikler
            </Link>
          </DisclosurePanel>
        </Disclosure>

        <Disclosure>
          <DisclosureButton className="h-[52px] flex items-center px-4 font-bold justify-between w-full hover:bg-[#eff3f41a] transition-colors">
            Profesyonel Araçlar
            <IoIosArrowDown />
          </DisclosureButton>

          <DisclosurePanel className="text-gray-500">
            <Link
              to="/"
              className="flex items-center px-3 h-11 gap-3 text-[15px] font-medium hover:bg-[#eff3f41a] transition-colors text-white"
            >
              {" "}
              <RiAdvertisementFill /> Reklamlar
            </Link>
          </DisclosurePanel>
        </Disclosure>

        <Disclosure>
          <DisclosureButton className="h-[52px] flex items-center px-4 font-bold justify-between w-full hover:bg-[#eff3f41a] transition-colors">
            Ayarlar ve Destek
            <IoIosArrowDown />
          </DisclosureButton>

          <DisclosurePanel className="text-gray-500">
            <Link
              to="/"
              className="flex items-center px-3 h-11 gap-3 text-[15px] font-medium hover:bg-[#eff3f41a] transition-colors text-white"
            >
              {" "}
              <IoIosSettings /> Ayarlar ve gizlilik
            </Link>
          </DisclosurePanel>
          <DisclosurePanel className="text-gray-500">
            <Link
              to="/"
              className="flex items-center px-3 h-11 gap-3 text-[15px] font-medium hover:bg-[#eff3f41a] transition-colors text-white"
            >
              {" "}
              <IoMdHelpCircleOutline /> Yardım Merkezi
            </Link>
          </DisclosurePanel>
          <DisclosurePanel className="text-gray-500">
            <Link
              to="/"
              className="flex items-center px-3 h-11 gap-3 text-[15px] font-medium hover:bg-[#eff3f41a] transition-colors text-white"
            >
              {" "}
              <RiEdit2Fill /> Görünüm
            </Link>
          </DisclosurePanel>
          <DisclosurePanel className="text-gray-500">
            <Link
              to="/"
              className="flex items-center px-3 h-11 gap-3 text-[15px] font-medium hover:bg-[#eff3f41a] transition-colors text-white"
            >
              {" "}
              <SiShortcut /> Klavye kısayolları
            </Link>
          </DisclosurePanel>
        </Disclosure>
      </PopoverPanel>
    </Popover>
  );
}
