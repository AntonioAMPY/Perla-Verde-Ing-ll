import { useState } from 'react';

const BusinessRatings = ({ businessName, averageRating, totalReviews, comments }) => {
  const [visibleComments, setVisibleComments] = useState(3);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('es-ES', { year: 'numeric', month: 'long', day: 'numeric' });
  };

  const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      if (i <= rating) {
        stars.push(<span key={i} className="text-2xl text-yellow-400">★</span>);
      } else if (i - 0.5 <= rating) {
        stars.push(
          <span key={i} className="text-2xl text-yellow-400 relative">
            <span className="absolute inset-0 overflow-hidden w-1/2">★</span>
            <span className="text-gray-300">☆</span>
          </span>
        );
      } else {
        stars.push(<span key={i} className="text-2xl text-gray-300">☆</span>);
      }
    }
    return stars;
  };

  return (
    <div className="max-w-3xl mx-auto p-5 font-sans">
      <h2 className="text-2xl font-bold mb-5">{businessName} - Calificaciones y reseñas</h2>
      <div className="flex items-center mb-5">
        <span className="text-4xl font-bold mr-2">{averageRating.toFixed(1)}</span>
        <div className="flex mr-2">{renderStars(averageRating)}</div>
        <span className="text-gray-600">({totalReviews} reseñas)</span>
      </div>
      <div className="space-y-5">
        {comments.slice(0, visibleComments).map((comment) => (
          <div key={comment.id} className="border-b border-gray-200 pb-5">
            <div className="flex justify-between items-center mb-2">
              <div className="flex items-center">
                <div className="w-10 h-10 bg-green-500 text-white rounded-full flex items-center justify-center font-bold mr-3">
                  {comment.userName.charAt(0)}
                </div>
                <div>
                  <h4 className="font-semibold">{comment.userName}</h4>
                  <div className="flex">{renderStars(comment.rating)}</div>
                </div>
              </div>
              <span className="text-sm text-gray-600">{formatDate(comment.date)}</span>
            </div>
            <p className="text-sm text-gray-700 leading-relaxed">{comment.comment}</p>
          </div>
        ))}
      </div>
      {visibleComments < comments.length && (
        <button
          className="w-full py-2 px-4 mt-5 bg-green-500 text-white rounded font-semibold hover:bg-green-600 transition duration-300"
          onClick={() => setVisibleComments((prev) => prev + 3)}
        >
          Cargar más reseñas
        </button>
      )}
    </div>
  );
};

export default BusinessRatings;