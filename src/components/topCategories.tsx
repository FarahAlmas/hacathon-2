import React from 'react'
import Image from 'next/image'
import { Card } from './ui/card'
function TopCategories() {
  return (

<div className="w-full px-4 sm:px-6 lg:px-[374px] mb-[178px]">
  {/* Title */}
  <h1 className="flex justify-center items-center text-[#151875] text-[28px] sm:text-[36px] lg:text-[42px] leading-[36px] sm:leading-[42px] lg:leading-[49px] text-center">
    Top Categories
  </h1>

  {/* Categories Grid */}
  <div className="w-full mt-[56px]">
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-[39px]">
      {/* Cards */}
      <Card>
        <Image src={"/a-1.png"} alt={"pic"} width={269} height={345} />
      </Card>
      <Card>
        <Image src={"/a-2.png"} alt={"pic"} width={269} height={345} />
      </Card>
      <Card>
        <Image src={"/a-3.png"} alt={"pic"} width={269} height={345} />
      </Card>
      <Card>
        <Image src={"/a-1.png"} alt={"pic"} width={269} height={345} />
      </Card>
    </div>
  </div>
</div>
  )
}
export default TopCategories
