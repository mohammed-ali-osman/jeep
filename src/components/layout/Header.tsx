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
            <path fillRule="evenodd" clipRule="evenodd" d="M12.2848 18.9935C12.1567 19.0875 12.0373 19.1728 11.9282 19.2493C11.8118 19.1721 11.6827 19.0833 11.5427 18.9832C10.8826 18.5109 10.0265 17.8176 9.18338 16.9529C7.45402 15.1792 6 12.9151 6 10.5C6 7.18629 8.68629 4.5 12 4.5C15.3137 4.5 18 7.18629 18 10.5C18 12.8892 16.4819 15.1468 14.6893 16.9393C13.8196 17.8091 12.9444 18.5099 12.2848 18.9935ZM19.5 10.5C19.5 16.5 12 21 12 21C11.625 21 4.5 16.5 4.5 10.5C4.5 6.35786 7.85786 3 12 3C16.1421 3 19.5 6.35786 19.5 10.5ZM13.5 10.5C13.5 11.3284 12.8284 12 12 12C11.1716 12 10.5 11.3284 10.5 10.5C10.5 9.67157 11.1716 9 12 9C12.8284 9 13.5 9.67157 13.5 10.5ZM15 10.5C15 12.1569 13.6569 13.5 12 13.5C10.3431 13.5 9 12.1569 9 10.5C9 8.84315 10.3431 7.5 12 7.5C13.6569 7.5 15 8.84315 15 10.5Z" fill="#6C6C6C" />
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
          startIcon={<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" style={{ width: "36px" }}>
            <path fillRule="evenodd" clipRule="evenodd" d="M9.92109 5.4377C9.73345 5.49715 9.54815 5.5647 9.36572 5.64027C8.53055 5.98621 7.77168 6.49326 7.13247 7.13247C6.49326 7.77168 5.98621 8.53055 5.64027 9.36572C5.36573 10.0285 5.19693 10.7291 5.13894 11.4419H8.47326C8.49707 10.6263 8.57301 9.82259 8.69921 9.06089C8.85395 8.12694 9.08258 7.26634 9.37691 6.53052C9.53759 6.1288 9.71914 5.76105 9.92109 5.4377ZM12 4C10.9494 4 9.90913 4.20693 8.93853 4.60896C7.96793 5.011 7.08601 5.60028 6.34314 6.34314C5.60028 7.08601 5.011 7.96793 4.60897 8.93853C4.20693 9.90913 4 10.9494 4 12C4 13.0506 4.20693 14.0909 4.60896 15.0614C5.011 16.0321 5.60028 16.914 6.34314 17.6569C7.08601 18.3997 7.96793 18.989 8.93853 19.391C9.90913 19.793 10.9494 20 12 20C13.0506 20 14.0909 19.793 15.0614 19.391C16.0321 18.989 16.914 18.3997 17.6569 17.6569C18.3997 16.914 18.989 16.0321 19.391 15.0614C19.793 14.0909 20 13.0506 20 12C20 10.9494 19.793 9.90913 19.391 8.93853C18.989 7.96793 18.3997 7.08601 17.6569 6.34314C16.914 5.60028 16.0321 5.011 15.0614 4.60897C14.0909 4.20693 13.0506 4 12 4ZM12 5.11628C11.8055 5.11628 11.5544 5.20989 11.2624 5.51233C10.9681 5.81701 10.6736 6.29452 10.4133 6.94509C10.1548 7.59136 9.94493 8.37153 9.80048 9.24336C9.68458 9.94284 9.61351 10.6851 9.59004 11.4419H14.41C14.3865 10.6851 14.3154 9.94284 14.1995 9.24336C14.0551 8.37153 13.8451 7.59137 13.5867 6.9451C13.3264 6.29452 13.0319 5.81701 12.7376 5.51233C12.4456 5.20989 12.1945 5.11628 12 5.11628ZM15.5268 11.4419C15.503 10.6263 15.427 9.82259 15.3008 9.06089C15.146 8.12694 14.9174 7.26634 14.6231 6.53052C14.4624 6.1288 14.2809 5.76105 14.0789 5.4377C14.2666 5.49715 14.4519 5.5647 14.6343 5.64027C15.4695 5.98621 16.2283 6.49326 16.8675 7.13247C17.5068 7.77169 18.0138 8.53055 18.3597 9.36572C18.6343 10.0285 18.8031 10.7291 18.861 11.4419H15.5268ZM14.41 12.5581H9.59004C9.61351 13.3149 9.68458 14.0572 9.80048 14.7566C9.94493 15.6285 10.1548 16.4086 10.4133 17.0549C10.6736 17.7055 10.9681 18.183 11.2624 18.4877C11.5544 18.7901 11.8055 18.8837 12 18.8837C12.1945 18.8837 12.4456 18.7901 12.7376 18.4877C13.0319 18.183 13.3264 17.7055 13.5867 17.0549C13.8451 16.4086 14.0551 15.6285 14.1995 14.7566C14.3154 14.0572 14.3865 13.3149 14.41 12.5581ZM14.0789 18.5623C14.2809 18.239 14.4624 17.8712 14.6231 17.4695C14.9174 16.7337 15.146 15.873 15.3008 14.9391C15.427 14.1774 15.503 13.3737 15.5268 12.5581H18.861C18.8031 13.2709 18.6343 13.9715 18.3597 14.6343C18.0138 15.4695 17.5068 16.2283 16.8675 16.8675C16.2283 17.5068 15.4695 18.0138 14.6343 18.3597C14.4519 18.4353 14.2666 18.5028 14.0789 18.5623ZM9.92109 18.5623C9.71914 18.239 9.53759 17.8712 9.3769 17.4695C9.08257 16.7337 8.85395 15.873 8.69921 14.9391C8.57301 14.1774 8.49707 13.3737 8.47326 12.5581H5.13894C5.19693 13.2709 5.36573 13.9715 5.64027 14.6343C5.98621 15.4695 6.49326 16.2283 7.13247 16.8675C7.77168 17.5068 8.53055 18.0138 9.36572 18.3597C9.54815 18.4353 9.73345 18.5028 9.92109 18.5623Z" fill="#6C6C6C" />
          </svg>}
          showArrow={true}
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
            className={styles.actions}
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