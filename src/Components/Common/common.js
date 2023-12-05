import { storeDB, auth, doc, getDoc } from '../../Services/firebaseConfig';
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

