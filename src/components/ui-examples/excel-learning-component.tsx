import React from 'react';

export const ExcelLearningBad = () => {
  return (
    <div className="min-h-[250px] flex flex-col justify-between p-6 bg-white rounded-xl border border-gray-200">
      <div>
        <h2 className="text-xl font-bold mb-4">像专业人士一样创建 Excel 数据透视表！</h2>
      </div>
      <button className="w-full py-3 bg-gray-200 text-gray-700 rounded-md">
        现在学习
      </button>
    </div>
  );
};

export const ExcelLearningGood = () => {
  return (
    <div className="min-h-[250px] flex flex-col justify-between p-6 bg-white rounded-xl border border-gray-200">
      <div>
        <h2 className="text-xl font-bold mb-4">不会使用 Excel 数据表格？</h2>
        <p className="text-gray-600">"不要让你的老板失望！"</p>
      </div>
      <button className="w-full py-3 bg-gray-200 text-gray-700 rounded-md">
        现在学习
      </button>
    </div>
  );
};

export const ExcelLearningExample = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative">
      <div className="relative">
        <ExcelLearningBad />
        <div className="absolute -bottom-5 -right-5 w-16 h-16 rounded-full bg-red-500 flex items-center justify-center">
          <span className="text-white text-2xl font-bold">✕</span>
        </div>
      </div>
      <div className="relative">
        <ExcelLearningGood />
        <div className="absolute -bottom-5 -right-5 w-16 h-16 rounded-full bg-green-500 flex items-center justify-center">
          <span className="text-white text-2xl font-bold">✓</span>
        </div>
      </div>
    </div>
  );
};

export const ExcelLearningCode = {
  html: `<!-- Don't Example -->
<div class="excel-learning">
  <h2>像专业人士一样创建 Excel 数据透视表！</h2>
  <button>现在学习</button>
</div>

<!-- Do Example -->
<div class="excel-learning">
  <h2>不会使用 Excel 数据表格？</h2>
  <p>"不要让你的老板失望！"</p>
  <button>现在学习</button>
</div>`,
  css: `.excel-learning {
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

p {
  color: #4b5563;
}

button {
  width: 100%;
  padding: 0.75rem;
  background: #e5e7eb;
  color: #374151;
  border-radius: 0.375rem;
  border: none;
  cursor: pointer;
}`
};