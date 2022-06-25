export interface ProductInterface {
    id: number
    categoryId: number
    image: string
    name: string
    freeCargo: boolean
    price: number
    orderCount: number
}

export interface CategoriesInterface {
    id: number
    title: string
}

// export interface BasketInterface {
//     products: ProductInterface[]
//     count: number
//     totalPrice: number
//     categoryLoading: null
//     productLoading: null
// }

