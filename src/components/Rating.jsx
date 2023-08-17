import { useState } from "react";

const Rating = ({
    totalItems,
    rating,
    onItemClick,
    ratingItem,
    isLoading,
    loaderItem
}) => {
    const [hoverIndex, setHoverIndex] = useState(null);

    const isItemFilled = (index) =>
        hoverIndex !== null ? index <= hoverIndex : index < rating;

    return (
        <div className="rating-container">
            {Array.from({ length: totalItems }).map((item, index) => (
                <span
                    key={index}
                    onMouseEnter={() => setHoverIndex(index)}
                    onMouseLeave={() => setHoverIndex(null)}
                    onClick={() => onItemClick(index + 1)}
                >
                    {ratingItem(isItemFilled(index))}
                </span>
            ))}

            {isLoading && loaderItem()}
        </div>
    );
};

export default Rating;
