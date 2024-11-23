import React from 'react';

export default function CardProduct({ imageUrl, title, text, price }) {
    return (
        <div className="max-w-sm rounded-lg overflow-hidden shadow-lg bg-white p-4">
            <img
                className="w-full max-h-48 object-cover rounded-t-lg"
                src={imageUrl}
                alt={title}
            />

            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{title}</div>
                <p className="text-gray-700 text-base">{text}</p>
            </div>

            <div className="px-6 py-4 flex justify-between">
                <span className="text-sm text-gray-600 font-semibold">Precio</span>
                <span className="text-2xl text-gray-800 font-bold">${price}</span>
            </div>
        </div>
    );
}
