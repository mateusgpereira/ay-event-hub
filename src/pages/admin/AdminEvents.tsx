import { theme } from '../../theme';

export default function AdminEvents() {
  return (
    <>
      <div style={{
        marginBottom: theme.spacing.xl,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexWrap: 'wrap' as const,
        gap: theme.spacing.md,
      }}>
        <div>
          <h1 style={{
            fontSize: '36px',
            fontWeight: '700',
            color: theme.colors.text,
            marginBottom: theme.spacing.sm,
          }}>
            Events
          </h1>
          <p style={{ fontSize: '16px', color: theme.colors.textSecondary }}>
            Manage and publish your events
          </p>
        </div>
        <button style={{
          padding: `${theme.spacing.md} ${theme.spacing.lg}`,
          backgroundColor: theme.colors.primary,
          color: theme.colors.background,
          border: 'none',
          borderRadius: theme.radius.md,
          fontSize: '16px',
          fontWeight: '600',
          cursor: 'pointer',
        }}>
          + Create Event
        </button>
      </div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))',
        gap: theme.spacing.lg,
      }}>
        {[1, 2, 3, 4].map((i) => (
          <div
            key={i}
            style={{
              backgroundColor: theme.colors.background,
              borderRadius: theme.radius.lg,
              border: `1px solid ${theme.colors.border}`,
              overflow: 'hidden',
            }}
          >
            <div style={{
              width: '100%',
              height: '180px',
              backgroundColor: theme.colors.backgroundTertiary,
            }} />
            <div style={{ padding: theme.spacing.lg }}>
              <div style={{
                display: 'inline-block',
                padding: `${theme.spacing.xs} ${theme.spacing.md}`,
                borderRadius: theme.radius.full,
                fontSize: '12px',
                fontWeight: '600',
                backgroundColor: theme.colors.successLight,
                color: theme.colors.success,
                marginBottom: theme.spacing.md,
              }}>
                Published
              </div>
              <h3 style={{
                fontSize: '20px',
                fontWeight: '600',
                color: theme.colors.text,
                marginBottom: theme.spacing.md,
                lineHeight: '1.3',
              }}>
                Tech Summit 2025
              </h3>
              <div style={{
                display: 'flex',
                flexDirection: 'column' as const,
                gap: theme.spacing.sm,
                marginBottom: theme.spacing.lg,
              }}>
                <div style={{ fontSize: '14px', color: theme.colors.textSecondary }}>
                  📅 Mar 15, 2025 at 9:00 AM
                </div>
                <div style={{ fontSize: '14px', color: theme.colors.textSecondary }}>
                  📍 San Francisco, CA
                </div>
              </div>
              <div style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: theme.spacing.md,
                padding: theme.spacing.md,
                backgroundColor: theme.colors.backgroundSecondary,
                borderRadius: theme.radius.md,
                marginBottom: theme.spacing.md,
              }}>
                <div>
                  <div style={{
                    fontSize: '12px',
                    color: theme.colors.textSecondary,
                    fontWeight: '600',
                  }}>
                    Registered
                  </div>
                  <div style={{ fontSize: '20px', fontWeight: '600', color: theme.colors.text }}>
                    78/200
                  </div>
                </div>
                <div>
                  <div style={{
                    fontSize: '12px',
                    color: theme.colors.textSecondary,
                    fontWeight: '600',
                  }}>
                    Waitlist
                  </div>
                  <div style={{ fontSize: '20px', fontWeight: '600', color: theme.colors.text }}>
                    12
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
