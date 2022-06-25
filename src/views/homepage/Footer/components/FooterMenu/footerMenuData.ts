export interface Menu {
    id:number
    title:string
}
export interface FooterMenuInterface {
    id: number,
    title: string,
    menu: Menu[]
} 

const footerMenuData= [
    {
        id: 1,
        title: "Faydalı Bilgiler",
        menu: [
            {id:1, title:"Çiçek Bakımı"},
            {id:2, title:"Çiçek Eşliğinde Notlar"},
            {id:3, title:"Çiçek Anlamları"},
            {id:4, title:"Özel Günler"},
            {id:5, title:"Mevsimlere Göre Çiçekler"},
            {id:6, title:"BonnyFood Saklama Koşulları"},
            {id:7, title:"Site Haritası"}
        ]
    },
    {
        id: 2,
        title: "Kurumsal",
        menu: [
            {id:1, title:"Hakkımızda"},
            {id:2, title:"Kariyer"},
            {id:3, title:"ÇiçekSepeti’nde Satış Yap"},
            {id:4, title:"Kurumsal Müşterilerimiz"},
            {id:5, title:"Reklamlarımız"},
            {id:6, title:"Basında Biz"},
            {id:7, title:"Kampanyalar"},
            {id:8, title:"Vizyonumuz"}
        ]
    },
    {
        id: 3,
        title: "İletişim",
        menu: [
            {id:1, title:"Bize Ulaşın"},
            {id:2, title:"Sıkça Sorulan Sorular"},
        ]
    },
    {
        id: 4,
        title: "Gizlilik Sözleşmesi",
        menu: [
            {id:1, title:"Mesafeli Satış Sözleşmesi"},
            {id:2, title:"Bilgi Toplumu Hizmetleri"},
            {id:3, title:"ÇiçekSepeti’nde Satış Yap"},
            {id:4, title:"Gizlilik Sözleşmesi"},
            {id:5, title:"Ödeme Seçenekleri"},
            {id:6, title:"Hesap Bilgileri"},
        ]
    },
]

export default footerMenuData