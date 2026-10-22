"use client";
import { useState } from "react";
import styles from "./page.module.css";
import Header from "@/components/layout/Header";
import Breadcrumb from "@/components/breadcrumb/Breadcrumb";
import Gallery from "@/components/product/Gallery";
import Card from "@/components/product/Card";
import Selector from "@/components/product/selection/Selector";
import RatingSummary from "@/components/product/ratings/RatingSummary";

const images = [
  {
    src: "/products/chair-front.jpg",
    alt: "Chair viewed from the front",
  },
  {
    src: "/products/chair-side.jpg",
    alt: "Chair viewed from the side",
  },
  {
    src: "/products/chair-back.jpg",
    alt: "Chair viewed from the back",
  },
  {
    src: "/products/chair-back.jpg",
    alt: "Chair viewed from the back",
  },
  {
    src: "/products/chair-back.jpg",
    alt: "Chair viewed from the back",
  },
  {
    src: "/products/chair-back.jpg",
    alt: "Chair viewed from the back",
  },
  {
    src: "/products/chair-back.jpg",
    alt: "Chair viewed from the back",
  },
];

const sizeOptions = [
  { label: "XS", value: "xs" },
  { label: "S", value: "sm" },
  { label: "M", value: "md" },
  { label: "L", value: "lg" },
  { label: "XL", value: "xl" },
  { label: "XXL", value: "xxl" },
  { label: "XXXL", value: "xxxl" },
];

const colorOptions = [
  { label: "Black", value: "#000000" },
  { label: "White", value: "#FFFFFF" },
  { label: "Gray", value: "#858585" },
];

