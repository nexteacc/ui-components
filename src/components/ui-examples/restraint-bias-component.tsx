import React from 'react';

export const RestraintBiasBad = () => {
  return (
    <div className="min-h-[250px] flex flex-col p-6 bg-white rounded-xl border border-gray-200">
      <h2 className="text-xl font-bold mb-4">使用XX的 8 种</h2>
      <p className="text-lg font-medium">经证实的优势</p>
      <div className="mt-6 space-y-3">
        <div className="h-4 bg-gray-100 rounded w-3/4"></div>
        <div className="h-4 bg-gray-100 rounded w-1/2"></div>
        <div className="h-4 bg-gray-100 rounded w-2/3"></div>
      </div>
    </div>
  );
};

export const RestraintBiasGood = () => {
  return (
    <div className="min-h-[250px] flex flex-col p-6 bg-white rounded-xl border border-gray-200">
      <h2 className="text-xl font-bold mb-4">如果你使用XX，</h2>
      <p className="text-lg font-medium">以下几点会帮助你更</p>
      <p className="text-lg font-medium">高效的工作</p>
      <div className="mt-6 space-y-3">
        <div className="h-4 bg-gray-100 rounded w-3/4"></div>
        <div className="h-4 bg-gray-100 rounded w-1/2"></div>
        <div className="h-4 bg-gray-100 rounded w-2/3"></div>
      </div>
    </div>
  );
};

export const RestraintBiasExample = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative">
      <div className="relative">
        <RestraintBiasBad />
        <div className="absolute -bottom-5 -right-5 w-16 h-16 rounded-full bg-red-500 flex items-center justify-center">
          <span className="text-white text-2xl font-bold">✕</span>
        </div>
      </div>
      <div className="relative">
        <RestraintBiasGood />
        <div className="absolute -bottom-5 -right-5 w-16 h-16 rounded-full bg-green-500 flex items-center justify-center">
          <span className="text-white text-2xl font-bold">✓</span>
        </div>
      </div>
    </div>
  );
};

export const RestraintBiasCode = {
  html: `<!-- Don't Example -->
<div class="card">
  <h2>使用XX的 8 种</h2>
  <p>经证实的优势</p>
  <div class="placeholder-lines">
    <div class="line"></div>
    <div class="line"></div>
    <div class="line"></div>
  </div>
</div>

<!-- Do Example -->
<div class="card">
  <h2>如果你使用XX，</h2>
  <p>以下几点会帮助你更</p>
  <p>高效的工作</p>
  <div class="placeholder-lines">
    <div class="line"></div>
    <div class="line"></div>
    <div class="line"></div>
  </div>
</div>`,
  css: `.card {
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

p {
  font-size: 1.125rem;
  font-weight: 500;
}

.placeholder-lines {
  margin-top: 1.5rem;
}

.line {
  height: 1rem;
  background: #f3f4f6;
  border-radius: 0.25rem;
  margin: 0.75rem 0;
}`
};