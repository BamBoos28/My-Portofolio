import Sidebar from '../comp/sideBar'
import Header from '../comp/header'
import NavComp from '../comp/navComp'

export default function ({ navbar, sidebar }) {
    return (
        <div className='flex lg:flex-row flex-col-reverse h-screen'>
            <Sidebar mobile={sidebar} />
            <section className='h-full lg:w-4/5 bg-gray-200'>
                <Header text={"CONTACT"} />
                <div className='mx-9 2xl:mx-44 md:mx-24 h-3/5 font-sand flex flex-col lg:flex-row justify-center gap-3'>
                    <div className='lg:w-1/3 py-2 lg:px-16 lg:py-16 flex flex-col items-center border-2 border-gray-300 rounded-xl hover:bg-gray-300 duration-300 shadow-lg shadow-gray-300'>
                        <img className='h-12 mb-1 2xl:h-56 lg:h-44 lg:pb-12 object-contain' src="img/i-gmail.png" alt="" />
                        <h1 className='2xl:text-4xl mb-1 font-hans'>GMAIL</h1>
                        <a href=""></a>
                        <h5 className='text-lg hover:underline cursor-default xl:text-base text-sm'>wanazizakaria28@gmail.com</h5>
                    </div>
                    <div className='lg:w-1/3 py-2 lg:px-16 lg:py-16 flex flex-col items-center border-2 border-gray-300 rounded-xl hover:bg-gray-300 duration-300 shadow-lg shadow-gray-300'>
                        <img className='h-12 mb-1 2xl:h-56 lg:h-44 lg:pb-12 object-contain' src="img/i-github.png" alt="" />
                        <h1 className='2xl:text-4xl mb-1 font-hans'>GITHUB</h1>
                        <a className='text-lg hover:underline no-underline cursor-default' href="https://github.com/WanAziz" target="_blank">WanAziz</a>
                    </div>
                    <div className='lg:w-1/3 py-2 lg:px-16 lg:py-16 flex flex-col items-center border-2 border-gray-300 rounded-xl hover:bg-gray-300 duration-300 shadow-lg shadow-gray-300'>
                        <img className='h-12 mb-1 2xl:h-56 lg:h-44 lg:pb-12 object-contain' src="img/i-wa.png" alt="" />
                        <h1 className='2xl:text-4xl mb-1 font-hans'>WA</h1>
                        <a className='text-lg hover:underline no-underline cursor-default' href="https://wa.me/62895424465906" target="_blank">0895424465906</a>
                    </div>
                </div>
                <div className='flex justify-center mt-auto'>
                    <NavComp visible={navbar} />
                </div>
            </section>
        </div>
    )
}