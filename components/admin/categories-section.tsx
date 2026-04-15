'use client';

import { useState } from 'react';
import { Trash2, Plus } from 'lucide-react';

interface CategoriesSectionProps {
  categories: string[];
  onAdd: (categoryName: string) => void;
  onDelete: (categoryName: string) => void;
}

export default function CategoriesSection({
  categories,
  onAdd,
  onDelete,
}: CategoriesSectionProps) {
  const [newCategory, setNewCategory] = useState('');
  const [error, setError] = useState('');

  const handleAddCategory = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!newCategory.trim()) {
      setError('Category name cannot be empty');
      return;
    }

    if (categories.includes(newCategory)) {
      setError('This category already exists');
      return;
    }

    onAdd(newCategory);
    setNewCategory('');
  };

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-slate-900 mb-2">Categories</h1>
        <p className="text-slate-500">Manage your product categories</p>
      </div>

      {/* Add Category Form */}
      <form onSubmit={handleAddCategory} className="mb-8">
        <div className="flex gap-3">
          <div className="flex-1">
            <input
              type="text"
              value={newCategory}
              onChange={(e) => {
                setNewCategory(e.target.value);
                setError('');
              }}
              placeholder="Enter new category name"
              className="w-full px-4 py-2 border border-slate-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
            />
            {error && <p className="text-red-600 text-sm mt-1">{error}</p>}
          </div>
          <button
            type="submit"
            className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium flex items-center gap-2 whitespace-nowrap"
          >
            <Plus className="w-5 h-5" />
            Add Category
          </button>
        </div>
      </form>

      {/* Categories List */}
      <div className="bg-slate-50 border border-slate-200 rounded-lg p-6">
        {categories.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-slate-500 text-sm">No categories yet. Create one to get started.</p>
          </div>
        ) : (
          <div className="space-y-2">
            {categories.map(category => (
              <div
                key={category}
                className="px-4 py-3 bg-white border border-slate-200 rounded-lg flex items-center justify-between hover:bg-slate-50 transition-colors"
              >
                <span className="text-slate-700 font-medium">{category}</span>
                <button
                  onClick={() => onDelete(category)}
                  className="text-slate-400 hover:text-red-600 transition-colors p-2 hover:bg-red-50 rounded-lg"
                  title="Delete category"
                >
                  <Trash2 className="w-5 h-5" />
                </button>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Footer Stats */}
      {categories.length > 0 && (
        <div className="mt-4 px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg text-sm text-slate-600">
          Total Categories: <strong className="text-slate-900">{categories.length}</strong>
        </div>
      )}
    </div>
  );
}
