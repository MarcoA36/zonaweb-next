import { Package, LayoutGrid, Settings, BookOpen } from 'lucide-react';

interface SidebarProps {
  activeTab: 'products' | 'categories' | 'articles' | 'settings';
  onTabChange: (tab: 'products' | 'categories' | 'articles' | 'settings') => void;
}

export default function Sidebar({ activeTab, onTabChange }: SidebarProps) {
  const navItems = [
    {
      id: 'products',
      label: 'Products',
      icon: Package,
    },
    {
      id: 'categories',
      label: 'Categories',
      icon: LayoutGrid,
    },
    {
      id: 'articles',
      label: 'Articles',
      icon: BookOpen,
    },
    {
      id: 'settings',
      label: 'Settings',
      icon: Settings,
    },
  ];

  return (
    <aside className="w-64 bg-white border-r border-slate-200 flex flex-col">
      {/* Header */}
      <div className="p-6 border-b border-slate-200">
        <h1 className="text-2xl font-bold text-slate-900">ProductHub</h1>
        <p className="text-sm text-slate-500 mt-1">Admin Dashboard</p>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-6 space-y-2">
        {navItems.map(item => {
          const Icon = item.icon;
          const isActive = activeTab === item.id;
          return (
            <button
              key={item.id}
              onClick={() => onTabChange(item.id as 'products' | 'categories' | 'articles' | 'settings')}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                isActive
                  ? 'bg-blue-100 text-blue-600'
                  : 'text-slate-600 hover:bg-slate-100'
              }`}
            >
              <Icon className="w-5 h-5" />
              <span className="font-medium">{item.label}</span>
            </button>
          );
        })}
      </nav>

      {/* Footer */}
      <div className="p-6 border-t border-slate-200">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-slate-200 rounded-full flex items-center justify-center text-slate-600 font-bold">
            A
          </div>
          <div>
            <p className="text-sm font-medium text-slate-900">Admin User</p>
            <p className="text-xs text-slate-500">admin@example.com</p>
          </div>
        </div>
      </div>
    </aside>
  );
}
