import * as React from 'react'
import './Footer.scss'
const Footer: React.FC = () => {
  return (
    <footer className="tool-footer">
      <div className="tool-corporationInfo-wrapper">
        비마이펫© Copyright 2020, All Rights Reserved
        <br />
        서울시 서초구 서초중앙로 24길 55, 401호 | 비마이펫(주) 등록번호 :
        서울,아 05182 | 등록일자 : 2018년 5월 8일 | 제호 : 비마이펫 라이프
        <br />
        발행인 : 성현진 | 편집인 : 성현진 | 청소년보호책임자: 성현진 문의:
        050-7724-6399,
        <a href="mailto:business@bemypet.kr">business@bemypet.kr</a>| version
        :1.0.0
      </div>

      <div className="tool-snsIcon-wrapper">
        <a target="_blank" href="https://www.facebook.com/bemypetkr">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36">
            <g fill="none">
              <path
                fill="#3B5998"
                d="M0 18C0 8.059 8.059 0 18 0s18 8.059 18 18-8.059 18-18 18S0 27.941 0 18z"
              ></path>
              <path
                fill="#FFF"
                d="M19.276 27.984V18.19h2.703l.359-3.375h-3.062l.005-1.69c0-.88.083-1.35 1.348-1.35h1.69V8.4h-2.704c-3.248 0-4.39 1.637-4.39 4.39v2.026H13.2v3.375h2.024v9.793h4.052z"
              ></path>
            </g>
          </svg>
        </a>

        <a
          target="_blank"
          href="https://www.youtube.com/channel/UClljZ2pw3YZFVGq6EQgJVyQ"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36">
            <g fill="none">
              <path
                fill="#CE1312"
                d="M0 18C0 8.059 7.938 0 17.73 0c9.793 0 17.731 8.059 17.731 18s-7.938 18-17.73 18C7.938 36 0 27.941 0 18z"
              ></path>
              <path
                fill="#FFF"
                d="M26.959 14.377s-.185-1.352-.751-1.948c-.718-.781-1.523-.785-1.892-.83-2.643-.199-6.607-.199-6.607-.199h-.008s-3.964 0-6.607.199c-.37.045-1.174.049-1.893.83-.566.596-.75 1.948-.75 1.948s-.189 1.588-.189 3.175v1.489c0 1.588.19 3.175.19 3.175s.183 1.352.75 1.948c.718.782 1.662.757 2.082.839 1.51.15 6.42.197 6.42.197s3.97-.006 6.612-.205c.369-.046 1.174-.05 1.892-.831.566-.596.75-1.948.75-1.948s.19-1.587.19-3.175v-1.489c0-1.587-.19-3.175-.19-3.175z"
              ></path>
              <path
                fill="#CE1312"
                d="M15.755 20.845L15.754 15.332 20.857 18.098z"
              ></path>
            </g>
          </svg>
        </a>
        <a target="_blank" href="https://www.instagram.com/bemypet.official/">
          <img
            alt="insta-icon"
            src="data:image/png;base64,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"
          />
        </a>

        <a
          target="_blank"
          href="https://play.google.com/store/apps/details?id=kr.bemypet.bemypet_main_app"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36">
            <g fill="none">
              <path
                d="M0 0H1260V1948H0z"
                transform="translate(-563 -1825)"
              ></path>
              <g transform="translate(-563 -1825) translate(563 1825)">
                <circle cx="18" cy="18" r="18" fill="#F6F7F8"></circle>
                <path
                  fill="#FFC100"
                  d="M13 10.724v14.552c0 .764.837 1.232 1.488.833l11.935-7.327c.623-.382.62-1.29-.005-1.668L14.482 9.888c-.65-.394-1.483.075-1.483.836z"
                ></path>
                <path
                  fill="#D8E86D"
                  d="M13.738 26.224l9.959-10.757-9.215-5.579c-.65-.394-1.483.075-1.483.836v14.552c0 .48.331.844.74.948z"
                ></path>
                <path
                  fill="#F52B2B"
                  d="M14.488 26.109l8.193-5.03 1.016-.623-9.964-10.679c-.405.106-.734.469-.734.947v14.552c0 .764.838 1.232 1.489.833z"
                ></path>
                <path
                  fill="#00B7AD"
                  d="M13.738 26.224l7.64-8.253-7.645-8.194c-.405.106-.734.469-.734.947v14.552c0 .48.331.844.74.948z"
                ></path>
              </g>
            </g>
          </svg>
        </a>

        <a target="_blank" href="https://testflight.apple.com/join/GIFilC0p">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36">
            <g fill="none">
              <path
                fill="#e4e4e6"
                d="M0 18C0 8.059 8.059 0 18 0s18 8.059 18 18-8.059 18-18 18S0 27.941 0 18z"
              ></path>
              <path
                fill="#0B0B0A"
                d="M20.93 10.621c.688-.887 1.209-2.141 1.02-3.421-1.123.078-2.436.797-3.202 1.733-.698.85-1.272 2.112-1.048 3.337 1.228.039 2.495-.697 3.23-1.649zM27 22.661c-.491 1.096-.728 1.585-1.361 2.555-.883 1.355-2.128 3.04-3.673 3.053-1.37.015-1.724-.898-3.585-.887-1.861.01-2.25.905-3.622.891-1.544-.014-2.724-1.535-3.607-2.89-2.47-3.784-2.73-8.226-1.207-10.589 1.084-1.677 2.794-2.659 4.4-2.659 1.634 0 2.663.902 4.016.902 1.313 0 2.112-.904 4.003-.904 1.431 0 2.947.784 4.026 2.137-3.537 1.95-2.964 7.032.61 8.391z"
              ></path>
            </g>
          </svg>
        </a>
      </div>
    </footer>
  )
}

export default Footer
