import Sidebar from "../comp/sideBar"
import NavComp from '../comp/navComp'
import Header from "../comp/header"

export default function ({ navbar, sidebar }) {
    return (
        <div className='flex lg:flex-row flex-col-reverse h-screen'>
            <Sidebar mobile={sidebar} />
            <section className='h-full lg:w-4/5 bg-gray-200'>
                <Header text={"PROJECT"} />
                <div className='py-3 px-44 h-2/3 font-sand'>

                </div>
                <div className='flex justify-center mt-auto'>
                    <NavComp visible={navbar} />
                </div>
            </section>
        </div>
    )
}