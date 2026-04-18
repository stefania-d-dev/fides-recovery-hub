import { Sidebar } from './Sidebar';
import { Header } from './Header';

interface LayoutProps {
  children: React.ReactNode;
}

export const DashboardLayout = ({ children }: LayoutProps) => {
  return (
    <div className="flex min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Header />
        <main className="p-8">
          {children}
        </main>
      </div>
    </div>
  );
};