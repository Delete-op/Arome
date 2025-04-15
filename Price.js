import React from 'react';

export default function Price({ price, locale = 'en-IN', currency = 'INR' }) {
  const formatPrice = () => {
    if (typeof price !== 'number') {
      console.error("Invalid price: Price should be a number.");
      return price; // Return raw price if it's not a number
    }

    return new Intl.NumberFormat(locale, {
      style: 'currency',
      currency,
    }).format(price);
  };

  return <span>{formatPrice()}</span>;
}
