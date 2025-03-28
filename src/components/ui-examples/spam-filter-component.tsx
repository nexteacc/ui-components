import React from 'react';

export const SpamFilterBad = () => {
  return (
    <div className="min-h-[300px] flex flex-col justify-between p-6 bg-white rounded-xl border border-gray-200">
      <div>
        <h2 className="text-xl font-bold mb-4">垃圾邮件拦截器</h2>
        <p className="text-2xl font-bold text-green-500 mb-2">仅4%的垃圾邮件</p>
        <p className="text-gray-500">仅售</p>
        <p className="text-3xl font-bold">¥290</p>
      </div>
      <button className="w-full py-3 bg-gray-200 text-gray-700 rounded-md">
        购买
      </button>
    </div>
  );
};

export const SpamFilterGood = () => {
  return (
    <div className="min-h-[300px] flex flex-col justify-between p-6 bg-white rounded-xl border border-gray-200">
      <div>
        <h2 className="text-xl font-bold mb-4">垃圾邮件拦截器</h2>
        <p className="text-2xl font-bold text-green-500 mb-2">96%无垃圾邮件</p>
        <p className="text-gray-500">仅售</p>
        <p className="text-3xl font-bold">¥290</p>
      </div>
      <button className="w-full py-3 bg-gray-200 text-gray-700 rounded-md">
        购买
      </button>
    </div>
  );
};

export const SpamFilterExample = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative">
      <div className="relative">
        <SpamFilterBad />
        <div className="absolute -bottom-5 -right-5 w-16 h-16 rounded-full bg-red-500 flex items-center justify-center">
          <span className="text-white text-2xl font-bold">✕</span>
        </div>
      </div>
      <div className="relative">
        <SpamFilterGood />
        <div className="absolute -bottom-5 -right-5 w-16 h-16 rounded-full bg-green-500 flex items-center justify-center">
          <span className="text-white text-2xl font-bold">✓</span>
        </div>
      </div>
    </div>
  );
};

export const SpamFilterCode = {
  html: `<!-- Don't Example -->
<div class="spam-filter">
  <h2>垃圾邮件拦截器</h2>
  <p class="stat">仅4%的垃圾邮件</p>
  <p class="price-label">仅售</p>
  <p class="price">¥290</p>
  <button class="buy-button">购买</button>
</div>

<!-- Do Example -->
<div class="spam-filter">
  <h2>垃圾邮件拦截器</h2>
  <p class="stat">96%无垃圾邮件</p>
  <p class="price-label">仅售</p>
  <p class="price">¥290</p>
  <button class="buy-button">购买</button>
</div>`,
  css: `.spam-filter {
  min-height: 300px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 1.5rem;
  background-color: white;
  border-radius: 0.75rem;
  border: 1px solid #e5e7eb;
}

.spam-filter h2 {
  font-size: 1.25rem;
  font-weight: 700;
  margin-bottom: 1rem;
}

.stat {
  font-size: 1.5rem;
  font-weight: 700;
  color: #22c55e;
  margin-bottom: 0.5rem;
}

.price-label {
  color: #6b7280;
}

.price {
  font-size: 1.875rem;
  font-weight: 700;
}

.buy-button {
  width: 100%;
  padding: 0.75rem;
  background-color: #e5e7eb;
  color: #374151;
  border-radius: 0.375rem;
  border: none;
  cursor: pointer;
}`
};