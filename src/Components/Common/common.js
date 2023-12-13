import { storeDB, auth, doc, getDoc, collection, getDocs, query, where } from '../../Services/firebaseConfig';
export function filterByCategoryAndNameLength(category, setCurrentProducts, productData) {
    if (!productData) {
        return;
    }

    const filteredData = productData.filter(
        (item) =>
            item?.category?.toLowerCase() === category?.toLowerCase() &&
            item.name.length <= 20
    );

    for (let i = filteredData.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [filteredData[i], filteredData[j]] = [filteredData[j], filteredData[i]];
    }

    const randomProducts = filteredData.slice(0, 4);
    setCurrentProducts(randomProducts);
}



export async function fetchUserData(setUid, setUserData) {
    const unsubscribe = auth.onAuthStateChanged(async (user) => {
        if (user) {
            const docRef = doc(storeDB, "users", user.uid);
            const docSnap = await getDoc(docRef);
            setUid(user.uid);
            if (docSnap.exists()) {
                setUserData(docSnap.data());
            } else {
                console.log("No such document!");
            }
        } else {
            setUserData(null);
        }
    });

    return unsubscribe;
}


export const fetchSingleProductData = async (productId, setMainImg, setItemData) => {
    try {
        const productDocRef = doc(storeDB, "products", productId);
        const productDocSnapshot = await getDoc(productDocRef);
        if (productDocSnapshot.exists()) {
            setMainImg(productDocSnapshot.data().images);
            setItemData({ id: productId, ...productDocSnapshot.data() });
        } else {
            console.log("No such document!");
        }
    } catch (error) {
        console.error("Error fetching product data:", error);
    }
};

export const fetchPricesAndCalculateSubtotal = async (cartData, setSubtotalValue) => {
    try {
        let subtotal = 0;
        for (const item of cartData) {
            const docRef = doc(storeDB, "products", item.productId);
            const docSnap = await getDoc(docRef);

            if (docSnap.exists()) {
                subtotal += docSnap.data().price * item.quantity;
            } else {
                console.log(`No document found for productId: ${item.productId}`);
            }
        }
        setSubtotalValue(subtotal);
    } catch (error) {
        console.error("Error fetching product prices:", error);
    }
};

