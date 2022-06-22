// Styles
import './style.scss'

const BreadCrumb = () => {
  return (
    <div className='breadcrumb'>
      <ul className='breadcrumb__list'>
        <li className='list-item'>
          <a href='!#' className='list-link'> Çiçek Sepeti <i className="arrow right"></i></a>
        </li>
        <li className='list-item'>
          <a href='!#' className='list-link'> İstanbul <i className="arrow right"></i></a>
        </li>
        <li className='list-item'>
          <a href='!#' className='list-link'> CiceksepetiBreadCrumb </a>
        </li>
      </ul>
    </div>
  )
}

export default BreadCrumb