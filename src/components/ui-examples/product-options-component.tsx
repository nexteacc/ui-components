import React from 'react';

export const ProductOptionsBad = () => {
  return (
    <div className="min-h-[350px] p-6 bg-white rounded-xl border border-gray-200">
      <h2 className="text-xl font-bold mb-6">可选产品</h2>
      <div className="grid grid-cols-2 gap-4">
        <div className="p-4 border rounded-lg">
          <h3 className="font-bold mb-2">A</h3>
          <div className="h-24 bg-gray-100 rounded mb-2"></div>
          <p className="text-lg font-bold">¥100</p>
        </div>
        <div className="p-4 border rounded-lg">
          <h3 className="font-bold mb-2">A+B</h3>
          <div className="h-24 bg-gray-100 rounded mb-2"></div>
          <p className="text-lg font-bold">¥300</p>
        </div>
      </div>
    </div>
  );
};

export const ProductOptionsGood = () => {
  return (
    <div className="min-h-[350px] p-6 bg-white rounded-xl border border-gray-200">
      <h2 className="text-xl font-bold mb-6">可选产品</h2>
      <div className="grid grid-cols-3 gap-4">
        <div className="p-4 border rounded-lg">
          <h3 className="font-bold mb-2">A</h3>
          <div className="h-24 bg-gray-100 rounded mb-2"></div>
          <p className="text-lg font-bold">¥100</p>
        </div>
        <div className="p-4 border rounded-lg">
          <h3 className="font-bold mb-2">B</h3>
          <div className="h-24 bg-gray-100 rounded mb-2"></div>
          <p className="text-lg font-bold">¥300</p>
        </div>
        <div className="p-4 border rounded-lg">
          <h3 className="font-bold mb-2">A+B</h3>
          <div className="h-24 bg-gray-100 rounded mb-2"></div>
          <p className="text-lg font-bold">¥300</p>
        </div>
      </div>
    </div>
  );
};

export const ProductOptionsExample = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative">
      <div className="relative">
        <ProductOptionsBad />
        <div className="absolute -bottom-5 -right-5 w-16 h-16 rounded-full bg-red-500 flex items-center justify-center">
          <span className="text-white text-2xl font-bold">✕</span>
        </div>
      </div>
      <div className="relative">
        <ProductOptionsGood />
        <div className="absolute -bottom-5 -right-5 w-16 h-16 rounded-full bg-green-500 flex items-center justify-center">
          <span className="text-white text-2xl font-bold">✓</span>
        </div>
      </div>
    </div>
  );
};

export const ProductOptionsCode = {
  html: `<!-- Don't Example -->
<div class="product-options">
  <h2 class="options-title">可选产品</h2>
  <div class="options-grid-2">
    <div class="option-card">
      <h3>A</h3>
      <div class="product-image"></div>
      <p class="price">¥100</p>
    </div>
    <div class="option-card">
      <h3>A+B</h3>
      <div class="product-image"></div>
      <p class="price">¥300</p>
    </div>
  </div>
</div>

<!-- Do Example -->
<div class="product-options">
  <h2 class="options-title">可选产品</h2>
  <div class="options-grid-3">
    <div class="option-card">
      <h3>A</h3>
      <div class="product-image"></div>
      <p class="price">¥100</p>
    </div>
    <div class="option-card">
      <h3>B</h3>
      <div class="product-image"></div>
      <p class="price">¥300</p>
    </div>
    <div class="option-card">
      <h3>A+B</h3>
      <div class="product-image"></div>
      <p class="price">¥300</p>
    </div>
  </div>
</div>`,
  css: `/* Common Styles */
.product-options {
  min-height: 350px;
  padding: 1.5rem;
  background-color: white;
  border-radius: 0.75rem;
  border: 1px solid #e5e7eb;
}

.options-title {
  font-size: 1.25rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
}

.options-grid-2 {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
}

.options-grid-3 {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
}

.option-card {
  padding: 1rem;
  border: 1px solid #e5e7eb;
  border-radius: 0.5rem;
}

.option-card h3 {
  font-weight: 700;
  margin-bottom: 0.5rem;
}

.product-image {
  height: 6rem;
  background-color: #f3f4f6;
  border-radius: 0.25rem;
  margin-bottom: 0.5rem;
}

.price {
  font-size: 1.125rem;
  font-weight: 700;
}`
};