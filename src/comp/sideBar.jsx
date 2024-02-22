import { NavLink } from "react-router-dom"

export default function () {
    return (
        <aside className='mt-auto bg-white h-44 w-full flex xl:flex-col  xl:w-1/5 xl:h-screen cursor-default shadow-2xl shadow-gray-500 z-10'>
            <img src="img/user.png" className="bg-white h-36 xl:h-2/6 h-full object-cover xl:object-contain" alt="" />
            <div className="xl:h-2/3 w-full flex xl:flex-col items-center justify-around xl:justify-center text-center font-sand xl:text-xl 2xl:text-3xl bg-yellow-300 font-semibold">
                <NavLink to={'/'} className={({ isActive}) =>
                    isActive ? "text-white" : "hover:text-white duration-300"
                }>
                    <h1 className="w-max 2xl:py-2 my-5">HOME</h1>
                </NavLink>
                <NavLink to={'/about'} className={({ isActive}) =>
                    isActive ? "text-white" : "hover:text-white duration-300"
                }>
                    <h1 className="w-max 2xl:py-2 my-5">ABOUT ME</h1>
                </NavLink>
                <NavLink to={'/skill'} className={({ isActive}) =>
                    isActive ? "text-white" : "hover:text-white duration-300"
                }>
                    <h1 className="w-max 2xl:py-2 my-5">SKILL</h1>
                </NavLink>
                <NavLink to={'/project'} className={({ isActive}) =>
                    isActive ? "text-white" : "hover:text-white duration-300"
                }>
                    <h1 className="w-max 2xl:py-2 my-5">PROJECT</h1>
                </NavLink>
                <NavLink to={'/experience'} className={({ isActive}) =>
                    isActive ? "text-white" : "hover:text-white duration-300"
                }>
                    <h1 className="w-max 2xl:py-2 my-5">EXPERIENCE</h1>
                </NavLink>
                <NavLink to={'/contact'} className={({ isActive}) =>
                    isActive ? "text-white" : "hover:text-white duration-300"
                }>
                    <h1 className="w-max 2xl:py-2 my-5">CONTACT</h1>
                </NavLink>
            </div>
        </aside>
    )
}