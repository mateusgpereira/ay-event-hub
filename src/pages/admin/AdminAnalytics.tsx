import { theme } from '../../theme';

const metrics = [
  { label: 'Total Registrations', value: '2,847', change: '+18.2%', positive: true, icon: '👥' },
  { label: 'Event Views', value: '12,459', change: '+23.5%', positive: true, icon: '👁️' },
  { label: 'Conversion Rate', value: '22.8%', change: '+2.1%', positive: true, icon: '📊' },
  { label: 'Email Open Rate', value: '64.3%', change: '-3.2%', positive: false, icon: '📧' },
];

export default function AdminAnalytics() {
  return (
    <>
      <div style={{ marginBottom: theme.spacing.xl }}>
        <h1 style={{
          fontSize: '36px',
          fontWeight: '700',
          color: theme.colors.text,
          marginBottom: theme.spacing.sm,
        }}>
          Analytics
        </h1>
        <p style={{ fontSize: '16px', color: theme.colors.textSecondary }}>
          Track performance and engagement across all events
        </p>
      </div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
        gap: theme.spacing.lg,
        marginBottom: theme.spacing.xl,
      }}>
        {metrics.map((metric, index) => (
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
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'start',
              marginBottom: theme.spacing.md,
            }}>
              <div style={{
                fontSize: '14px',
                color: theme.colors.textSecondary,
                fontWeight: '600',
              }}>
                {metric.label}
              </div>
              <div style={{ fontSize: '24px' }}>{metric.icon}</div>
            </div>
            <div style={{
              fontSize: '36px',
              fontWeight: '700',
              color: theme.colors.text,
              marginBottom: theme.spacing.sm,
            }}>
              {metric.value}
            </div>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: theme.spacing.xs,
              fontSize: '14px',
              fontWeight: '600',
              color: metric.positive ? theme.colors.success : theme.colors.error,
            }}>
              <span>{metric.positive ? '↗' : '↘'}</span>
              <span>{metric.change} from last period</span>
            </div>
          </div>
        ))}
      </div>

      <div style={{
        backgroundColor: theme.colors.background,
        padding: theme.spacing.xl,
        borderRadius: theme.radius.lg,
        border: `1px solid ${theme.colors.border}`,
        marginBottom: theme.spacing.lg,
      }}>
        <h2 style={{
          fontSize: '24px',
          fontWeight: '600',
          color: theme.colors.text,
          marginBottom: theme.spacing.sm,
        }}>
          Registration Trends
        </h2>
        <p style={{
          fontSize: '16px',
          color: theme.colors.textSecondary,
          marginBottom: theme.spacing.lg,
        }}>
          Daily registrations over time
        </p>
        <div style={{
          height: '300px',
          backgroundColor: theme.colors.backgroundSecondary,
          borderRadius: theme.radius.md,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: theme.colors.textTertiary,
          fontSize: '20px',
        }}>
          📈 Chart visualization would appear here
        </div>
      </div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
        gap: theme.spacing.lg,
      }}>
        <div style={{
          backgroundColor: theme.colors.background,
          padding: theme.spacing.xl,
          borderRadius: theme.radius.lg,
          border: `1px solid ${theme.colors.border}`,
        }}>
          <h3 style={{
            fontSize: '20px',
            fontWeight: '600',
            color: theme.colors.text,
            marginBottom: theme.spacing.lg,
          }}>
            Top Events by Registration
          </h3>
          {[1, 2, 3, 4, 5].map((i) => (
            <div
              key={i}
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: `${theme.spacing.md} 0`,
                borderBottom: i < 5 ? `1px solid ${theme.colors.borderLight}` : 'none',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: theme.spacing.md }}>
                <span style={{
                  width: '24px',
                  fontSize: '16px',
                  fontWeight: '600',
                  color: theme.colors.textTertiary,
                }}>
                  {i}
                </span>
                <span style={{ fontSize: '16px', color: theme.colors.text, fontWeight: '500' }}>
                  Tech Summit 2025
                </span>
              </div>
              <span style={{ fontSize: '16px', fontWeight: '600', color: theme.colors.text }}>
                456
              </span>
            </div>
          ))}
        </div>

        <div style={{
          backgroundColor: theme.colors.background,
          padding: theme.spacing.xl,
          borderRadius: theme.radius.lg,
          border: `1px solid ${theme.colors.border}`,
        }}>
          <h3 style={{
            fontSize: '20px',
            fontWeight: '600',
            color: theme.colors.text,
            marginBottom: theme.spacing.lg,
          }}>
            Email Campaign Performance
          </h3>
          {[1, 2, 3, 4, 5].map((i) => (
            <div
              key={i}
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: `${theme.spacing.md} 0`,
                borderBottom: i < 5 ? `1px solid ${theme.colors.borderLight}` : 'none',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: theme.spacing.md }}>
                <span style={{
                  width: '24px',
                  fontSize: '16px',
                  fontWeight: '600',
                  color: theme.colors.textTertiary,
                }}>
                  {i}
                </span>
                <span style={{ fontSize: '16px', color: theme.colors.text, fontWeight: '500' }}>
                  Tech Summit Reminder
                </span>
              </div>
              <span style={{ fontSize: '16px', fontWeight: '600', color: theme.colors.text }}>
                78%
              </span>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
