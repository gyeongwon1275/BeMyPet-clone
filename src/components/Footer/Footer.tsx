import * as React from 'react'
import './Footer.scss'
import Widgets from './Widgets'
import CorporationInfo from './CorporationInfo'
const Footer: React.FC = () => {
  return (
    <footer>
      <div className="footer-inner">
        <Widgets />
        <CorporationInfo />
      </div>
    </footer>
  )
}

export default Footer
