import { Outlet, Link, useLocation } from 'react-router-dom';
import { theme } from '../theme';

export default function AdminLayout() {
  const location = useLocation();

  const sidebarLinkStyle = (isActive: boolean) => ({
    display: 'flex',
    alignItems: 'center',
    gap: theme.spacing.md,
    padding: `${theme.spacing.md} ${theme.spacing.md}`,
    color: isActive ? theme.colors.primary : theme.colors.textSecondary,
    textDecoration: 'none',
    fontSize: '16px',
    fontWeight: isActive ? '600' : '500',
    borderRadius: '8px',
    backgroundColor: isActive ? theme.colors.primaryLight : 'transparent',
  });

  return (
    <div style={{ display: 'flex', minHeight: '100vh', backgroundColor: theme.colors.backgroundSecondary }}>
      <aside style={{
        width: '260px',
        backgroundColor: theme.colors.background,
        borderRight: `1px solid ${theme.colors.border}`,
        padding: theme.spacing.lg,
        display: 'flex',
        flexDirection: 'column' as const,
        gap: theme.spacing.md,
        position: 'sticky' as const,
        top: 0,
        height: '100vh',
        overflowY: 'auto' as const,
      }}>
        <Link to="/" style={{
          fontSize: '20px',
          fontWeight: '600',
          color: theme.colors.text,
          textDecoration: 'none',
          marginBottom: theme.spacing.lg,
          letterSpacing: '-0.02em',
        }}>
          EventHub
        </Link>

        <div style={{ display: 'flex', flexDirection: 'column' as const, gap: theme.spacing.xs }}>
          <div style={{
            fontSize: '12px',
            fontWeight: '600',
            color: theme.colors.textTertiary,
            textTransform: 'uppercase' as const,
            letterSpacing: '0.05em',
            padding: `${theme.spacing.sm} ${theme.spacing.md}`,
          }}>
            Overview
          </div>
          <Link to="/admin/dashboard" style={sidebarLinkStyle(location.pathname === '/admin/dashboard')}>
            <span>📊</span>
            Dashboard
          </Link>
          <Link to="/admin/analytics" style={sidebarLinkStyle(location.pathname === '/admin/analytics')}>
            <span>📈</span>
            Analytics
          </Link>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column' as const, gap: theme.spacing.xs }}>
          <div style={{
            fontSize: '12px',
            fontWeight: '600',
            color: theme.colors.textTertiary,
            textTransform: 'uppercase' as const,
            letterSpacing: '0.05em',
            padding: `${theme.spacing.sm} ${theme.spacing.md}`,
          }}>
            Management
          </div>
          <Link to="/admin/events" style={sidebarLinkStyle(location.pathname === '/admin/events')}>
            <span>🎉</span>
            Events
          </Link>
          <Link to="/admin/members" style={sidebarLinkStyle(location.pathname === '/admin/members')}>
            <span>👥</span>
            Members
          </Link>
        </div>

        <div style={{ marginTop: 'auto', paddingTop: theme.spacing.lg }}>
          <Link to="/" style={sidebarLinkStyle(false)}>
            <span>🌐</span>
            View Public Site
          </Link>
        </div>
      </aside>

      <main style={{ flex: 1, padding: theme.spacing.xl, overflowY: 'auto' as const }}>
        <Outlet />
      </main>
    </div>
  );
}
