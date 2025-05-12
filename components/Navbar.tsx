import Link from 'next/link';
import { HiOutlineChevronDown } from 'react-icons/hi';
import { FaHandHoldingHeart, FaUsers } from 'react-icons/fa';
import Image from 'next/image';

export default function Navbar() {
    return (
        <nav className="w-full bg-white px-6 md:px-20 py-6 flex justify-between items-center font-poppins shadow-sm z-50">
        {/* Logo and Links */}
        <div className="flex items-center gap-8">
            <Image
            src="/SCEF.png"
            alt="SCEF Logo"
            width={100}
            height={48}
            priority
            />

            {/* Navigation Menu */}
            <ul className="hidden md:flex gap-6 text-[#5F5F5F] text-lg font-medium">
            <li className="flex items-center gap-1 hover:text-[#3366CC] transition">
                <Link href="/">Home</Link>
            </li>
            <li className="flex items-center gap-1 hover:text-[#3366CC] transition">
                <Link href="#">About us</Link>
                <HiOutlineChevronDown className="text-xs" />
            </li>
            <li className="flex items-center gap-1 hover:text-[#3366CC] transition">
                <Link href="#">Our Services</Link>
                <HiOutlineChevronDown className="text-xs" />
            </li>
            <li className="flex items-center gap-1 hover:text-[#3366CC] transition">
                <Link href="#">Get Involved</Link>
                <HiOutlineChevronDown className="text-xs" />
            </li>
            <li className="flex items-center gap-1 hover:text-[#3366CC] transition">
                <Link href="#">News and Update</Link>
                <HiOutlineChevronDown className="text-xs" />
            </li>
            </ul>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-3">
            <button className="text-sm px-5 py-2.5 border border-[#3366CC] text-[#3366CC] rounded-full flex items-center gap-2 hover:bg-[#e6f0ff] transition">
            <FaHandHoldingHeart className="text-base text-[#FFD700]" />
            Donate
            </button>
            <button className="text-sm px-5 py-2.5 bg-[#3366CC] text-white rounded-full flex items-center gap-2 hover:bg-[#2852a4] transition">
            <FaUsers className="text-base text-[#FFD700]" />
            Partner with us
            </button>
        </div>
        </nav>
    );
}
