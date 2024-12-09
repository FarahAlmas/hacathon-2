import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar } from "lucide-react";

export default function NewsletterAndBlog() {
  return (
    <div className="min-h-screen">
      {/* Newsletter Section */}
      <div className="container mx-auto px-4">
        <Image
          src={"/ractangle2.png"}
          alt="Newsletter"
          width={1440}
          height={400}
          className="w-full h-auto" // Make image responsive
        />
      </div>

      {/* Brand Logos */}
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-wrap justify-center items-center gap-8 opacity-50">
          <Image
            src="/brandlogo.png"
            alt="Brand Logo"
            width={904}
            height={93}
            className="w-auto max-w-full grayscale" // Ensure responsiveness for the logo
          />
        </div>
      </div>

      {/* Latest Blog Section */}
      <section className="py-16">
        <h2 className="text-[#151875] text-3xl md:text-4xl font-josefin text-center mb-12">
          Latest Blog
        </h2>
        <div className="container mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {[...Array(3)].map((item, index) => (
            <Card key={index} className="overflow-hidden shadow-lg">
              <div className="bg-[#E7E4F8] h-60 relative">
                <Image
                  src="/brandlogo.png"
                  alt="Blog"
                  layout="fill"
              objectFit="cover"
                />
              </div>
              <CardContent className="p-6">
                <div className="flex items-center gap-4 text-sm mb-4">
                  <span className="text-[#FB2E86]">SaberAli</span>
                  <div className="flex items-center gap-1 text-[#151875]">
                    <Calendar className="w-4 h-4" />
                    <span>21 August, 2020</span>
                  </div>
                </div>
                <h3 className="text-[#151875] text-lg font-semibold mb-4">
                  Top essential Trends in 2021
                </h3>
                <p className="text-[#72718F] mb-4">
                  More off this less hello samlande lied much over tightly circa
                  horse taped mightly
                </p>
                <a href="#" className="text-[#151875] underline">
                  Read More
                </a>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}
