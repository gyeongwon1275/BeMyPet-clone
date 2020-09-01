import * as React from 'react'
import './TopSnsList.scss'
const TopSnsList: React.FC = () => {
  return (
    <div className="sns-menu-wrapper">
      <ul className="link-list">
        <li className="link-facebook">
          <a href="http://facebook.com/bemypetkr" rel="noreferrer nofollow">
            <i className="fa fa-facebook" />
          </a>
        </li>
        <li className="link-youtube">
          <a
            href="https://www.youtube.com/channel/UClljZ2pw3YZFVGq6EQgJVyQ"
            rel="noreferrer nofollow"
          >
            <i className="fa fa-youtube-play" />
          </a>
        </li>
        <li className="link-instagram">
          <a
            href="https://www.instagram.com/bemypet.official/"
            rel="noreferrer nofollow"
          >
            <i className="fa fa-instagram" />
          </a>
        </li>

        <li className="link-android">
          <a
            href="https://play.google.com/store/apps/details?id=kr.bemypet.bemypet_main_app&utm_source=bemypet&utm_campaign=header&pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1"
            rel="noreferrer nofollow"
          >
            <i className="fa fa-play" />
          </a>
        </li>
      </ul>
    </div>
  )
}

export default TopSnsList
