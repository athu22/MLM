import { HelpCircle, MessageCircle, Phone, Mail, Clock, CheckCircle, AlertCircle, FileText, Send } from "lucide-react";
import MemberLayout from "@/components/layouts/MemberLayout";

const supportTickets = [
  {
    id: "TKT001",
    subject: "Payment Issue - EMI Deduction",
    category: "Payment",
    status: "resolved",
    priority: "high",
    createdDate: "10 Feb 2026",
    lastUpdate: "12 Feb 2026",
    description: "EMI was deducted twice for the month of February."
  },
  {
    id: "TKT002", 
    subject: "Rank Upgrade Query",
    category: "Rank",
    status: "open",
    priority: "medium",
    createdDate: "14 Feb 2026",
    lastUpdate: "14 Feb 2026",
    description: "Need information about rank upgrade requirements for City Stockist."
  },
  {
    id: "TKT003",
    subject: "Binary Tree Display Issue",
    category: "Technical",
    status: "in-progress",
    priority: "low",
    createdDate: "15 Feb 2026",
    lastUpdate: "16 Feb 2026",
    description: "Binary tree is not loading properly on mobile devices."
  }
];

const quickActions = [
  { title: "Payment Issues", icon: "💳", description: "Problems with payments, EMIs, refunds" },
  { title: "Account Help", icon: "👤", description: "Login, profile, security issues" },
  { title: "Product Support", icon: "📦", description: "Product information, stockist details" },
  { title: "Technical Issues", icon: "🔧", description: "Website errors, app problems" },
  { title: "Commission Queries", icon: "💰", description: "Income, commission, wallet issues" },
  { title: "Rank & Rewards", icon: "🏆", description: "Rank upgrades, rewards, recognition" }
];

const faqs = [
  {
    question: "How do I upgrade my rank?",
    answer: "To upgrade your rank, you need to meet specific business volume requirements and maintain active team members. Check the Rank section for detailed criteria."
  },
  {
    question: "When are commissions paid?",
    answer: "Commissions are typically processed within 5-7 working days after the monthly closing date. You can check your wallet for credited amounts."
  },
  {
    question: "How can I reset my password?",
    answer: "Click on 'Forgot Password' on the login page. Enter your registered email ID and follow the instructions sent to your email."
  },
  {
    question: "What is the minimum payout amount?",
    answer: "The minimum payout amount is ₹500. Amounts below this will be carried forward to the next payout cycle."
  }
];

