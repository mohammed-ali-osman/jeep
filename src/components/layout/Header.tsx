"use client"
import Link from "next/link"
import styles from "./header.module.css"
import { useState, useRef } from "react";
import { Dropdown } from "../Dropdown";
import Theme from "../header/theme/Theme";
import Search from "../header/search/Search";
import Notification from "../header/notification/Notification";
import Avatar from "../header/avatar/Avatar";

export default function Header({ isAuthenticated }: { isAuthenticated: boolean }) {

  const item = 0;

  const [country, setCountry] = useState("United States");
  const [language, setLanguage] = useState("English");

  const categoriesRef = useRef<HTMLDivElement>(null);

  const scrollRight = () => {
    if (categoriesRef.current) {
      categoriesRef.current.scrollBy({
        left: 250,
        behavior: "smooth",
      });
    }
  };

  const countries = [
    { label: "Afghanistan", value: "AF" },
    { label: "Albania", value: "AL" },
    { label: "Algeria", value: "DZ" },
    { label: "Andorra", value: "AD" },
    { label: "Angola", value: "AO" },
    { label: "Antigua and Barbuda", value: "AG" },
    { label: "Argentina", value: "AR" },
    { label: "Armenia", value: "AM" },
    { label: "Australia", value: "AU" },
    { label: "Austria", value: "AT" },
    { label: "Azerbaijan", value: "AZ" },
    { label: "Bahamas", value: "BS" },
    { label: "Bahrain", value: "BH" },
    { label: "Bangladesh", value: "BD" },
    { label: "Barbados", value: "BB" },
    { label: "Belarus", value: "BY" },
    { label: "Belgium", value: "BE" },
    { label: "Belize", value: "BZ" },
    { label: "Benin", value: "BJ" },
    { label: "Bhutan", value: "BT" },
    { label: "Bolivia", value: "BO" },
    { label: "Bosnia and Herzegovina", value: "BA" },
    { label: "Botswana", value: "BW" },
    { label: "Brazil", value: "BR" },
    { label: "Brunei", value: "BN" },
    { label: "Bulgaria", value: "BG" },
    { label: "Burkina Faso", value: "BF" },
    { label: "Burundi", value: "BI" },
    { label: "Cabo Verde", value: "CV" },
    { label: "Cambodia", value: "KH" },
    { label: "Cameroon", value: "CM" },
    { label: "Canada", value: "CA" },
    { label: "Central African Republic", value: "CF" },
    { label: "Chad", value: "TD" },
    { label: "Chile", value: "CL" },
    { label: "China", value: "CN" },
    { label: "Colombia", value: "CO" },
    { label: "Comoros", value: "KM" },
    { label: "Congo", value: "CG" },
    { label: "Costa Rica", value: "CR" },
    { label: "Croatia", value: "HR" },
    { label: "Cuba", value: "CU" },
    { label: "Cyprus", value: "CY" },
    { label: "Czechia", value: "CZ" },
    { label: "Democratic Republic of the Congo", value: "CD" },
    { label: "Denmark", value: "DK" },
    { label: "Djibouti", value: "DJ" },
    { label: "Dominica", value: "DM" },
    { label: "Dominican Republic", value: "DO" },
    { label: "Ecuador", value: "EC" },
    { label: "Egypt", value: "EG" },
    { label: "El Salvador", value: "SV" },
    { label: "Equatorial Guinea", value: "GQ" },
    { label: "Eritrea", value: "ER" },
    { label: "Estonia", value: "EE" },
    { label: "Eswatini", value: "SZ" },
    { label: "Ethiopia", value: "ET" },
    { label: "Fiji", value: "FJ" },
    { label: "Finland", value: "FI" },
    { label: "France", value: "FR" },
    { label: "Gabon", value: "GA" },
    { label: "Gambia", value: "GM" },
    { label: "Georgia", value: "GE" },
    { label: "Germany", value: "DE" },
    { label: "Ghana", value: "GH" },
    { label: "Greece", value: "GR" },
    { label: "Grenada", value: "GD" },
    { label: "Guatemala", value: "GT" },
    { label: "Guinea", value: "GN" },
    { label: "Guinea-Bissau", value: "GW" },
    { label: "Guyana", value: "GY" },
    { label: "Haiti", value: "HT" },
    { label: "Honduras", value: "HN" },
    { label: "Hungary", value: "HU" },
    { label: "Iceland", value: "IS" },
    { label: "India", value: "IN" },
    { label: "Indonesia", value: "ID" },
    { label: "Iran", value: "IR" },
    { label: "Iraq", value: "IQ" },
    { label: "Ireland", value: "IE" },
    { label: "Israel", value: "IL" },
    { label: "Italy", value: "IT" },
    { label: "Jamaica", value: "JM" },
    { label: "Japan", value: "JP" },
    { label: "Jordan", value: "JO" },
    { label: "Kazakhstan", value: "KZ" },
    { label: "Kenya", value: "KE" },
    { label: "Kiribati", value: "KI" },
    { label: "Kuwait", value: "KW" },
    { label: "Kyrgyzstan", value: "KG" },
    { label: "Laos", value: "LA" },
    { label: "Latvia", value: "LV" },
    { label: "Lebanon", value: "LB" },
    { label: "Lesotho", value: "LS" },
    { label: "Liberia", value: "LR" },
    { label: "Libya", value: "LY" },
    { label: "Liechtenstein", value: "LI" },
    { label: "Lithuania", value: "LT" },
    { label: "Luxembourg", value: "LU" },
    { label: "Madagascar", value: "MG" },
    { label: "Malawi", value: "MW" },
    { label: "Malaysia", value: "MY" },
    { label: "Maldives", value: "MV" },
    { label: "Mali", value: "ML" },
    { label: "Malta", value: "MT" },
    { label: "Marshall Islands", value: "MH" },
    { label: "Mauritania", value: "MR" },
    { label: "Mauritius", value: "MU" },
    { label: "Mexico", value: "MX" },
    { label: "Micronesia", value: "FM" },
    { label: "Moldova", value: "MD" },
    { label: "Monaco", value: "MC" },
    { label: "Mongolia", value: "MN" },
    { label: "Montenegro", value: "ME" },
    { label: "Morocco", value: "MA" },
    { label: "Mozambique", value: "MZ" },
    { label: "Myanmar", value: "MM" },
    { label: "Namibia", value: "NA" },
    { label: "Nauru", value: "NR" },
    { label: "Nepal", value: "NP" },
    { label: "Netherlands", value: "NL" },
    { label: "New Zealand", value: "NZ" },
    { label: "Nicaragua", value: "NI" },
    { label: "Niger", value: "NE" },
    { label: "Nigeria", value: "NG" },
    { label: "North Korea", value: "KP" },
    { label: "North Macedonia", value: "MK" },
    { label: "Norway", value: "NO" },
    { label: "Oman", value: "OM" },
    { label: "Pakistan", value: "PK" },
    { label: "Palau", value: "PW" },
    { label: "Palestine", value: "PS" },
    { label: "Panama", value: "PA" },
    { label: "Papua New Guinea", value: "PG" },
    { label: "Paraguay", value: "PY" },
    { label: "Peru", value: "PE" },
    { label: "Philippines", value: "PH" },
    { label: "Poland", value: "PL" },
    { label: "Portugal", value: "PT" },
    { label: "Qatar", value: "QA" },
    { label: "Romania", value: "RO" },
    { label: "Russia", value: "RU" },
    { label: "Rwanda", value: "RW" },
    { label: "Saint Kitts and Nevis", value: "KN" },
    { label: "Saint Lucia", value: "LC" },
    { label: "Saint Vincent and the Grenadines", value: "VC" },
    { label: "Samoa", value: "WS" },
    { label: "San Marino", value: "SM" },
    { label: "Sao Tome and Principe", value: "ST" },
    { label: "Saudi Arabia", value: "SA" },
    { label: "Senegal", value: "SN" },
    { label: "Serbia", value: "RS" },
    { label: "Seychelles", value: "SC" },
    { label: "Sierra Leone", value: "SL" },
    { label: "Singapore", value: "SG" },
    { label: "Slovakia", value: "SK" },
    { label: "Slovenia", value: "SI" },
    { label: "Solomon Islands", value: "SB" },
    { label: "Somalia", value: "SO" },
    { label: "South Africa", value: "ZA" },
    { label: "South Korea", value: "KR" },
    { label: "South Sudan", value: "SS" },
    { label: "Spain", value: "ES" },
    { label: "Sri Lanka", value: "LK" },
    { label: "Sudan", value: "SD" },
    { label: "Suriname", value: "SR" },
    { label: "Sweden", value: "SE" },
    { label: "Switzerland", value: "CH" },
    { label: "Syria", value: "SY" },
    { label: "Taiwan", value: "TW" },
    { label: "Tajikistan", value: "TJ" },
    { label: "Tanzania", value: "TZ" },
    { label: "Thailand", value: "TH" },
    { label: "Timor-Leste", value: "TL" },
    { label: "Togo", value: "TG" },
    { label: "Tonga", value: "TO" },
    { label: "Trinidad and Tobago", value: "TT" },
    { label: "Tunisia", value: "TN" },
    { label: "Turkey", value: "TR" },
    { label: "Turkmenistan", value: "TM" },
    { label: "Tuvalu", value: "TV" },
    { label: "Uganda", value: "UG" },
    { label: "Ukraine", value: "UA" },
    { label: "United Arab Emirates", value: "AE" },
    { label: "United Kingdom", value: "GB" },
    { label: "United States", value: "US" },
    { label: "Uruguay", value: "UY" },
    { label: "Uzbekistan", value: "UZ" },
    { label: "Vanuatu", value: "VU" },
    { label: "Vatican City", value: "VA" },
    { label: "Venezuela", value: "VE" },
    { label: "Vietnam", value: "VN" },
    { label: "Yemen", value: "YE" },
    { label: "Zambia", value: "ZM" },
    { label: "Zimbabwe", value: "ZW" },
  ];

  const categories = [
    "Electronics",
    "Men's Fashion",
    "Women's Fashion",
    "Kids' Fashion",
    "Home & Kitchen",
    "Beauty & Fragrance",
    "Health & Nutrition",
    "Baby",
    "Toys",
    "Sports & Outdoors",
    "Grocery",
    "Automotive",
    "Stationery",
    "Books & Media",
    "Food"
  ];

  const languages = [
    { label: "English", value: "en" },
    { label: "Spanish", value: "es" },
    { label: "Arabic", value: "ar" },
    { label: "French", value: "fr" },
    { label: "German", value: "de" },
    { label: "Portuguese", value: "pt" },
    { label: "Italian", value: "it" },
    { label: "Dutch", value: "nl" },
    { label: "Russian", value: "ru" },
    { label: "Chinese (Simplified)", value: "zh-CN" },
    { label: "Chinese (Traditional)", value: "zh-TW" },
    { label: "Japanese", value: "ja" },
    { label: "Korean", value: "ko" },
    { label: "Hindi", value: "hi" },
    { label: "Turkish", value: "tr" },
    { label: "Polish", value: "pl" },
    { label: "Ukrainian", value: "uk" },
    { label: "Swedish", value: "sv" },
    { label: "Norwegian", value: "no" },
    { label: "Danish", value: "da" },
    { label: "Finnish", value: "fi" },
    { label: "Greek", value: "el" },
    { label: "Hebrew", value: "he" },
    { label: "Thai", value: "th" },
    { label: "Vietnamese", value: "vi" },
    { label: "Indonesian", value: "id" },
    { label: "Malay", value: "ms" },
    { label: "Bengali", value: "bn" },
    { label: "Urdu", value: "ur" },
    { label: "Swahili", value: "sw" },
  ];

  return (
    <header>
      <div className={styles.header}>
        <Link href="/" aria-label="Home" className={styles.logo}>
          <svg width="35" height="36" viewBox="0 0 35 36" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <path d="M28.6154 30.3815C25.9352 34.3429 20.2949 35.371 17.4806 35.371C17.4806 35.371 15.41 35.4535 13.3905 34.9407C11.3709 34.4278 10.2094 33.6494 10.2094 33.6494C7.59719 32.14 5.90782 29.413 5.15381 27.4136C4.08232 24.5724 4.23116 21.6583 4.23116 20.6257C4.23116 19.2231 4.22658 4.59588 4.22657 4.11484C4.2265 1.12835 6.78202 0 8.05705 0C8.97836 0 9.44343 0.143385 9.94903 0.378385C11.1171 0.921301 12.2589 2.18969 12.2589 3.96309C12.2589 5.29969 12.2542 18.0836 12.2542 18.0836C12.2542 18.0836 12.2058 20.2503 12.2501 22.1629C12.3189 25.1324 13.4603 26.1243 13.4603 26.1243C14.9525 27.6479 17.8827 27.3304 17.8827 27.3304C22.7071 27.1599 22.7071 24.0018 22.7071 24.0018V18.0157V15.8815C22.7071 14.6283 20.0361 14.9221 20.0361 14.9221C20.0361 14.9221 19.056 15.0399 18.654 15.1142C16.5711 15.4995 16.1376 15.3069 15.0684 14.785C14.0547 14.0908 13.4647 13.1998 13.26 12.4774C13.0104 11.4159 13.0455 10.6938 13.3339 9.92593C13.8909 8.44253 15.2306 7.71736 15.9315 7.4949C18.8409 6.79164 21.5192 6.49971 24.6527 7.48386C27.8542 8.62314 29.4405 10.8887 30.1062 12.6192C30.4915 13.6208 30.7589 14.792 30.7589 15.7533C30.7589 17.9164 30.7449 19.9524 30.7589 21.6392C30.7738 23.4274 30.8498 25.0752 30.4927 26.2681C29.7976 28.5899 29.6274 28.8857 28.6154 30.3815Z" fill="#373737" />
          </svg>
        </Link>

        <Dropdown
          options={countries}
          value={country}
          onChange={setCountry}
          label="Select Country"
          startIcon={<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <path fillRule="evenodd" clipRule="evenodd" d="M12.2848 18.9935C12.1567 19.0875 12.0373 19.1728 11.9282 19.2493C11.8118 19.1721 11.6827 19.0833 11.5427 18.9832C10.8826 18.5109 10.0265 17.8176 9.18338 16.9529C7.45402 15.1792 6 12.9151 6 10.5C6 7.18629 8.68629 4.5 12 4.5C15.3137 4.5 18 7.18629 18 10.5C18 12.8892 16.4819 15.1468 14.6893 16.9393C13.8196 17.8091 12.9444 18.5099 12.2848 18.9935ZM19.5 10.5C19.5 16.5 12 21 12 21C11.625 21 4.5 16.5 4.5 10.5C4.5 6.35786 7.85786 3 12 3C16.1421 3 19.5 6.35786 19.5 10.5ZM13.5 10.5C13.5 11.3284 12.8284 12 12 12C11.1716 12 10.5 11.3284 10.5 10.5C10.5 9.67157 11.1716 9 12 9C12.8284 9 13.5 9.67157 13.5 10.5ZM15 10.5C15 12.1569 13.6569 13.5 12 13.5C10.3431 13.5 9 12.1569 9 10.5C9 8.84315 10.3431 7.5 12 7.5C13.6569 7.5 15 8.84315 15 10.5Z" fill="#6C6C6C" stroke="#6C6C6C" strokeWidth="0.5" />
          </svg>}
          styles={{
            container: styles.addressContainer,
            button: styles.address,
            menu: styles.menu,
            menuOpen: styles.open, // Target CSS .open class
            list: styles.list,
            option: styles.option,
            selectedOption: styles.selected
          }}
        />

        <Search />

        <Dropdown
          options={languages}
          value={language}
          onChange={setLanguage}
          startIcon={
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" clipRule="evenodd" d="M9.66123 4.61741C9.45013 4.68429 9.24167 4.76029 9.03643 4.8453C8.09687 5.23449 7.24314 5.80492 6.52403 6.52403C5.80492 7.24314 5.23449 8.09687 4.8453 9.03643C4.53645 9.78206 4.34655 10.5702 4.28131 11.3721H8.03242C8.0592 10.4546 8.14464 9.55041 8.28661 8.6935C8.46069 7.64281 8.7179 6.67463 9.04902 5.84683C9.22979 5.3949 9.43403 4.98118 9.66123 4.61741ZM12 3C10.8181 3 9.64777 3.2328 8.55585 3.68508C7.46392 4.13738 6.47176 4.80032 5.63603 5.63603C4.80032 6.47176 4.13738 7.46392 3.68509 8.55585C3.2328 9.64777 3 10.8181 3 12C3 13.1819 3.2328 14.3523 3.68508 15.4441C4.13738 16.5361 4.80032 17.5283 5.63603 18.364C6.47176 19.1997 7.46392 19.8626 8.55585 20.3149C9.64777 20.7671 10.8181 21 12 21C13.1819 21 14.3523 20.7671 15.4441 20.3149C16.5361 19.8626 17.5283 19.1997 18.364 18.364C19.1997 17.5283 19.8626 16.5361 20.3149 15.4441C20.7671 14.3523 21 13.1819 21 12C21 10.8181 20.7671 9.64777 20.3149 8.55585C19.8626 7.46392 19.1997 6.47176 18.364 5.63603C17.5283 4.80032 16.5361 4.13738 15.4441 3.68509C14.3523 3.2328 13.1819 3 12 3ZM12 4.25582C11.7812 4.25582 11.4987 4.36113 11.1702 4.70137C10.8391 5.04414 10.5078 5.58133 10.215 6.31323C9.92415 7.04028 9.68805 7.91797 9.52554 8.89878C9.39515 9.68569 9.3152 10.5207 9.2888 11.3721H14.7112C14.6848 10.5207 14.6048 9.68569 14.4744 8.89878C14.312 7.91797 14.0757 7.04029 13.785 6.31324C13.4922 5.58133 13.1609 5.04414 12.8298 4.70137C12.5013 4.36113 12.2188 4.25582 12 4.25582ZM15.9677 11.3721C15.9409 10.4546 15.8554 9.55041 15.7134 8.6935C15.5393 7.64281 15.2821 6.67463 14.951 5.84683C14.7702 5.3949 14.566 4.98118 14.3388 4.61741C14.5499 4.68429 14.7584 4.76029 14.9636 4.8453C15.9032 5.23449 16.7568 5.80492 17.4759 6.52403C18.1952 7.24315 18.7655 8.09687 19.1547 9.03643C19.4636 9.78206 19.6535 10.5702 19.7186 11.3721H15.9677ZM14.7112 12.6279H9.2888C9.3152 13.4793 9.39515 14.3144 9.52554 15.1012C9.68805 16.0821 9.92415 16.9597 10.215 17.6868C10.5078 18.4187 10.8391 18.9559 11.1702 19.2987C11.4987 19.6389 11.7812 19.7442 12 19.7442C12.2188 19.7442 12.5013 19.6389 12.8298 19.2987C13.1609 18.9559 13.4922 18.4187 13.785 17.6868C14.0757 16.9597 14.312 16.0821 14.4744 15.1012C14.6048 14.3144 14.6848 13.4793 14.7112 12.6279ZM14.3388 19.3826C14.566 19.0189 14.7702 18.6051 14.951 18.1532C15.2821 17.3254 15.5393 16.3571 15.7134 15.3065C15.8554 14.4496 15.9409 13.5454 15.9677 12.6279H19.7186C19.6535 13.4298 19.4636 14.2179 19.1547 14.9636C18.7655 15.9032 18.1952 16.7568 17.4759 17.4759C16.7568 18.1952 15.9032 18.7655 14.9636 19.1547C14.7584 19.2397 14.5499 19.3156 14.3388 19.3826ZM9.66123 19.3826C9.43403 19.0189 9.22979 18.6051 9.04901 18.1532C8.71789 17.3254 8.46069 16.3571 8.28661 15.3065C8.14464 14.4496 8.0592 13.5454 8.03242 12.6279H4.28131C4.34655 13.4298 4.53645 14.2179 4.8453 14.9636C5.23449 15.9032 5.80492 16.7568 6.52403 17.4759C7.24314 18.1952 8.09687 18.7655 9.03643 19.1547C9.24167 19.2397 9.45013 19.3156 9.66123 19.3826Z" fill="#6C6C6C" stroke="#6C6C6C" strokeWidth="0.5" />
            </svg>
          }
          // showArrow={true}
          styles={{
            container: styles.langContainer, // wrapper if needed inside search bar
            button: styles.language,             // existing filter button styles
            menu: styles.menu,           // custom positioning inside search bar if needed
            menuOpen: styles.open,
            list: styles.list,
            option: styles.option,
            selectedOption: styles.selected
          }}
        />

        <nav className={styles.navigations}>

          <Theme />

          <Notification />

          <Link
            href="/cart"
            className={`${styles.actions} ${styles.cart}`}
            aria-label={`Shopping cart, ${item} items`}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <path d="M8.35385 20.95C8.85077 20.95 9.2536 20.5472 9.2536 20.0503C9.2536 19.5533 8.85077 19.1505 8.35385 19.1505C7.85693 19.1505 7.4541 19.5533 7.4541 20.0503C7.4541 20.5472 7.85693 20.95 8.35385 20.95Z" stroke="#6C6C6C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M18.2508 20.95C18.7477 20.95 19.1506 20.5472 19.1506 20.0503C19.1506 19.5533 18.7477 19.1505 18.2508 19.1505C17.7539 19.1505 17.3511 19.5533 17.3511 20.0503C17.3511 20.5472 17.7539 20.95 18.2508 20.95Z" stroke="#6C6C6C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M3 3H4.7995L7.19284 14.1749C7.28064 14.5842 7.50836 14.95 7.8368 15.2095C8.16525 15.469 8.57388 15.6058 8.99235 15.5965H17.7919C18.2015 15.5959 18.5985 15.4555 18.9175 15.1987C19.2365 14.9418 19.4584 14.5839 19.5464 14.1839L21.031 7.49876H5.76224" stroke="#6C6C6C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>

          <Avatar />

        </nav>
      </div >

      <nav
        className={styles.cats}
        aria-label="Sections"
      >
        <button className={styles.sidebar}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4 18H20" stroke="black" strokeWidth="2" strokeLinecap="round" />
            <path d="M4 12H20" stroke="black" strokeWidth="2" strokeLinecap="round" />
            <path d="M4 6H20" stroke="black" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </button>

        <div
          ref={categoriesRef}
          className={styles.categories}
        >

          {categories.map((category) => (
            <button key={category} className={styles.category}>
              {category}
            </button>
          ))}

        </div>
        <button
          aria-label="Sidebar toggle button"
          className={styles.scrollBtn}
          onClick={scrollRight}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M16.2001 12.0002C16.2 12.2653 16.0946 12.5198 15.9071 12.7072L11.1073 17.507C10.7168 17.8973 10.0837 17.8972 9.69324 17.507C9.30295 17.1165 9.3029 16.4834 9.69324 16.0929L13.786 12.0002L9.69324 7.9074C9.30275 7.51691 9.30283 6.88387 9.69324 6.49333C10.0838 6.10281 10.7168 6.10281 11.1073 6.49333L15.9071 11.2931C16.0944 11.4806 16.2 11.7351 16.2001 12.0002Z" fill="black" />
          </svg>
        </button>
      </nav>
    </header>
  );
}