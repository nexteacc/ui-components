import React from 'react';

export const NotificationBad = () => {
  return (
    <div className="min-h-[300px] flex flex-col justify-center p-6 bg-white rounded-xl border border-gray-200">
      <div className="text-gray-500 mb-8">
        你发布了你的第一篇文章，
        <br />
        并赢得了10个点数！
      </div>
      <button className="w-full py-3 bg-blue-600 text-white rounded-md text-xl">
        分享新文章
      </button>
    </div>
  );
};

export const NotificationGood = () => {
  return (
    <div className="min-h-[300px] flex flex-col justify-center p-6 bg-white rounded-xl border border-gray-200">
      <div className="text-center mb-6">
        <h2 className="text-2xl font-bold mb-4">恭喜你！</h2>
        <div className="text-gray-500">
          你发布了你的第一篇文章，
          <br />
          并赢得了10个点数！
        </div>
      </div>
      <button className="w-full py-3 bg-blue-600 text-white rounded-md text-xl">
        赢得更多点数
      </button>
    </div>
  );
};

export const NotificationExample = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative">
      <div className="relative">
        <NotificationBad />
        <div className="absolute -bottom-5 -right-5 w-16 h-16 rounded-full bg-red-500 flex items-center justify-center">
          <span className="text-white text-2xl font-bold">✕</span>
        </div>
      </div>
      <div className="relative">
        <NotificationGood />
        <div className="absolute -bottom-5 -right-5 w-16 h-16 rounded-full bg-green-500 flex items-center justify-center">
          <span className="text-white text-2xl font-bold">✓</span>
        </div>
      </div>
    </div>
  );
};

export const NotificationCode = {
  html: `<!-- Don't Example -->
<div class="notification-container">
  <div class="notification-message">
    你发布了你的第一篇文章，
    <br>
    并赢得了10个点数！
  </div>
  <button class="action-button">
    分享新文章
  </button>
</div>

<!-- Do Example -->
<div class="notification-container">
  <div class="notification-content">
    <h2 class="notification-title">恭喜你！</h2>
    <div class="notification-message">
      你发布了你的第一篇文章，
      <br>
      并赢得了10个点数！
    </div>
  </div>
  <button class="action-button">
    赢得更多点数
  </button>
</div>`,
  css: `/* Common Styles */
.notification-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 1.5rem;
  background-color: white;
  border-radius: 0.75rem;
  border: 1px solid #e5e7eb;
  min-height: 300px;
}

.notification-message {
  color: #6b7280;
  margin-bottom: 2rem;
}

.action-button {
  width: 100%;
  padding: 0.75rem;
  background-color: #2563eb;
  color: white;
  border-radius: 0.375rem;
  font-size: 1.25rem;
  border: none;
  cursor: pointer;
}

/* Do Example - Additional Styles */
.notification-content {
  text-align: center;
  margin-bottom: 1.5rem;
}

.notification-title {
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
}`
};
