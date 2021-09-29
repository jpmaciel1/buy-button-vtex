import React, {useState, useEffect} from 'react';
import { useOrderItems } from 'vtex.order-items/OrderItems'
import { Button, Label } from './styled';

const CustomBuyButton = (props) => {
  const { addItems } = useOrderItems()
  const { idProduct, text, priceButton, width, height, background, border, borderRadius, color, fontSize, fontWeight, fontFamily, backgroundHover, borderHover, colorHover} = props
  const [product, setProduct] = useState()
  const [sku, setSku] = useState();
  const [seller, setSeller] = useState();
  const [loading, setLoading] = useState(false);
  const [priceLabel, setPriceLabel] = useState(false);
  const [buttonPrice, setButtonPrice] = useState();

  useEffect(() => {
    async function fetchProduct() {
        const url = `/?fq=productId:${idProduct}`;
        const response = await fetch(`/api/catalog_system/pub/products/search${url}`);
        const data = await response.json();
        setProduct(data[0]);
        setSku(data[0].items[0]);
        setSeller(data[0].items[0].sellers[0]);
        setButtonPrice(data[0].items[0].sellers[0].commertialOffer.Price);
        setLoading(true)
        setPriceLabel(priceButton);
    }
    fetchProduct();

}, [idProduct])



  
const addToCart = () => {
    const item = {
        additionalInfo: {
          brandName: product.brand,
          __typename: 'ItemAdditionalInfo',
        },
        availability: seller.commertialOffer.IsAvailable,
        id: sku.itemId,
        imageUrls: {
          at1x: sku.images[0].imageUrl,
          __typename: 'ImageUrls',
        },
        listPrice: seller.commertialOffer.ListPrice,
        measurementUnit: sku.measurementUnit,
        name: product.productName,
        price: seller.commertialOffer.Price,
        productId: product.productId,
        quantity: 1,
        seller: seller.sellerId,
        sellingPrice: sku.bestPrice,
        skuName: sku.nameComplete,
        unitMultiplier: sku.unitMultiplier,
        uniqueId: sku.itemId,
        isGift: false,
        __typename: 'item',
      }
    addItems([item])
  }
  return (
      
    <Button
        width = {width}
        height = {height}
        background = {background}
        border = {border}
        borderRadius = {borderRadius}
        color = {color}
        fontSize = {fontSize}
        fontWeight = {fontWeight}
        fontFamily = {fontFamily}
        backgroundHover = {backgroundHover}
        borderHover = {borderHover}
        colorHover = {colorHover}
        className="customBuyButton"
        onClick={addToCart}
    >
     <Label>{text}</Label>
     {priceLabel? (
      <Label>R$ {buttonPrice}</Label>
     ) : (null)
     }
    </Button>
  )
}

export default CustomBuyButton
