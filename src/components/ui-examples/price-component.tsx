import React from 'react';
import { Card } from '@/components/ui/card';

export const PriceComponentGood = () => {
  return (
    <div className="min-h-[450px] flex flex-col justify-between p-6 bg-white rounded-xl border border-gray-200">
      <div>
        <h2 className="text-2xl font-bold mb-4">最好的产品</h2>
        <div className="text-5xl font-bold text-green-500 mb-8">¥290</div>
      </div>
      <button className="w-full py-3 bg-gray-400 text-white rounded-md text-xl">
        购买
      </button>
    </div>
  );
};

export const PriceComponentBetter = () => {
  return (
    <div className="min-h-[450px] flex flex-col justify-between p-6 bg-white rounded-xl border border-gray-200">
      <div>
        <h2 className="text-2xl font-bold mb-2">建议零售价</h2>
        <div className="text-2xl font-bold text-gray-500 line-through mb-4">¥400</div>
        <div className="h-px w-full bg-gray-200 my-4"></div>
        <h3 className="text-xl font-bold mb-2">现仅售</h3>
        <div className="text-5xl font-bold text-green-500 mb-8">¥290</div>
      </div>
      <button className="w-full py-3 bg-gray-400 text-white rounded-md text-xl">
        购买
      </button>
    </div>
  );
};

export const PriceComponentExample = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative">
      <div className="relative">
        <PriceComponentGood />
        <div className="absolute -bottom-5 -right-5 w-16 h-16 rounded-full bg-red-500 flex items-center justify-center">
          <span className="text-white text-2xl font-bold">✕</span>
        </div>
      </div>
      <div className="relative">
        <PriceComponentBetter />
        <div className="absolute -bottom-5 -right-5 w-16 h-16 rounded-full bg-green-500 flex items-center justify-center">
          <span className="text-white text-2xl font-bold">✓</span>
        </div>
      </div>
    </div>
  );
};

export const PriceComponentCode = {
  html: `<!-- Don't Example -->
<div class="price-container">
  <h2 class="product-title">最好的产品</h2>
  <div class="price">¥290</div>
  <button class="buy-button">购买</button>
</div>

<!-- Do Example -->
<div class="price-container">
  <h2 class="suggested-price-title">建议零售价</h2>
  <div class="original-price">¥400</div>
  <div class="divider"></div>
  <h3 class="current-price-title">现仅售</h3>
  <div class="current-price">¥290</div>
  <button class="buy-button">购买</button>
</div>`,
  css: `/* Common Styles */
.price-container {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 1.5rem;
  background-color: white;
  border-radius: 0.75rem;
  border: 1px solid #e5e7eb;
  min-height: 450px;
}

.buy-button {
  width: 100%;
  padding: 0.75rem;
  background-color: #9ca3af;
  color: white;
  border-radius: 0.375rem;
  font-size: 1.25rem;
  border: none;
  cursor: pointer;
}

/* Don't Example */
.product-title {
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
}

.price {
  font-size: 3rem;
  font-weight: 700;
  color: #22c55e;
  margin-bottom: 2rem;
}

/* Do Example */
.suggested-price-title {
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
}

.original-price {
  font-size: 1.5rem;
  font-weight: 700;
  color: #6b7280;
  text-decoration: line-through;
  margin-bottom: 1rem;
}

.divider {
  height: 1px;
  width: 100%;
  background-color: #e5e7eb;
  margin: 1rem 0;
}

.current-price-title {
  font-size: 1.25rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
}

.current-price {
  font-size: 3rem;
  font-weight: 700;
  color: #22c55e;
  margin-bottom: 2rem;
}`
};
