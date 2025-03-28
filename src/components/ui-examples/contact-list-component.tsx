import React from 'react';

export const ContactListBad = () => {
  return (
    <div className="min-h-[250px] flex flex-col bg-white rounded-xl border border-gray-200">
      <div className="p-4 bg-gray-100 border-b">
        <h2 className="text-xl font-bold">联系人</h2>
      </div>
      <div className="divide-y">
        <div className="p-4">
          <h3 className="font-bold">王南南</h3>
          <p className="text-gray-600">部门 Leader</p>
        </div>
        <div className="p-4">
          <h3 className="font-bold">雪莉</h3>
          <p className="text-gray-600">HR</p>
        </div>
        <div className="p-4">
          <h3 className="font-bold">刘小宇</h3>
          <p className="text-gray-600">技术</p>
        </div>
      </div>
    </div>
  );
};

export const ContactListGood = () => {
  return (
    <div className="min-h-[250px] flex flex-col bg-white rounded-xl border border-gray-200">
      <div className="p-4 bg-gray-50 border-b">
        <h2 className="text-xl font-bold">联系人</h2>
      </div>
      <div className="divide-y">
        <div className="p-4">
          <h3 className="font-bold text-gray-700">王南南</h3>
          <p className="text-gray-500 text-sm">部门 Leader</p>
        </div>
        <div className="p-4">
          <h3 className="font-bold text-gray-700">雪莉</h3>
          <p className="text-gray-500 text-sm">HR</p>
        </div>
        <div className="p-4">
          <h3 className="font-bold text-gray-700">刘小宇</h3>
          <p className="text-gray-500 text-sm">技术</p>
        </div>
      </div>
    </div>
  );
};

export const ContactListExample = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative">
      <div className="relative">
        <ContactListBad />
        <div className="absolute -bottom-5 -right-5 w-16 h-16 rounded-full bg-red-500 flex items-center justify-center">
          <span className="text-white text-2xl font-bold">✕</span>
        </div>
      </div>
      <div className="relative">
        <ContactListGood />
        <div className="absolute -bottom-5 -right-5 w-16 h-16 rounded-full bg-green-500 flex items-center justify-center">
          <span className="text-white text-2xl font-bold">✓</span>
        </div>
      </div>
    </div>
  );
};

export const ContactListCode = {
  html: `<!-- Don't Example -->
<div class="contact-list">
  <h2>联系人</h2>
  <div class="contact-item">
    <p class="name">王南南</p>
    <p class="role">部门 Leader</p>
  </div>
  <div class="contact-item">
    <p class="name">雪莉</p>
    <p class="role">HR</p>
  </div>
  <div class="contact-item">
    <p class="name">刘小宇</p>
    <p class="role">技术</p>
  </div>
</div>

<!-- Do Example -->
<div class="contact-list">
  <h2>联系人</h2>
  <div class="contact-item">
    <p class="name">王南南</p>
    <p class="role">部门 Leader</p>
  </div>
  <div class="contact-item">
    <p class="name">雪莉</p>
    <p class="role">HR</p>
  </div>
  <div class="contact-item">
    <p class="name">刘小宇</p>
    <p class="role">技术</p>
  </div>
</div>`,
  css: `.contact-list {
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

.contact-item {
  padding: 0.75rem;
  border: 1px solid #e5e7eb;
  border-radius: 0.5rem;
  margin-bottom: 1rem;
}

.name {
  font-weight: 500;
}

.role {
  font-size: 0.875rem;
  color: #4b5563;
}`
};