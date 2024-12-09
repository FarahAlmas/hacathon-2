import React from 'react'
import Image from 'next/image'
import {Flash_Card } from '@/constant/flashCard'
import { Button } from './ui/button'
import { Card } from './ui/card'
import { Heart, SearchX, ShoppingCart } from 'lucide-react'








function FeaturedProducts() {
  return (
    <div className="w-full flex flex-col justify-center items-center pt-32 lg:pt-[129px]">
      <h1 className="text-2xl lg:text-[42px] lg:leading-[49px] text-[#1A0B5B]">
        Featured Products
      </h1>

      <div className="w-full lg:w-[1167px] flex flex-wrap justify-center items-center gap-6 lg:gap-[29px] mt-12 lg:mt-[48px] mb-12 lg:mb-[53px]">
        {Flash_Card.map((item, index) => {
          return (
            <Card
              className="w-[90%] sm:w-[270px] h-full overflow-hidden grow-0 shrink-0 relative"
              key={index}
            >
              {/* top img */}
              <div className="w-full h-[200px] sm:h-[250px] bg-[#f5f5f5] p-3 flex justify-center items-center relative">
                <Image
                  src={item.src}
                  alt="img"
                  width={172}
                  height={152}
                ></Image>
               
                <div className={`${item.view2 == true ?'w-[94px] h-[29px] bg-[#08D15F] absolute mt-[198px] left-[95px] flex justify-center items-center':"hidden"}`}><button className='text-[12px] leading-[12px] text-white '>{item.view}</button></div>
                


                {/* -------badge-------- */}
                {item.discountBtn && (
                  <button className="bg-[#db4444] py-1 px-3 absolute top-3 left-3 text-white">
                    -{item.discountPrice}%
                  </button>
                )}

                {/* -------------------icon div------------- */}
                <div className="absolute top-3 left-3 flex  gap-2">
                  {/* ---trash---------- */}
                  {item.ShoppingCart && (
                    <Button
                      size={"icon"}
                      variant={"outline"}
                      className="rounded-full w-[34px] h-[34px]"
                    >
                      <ShoppingCart size={30} />
                    </Button>
                  )}

                  {item.heartIcon && (
                    <Button
                      size={"icon"}
                      variant={"outline"}
                      className="rounded-full w-[34px] h-[34px]"
                    >
                      <Heart size={30} />
                    </Button>
                  )}

                  {item.SearchX  && (
                    <Button
                      size={"icon"}
                      variant={"outline"}
                      className="rounded-full w-[34px] h-[34px]"
                    >
                      <SearchX size={30} />
                    </Button>
                  )}
                </div>
              </div>

              {/* ------bottom content------- */}
              <div className="w-full flex flex-col justify-center items-center gap-2 text-sm lg:text-[16px] lg:leading-[24px] font-medium pl-[3px]">
                <p className="mt-[10px] text-[#FB2E86] font-bold text-[14px] lg:text-[18px] leading-[21px]">
                  {item.Heading}
                </p>
                <div className="flex gap-1 lg:gap-[5px]">
                  <div className="w-3 h-1 lg:w-[14px] lg:h-[4px] bg-[#05E6B7]"></div>
                  <div className="w-3 h-1 lg:w-[14px] lg:h-[4px] bg-[#F701A8]"></div>
                  <div className="w-3 h-1 lg:w-[14px] lg:h-[4px] bg-[#00009D]"></div>
                </div>
                <p>{item.code}</p>
                <div className="flex gap-3">
                  <span className="text-[#151875]">${item.price}</span>
                </div>
              </div>
            </Card>
          );
        })}
      </div>
    </div>
  );
}

export default FeaturedProducts