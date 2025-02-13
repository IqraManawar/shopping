
import React from 'react';
import ProductCard from './ProductCard';

const productsData =[
    {
        img: "/jacket-1.jpg",
        title: "Jacket",
        decs: "MEN Yarn Fleece Full-Zip Jacket",
        rating: 4 ,
        price:"45.00",
    },
    {
        img: "/skirt-1.jpg",
        title: "Skirt",
        decs: "Black Floral Wrap Midi Skirt",
        rating: 5 ,
        price:"55.00",
    },
    {
        img: "/party-wear-1.jpg",
        title: "Party Wear",
        decs: "Women's Party Wear Shoes",
        rating: 3 ,
        price:"25.00",
    },
    {
        img: "/shirt-1.jpg",
        title: "Shirt",
        decs: "Pure Garment Dyed Cotto Shirt",
        rating: 4 ,
        price:"45.00",
    },
    {
        img: "/sports-1.jpg",
        title: "Sports",
        decs: "Trekking & Running Shoes - Black",
        rating: 3 ,
        price:"58.00",
    },
    {
        img: "/watch-2.jpg",
        title: "Watches",
        decs: "Girls Beautiful Watch",
        rating: 4 ,
        price:"100.00",
    },
    {
        img: "/watch-1.jpg",
        title: "Watches",
        decs: "Pocket Watch Leather Pouch",
        rating: 4 ,
        price:"120.00",
    },
]

const NewProducts = () => {
  return (
    <div>
      <div className='container pt-16'>
        <h2 className='font-medium text-2xl pb-4'> New Products</h2>

        <div className='grid grid-cols-1 place-items-center sm:place-items-start sm:grid-cols-2 lg:grid-col-3 xl:grid-cols-4 gap-10 xl:gap-x-20 xl:gap-y-10'>
            {productsData.map((item, index) => (
                <ProductCard
                key={index}
                img={item.img}
                title={item.title}
                desc={item.decs}
                rating={item.rating}
                price={item.price}
                />
            ))}
        </div>
      </div>
    </div>
  )
}

export default NewProducts
