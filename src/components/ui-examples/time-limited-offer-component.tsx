import React from 'react';

export const TimeLimitedOfferBad = () => {
  return (
    <div className="min-h-[250px] flex flex-col justify-between p-6 bg-white rounded-xl border border-gray-200">
      <div className="text-center">
        <p className="text-4xl font-bold text-green-500">¥290</p>
      </div>
      <button className="w-full py-3 bg-blue-600 text-white rounded-md">
        购买
      </button>
    </div>
  );
};

export const TimeLimitedOfferGood = () => {
  return (
    <div className="min-h-[250px] flex flex-col justify-between p-6 bg-white rounded-xl border border-gray-200">
      <div className="text-center">
        <p className="text-4xl font-bold text-green-500">¥290</p>
      </div>
      <div className="space-y-3">
        <button className="w-full py-3 bg-blue-600 text-white rounded-md">
          购买
        </button>
        <p className="text-sm text-center text-red-500">
          最后两小时
        </p>
      </div>
    </div>
  );
};

export const TimeLimitedOfferExample = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative">
      <div className="relative">
        <TimeLimitedOfferBad />
        <div className="absolute -bottom-5 -right-5 w-16 h-16 rounded-full bg-red-500 flex items-center justify-center">
          <span className="text-white text-2xl font-bold">✕</span>
        </div>
      </div>
      <div className="relative">
        <TimeLimitedOfferGood />
        <div className="absolute -bottom-5 -right-5 w-16 h-16 rounded-full bg-green-500 flex items-center justify-center">
          <span className="text-white text-2xl font-bold">✓</span>
        </div>
      </div>
    </div>
  );
};

export const TimeLimitedOfferCode = {
  html: `<!-- Don't Example -->
<div class="offer-card">
  <p class="price">¥290</p>
  <button>购买</button>
</div>

<!-- Do Example -->
<div class="offer-card">
  <p class="price">¥290</p>
  <div class="action-area">
    <button>购买</button>
    <p class="time-limit">最后两小时</p>
  </div>
</div>`,
  css: `.offer-card {
  min-height: 250px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 1.5rem;
  background: white;
  border-radius: 0.75rem;
  border: 1px solid #e5e7eb;
  text-align: center;
}

.price {
  font-size: 2.25rem;
  font-weight: 700;
  color: #22c55e;
}

.action-area {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

button {
  width: 100%;
  padding: 0.75rem;
  background: #2563eb;
  color: white;
  border-radius: 0.375rem;
  border: none;
  cursor: pointer;
}

.time-limit {
  font-size: 0.875rem;
  color: #ef4444;
  text-align: center;
}`
};