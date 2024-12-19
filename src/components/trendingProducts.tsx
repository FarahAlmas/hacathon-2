import React from 'react'
import TrendingCard from './trendingCard'
import { TrendingCards } from '@/constant/trendingCard'
import Image from 'next/image'
import { Card } from './ui/card'

export default function TrendingProducts() {
  return (
    <section className='w-full  mt-[132px] mb-[126px]'>
    {/* heading */}
    <div className="container mx-auto  text-center mb-[39px] ">
      <h1 className='text-[24px] lg:text-[42px] font-bold text-[#1A0B5B] font-josefin-sans'>Trending Products</h1>
    </div>
        
         {/* card div */}
     <div className="w-[1167px] mx-auto mb-[53px]  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[29px] items-center">
  
    <TrendingCard loop={TrendingCards}/>
  
    </div>
    <div className='w-full px-[374px] mt-[39px] flex gap-[29px] '>
        <Card className='h-[270px] w-[420px] flex flex-col  pt-[34px] pl-[25px] bg-[#FFF6FB]'>
          <h1 className="text-[26px] leading-[26px] text-[#151875]">23% off in all products</h1>
         
          <p className="text-[#FB2E86] text-[16px]">Shop Now</p>
          <div className="pl-[201px] top-0">
         <Image src="/trendingpro5.png" alt="pic" width={213} height={207} className=''></Image></div>
        </Card>

        <Card className='h-[270px] w-[420px] flex flex-col  pt-[34px] pl-[25px] bg-[#EEEFFB]'>
          <h1 className="text-[26px] leading-[26px] text-[#151875]">23% off in all products</h1>
         
          <p className="text-[#FB2E86] text-[16px]">Shop Now</p>
          <div className="pl-[102px]">
         <Image src="/trendingpro6.png" alt="pic" width={312} height={173} className=''></Image></div>
        </Card>

        <div className='h-[270px] w-[267px]  flex flex-col gap-[20px]'>


        <div className='h-[74px] w-[267px]  flex justify-between items-center ml-0'>
           <Image src="/image 30.png" alt="pic" width={67} height={67} className="bg-[#EEEFFB]"/>
             <div>
              <h1>Executive Seat chair</h1>
              <p>$32.00</p>
            </div>
            </div>

            
        <div className='h-[74px] w-[267px]  flex justify-between items-center ml-0'>
           <Image src="/image 19.png" alt="pic" width={67} height={67} className="bg-[#EEEFFB]"/>
             <div>
              <h1>Executive Seat chair</h1>
              <p>$32.00</p>
            </div>
            </div>


            <div className='h-[74px] w-[267px]  flex justify-between items-center ml-0'>
           <Image src="/image 28.png" alt="pic" width={67} height={67} className="bg-[#EEEFFB]"/>
             <div>
              <h1>Executive Seat chair</h1>
              <p>$32.00</p>
            </div>
            </div>




            

           
        </div>

    </div>


      </section>
   
  )
}


