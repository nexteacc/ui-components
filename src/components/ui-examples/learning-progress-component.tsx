import React from 'react';

export const LearningProgressBad = () => {
  return (
    <div className="min-h-[300px] flex flex-col justify-between p-6 bg-white rounded-xl border border-gray-200">
      <div>
        <h2 className="text-xl font-bold mb-4">学习进度</h2>
        <div className="h-2 w-full bg-gray-200 rounded-full">
          <div className="h-2 w-[75%] bg-blue-600 rounded-full"></div>
        </div>
      </div>
      <button className="w-full py-3 bg-blue-600 text-white rounded-md">
        继续学习
      </button>
    </div>
  );
};

export const LearningProgressGood = () => {
  return (
    <div className="min-h-[300px] flex flex-col justify-between p-6 bg-white rounded-xl border border-gray-200">
      <div>
        <h2 className="text-xl font-bold mb-4">Level 9 精通</h2>
        <p className="text-gray-600 mb-4">轻松刷完原版《哈利波特》，看得懂英文报刊杂志。</p>
        <div className="space-y-2">
          <div className="flex justify-between text-sm text-gray-600">
            <span>雅思 7.5 托福 105 步入名校</span>
            <span>75%</span>
          </div>
          <div className="h-2 w-full bg-gray-200 rounded-full">
            <div className="h-2 w-[75%] bg-blue-600 rounded-full"></div>
          </div>
        </div>
      </div>
      <button className="w-full py-3 bg-blue-600 text-white rounded-md">
        继续学习
      </button>
    </div>
  );
};

export const LearningProgressExample = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative">
      <div className="relative">
        <LearningProgressBad />
        <div className="absolute -bottom-5 -right-5 w-16 h-16 rounded-full bg-red-500 flex items-center justify-center">
          <span className="text-white text-2xl font-bold">✕</span>
        </div>
      </div>
      <div className="relative">
        <LearningProgressGood />
        <div className="absolute -bottom-5 -right-5 w-16 h-16 rounded-full bg-green-500 flex items-center justify-center">
          <span className="text-white text-2xl font-bold">✓</span>
        </div>
      </div>
    </div>
  );
};

export const LearningProgressCode = {
  html: `<!-- Don't Example -->
<div class="learning-progress">
  <h2>学习进度</h2>
  <div class="progress-bar">
    <div class="progress-fill"></div>
  </div>
  <button>继续学习</button>
</div>

<!-- Do Example -->
<div class="learning-progress">
  <h2>Level 9 精通</h2>
  <p>轻松刷完原版《哈利波特》，看得懂英文报刊杂志。</p>
  <div class="progress-section">
    <div class="progress-info">
      <span>雅思 7.5 托福 105 步入名校</span>
      <span>75%</span>
    </div>
    <div class="progress-bar">
      <div class="progress-fill"></div>
    </div>
  </div>
  <button>继续学习</button>
</div>`,
  css: `.learning-progress {
  min-height: 300px;
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
  margin-bottom: 1rem;
}

.progress-section {
  margin-top: 0.5rem;
}

.progress-info {
  display: flex;
  justify-content: space-between;
  font-size: 0.875rem;
  color: #4b5563;
  margin-bottom: 0.5rem;
}

.progress-bar {
  height: 0.5rem;
  background: #e5e7eb;
  border-radius: 9999px;
  overflow: hidden;
}

.progress-fill {
  height: 100%;
  width: 75%;
  background: #2563eb;
  border-radius: 9999px;
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