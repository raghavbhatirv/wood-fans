
export const abailableOffers = [
     {
          id: 1,
          offer: "Special Price",
          details: "Extra ₹2074 off(price inclusive of discount)",
     },
     {
          id: 2,
          offer: "Bank Offer",
          details: "10% off on Canara Bank Credit Card Transactions, up to ₹1,500 on orders of ₹5,000 and above"
     },
     {
          id: 3,
          offer: "Bank Offer",
          details: "5% Cashback on Flipkart Axis Bank Card"
     },
]
export const popUpSelector = [
     {
          id: 1,
          texture: "https://api.woodfans.ru/storage/uploads/images/sa9laeAMF1bvmC4suTAi1iopH3AyVcF67TfNz5P9_cropped_1200_449.jpg",
          name: "32_avoca",
          place: "Türkiye",
          polyester: "100% Polyester",
          meter: "6000₽ m"
     }, {
          id: 2,
          texture: "https://api.woodfans.ru/storage/uploads/images/dLYvmIcnsjtZGGeSDNgmJnMxUulxWsgDB2EmKTBq_cropped_1200_449.jpg",
          name: "30_saga",
          place: "Türkiye",
          polyester: "100% Polyester",
          meter: "6000₽ m"

     },
     {
          id: 3,
          texture: "https://api.woodfans.ru/storage/uploads/images/pXmioED85VkOcPEP0zWFtN1EHWAdycYnpGZQx3wD_cropped_1200_449.jpg",
          name: "29_aqua",
          place: "Türkiye",
          polyester: "100% Polyester",
          meter: "6000₽ m"
     },
     {
          id: 4,
          texture: "https://api.woodfans.ru/storage/uploads/images/jIyAIugLk5lwFNaSn1UKvHjH5eokjKlV6GlqtbRY_cropped_1200_449.jpg",
          name: "28_onyx",
          place: "Türkiye",
          polyester: "100% Polyester",
          meter: "6000₽ m"
     },
     {
          id: 5,
          texture: "https://api.woodfans.ru/storage/uploads/images/WYftV5TeCZJpOTRb9GlrOQ8qTOJ0sGXvz5PWWDbg_cropped_1200_449.jpg",
          name: "26_petunia",
          place: "Türkiye",
          polyester: "100% Polyester",
          meter: "6000₽ m"
     },
     {
          id: 6,
          texture: "https://api.woodfans.ru/storage/uploads/images/CBtHaaJUU3YEXZpLanxWbFZ5oBt3vNrgJJ2vflsV_cropped_1200_449.jpg",
          name: "12_terra",
          place: "Türkiye",
          polyester: "100% Polyester",
          meter: "6000₽ m"
     },
     {
          id: 7,
          texture: "https://api.woodfans.ru/storage/uploads/images/9z8ZPrKjMJLIBtAtm9vWVkj0Ld0GTmxRTKRKMTiB_cropped_1200_449.jpg",
          name: "Step_6",
          place: "Türkiye",
          polyester: "100% Polyester",
          meter: "6000₽ m"
     },

]


export const getRandomPrice = (discountedPrice, actualPrice) => {
     return Math.floor(Math.random() * (actualPrice - discountedPrice + 1)) + discountedPrice;
}

export const handleClickOutside = (setFucntion) => {
     useEffect(() => {
          const handleClickOutside = (event) => {
               if (modalRef.current && !modalRef.current.contains(event.target)) {
                    setFucntion(false);
               }
          };

          document.addEventListener("mousedown", handleClickOutside);

          return () => {
               document.removeEventListener("mousedown", handleClickOutside);
          };
     }, []);
}