export default function Page() {

  const title = "Ergonomic Mesh Office Chair";
  const description = "Experience all-day comfort and support with breathable mesh backing, adjustable lumbar support, and 3D armrests designed for optimal posture.";

  const [selectedSize, setSelectedSize] = useState<string>("");
  const [selectedColor, setSelectedColor] = useState<string>("");

  return (
    <>
      <Header isAuthenticated={false} />
      <main>
        <Breadcrumb />
        <section className={styles.overview}>
          <div className={styles.left}>
            <Gallery images={images} />
            <Card />
          </div>
          <div className={styles.right}>
            <div>
              <div>
                <h2>{title}</h2>
                <p>{description}</p>
              </div>

              <Selector
                title="Size"
                type="button"
                name="size"
                options={sizeOptions}
                value={selectedSize}
                onChange={(val) => setSelectedSize(val)}
              />

              {/* Color Selector */}
              <Selector
                title="Color"
                type="color"
                name="color"
                options={colorOptions}
                value={selectedColor}
                onChange={(val) => setSelectedColor(val)}
              />

            </div>

            <div className={styles["product-actions"]}>
              <div className={styles["purchase-actions"]}>
                <button>Buy Now</button>
                <button>Add to Cart</button>
              </div>

              <div className={styles["utility-actions"]}>
                <button>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M13.7321 21.7697L14.2742 20.8539L12.9833 20.0898L12.4412 21.0057L13.7321 21.7697ZM9.72579 20.8539L10.2679 21.7697L11.5587 21.0057L11.0166 20.0898L9.72579 20.8539ZM12.4412 21.0057C12.2485 21.3313 11.7515 21.3313 11.5587 21.0057L10.2679 21.7697C11.0415 23.0767 12.9585 23.0767 13.7321 21.7697L12.4412 21.0057ZM10.5 2.75H13.5V1.25H10.5V2.75ZM21.25 10.5V11.5H22.75V10.5H21.25ZM2.75 11.5V10.5H1.25V11.5H2.75ZM1.25 11.5C1.25 12.6546 1.24959 13.5581 1.29931 14.2868C1.3495 15.0223 1.45323 15.6344 1.68769 16.2004L3.07351 15.6264C2.92737 15.2736 2.84081 14.8438 2.79584 14.1847C2.75041 13.5189 2.75 12.6751 2.75 11.5H1.25ZM7.8025 18.2416C6.54706 18.2199 5.88923 18.1401 5.37359 17.9265L4.79957 19.3123C5.60454 19.6457 6.52138 19.7197 7.77666 19.7413L7.8025 18.2416ZM1.68769 16.2004C2.27128 17.6093 3.39066 18.7287 4.79957 19.3123L5.37359 17.9265C4.33222 17.4951 3.50486 16.6678 3.07351 15.6264L1.68769 16.2004ZM21.25 11.5C21.25 12.6751 21.2496 13.5189 21.2042 14.1847C21.1592 14.8438 21.0726 15.2736 20.9265 15.6264L22.3123 16.2004C22.5468 15.6344 22.6505 15.0223 22.7007 14.2868C22.7504 13.5581 22.75 12.6546 22.75 11.5H21.25ZM16.2233 19.7413C17.4786 19.7197 18.3955 19.6457 19.2004 19.3123L18.6264 17.9265C18.1108 18.1401 17.4529 18.2199 16.1975 18.2416L16.2233 19.7413ZM20.9265 15.6264C20.4951 16.6678 19.6678 17.4951 18.6264 17.9265L19.2004 19.3123C20.6093 18.7287 21.7287 17.6093 22.3123 16.2004L20.9265 15.6264ZM13.5 2.75C15.1512 2.75 16.337 2.75079 17.2619 2.83873C18.1757 2.92561 18.7571 3.09223 19.2206 3.37628L20.0044 2.09732C19.2655 1.64457 18.4274 1.44279 17.4039 1.34547C16.3915 1.24921 15.1222 1.25 13.5 1.25V2.75ZM22.75 10.5C22.75 8.87781 22.7508 7.6085 22.6545 6.59611C22.5572 5.57256 22.3554 4.73445 21.9027 3.99563L20.6237 4.77938C20.9078 5.24291 21.0744 5.82434 21.1613 6.73809C21.2492 7.663 21.25 8.84876 21.25 10.5H22.75ZM19.2206 3.37628C19.7925 3.72672 20.2733 4.20752 20.6237 4.77938L21.9027 3.99563C21.4286 3.22194 20.7781 2.57144 20.0044 2.09732L19.2206 3.37628ZM10.5 1.25C8.87781 1.25 7.6085 1.24921 6.59611 1.34547C5.57256 1.44279 4.73445 1.64457 3.99563 2.09732L4.77938 3.37628C5.24291 3.09223 5.82434 2.92561 6.73809 2.83873C7.663 2.75079 8.84876 2.75 10.5 2.75V1.25ZM2.75 10.5C2.75 8.84876 2.75079 7.663 2.83873 6.73809C2.92561 5.82434 3.09223 5.24291 3.37628 4.77938L2.09732 3.99563C1.64457 4.73445 1.44279 5.57256 1.34547 6.59611C1.24921 7.6085 1.25 8.87781 1.25 10.5H2.75ZM3.99563 2.09732C3.22194 2.57144 2.57144 3.22194 2.09732 3.99563L3.37628 4.77938C3.72672 4.20752 4.20752 3.72672 4.77938 3.37628L3.99563 2.09732ZM11.0166 20.0898C10.8136 19.7468 10.6354 19.4441 10.4621 19.2063C10.2795 18.9559 10.0702 18.7304 9.77986 18.5615L9.02572 19.8582C9.07313 19.8857 9.13772 19.936 9.24985 20.0898C9.37122 20.2564 9.50835 20.4865 9.72579 20.8539L11.0166 20.0898ZM7.77666 19.7413C8.21575 19.7489 8.49387 19.7545 8.70588 19.7779C8.90399 19.7999 8.98078 19.832 9.02572 19.8582L9.77986 18.5615C9.4871 18.3912 9.18246 18.3215 8.87097 18.287C8.57339 18.2541 8.21375 18.2487 7.8025 18.2416L7.77666 19.7413ZM14.2742 20.8539C14.4916 20.4865 14.6287 20.2564 14.7501 20.0898C14.8622 19.936 14.9268 19.8857 14.9742 19.8582L14.2201 18.5615C13.9298 18.7304 13.7204 18.9559 13.5379 19.2063C13.3646 19.4441 13.1864 19.7468 12.9833 20.0898L14.2742 20.8539ZM16.1975 18.2416C15.7862 18.2487 15.4266 18.2541 15.129 18.287C14.8175 18.3215 14.5129 18.3912 14.2201 18.5615L14.9742 19.8582C15.0192 19.832 15.096 19.7999 15.2941 19.7779C15.5061 19.7545 15.7842 19.7489 16.2233 19.7413L16.1975 18.2416Z" fill="#6C6C6C" />
                  </svg>
                  Chat
                </button>
                <button>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16.3167 2.25C20.015 2.25 22.5 5.88187 22.5 9.27C22.5 14.9128 12.1867 21.75 12 21.75C11.8133 21.75 1.5 14.9128 1.5 9.27C1.5 5.88187 3.98501 2.25 7.68333 2.25C9.80667 2.25 11.195 3.35907 12 4.33407C12.805 3.35907 14.1933 2.25 16.3167 2.25Z" strokeWidth="1.5" strokeLinecap="round" stroke="#6C6C6C" />
                  </svg>
                  Wishlist
                </button>
                <button>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1.60046 12C1.60077 9.79135 3.3912 8.00091 5.5999 8.0006C7.11811 8.00077 8.43775 8.847 9.11553 10.0932L14.5514 6.69648C14.4523 6.3481 14.4007 5.98009 14.4007 5.59993C14.401 3.39125 16.1914 1.60079 18.4001 1.60049C20.6088 1.60085 22.4009 3.39128 22.4013 5.59993L22.3795 6.01009C22.1741 8.0264 20.4705 9.60072 18.4001 9.60106L17.9916 9.57929C16.8843 9.4668 15.911 8.90129 15.2578 8.07259L9.58094 11.6234C9.59251 11.7473 9.60101 11.8731 9.60103 12L9.58094 12.3784L15.2595 15.9275C15.9919 14.9986 17.1255 14.4009 18.4001 14.4007C20.6088 14.4011 22.4009 16.1915 22.4013 18.4001L22.3795 18.8103C22.1741 20.8265 20.4705 22.4009 18.4001 22.4013L17.9916 22.3795C15.9749 22.1746 14.401 20.471 14.4007 18.4001C14.4007 18.0211 14.4561 17.6546 14.5547 17.3069L9.11386 13.9052C8.43655 15.1521 7.1185 16.001 5.5999 16.0012L5.19142 15.9794C3.17464 15.7745 1.60075 14.0708 1.60046 12ZM16.115 5.59993C16.1152 6.8619 17.1382 7.88646 18.4001 7.88677C19.662 7.88641 20.6866 6.86187 20.687 5.59993C20.6866 4.33805 19.662 3.31513 18.4001 3.31477C17.1382 3.31508 16.1153 4.33801 16.115 5.59993ZM3.31474 12C3.31505 13.262 4.33798 14.2866 5.5999 14.2869C6.86188 14.2866 7.88644 13.262 7.88674 12C7.88644 10.7381 6.86188 9.71513 5.5999 9.71489C4.33798 9.7152 3.31505 10.7381 3.31474 12ZM18.4001 20.687C19.662 20.6866 20.6866 19.662 20.687 18.4001C20.6866 17.1383 19.662 16.1154 18.4001 16.115C17.1382 16.1153 16.1153 17.1382 16.115 18.4001C16.1153 19.662 17.1382 20.6866 18.4001 20.687Z" fill="#6C6C6C" />
                  </svg>
                  Share
                </button>
              </div>
            </div>

          </div>
        </section>
        <section className={styles.description}>
          <div className={styles.header}>
            <h2>Description</h2>
            <button>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M21.6 4C21.6 3.36914 21.0624 2.85714 20.4 2.85714H7.2V12H20.4C21.0624 12 21.6 11.488 21.6 10.8571V4ZM24 2.85714V12C24 13.2629 22.926 14.2857 21.6 14.2857H4.8V0.571426H21.6C22.926 0.571426 24 1.59428 24 2.85714ZM1.2 0.571426C1.8624 0.571426 2.4 0.939668 2.4 1.57143V22.2857C2.4 22.9166 1.8624 23.4286 1.2 23.4286C0.537599 23.4286 0 22.9166 0 22.2857V1.71428C0 1.08343 0.537599 0.571426 1.2 0.571426Z" fillRule="evenodd" clipRule="evenodd" fill="#6c6c6c" />
              </svg>
              Report
            </button>
          </div>

          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni atque esse laboriosam nulla vero aut nemo impedit eos quos. Unde distinctio nihil quos dolores qui sit labore id dolorem numquam.</p>
          <p>details</p>

        </section>
        
        <section className={styles.reviews}>
          <h2>Reviews</h2>
          <RatingSummary />
        </section>
        
        <section className={styles["related-products"]}></section>
      </main>
    </>
  )
}