import * as React from 'react'
import './CorporationInfo.scss'
const CorporationInfo: React.FC = () => {
  return (
    <div className="corporation-area">
      비마이펫© Copyright 2020, All Rights Reserved
      <br />
      서울시 서초구 서초중앙로 24길 55, 401호 | 비마이펫(주)
      <br />
      등록번호 : 서울,아 05182 | 등록일자 : 2018년 5월 8일
      <br />
      제호 : 비마이펫 라이프
      <br />
      발행인 : 성현진 | 편집인 : 성현진 | 청소년보호책임자: 성현진
      <br />
      문의: 050-7724-6399, samoyed@bemypet.kr
      <br />
      <a
        target="_blank"
        href="https://play.google.com/store/apps/details?id=kr.bemypet.bemypet_main_app&utm_source=bemypet&utm_campaign=footer&pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1"
      >
        <img
          src="https://play.google.com/intl/en_us/badges/static/images/badges/ko_badge_web_generic.png"
          alt="앱 다운로드"
        />
      </a>
      <ul className="corporation-list">
        <li>
          <a
            target="_blank"
            rel="noreferrer nofollow"
            href="https://mypetlife.co.kr/%ec%9d%b4%ec%9a%a9%ec%95%bd%ea%b4%80/"
          >
            이용약관
          </a>
        </li>
        <li>
          <a target="_blank" href="https://mypetlife.co.kr/privacy-policy/">
            개인정보처리방침
          </a>
        </li>
      </ul>
    </div>
  )
}

export default CorporationInfo
