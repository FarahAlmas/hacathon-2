import DiscountItem from "@/components/discountItem";
import FeaturedProducts from "@/components/featuredProducts";
import LeatestProducts from "@/components/leatestProducts";
import NewsletterAndBlog from "@/components/letters";
import Shop from "@/components/shop";
import TopCategories from "@/components/topCategories";
import Unique from "@/components/unique";


export default function Home() {
  return (
    <div>
    <Shop/>
    <FeaturedProducts/>
    <LeatestProducts/>
    <Unique/>
    {/* <TrendingProducts/> */}
    <NewsletterAndBlog/>
    <DiscountItem/>
    <TopCategories/>
    </div>
  );
}
