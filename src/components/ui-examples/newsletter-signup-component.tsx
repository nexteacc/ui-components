import React from 'react';

export const NewsletterSignupBad = () => {
  return (
    <div className="min-h-[250px] flex flex-col justify-between p-6 bg-white rounded-xl border border-gray-200">
      <div className="space-y-4">
        <h2 className="text-xl font-bold">订阅我们优秀的邮件列表</h2>
      </div>
      <button className="w-full py-3 bg-blue-600 text-white rounded-md">
        订阅
      </button>
    </div>
  );
};

export const NewsletterSignupGood = () => {
  return (
    <div className="min-h-[250px] flex flex-col justify-between p-6 bg-white rounded-xl border border-gray-200">
      <div className="space-y-4">
        <div className="text-center">
          <p className="text-lg font-bold mb-2">51000 名产品爱好者已经</p>
          <p className="text-lg font-bold">订阅了我们的每月新闻。</p>
          <p className="text-base mt-4">加入他们吧！</p>
        </div>
      </div>
      <button className="w-full py-3 bg-blue-600 text-white rounded-md">
        订阅
      </button>
    </div>
  );
};

export const NewsletterSignupExample = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative">
      <div className="relative">
        <NewsletterSignupBad />
        <div className="absolute -bottom-5 -right-5 w-16 h-16 rounded-full bg-red-500 flex items-center justify-center">
          <span className="text-white text-2xl font-bold">✕</span>
        </div>
      </div>
      <div className="relative">
        <NewsletterSignupGood />
        <div className="absolute -bottom-5 -right-5 w-16 h-16 rounded-full bg-green-500 flex items-center justify-center">
          <span className="text-white text-2xl font-bold">✓</span>
        </div>
      </div>
    </div>
  );
};

export const NewsletterSignupCode = {
  html: `<!-- Don't Example -->
<div class="newsletter-signup">
  <h2>订阅我们优秀的邮件列表</h2>
  <button class="subscribe-button">订阅</button>
</div>

<!-- Do Example -->
<div class="newsletter-signup">
  <div class="content">
    <p class="headline">51000 名产品爱好者已经</p>
    <p class="headline">订阅了我们的每月新闻。</p>
    <p class="subtext">加入他们吧！</p>
  </div>
  <button class="subscribe-button">订阅</button>
</div>`,
  css: `.newsletter-signup {
  min-height: 250px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 1.5rem;
  background-color: white;
  border-radius: 0.75rem;
  border: 1px solid #e5e7eb;
}

.content {
  text-align: center;
}

.headline {
  font-size: 1.125rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
}

.subtext {
  font-size: 1rem;
  margin-top: 1rem;
}

.subscribe-button {
  width: 100%;
  padding: 0.75rem;
  background-color: #2563eb;
  color: white;
  border-radius: 0.375rem;
  border: none;
  cursor: pointer;
}`
};