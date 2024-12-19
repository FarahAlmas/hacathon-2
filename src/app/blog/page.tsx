
import { BlogCard } from "@/components/blog-card"
import { BlogSidebar } from "@/components/blog-sidebar"
import Heading from "@/components/heading"
import Image from 'next/image'

export default function BlogPage() {
 

  const posts = [
    {
      image: "/blog-1 (2).png",
      title: "It is a long established fact that a reader will...",
      excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit facilisis quis auctor pretium ipsum, eu rutrum. Condimentum eu malesuada vitae ultrices in in neque, porta dignissim. Adipiscing purus, cursus vulputate id id dictum at.",
      author: "Surf Auxion",
      date: "Aug 09 2020"
    },
    {
      image: "/blog-1 (3).png",
      title: "It is a long established fact that a reader will...",
      excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit facilisis quis auctor pretium ipsum, eu rutrum. Condimentum eu malesuada vitae ultrices in in neque, porta dignissim. Adipiscing purus, cursus vulputate id id dictum at.",
      author: "Surf Auxion",
      date: "Aug 09 2020"
    },
    {
      image: "/blog-1 (1).png",
      title: "It is a long established fact that a reader will...",
      excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit facilisis quis auctor pretium ipsum, eu rutrum. Condimentum eu malesuada vitae ultrices in in neque, porta dignissim. Adipiscing purus, cursus vulputate id id dictum at.",
      author: "Surf Auxion",
      date: "Aug 09 2020"
    },
    // Add more posts as needed
  ]

  return (
    <>
      <Heading text={"Blog Page"} text2={"Blog Page"}/>
      <main className="container mx-auto py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            {posts.map((post, i) => (
              <BlogCard key={i} {...post} />
            ))}
          </div>
          <BlogSidebar />
          
        </div>
        <Image src={"/brandlogo.png"} alt={"brandlogo"}  width={904} height={93} className="mt-[234px] mb-[132px] m-auto"/>
      </main>
    </>
  )
}

