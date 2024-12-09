"use client"


import {
  ChevronDown,
  Heart,
  Mail,
  PhoneCall,
  Search,
  ShoppingCart,
  User,
} from "lucide-react";
import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import Link from "next/link";
import { Input } from "./ui/input";
import { Button } from "./ui/button";



import { useState } from "react";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="w-full font-josefinSans">
      {/* Top Header */}
      <div className="px-4 sm:px-6 lg:px-[372px] pt-[14px] pb-[14px] flex flex-wrap justify-between items-center bg-[#7E33E0] text-white">
        {/* Contact Info */}
        <div className="flex flex-wrap gap-4 items-center">
          <Mail size={16} />
          <p className="mr-4">mhhasanul@gmail.com</p>
          <PhoneCall size={16} />
          <p>(12345)67890</p>
        </div>

        {/* Language, Currency, and Links */}
        <div className="flex flex-wrap gap-4 items-center">
          {/* Language Dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center gap-1 focus:outline-none">
              English
              <ChevronDown size={16} />
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem>Urdu</DropdownMenuItem>
              <DropdownMenuItem>Arabic</DropdownMenuItem>
              <DropdownMenuItem>English</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          {/* Currency Dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center gap-1 focus:outline-none">
              USD
              <ChevronDown size={16} />
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem>PKR</DropdownMenuItem>
              <DropdownMenuItem>INR</DropdownMenuItem>
              <DropdownMenuItem>USD</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          {/* Login and Wishlist */}
          <div className="flex gap-2 items-center">
            <Link href={"/login"}>Login</Link>
            <User size={16} />
          </div>
          <div className="flex gap-2 items-center">
            <Link href={"/"}>Wishlist</Link>
            <Heart size={16} />
          </div>
          {/* Cart */}
          <div>
            <Link href={"/cart"}>
              <ShoppingCart size={24} />
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom Header */}
      <div className="w-full px-4 sm:px-6 lg:px-[372px] pt-[19px] pb-[19px]">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href={"/"} className="text-2xl lg:text-3xl font-bold">
            Hekto
          </Link>

          {/* Burger Menu for Small Screens */}
          <button
            className="lg:hidden text-[#7E33E0] focus:outline-none"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? "✖" : "☰"}
          </button>

          {/* Navigation for Large Screens */}
          <nav className="hidden lg:flex items-center gap-6">
            <Link href={"/"} className="text-[#FB2E86] text-sm">
              Home
            </Link>
            <Link href={"/cart"} className="text-sm hover:text-gray-600">
              Pages
            </Link>
            <Link href={"/product"} className="text-sm hover:text-gray-600">
              Products
            </Link>
            <Link href={"/blog"} className="text-sm hover:text-gray-600">
              Blog
            </Link>
            <Link href={"/shop"} className="text-sm hover:text-gray-600">
              Shop
            </Link>
            <Link href={"/contactUs"} className="text-sm hover:text-gray-600">
              Contact
            </Link>
          </nav>
        </div>

        {/* Collapsible Menu for Small Screens */}
        {menuOpen && (
          <nav className="mt-4 lg:hidden bg-[#F9F9F9] shadow-md p-4 rounded">
            <Link href={"/"} className="block text-sm py-2">
              Home
            </Link>
            <Link href={"/cart"} className="block text-sm py-2">
              Pages
            </Link>
            <Link href={"/product"} className="block text-sm py-2">
              Products
            </Link>
            <Link href={"/blog"} className="block text-sm py-2">
              Blog
            </Link>
            <Link href={"/shop"} className="block text-sm py-2">
              Shop
            </Link>
            <Link href={"/contactUs"} className="block text-sm py-2">
              Contact
            </Link>
          </nav>
        )}

        {/* Search Bar */}
        <div className="mt-4 lg:mt-0 flex items-center w-full lg:w-auto">
          <div className="relative w-full lg:w-auto">
            <Input
              className="w-full lg:w-[200px] bg-white border border-gray-300"
              type="search"
              placeholder="Search..."
            />
            <Button className="absolute bg-[#FB2E86] top-1/2 transform -translate-y-1/2 right-[2px]">
              <Search className="text-[#F3F9FF]" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;





















































// function Header() {
//   return (
//     // main div
//     <div className="w-full font-josefinSans">
//       {/* topdiv */}

