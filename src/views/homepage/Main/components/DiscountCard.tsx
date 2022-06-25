// Styles
import './style.scss'

// Type
interface DiscountCardInterface {
    image: string
    title:string
    buttonTitle:string
    color:string
}

const DiscountCard = (props: DiscountCardInterface) => {

    //Props
    const { image, title, buttonTitle, color } = props

    return (
        <div className='discountcard' style={{ background: `${color}` }}>
            <div className='card-image'>
                <img src={image} alt="deliveryicon" />
            </div>
            <div className='discountcard__info'>
                <div className='discountcard-title'>
                    <span> {title} </span>
                </div>
                <div className='discountcard-btn'>
                    <button> {buttonTitle} </button>
                </div>
            </div>
        </div>
    )
}

export default DiscountCard