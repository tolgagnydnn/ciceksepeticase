// Styles
import './style.scss'

const BreadCrumb = () => {
  return (
    <div className='breadcrumb'>
      <ul className='breadcrumb__list'>
        <li className='list-item'>
          <a href='#!' className='list-link'> Ciceksepeti Market <i className="arrow right"></i></a>
        </li>
        <li className='list-item'>
          <a href='#!' className='list-link'> İstanbul <i className="arrow right"></i></a>
        </li>
        <li className='list-item'>
          <span> CiceksepetiBreadCrumb </span>
        </li>
      </ul>
    </div>
  )
}

export default BreadCrumb