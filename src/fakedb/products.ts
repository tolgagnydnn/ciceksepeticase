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
    },
    {
        id: 11,
        categoryId: 1,
        image: require('../assets/images/products/product1.png'),
        name: 'Z6 Akıllı Saat Kameralı Konuşma Garantili Sim Kartlı Bluetooth',
        freeCargo: true,
        price: 399.90
      },
      {
          id: 12,
          categoryId: 1,
          image: require('../assets/images/products/product2.png'),
          name: 'Calvin Klein Euphoria EDP 100 ml Kadın Parfüm',
          freeCargo: false,
          price: 145.61 
      },
      {
          id: 13,
          categoryId: 1,
          image: require('../assets/images/products/product3.png'),
          name: 'Gold Çizgili Vazoda 2 Dal Orkide Çiçeği',
          freeCargo: true,
          price: 249.90 
      },
      {
          id: 14,
          categoryId: 1,
          image: require('../assets/images/products/product4.png'),
          name: '925 Ayar Gümüş Çeyreklik Bileklik (Y)',
          freeCargo: false,
          price: 329.90 
      },
      {
          id: 15,
          categoryId: 1,
          image: require('../assets/images/products/product5.png'),
          name: 'Sailor SD-3160 Siyah Dağcı Seyahat Sırt Çantası 55 LT Outdoor-Trekking',
          freeCargo: true,
          price: 499.90 
      },
      {
          id: 16,
          categoryId: 1,
          image: require('../assets/images/products/product6.png'),
          name: 'Büyük Boy Metal Osmanlı Bizans Satranç Takımı Parlak ve Cevizli Desenleri ile Birlikte',
          freeCargo: true,
          price: 19.90 
      },
      {
          id: 17,
          categoryId: 1,
          image: require('../assets/images/products/product7.png'),
          name: '130 Cm Papyonlu Büyük Ayıcı (%100 Yerli)',
          freeCargo: true,
          price: 89.90 
      },
      {
          id: 18,
          categoryId: 1,
          image: require('../assets/images/products/product8.png'),
          name: '925 Ayar Gümüş Dualı İsimli Nazar İgnesi',
          freeCargo: true,
          price: 29.90 
      },
      {
          id: 19,
          categoryId: 1,
          image: require('../assets/images/products/product9.png'),
          name: 'Özel Tatlar Çikolata Kutusu 300 gr',
          freeCargo: true,
          price: 59.90 
      },
      {
          id: 20,
          categoryId: 1,
          image: require('../assets/images/products/product10.png'),
          name: 'Kucak Dolusu Aşk 25 Kırmızı Gül Buketi',
          freeCargo: false,
          price: 199.90 
      },
      {
          id: 21,
          categoryId: 2,
          image: require('../assets/images/products/product2.png'),
          name: 'Calvin Klein Euphoria EDP 100 ml Kadın Parfüm',
          freeCargo: false,
          price: 145.61 
      },
      {
          id: 22,
          categoryId: 2,
          image: require('../assets/images/products/product3.png'),
          name: 'Gold Çizgili Vazoda 2 Dal Orkide Çiçeği',
          freeCargo: true,
          price: 249.90 
      },
      {
          id: 23,
          categoryId: 2,
          image: require('../assets/images/products/product4.png'),
          name: '925 Ayar Gümüş Çeyreklik Bileklik (Y)',
          freeCargo: false,
          price: 329.90 
      },
      {
          id: 24,
          categoryId: 3,
          image: require('../assets/images/products/product5.png'),
          name: 'Sailor SD-3160 Siyah Dağcı Seyahat Sırt Çantası 55 LT Outdoor-Trekking',
          freeCargo: true,
          price: 499.90 
      },
      {
          id: 25,
          categoryId: 4,
          image: require('../assets/images/products/product6.png'),
          name: 'Büyük Boy Metal Osmanlı Bizans Satranç Takımı Parlak ve Cevizli Desenleri ile Birlikte',
          freeCargo: true,
          price: 19.90 
      },
      {
          id: 26,
          categoryId: 5,
          image: require('../assets/images/products/product7.png'),
          name: '130 Cm Papyonlu Büyük Ayıcı (%100 Yerli)',
          freeCargo: true,
          price: 89.90 
      },
      {
          id: 27,
          categoryId: 5,
          image: require('../assets/images/products/product8.png'),
          name: '925 Ayar Gümüş Dualı İsimli Nazar İgnesi',
          freeCargo: true,
          price: 29.90 
      },
      {
          id: 28,
          categoryId: 6,
          image: require('../assets/images/products/product9.png'),
          name: 'Özel Tatlar Çikolata Kutusu 300 gr',
          freeCargo: true,
          price: 59.90 
      },
      {
          id: 29,
          categoryId: 7,
          image: require('../assets/images/products/product10.png'),
          name: 'Kucak Dolusu Aşk 25 Kırmızı Gül Buketi',
          freeCargo: false,
          price: 199.90 
      },
      {
        id: 30,
        categoryId: 6,
        image: require('../assets/images/products/product10.png'),
        name: 'Kucak Dolusu Aşk 25 Kırmızı Gül Buketi',
        freeCargo: false,
        price: 199.90 
    },
    {
        id: 31,
        categoryId: 7,
        image: require('../assets/images/products/product2.png'),
        name: 'Calvin Klein Euphoria EDP 100 ml Kadın Parfüm',
        freeCargo: false,
        price: 145.61 
    },
    {
        id:32,
        categoryId: 8,
        image: require('../assets/images/products/product3.png'),
        name: 'Gold Çizgili Vazoda 2 Dal Orkide Çiçeği',
        freeCargo: true,
        price: 249.90 
    },
    {
        id: 33,
        categoryId: 9,
        image: require('../assets/images/products/product4.png'),
        name: '925 Ayar Gümüş Çeyreklik Bileklik (Y)',
        freeCargo: false,
        price: 329.90 
    },
    {
        id: 34,
        categoryId: 10,
        image: require('../assets/images/products/product5.png'),
        name: 'Sailor SD-3160 Siyah Dağcı Seyahat Sırt Çantası 55 LT Outdoor-Trekking',
        freeCargo: true,
        price: 499.90 
    },
    {
        id: 35,
        categoryId: 11,
        image: require('../assets/images/products/product6.png'),
        name: 'Büyük Boy Metal Osmanlı Bizans Satranç Takımı Parlak ve Cevizli Desenleri ile Birlikte',
        freeCargo: true,
        price: 19.90 
    },
    {
        id: 36,
        categoryId: 12,
        image: require('../assets/images/products/product7.png'),
        name: '130 Cm Papyonlu Büyük Ayıcı (%100 Yerli)',
        freeCargo: true,
        price: 89.90 
    },
    {
        id: 37,
        categoryId: 13,
        image: require('../assets/images/products/product8.png'),
        name: '925 Ayar Gümüş Dualı İsimli Nazar İgnesi',
        freeCargo: true,
        price: 29.90 
    },
    {
        id: 38,
        categoryId: 14,
        image: require('../assets/images/products/product9.png'),
        name: 'Özel Tatlar Çikolata Kutusu 300 gr',
        freeCargo: true,
        price: 59.90 
    },
    {
        id: 39,
        categoryId: 14,
        image: require('../assets/images/products/product10.png'),
        name: 'Kucak Dolusu Aşk 25 Kırmızı Gül Buketi',
        freeCargo: false,
        price: 199.90 
    }
  ],
  categories: [
    {
      id: 1,
      title: "Tüm Kategoriler"
    },
    {
      id: 2,
      title: "Elektronik"
    },
    {
      id: 3,
      title: "Ev ve Yaşam"
    },
    {
      id: 4,
      title: "Evcil Hayvan"
    },
    {
      id: 5,
      title: "Kitap"
    },
    {
      id: 6,
      title: "Oyuncak"
    },
    {
      id: 7,
      title: "Spor"
    },
    {
      id: 8,
      title: "Çiçek"
    },
    {
      id: 9,
      title: "Hediye"
    },
    {
      id: 10,
      title: "Moda, Aksesuar"
    },
    {
      id: 11,
      title: "Ofis Kırtasiye"
    },
    {
      id: 12,
      title: "Parfüm"
    },
    {
      id: 13,
      title: "Kişisel Bakım"
    },
    {
      id: 14,
      title: "Petshop"
    }
  ]
}

// All Data
mock.onGet('/api/categories/all-categories').reply(200, data.categories)

// ------------------------------------------------
mock.onGet('/apps/categories/getCategoryProducts').reply(config => {
    console.log(config.params)
    const { id = '', q = '', } = config.params
    const queryLowered = q.toLowerCase()
    const filteredData = data.products.filter(product => product.categoryId === id)
    const searchFilteredData = filteredData.filter(product => product.name.toLowerCase().includes(queryLowered))
    return [
      200,
      {
        products: searchFilteredData,
        total: filteredData.length
      }
    ]
  })


