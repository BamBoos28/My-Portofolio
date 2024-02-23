import Sidebar from '../comp/sideBar'
import NavComp from '../comp/navComp'
import Header from '../comp/header'

export default function ({navbar , sidebar}) {
    return (
        <div className='flex lg:flex-row flex-col-reverse h-screen'>
            <Sidebar mobile={sidebar} />
            <section className='h-full lg:w-4/5 bg-gray-200'>
                <Header text={"SKILL"} />
                <div className='flex mx-9 md:mx-24 2xl:mx-44 h-2/3 my-3'>
                    <div className='w-full gap-4 grid grid-rows-2 grid-flow-col text-white font-hans text-xs md:text-xl 2xl:text-3xl'>
                        <div className=' rounded pb-6 shadow-md shadow-gray-400 flex flex-col justify-center items-center bg-gray-300 hover:bg-gray-800 duration-300'>
                            <img className='h-16 md:h-32 2xl:h-40 my-6 object-contain' src="img/i-html.png" alt="" />
                            <h1 className=''>HTML CSS JS</h1>
                        </div>
                        <div className=' rounded pb-6 shadow-md shadow-gray-400 flex flex-col justify-center items-center bg-gray-300 hover:bg-gray-800 duration-300'>
                            <img className='h-16 md:h-32 2xl:h-40 my-6 object-contain' src="img/i-sql.png" alt="" />
                            <h1 className=''>SQL</h1>
                        </div>
                        <div className=' rounded pb-6 shadow-md shadow-gray-400 flex flex-col justify-center items-center bg-gray-300 hover:bg-gray-800 duration-300'>
                            <img className='h-16 md:h-32 2xl:h-40 my-6 object-contain' src="img/i-react.png" alt="" />
                            <h1 className=''>React.js</h1>
                        </div>
                        <div className=' rounded pb-6 shadow-md shadow-gray-400 flex flex-col justify-center items-center bg-gray-300 hover:bg-gray-800 duration-300'>
                            <img className='h-16 md:h-32 2xl:h-40 my-6 object-contain' src="img/i-java.png" alt="" />
                            <h1 className=''>Java</h1>
                        </div>
                        <div className=' rounded pb-6 shadow-md shadow-gray-400 flex flex-col justify-center items-center bg-gray-300 hover:bg-gray-800 duration-300'>
                            <img className='h-16 md:h-32 2xl:h-40 my-6 object-contain' src="img/i-node.png" alt="" />
                            <h1 className=''>Node.js</h1>
                        </div>
                        <div className=' rounded pb-6 shadow-md shadow-gray-400 flex flex-col justify-center items-center bg-gray-300 hover:bg-gray-800 duration-300'>
                            <img className='h-16 md:h-32 2xl:h-40 mb-6 object-contain' src="img/i-lua.png" alt="" />
                            <h1 className=''>Lua</h1>
                        </div>
                    </div>
                </div>
                <div className='flex justify-center mt-auto'>
                    <NavComp visible={navbar} />
                </div>
            </section>
        </div>
    )
}