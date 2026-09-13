import Link from "next/link";
import styles from "./login.module.css";

export default function Login() {
    return (
        <main>
            <form className={styles.form}>
                <div className={styles.header}>
                    <div className={styles.brand}>
                        <svg width="70" height="71" viewBox="0 0 70 71" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M57.2308 60.7631C51.8705 68.6857 40.5898 70.7421 34.9613 70.7421C34.9613 70.7421 30.8201 70.907 26.781 69.8813C22.7419 68.8557 20.4189 67.2988 20.4189 67.2988C15.1944 64.28 11.8157 58.826 10.3077 54.8272C8.1647 49.1447 8.46237 43.3166 8.46237 41.2514C8.46237 38.4463 8.45323 9.19175 8.45321 8.22969C8.45306 2.25669 13.5641 0 16.1142 0C17.9568 0 18.8869 0.286771 19.8981 0.75677C22.2343 1.8426 24.5179 4.37937 24.5179 7.92618C24.5179 10.5994 24.5085 36.1672 24.5085 36.1672C24.5085 36.1672 24.4117 40.5005 24.5003 44.3258C24.6379 50.2648 26.9207 52.2486 26.9207 52.2486C29.905 55.2958 35.7654 54.6608 35.7654 54.6608C45.4142 54.3197 45.4142 48.0036 45.4142 48.0036V36.0315V31.7631C45.4142 29.2567 40.0722 29.8441 40.0722 29.8441C40.0722 29.8441 38.1121 30.0797 37.3082 30.2285C33.1422 30.999 32.2753 30.6137 30.1369 29.57C28.1094 28.1816 26.9295 26.3997 26.5201 24.9548C26.0208 22.8318 26.0911 21.3877 26.6678 19.8519C27.7818 16.8851 30.4612 15.4347 31.8632 14.9898C37.6819 13.5833 43.0384 12.9994 49.3054 14.9677C55.7085 17.2463 58.881 21.7774 60.2124 25.2384C60.983 27.2416 61.5179 29.5841 61.5179 31.5066C61.5179 35.8327 61.4898 39.9049 61.5179 43.2784C61.5476 46.8548 61.6996 50.1505 60.9855 52.5361C59.5953 57.1798 59.2548 57.7714 57.2308 60.7631Z" fill="#373737" />
                        </svg>
                    </div>
                    <h2>Sign in</h2>
                </div>

                <div className={styles.fields}>
                    <div className={styles.group}>
                        <label htmlFor="email" className={styles.label}>Email</label>
                        <input type="email" id="email" placeholder="Enter Your Email" className={styles.field} />
                    </div>

                    <Link href="./forgot" className={styles.link}>Forgot Passoword</Link>

                    <div className={styles.group}>
                        <label htmlFor="email" className={styles.label}>Passoword</label>
                        <input type="password" id="email" placeholder="Enter Your Password" className={styles.field} />
                    </div>
                    <button type="submit" className={styles.submit}>Log in</button>
                </div>
                <div className={styles.separator}>
                    <hr />
                    <span>OR</span>
                </div>
                <div className={styles.oauth}>
                    <button>
                        <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" viewBox="0 0 268.1522 273.8827" overflow="hidden" xmlSpace="preserve" width="20px" height="20px">
                            <defs>
                                <linearGradient id="a">
                                    <stop offset="0" stopColor="#0fbc5c" />
                                    <stop offset="1" stopColor="#0cba65" />
                                </linearGradient>
                                <linearGradient id="g">
                                    <stop offset=".2312727" stopColor="#0fbc5f" />
                                    <stop offset=".3115468" stopColor="#0fbc5f" />
                                    <stop offset=".3660131" stopColor="#0fbc5e" />
                                    <stop offset=".4575163" stopColor="#0fbc5d" />
                                    <stop offset=".540305" stopColor="#12bc58" />
                                    <stop offset=".6993464" stopColor="#28bf3c" />
                                    <stop offset=".7712418" stopColor="#38c02b" />
                                    <stop offset=".8605665" stopColor="#52c218" />
                                    <stop offset=".9150327" stopColor="#67c30f" />
                                    <stop offset="1" stopColor="#86c504" />
                                </linearGradient>
                                <linearGradient id="h">
                                    <stop offset=".1416122" stopColor="#1abd4d" />
                                    <stop offset=".2475151" stopColor="#6ec30d" />
                                    <stop offset=".3115468" stopColor="#8ac502" />
                                    <stop offset=".3660131" stopColor="#a2c600" />
                                    <stop offset=".4456735" stopColor="#c8c903" />
                                    <stop offset=".540305" stopColor="#ebcb03" />
                                    <stop offset=".6156363" stopColor="#f7cd07" />
                                    <stop offset=".6993454" stopColor="#fdcd04" />
                                    <stop offset=".7712418" stopColor="#fdce05" />
                                    <stop offset=".8605661" stopColor="#ffce0a" />
                                </linearGradient>
                                <linearGradient id="f">
                                    <stop offset=".3159041" stopColor="#ff4c3c" />
                                    <stop offset=".6038179" stopColor="#ff692c" />
                                    <stop offset=".7268366" stopColor="#ff7825" />
                                    <stop offset=".884534" stopColor="#ff8d1b" />
                                    <stop offset="1" stopColor="#ff9f13" />
                                </linearGradient>
                                <linearGradient id="b">
                                    <stop offset=".2312727" stopColor="#ff4541" />
                                    <stop offset=".3115468" stopColor="#ff4540" />
                                    <stop offset=".4575163" stopColor="#ff4640" />
                                    <stop offset=".540305" stopColor="#ff473f" />
                                    <stop offset=".6993464" stopColor="#ff5138" />
                                    <stop offset=".7712418" stopColor="#ff5b33" />
                                    <stop offset=".8605665" stopColor="#ff6c29" />
                                    <stop offset="1" stopColor="#ff8c18" />
                                </linearGradient>
                                <linearGradient id="d">
                                    <stop offset=".4084578" stopColor="#fb4e5a" />
                                    <stop offset="1" stopColor="#ff4540" />
                                </linearGradient>
                                <linearGradient id="c">
                                    <stop offset=".1315461" stopColor="#0cba65" />
                                    <stop offset=".2097843" stopColor="#0bb86d" />
                                    <stop offset=".2972969" stopColor="#09b479" />
                                    <stop offset=".3962575" stopColor="#08ad93" />
                                    <stop offset=".4771242" stopColor="#0aa6a9" />
                                    <stop offset=".5684245" stopColor="#0d9cc6" />
                                    <stop offset=".667385" stopColor="#1893dd" />
                                    <stop offset=".7687273" stopColor="#258bf1" />
                                    <stop offset=".8585063" stopColor="#3086ff" />
                                </linearGradient>
                                <linearGradient id="e">
                                    <stop offset=".3660131" stopColor="#ff4e3a" />
                                    <stop offset=".4575163" stopColor="#ff8a1b" />
                                    <stop offset=".540305" stopColor="#ffa312" />
                                    <stop offset=".6156363" stopColor="#ffb60c" />
                                    <stop offset=".7712418" stopColor="#ffcd0a" />
                                    <stop offset=".8605665" stopColor="#fecf0a" />
                                    <stop offset=".9150327" stopColor="#fecf08" />
                                    <stop offset="1" stopColor="#fdcd01" />
                                </linearGradient>
                                <linearGradient xlinkHref="#a" id="s" x1="219.6997" y1="329.5351" x2="254.4673" y2="329.5351" gradientUnits="userSpaceOnUse" />
                                <radialGradient xlinkHref="#b" id="m" gradientUnits="userSpaceOnUse" gradientTransform="matrix(-1.936885,1.043001,1.455731,2.555422,290.5254,-400.6338)" cx="109.6267" cy="135.8619" fx="109.6267" fy="135.8619" r="71.46001" />
                                <radialGradient xlinkHref="#c" id="n" gradientUnits="userSpaceOnUse" gradientTransform="matrix(-3.512595,-4.45809,-1.692547,1.260616,870.8006,191.554)" cx="45.25866" cy="279.2738" fx="45.25866" fy="279.2738" r="71.46001" />
                                <radialGradient xlinkHref="#d" id="l" cx="304.0166" cy="118.0089" fx="304.0166" fy="118.0089" r="47.85445" gradientTransform="matrix(2.064353,-4.926832e-6,-2.901531e-6,2.592041,-297.6788,-151.7469)" gradientUnits="userSpaceOnUse" />
                                <radialGradient xlinkHref="#e" id="o" gradientUnits="userSpaceOnUse" gradientTransform="matrix(-0.2485783,2.083138,2.962486,0.3341668,-255.1463,-331.1636)" cx="181.001" cy="177.2013" fx="181.001" fy="177.2013" r="71.46001" />
                                <radialGradient xlinkHref="#f" id="p" cx="207.6733" cy="108.0972" fx="207.6733" fy="108.0972" r="41.1025" gradientTransform="matrix(-1.249206,1.343263,-3.896837,-3.425693,880.5011,194.9051)" gradientUnits="userSpaceOnUse" />
                                <radialGradient xlinkHref="#g" id="r" gradientUnits="userSpaceOnUse" gradientTransform="matrix(-1.936885,-1.043001,1.455731,-2.555422,290.5254,838.6834)" cx="109.6267" cy="135.8619" fx="109.6267" fy="135.8619" r="71.46001" />
                                <radialGradient xlinkHref="#h" id="j" gradientUnits="userSpaceOnUse" gradientTransform="matrix(-0.081402,-1.93722,2.926737,-0.1162508,-215.1345,632.8606)" cx="154.8697" cy="145.9691" fx="154.8697" fy="145.9691" r="71.46001" />
                                <filter id="q" x="-.04842873" y="-.0582241" width="1.096857" height="1.116448" colorInterpolationFilters="sRGB">
                                    <feGaussianBlur stdDeviation="1.700914" />
                                </filter>
                                <filter id="k" x="-.01670084" y="-.01009856" width="1.033402" height="1.020197" colorInterpolationFilters="sRGB">
                                    <feGaussianBlur stdDeviation=".2419367" />
                                </filter>
                                <clipPath clipPathUnits="userSpaceOnUse" id="i">
                                    <path d="M371.3784 193.2406H237.0825v53.4375h77.167c-1.2405 7.5627-4.0259 15.0024-8.1049 21.7862-4.6734 7.7723-10.4511 13.6895-16.373 18.1957-17.7389 13.4983-38.42 16.2584-52.7828 16.2584-36.2824 0-67.2833-23.2865-79.2844-54.9287-.4843-1.1482-.8059-2.3344-1.1975-3.5068-2.652-8.0533-4.101-16.5825-4.101-25.4474 0-9.226 1.5691-18.0575 4.4301-26.3985 11.2851-32.8967 42.9849-57.4674 80.1789-57.4674 7.4811 0 14.6854.8843 21.5173 2.6481 15.6135 4.0309 26.6578 11.9698 33.4252 18.2494l40.834-39.7111c-24.839-22.616-57.2194-36.3201-95.8444-36.3201-30.8782-.00066-59.3863 9.55308-82.7477 25.6992-18.9454 13.0941-34.4833 30.6254-44.9695 50.9861-9.75366 18.8785-15.09441 39.7994-15.09441 62.2934 0 22.495 5.34891 43.6334 15.10261 62.3374v.126c10.3023 19.8567 25.3678 36.9537 43.6783 49.9878 15.9962 11.3866 44.6789 26.5516 84.0307 26.5516 22.6301 0 42.6867-4.0517 60.3748-11.6447 12.76-5.4775 24.0655-12.6217 34.3012-21.8036 13.5247-12.1323 24.1168-27.1388 31.3465-44.4041 7.2297-17.2654 11.097-36.7895 11.097-57.957 0-9.858-.9971-19.8694-2.6881-28.9684Z" fill="#000" />
                                </clipPath>
                            </defs>
                            <g transform="matrix(0.957922,0,0,0.985255,-90.17436,-78.85577)">
                                <g clipPath="url(#i)">
                                    <path d="M92.07563 219.9585c.14844 22.14 6.5014 44.983 16.11767 63.4234v.1269c6.9482 13.3919 16.4444 23.9704 27.2604 34.4518l65.326-23.67c-12.3593-6.2344-14.2452-10.0546-23.1048-17.0253-9.0537-9.0658-15.8015-19.4735-20.0038-31.677h-.1693l.1693-.1269c-2.7646-8.0587-3.0373-16.6129-3.1393-25.5029Z" fill="url(#j)" filter="url(#k)" />
                                    <path d="M237.0835 79.02491c-6.4568 22.52569-3.988 44.42139 0 57.16129 7.4561.0055 14.6388.8881 21.4494 2.6464 15.6135 4.0309 26.6566 11.97 33.424 18.2496l41.8794-40.7256c-24.8094-22.58904-54.6663-37.2961-96.7528-37.33169Z" fill="url(#l)" filter="url(#k)" />
                                    <path d="M236.9434 78.84678c-31.6709-.00068-60.9107 9.79833-84.8718 26.35902-8.8968 6.149-17.0612 13.2521-24.3311 21.1509-1.9045 17.7429 14.2569 39.5507 46.2615 39.3702 15.5284-17.9373 38.4946-29.5427 64.0561-29.5427.0233 0 .046.0019.0693.002l-1.0439-57.33536c-.0472-.00003-.0929-.00406-.1401-.00406Z" fill="url(#m)" filter="url(#k)" />
                                    <path d="m341.4751 226.3788-28.2685 19.2848c-1.2405 7.5627-4.0278 15.0023-8.1068 21.7861-4.6734 7.7723-10.4506 13.6898-16.3725 18.196-17.7022 13.4704-38.3286 16.2439-52.6877 16.2553-14.8415 25.1018-17.4435 37.6749 1.0439 57.9342 22.8762-.0167 43.157-4.1174 61.0458-11.7965 12.9312-5.551 24.3879-12.7913 34.7609-22.0964 13.7061-12.295 24.4421-27.5034 31.7688-45.0003 7.3267-17.497 11.2446-37.2822 11.2446-58.7336Z" fill="url(#n)" filter="url(#k)" />
                                    <path d="M234.9956 191.2104v57.4981h136.0062c1.1962-7.8745 5.1523-18.0644 5.1523-26.5001 0-9.858-.9963-21.899-2.6873-30.998Z" fill="#3086ff" filter="url(#k)" />
                                    <path d="M128.3894 124.3268c-8.393 9.1191-15.5632 19.326-21.2483 30.3646-9.75351 18.8785-15.09402 41.8295-15.09402 64.3235 0 .317.02642.6271.02855.9436 4.31953 8.2244 59.66647 6.6495 62.45617 0-.0035-.3103-.0387-.6128-.0387-.9238 0-9.226 1.5696-16.0262 4.4306-24.3672 3.5294-10.2885 9.0557-19.7628 16.1223-27.9257 1.6019-2.0309 5.8748-6.3969 7.1214-9.0157.4749-.9975-.8621-1.5574-.9369-1.9085-.0836-.3927-1.8762-.0769-2.2778-.3694-1.2751-.9288-3.8001-1.4138-5.3334-1.8449-3.2772-.9215-8.7085-2.9536-11.7252-5.0601-9.5357-6.6586-24.417-14.6122-33.5047-24.2164Z" fill="url(#o)" filter="url(#k)" />
                                    <path d="M162.0989 155.8569c22.1123 13.3013 28.4714-6.7139 43.173-12.9771L179.698 90.21568c-9.4075 3.92642-18.2957 8.80465-26.5426 14.50442-12.316 8.5122-23.192 18.8995-32.1763 30.7204Z" fill="url(#p)" filter="url(#q)" />
                                    <path d="M171.0987 290.222c-29.6829 10.6413-34.3299 11.023-37.0622 29.2903 5.2213 5.0597 10.8312 9.74 16.7926 13.9835 15.9962 11.3867 46.766 26.5517 86.1178 26.5517.0462 0 .0904-.004.1366-.004v-59.1574c-.0298.0001-.064.002-.0938.002-14.7359 0-26.5113-3.8435-38.5848-10.5273-2.9768-1.6479-8.3775 2.7772-11.1229.799-3.7865-2.7284-12.8991 2.3508-16.1833-.9378Z" fill="url(#r)" filter="url(#k)" />
                                    <path d="M219.6997 299.0227v59.9959c5.506.6402 11.2361 1.0289 17.2472 1.0289 6.0259 0 11.8556-.3073 17.5204-.8723v-59.7481c-6.3482 1.0777-12.3272 1.461-17.4776 1.461-5.9318 0-11.7005-.6858-17.29-1.8654Z" opacity=".5" fill="url(#s)" filter="url(#k)" />
                                </g>
                            </g>
                        </svg>
                    </button>
                    <button>
                        <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 2499.6 2500" height="20px" width="20px">
                            <path d="m1187.9 1187.9h-1187.9v-1187.9h1187.9z" fill="#f1511b">
                            </path>
                            <path d="m2499.6 1187.9h-1188v-1187.9h1187.9v1187.9z" fill="#80cc28">
                            </path>
                            <path d="m1187.9 2500h-1187.9v-1187.9h1187.9z" fill="#00adef">
                            </path>
                            <path d="m2499.6 2500h-1188v-1187.9h1187.9v1187.9z" fill="#fbbc09">
                            </path>
                        </svg>
                    </button>
                    <button>
                        <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" id="Layer_1" x="0px" y="0px" viewBox="0 0 40 40" xmlSpace="preserve" width="20px" height="20px">
                            <linearGradient id="SVGID_1_" gradientUnits="userSpaceOnUse" x1="-277.375" y1="406.6018" x2="-277.375" y2="407.5726" gradientTransform="matrix(40 0 0 -39.7778 11115.001 16212.334)">
                                <stop offset="0" stopColor="#0062E0" />
                                <stop offset="1" stopColor="#19AFFF" />
                            </linearGradient>
                            <path fill="url(#SVGID_1_)" d="M16.7,39.8C7.2,38.1,0,29.9,0,20C0,9,9,0,20,0s20,9,20,20c0,9.9-7.2,18.1-16.7,19.8l-1.1-0.9h-4.4L16.7,39.8z" />
                            <path fill="#FFFFFF" d="M27.8,25.6l0.9-5.6h-5.3v-3.9c0-1.6,0.6-2.8,3-2.8h2.6V8.2c-1.4-0.2-3-0.4-4.4-0.4c-4.6,0-7.8,2.8-7.8,7.8V20  h-5v5.6h5v14.1c1.1,0.2,2.2,0.3,3.3,0.3c1.1,0,2.2-0.1,3.3-0.3V25.6H27.8z" />
                        </svg>
                    </button>
                    <button>
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M17.0409 17.0408H14.0776V12.4C14.0776 11.2934 14.0578 9.86879 12.5363 9.86879C10.9929 9.86879 10.7567 11.0745 10.7567 12.3194V17.0405H7.79336V7.49716H10.6382V8.80135H10.678C10.9627 8.31457 11.3741 7.91412 11.8684 7.64265C12.3627 7.37118 12.9214 7.23886 13.4849 7.25978C16.4884 7.25978 17.0422 9.23537 17.0422 11.8055L17.0409 17.0408ZM4.44969 6.19266C4.10957 6.19272 3.77706 6.09192 3.49422 5.90301C3.21139 5.7141 2.99094 5.44556 2.86073 5.13135C2.73051 4.81715 2.69638 4.47138 2.76268 4.13778C2.82897 3.80419 2.99271 3.49774 3.23317 3.25719C3.47363 3.01665 3.78002 2.85281 4.11359 2.78639C4.44716 2.71998 4.79293 2.75397 5.10719 2.88408C5.42144 3.01418 5.69006 3.23454 5.87907 3.51731C6.06808 3.80008 6.16901 4.13254 6.16907 4.47267C6.16911 4.6985 6.12466 4.92213 6.03827 5.13078C5.95189 5.33944 5.82527 5.52904 5.66561 5.68876C5.50595 5.84847 5.31638 5.97518 5.10775 6.06164C4.89913 6.1481 4.67552 6.19262 4.44969 6.19266ZM5.93137 17.0408H2.96491V7.49716H5.93137V17.0408ZM18.5183 0.00136259H1.47583C1.08901 -0.00300264 0.716265 0.146381 0.439533 0.416688C0.162802 0.686995 0.00472088 1.05611 0 1.44292V18.5561C0.00455931 18.9431 0.162547 19.3125 0.43927 19.5831C0.715992 19.8537 1.08882 20.0033 1.47583 19.9992H18.5183C18.9061 20.0041 19.28 19.8548 19.5578 19.5842C19.8356 19.3137 19.9946 18.9439 20 18.5561V1.44169C19.9945 1.05411 19.8353 0.684573 19.5575 0.414273C19.2797 0.143973 18.9059 -0.00498436 18.5183 0.000127347" fill="#0A66C2" />
                        </svg>
                    </button>
                </div>

                <div className={styles.footer}>
                    <p>Don't have account yet?</p>
                    <Link href="./signup" className={styles.signup}>
                        Sign Up
                    </Link>
                </div>
            </form>
        </main>
    )
}