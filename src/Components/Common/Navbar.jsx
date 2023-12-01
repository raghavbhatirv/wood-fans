const Navbar = () => {
    return (
        <div class="mx-auto w-9/12 flex my-3">
            <div class="w-1/12 ">
                <img class="w-10" src="https://wood-fans-team.vercel.app/assets/Logo-dac3bcb4.svg"></img>
            </div>
            <div class="w-11/12">
                <div class="w-full">
                    <div class="flex justify-between">
                        <ul class="list-none flex ">
                            <a href="#"><li class="px-4 py-2 text-sm">Shipping & Payment</li></a>
                            <a href="#"><li class="px-4 py-2 text-sm">About Productions</li></a>
                            <a href="#"><li class="px-4 py-2 text-sm">blog</li></a>
                            <a href="#"><li class="px-4 py-2 text-sm">Portfolio</li></a>
                            <a href="#"><li class="px-4 py-2 text-sm">Contacts</li></a>
                        </ul>
                        <div class="flex items-center">
                            <div>
                                <input class="border border-solid border-gray-200 p-2 rounded-md" type="text " placeholder="Search"></input>
                            </div>
                            <div>
                                <p class="text-sm font-bold">Login/SignUp</p>
                            </div>
                            <div>
                                
                            </div>
                        </div>
                    </div>
                </div>
                <div class="w-full">
                    <div class="flex justify-between">
                        <ul class="list-none flex space">
                            <a href="#"><li class="px-4 py-2 text-sm">Sofa's</li></a>
                            <a href="#"><li class="px-4 py-2 text-sm">Beds</li></a>
                            <a href="#"><li class="px-4 py-2 text-sm">Children furniture</li></a>
                            <a href="#"><li class="px-4 py-2 text-sm">Chairs</li></a>
                            <a href="#"><li class="px-4 py-2 text-sm">Standards</li></a>
                        </ul>
                        <div class="text-right">
                            <p class="text-sm font-bold">+7 (926) 787-11-00</p>
                            <p class="text-sm">Modern Furniture factory</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Navbar;