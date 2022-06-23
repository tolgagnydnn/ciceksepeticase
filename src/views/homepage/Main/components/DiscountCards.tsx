// Styles
import './style.scss'

// Images
import deliveryicon from '../../../../assets/images/deliveryicon.png'
import gifticon from '../../../../assets/images/gifticon.png'
import stationaryicon from '../../../../assets/images/stationaryicon.png'

const DiscountCards = () => {

    // const discountsCard = [
    //     {
    //         id: 0,
    //         image: require('../../../../assets/images/deliveryicon.png'),
    //         title: "75 TL Üzerine Teslimat Ücreti Bizden",
    //         button: "Detaylı Bilgi"
    //     },
    //     {
    //         id: 1,
    //         image: require('../../../../assets/images/gifticon.png'),
    //         title: "Hediye Kategorisi için Sepette %15 İndirim",
    //         button: "Hediye Ürünleri"
    //     },
    //     {
    //         id: 2,
    //         image: require('../../../../assets/images/stationaryicon.png'),
    //         title: "Kırtasiye Kategorisi için Sepette %15 İndirim",
    //         button: "Detaylı Bilgi"
    //     }
    // ]


    return (
        <>
            <div className='discountcard deliveryicon-card'>
                <div className='card-image'>
                    <img src={deliveryicon} alt="deliveryicon" />
                </div>
                <div className='discountcard__info'>
                    <div className='discountcard-title'>
                        <span> 75 TL Üzerine Teslimat Ücreti Bizden </span>
                    </div>
                    <div className='discountcard-btn'>
                        <button> Detaylı Bilgi </button>
                    </div>
                </div>
            </div>

            <div className='discountcard gifticon-card'>
                <div className='card-image'>
                    <img src={gifticon} alt="gifticon" />
                </div>
                <div className='discountcard__info'>
                    <div className='discountcard-title'>
                        <span> Hediye Kategorisi için Sepette %15 İndirim </span>
                    </div>
                    <div className='discountcard-btn'>
                        <button> Hediye Ürünleri </button>
                    </div>
                </div>
            </div>

            <div className='discountcard stationaryicon-card'>
                <div className='card-image'>
                    <img src={stationaryicon} alt="stationaryicon" />
                </div>
                <div className='discountcard__info'>
                    <div className='discountcard-title'>
                        <span> 75 TL Üzerine Teslimat Ücreti Bizden </span>
                    </div>
                    <div className='discountcard-btn'>
                        <button> Detaylı Bilgi </button>
                    </div>
                </div>
            </div>
               

        </>
    )
}

export default DiscountCards