import { Package, TrendingUp, Plus, Edit, Trash2, Eye, DollarSign, Box, Star, Filter, Download } from "lucide-react";
import AdminLayout from "@/components/layouts/AdminLayout";

const productStats = [
  { label: "Total Products", value: "24", icon: Package, variant: "primary" as const, change: "+3 new" },
  { label: "Total Stock Value", value: "₹45,60,000", icon: DollarSign, variant: "success" as const, change: "+₹5,40,000" },
  { label: "Low Stock Items", value: "5", icon: Box, variant: "warning" as const, change: "Reorder needed" },
  { label: "Top Rated", value: "4.8⭐", icon: Star, variant: "accent" as const, change: "Avg rating" },
];

const variantClasses = {
  primary: "stat-card stat-card-primary",
  success: "stat-card stat-card-success",
  warning: "stat-card stat-card-warning",
  accent: "stat-card stat-card-accent",
};

const products = [
  {
    id: "PRD001",
    name: "Premium Health Package",
    category: "Health",
    price: "₹15,000",
    stock: 45,
    minStock: 20,
    rating: 4.8,
    status: "active",
    description: "Complete health supplement package with vitamins and minerals",
    image: "🏥"
  },
  {
    id: "PRD002",
    name: "Basic Wellness Kit",
    category: "Wellness",
    price: "₹8,000",
    stock: 12,
    minStock: 15,
    rating: 4.5,
    status: "low_stock",
    description: "Essential wellness products for daily use",
    image: "💊"
  },
  {
    id: "PRD003",
    name: "Advanced Skincare Set",
    category: "Beauty",
    price: "₹12,000",
    stock: 28,
    minStock: 10,
    rating: 4.7,
    status: "active",
    description: "Premium skincare products for all skin types",
    image: "🧴"
  },
  {
    id: "PRD004",
    name: "Fitness Starter Pack",
    category: "Fitness",
    price: "₹6,000",
    stock: 0,
    minStock: 25,
    rating: 4.6,
    status: "out_of_stock",
    description: "Complete fitness starter package with supplements",
    image: "💪"
  },
  {
    id: "PRD005",
    name: "Immunity Booster",
    category: "Health",
    price: "₹4,500",
    stock: 67,
    minStock: 30,
    rating: 4.9,
    status: "active",
    description: "Natural immunity boosting supplement package",
    image: "🛡️"
  }
];

const categories = [
  { name: "Health", count: 8, totalValue: "₹18,50,000", color: "bg-blue-500" },
  { name: "Wellness", count: 6, totalValue: "₹12,20,000", color: "bg-green-500" },
  { name: "Beauty", count: 5, totalValue: "₹9,80,000", color: "bg-pink-500" },
  { name: "Fitness", count: 5, totalValue: "₹5,10,000", color: "bg-orange-500" }
];

const recentOrders = [
  {
    orderId: "ORD001",
    memberId: "1001",
    memberName: "Rahul Sharma",
    product: "Premium Health Package",
    quantity: 2,
    totalAmount: "₹30,000",
    orderDate: "15 Feb 2026",
    status: "delivered"
  },
  {
    orderId: "ORD002",
    memberId: "1002",
    memberName: "Priya Patel",
    product: "Basic Wellness Kit",
    quantity: 1,
    totalAmount: "₹8,000",
    orderDate: "14 Feb 2026",
    status: "processing"
  },
  {
    orderId: "ORD003",
    memberId: "1003",
    memberName: "Amit Kumar",
    product: "Advanced Skincare Set",
    quantity: 3,
    totalAmount: "₹36,000",
    orderDate: "13 Feb 2026",
    status: "shipped"
  }
];

