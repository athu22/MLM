import AdminLayout from "../../components/layouts/AdminLayout";

const AdminTask = () => {
  return (
    <AdminLayout>
      <div className="bg-card rounded-xl shadow-sm border border-border overflow-hidden">
        <div className="p-6 border-b border-border bg-muted/20">
          <h2 className="text-2xl font-bold font-heading text-foreground">Task Management</h2>
          <p className="text-sm text-muted-foreground mt-1">Manage your task management details.</p>
        </div>
        <div className="p-6">
          
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left border-collapse">
            <thead className="bg-muted text-muted-foreground">
              <tr>
                <th className="px-4 py-3 font-medium rounded-tl-lg">ID / Reference</th>
                <th className="px-4 py-3 font-medium">Date</th>
                <th className="px-4 py-3 font-medium">Description</th>
                <th className="px-4 py-3 font-medium">Amount</th>
                <th className="px-4 py-3 font-medium rounded-tr-lg">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {[1, 2, 3, 4, 5].map((i) => (
                <tr key={i} className="hover:bg-muted/50 transition-colors">
                  <td className="px-4 py-3 font-medium">#TRX-00${i}</td>
                  <td className="px-4 py-3 text-muted-foreground">2026-03-${10+i}</td>
                  <td className="px-4 py-3">System generated record</td>
                  <td className="px-4 py-3 font-semibold text-emerald-500">+${i * 500}</td>
                  <td className="px-4 py-3">
                    <span className="bg-success/20 text-success px-2 py-1 rounded text-xs">Completed</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        </div>
      </div>
    </AdminLayout>
  );
};

export default AdminTask;
