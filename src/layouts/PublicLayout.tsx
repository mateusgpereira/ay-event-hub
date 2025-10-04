import { Outlet, Link, useLocation } from 'react-router-dom';
import { theme } from '../theme';

export default function PublicLayout() {
  const location = useLocation();

  return (
    <div style={{ minHeight: '100vh', backgroundColor: theme.colors.background }}>
      <header style={{
        position: 'sticky' as const,
        top: 0,
        backgroundColor: theme.colors.background,
        borderBottom: `1px solid ${theme.colors.border}`,
        zIndex: 100,
        boxShadow: theme.shadows.sm,
      }}>
        <div style={{
          maxWidth: '1280px',
          margin: '0 auto',
          padding: `${theme.spacing.md} ${theme.spacing.xl}`,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
          <Link to="/" style={{
            fontSize: '20px',
            fontWeight: '600',
            color: theme.colors.text,
            textDecoration: 'none',
            letterSpacing: '-0.02em',
          }}>
            EventHub
          </Link>

          <nav style={{ display: 'flex', gap: theme.spacing.xl, alignItems: 'center' }}>
            <Link
              to="/events"
              style={{
                color: location.pathname.startsWith('/events') ? theme.colors.primary : theme.colors.textSecondary,
                textDecoration: 'none',
                fontSize: '16px',
                fontWeight: '500',
              }}
            >
              Explore Events
            </Link>
            <Link to="/admin" style={{
              backgroundColor: theme.colors.primary,
              color: theme.colors.background,
              padding: `${theme.spacing.sm} ${theme.spacing.lg}`,
              borderRadius: '8px',
              fontSize: '16px',
              fontWeight: '600',
              textDecoration: 'none',
            }}>
              Create Event
            </Link>
          </nav>
        </div>
      </header>

      <main style={{ minHeight: 'calc(100vh - 73px)' }}>
        <Outlet />
      </main>

      <footer style={{
        backgroundColor: theme.colors.backgroundSecondary,
        borderTop: `1px solid ${theme.colors.border}`,
        padding: `${theme.spacing.xxxl} ${theme.spacing.xl}`,
      }}>
        <div style={{
          maxWidth: '1280px',
          margin: '0 auto',
          textAlign: 'center' as const,
          fontSize: '14px',
          color: theme.colors.textSecondary,
        }}>
          © 2025 EventHub. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
