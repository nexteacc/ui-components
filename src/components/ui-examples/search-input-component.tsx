import React from 'react';

export const SearchInputBad = () => {
  return (
    <div className="min-h-[250px] flex flex-col p-6 bg-white rounded-xl border border-gray-200">
      <h2 className="text-xl font-bold mb-4">搜索</h2>
      <div className="relative">
        <div className="flex items-center border border-gray-300 rounded-md px-3 py-2">
          <span className="text-xl mr-2">🚲</span>
          <input
            type="text"
            placeholder="输入你的关键词"
            className="w-full outline-none"
          />
        </div>
      </div>
    </div>
  );
};

export const SearchInputGood = () => {
  return (
    <div className="min-h-[250px] flex flex-col p-6 bg-white rounded-xl border border-gray-200">
      <h2 className="text-xl font-bold mb-4">搜索</h2>
      <div className="relative">
        <div className="flex items-center border border-gray-300 rounded-md px-3 py-2">
          <span className="text-xl mr-2">🔍</span>
          <input
            type="text"
            placeholder="输入你的关键词"
            className="w-full outline-none"
          />
        </div>
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
<div class="search">
  <h2>搜索</h2>
  <div class="search-input">
    <span>🚲</span>
    <input type="text" placeholder="输入你的关键词" />
  </div>
</div>

<!-- Do Example -->
<div class="search">
  <h2>搜索</h2>
  <div class="search-input">
    <span>🔍</span>
    <input type="text" placeholder="输入你的关键词" />
  </div>
</div>`,
  css: `.search {
  min-height: 250px;
  padding: 1.5rem;
  background: white;
  border-radius: 0.75rem;
  border: 1px solid #e5e7eb;
}

h2 {
  font-size: 1.25rem;
  font-weight: 700;
  margin-bottom: 1rem;
}

.search-input {
  display: flex;
  align-items: center;
  border: 1px solid #d1d5db;
  border-radius: 0.375rem;
  padding: 0.5rem 0.75rem;
}

span {
  font-size: 1.25rem;
  margin-right: 0.5rem;
}

input {
  width: 100%;
  outline: none;
  border: none;
}`
};