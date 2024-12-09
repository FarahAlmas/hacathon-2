import React from 'react'
import Image from 'next/image'
import { Card } from './ui/card'


function LeatestProducts() {
  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className="text-[#151875] text-[32px] md:text-[42px] leading-[40px] md:leading-[49px] mt-[50px] md:mt-[71px]">
        LeatestProducts
      </h1>

      {/* Navigation Tabs */}
      <div className="mt-[19px]">
        <ul className="flex flex-wrap gap-4 md:gap-[58px] justify-center">
          <li className="text-[#FB2E86] text-[16px] md:text-[18px] leading-[21px] relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-full after:bg-[#FB2E86]">
            New Arrival
          </li>
          <li className="text-[#151875] text-[16px] md:text-[18px] leading-[21px]">
            Best Seller
          </li>
          <li className="text-[#151875] text-[16px] md:text-[18px] leading-[21px]">
            Featured
          </li>
          <li className="text-[#151875] text-[16px] md:text-[18px] leading-[21px]">
            Special Offer
          </li>
        </ul>
      </div>

      {/* Product Cards */}
      <div className="w-full flex items-center justify-center my-[40px] md:my-[58px]">
        <div className="w-full max-w-screen-lg grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-4 md:gap-x-[37px] gap-y-8 md:gap-y-[120px] px-4">
          <Image src={"/2nd-1.png"} alt={"img"} width={360} height={306} />
          <Image src={"/2nd-2.png"} alt={"img"} width={360} height={306} />
          <Image src={"/2nd-3.png"} alt={"img"} width={360} height={306} />
          <Image src={"/2nd-4.png"} alt={"img"} width={360} height={306} />
          <Image src={"/2nd-5.png"} alt={"img"} width={360} height={306} />
          <Image src={"/2nd-6.png"} alt={"img"} width={360} height={306} />
        </div>
      </div>

      {/* Shopex Offer Section */}
      <h1 className="text-[#151875] text-[32px] md:text-[42px] leading-[40px] md:leading-[49px] mt-[50px] md:mt-[71px]">
        What Shopex Offer!
      </h1>
      <div className="w-full mt-[40px] md:mt-[55px] mb-[70px] md:mb-[135px]">
        <div className="w-full max-w-screen-lg m-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-[28px] px-4">
          <Card className="w-full max-w-xs h-auto px-4 py-6 flex flex-col justify-center items-center">
            <Image src={"/g-1.png"} alt={"img"} width={65} height={65} />
            <h1 className="text-[20px] md:text-[22px] leading-[25px] text-[#151875] mb-[15px]">
              24/7 Support
            </h1>
            <p className="text-[14px] md:text-[16px] leading-[25px] text-center">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa
              purus gravida.
            </p>
          </Card>

          <Card className="w-full max-w-xs h-auto px-4 py-6 flex flex-col justify-center items-center text-center">
            <Image src={"/g-2.png"} alt={"img"} width={65} height={65} />
            <h1 className="text-[20px] md:text-[22px] leading-[25px] text-[#151875] mb-[15px]">
              Secure Payment
            </h1>
            <p className="text-[14px] md:text-[16px] leading-[25px] text-center">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa
              purus gravida.
            </p>
          </Card>

          <Card className="w-full max-w-xs h-auto px-4 py-6 flex flex-col justify-center items-center text-center">
            <Image src={"/g-3.png"} alt={"img"} width={65} height={65} />
            <h1 className="text-[20px] md:text-[22px] leading-[25px] text-[#151875] mb-[15px]">
              Free Delivery
            </h1>
            <p className="text-[14px] md:text-[16px] leading-[25px] text-center">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa
              purus gravida.
            </p>
          </Card>

          <Card className="w-full max-w-xs h-auto px-4 py-6 flex flex-col justify-center items-center text-center">
            <Image src={"/g-4.png"} alt={"img"} width={65} height={65} />
            <h1 className="text-[20px] md:text-[22px] leading-[25px] text-[#151875] mb-[15px]">
              Easy Returns
            </h1>
            <p className="text-[14px] md:text-[16px] leading-[25px] text-center">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa
              purus gravida.
            </p>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default LeatestProducts;