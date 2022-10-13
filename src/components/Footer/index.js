import logo from "../../images/logo-31-rooms.png";
import "./footer.scss";

export default function Footer() {
  return (
    <div className="footer__container">
      <footer className="footer">
        <div className="footer__description">
          <img src={logo} alt="" />
          <p className="footer__location">
            <svg
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                opacity="0.8"
                d="M20 14C20 15.0609 19.5786 16.0783 18.8284 16.8284C18.0783 17.5786 17.0609 18 16 18C14.9391 18 13.9217 17.5786 13.1716 16.8284C12.4214 16.0783 12 15.0609 12 14C12 12.9391 12.4214 11.9217 13.1716 11.1716C13.9217 10.4214 14.9391 10 16 10C17.0609 10 18.0783 10.4214 18.8284 11.1716C19.5786 11.9217 20 12.9391 20 14V14Z"
                stroke="white"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                opacity="0.8"
                d="M26 14C26 23.5227 16 29 16 29C16 29 6 23.5227 6 14C6 11.3478 7.05357 8.8043 8.92893 6.92893C10.8043 5.05357 13.3478 4 16 4C18.6522 4 21.1957 5.05357 23.0711 6.92893C24.9464 8.8043 26 11.3478 26 14V14Z"
                stroke="white"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            Ciudad de México, México
          </p>
          <span className="footer__terms">
            31rooms © 2022, All Rights Reserved
          </span>
        </div>
        <div className="footer__contact">
          <h3>¿Tienes alguna duda? Dejanos un mensaje</h3>
          <a href="info@31rooms.com" className="footer__email">
            <svg
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                opacity="0.8"
                d="M12 5H9.216C8.5746 5.00012 7.95012 5.2058 7.43419 5.58687C6.91826 5.96793 6.53805 6.50432 6.34933 7.11733L3.13333 17.5693C3.04525 17.8548 3.00031 18.1519 3 18.4507V24C3 24.7957 3.31607 25.5587 3.87868 26.1213C4.44129 26.6839 5.20435 27 6 27H26C26.7957 27 27.5587 26.6839 28.1213 26.1213C28.6839 25.5587 29 24.7957 29 24V18.4507C29 18.152 28.9547 17.8547 28.8667 17.5693L25.6533 7.11733C25.4646 6.50432 25.0844 5.96793 24.5685 5.58687C24.0525 5.2058 23.4281 5.00012 22.7867 5H20M3 18H8.14667C8.70373 18.0001 9.24975 18.1554 9.72356 18.4483C10.1974 18.7413 10.5803 19.1604 10.8293 19.6587L11.1707 20.3413C11.4198 20.8398 11.8029 21.259 12.277 21.552C12.7511 21.845 13.2974 22.0001 13.8547 22H18.1453C18.7026 22.0001 19.2489 21.845 19.723 21.552C20.1971 21.259 20.5802 20.8398 20.8293 20.3413L21.1707 19.6587C21.4198 19.1602 21.8029 18.741 22.277 18.448C22.7511 18.155 23.2974 17.9999 23.8547 18H29M16 4V15M16 15L12 11M16 15L20 11"
                stroke="white"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            info@31rooms.com
          </a>
          <ul>
            <li>
              <a href="">
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    opacity="0.8"
                    d="M5.76006 2.56006C4.00037 2.56006 2.56006 4.00037 2.56006 5.76006V26.2401C2.56006 27.9997 4.00037 29.4401 5.76006 29.4401H16.5326C16.6017 29.4515 16.6722 29.4515 16.7413 29.4401H20.3726C20.4417 29.4515 20.5122 29.4515 20.5813 29.4401H26.2401C27.9997 29.4401 29.4401 27.9997 29.4401 26.2401V5.76006C29.4401 4.00037 27.9997 2.56006 26.2401 2.56006H5.76006ZM5.76006 3.84006H26.2401C27.3079 3.84006 28.1601 4.69223 28.1601 5.76006V26.2401C28.1601 27.3079 27.3079 28.1601 26.2401 28.1601H21.1201V19.2001H23.5651L24.4613 14.7201H21.1201V13.4401C21.1201 13.0833 21.154 13.0554 21.2738 12.9776C21.3936 12.8997 21.7638 12.8001 22.4001 12.8001H24.3201V9.19631L23.9551 9.02256C23.9551 9.02256 22.485 8.32006 20.4801 8.32006C19.0401 8.32006 17.8571 8.89379 17.1001 9.84006C16.343 10.7863 16.0001 12.0534 16.0001 13.4401V14.7201H14.0801V19.2001H16.0001V28.1601H5.76006C4.69223 28.1601 3.84006 27.3079 3.84006 26.2401V5.76006C3.84006 4.69223 4.69223 3.84006 5.76006 3.84006ZM20.4801 9.60006C21.8107 9.60006 22.648 9.89347 23.0401 10.0488V11.5201H22.4001C21.6635 11.5201 21.0733 11.581 20.5763 11.9038C20.0793 12.2266 19.8401 12.8394 19.8401 13.4401V16.0001H22.8988L22.5151 17.9201H19.8401V28.1601H17.2801V17.9201H15.3601V16.0001H17.2801V13.4401C17.2801 12.2667 17.5771 11.2938 18.1001 10.6401C18.623 9.98633 19.3601 9.60006 20.4801 9.60006Z"
                    fill="white"
                  />
                </svg>
              </a>
            </li>
            <li>
              <a href="">
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    opacity="0.8"
                    d="M10.24 1.92004C5.65283 1.92004 1.92004 5.65283 1.92004 10.24V21.76C1.92004 26.3473 5.65283 30.08 10.24 30.08H21.76C26.3473 30.08 30.08 26.3473 30.08 21.76V10.24C30.08 5.65283 26.3473 1.92004 21.76 1.92004H10.24ZM10.24 3.20004H21.76C25.6554 3.20004 28.8 6.34469 28.8 10.24V21.76C28.8 25.6554 25.6554 28.8 21.76 28.8H10.24C6.34469 28.8 3.20004 25.6554 3.20004 21.76V10.24C3.20004 6.34469 6.34469 3.20004 10.24 3.20004ZM23.68 7.04004C23.3406 7.04004 23.015 7.1749 22.7749 7.41495C22.5349 7.65499 22.4 7.98057 22.4 8.32004C22.4 8.65952 22.5349 8.98509 22.7749 9.22514C23.015 9.46519 23.3406 9.60004 23.68 9.60004C24.0195 9.60004 24.3451 9.46519 24.5851 9.22514C24.8252 8.98509 24.96 8.65952 24.96 8.32004C24.96 7.98057 24.8252 7.65499 24.5851 7.41495C24.3451 7.1749 24.0195 7.04004 23.68 7.04004ZM16 8.96004C12.1195 8.96004 8.96004 12.1195 8.96004 16C8.96004 19.8805 12.1195 23.04 16 23.04C19.8805 23.04 23.04 19.8805 23.04 16C23.04 12.1195 19.8805 8.96004 16 8.96004ZM16 10.24C19.1888 10.24 21.76 12.8113 21.76 16C21.76 19.1888 19.1888 21.76 16 21.76C12.8113 21.76 10.24 19.1888 10.24 16C10.24 12.8113 12.8113 10.24 16 10.24Z"
                    fill="white"
                  />
                </svg>
              </a>
            </li>
            <li>
              <a href="">
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    opacity="0.8"
                    d="M5.76006 2.56006C4.00037 2.56006 2.56006 4.00037 2.56006 5.76006V26.2401C2.56006 27.9997 4.00037 29.4401 5.76006 29.4401H26.2401C27.9997 29.4401 29.4401 27.9997 29.4401 26.2401V5.76006C29.4401 4.00037 27.9997 2.56006 26.2401 2.56006H5.76006ZM5.76006 3.84006H26.2401C27.3079 3.84006 28.1601 4.69223 28.1601 5.76006V26.2401C28.1601 27.3079 27.3079 28.1601 26.2401 28.1601H5.76006C4.69223 28.1601 3.84006 27.3079 3.84006 26.2401V5.76006C3.84006 4.69223 4.69223 3.84006 5.76006 3.84006ZM8.96006 7.04756C8.25912 7.04756 7.62836 7.25707 7.16131 7.65006C6.69426 8.04305 6.40756 8.63015 6.40756 9.25881C6.40756 10.4538 7.44408 11.3854 8.76256 11.4776C8.76339 11.478 8.76422 11.4784 8.76506 11.4788C8.82788 11.5002 8.89369 11.5116 8.96006 11.5126C10.4148 11.5126 11.5126 10.4936 11.5126 9.25881C11.5124 9.24755 11.512 9.23629 11.5113 9.22506C11.4462 8.00891 10.3619 7.04756 8.96006 7.04756ZM8.96006 8.31256C9.85109 8.31256 10.2029 8.71048 10.2413 9.27506C10.2335 9.82306 9.89452 10.2476 8.96006 10.2476C8.0734 10.2476 7.67256 9.79348 7.67256 9.25881C7.67256 8.99147 7.77011 8.79001 7.97506 8.61756C8.18001 8.44511 8.509 8.31256 8.96006 8.31256ZM7.04006 12.1601C6.87033 12.1601 6.70755 12.2275 6.58753 12.3475C6.46751 12.4675 6.40008 12.6303 6.40006 12.8001V24.9601C6.40008 25.1298 6.46751 25.2926 6.58753 25.4126C6.70755 25.5326 6.87033 25.6 7.04006 25.6001H10.8801C11.0498 25.6 11.2126 25.5326 11.3326 25.4126C11.4526 25.2926 11.52 25.1298 11.5201 24.9601V21.2063V12.8001C11.52 12.6303 11.4526 12.4675 11.3326 12.3475C11.2126 12.2275 11.0498 12.1601 10.8801 12.1601H7.04006ZM12.8001 12.1601C12.6303 12.1601 12.4675 12.2275 12.3475 12.3475C12.2275 12.4675 12.1601 12.6303 12.1601 12.8001V24.9601C12.1601 25.1298 12.2275 25.2926 12.3475 25.4126C12.4675 25.5326 12.6303 25.6 12.8001 25.6001H16.6401C16.8098 25.6 16.9726 25.5326 17.0926 25.4126C17.2126 25.2926 17.28 25.1298 17.2801 24.9601V18.5601C17.2801 18.0291 17.425 17.5009 17.6801 17.1551C17.9352 16.8092 18.257 16.6017 18.8688 16.6126C19.4997 16.6234 19.8337 16.8395 20.0863 17.1788C20.339 17.5181 20.4801 18.0267 20.4801 18.5601V24.9601C20.4801 25.1298 20.5475 25.2926 20.6675 25.4126C20.7875 25.5326 20.9503 25.6 21.1201 25.6001H24.9601C25.1298 25.6 25.2926 25.5326 25.4126 25.4126C25.5326 25.2926 25.6 25.1298 25.6001 24.9601V18.0876C25.6001 16.1922 25.0386 14.6908 24.0763 13.6751C23.114 12.6593 21.7755 12.1601 20.3601 12.1601C19.0148 12.1601 17.991 12.6112 17.2801 13.0713V12.8001C17.28 12.6303 17.2126 12.4675 17.0926 12.3475C16.9726 12.2275 16.8098 12.1601 16.6401 12.1601H12.8001ZM7.68006 13.4401H10.2401V21.2063V24.3201H7.68006V13.4401ZM13.4401 13.4401H16.0001V14.4388C16.0001 14.573 16.0423 14.7038 16.1207 14.8127C16.1992 14.9216 16.3099 15.0031 16.4371 15.0456C16.5644 15.0882 16.7018 15.0897 16.83 15.0499C16.9581 15.0101 17.0705 14.931 17.1513 14.8238C17.1513 14.8238 18.1563 13.4401 20.3601 13.4401C21.4822 13.4401 22.4445 13.8129 23.1476 14.5551C23.8507 15.2972 24.3201 16.4405 24.3201 18.0876V24.3201H21.7601V18.5601C21.7601 17.8134 21.5812 17.0414 21.1138 16.4138C20.6465 15.7862 19.8604 15.3492 18.8913 15.3326C17.9172 15.3153 17.1185 15.7613 16.6501 16.3963C16.1816 17.0313 16.0001 17.811 16.0001 18.5601V24.3201H13.4401V13.4401Z"
                    fill="white"
                  />
                </svg>
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </div>
  );
}