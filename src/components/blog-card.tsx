import Image from "next/image"
import Link from "next/link"
import { CalendarIcon, Pen } from 'lucide-react'

interface BlogCardProps {
  image: string
  title: string
  excerpt: string
  author: string
  date: string
}

export function BlogCard({ image, title, excerpt, author, date }: BlogCardProps) {
  return (
    <article className="mb-16">
      <Image
        src={image}
        alt={title}
        width={870}
        height={453}
        className="rounded-lg mb-6"
      />
      <div className="flex gap-4 mb-4">
        <div className="flex items-center gap-2 bg-[#FFE7F9] px-4 py-1 rounded">
          <Pen className="h-4 w-4 text-[#FB2E86]" />
          <span className="text-sm text-[#151875]">{author}</span>
        </div>
        <div className="flex items-center gap-2 bg-[#FFECE2] px-4 py-1 rounded">
          <CalendarIcon className="h-4 w-4 text-[#FFA454]" />
          <span className="text-sm text-[#151875]">{date}</span>
        </div>
      </div>
      <h2 className="text-2xl font-bold text-[#151875] mb-4">{title}</h2>
      <p className="text-[#8A8FB9] mb-4">{excerpt}</p>
      <Link 
        href="#" 
        className="text-[#151875] font-semibold inline-flex items-center"
      >
        Read More
        <span className="ml-2 w-2 h-2 rounded-full bg-[#FB2E86]" />
      </Link>
    </article>
  )
}

