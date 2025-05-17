import Image from 'next/image'
import React from 'react'

const ChairmanMessage = () => {
    return (
       <div className='lg:max-w-[1250px] mx-auto'>
         <div className='flex flex-col lg:flex-row items-center gap-6 lg:m-20 m-6 '>
            <div className='lg:flex-1 w-full'>
                <Image width={500} height={500} src={'/images/man2.jpg'} alt='img' className='h-[87vh] w-full object-cover rounded-xl'/>
            </div>
            <div className='lg:w-[57%]'>
                <h1 className='text-2xl font-bold'>Md Miraz Hossain Ovi</h1>
                <h3 className='text-xl text-[#1e3a8a] font-semibold pb-3'>Chairman</h3>
                <p className='text-justify pb-2'>I hope this message finds you in good health and high spirits. It is both a privilege and an honor to address you as the Chairman of Blue Sky City, a company deeply committed to shaping the future of our communities through land development and real estate.</p>
                <p  className='text-justify pb-2'> At Blue Sky City, we believe that the places we live, work, and play have a profound impact on our lives. It is our mission and responsibility to create spaces that not only stand as landmarks but also enhance the quality of life for everyone. Today, I would like to share with you our vision and commitment to building a brighter, more sustainable tomorrow.</p>
                <p  className='text-justify pb-2'> Blue Sky City envisions communities where innovation, sustainability, and inclusivity thrive. We aspire to create living spaces that are not merely structures but vibrant hubs of life, culture, and opportunity. Our vision extends beyond bricks and mortar; it encompasses the dreams and aspirations of the people who call our developments home.</p>
                <p  className='text-justify pb-2'> We are committed to transparency, integrity, and excellence in everything we do. Whether it&apos;s crafting a sustainable urban ecosystem, conserving natural resources, or fostering community engagement, we are driven by a sense of responsibility to our society and environment.</p>
                <p  className='text-justify pb-2'>Blue Sky City believes that the true measure of our success lies in the positive impact we have on the lives of the people in our communities. We actively engage in initiatives that promote education, healthcare, and social well-being. We aim to be more than a developer; we strive to be a catalyst for positive change.
                </p>
                <p  className='text-justify pb-2'>  As we move forward, we welcome your input and feedback. Your perspectives are invaluable in helping us shape the future. We encourage you to reach out to us, share your thoughts, and be part of the dialogue that drives our progress.
                </p>
                <p  className='text-justify pb-2'> In closing, I want to express my heartfelt gratitude to all of you who have placed your trust in Blue Sky City. Together, we have the power to build a future that we can all be proud of—a future where unity, progress, and prosperity prevail.</p>
                <p>Thank you for being an integral part of our journey.</p>
                <p>Warm regards,</p>
            </div>
        </div>
        <div className='flex flex-col lg:flex-row-reverse items-center gap-6 lg:m-20 m-6' id='managingDirector'>
            <div className='lg:flex-1 w-full'>
                <Image width={500} height={500} src={'/images/man3.jpg'} alt='img' className='h-[87vh] w-full object-cover rounded-xl'/>
            </div>
            <div className='lg:w-[57%]'>
                <h1 className='text-2xl font-bold'>Md Miraz Hossain Ovi</h1>
                <h3 className='text-xl text-[#1e3a8a] font-semibold pb-3'>Managing Director</h3>
                <p className='text-justify pb-2'>I hope this message finds you in good health and high spirits. It is both a privilege and an honor to address you as the Chairman of Blue Sky City, a company deeply committed to shaping the future of our communities through land development and real estate.</p>
                <p className='pb-2 text-justify'> At Blue Sky City, we believe that the places we live, work, and play have a profound impact on our lives. It is our mission and responsibility to create spaces that not only stand as landmarks but also enhance the quality of life for everyone. Today, I would like to share with you our vision and commitment to building a brighter, more sustainable tomorrow.</p>
                <p className='text-justify pb-2'> Blue Sky City envisions communities where innovation, sustainability, and inclusivity thrive. We aspire to create living spaces that are not merely structures but vibrant hubs of life, culture, and opportunity. Our vision extends beyond bricks and mortar; it encompasses the dreams and aspirations of the people who call our developments home.</p>
                <p className='text-justify pb-2'> We are committed to transparency, integrity, and excellence in everything we do. Whether it&apos;s crafting a sustainable urban ecosystem, conserving natural resources, or fostering community engagement, we are driven by a sense of responsibility to our society and environment.</p>
                <p className='text-justify pb-2'>Blue Sky City believes that the true measure of our success lies in the positive impact we have on the lives of the people in our communities. We actively engage in initiatives that promote education, healthcare, and social well-being. We aim to be more than a developer; we strive to be a catalyst for positive change.
                </p>
                <p className='text-justify pb-2'>  As we move forward, we welcome your input and feedback. Your perspectives are invaluable in helping us shape the future. We encourage you to reach out to us, share your thoughts, and be part of the dialogue that drives our progress.
                </p>
                <p className='pb-2'> In closing, I want to express my heartfelt gratitude to all of you who have placed your trust in Blue Sky City. Together, we have the power to build a future that we can all be proud of—a future where unity, progress, and prosperity prevail.</p>
                <p>Thank you for being an integral part of our journey.</p>
                <p>Warm regards,</p>
            </div>
        </div>
       </div>
    )
}

export default ChairmanMessage