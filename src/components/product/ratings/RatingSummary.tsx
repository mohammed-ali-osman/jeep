import Circular from "@/components/charts/CircularProgress";
import styles from "./styles.module.css";
import Distribution from "@/components/charts/RatingDistribution";
import React from "react";

type RatingDistribution = {
    [star: number]: {
        users: number;
    };
};

const ratings: RatingDistribution = {
    1: { users: 33 },
    2: { users: 12 },
    3: { users: 42 },
    4: { users: 50 },
    5: { users: 102 },
};

const STAR = {
    full: <svg width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M16.0223 3.55194C16.5689 2.23787 18.4309 2.23787 18.9774 3.55194L21.7538 10.2267C21.9842 10.7806 22.5054 11.1593 23.1034 11.2072L30.3085 11.7844C31.7271 11.8981 32.3024 13.669 31.2216 14.5949L25.7313 19.298C25.2759 19.6884 25.0775 20.3005 25.2167 20.884L26.8934 27.9162C27.2234 29.3003 25.7182 30.394 24.5038 29.6525L18.3339 25.884C17.8219 25.5714 17.1778 25.5714 16.6659 25.884L10.4969 29.6525C9.28246 30.3943 7.77634 29.3004 8.10632 27.9162L9.78406 20.884C9.92313 20.3006 9.72384 19.6883 9.26843 19.298L3.7782 14.5949C2.69734 13.669 3.27264 11.8981 4.69128 11.7844L11.8973 11.2072C12.4953 11.1592 13.0166 10.7806 13.2469 10.2267L16.0223 3.55194Z" fill="#F3DF04" />
    </svg>,
    half: <svg width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
        <use xlinkHref="#stroke0_2102_260" fill="url(#paint0_linear_2102_260)" />
        <mask id="stroke1_2102_260" fill="white">
            <use xlinkHref="#stroke0_2102_260" />
        </mask>
        <path d="M16.0223 3.55194C16.5689 2.23787 18.4309 2.23787 18.9774 3.55194L21.7538 10.2267C21.9842 10.7806 22.5054 11.1593 23.1034 11.2072L30.3085 11.7844C31.7271 11.8981 32.3024 13.669 31.2216 14.5949L25.7313 19.298C25.2759 19.6884 25.0775 20.3005 25.2167 20.884L26.8934 27.9162C27.2234 29.3003 25.7182 30.394 24.5038 29.6525L18.3339 25.884C17.8219 25.5714 17.1778 25.5714 16.6659 25.884L10.4969 29.6525C9.28246 30.3943 7.77634 29.3004 8.10632 27.9162L9.78406 20.884C9.92313 20.3005 9.72384 19.6883 9.26843 19.298L3.7782 14.5949C2.69734 13.669 3.27264 11.8981 4.69128 11.7844L11.8973 11.2072C12.4953 11.1592 13.0166 10.7806 13.2469 10.2267L16.0223 3.55194Z" strokeWidth="1.8" stroke="#F3DF04" mask="url(#stroke1_2102_260)" />
        <defs>
            <linearGradient id="paint0_linear_2102_260" x1="30.7579" y1="17.4878" x2="5.12593" y2="17.4878" gradientUnits="userSpaceOnUse">
                <stop stopColor="white" />
                <stop offset="0.5" stopColor="white" />
                <stop offset="0.5" stopColor="#F3DF04" />
                <stop offset="1" stopColor="#F3DF04" />
            </linearGradient>
            <path id="stroke0_2102_260" d="M16.0223 3.55194C16.5689 2.23787 18.4309 2.23787 18.9774 3.55194L21.7538 10.2267C21.9842 10.7806 22.5054 11.1593 23.1034 11.2072L30.3085 11.7844C31.7271 11.8981 32.3024 13.669 31.2216 14.5949L25.7313 19.298C25.2759 19.6884 25.0775 20.3005 25.2167 20.884L26.8934 27.9162C27.2234 29.3003 25.7182 30.394 24.5038 29.6525L18.3339 25.884C17.8219 25.5714 17.1778 25.5714 16.6659 25.884L10.4969 29.6525C9.28246 30.3943 7.77634 29.3004 8.10632 27.9162L9.78406 20.884C9.92313 20.3006 9.72384 19.6883 9.26843 19.298L3.7782 14.5949C2.69734 13.669 3.27264 11.8981 4.69128 11.7844L11.8973 11.2072C12.4953 11.1592 13.0166 10.7806 13.2469 10.2267L16.0223 3.55194Z" />
        </defs>
    </svg>,
    empty: <svg width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
        <mask id="stroke0_3646_699" fill="white">
            <path d="M16.0227 3.55157C16.5694 2.23783 18.4312 2.23773 18.9778 3.55157L21.7532 10.2264C21.9836 10.7803 22.5048 11.1588 23.1028 11.2068L30.3088 11.785C31.7274 11.8987 32.3027 13.6687 31.2219 14.5945L25.7317 19.2977C25.276 19.688 25.0769 20.301 25.2161 20.8846L26.8938 27.9158C27.224 29.3002 25.7177 30.394 24.5032 29.6522L18.3342 25.8846C17.8222 25.5719 17.1783 25.5719 16.6663 25.8846L10.4963 29.6522C9.28179 30.3939 7.77648 29.3002 8.10669 27.9158L9.78345 20.8846C9.92266 20.301 9.72348 19.688 9.26782 19.2977L3.77856 14.5945C2.69782 13.6688 3.27235 11.899 4.69067 11.785L11.8967 11.2068C12.4948 11.1589 13.0159 10.7804 13.2463 10.2264L16.0227 3.55157Z" />
        </mask>
        <path d="M16.0227 3.55157C16.5694 2.23783 18.4312 2.23773 18.9778 3.55157L21.7532 10.2264C21.9836 10.7803 22.5048 11.1588 23.1028 11.2068L30.3088 11.785C31.7274 11.8987 32.3027 13.6687 31.2219 14.5945L25.7317 19.2977C25.276 19.688 25.0769 20.301 25.2161 20.8846L26.8938 27.9158C27.224 29.3002 25.7177 30.394 24.5032 29.6522L18.3342 25.8846C17.8222 25.5719 17.1783 25.5719 16.6663 25.8846L10.4963 29.6522C9.28179 30.3939 7.77648 29.3002 8.10669 27.9158L9.78345 20.8846C9.92266 20.301 9.72348 19.688 9.26782 19.2977L3.77856 14.5945C2.69782 13.6688 3.27235 11.899 4.69067 11.785L11.8967 11.2068C12.4948 11.1589 13.0159 10.7804 13.2463 10.2264L16.0227 3.55157Z" strokeWidth="4" stroke="#F3DF04" mask="url(#stroke0_3646_699)" />
    </svg>
};

export default function RatingSummary() {

    const total = Object.values(ratings).reduce(
        (sum, rating) => sum + rating.users,
        0
    );

    const averageRating = total === 0
        ? 0
        : Object.entries(ratings).reduce(
            (sum, [star, rating]) => sum + Number(star) * rating.users,
            0
        ) / total;

    const fullStars = Math.floor(averageRating);
    const hasHalfStar = averageRating - fullStars >= 0.5;
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

    return (
        <div className={styles.container}>
            <div className={styles.progress}>
                <Circular rating={averageRating.toFixed(1)} />
            </div>
            <div className={styles.context}>
                <div className={styles.stars}>
                    {Array.from({ length: fullStars }, (_, i) => (
                        <React.Fragment key={i}>
                            {STAR.full}
                        </React.Fragment>
                    ))}

                    {hasHalfStar && STAR.half}

                    {Array.from({ length: emptyStars }, (_, i) => (
                        <React.Fragment key={i}>
                            {STAR.empty}
                        </React.Fragment>
                    ))}
                </div>

                <p>Based on {total} reviews</p>
            </div>
            <Distribution ratings={ratings} />
        </div>
    )
}