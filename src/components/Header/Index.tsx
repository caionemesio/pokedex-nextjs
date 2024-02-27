import Image from "next/image";
import Link from "next/link";
import { BsCodeSlash, BsGithub } from "react-icons/bs";
export default function Header(){
  return (
    <header >
        <nav className="flex justify-between items-center mb-12">
        
        <Image src="/logo.svg" priority={true} alt="logo" width={153} height={56} />
        <div className="flex gap-3">
        <Link href="https://github.com/caionemesio" target="_blank" className="text-white" >
          <BsCodeSlash size={33}/>
        </Link>
        <Link href="https://github.com/caionemesio" target="_blank" className="text-white" >
          <BsGithub size={33}/>
        </Link>
        </div>
        </nav>
        
       </header> 
  )
}