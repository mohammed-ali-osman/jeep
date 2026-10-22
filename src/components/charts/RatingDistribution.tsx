import styles from "./distro.module.css";

// export default function Distribution({
//     ratings,
// }: {
//     ratings: {
//         1: number;
//         2: number;
//         3: number;
//         4: number;
//         5: number;
//     }
// }) {

//     return (
//         <div className={styles.distro}>
//             <div className={styles.cell}>
//                 <div className={styles.rating}>
//                     <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
//                         <path d="M10.5227 3.55157C11.0694 2.23783 12.9312 2.23774 13.4778 3.55157L14.7991 6.72931C15.0296 7.28308 15.5507 7.66184 16.1487 7.70978L19.5784 7.98419C20.9969 8.09806 21.5723 9.86891 20.4915 10.7947L17.8782 13.033C17.4226 13.4233 17.2235 14.0354 17.3625 14.619L18.1614 17.9666C18.4912 19.3508 16.9852 20.4446 15.7708 19.7029L12.8342 17.909C12.3223 17.5964 11.6782 17.5965 11.1663 17.909L8.22974 19.7029C7.01525 20.4447 5.50915 19.3508 5.83911 17.9666L6.63794 14.619C6.77694 14.0355 6.57777 13.4233 6.12231 13.033L3.50903 10.7947C2.42817 9.86887 3.00347 8.09792 4.42212 7.98419L7.85181 7.70978C8.44979 7.66184 8.97096 7.28316 9.20142 6.72931L10.5227 3.55157Z" fill="#F3DF04" />
//                     </svg>
//                     <span>5</span>
//                 </div>
//                 <div className={styles.track}>
//                     <div className={styles.progress}></div>
//                 </div>
//                 <span>150</span>
//             </div>
//         </div>
//     );
// }

type RatingDistribution = {
    [star: number]: {
        users: number;
    };
};

export default function Distribution({
    ratings,
}: {
    ratings: RatingDistribution;
}) {
    return (
        <div className={styles.distro}>
            {[5, 4, 3, 2, 1].map((star) => {
                const rating = ratings[star] ?? {
                    users: 0,
                };

                const total = Object.values(ratings).reduce((total, rating) => total + rating.users, 0);

                const percentage = total ? (ratings[star].users / total) * 100 : 0;

                return (
                    <div className={styles.cell} key={star}>
                        <div className={styles.rating}>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M10.5227 3.55157C11.0694 2.23783 12.9312 2.23774 13.4778 3.55157L14.7991 6.72931C15.0296 7.28308 15.5507 7.66184 16.1487 7.70978L19.5784 7.98419C20.9969 8.09806 21.5723 9.86891 20.4915 10.7947L17.8782 13.033C17.4226 13.4233 17.2235 14.0354 17.3625 14.619L18.1614 17.9666C18.4912 19.3508 16.9852 20.4446 15.7708 19.7029L12.8342 17.909C12.3223 17.5964 11.6782 17.5965 11.1663 17.909L8.22974 19.7029C7.01525 20.4447 5.50915 19.3508 5.83911 17.9666L6.63794 14.619C6.77694 14.0355 6.57777 13.4233 6.12231 13.033L3.50903 10.7947C2.42817 9.86887 3.00347 8.09792 4.42212 7.98419L7.85181 7.70978C8.44979 7.66184 8.97096 7.28316 9.20142 6.72931L10.5227 3.55157Z" fill="#F3DF04" />
                            </svg>
                            <span>{star}</span>
                        </div>

                        <div
                            className={styles.track}
                            role="progressbar"
                            aria-label={`${star}-star ratings`}
                            aria-valuemin={0}
                            aria-valuemax={100}
                            aria-valuenow={percentage}
                        >
                            <div
                                className={styles.progress}
                                style={{
                                    width: `${percentage}%`,
                                }}
                            />
                        </div>

                        <span className={styles.users}>{rating.users}</span>
                    </div>
                );
            })}
        </div>
    );
}
