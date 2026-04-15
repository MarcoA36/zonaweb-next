'use client';

import { Trash2, Edit } from 'lucide-react';
import type { Product } from '@/app/page';

interface ProductsTableProps {
  products: Product[];
  onEdit: (productId: string) => void;
  onDelete: (productId: string) => void;
}

export default function ProductsTable({ products, onEdit, onDelete }: ProductsTableProps) {
  return (
    <div className="bg-white border border-slate-200 rounded-lg overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-slate-200 bg-slate-50">
              <th className="px-6 py-4 text-left text-sm font-semibold text-slate-900">
                Product
              </th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-slate-900">
                Price
              </th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-slate-900">
                Category
              </th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-slate-900">
                Status
              </th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-slate-900">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {products.length === 0 ? (
              <tr>
                <td colSpan={5} className="px-6 py-12 text-center">
                  <p className="text-slate-500 text-sm">No products found</p>
                </td>
              </tr>
            ) : (
              products.map(product => (
                <tr
                  key={product.id}
                  className="border-b border-slate-200 hover:bg-slate-50 transition-colors"
                >
                  {/* Product Name & Image */}
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      {product.image && (
                        <img
                          src={product.image}
                          alt={product.name}
                          className="w-10 h-10 rounded-lg object-cover"
                        />
                      )}
                      <div>
                        <p className="font-medium text-slate-900">{product.name}</p>
                        {product.description && (
                          <p className="text-xs text-slate-500 truncate max-w-xs">
                            {product.description}
                          </p>
                        )}
                      </div>
                    </div>
                  </td>

                  {/* Price */}
                  <td className="px-6 py-4">
                    <p className="text-slate-900 font-semibold">
                      ${product.price.toFixed(2)}
                    </p>
                  </td>

                  {/* Category */}
                  <td className="px-6 py-4">
                    <span className="inline-block px-3 py-1 bg-slate-100 text-slate-700 rounded-full text-sm">
                      {product.category}
                    </span>
                  </td>

                  {/* Status */}
                  <td className="px-6 py-4">
                    <span
                      className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${
                        product.status === 'active'
                          ? 'bg-green-100 text-green-700'
                          : 'bg-slate-100 text-slate-700'
                      }`}
                    >
                      <span className={`w-2 h-2 rounded-full mr-2 ${
                        product.status === 'active' ? 'bg-green-600' : 'bg-slate-400'
                      }`} />
                      {product.status === 'active' ? 'Active' : 'Inactive'}
                    </span>
                  </td>

                  {/* Actions */}
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => onEdit(product.id)}
                        className="text-slate-400 hover:text-blue-600 transition-colors p-2 hover:bg-blue-50 rounded-lg"
                        title="Edit product"
                      >
                        <Edit className="w-5 h-5" />
                      </button>
                      <button
                        onClick={() => onDelete(product.id)}
                        className="text-slate-400 hover:text-red-600 transition-colors p-2 hover:bg-red-50 rounded-lg"
                        title="Delete product"
                      >
                        <Trash2 className="w-5 h-5" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {/* Footer Stats */}
      {products.length > 0 && (
        <div className="px-6 py-4 bg-slate-50 border-t border-slate-200 flex items-center justify-between text-sm text-slate-600">
          <span>Total Products: <strong className="text-slate-900">{products.length}</strong></span>
          <span>Active: <strong className="text-slate-900">{products.filter(p => p.status === 'active').length}</strong></span>
        </div>
      )}
    </div>
  );
}
