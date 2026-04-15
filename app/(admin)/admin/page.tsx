'use client';



import { useState } from 'react';
// import Sidebar from '@/components/sidebar';
// import ProductsTable from '@/components/products-table';
// import AddProductModal from '@/components/add-product-modal';
// import EditProductModal from '@/components/edit-product-modal';
// import CategoriesSection from '@/components/categories-section';
// import ArticlesSection from '@/components/articles-section';
import AddProductModal from '@/components/admin/add-product-modal';
import ArticlesSection from '@/components/admin/articles-section';
import EditProductModal from '@/components/admin/edit-product-modal';
import ProductsTable from '@/components/admin/products-table';
import Sidebar from '@/components/admin/sidebar';
import CategoriesSection from '@/components/admin/categories-section';

export interface Product {
  id: string;
  name: string;
  price: number;
  category: string;
  status: 'active' | 'inactive';
  image?: string;
  description?: string;
}

export interface Article {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  status: 'published' | 'draft';
  image?: string;
  createdAt: string;
}

const INITIAL_PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'Premium Wireless Headphones',
    price: 299.99,
    category: 'Electronics',
    status: 'active',
    description: 'High-quality sound with noise cancellation',
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&h=500&fit=crop',
  },
  {
    id: '2',
    name: 'Minimalist Watch',
    price: 149.99,
    category: 'Accessories',
    status: 'active',
    description: 'Elegant timepiece with modern design',
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&h=500&fit=crop',
  },
  {
    id: '3',
    name: 'Portable Power Bank',
    price: 49.99,
    category: 'Electronics',
    status: 'inactive',
    description: '10000mAh capacity with fast charging',
    image: 'https://images.unsplash.com/photo-1609042231979-ab99bf2a45cc?w=500&h=500&fit=crop',
  },
  {
    id: '4',
    name: 'Leather Messenger Bag',
    price: 189.99,
    category: 'Accessories',
    status: 'active',
    description: 'Premium leather construction',
    image: 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=500&h=500&fit=crop',
  },
];

const INITIAL_ARTICLES: Article[] = [
  {
    id: '1',
    title: 'Getting Started with Wireless Technology',
    excerpt: 'Learn the basics of wireless headphones and how to choose the right pair.',
    content: 'Full article content here...',
    category: 'Technology',
    status: 'published',
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&h=500&fit=crop',
    createdAt: '2024-01-15',
  },
  {
    id: '2',
    title: 'Fashion Tips for Minimalist Accessories',
    excerpt: 'Discover how to style minimalist accessories for every occasion.',
    content: 'Full article content here...',
    category: 'Fashion',
    status: 'published',
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&h=500&fit=crop',
    createdAt: '2024-01-10',
  },
];

const INITIAL_CATEGORIES = ['Electronics', 'Accessories', 'Clothing', 'Home & Garden', 'Sports', 'Technology', 'Fashion'];

export default function DashboardPage() {
  const [products, setProducts] = useState<Product[]>(INITIAL_PRODUCTS);
  const [articles, setArticles] = useState<Article[]>(INITIAL_ARTICLES);
  const [categories, setCategories] = useState<string[]>(INITIAL_CATEGORIES);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [editingProduct, setEditingProduct] = useState<Product | null>(null);
  const [activeTab, setActiveTab] = useState<'products' | 'categories' | 'articles' | 'settings'>('products');

  const handleAddProduct = (newProduct: Omit<Product, 'id'>) => {
    const product: Product = {
      ...newProduct,
      id: (Math.max(...products.map(p => parseInt(p.id)), 0) + 1).toString(),
    };
    setProducts([...products, product]);
    setIsAddModalOpen(false);
  };

  const handleEditProduct = (productId: string) => {
    const product = products.find(p => p.id === productId);
    if (product) {
      setEditingProduct(product);
      setIsEditModalOpen(true);
    }
  };

  const handleUpdateProduct = (updatedProduct: Product) => {
    setProducts(products.map(p => p.id === updatedProduct.id ? updatedProduct : p));
    setIsEditModalOpen(false);
    setEditingProduct(null);
  };

  const handleDeleteProduct = (productId: string) => {
    setProducts(products.filter(p => p.id !== productId));
  };

  const handleAddCategory = (categoryName: string) => {
    if (categoryName && !categories.includes(categoryName)) {
      setCategories([...categories, categoryName]);
    }
  };

  const handleDeleteCategory = (categoryName: string) => {
    setCategories(categories.filter(c => c !== categoryName));
  };

  const handleAddArticle = (newArticle: Omit<Article, 'id'>) => {
    const article: Article = {
      ...newArticle,
      id: (Math.max(...articles.map(a => parseInt(a.id)), 0) + 1).toString(),
    };
    setArticles([...articles, article]);
  };

  const handleDeleteArticle = (articleId: string) => {
    setArticles(articles.filter(a => a.id !== articleId));
  };

  return (
    <div className="flex h-screen bg-white text-slate-900">
      <Sidebar activeTab={activeTab} onTabChange={setActiveTab} />
      
      <main className="flex-1 overflow-auto">
        <div className="p-8">
          {activeTab === 'products' && (
            <div>
              <div className="flex items-center justify-between mb-8">
                <div>
                  <h1 className="text-3xl font-bold text-slate-900">Products</h1>
                  <p className="text-slate-500 mt-1">Manage your product catalog</p>
                </div>
                <button
                  onClick={() => setIsAddModalOpen(true)}
                  className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium flex items-center gap-2"
                >
                  <span>+</span>
                  Add Product
                </button>
              </div>

              <ProductsTable
                products={products}
                onEdit={handleEditProduct}
                onDelete={handleDeleteProduct}
              />
            </div>
          )}

          {activeTab === 'categories' && (
            <CategoriesSection
              categories={categories}
              onAdd={handleAddCategory}
              onDelete={handleDeleteCategory}
            />
          )}

          {activeTab === 'articles' && (
            <ArticlesSection
              articles={articles}
              categories={categories}
              onAdd={handleAddArticle}
              onDelete={handleDeleteArticle}
            />
          )}

          {activeTab === 'settings' && (
            <div>
              <h1 className="text-3xl font-bold text-slate-900 mb-2">Settings</h1>
              <p className="text-slate-500 mb-8">Configure your dashboard</p>
              <div className="bg-slate-50 border border-slate-200 rounded-lg p-6 max-w-2xl">
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-slate-900 mb-2">
                      Store Name
                    </label>
                    <input
                      type="text"
                      defaultValue="My Store"
                      className="w-full px-4 py-2 border border-slate-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-900 mb-2">
                      Email Notifications
                    </label>
                    <input
                      type="checkbox"
                      defaultChecked
                      className="w-4 h-4"
                    />
                    <span className="ml-2 text-slate-600">Receive email notifications for new orders</span>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </main>

      <AddProductModal
        isOpen={isAddModalOpen}
        onClose={() => setIsAddModalOpen(false)}
        onSubmit={handleAddProduct}
        categories={categories}
      />

      {editingProduct && (
        <EditProductModal
          isOpen={isEditModalOpen}
          onClose={() => {
            setIsEditModalOpen(false);
            setEditingProduct(null);
          }}
          onSubmit={handleUpdateProduct}
          product={editingProduct}
          categories={categories}
        />
      )}
    </div>
  );
}
