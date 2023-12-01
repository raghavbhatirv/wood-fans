import { useState } from "react";
import styles from "./Navbar.module.css";

const Navbar = () => {
    const [search, setSearch] = useState("")
    return (
        <div id={styles["navbar-id"]}>
            <div class="mx-auto w-9/12 flex items-center">
                <div class="w-1/12 ">
                    <img class="w-12" src="https://wood-fans-team.vercel.app/assets/Logo-dac3bcb4.svg"></img>
                </div>
                <div class="w-11/12">
                    <div class="w-full">
                        <div class="flex justify-between items-center">
                            <ul class="list-none  w-8/12 flex">
                                <a href="#"><li class="px-4 py-2 text-sm">Shipping & Payment</li></a>
                                <a href="#"><li class="px-4 py-2 text-sm">About Productions</li></a>
                                <a href="#"><li class="px-4 py-2 text-sm">blog</li></a>
                                <a href="#"><li class="px-4 py-2 text-sm">Portfolio</li></a>
                                <a href="#"><li class="px-4 py-2 text-sm">Contacts</li></a>
                            </ul>
                            <div class="flex justify-between items-center w-4/12">
                                <div>
                                    <input onChange={(e) => { setSearch(e.target.value) }} class="border border-solid border-gray-200 p-2 rounded-md w-36 h-9 focus:outline-none" type="text " placeholder="Search"></input>
                                </div>
                                <div>
                                    <a href="#"><p class="text-sm font-bold ">Login/SignUp</p></a>
                                </div>
                                <div>

                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="w-full pt-5">
                        <div class="flex items-center justify-between">
                            <ul class="list-none space flex">
                                <a href="#"><li class="px-4 py-2 text-sm ">Sofa's</li></a>
                                <a href="#"><li class="px-4 py-2 text-sm">Beds</li></a>
                                <a href="#"><li class="px-4 py-2 text-sm">Children furniture</li></a>
                                <a href="#"><li class="px-4 py-2 text-sm">Chairs</li></a>
                                <a href="#"><li class="px-4 py-2 text-sm">Standards</li></a>
                            </ul>
                            <div class="text-right">
                                <p class=" font-bold text-sm">+7 (926) 787-11-00</p>
                                <p class="text-sm">Modern Furniture factory</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Navbar;