//       <div className="px-[371px] py-[14px] flex justify-between items-center bg-[#7E33E0] text-white">
//         {/* 1st div  */}
//         <div className="flex justify-between gap-[10px] items-center">
//           <Mail size={16} />
//           <p className="mr-[48px]">mhhasanul@gmail.com</p>

//           <PhoneCall size={16} />
//           <p>(12345)67890</p>
//         </div>

//         {/* 2nd div */}
//         <div className="flex justify-between gap-[17px] items-center">
//           {/* drop down */}
//           <div>
//             <DropdownMenu>
//               <DropdownMenuTrigger className="flex items-center gap-1 focus:outline-none">
//                 English
//                 <ChevronDown size={16} />
//               </DropdownMenuTrigger>
//               <DropdownMenuContent>
//                 <DropdownMenuItem>Urdu</DropdownMenuItem>
//                 <DropdownMenuItem>Arabic</DropdownMenuItem>
//                 <DropdownMenuItem>English</DropdownMenuItem>
//               </DropdownMenuContent>
//             </DropdownMenu>
//           </div>

//           <div>
//             <DropdownMenu>
//               <DropdownMenuTrigger className="flex items-center gap-1 focus:outline-none">
//                 USD
//                 <ChevronDown size={16} />
//               </DropdownMenuTrigger>
//               <DropdownMenuContent>
//                 <DropdownMenuItem>Urdu</DropdownMenuItem>
//                 <DropdownMenuItem>Arabic</DropdownMenuItem>
//                 <DropdownMenuItem>English</DropdownMenuItem>
//               </DropdownMenuContent>
//             </DropdownMenu>
//           </div>

//           {/* login */}

//           <div className="flex gap-[1px] items-center">
//             <Link href={"/"}>Login</Link>
//             <User size={16} />
//           </div>

//           {/* wishList */}

//           <div className="flex gap-[1px] items-center">
//             <Link href={"/"}>Wishlist</Link>
//             <Heart size={16} />
//           </div>

//           {/* add to cart */}
//           <div>
//             <Link href={"/"}>
//               <ShoppingCart size={24} />
//             </Link>
//           </div>
//         </div>
//       </div>

//       {/* bottomdiv */}

//       <div className="w-full px-[371px] py-[19px]">
        
//           <div className="flex items-center justify-between">
//            <div className="flex gap-[88px]">
//            <Link href={"/"} className="text-[34px] leading-[34px] font-bold">
//               Hekto
//             </Link>

//             {/* navigation */}

//             <nav className="hidden md:flex items-center gap-[35px]">
//               <Link
//                 href={"/"}
//                 className="text-[#FB2E86] text-[16px] leading-[20px]"
//               >
//                 <DropdownMenu>
//                   <DropdownMenuTrigger className="flex items-center gap-1 focus:outline-none">
//                     Home
//                     <ChevronDown size={16} />
//                   </DropdownMenuTrigger>
//                   <DropdownMenuContent>
//                     <DropdownMenuItem>Urdu</DropdownMenuItem>
//                     <DropdownMenuItem>Arabic</DropdownMenuItem>
//                     <DropdownMenuItem>Hindi</DropdownMenuItem>
//                   </DropdownMenuContent>
//                 </DropdownMenu>
//               </Link>
//               <Link
//                 href={"/aboutUs"}
//                 className="text-[16px] leading-[20px] hover:text-gray-600"
//               >
//                 Pages
//               </Link>
//               <Link
//                 href={"/product"}
//                 className="text-[16px] leading-[20px] hover:text-gray-600"
//               >
//                 Products
//               </Link>
//               <Link
//                 href={"/blog"}
//                 className="text-[16px] leading-[20px] hover:text-gray-600"
//               >
//                 Blog
//               </Link>

//               <Link
//                 href={"/shop"}
//                 className="text-[16px] leading-[20px] hover:text-gray-600"
//               >
//                 Shop
//               </Link>

//               <Link
//                 href={"/contactUs"}
//                 className="text-[16px] leading-[20px] hover:text-gray-600"
//               >
//                 Contact
//               </Link>
//             </nav>

//            </div>
//             {/* search & icon */}

//             <div className="flex items-center">
//               <div className="relative hidden md:block">
//                 <Input className=" bg-white border-[1px] border-gray-300" type="Search" />

//                 <Button className="absolute bg-[#FB2E86]  top-1/2 -translate-y-1/2 ml-[185px]">
//                   <Search className="absolute  text-  [#F3F9FF]" />
//                 </Button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     // </div>
//   );
// }

// export default Header;
