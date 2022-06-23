import mock from './mock'

const data = {
  products: [
    {
      id: 1,
      categoryId: 1,
      image: require('../assets/images/products/product1.png'),
      name: 'Z6 Akıllı Saat Kameralı Konuşma Garantili Sim Kartlı Bluetooth',
      freeCargo: true,
      price: 399.90
    },
    {
        id: 2,
        categoryId: 1,
        image: require('../assets/images/products/product2.png'),
        name: 'Calvin Klein Euphoria EDP 100 ml Kadın Parfüm',
        freeCargo: false,
        price: 145.61 
    },
    {
        id: 3,
        categoryId: 1,
        image: require('../assets/images/products/product3.png'),
        name: 'Gold Çizgili Vazoda 2 Dal Orkide Çiçeği',
        freeCargo: true,
        price: 249.90 
    },
    {
        id: 4,
        categoryId: 1,
        image: require('../assets/images/products/product4.png'),
        name: '925 Ayar Gümüş Çeyreklik Bileklik (Y)',
        freeCargo: false,
        price: 329.90 
    },
    {
        id: 5,
        categoryId: 1,
        image: require('../assets/images/products/product5.png'),
        name: 'Sailor SD-3160 Siyah Dağcı Seyahat Sırt Çantası 55 LT Outdoor-Trekking',
        freeCargo: true,
        price: 499.90 
    },
    {
        id: 6,
        categoryId: 1,
        image: require('../assets/images/products/product6.png'),
        name: 'Büyük Boy Metal Osmanlı Bizans Satranç Takımı Parlak ve Cevizli Desenleri ile Birlikte',
        freeCargo: true,
        price: 19.90 
    },
    {
        id: 7,
        categoryId: 1,
        image: require('../assets/images/products/product7.png'),
        name: '130 Cm Papyonlu Büyük Ayıcı (%100 Yerli)',
        freeCargo: true,
        price: 89.90 
    },
    {
        id: 8,
        categoryId: 1,
        image: require('../assets/images/products/product8.png'),
        name: '925 Ayar Gümüş Dualı İsimli Nazar İgnesi',
        freeCargo: true,
        price: 29.90 
    },
    {
        id: 9,
        categoryId: 1,
        image: require('../assets/images/products/product9.png'),
        name: 'Özel Tatlar Çikolata Kutusu 300 gr',
        freeCargo: true,
        price: 59.90 
    },
    {
        id: 10,
        categoryId: 1,
        image: require('../assets/images/products/product10.png'),
        name: 'Kucak Dolusu Aşk 25 Kırmızı Gül Buketi',
        freeCargo: false,
        price: 199.90 
    }
  ]
}

// All Data
mock.onGet('/api/products/all-products').reply(200, data.products)


// // Get User
// mock.onGet('/api/users/user').reply(config => {
//     const { id }= config 
//     const user = data.products.find(i => i.id === id)
//     return [200, { user }]
// })
  

// mock.onGet('/api/users/list/data').reply(config => {
//   const {
//     q:string = '',
//     page: number = 1,
//     perPage: number = 15,
//     sort: string = 'asc',
//     sortColumn: string = 'name'
//   } = config

//   const queryLowered = q.toLowerCase()
//   const dataAsc = data.users.sort((a, b) => (a[sortColumn] < b[sortColumn] ? -1 : 1))
//   const dataToFilter = sort === 'asc' ? dataAsc : dataAsc.reverse()
//   const filteredData = dataToFilter.filter(
//     user =>
//       (user.name.toLowerCase().includes(queryLowered) ||
//         user.surname.toLowerCase().includes(queryLowered)) &&
//          user.role === (role || user.role)
//   )
//   return [
//     200,
//     {
//       total: filteredData.length,
//       users: paginateArray(filteredData, perPage, page)
//     }
//   ]
// })


