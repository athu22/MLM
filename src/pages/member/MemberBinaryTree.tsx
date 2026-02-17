import MemberLayout from "@/components/layouts/MemberLayout";
import { User, UserPlus, Plus, X } from "lucide-react";
import { useState } from "react";

interface TreeNode {
  id: string;
  name: string;
  active: boolean;
  left?: TreeNode;
  right?: TreeNode;
}

const MemberBinaryTree = () => {
  const [treeData, setTreeData] = useState<TreeNode>({
    id: "1001",
    name: "Rahul Sharma",
    active: true,
    left: {
      id: "1002",
      name: "Amit Patil",
      active: true,
      left: {
        id: "1004",
        name: "Sanjay More",
        active: true,
      },
      right: {
        id: "1005",
        name: "Priya Desai",
        active: false,
      },
    },
    right: {
      id: "1003",
      name: "Sneha Joshi",
      active: true,
      left: {
        id: "1006",
        name: "Ravi Kumar",
        active: true,
      },
    },
  });

  const [showAddModal, setShowAddModal] = useState(false);
  const [selectedNode, setSelectedNode] = useState<{ node: TreeNode; position: 'left' | 'right' } | null>(null);
  const [newUserName, setNewUserName] = useState('');

  const addUser = (parentNode: TreeNode, position: 'left' | 'right') => {
    setSelectedNode({ node: parentNode, position });
    setShowAddModal(true);
    setNewUserName('');
  };

  const handleAddUser = () => {
    if (!selectedNode || !newUserName.trim()) return;

    const newId = (Math.floor(Math.random() * 9000) + 1000).toString();
    const newUser: TreeNode = {
      id: newId,
      name: newUserName.trim(),
      active: true,
    };

    setTreeData(prevTree => {
      const updateNode = (node: TreeNode): TreeNode => {
        if (node.id === selectedNode.node.id) {
          return {
            ...node,
            [selectedNode.position]: newUser,
          };
        }
        if (node.left) {
          node.left = updateNode(node.left);
        }
        if (node.right) {
          node.right = updateNode(node.right);
        }
        return node;
      };
      return updateNode(prevTree);
    });

    setShowAddModal(false);
    setSelectedNode(null);
    setNewUserName('');
  };

  const TreeNodeComponent = ({ node, level = 0 }: { node?: TreeNode; level?: number }) => {
    if (!node) {
      return (
        <div className="flex flex-col items-center">
          <div className="flex h-14 w-14 items-center justify-center rounded-full border-2 border-dashed border-border bg-muted">
            <UserPlus className="h-5 w-5 text-muted-foreground" />
          </div>
          <p className="mt-1 text-xs text-muted-foreground">Empty</p>
        </div>
      );
    }

    return (
      <div className="flex flex-col items-center">
        <div
          className={`flex h-14 w-14 items-center justify-center rounded-full border-2 ${
            node.active
              ? "border-primary bg-primary/10"
              : "border-destructive bg-destructive/10"
          }`}
        >
          <User className={`h-6 w-6 ${node.active ? "text-primary" : "text-destructive"}`} />
        </div>
        <p className="mt-1 text-xs font-medium text-foreground">{node.name}</p>
        <p className="text-[10px] text-muted-foreground">ID: {node.id}</p>
        <span
          className={`mt-0.5 rounded-full px-2 py-0.5 text-[10px] font-medium ${
            node.active
              ? "bg-success/10 text-success"
              : "bg-destructive/10 text-destructive"
          }`}
        >
          {node.active ? "Active" : "Inactive"}
        </span>

        {level < 2 && (
          <>
            <div className="mt-2 h-6 w-px bg-border" />
            <div className="flex gap-8">
              <div className="flex flex-col items-center">
                <div className="mb-2 flex items-center">
                  <div className="h-px w-8 bg-border" />
                  <div className="h-6 w-px bg-border" />
                </div>
                <span className="mb-1 text-[10px] font-medium text-primary">Left</span>
                {node.left ? (
                  <TreeNodeComponent node={node.left} level={level + 1} />
                ) : (
                  <div className="flex flex-col items-center">
                    <button
                      onClick={() => addUser(node, 'left')}
                      className="group flex h-14 w-14 items-center justify-center rounded-full border-2 border-dashed border-primary bg-primary/10 hover:border-primary hover:bg-primary/20 transition-colors"
                    >
                      <Plus className="h-5 w-5 text-primary" />
                    </button>
                    <p className="mt-1 text-xs text-muted-foreground">Add User</p>
                    <p className="text-[10px] text-muted-foreground">Left Position</p>
                  </div>
                )}
              </div>
              <div className="flex flex-col items-center">
                <div className="mb-2 flex items-center">
                  <div className="h-6 w-px bg-border" />
                  <div className="h-px w-8 bg-border" />
                </div>
                <span className="mb-1 text-[10px] font-medium text-secondary">Right</span>
                {node.right ? (
                  <TreeNodeComponent node={node.right} level={level + 1} />
                ) : (
                  <div className="flex flex-col items-center">
                    <button
                      onClick={() => addUser(node, 'right')}
                      className="group flex h-14 w-14 items-center justify-center rounded-full border-2 border-dashed border-secondary bg-secondary/10 hover:border-secondary hover:bg-secondary/20 transition-colors"
                    >
                      <Plus className="h-5 w-5 text-secondary" />
                    </button>
                    <p className="mt-1 text-xs text-muted-foreground">Add User</p>
                    <p className="text-[10px] text-muted-foreground">Right Position</p>
                  </div>
                )}
              </div>
            </div>
          </>
        )}
      </div>
    );
  };

  return (
    <MemberLayout>
      <div className="animate-fade-in space-y-6">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          <div className="rounded-xl border border-border bg-card p-4 text-center shadow-sm">
            <p className="text-sm text-muted-foreground">Left Team</p>
            <p className="font-heading text-2xl font-bold text-primary">24</p>
          </div>
          <div className="rounded-xl border border-border bg-card p-4 text-center shadow-sm">
            <p className="text-sm text-muted-foreground">Right Team</p>
            <p className="font-heading text-2xl font-bold text-secondary">18</p>
          </div>
          <div className="rounded-xl border border-border bg-card p-4 text-center shadow-sm">
            <p className="text-sm text-muted-foreground">Pair Matches</p>
            <p className="font-heading text-2xl font-bold text-accent">18</p>
          </div>
        </div>

        <div className="overflow-x-auto rounded-xl border border-border bg-card p-8 shadow-sm">
          <h3 className="mb-6 text-center font-heading text-base font-semibold text-foreground">
            Binary Tree Structure
          </h3>
          <div className="flex min-w-[600px] justify-center">
            <TreeNodeComponent node={treeData} />
          </div>
        </div>

        {/* Add User Modal */}
        {showAddModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
            <div className="w-full max-w-md rounded-xl bg-card p-6 shadow-lg">
              <div className="mb-4 flex items-center justify-between">
                <h3 className="font-heading text-xl font-bold text-foreground">
                  Add User - {selectedNode?.position.toUpperCase()} Position
                </h3>
                <button
                  onClick={() => {
                    setShowAddModal(false);
                    setSelectedNode(null);
                    setNewUserName('');
                  }}
                  className="rounded-lg p-2 hover:bg-muted transition-colors"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="mb-2 block text-sm font-medium text-foreground">
                    Parent Node: {selectedNode?.node.name} (ID: {selectedNode?.node.id})
                  </label>
                </div>
                
                <div>
                  <label htmlFor="userName" className="mb-2 block text-sm font-medium text-foreground">
                    User Name
                  </label>
                  <input
                    id="userName"
                    type="text"
                    value={newUserName}
                    onChange={(e) => setNewUserName(e.target.value)}
                    placeholder="Enter user name"
                    className="w-full rounded-lg border border-border bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                    autoFocus
                  />
                </div>

                <div className="flex gap-3">
                  <button
                    onClick={handleAddUser}
                    disabled={!newUserName.trim()}
                    className="flex-1 rounded-lg bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                  >
                    Add User
                  </button>
                  <button
                    onClick={() => {
                      setShowAddModal(false);
                      setSelectedNode(null);
                      setNewUserName('');
                    }}
                    className="flex-1 rounded-lg border border-border bg-muted px-4 py-2 text-sm font-medium text-foreground hover:bg-muted/80 transition-colors"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </MemberLayout>
  );
};

export default MemberBinaryTree;
