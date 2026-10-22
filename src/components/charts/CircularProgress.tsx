export default function Circular({
    rating = 5,
    size = 130,
    strokeWidth = 12,
}: {
    rating: number | string,
    size?: number;
    strokeWidth?: number;
}) {
    const safeRating = Math.min(5, Math.max(0, +(rating)));
    const progress = (safeRating / 5) * 100;

    const radius = (size - strokeWidth) / 2;
    const circumference = 2 * Math.PI * radius;
    const offset = circumference * (1 - progress / 100);

    return (
        <svg
            width={size}
            height={size}
            viewBox={`0 0 ${size} ${size}`}
            role="progressbar"
            aria-label="Average star rating"
            aria-valuemin={0}
            aria-valuemax={100}
            aria-valuenow={safeRating}
        >
            {/* Background ring */}
            <circle
                cx={size / 2}
                cy={size / 2}
                r={radius}
                fill="none"
                stroke="#e5e7eb"
                strokeWidth={strokeWidth}
            />

            {/* Progress ring */}
            <circle
                cx={size / 2}
                cy={size / 2}
                r={radius}
                fill="none"
                stroke="#343434"
                strokeWidth={strokeWidth}
                strokeLinecap="round"
                strokeDasharray={circumference}
                strokeDashoffset={offset}
                transform={`rotate(-90 ${size / 2} ${size / 2})`}
                style={{
                    transition: "stroke-dashoffset 500ms ease",
                }}
            />

            {/* Center percentage */}
            <text
                x="50%"
                y="50%"
                dominantBaseline="middle"
                textAnchor="middle"
                fill="currentColor"
                fontSize={size * 0.28}
                fontWeight="bold"
            >
                {rating}
            </text>
        </svg>
    );
}