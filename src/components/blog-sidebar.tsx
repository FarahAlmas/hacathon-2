import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import Image from 'next/image'
import { Facebook, Twitter, Instagram } from 'lucide-react'

export function BlogSidebar() {
  return (
    <aside className="space-y-12">
      <div>
        <h3 className="text-xl font-bold text-[#151875] mb-4">Search</h3>
        <div className="relative">
          <Input placeholder="Search For Posts" className="w-full" />
          <Button variant="ghost" className="absolute right-0 top-0">
            <span className="sr-only">Search</span>
            🔍
          </Button>
        </div>
      </div>

      <div>
        <h3 className="text-xl font-bold text-[#151875] mb-4">Categories</h3>
        <div className="grid grid-cols-2 gap-4">
          {["Hobbies", "Women", "Women", "Women", "Women", "Women"].map((category, i) => (
            <Button
              key={i}
              variant={i === 0 ? "default" : "outline"}
              className={i === 0 ? "bg-[#F939BF]" : ""}
            >
              {category} (21)
            </Button>
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-xl font-bold text-[#151875] mb-4">Recent Post</h3>
        <div className="space-y-4">
          {[1, 2, 3, 4].map((post) => (
            <div key={post} className="flex gap-4">
              
              <Image src={"/Rectangle3.png"}  alt="product" width={70} height={50}/>
              
              <div>
                <h4 className="text-sm text-[#3F509E]">It is a long established fact</h4>
                <p className="text-xs text-[#8A8FB9]">Aug 09 2020</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-xl font-bold text-[#151875] mb-4">Sale Product</h3>
        {/* Similar product grid structure */}
      </div>

      <div>
        <h3 className="text-xl font-bold text-[#151875] mb-4">Follow</h3>
        <div className="flex gap-4">
          <Button size="icon" className="rounded-full bg-[#151875]">
            <Facebook className="h-4 w-4" />
          </Button>
          <Button size="icon" className="rounded-full bg-[#151875]">
            <Instagram className="h-4 w-4" />
          </Button>
          <Button size="icon" className="rounded-full bg-[#151875]">
            <Twitter className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </aside>
  )
}

