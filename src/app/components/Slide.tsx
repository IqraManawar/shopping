import React from 'react';
import Image from 'next/image';

interface PropsType {
    image: string;
    title: string;
    text: string;
    price: string;
}

const Slide: React.FC<PropsType> = ({ image, title, text, price }) => {
    return (
        <div className="relative  w-full h-[500px]">
            <Image src={image} alt={title} fill className="object-cover" />
            <div className="absolute top-0 left-0 p-4 bg-black bg-opacity-50 text-white">
                <h2 className="text-xl font-bold">{title}</h2>
                <p>{text}</p>
                <span className="text-lg font-semibold">{price}</span>
            </div>
        </div>
    );
};

export default Slide;
