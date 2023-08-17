import Rating from './components/Rating';
import Star from './Star';
import Spinner from './components/Spinner';
import { useRef, useState } from 'react';

export default function App() {
  const [currentRating, setRating] = useState(2);
  const [isLoading, setIsLoading] = useState(false);
  const previousRating = useRef();
  const handleRating = (newRating) => {
    // preseve previous rating value
    previousRating.current = currentRating;
    setIsLoading(true);
    setRating(newRating);

    setTimeout(() => {
      const randomNumber = Math.random() * 10;
      if (randomNumber < 5) {
        // case of failure
        setRating(previousRating.current);
      } else {
        // passed
      }
      setIsLoading(false);
    }, 2000);
  };
  return (
    <>
      <Rating
        totalItems={4}
        rating={currentRating}
        onItemClick={handleRating}
        ratingItem={(isFilled) => <Star isFilled={isFilled} />}
        isLoading={isLoading}
        loaderItem={() => <Spinner />}
      />
    </>
  );
}
