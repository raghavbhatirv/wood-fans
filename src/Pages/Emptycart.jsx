import { useNavigate } from "react-router-dom"
import Button from "../Components/Common/Button"

const Emptycart = () => {
    const navigate = useNavigate();
    const onProducts = () => {
        navigate("/products/SOFAS");
    }
    return (
        <div className="h-full py-36">
            <div className="text-center">
                <div className="py-10">
                    <h2 className="font-semibold text-4xl">Hey, it feels so light!</h2>
                    <p className="text-gray-400 pt-1">There is nothing in your bag. Let's add some items.</p>
                </div>
                <div className="w-2/12 m-auto">
                    <Button
                        text="Explore Products"
                        type="button"
                        onClick={onProducts}
                        className={`mt-3  text-[16px] bg-primary-yellow text-black hover:border-primary-yellow hover:bg-white hover:border-2`}
                    />
                </div>
            </div>
        </div>
    )

}
export default Emptycart;