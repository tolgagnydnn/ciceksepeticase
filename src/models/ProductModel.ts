export interface ProductInterface {
    id: number
    categoryId: number
    image: string
    name: string
    freeCargo: boolean
    price: number
}

export interface CategoriesInterface {
    id: number
    title: string
}

export interface BasketProductInterface extends ProductInterface {
    orderCount: number
}

export interface BasketInterface {
    products: BasketProductInterface[]
    count: number
    totalPrice: number
}

export interface InitialInterface {
    params: object
    allProducts: ProductInterface[]
    allCategories: CategoriesInterface[]
    totalProducts: number
    basket: BasketInterface
    categoryLoading: null | boolean
    productLoading: null | boolean
}
export interface StateInterface {
    products: InitialInterface
}

