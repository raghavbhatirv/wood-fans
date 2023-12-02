import { useState } from "react";
import styles from "./Navbar.module.css";
import logo from "../../../assets/logo.svg";

const Navbar = () => {
    const [search, setSearch] = useState("")
    const [isMobileMenuActive, setMobileMenuActive] = useState(false);
    const toggleMobileMenu = () => {
        setMobileMenuActive(!isMobileMenuActive);
    };

    const searchData = () => {

    }
    const toHome = () => {

    }

    return (
        <div>
            <div id={styles["navbar-id"]} className="max-sm:bg-gray-200">
                <div className="mx-auto w-11/12 flex items-center">
                    <div onClick={toHome} className="w-1/12 ">
                        <img className="w-12" src={logo}></img>
                    </div>
                    <div className="w-11/12">
                        <div className="w-full">
                            <div className="flex justify-between items-center">
                                <div>
                                    <ul className="list-none flex max-lg:hidden">
                                        <a href="#"><li className="px-4 py-2 text-base uppercase hover:text-primary-yellow">About Productions</li></a>
                                        <a href="#"><li className="px-4 py-2 text-base uppercase hover:text-primary-yellow">Shipping & Payment</li></a>
                                        <a href="#"><li className="px-4 py-2 text-base uppercase hover:text-primary-yellow" >blog</li></a>
                                        <a href="#"><li className="px-4 py-2 text-base uppercase hover:text-primary-yellow">Portfolio</li></a>
                                        <a href="#"><li className="px-4 py-2 text-base uppercase hover:text-primary-yellow">Contacts</li></a>
                                    </ul>
                                </div>
                                <div className="flex justify-between items-center gap-3.5">
                                    <div className="border border-solid border-gray-200 rounded-md max-xl:hidden p-1.5 bg-white flex items-center">
                                        <input onChange={(e) => { setSearch(e.target.value) }} className="w-32 focus:outline-none rounded-md text-xs" type="text " placeholder="Search Products"></input>
                                        <a onClick={searchData} href="#"><i class="fa-solid fa-magnifying-glass"></i></a>
                                    </div>
                                    <div className="max-sm:hidden">
                                        <a href="#"><p className="text-sm font-bold max-sm:text-base">Login/SignUp</p></a>
                                    </div>
                                    <div className="flex items-center justify-between gap-5">
                                        <div className="relative">
                                            <a href="#"><i className="fa-solid fa-bag-shopping max-sm:text-3xl text-3xl"></i></a>
                                        </div>
                                        <div className="lg:hidden">
                                            {isMobileMenuActive ? <a onClick={toggleMobileMenu} ><i className="fa-solid fa-xmark text-3xl"></i></a> : <a onClick={toggleMobileMenu} ><i className="fa-solid fa-bars text-3xl"></i></a>}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="w-full pt-5 max-sm:hidden">
                            <div className="flex justify-between items-center">
                                <div className=" max-lg:invisible">
                                    <ul className="list-none flex">
                                        <a href="#"><li className="px-4 py-2 text-base hover:opacity-50">Sofa's</li></a>
                                        <a href="#"><li className="px-4 py-2 text-base hover:opacity-50">Beds</li></a>
                                        <a href="#"><li className="px-4 py-2 text-base hover:opacity-50">Children furniture</li></a>
                                        <a href="#"><li className="px-4 py-2 text-base hover:opacity-50">Chairs</li></a>
                                        <a href="#"><li className="px-4 py-2 text-base hover:opacity-50">Standards</li></a>
                                    </ul>
                                </div>
                                <div className="text-right">
                                    <p className=" font-bold text-sm">+7 (926) 787-11-00</p>
                                    <p className="text-sm" >Modern Furniture factory</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={`${isMobileMenuActive ? styles.mobileMenu_active : styles.mobile_menu} hidden max-lg:block`} >
                <div className="p-4">
                    <div>
                        <ul className="list-none">
                            <a href="#"><li className="px-4 py-2 uppercase text-white text-2xl">Sofa's</li></a>
                            <a href="#"><li className="px-4 py-2 uppercase  text-white text-2xl">Beds</li></a>
                            <a href="#"><li className="px-4 py-2 uppercase  text-white text-2xl">Children furniture</li></a>
                            <a href="#"><li className="px-4 py-2 uppercase  text-white text-2xl">Chairs</li></a>
                            <a href="#"><li className="px-4 py-2 uppercase  text-white text-2xl">Standards</li></a>
                        </ul>
                        <ul className="list-none">
                            <a href="#"><li className="px-4 py-2 font-medium text-sm">Shipping & Payment</li></a>
                            <a href="#"><li className="px-4 py-2 font-medium text-sm">About Productions</li></a>
                            <a href="#"><li className="px-4 py-2 font-medium text-sm">Blog</li></a>
                            <a href="#"><li className="px-4 py-2 font-medium text-sm">Portfolio</li></a>
                            <a href="#"><li className="px-4 py-2 font-medium text-sm">Contacts</li></a>
                        </ul>
                    </div>
                    <div>

                    </div>
                    <div className="text-center py-3">
                        <p className="font-bold text-lg text-white">+7 (926) 787-11-00</p>
                        <p className="text-lg text-gray italic" >Modern Furniture factory</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Navbar;