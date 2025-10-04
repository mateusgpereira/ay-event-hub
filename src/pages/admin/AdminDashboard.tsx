import { theme } from '../../theme';

const stats = [
  { icon: '🎉', label: 'Total Events', value: '24', change: '+12%', positive: true },
  { icon: '👥', label: 'Total Attendees', value: '1,847', change: '+23%', positive: true },
  { icon: '📊', label: 'Avg. Attendance Rate', value: '87%', change: '+5%', positive: true },
  { icon: '📧', label: 'Email Open Rate', value: '64%', change: '-2%', positive: false },
];

export default function AdminDashboard() {
  return (
    <>
      <div style={{ marginBottom: theme.spacing.xl }}>
        <h1 style={{
          fontSize: '36px',
          fontWeight: '700',
          color: theme.colors.text,
          marginBottom: theme.spacing.sm,
        }}>
          Dashboard
        </h1>
        <p style={{ fontSize: '16px', color: theme.colors.textSecondary }}>
          Welcome back! Here's what's happening with your events.
        </p>
      </div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
        gap: theme.spacing.lg,
        marginBottom: theme.spacing.xl,
      }}>
        {stats.map((stat, index) => (
          <div
            key={index}
            style={{
              backgroundColor: theme.colors.background,
              padding: theme.spacing.xl,
              borderRadius: theme.radius.lg,
              border: `1px solid ${theme.colors.border}`,
              boxShadow: theme.shadows.sm,
            }}
          >
            <div style={{ fontSize: '32px', marginBottom: theme.spacing.md }}>{stat.icon}</div>
            <div style={{
              fontSize: '14px',
              color: theme.colors.textSecondary,
              marginBottom: theme.spacing.sm,
              fontWeight: '500',
            }}>
              {stat.label}
            </div>
            <div style={{
              fontSize: '32px',
              fontWeight: '700',
              color: theme.colors.text,
              marginBottom: theme.spacing.xs,
            }}>
              {stat.value}
            </div>
            <div style={{
              fontSize: '14px',
              fontWeight: '600',
              color: stat.positive ? theme.colors.success : theme.colors.error,
            }}>
              {stat.change} from last month
            </div>
          </div>
        ))}
      </div>

      <div style={{
        backgroundColor: theme.colors.background,
        padding: theme.spacing.xl,
        borderRadius: theme.radius.lg,
        border: `1px solid ${theme.colors.border}`,
      }}>
        <h2 style={{
          fontSize: '24px',
          fontWeight: '600',
          color: theme.colors.text,
          marginBottom: theme.spacing.lg,
        }}>
          Recent Events
        </h2>
        <div style={{
          display: 'flex',
          flexDirection: 'column' as const,
          gap: theme.spacing.md,
        }}>
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              style={{
                display: 'grid',
                gridTemplateColumns: '60px 2fr 1fr 1fr',
                gap: theme.spacing.lg,
                alignItems: 'center',
                padding: theme.spacing.md,
                borderRadius: theme.radius.md,
              }}
            >
              <div style={{
                width: '60px',
                height: '60px',
                borderRadius: theme.radius.md,
                backgroundColor: theme.colors.backgroundTertiary,
              }} />
              <div>
                <div style={{
                  fontSize: '16px',
                  fontWeight: '600',
                  color: theme.colors.text,
                }}>
                  Tech Summit 2025
                </div>
                <div style={{ fontSize: '14px', color: theme.colors.textSecondary }}>
                  Mar 15, 2025
                </div>
              </div>
              <div style={{ fontSize: '16px', color: theme.colors.text }}>78 / 200</div>
              <div style={{
                padding: `${theme.spacing.xs} ${theme.spacing.md}`,
                borderRadius: theme.radius.full,
                fontSize: '12px',
                fontWeight: '600',
                backgroundColor: theme.colors.successLight,
                color: theme.colors.success,
                textAlign: 'center' as const,
              }}>
                Published
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
