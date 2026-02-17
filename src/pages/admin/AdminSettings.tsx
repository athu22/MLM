import { Settings, Shield, Bell, Database, Mail, Globe, Users, CreditCard, Save, RefreshCw, AlertTriangle, CheckCircle } from "lucide-react";
import AdminLayout from "@/components/layouts/AdminLayout";

const systemSettings = [
  {
    category: "General Settings",
    icon: Settings,
    color: "bg-blue-500",
    settings: [
      { key: "Site Name", value: "Jample Life Connect", type: "text", description: "Company name displayed throughout the system" },
      { key: "Site URL", value: "https://jamplelife.com", type: "url", description: "Main website URL" },
      { key: "Admin Email", value: "admin@jamplelife.com", type: "email", description: "Primary admin contact email" },
      { key: "Support Phone", value: "+91 1800-123-4567", type: "tel", description: "Customer support phone number" }
    ]
  },
  {
    category: "Security Settings",
    icon: Shield,
    color: "bg-red-500",
    settings: [
      { key: "Password Policy", value: "Strong (8+ chars)", type: "select", description: "Minimum password requirements" },
      { key: "Session Timeout", value: "30 minutes", type: "select", description: "Auto-logout duration" },
      { key: "Two-Factor Auth", value: "Enabled", type: "toggle", description: "Require 2FA for admin access" },
      { key: "Login Attempts", value: "5 attempts", type: "number", description: "Max failed login attempts" }
    ]
  },
  {
    category: "Notification Settings",
    icon: Bell,
    color: "bg-yellow-500",
    settings: [
      { key: "Email Notifications", value: "Enabled", type: "toggle", description: "Send email alerts to users" },
      { key: "SMS Notifications", value: "Enabled", type: "toggle", description: "Send SMS alerts" },
      { key: "Payment Alerts", value: "Enabled", type: "toggle", description: "Notify on payment events" },
      { key: "System Alerts", value: "Enabled", type: "toggle", description: "Critical system notifications" }
    ]
  },
  {
    category: "Payment Settings",
    icon: CreditCard,
    color: "bg-green-500",
    settings: [
      { key: "Payment Gateway", value: "Razorpay", type: "select", description: "Primary payment processor" },
      { key: "Auto-Payout", value: "Enabled", type: "toggle", description: "Automatic commission payouts" },
      { key: "Minimum Payout", value: "₹500", type: "currency", description: "Minimum amount for payout" },
      { key: "Payout Schedule", value: "Monthly", type: "select", description: "Commission payout frequency" }
    ]
  }
];

const systemStatus = [
  { service: "Database Server", status: "online", uptime: "99.9%", lastCheck: "2 mins ago" },
  { service: "Payment Gateway", status: "online", uptime: "99.5%", lastCheck: "1 min ago" },
  { service: "Email Service", status: "online", uptime: "98.8%", lastCheck: "5 mins ago" },
  { service: "SMS Service", status: "online", uptime: "97.5%", lastCheck: "3 mins ago" },
  { service: "Backup Service", status: "warning", uptime: "95.2%", lastCheck: "15 mins ago" }
];

const recentActivity = [
  { action: "System backup completed", user: "System", time: "2 hours ago", status: "success" },
  { action: "Payment gateway configured", user: "Admin", time: "4 hours ago", status: "success" },
  { action: "Security patch applied", user: "System", time: "6 hours ago", status: "success" },
  { action: "Database optimization", user: "Admin", time: "1 day ago", status: "success" },
  { action: "Failed login attempt detected", user: "System", time: "2 days ago", status: "warning" }
];

