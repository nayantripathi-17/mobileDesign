import { atomFamily } from "recoil";

export const productsState = atomFamily<{
    name: string
    metaDescription: string
    price: number
    rating: number
    reviews: number
    quantity: number| ""
}, string>({
    key: "products",
    default: {
        name: "",
        metaDescription: "",
        price: 0,
        rating: 5,
        reviews: 320,
        quantity: 1
    }
})