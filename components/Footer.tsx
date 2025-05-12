import Image from 'next/image';
import Link from 'next/link';
import {
  FaPhone,
  FaMapMarkerAlt,
  FaEnvelope,
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaYoutube,
  FaLinkedinIn,
} from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-[#092A4E] text-white px-6 md:px-20 pt-16 pb-8 font-poppins">
      {/* Top Grid Section including Newsletter */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-10 border-b border-white/20 pb-10">
        {/* Logo & Contact */}
        <div className="space-y-4">
          <Image src="/Footer.png" alt="SCEF Logo" width={222} height={105} />
          <div className="flex flex-col gap-6 text-sm">
            <p className="flex items-center gap-2"><FaMapMarkerAlt />54, Falolu Street, Surulere, Lagos</p>
            <p className="flex items-center gap-2"><FaPhone /> +234-907-962-1110</p>
            <p className="flex items-center gap-2"><FaPhone /> +234-810-976-5897</p>
            <p className="flex items-center gap-2"><FaEnvelope /> nesa.africa@gmail.com</p>
          </div>
        </div>

        {/* Company Links */}
        <div>
          <h4 className="font-semibold mb-4">Company</h4>
          <ul className="space-y-2 text-sm text-white/80">
            <li><Link href="#">About Us</Link></li>
            <li><Link href="#">Mission</Link></li>
            <li><Link href="#">Vision</Link></li>
            <li><Link href="#">Get involved</Link></li>
          </ul>
        </div>

        {/* Award Category 1 */}
        <div>
          <h4 className="font-semibold mb-4">Award Category</h4>
          <ul className="space-y-2 text-sm text-white/80">
            <li><Link href="#">Nominate your Champion</Link></li>
            <li><Link href="#">Award Timelines</Link></li>
            <li><Link href="#">Sponsorship</Link></li>
          </ul>
        </div>

        {/* Award Category 2 */}
        <div>
          <h4 className="font-semibold mb-4">Award Category</h4>
          <ul className="space-y-2 text-sm text-white/80">
            <li><Link href="#">Nominate your Champion</Link></li>
            <li><Link href="#">Award Timelines</Link></li>
            <li><Link href="#">Sponsorship</Link></li>
          </ul>
        </div>

        {/* Newsletter Section */}
        <div className="space-y-4 max-w-xs text-left">
          <h4 className="font-semibold text-white">Subscribe to our Newsletter</h4>
          <form className="flex w-full">
            <input
              type="email"
              placeholder="Input your email address"
              className="p-2 rounded-l-md text-black w-full"
            />
            <button
              type="submit"
              className="bg-black text-white px-4 py-2 rounded-r-md"
            >
              →
            </button>
          </form>
          <p className="text-xs text-white/70">
            Stay in the loop with the latest updates! Subscribe to our newsletter for exclusive insights, exciting announcements, and all things NESA 2024. Don’t miss a beat!
          </p>
        </div>
      </div>

      {/* Bottom Footer with Terms & Socials */}
      <div className="mt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-white/50">
        <p>SCEF©2024</p>

        <div className="flex gap-4">
          <Link href="#">Terms and Condition</Link>
          <Link href="#">Privacy</Link>
        </div>

        <div className="flex gap-4 text-white text-xl">
          <FaLinkedinIn className="hover:text-[#AAAAAA]" />
          <FaFacebookF className="hover:text-[#AAAAAA]" />
          <FaInstagram className="hover:text-[#AAAAAA]" />
          <FaTwitter className="hover:text-[#AAAAAA]" />
          <FaYoutube className="hover:text-[#AAAAAA]" />
        </div>
      </div>
    </footer>
  );
}
