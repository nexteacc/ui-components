import React from 'react';

export const SearchInputBad = () => {
  return (
    <div className="min-h-[250px] flex flex-col justify-center p-6 bg-white rounded-xl border border-gray-200">
      <div className="relative">
        <input
          type="text"
          placeholder="输入你的关键词"
          className="w-full px-10 py-2 border rounded-lg"
        />
        <span className="absolute left-3 top-1/2 -translate-y-1/2">
          🔍
        </span>
      </div>
    </div>
  );
};

export const SearchInputGood = () => {
  return (
    <div className="min-h-[250px] flex flex-col justify-center p-6 bg-white rounded-xl border border-gray-200">
      <div className="relative">
        <input
          type="text"
          placeholder="输入你的关键词"
          className="w-full px-10 py-2 border rounded-lg"
        />
        <svg
          className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
      </div>
    </div>
  );
};

export const SearchInputExample = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative">
      <div className="relative">
        <SearchInputBad />
        <div className="absolute -bottom-5 -right-5 w-16 h-16 rounded-full bg-red-500 flex items-center justify-center">
          <span className="text-white text-2xl font-bold">✕</span>
        </div>
      </div>
      <div className="relative">
        <SearchInputGood />
        <div className="absolute -bottom-5 -right-5 w-16 h-16 rounded-full bg-green-500 flex items-center justify-center">
          <span className="text-white text-2xl font-bold">✓</span>
        </div>
      </div>
    </div>
  );
};

export const SearchInputCode = {
  html: `<!-- Don't Example -->
<div class="search-container">
  <input type="text" placeholder="输入你的关键词" />
  <span class="search-icon">🔍</span>
</div>

<!-- Do Example -->
<div class="search-container">
  <input type="text" placeholder="输入你的关键词" />
  <svg class="search-icon" viewBox="0 0 24 24">
    <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
  </svg>
</div>`,
  css: `.search-container {
  position: relative;
  min-height: 250px;
  display: flex;
  align-items: center;
  padding: 1.5rem;
  background: white;
  border-radius: 0.75rem;
  border: 1px solid #e5e7eb;
}

input {
  width: 100%;
  padding: 0.5rem 2.5rem;
  border: 1px solid #e5e7eb;
  border-radius: 0.5rem;
}

.search-icon {
  position: absolute;
  left: 0.75rem;
  top: 50%;
  transform: translateY(-50%);
  width: 1rem;
  height: 1rem;
  stroke: currentColor;
  stroke-width: 2;
  stroke-linecap: round;
  stroke-linejoin: round;
  fill: none;
}`
};