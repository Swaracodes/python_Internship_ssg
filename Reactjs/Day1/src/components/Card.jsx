// src/components/Card.jsx
function Card({ title, description, imageUrl, buttonText }) {
  return (
    <div className="bg-pink-200 shadow-md rounded-xl overflow-hidden hover:shadow-lg transition duration-300">
      <img src={imageUrl} alt={title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h2 className="text-lg font-semibold text-gray-800">{title}</h2>
        <p className="text-sm text-gray-600 mt-2">{description}</p>
        <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-pink-700">
          {buttonText}
        </button>
      </div>
    </div>
  );
}

export default Card;
