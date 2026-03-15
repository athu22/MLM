import AdminLayout from "../../components/layouts/AdminLayout";

const AdminUserEdit = () => {
  return (
    <AdminLayout>
      <div className="bg-card rounded-xl shadow-sm border border-border overflow-hidden">
        <div className="p-6 border-b border-border bg-muted/20">
          <h2 className="text-2xl font-bold font-heading text-foreground">Edit User</h2>
          <p className="text-sm text-muted-foreground mt-1">Manage your edit user details.</p>
        </div>
        <div className="p-6">
          <div className="p-8 text-center text-muted-foreground border-2 border-dashed border-border rounded-xl">Module logic goes here</div>
        </div>
      </div>
    </AdminLayout>
  );
};

export default AdminUserEdit;
