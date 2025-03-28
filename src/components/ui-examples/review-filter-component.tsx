import React from 'react';

export const ReviewFilterBad = () => {
  return (
    <div className="min-h-[300px] p-6 bg-white rounded-xl border border-gray-200">
      <div className="flex items-center gap-4 mb-6">
        <div className="text-4xl font-bold">84</div>
        <div>
          <div className="font-medium">非常好</div>
          <div className="text-sm text-gray-500">40条在线评价</div>
        </div>
      </div>
      <div className="space-x-2">
        <button className="px-4 py-2 border rounded-full text-sm">全部</button>
        <button className="px-4 py-2 border rounded-full text-sm">好评</button>
        <button className="px-4 py-2 border rounded-full text-sm">差评</button>
      </div>
    </div>
  );
};

export const ReviewFilterGood = () => {
  return (
    <div className="min-h-[300px] p-6 bg-white rounded-xl border border-gray-200">
      <div className="flex items-center gap-4 mb-6">
        <div className="text-4xl font-bold">84</div>
        <div>
          <div className="font-medium">非常好</div>
          <div className="text-sm text-gray-500">40条在线评价</div>
        </div>
      </div>
      <div className="space-x-2">
        <button className="px-4 py-2 border rounded-full text-sm flex items-center gap-1">
          <span className="w-4 h-4">🇯🇵</span>
          日本
        </button>
        <button className="px-4 py-2 border rounded-full text-sm flex items-center gap-1">
          <span className="w-4 h-4">🇺🇸</span>
          美国
        </button>
        <button className="px-4 py-2 border rounded-full text-sm flex items-center gap-1">
          <span className="w-4 h-4">🇨🇳</span>
          中国
        </button>
        <button className="px-4 py-2 border rounded-full text-sm flex items-center gap-1">
          <span className="w-4 h-4">🇬🇧</span>
          英国
        </button>
        <button className="px-4 py-2 border rounded-full text-sm">+</button>
      </div>
    </div>
  );
};

export const ReviewFilterExample = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative">
      <div className="relative">
        <ReviewFilterBad />
        <div className="absolute -bottom-5 -right-5 w-16 h-16 rounded-full bg-red-500 flex items-center justify-center">
          <span className="text-white text-2xl font-bold">✕</span>
        </div>
      </div>
      <div className="relative">
        <ReviewFilterGood />
        <div className="absolute -bottom-5 -right-5 w-16 h-16 rounded-full bg-green-500 flex items-center justify-center">
          <span className="text-white text-2xl font-bold">✓</span>
        </div>
      </div>
    </div>
  );
};

export const ReviewFilterCode = {
  html: `<!-- Don't Example -->
<div class="review-filter">
  <div class="score">
    <div class="number">84</div>
    <div class="info">
      <div>非常好</div>
      <div>40条在线评价</div>
    </div>
  </div>
  <div class="filters">
    <button>全部</button>
    <button>好评</button>
    <button>差评</button>
  </div>
</div>

<!-- Do Example -->
<div class="review-filter">
  <div class="score">
    <div class="number">84</div>
    <div class="info">
      <div>非常好</div>
      <div>40条在线评价</div>
    </div>
  </div>
  <div class="filters">
    <button>
      <span>🇯🇵</span>
      日本
    </button>
    <button>
      <span>🇺🇸</span>
      美国
    </button>
    <button>
      <span>🇨🇳</span>
      中国
    </button>
    <button>
      <span>🇬🇧</span>
      英国
    </button>
    <button>+</button>
  </div>
</div>`,
  css: `.review-filter {
  min-height: 300px;
  padding: 1.5rem;
  background: white;
  border-radius: 0.75rem;
  border: 1px solid #e5e7eb;
}

.score {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1.5rem;
}

.number {
  font-size: 2.25rem;
  font-weight: 700;
}

.info > div:first-child {
  font-weight: 500;
}

.info > div:last-child {
  font-size: 0.875rem;
  color: #6b7280;
}

.filters {
  display: flex;
  gap: 0.5rem;
}

button {
  padding: 0.5rem 1rem;
  border: 1px solid #e5e7eb;
  border-radius: 9999px;
  font-size: 0.875rem;
  display: flex;
  align-items: center;
  gap: 0.25rem;
}

span {
  width: 1rem;
  height: 1rem;
}`
};