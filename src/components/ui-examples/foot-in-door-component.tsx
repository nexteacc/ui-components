import React from 'react';

export const FootInDoorBad = () => {
  return (
    <div className="min-h-[300px] p-6 bg-white rounded-xl border border-gray-200">
      <h2 className="text-xl font-bold mb-4">开始吧！</h2>
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">名字</label>
          <input
            type="text"
            className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">地址</label>
          <input
            type="text"
            className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md"
          />
        </div>
      </div>
    </div>
  );
};

export const FootInDoorGood = () => {
  return (
    <div className="min-h-[300px] p-6 bg-white rounded-xl border border-gray-200">
      <h2 className="text-xl font-bold mb-4">开始吧！</h2>
      <p className="text-sm text-gray-600 mb-4">我们提供了以下可能感兴趣的分类：</p>
      <div className="space-y-3">
        <label className="flex items-center">
          <input type="checkbox" className="w-4 h-4 mr-2" />
          <span>市场 (29)</span>
        </label>
        <label className="flex items-center">
          <input type="checkbox" className="w-4 h-4 mr-2" />
          <span>销售 (17)</span>
        </label>
        <label className="flex items-center">
          <input type="checkbox" className="w-4 h-4 mr-2" />
          <span>技术 (12)</span>
        </label>
        <label className="flex items-center">
          <input type="checkbox" className="w-4 h-4 mr-2" />
          <span>设计 (05)</span>
        </label>
      </div>
    </div>
  );
};

export const FootInDoorExample = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative">
      <div className="relative">
        <FootInDoorBad />
        <div className="absolute -bottom-5 -right-5 w-16 h-16 rounded-full bg-red-500 flex items-center justify-center">
          <span className="text-white text-2xl font-bold">✕</span>
        </div>
      </div>
      <div className="relative">
        <FootInDoorGood />
        <div className="absolute -bottom-5 -right-5 w-16 h-16 rounded-full bg-green-500 flex items-center justify-center">
          <span className="text-white text-2xl font-bold">✓</span>
        </div>
      </div>
    </div>
  );
};

export const FootInDoorCode = {
  html: `<!-- Don't Example -->
<div class="form">
  <h2>开始吧！</h2>
  <div class="fields">
    <div class="field">
      <label>名字</label>
      <input type="text" />
    </div>
    <div class="field">
      <label>地址</label>
      <input type="text" />
    </div>
  </div>
</div>

<!-- Do Example -->
<div class="form">
  <h2>开始吧！</h2>
  <p>我们提供了以下可能感兴趣的分类：</p>
  <div class="options">
    <label>
      <input type="checkbox" />
      <span>市场 (29)</span>
    </label>
    <label>
      <input type="checkbox" />
      <span>销售 (17)</span>
    </label>
    <label>
      <input type="checkbox" />
      <span>技术 (12)</span>
    </label>
    <label>
      <input type="checkbox" />
      <span>设计 (05)</span>
    </label>
  </div>
</div>`,
  css: `.form {
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

p {
  font-size: 0.875rem;
  color: #4b5563;
  margin-bottom: 1rem;
}

.fields {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.field label {
  display: block;
  font-size: 0.875rem;
  font-weight: 500;
  color: #374151;
  margin-bottom: 0.25rem;
}

.field input {
  width: 100%;
  padding: 0.5rem 0.75rem;
  border: 1px solid #d1d5db;
  border-radius: 0.375rem;
}

.options {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.options label {
  display: flex;
  align-items: center;
}

.options input[type="checkbox"] {
  width: 1rem;
  height: 1rem;
  margin-right: 0.5rem;
}`
};