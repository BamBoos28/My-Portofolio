import Sidebar from "../comp/sideBar"
import NavComp from '../comp/navComp'
import Header from "../comp/header"

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';

export default function ({ navbar, sidebar }) {
    return (
        <div className='flex lg:flex-row flex-col-reverse h-screen'>
            <Sidebar mobile={sidebar} />
            <section className='h-full lg:w-4/5 bg-gray-200'>
                <Header text={"PROJECT"} />
                <div className='md:mx-24 mx-9 2xl:mx-44 h-2/3 font-sand'>
                    <Swiper
                        slidesPerView={1}
                        spaceBetween={10}
                        pagination={{
                            clickable: true,
                        }}
                        breakpoints={{
                            1024: {
                                slidesPerView: 2,
                                spaceBetween: 50,
                            },
                        }}
                        modules={[Pagination]}
                        className="mySwiper"
                    >
                        <SwiperSlide>
                            <h1 className="text-6xl font-hans py-16 border-b-4 border-yellow-300"><a href="https://github.com/WanAziz/Chatapp" target="_blank">CHAT APP</a></h1>
                            <ul>
                                <li className="py-3 border-b-2 border-gray-300 text-2xl">Node.js</li>
                                <li className="py-3 border-b-2 border-gray-300 text-2xl">Socket.IO</li>
                                <li className="py-3 border-b-2 border-gray-300 text-2xl">Express.js</li>
                                <li className="py-3 border-b-2 border-gray-300 text-2xl">SQL</li>
                                <li className="py-3 border-b-2 border-gray-300 text-2xl">React.js</li>
                                <li className="py-3 border-b-2 border-gray-300 text-2xl">Tailwind CSS</li>
                            </ul>
                        </SwiperSlide>
                        <SwiperSlide>
                            <h1 className="text-6xl font-hans py-16 border-b-4 border-yellow-300"><a href="https://github.com/WanAziz/My-Portofolio" target="_blank">PORTOFOLIO</a></h1>
                            <ul>
                                <li className="py-3 border-b-2 border-gray-300 text-2xl">React.js</li>
                                <li className="py-3 border-b-2 border-gray-300 text-2xl">Tailwind CSS</li>
                                <li className="py-3 border-b-2 border-gray-300 text-2xl">Swiper.js</li>
                            </ul>
                        </SwiperSlide>
                        <SwiperSlide>
                            <h1 className="text-6xl font-hans py-16 border-b-4 border-yellow-300"><a href="https://github.com/WanAziz/My-Portofolio" target="_blank">WEB STORE</a></h1>
                            <ul>
                                <li className="py-3 border-b-2 border-gray-300 text-2xl">React.js</li>
                                <li className="py-3 border-b-2 border-gray-300 text-2xl">Tailwind CSS</li>
                                <li className="py-3 border-b-2 border-gray-300 text-2xl">Swiper.js</li>
                                <li className="py-3 border-b-2 border-gray-300 text-2xl">daisyUI</li>
                            </ul>
                        </SwiperSlide>
                        <SwiperSlide>
                            <h1 className="text-6xl font-hans py-16 border-b-4 border-yellow-300"><a href="https://github.com/WanAziz/api-belajar-hapi" target="_blank">REST API</a></h1>
                            <ul>
                                <li className="py-3 border-b-2 border-gray-300 text-2xl">Node.js</li>
                                <li className="py-3 border-b-2 border-gray-300 text-2xl">Hapi.js</li>
                            </ul>
                        </SwiperSlide>
                        <SwiperSlide>
                            <h1 className="text-6xl font-hans py-16 border-b-4 border-yellow-300"><a href="https://github.com/WanAziz/api-belajar-express" target="_blank">REST API</a></h1>
                            <ul>
                                <li className="py-3 border-b-2 border-gray-300 text-2xl">Node.js</li>
                                <li className="py-3 border-b-2 border-gray-300 text-2xl">Express.js</li>
                            </ul>
                        </SwiperSlide>
                        <SwiperSlide>
                            <h1 className="text-6xl font-hans py-16 border-b-4 border-yellow-300"><a href="https://github.com/WanAziz/Restoran_menu" target="_blank">RESTAURANT MENU</a></h1>
                            <ul>
                                <li className="py-3 border-b-2 border-gray-300 text-2xl">Java</li>
                            </ul>
                        </SwiperSlide>
                    </Swiper>
                </div>
                <div className='flex justify-center mt-auto'>
                    <NavComp visible={navbar} />
                </div>
            </section>
        </div>
    )
}