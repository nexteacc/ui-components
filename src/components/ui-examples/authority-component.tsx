import React from 'react';

export const AuthorityBad = () => {
  return (
    <div className="min-h-[250px] p-6 bg-white rounded-xl border border-gray-200">
      <h2 className="text-xl font-bold mb-4">你会喜欢XX</h2>
      <div className="space-y-2">
        <div className="h-4 bg-gray-100 rounded w-full"></div>
        <div className="h-4 bg-gray-100 rounded w-3/4"></div>
        <div className="h-4 bg-gray-100 rounded w-5/6"></div>
      </div>
    </div>
  );
};

export const AuthorityGood = () => {
  return (
    <div className="min-h-[250px] p-6 bg-white rounded-xl border border-gray-200">
      <div className="flex items-center gap-3 mb-4">
        <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
          <span className="text-xl">👨‍⚕️</span>
        </div>
        <div>
          <h3 className="font-medium">张医生</h3>
          <p className="text-sm text-gray-500">心理学博士，10年临床经验</p>
        </div>
      </div>
      <div className="space-y-2">
        <div className="h-4 bg-gray-100 rounded w-full"></div>
        <div className="h-4 bg-gray-100 rounded w-3/4"></div>
        <div className="h-4 bg-gray-100 rounded w-5/6"></div>
      </div>
    </div>
  );
};

export const AuthorityExample = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative">
      <div className="relative">
        <AuthorityBad />
        <div className="absolute -bottom-5 -right-5 w-16 h-16 rounded-full bg-red-500 flex items-center justify-center">
          <span className="text-white text-2xl font-bold">✕</span>
        </div>
      </div>
      <div className="relative">
        <AuthorityGood />
        <div className="absolute -bottom-5 -right-5 w-16 h-16 rounded-full bg-green-500 flex items-center justify-center">
          <span className="text-white text-2xl font-bold">✓</span>
        </div>
      </div>
    </div>
  );
};

export const AuthorityCode = {
  html: `<!-- Don't Example -->
<div class="article">
  <h2>你会喜欢XX</h2>
  <div class="content">
    <div class="line"></div>
    <div class="line"></div>
    <div class="line"></div>
  </div>
</div>

<!-- Do Example -->
<div class="article">
  <div class="author">
    <div class="avatar">👨‍⚕️</div>
    <div class="info">
      <h3>张医生</h3>
      <p>心理学博士，10年临床经验</p>
    </div>
  </div>
  <div class="content">
    <div class="line"></div>
    <div class="line"></div>
    <div class="line"></div>
  </div>
</div>`,
  css: `.article {
  min-height: 250px;
  padding: 1.5rem;
  background: white;
  border-radius: 0.75rem;
  border: 1px solid #e5e7eb;
}

.author {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 1rem;
}

.avatar {
  width: 3rem;
  height: 3rem;
  border-radius: 9999px;
  background: #dbeafe;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.25rem;
}

.info h3 {
  font-weight: 500;
}

.info p {
  font-size: 0.875rem;
  color: #6b7280;
}

.content {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.line {
  height: 1rem;
  background: #f3f4f6;
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