const MemberSupport = () => {
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'resolved': return 'bg-success/10 text-success';
      case 'open': return 'bg-primary/10 text-primary';
      case 'in-progress': return 'bg-warning/10 text-warning';
      default: return 'bg-muted text-muted-foreground';
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high': return 'bg-destructive/10 text-destructive';
      case 'medium': return 'bg-warning/10 text-warning';
      case 'low': return 'bg-muted text-muted-foreground';
      default: return 'bg-muted text-muted-foreground';
    }
  };

  return (
    <MemberLayout>
      <div className="animate-fade-in space-y-6">
        {/* Quick Actions */}
        <div>
          <h3 className="mb-4 font-heading text-lg font-semibold text-foreground">How can we help you?</h3>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {quickActions.map((action, index) => (
              <div key={index} className="rounded-xl border border-border bg-card p-4 shadow-sm hover:shadow-md transition-shadow cursor-pointer">
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-2xl">
                    {action.icon}
                  </div>
                  <div>
                    <h4 className="font-medium text-foreground">{action.title}</h4>
                    <p className="text-sm text-muted-foreground">{action.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Contact Options */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          <div className="rounded-xl border border-border bg-card p-5 shadow-sm">
            <div className="flex items-center gap-3 mb-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                <Phone className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h4 className="font-medium text-foreground">Phone Support</h4>
                <p className="text-sm text-muted-foreground">Mon-Sat, 9AM-6PM</p>
              </div>
            </div>
            <p className="font-foreground">+91 1800-123-4567</p>
            <p className="text-sm text-muted-foreground">Toll Free Number</p>
          </div>

          <div className="rounded-xl border border-border bg-card p-5 shadow-sm">
            <div className="flex items-center gap-3 mb-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                <Mail className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h4 className="font-medium text-foreground">Email Support</h4>
                <p className="text-sm text-muted-foreground">24/7 Response</p>
              </div>
            </div>
            <p className="font-foreground">support@jamplelife.com</p>
            <p className="text-sm text-muted-foreground">Response within 24hrs</p>
          </div>

          <div className="rounded-xl border border-border bg-card p-5 shadow-sm">
            <div className="flex items-center gap-3 mb-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                <MessageCircle className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h4 className="font-medium text-foreground">Live Chat</h4>
                <p className="text-sm text-muted-foreground">Instant Support</p>
              </div>
            </div>
            <button className="rounded-lg bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90">
              Start Chat
            </button>
          </div>
        </div>

        {/* Create New Ticket */}
        <div className="rounded-xl border border-border bg-card p-5 shadow-sm">
          <h3 className="mb-4 flex items-center gap-2 font-heading text-base font-semibold text-foreground">
            <FileText className="h-5 w-5 text-primary" />
            Create Support Ticket
          </h3>
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">Subject</label>
              <input
                type="text"
                placeholder="Brief description of your issue"
                className="w-full rounded-lg border border-border bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">Category</label>
              <select className="w-full rounded-lg border border-border bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary">
                <option value="">Select Category</option>
                <option value="payment">Payment</option>
                <option value="technical">Technical</option>
                <option value="account">Account</option>
                <option value="commission">Commission</option>
                <option value="rank">Rank</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div className="lg:col-span-2">
              <label className="block text-sm font-medium text-foreground mb-2">Description</label>
              <textarea
                rows={4}
                placeholder="Provide detailed information about your issue"
                className="w-full rounded-lg border border-border bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
            <div className="lg:col-span-2">
              <button className="rounded-lg bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90">
                <Send className="mr-2 h-4 w-4 inline" />
                Submit Ticket
              </button>
            </div>
          </div>
        </div>

        {/* Recent Tickets */}
        <div className="rounded-xl border border-border bg-card p-5 shadow-sm">
          <h3 className="mb-4 flex items-center gap-2 font-heading text-base font-semibold text-foreground">
            <HelpCircle className="h-5 w-5 text-primary" />
            Recent Support Tickets
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border">
                  <th className="px-4 py-3 text-left text-sm font-medium text-muted-foreground">Ticket ID</th>
                  <th className="px-4 py-3 text-left text-sm font-medium text-muted-foreground">Subject</th>
                  <th className="px-4 py-3 text-left text-sm font-medium text-muted-foreground">Category</th>
                  <th className="px-4 py-3 text-left text-sm font-medium text-muted-foreground">Priority</th>
                  <th className="px-4 py-3 text-left text-sm font-medium text-muted-foreground">Status</th>
                  <th className="px-4 py-3 text-left text-sm font-medium text-muted-foreground">Created</th>
                  <th className="px-4 py-3 text-left text-sm font-medium text-muted-foreground">Actions</th>
                </tr>
              </thead>
              <tbody>
                {supportTickets.map((ticket) => (
                  <tr key={ticket.id} className="border-b border-border last:border-0">
                    <td className="px-4 py-3 text-sm font-medium text-foreground">{ticket.id}</td>
                    <td className="px-4 py-3">
                      <div>
                        <p className="text-sm font-medium text-foreground">{ticket.subject}</p>
                        <p className="text-xs text-muted-foreground">{ticket.description}</p>
                      </div>
                    </td>
                    <td className="px-4 py-3 text-sm text-muted-foreground">{ticket.category}</td>
                    <td className="px-4 py-3">
                      <span className={`inline-flex items-center rounded-full px-2 py-1 text-xs font-medium ${getPriorityColor(ticket.priority)}`}>
                        {ticket.priority.charAt(0).toUpperCase() + ticket.priority.slice(1)}
                      </span>
                    </td>
                    <td className="px-4 py-3">
                      <span className={`inline-flex items-center rounded-full px-2 py-1 text-xs font-medium ${getStatusColor(ticket.status)}`}>
                        {ticket.status === 'in-progress' && <Clock className="mr-1 h-3 w-3" />}
                        {ticket.status === 'resolved' && <CheckCircle className="mr-1 h-3 w-3" />}
                        {ticket.status === 'open' && <AlertCircle className="mr-1 h-3 w-3" />}
                        {ticket.status.charAt(0).toUpperCase() + ticket.status.replace('-', ' ')}
                      </span>
                    </td>
                    <td className="px-4 py-3 text-sm text-muted-foreground">{ticket.createdDate}</td>
                    <td className="px-4 py-3">
                      <button className="text-sm text-primary hover:underline">View Details</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* FAQs */}
        <div className="rounded-xl border border-border bg-card p-5 shadow-sm">
          <h3 className="mb-4 flex items-center gap-2 font-heading text-base font-semibold text-foreground">
            <HelpCircle className="h-5 w-5 text-primary" />
            Frequently Asked Questions
          </h3>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="border-b border-border pb-4 last:border-0">
                <h4 className="font-medium text-foreground mb-2">{faq.question}</h4>
                <p className="text-sm text-muted-foreground">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </MemberLayout>
  );
};

export default MemberSupport;
