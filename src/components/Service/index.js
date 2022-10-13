import "./service.scss";

export default function Service() {
  return (
    <li className="service">
      <article className="service__card">
        <svg
          width="64"
          height="64"
          viewBox="0 0 64 64"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g filter="url(#filter0_b_56_99)">
            <path
              d="M44.9651 11.9656L51.9998 19.0003M44.9651 11.9656L49.4638 7.46429C50.4016 6.52649 51.6735 5.99963 52.9998 5.99963C54.326 5.99963 55.598 6.52649 56.5358 7.46429C57.4736 8.4021 58.0004 9.67404 58.0004 11.0003C58.0004 12.3266 57.4736 13.5985 56.5358 14.5363L18.2184 52.8536C16.8086 54.2626 15.0701 55.2982 13.1598 55.867L5.99976 58.0003L8.13309 50.8403C8.70183 48.93 9.73745 47.1914 11.1464 45.7816L44.9678 11.9656H44.9651Z"
              stroke="#D3222A"
              stroke-width="3"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </g>
          <defs>
            <filter
              id="filter0_b_56_99"
              x="-10"
              y="-10"
              width="84"
              height="84"
              filterUnits="userSpaceOnUse"
              color-interpolation-filters="sRGB"
            >
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feGaussianBlur in="BackgroundImageFix" stdDeviation="5" />
              <feComposite
                in2="SourceAlpha"
                operator="in"
                result="effect1_backgroundBlur_56_99"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_backgroundBlur_56_99"
                result="shape"
              />
            </filter>
          </defs>
        </svg>
        <div className="service__description">
          <h3>UX/UI</h3>
          <p>
            Tomamos tus requerimientos y los convertimos en prototipos que nos
            permitan obtener rápidamente feedback para guiar las decisiones de
            diseño.
          </p>
          <p>Investigación - Prototipado - IA - Análisis heurísticos - A11Y</p>
        </div>
      </article>
    </li>
  );
}
