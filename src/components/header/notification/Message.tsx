import styles from "./message.module.css";
import { Data } from "@/app/api/notifications/route";
import Link from "next/link";

export function Message({ data }: { data: Data }) {

    return (
        <>
            {
                data.url ? (
                    <Link 
                    href={data.url} className={styles.container}
                    aria-label={`${!data.is_read ? "new notification, ": ""}${data.title}, ${data.message}, ${readableTime(data.timestamp)}`}>
                        <div className={styles.message}>
                            {data.img && (
                                <div className={styles.left}>
                                    <img src={data.img} alt="icon" className={styles.icon} aria-hidden="true" />
                                </div>
                            )}

                            <div 
                            className={styles.right} style={data.img ? undefined : { paddingLeft: "26px" }}
                            >
                                <div className={styles.header}>
                                    <div className={styles.title}>
                                        <span>
                                            {data.title}
                                        </span>

                                        {!data.is_read && <div className={styles.badge}></div>}
                                    </div>

                                    <time
                                        className={styles.timestamp}
                                        dateTime={data.timestamp}
                                    >
                                        {time(data.timestamp)}
                                    </time>
                                </div>
                                <div className={styles.body}>
                                    <p>{data.message}</p>
                                </div>
                            </div>
                        </div>
                    </Link>
                ) : (
                    <div 
                    tabIndex={0}
                    className={styles.container}
                    aria-label={`${!data.is_read ? "new notification, ": ""}${data.title}, ${data.message}, ${readableTime(data.timestamp)}`}
                    >
                        <div className={styles.message} style={data.img ? undefined : { paddingLeft: "26px" }}>
                            {data.img && (
                                <div className={styles.left}>
                                    <img src={data.img} alt="icon" className={styles.icon} aria-hidden="true" />
                                </div>
                            )}

                            <div className={styles.right}>
                                <div className={styles.header}>
                                    <div className={styles.title}>
                                        <span>
                                            {data.title}
                                        </span>

                                        {!data.is_read && <div className={styles.badge}></div>}
                                    </div>

                                    <time
                                        className={styles.timestamp}
                                        dateTime={data.timestamp}
                                    >
                                        {time(data.timestamp)}
                                    </time>
                                </div>
                                <div className={styles.body}>
                                    <p>{data.message}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            }
        </>
    )
}

function readableTime(date: string | Date) {
  const now = new Date();
  const past = new Date(date);

  const seconds = Math.floor((now.getTime() - past.getTime()) / 1000);

  if (seconds < 60) {
    return `${seconds} ${seconds === 1 ? "second" : "seconds"} ago`;
  }

  const minutes = Math.floor(seconds / 60);
  if (minutes < 60) {
    return `${minutes} ${minutes === 1 ? "minute" : "minutes"} ago`;
  }

  const hours = Math.floor(minutes / 60);
  if (hours < 24) {
    return `${hours} ${hours === 1 ? "hour" : "hours"} ago`;
  }

  const days = Math.floor(hours / 24);
  if (days < 7) {
    return `${days} ${days === 1 ? "day" : "days"} ago`;
  }

  const weeks = Math.floor(days / 7);
  if (weeks < 4) {
    return `${weeks} ${weeks === 1 ? "week" : "weeks"} ago`;
  }

  const months = Math.floor(days / 30);
  if (months < 12) {
    return `${months} ${months === 1 ? "month" : "months"} ago`;
  }

  const years = Math.floor(days / 365);
  return `${years} ${years === 1 ? "year" : "years"} ago`;
}

function time(date: string | Date) {
  const seconds = Math.floor(
    (Date.now() - new Date(date).getTime()) / 1000
  );

  if (seconds < 60) return `${seconds}s`;

  const minutes = Math.floor(seconds / 60);
  if (minutes < 60) return `${minutes}m`;

  const hours = Math.floor(minutes / 60);
  if (hours < 24) return `${hours}h`;

  const days = Math.floor(hours / 24);
  if (days < 7) return `${days}d`;

  const weeks = Math.floor(days / 7);
  if (weeks < 4) return `${weeks}w`;

  const months = Math.floor(days / 30);
  if (months < 12) return `${months}mo`;

  const years = Math.floor(days / 365);
  return `${years}y`;
}