import React from 'react';

export const OptionListBad = () => {
  return (
    <div className="min-h-[300px] p-6 bg-white rounded-xl border border-gray-200">
      <h2 className="text-xl font-bold mb-4">所有的选择</h2>
      <div className="space-y-3">
        <div className="flex items-center">
          <input type="checkbox" className="w-4 h-4 mr-2" />
          <span className="flex-1 h-4 bg-gray-200 rounded"></span>
        </div>
        <div className="flex items-center">
          <input type="checkbox" checked className="w-4 h-4 mr-2" />
          <span className="flex-1 h-4 bg-gray-200 rounded"></span>
        </div>
        <div className="flex items-center">
          <input type="checkbox" checked className="w-4 h-4 mr-2" />
          <span className="flex-1 h-4 bg-gray-200 rounded"></span>
        </div>
        <div className="flex items-center">
          <input type="checkbox" className="w-4 h-4 mr-2" />
          <span className="flex-1 h-4 bg-gray-200 rounded"></span>
        </div>
        <div className="flex items-center">
          <input type="checkbox" className="w-4 h-4 mr-2" />
          <span className="flex-1 h-4 bg-gray-200 rounded"></span>
        </div>
      </div>
    </div>
  );
};

export const OptionListGood = () => {
  return (
    <div className="min-h-[300px] p-6 bg-white rounded-xl border border-gray-200">
      <h2 className="text-xl font-bold mb-4">最优的选择</h2>
      <div className="space-y-3">
        <div className="flex items-center">
          <input type="checkbox" checked className="w-4 h-4 mr-2" />
          <span className="flex-1 h-4 bg-gray-200 rounded"></span>
        </div>
        <div className="flex items-center">
          <input type="checkbox" checked className="w-4 h-4 mr-2" />
          <span className="flex-1 h-4 bg-gray-200 rounded"></span>
        </div>
        <div className="flex items-center">
          <input type="checkbox" className="w-4 h-4 mr-2" />
          <span className="flex-1 h-4 bg-gray-200 rounded"></span>
        </div>
        <button className="mt-4 w-full py-2 bg-gray-200 text-gray-600 rounded-md">
          更多选择
        </button>
      </div>
    </div>
  );
};

export const OptionListExample = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative">
      <div className="relative">
        <OptionListBad />
        <div className="absolute -bottom-5 -right-5 w-16 h-16 rounded-full bg-red-500 flex items-center justify-center">
          <span className="text-white text-2xl font-bold">✕</span>
        </div>
      </div>
      <div className="relative">
        <OptionListGood />
        <div className="absolute -bottom-5 -right-5 w-16 h-16 rounded-full bg-green-500 flex items-center justify-center">
          <span className="text-white text-2xl font-bold">✓</span>
        </div>
      </div>
    </div>
  );
};

export const OptionListCode = {
  html: `<!-- Don't Example -->
<div class="option-list">
  <h2>所有的选择</h2>
  <div class="options">
    <div class="option">
      <input type="checkbox" />
      <span></span>
    </div>
    <!-- Repeat 4 more times -->
  </div>
</div>

<!-- Do Example -->
<div class="option-list">
  <h2>最优的选择</h2>
  <div class="options">
    <div class="option">
      <input type="checkbox" checked />
      <span></span>
    </div>
    <!-- Repeat 2 more times -->
    <button>更多选择</button>
  </div>
</div>`,
  css: `.option-list {
  min-height: 300px;
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

.options {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.option {
  display: flex;
  align-items: center;
}

input[type="checkbox"] {
  width: 1rem;
  height: 1rem;
  margin-right: 0.5rem;
}

span {
  flex: 1;
  height: 1rem;
  background: #e5e7eb;
  border-radius: 0.25rem;
}

button {
  margin-top: 1rem;
  width: 100%;
  padding: 0.5rem;
  background: #e5e7eb;
  color: #4b5563;
  border-radius: 0.375rem;
  border: none;
  cursor: pointer;
}`
};