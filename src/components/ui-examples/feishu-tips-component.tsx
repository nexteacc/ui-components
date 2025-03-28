import React from 'react';

export const FeishuTipsBad = () => {
  return (
    <div className="min-h-[250px] flex flex-col justify-between p-6 bg-white rounded-xl border border-gray-200">
      <div>
        <h2 className="text-xl font-bold mb-4">使用XX的8种经证实的优势</h2>
        <div className="space-y-2">
          <div className="h-4 bg-gray-100 rounded w-full"></div>
          <div className="h-4 bg-gray-100 rounded w-3/4"></div>
          <div className="h-4 bg-gray-100 rounded w-5/6"></div>
        </div>
      </div>
    </div>
  );
};

export const FeishuTipsGood = () => {
  return (
    <div className="min-h-[250px] flex flex-col justify-between p-6 bg-white rounded-xl border border-gray-200">
      <div>
        <h2 className="text-xl font-bold mb-4">如果你使用XX，以下几点会帮助你更高效的工作</h2>
        <div className="space-y-2">
          <div className="h-4 bg-gray-100 rounded w-full"></div>
          <div className="h-4 bg-gray-100 rounded w-3/4"></div>
          <div className="h-4 bg-gray-100 rounded w-5/6"></div>
        </div>
      </div>
    </div>
  );
};

export const FeishuTipsExample = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative">
      <div className="relative">
        <FeishuTipsBad />
        <div className="absolute -bottom-5 -right-5 w-16 h-16 rounded-full bg-red-500 flex items-center justify-center">
          <span className="text-white text-2xl font-bold">✕</span>
        </div>
      </div>
      <div className="relative">
        <FeishuTipsGood />
        <div className="absolute -bottom-5 -right-5 w-16 h-16 rounded-full bg-green-500 flex items-center justify-center">
          <span className="text-white text-2xl font-bold">✓</span>
        </div>
      </div>
    </div>
  );
};

export const FeishuTipsCode = {
  html: `<!-- Don't Example -->
<div class="tips-card">
  <h2>使用XX的8种经证实的优势</h2>
  <div class="content">
    <div class="line"></div>
    <div class="line"></div>
    <div class="line"></div>
  </div>
</div>

<!-- Do Example -->
<div class="tips-card">
  <h2>如果你使用XX，以下几点会帮助你更高效的工作</h2>
  <div class="content">
    <div class="line"></div>
    <div class="line"></div>
    <div class="line"></div>
  </div>
</div>`,
  css: `.tips-card {
  min-height: 250px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
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

.content {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.line {
  height: 1rem;
  background-color: #f3f4f6;
  border-radius: 0.25rem;
}

.line:nth-child(1) {
  width: 100%;
}

.line:nth-child(2) {
  width: 75%;
}

.line:nth-child(3) {
  width: 83.333333%;
}`
};