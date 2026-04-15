'use client';

import { useState } from 'react';
import { Trash2, Plus } from 'lucide-react';
import type { Article } from '@/app/page';
import AddArticleModal from './add-article-modal';

interface ArticlesSectionProps {
  articles: Article[];
  categories: string[];
  onAdd: (article: Omit<Article, 'id'>) => void;
  onDelete: (articleId: string) => void;
}

export default function ArticlesSection({
  articles,
  categories,
  onAdd,
  onDelete,
}: ArticlesSectionProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const getStatusColor = (status: string) => {
    return status === 'published'
      ? 'bg-green-100 text-green-700'
      : 'bg-yellow-100 text-yellow-700';
  };

  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold text-slate-900">Articles</h1>
          <p className="text-slate-500 mt-1">Manage your blog articles</p>
        </div>
        <button
          onClick={() => setIsModalOpen(true)}
          className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium flex items-center gap-2"
        >
          <Plus className="w-5 h-5" />
          Add Article
        </button>
      </div>

      {/* Articles Table */}
      <div className="bg-white border border-slate-200 rounded-lg overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-slate-200 bg-slate-50">
                <th className="px-6 py-4 text-left text-sm font-semibold text-slate-900">
                  Article
                </th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-slate-900">
                  Category
                </th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-slate-900">
                  Status
                </th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-slate-900">
                  Created
                </th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-slate-900">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {articles.length === 0 ? (
                <tr>
                  <td colSpan={5} className="px-6 py-12 text-center">
                    <p className="text-slate-500 text-sm">No articles found</p>
                  </td>
                </tr>
              ) : (
                articles.map(article => (
                  <tr
                    key={article.id}
                    className="border-b border-slate-200 hover:bg-slate-50 transition-colors"
                  >
                    {/* Article Title & Image */}
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        {article.image && (
                          <img
                            src={article.image}
                            alt={article.title}
                            className="w-10 h-10 rounded-lg object-cover"
                          />
                        )}
                        <div>
                          <p className="font-medium text-slate-900">{article.title}</p>
                          <p className="text-xs text-slate-500 truncate max-w-xs">
                            {article.excerpt}
                          </p>
                        </div>
                      </div>
                    </td>

                    {/* Category */}
                    <td className="px-6 py-4">
                      <span className="inline-block px-3 py-1 bg-slate-100 text-slate-700 rounded-full text-sm">
                        {article.category}
                      </span>
                    </td>

                    {/* Status */}
                    <td className="px-6 py-4">
                      <span
                        className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(
                          article.status
                        )}`}
                      >
                        <span className={`w-2 h-2 rounded-full mr-2 ${
                          article.status === 'published' ? 'bg-green-600' : 'bg-yellow-600'
                        }`} />
                        {article.status === 'published' ? 'Published' : 'Draft'}
                      </span>
                    </td>

                    {/* Created Date */}
                    <td className="px-6 py-4">
                      <p className="text-slate-600 text-sm">{article.createdAt}</p>
                    </td>

                    {/* Actions */}
                    <td className="px-6 py-4">
                      <button
                        onClick={() => onDelete(article.id)}
                        className="text-slate-400 hover:text-red-600 transition-colors p-2 hover:bg-red-50 rounded-lg"
                        title="Delete article"
                      >
                        <Trash2 className="w-5 h-5" />
                      </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>

        {/* Footer Stats */}
        {articles.length > 0 && (
          <div className="px-6 py-4 bg-slate-50 border-t border-slate-200 flex items-center justify-between text-sm text-slate-600">
            <span>Total Articles: <strong className="text-slate-900">{articles.length}</strong></span>
            <span>Published: <strong className="text-slate-900">{articles.filter(a => a.status === 'published').length}</strong></span>
          </div>
        )}
      </div>

      <AddArticleModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmit={onAdd}
        categories={categories}
      />
    </div>
  );
}
