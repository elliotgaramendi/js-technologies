import { useEffect, useState } from "react";

const LikeButton = () => {
  const [like, setLike] = useState(false);

  const handleLikeClick = () => {
    window.localStorage.setItem('like', !like);
    setLike(!like);
  };

  useEffect(() => {
    setLike(JSON.parse(localStorage.getItem('like')) || false);
  }, []);

  return (
    <button
      className={`text-2xl transition-colors ${like && 'text-yellow-400'}`}
      onClick={handleLikeClick}
    >
      ★
    </button>
  );
};

export default LikeButton;