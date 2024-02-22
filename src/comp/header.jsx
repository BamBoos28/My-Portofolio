export default function ({text}) {
    return (
        <div className='py-6 2xl:mx-44 md:mx-24 2xl:my-14 md:my-10 xl:h-1/5 flex justify-center items-center border border-1 border-gray-500 '>
            <h1 className={`md:text-6xl lg:text-8xl 2xl:text-9xl font-hans`}>{text}</h1>
        </div>
    )
}