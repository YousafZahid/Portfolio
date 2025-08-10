import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-[#0a0a0a] bg-opacity-95 border-b border-[#232526] py-4 px-8 flex justify-between items-center shadow-lg">
      <Link href="#" className="text-2xl font-extrabold text-yellow-300 drop-shadow-[0_2px_8px_rgba(255,255,255,0.25)]">
        Yousaf Zahid
      </Link>
      <div className="flex gap-8 text-lg font-semibold">
        <Link href="#projects" className="hover:text-yellow-400 transition-colors">Projects</Link>
        <Link href="#skills" className="hover:text-pink-400 transition-colors">Skills</Link>
        <Link href="#about" className="hover:text-red-400 transition-colors">About</Link>
        <Link href="#contact" className="hover:text-gray-400 transition-colors">Contact</Link>
      </div>
    </nav>
  );
}
