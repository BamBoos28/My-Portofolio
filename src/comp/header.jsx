export default function ({text}) {
    return (
        <div className='md:py-6 py-3 mx-9 my-6 2xl:mx-44 md:mx-24 2xl:my-14 md:my-10 xl:h-1/5 flex justify-center items-center border border-1 border-gray-500 '>
            <h1 className={`text-3xl md:text-5xl lg:text-7xl 2xl:text-9xl font-hans`}>{text}</h1>
        </div>
    )
}