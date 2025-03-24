import React from 'react';

export const ProductCardBad = () => {
  return (
    <div className="min-h-[350px] flex flex-col justify-between p-6 bg-white rounded-xl border border-gray-200">
      <div className="flex gap-4">
        <div className="w-20 h-20 bg-gray-200 rounded-md"></div>
        <div className="space-y-2">
          <div className="h-4 w-32 bg-gray-200 rounded"></div>
          <div className="h-4 w-40 bg-gray-200 rounded"></div>
          <div className="h-4 w-28 bg-gray-200 rounded"></div>
        </div>
      </div>
      <button className="w-full py-3 bg-gray-400 text-white rounded-md text-xl">
        购买
      </button>
    </div>
  );
};

export const ProductCardGood = () => {
  return (
    <div className="min-h-[350px] flex flex-col justify-between p-6 bg-white rounded-xl border border-gray-200">
      <div className="flex gap-4">
        <div className="w-20 h-20 bg-gray-200 rounded-md"></div>
        <div className="space-y-2">
          <div className="h-4 w-32 bg-gray-200 rounded"></div>
          <div className="h-4 w-40 bg-gray-200 rounded"></div>
          <div className="h-4 w-28 bg-gray-200 rounded"></div>
        </div>
      </div>
      <div>
        <button className="w-full py-3 bg-gray-400 text-white rounded-md text-xl mb-3">
          购买
        </button>
        <div className="text-sm flex gap-1 items-center justify-center">
          <span className="w-4 h-4 inline-flex items-center justify-center bg-black text-white rounded-full text-xs">!</span>
          <span>用户XXX购买了该商品。</span>
        </div>
      </div>
    </div>
  );
};

export const ProductCardExample = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative">
      <div className="relative">
        <ProductCardBad />
        <div className="absolute -bottom-5 -right-5 w-16 h-16 rounded-full bg-red-500 flex items-center justify-center">
          <span className="text-white text-2xl font-bold">✕</span>
        </div>
      </div>
      <div className="relative">
        <ProductCardGood />
        <div className="absolute -bottom-5 -right-5 w-16 h-16 rounded-full bg-green-500 flex items-center justify-center">
          <span className="text-white text-2xl font-bold">✓</span>
        </div>
      </div>
    </div>
  );
};

export const ProductCardCode = {
  html: `<!-- Don't Example -->
<div class="product-card">
  <div class="product-info">
    <div class="product-image"></div>
    <div class="product-details">
      <div class="product-detail-line"></div>
      <div class="product-detail-line"></div>
      <div class="product-detail-line"></div>
    </div>
  </div>
  <button class="buy-button">购买</button>
</div>

<!-- Do Example -->
<div class="product-card">
  <div class="product-info">
    <div class="product-image"></div>
    <div class="product-details">
      <div class="product-detail-line"></div>
      <div class="product-detail-line"></div>
      <div class="product-detail-line"></div>
    </div>
  </div>
  <div class="purchase-section">
    <button class="buy-button">购买</button>
    <div class="social-proof">
      <span class="info-icon">!</span>
      <span class="proof-text">用户XXX购买了该商品。</span>
    </div>
  </div>
</div>`,
  css: `/* Common Styles */
.product-card {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 1.5rem;
  background-color: white;
  border-radius: 0.75rem;
  border: 1px solid #e5e7eb;
  min-height: 350px;
}

.product-info {
  display: flex;
  gap: 1rem;
}

.product-image {
  width: 5rem;
  height: 5rem;
  background-color: #e5e7eb;
  border-radius: 0.375rem;
}

.product-details {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.product-detail-line {
  height: 1rem;
  background-color: #e5e7eb;
  border-radius: 0.25rem;
}

.product-detail-line:nth-child(1) {
  width: 8rem;
}

.product-detail-line:nth-child(2) {
  width: 10rem;
}

.product-detail-line:nth-child(3) {
  width: 7rem;
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

/* Do Example - Additional Styles */
.purchase-section {
  display: flex;
  flex-direction: column;
}

.social-proof {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.25rem;
  margin-top: 0.75rem;
  font-size: 0.875rem;
}

.info-icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 1rem;
  height: 1rem;
  background-color: black;
  color: white;
  border-radius: 9999px;
  font-size: 0.75rem;
}
`
};