const AdminSettings = () => {
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'online': return 'bg-success/10 text-success';
      case 'warning': return 'bg-warning/10 text-warning';
      case 'offline': return 'bg-destructive/10 text-destructive';
      case 'success': return 'bg-success/10 text-success';
      default: return 'bg-muted text-muted-foreground';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'online': return <CheckCircle className="h-4 w-4" />;
      case 'warning': return <AlertTriangle className="h-4 w-4" />;
      case 'offline': return <AlertTriangle className="h-4 w-4" />;
      case 'success': return <CheckCircle className="h-4 w-4" />;
      default: return null;
    }
  };

  return (
    <AdminLayout>
      <div className="animate-fade-in space-y-6">
        {/* System Status Overview */}
        <div className="rounded-xl border border-border bg-card p-5 shadow-sm">
          <h3 className="mb-4 flex items-center gap-2 font-heading text-base font-semibold text-foreground">
            <Database className="h-5 w-5 text-primary" />
            System Status
          </h3>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-5">
            {systemStatus.map((service, index) => (
              <div key={index} className="rounded-lg border border-border bg-muted/50 p-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-foreground">{service.service}</span>
                  <span className={`inline-flex items-center rounded-full px-2 py-1 text-xs font-medium ${getStatusColor(service.status)}`}>
                    {getStatusIcon(service.status)}
                    {service.status}
                  </span>
                </div>
                <div className="space-y-1">
                  <p className="text-xs text-muted-foreground">Uptime: {service.uptime}</p>
                  <p className="text-xs text-muted-foreground">Last check: {service.lastCheck}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Settings Categories */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          {systemSettings.map((category, index) => (
            <div key={index} className="rounded-xl border border-border bg-card p-5 shadow-sm">
              <div className="mb-4 flex items-center gap-3">
                <div className={`flex h-10 w-10 items-center justify-center rounded-lg ${category.color} text-white`}>
                  <category.icon className="h-5 w-5" />
                </div>
                <h3 className="font-heading text-base font-semibold text-foreground">{category.category}</h3>
              </div>
              
              <div className="space-y-4">
                {category.settings.map((setting, settingIndex) => (
                  <div key={settingIndex} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <label className="text-sm font-medium text-foreground">{setting.key}</label>
                      <div className="flex items-center gap-2">
                        {setting.type === 'toggle' ? (
                          <button className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                            setting.value === 'Enabled' ? 'bg-primary' : 'bg-muted'
                          }`}>
                            <span className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                              setting.value === 'Enabled' ? 'translate-x-6' : 'translate-x-1'
                            }`} />
                          </button>
                        ) : setting.type === 'select' ? (
                          <select className="rounded-lg border border-border bg-background px-2 py-1 text-sm">
                            <option>{setting.value}</option>
                          </select>
                        ) : (
                          <input
                            type={setting.type}
                            defaultValue={setting.value}
                            className="rounded-lg border border-border bg-background px-2 py-1 text-sm"
                          />
                        )}
                      </div>
                    </div>
                    <p className="text-xs text-muted-foreground">{setting.description}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Recent Activity */}
        <div className="rounded-xl border border-border bg-card p-5 shadow-sm">
          <h3 className="mb-4 flex items-center gap-2 font-heading text-base font-semibold text-foreground">
            <RefreshCw className="h-5 w-5 text-primary" />
            Recent System Activity
          </h3>
          
          <div className="space-y-3">
            {recentActivity.map((activity, index) => (
              <div key={index} className="flex items-center justify-between rounded-lg bg-muted px-4 py-3">
                <div className="flex items-center gap-3">
                  <span className={`inline-flex items-center rounded-full px-2 py-1 text-xs font-medium ${getStatusColor(activity.status)}`}>
                    {getStatusIcon(activity.status)}
                  </span>
                  <div>
                    <p className="text-sm font-medium text-foreground">{activity.action}</p>
                    <p className="text-xs text-muted-foreground">by {activity.user}</p>
                  </div>
                </div>
                <span className="text-xs text-muted-foreground">{activity.time}</span>
              </div>
            ))}
          </div>
        </div>

        {/* System Actions */}
        <div className="rounded-xl border border-border bg-card p-5 shadow-sm">
          <h3 className="mb-4 flex items-center gap-2 font-heading text-base font-semibold text-foreground">
            <Settings className="h-5 w-5 text-primary" />
            System Actions
          </h3>
          
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <button className="rounded-xl border border-border bg-card p-4 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                  <Database className="h-5 w-5 text-primary" />
                </div>
                <div className="text-left">
                  <p className="font-medium text-foreground">Backup Database</p>
                  <p className="text-sm text-muted-foreground">Create backup</p>
                </div>
              </div>
            </button>
            
            <button className="rounded-xl border border-border bg-card p-4 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-success/10">
                  <RefreshCw className="h-5 w-5 text-success" />
                </div>
                <div className="text-left">
                  <p className="font-medium text-foreground">Clear Cache</p>
                  <p className="text-sm text-muted-foreground">Optimize performance</p>
                </div>
              </div>
            </button>

            <button className="rounded-xl border border-border bg-card p-4 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-warning/10">
                  <Mail className="h-5 w-5 text-warning" />
                </div>
                <div className="text-left">
                  <p className="font-medium text-foreground">Test Emails</p>
                  <p className="text-sm text-muted-foreground">Check delivery</p>
                </div>
              </div>
            </button>

            <button className="rounded-xl border border-border bg-card p-4 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10">
                  <Shield className="h-5 w-5 text-accent" />
                </div>
                <div className="text-left">
                  <p className="font-medium text-foreground">Security Audit</p>
                  <p className="text-sm text-muted-foreground">Run scan</p>
                </div>
              </div>
            </button>
          </div>
        </div>

        {/* Save Settings Button */}
        <div className="flex justify-end">
          <button className="rounded-lg bg-primary px-6 py-3 text-sm font-medium text-primary-foreground hover:bg-primary/90 flex items-center gap-2">
            <Save className="h-4 w-4" />
            Save All Settings
          </button>
        </div>
      </div>
    </AdminLayout>
  );
};

export default AdminSettings;
