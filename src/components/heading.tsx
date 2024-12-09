import React from 'react'

interface head{
"text":string,
"text2":string
}


function Heading({text,text2}:head) {

  return (
    
        <div className=' w-full flex  flex-col bg-[#F6F5FF] pl-[374px]'>
         <div className=' mt-[96px] mb-[126px]'>
          <span className='text-[36px] leading-[42px] text-[#101750] font-bold'>{text}</span>
         <div className='font-medium text-[16px] leading-[19px]'>Home.Pages.<span className='text-[#FB2E86] font-medium text-[16px] leading-[19px]'>{text2}</span>
         </div>
         </div>
        </div>
      )
 
}

export default Heading

