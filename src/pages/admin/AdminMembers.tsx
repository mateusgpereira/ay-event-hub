import { theme } from '../../theme';

export default function AdminMembers() {
  return (
    <>
      <div style={{
        marginBottom: theme.spacing.xl,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}>
        <div>
          <h1 style={{
            fontSize: '36px',
            fontWeight: '700',
            color: theme.colors.text,
            marginBottom: theme.spacing.sm,
          }}>
            Team Members
          </h1>
          <p style={{ fontSize: '16px', color: theme.colors.textSecondary }}>
            Manage team access and permissions
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
          + Invite Member
        </button>
      </div>

      <div style={{
        backgroundColor: theme.colors.background,
        borderRadius: theme.radius.lg,
        border: `1px solid ${theme.colors.border}`,
        overflow: 'hidden',
      }}>
        <div style={{
          backgroundColor: theme.colors.backgroundSecondary,
          padding: theme.spacing.lg,
          display: 'grid',
          gridTemplateColumns: '2fr 1fr 1fr 1fr',
          gap: theme.spacing.lg,
          fontSize: '14px',
          fontWeight: '700',
          color: theme.colors.textSecondary,
          textTransform: 'uppercase' as const,
        }}>
          <div>Member</div>
          <div>Last Active</div>
          <div>Role</div>
          <div>Status</div>
        </div>

        {[1, 2, 3, 4, 5].map((i) => (
          <div
            key={i}
            style={{
              padding: theme.spacing.lg,
              display: 'grid',
              gridTemplateColumns: '2fr 1fr 1fr 1fr',
              gap: theme.spacing.lg,
              alignItems: 'center',
              borderBottom: `1px solid ${theme.colors.borderLight}`,
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: theme.spacing.md }}>
              <div style={{
                width: '40px',
                height: '40px',
                borderRadius: '50%',
                backgroundColor: theme.colors.primary,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: theme.colors.background,
                fontWeight: '600',
              }}>
                SJ
              </div>
              <div>
                <div style={{
                  fontSize: '16px',
                  fontWeight: '600',
                  color: theme.colors.text,
                }}>
                  Sarah Johnson
                </div>
                <div style={{ fontSize: '14px', color: theme.colors.textSecondary }}>
                  sarah.j@example.com
                </div>
              </div>
            </div>
            <div style={{ fontSize: '16px', color: theme.colors.text }}>2 hours ago</div>
            <div style={{
              display: 'inline-block',
              padding: `${theme.spacing.xs} ${theme.spacing.md}`,
              borderRadius: theme.radius.full,
              fontSize: '12px',
              fontWeight: '600',
              backgroundColor: theme.colors.primaryLight,
              color: theme.colors.primary,
            }}>
              Admin
            </div>
            <div style={{
              display: 'inline-block',
              padding: `${theme.spacing.xs} ${theme.spacing.md}`,
              borderRadius: theme.radius.full,
              fontSize: '12px',
              fontWeight: '600',
              backgroundColor: theme.colors.successLight,
              color: theme.colors.success,
            }}>
              Active
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