const AdminProducts = () => {
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active': return 'bg-success/10 text-success';
      case 'low_stock': return 'bg-warning/10 text-warning';
      case 'out_of_stock': return 'bg-destructive/10 text-destructive';
      case 'delivered': return 'bg-success/10 text-success';
      case 'processing': return 'bg-warning/10 text-warning';
      case 'shipped': return 'bg-primary/10 text-primary';
      default: return 'bg-muted text-muted-foreground';
    }
  };

  const getStockStatus = (stock: number, minStock: number) => {
    if (stock === 0) return { status: 'out_of_stock', color: 'bg-destructive/10 text-destructive', label: 'Out of Stock' };
    if (stock <= minStock) return { status: 'low_stock', color: 'bg-warning/10 text-warning', label: 'Low Stock' };
    return { status: 'active', color: 'bg-success/10 text-success', label: 'In Stock' };
  };

  return (
    <AdminLayout>
      <div className="animate-fade-in space-y-6">
        {/* Product Stats */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {productStats.map((stat) => (
            <div key={stat.label} className={variantClasses[stat.variant]}>
              <div className="flex items-center justify-between">
                <stat.icon className="h-8 w-8 opacity-80" />
                <span className="flex items-center gap-1 rounded-full bg-white/20 px-2 py-0.5 text-xs font-medium">
                  <TrendingUp className="h-3 w-3" />
                  {stat.change}
                </span>
              </div>
              <p className="mt-3 text-2xl font-bold">{stat.value}</p>
              <p className="text-sm opacity-80">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Categories Overview */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-4">
          {categories.map((category, index) => (
            <div key={index} className="rounded-xl border border-border bg-card p-5 shadow-sm">
              <div className="flex items-center gap-3 mb-3">
                <div className={`h-8 w-8 rounded-full ${category.color} flex items-center justify-center text-white text-sm font-bold`}>
                  {category.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-medium text-foreground">{category.name}</h4>
                  <p className="text-xs text-muted-foreground">{category.count} products</p>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Total Value</span>
                  <span className="font-semibold text-foreground">{category.totalValue}</span>
                </div>
                <div className="h-2 rounded-full bg-muted overflow-hidden">
                  <div 
                    className={`h-full ${category.color} transition-all duration-300`}
                    style={{ width: `${(parseInt(category.totalValue.replace(/[₹,]/g, '')) / 4560000) * 100}%` }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Products List */}
        <div className="rounded-xl border border-border bg-card p-5 shadow-sm">
          <div className="mb-4 flex items-center justify-between">
            <h3 className="flex items-center gap-2 font-heading text-base font-semibold text-foreground">
              <Package className="h-5 w-5 text-primary" />
              Products Inventory
            </h3>
            <div className="flex items-center gap-2">
              <button className="rounded-lg bg-primary px-3 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90">
                <Plus className="mr-2 h-4 w-4 inline" />
                Add Product
              </button>
              <button className="rounded-lg border border-border bg-background px-3 py-2 text-sm font-medium hover:bg-muted">
                <Filter className="mr-2 h-4 w-4 inline" />
                Filter
              </button>
              <button className="rounded-lg border border-border bg-background px-3 py-2 text-sm font-medium hover:bg-muted">
                <Download className="mr-2 h-4 w-4 inline" />
                Export
              </button>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border">
                  <th className="px-4 py-3 text-left text-sm font-medium text-muted-foreground">Product</th>
                  <th className="px-4 py-3 text-left text-sm font-medium text-muted-foreground">Category</th>
                  <th className="px-4 py-3 text-left text-sm font-medium text-muted-foreground">Price</th>
                  <th className="px-4 py-3 text-left text-sm font-medium text-muted-foreground">Stock</th>
                  <th className="px-4 py-3 text-left text-sm font-medium text-muted-foreground">Rating</th>
                  <th className="px-4 py-3 text-left text-sm font-medium text-muted-foreground">Status</th>
                  <th className="px-4 py-3 text-left text-sm font-medium text-muted-foreground">Actions</th>
                </tr>
              </thead>
              <tbody>
                {products.map((product) => {
                  const stockStatus = getStockStatus(product.stock, product.minStock);
                  return (
                    <tr key={product.id} className="border-b border-border last:border-0">
                      <td className="px-4 py-3">
                        <div className="flex items-center gap-3">
                          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-muted text-lg">
                            {product.image}
                          </div>
                          <div>
                            <p className="font-medium text-foreground">{product.name}</p>
                            <p className="text-xs text-muted-foreground">ID: {product.id}</p>
                            <p className="text-xs text-muted-foreground max-w-xs truncate">{product.description}</p>
                          </div>
                        </div>
                      </td>
                      <td className="px-4 py-3 text-sm text-muted-foreground">{product.category}</td>
                      <td className="px-4 py-3 text-sm font-semibold text-foreground">{product.price}</td>
                      <td className="px-4 py-3">
                        <div>
                          <p className="text-sm font-medium text-foreground">{product.stock} units</p>
                          <p className="text-xs text-muted-foreground">Min: {product.minStock}</p>
                        </div>
                      </td>
                      <td className="px-4 py-3">
                        <div className="flex items-center gap-1">
                          <Star className="h-4 w-4 text-yellow-500 fill-current" />
                          <span className="text-sm text-foreground">{product.rating}</span>
                        </div>
                      </td>
                      <td className="px-4 py-3">
                        <span className={`inline-flex items-center rounded-full px-2 py-1 text-xs font-medium ${stockStatus.color}`}>
                          {stockStatus.label}
                        </span>
                      </td>
                      <td className="px-4 py-3">
                        <div className="flex items-center gap-2">
                          <button className="text-sm text-primary hover:underline">
                            <Eye className="h-4 w-4" />
                          </button>
                          <button className="text-sm text-warning hover:underline">
                            <Edit className="h-4 w-4" />
                          </button>
                          <button className="text-sm text-destructive hover:underline">
                            <Trash2 className="h-4 w-4" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>

        {/* Recent Orders */}
        <div className="rounded-xl border border-border bg-card p-5 shadow-sm">
          <h3 className="mb-4 flex items-center gap-2 font-heading text-base font-semibold text-foreground">
            <Package className="h-5 w-5 text-primary" />
            Recent Orders
          </h3>
          
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border">
                  <th className="px-4 py-3 text-left text-sm font-medium text-muted-foreground">Order ID</th>
                  <th className="px-4 py-3 text-left text-sm font-medium text-muted-foreground">Member</th>
                  <th className="px-4 py-3 text-left text-sm font-medium text-muted-foreground">Product</th>
                  <th className="px-4 py-3 text-left text-sm font-medium text-muted-foreground">Quantity</th>
                  <th className="px-4 py-3 text-left text-sm font-medium text-muted-foreground">Total Amount</th>
                  <th className="px-4 py-3 text-left text-sm font-medium text-muted-foreground">Order Date</th>
                  <th className="px-4 py-3 text-left text-sm font-medium text-muted-foreground">Status</th>
                </tr>
              </thead>
              <tbody>
                {recentOrders.map((order) => (
                  <tr key={order.orderId} className="border-b border-border last:border-0">
                    <td className="px-4 py-3 text-sm font-medium text-foreground">{order.orderId}</td>
                    <td className="px-4 py-3">
                      <div>
                        <p className="text-sm font-medium text-foreground">{order.memberName}</p>
                        <p className="text-xs text-muted-foreground">ID: {order.memberId}</p>
                      </div>
                    </td>
                    <td className="px-4 py-3 text-sm text-muted-foreground">{order.product}</td>
                    <td className="px-4 py-3 text-sm text-foreground">{order.quantity}</td>
                    <td className="px-4 py-3 text-sm font-semibold text-foreground">{order.totalAmount}</td>
                    <td className="px-4 py-3 text-sm text-muted-foreground">{order.orderDate}</td>
                    <td className="px-4 py-3">
                      <span className={`inline-flex items-center rounded-full px-2 py-1 text-xs font-medium ${getStatusColor(order.status)}`}>
                        {order.status.charAt(0).toUpperCase() + order.status.slice(1)}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <button className="rounded-xl border border-border bg-card p-4 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-warning/10">
                <Package className="h-5 w-5 text-warning" />
              </div>
              <div className="text-left">
                <p className="font-medium text-foreground">Reorder Stock</p>
                <p className="text-sm text-muted-foreground">5 items low</p>
              </div>
            </div>
          </button>
          
          <button className="rounded-xl border border-border bg-card p-4 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                <Plus className="h-5 w-5 text-primary" />
              </div>
              <div className="text-left">
                <p className="font-medium text-foreground">Add New Product</p>
                <p className="text-sm text-muted-foreground">Expand catalog</p>
              </div>
            </div>
          </button>

          <button className="rounded-xl border border-border bg-card p-4 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-success/10">
                <Download className="h-5 w-5 text-success" />
              </div>
              <div className="text-left">
                <p className="font-medium text-foreground">Inventory Report</p>
                <p className="text-sm text-muted-foreground">Monthly summary</p>
              </div>
            </div>
          </button>

          <button className="rounded-xl border border-border bg-card p-4 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10">
                <Star className="h-5 w-5 text-accent" />
              </div>
              <div className="text-left">
                <p className="font-medium text-foreground">Manage Reviews</p>
                <p className="text-sm text-muted-foreground">Customer feedback</p>
              </div>
            </div>
          </button>
        </div>
      </div>
    </AdminLayout>
  );
};

export default AdminProducts;
