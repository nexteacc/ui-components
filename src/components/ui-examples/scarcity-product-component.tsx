import React from 'react';

export const ScarcityProductBad = () => {
  return (
    <div className="min-h-[300px] flex flex-col justify-between p-6 bg-white rounded-xl border border-gray-200">
      <div>
        <div className="w-full h-32 bg-gray-200 rounded-lg mb-4"></div>
        <div className="space-y-2">
          <div className="h-4 bg-gray-200 rounded w-3/4"></div>
          <div className="h-4 bg-gray-200 rounded w-1/2"></div>
        </div>
      </div>
      <button className="w-full py-3 bg-blue-600 text-white rounded-md">
        购买
      </button>
    </div>
  );
};

export const ScarcityProductGood = () => {
  return (
    <div className="min-h-[300px] flex flex-col justify-between p-6 bg-white rounded-xl border border-gray-200">
      <div>
        <div className="w-full h-32 bg-gray-200 rounded-lg mb-4"></div>
        <div className="space-y-2">
          <div className="h-4 bg-gray-200 rounded w-3/4"></div>
          <div className="h-4 bg-gray-200 rounded w-1/2"></div>
        </div>
      </div>
      <div className="space-y-3">
        <p className="text-sm text-red-500">限时抢购，仅剩2件。</p>
        <button className="w-full py-3 bg-blue-600 text-white rounded-md">
          购买
        </button>
      </div>
    </div>
  );
};

export const ScarcityProductExample = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative">
      <div className="relative">
        <ScarcityProductBad />
        <div className="absolute -bottom-5 -right-5 w-16 h-16 rounded-full bg-red-500 flex items-center justify-center">
          <span className="text-white text-2xl font-bold">✕</span>
        </div>
      </div>
      <div className="relative">
        <ScarcityProductGood />
        <div className="absolute -bottom-5 -right-5 w-16 h-16 rounded-full bg-green-500 flex items-center justify-center">
          <span className="text-white text-2xl font-bold">✓</span>
        </div>
      </div>
    </div>
  );
};

export const ScarcityProductCode = {
  html: `<!-- Don't Example -->
<div class="product-card">
  <div class="image"></div>
  <div class="content">
    <div class="line"></div>
    <div class="line"></div>
  </div>
  <button>购买</button>
</div>

<!-- Do Example -->
<div class="product-card">
  <div class="image"></div>
  <div class="content">
    <div class="line"></div>
    <div class="line"></div>
  </div>
  <p class="scarcity">限时抢购，仅剩2件。</p>
  <button>购买</button>
</div>`,
  css: `.product-card {
  min-height: 300px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 1.5rem;
  background: white;
  border-radius: 0.75rem;
  border: 1px solid #e5e7eb;
}

.image {
  width: 100%;
  height: 8rem;
  background: #e5e7eb;
  border-radius: 0.5rem;
  margin-bottom: 1rem;
}

.content {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.line {
  height: 1rem;
  background: #e5e7eb;
  border-radius: 0.25rem;
}

.line:nth-child(1) {
  width: 75%;
}

.line:nth-child(2) {
  width: 50%;
}

.scarcity {
  font-size: 0.875rem;
  color: #ef4444;
  margin-bottom: 0.75rem;
}

button {
  width: 100%;
  padding: 0.75rem;
  background: #2563eb;
  color: white;
  border-radius: 0.375rem;
  border: none;
  cursor: pointer;
}`
};