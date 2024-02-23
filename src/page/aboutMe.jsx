import Sidebar from '../comp/sideBar'
import Header from '../comp/header'
import NavComp from '../comp/navComp'

export default function ({navbar , sidebar}) {
    return (
        <div className='flex lg:flex-row flex-col-reverse h-screen'>
            <Sidebar mobile={sidebar} />
            <section className='h-full lg:w-4/5 bg-gray-200'>
                <Header text={"ABOUT ME"} />
                <div className='md:mx-24 mx-9 2xl:mx-44 h-2/3 font-sand'>
                    <h1 className='md:text-2xl xl:text-4xl mb-2'>I'm <strong className='font-hans'>Wan Aziz,</strong> Play Hard Work Hard</h1>
                    <p className='mb-6 text-xs xl:text-lg'>Saya merupakan mahasiswa sistem informasi dengan kegigihan untuk terus berkembang sesuai
                        perkembangan teknologi dengan harapan untuk menciptakan sistem yang cepat dan efisien.
                        Selain itu saya memiliki cara berkomunikasi yang baik dan kemampuan berfikir keritis dalam
                        menyelesaikan masalah.
                    </p>
                    <div className='flex flex-col md:flex-row h-3/5'>
                        <div className='h-3/5 md:h-auto md:w-2/3 grid grid-rows-2 grid-flow-col bg-gray-400 text-white text-sm xl:text-3xl 2xl:text-5xl font-hans'>
                            <div className='border border-1 border-white flex justify-center items-center hover:bg-gray-800 duration-300'>NGEGAME</div>
                            <div className='border border-1 border-white flex justify-center items-center hover:bg-gray-800 duration-300'>NGODING</div>
                            <div className='border border-1 border-white flex justify-center items-center hover:bg-gray-800 duration-300'>SEPAK BOLA</div>
                            <div className='border border-1 border-white flex justify-center items-center hover:bg-gray-800 duration-300'>BUKUTANGKIS</div>
                        </div>
                        <div className='mt-6 md:mt-0 md:w-1/3 flex md:flex-col text-sm flex-row lg:text-2xl xl:text-4xl gap-3'>
                            <div className='flex items-center md:h-1/3'>
                                <i className="fi mr-1 md:mr-3 md:ml-6 fi-rr-users-alt"></i>
                                <h1>Team Work</h1>
                            </div>
                            <div className='flex items-center md:h-1/3'>
                                <i className="fi mr-1 md:mr-3 md:ml-6 fi-rr-comment-question"></i>
                                <h1>Problem Solving </h1>
                            </div>
                            <div className='flex items-center md:h-1/3'>
                                <i className="fi mr-1 md:mr-3 md:ml-6 fi-rr-calendar-clock"></i>
                                <h1>Objective </h1>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='flex justify-center'>
                    <NavComp visible={navbar} />
                </div>
            </section>
        </div>
    )
}