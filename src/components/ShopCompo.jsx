import React, { useState } from "react";
import styled from "styled-components";

const products = [
  {
    id: 1,
    title: "Autumn Hoodie",
    price: 264.9,
    image:
      "https://pangaia.com/cdn/shop/products/Recycled-Nylon-NW-Flwrdwn-Quilted-Collarless-Jacket-Cerulean-Blue-Female-1_bf4b2a54-8a7f-4174-bc49-8ef22b24bfdd.jpg?v=1666708230&width=1426",
  },
  {
    id: 2,
    title: "FUSION HOODIE",
    price: 295,
    image:
      "https://images.undiz.com/on/demandware.static/-/Sites-ZLIN-master/default/dw2264d914/merch/BTS/654206666_x.jpg?sw=1250",
  },
  {
    id: 3,
    title: "Chestnut Brown",
    price: 74.9,
    image:
      "https://pangaia.com/cdn/shop/files/DNA_Polo_Neck_Sweatshirt_Cacoa_Brown_Mens-1_bd35ab7b-d8fc-490a-8bb4-c961b71c6670.jpg?crop=center&height=1023&v=1727177774&width=768",
  },
  {
    id: 4,
    title: "Nike Sportswear",
    price: 80,
    image:
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/61734ec7-dad8-40f3-9b95-c7500939150a/sportswear-club-mens-french-terry-crew-neck-sweatshirt-tdFDRc.png",
  },
  {
    id: 5,
    title: "Champion BASIC",
    price: 48.99,
    image:
      "https://img01.ztat.net/article/spp-media-p1/7067458719b744fe81ffee62d3d0b912/abad421e7d8e47f08a2abc1c6ffe07dc.jpg?imwidth=1800",
  },
  {
    id: 6,
    title: "Cotton Hoodie",
    price: 395,
    image:
      "https://pangaia.com/cdn/shop/files/Reclaim-3.0-Hoodie-Reclaim-Jade-Womens-3.jpg?v=1693398673&width=1426",
  },
  {
    id: 7,
    title: "CLASSIC CREWNECK",
    price: 48.99,
    image:
      "https://img01.ztat.net/article/spp-media-p1/10cea44041564f81ac585fc6c8978907/c4c32dbc45dd4dbc9d15087c846538f2.jpg?imwidth=1800",
  },
  {
    id: 8,
    title: "TAPE HOODED",
    price: 79.99,
    image:
      "https://img01.ztat.net/article/spp-media-p1/d391f90be278469ebfdff731800cfccc/6d2101bd672f4e059501f01fe726f315.jpg?imwidth=1800",
  },
];

const ShopCompo = () => {
  return (
    <ProductMain className="container">
      <PageHeading>Discover Products</PageHeading>
      <ProductContainer>
        {products.map((item) => {
          return (
            <div class="product">
              <img src={item.image} class="product-img" />
              <div class="product-info">
                <h2 class="product-title">{item.title}</h2>
                <p class="product-price">{item.price}</p>
                <a class="add-to-cart">Add to cart</a>
              </div>
            </div>
          );
        })}
      </ProductContainer>
    </ProductMain>
  );
};

export default ShopCompo;

const ProductMain = styled.section`
  padding: 4rem 0 2rem;
`;

const PageHeading = styled.h2`
  font-size: 4rem;
  font-weight: 900;
  text-transform: uppercase;
  text-align: center;
`;

const ProductContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 1rem;
  margin-top: 2rem;

  .product-img {
    width: 100%;
    height: 350px;
    object-fit: cover;
  }
  .product-title {
    font-size: 1.25rem;
    font-weight: 600;
    color: var(--text-color);
    margin: 0.8rem 0 0.5rem;
  }
  .product-price {
    font-size: 1.3rem;
    font-weight: 700;
    color: var(--main-color);
  }
  .add-to-cart {
    background-color: var(--main-color);
    color: var(--bg-color);
    font-weight: 600;
    letter-spacing: 1px;
    display: flex;
    justify-content: center;
    padding: 10px;
    margin-top: 0.6rem;
    cursor: pointer;
  }
`;
