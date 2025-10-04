import { theme } from '../../theme';

export default function EventDetailPage() {
  return (
    <div style={{ maxWidth: '1280px', margin: '0 auto', padding: `${theme.spacing.xxl} ${theme.spacing.xl}` }}>
      <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: theme.spacing.xxl }}>
        <div style={{ display: 'flex', flexDirection: 'column' as const, gap: theme.spacing.xl }}>
          <img
            src="https://images.pexels.com/photos/2774556/pexels-photo-2774556.jpeg"
            alt="Event cover"
            style={{
              width: '100%',
              height: '400px',
              objectFit: 'cover' as const,
              borderRadius: theme.radius.lg,
              backgroundColor: theme.colors.backgroundTertiary,
            }}
          />

          <div>
            <div style={{
              display: 'inline-block',
              padding: `${theme.spacing.xs} ${theme.spacing.md}`,
              borderRadius: theme.radius.full,
              fontSize: '12px',
              fontWeight: '600',
              backgroundColor: theme.colors.primaryLight,
              color: theme.colors.primary,
              marginBottom: theme.spacing.md,
            }}>
              Featured
            </div>
            <h1 style={{
              fontSize: '48px',
              fontWeight: '700',
              color: theme.colors.text,
              lineHeight: '1.2',
              letterSpacing: '-0.03em',
            }}>
              Tech Summit 2025
            </h1>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: theme.spacing.lg,
            padding: theme.spacing.xl,
            backgroundColor: theme.colors.backgroundSecondary,
            borderRadius: theme.radius.lg,
            border: `1px solid ${theme.colors.border}`,
          }}>
            <div>
              <div style={{ fontSize: '24px', marginBottom: theme.spacing.sm }}>📅</div>
              <div style={{ fontSize: '14px', color: theme.colors.textTertiary, fontWeight: '600' }}>Date</div>
              <div style={{ fontSize: '16px', color: theme.colors.text, fontWeight: '500' }}>March 15, 2025</div>
            </div>
            <div>
              <div style={{ fontSize: '24px', marginBottom: theme.spacing.sm }}>🕒</div>
              <div style={{ fontSize: '14px', color: theme.colors.textTertiary, fontWeight: '600' }}>Time</div>
              <div style={{ fontSize: '16px', color: theme.colors.text, fontWeight: '500' }}>9:00 AM - 5:00 PM</div>
            </div>
            <div>
              <div style={{ fontSize: '24px', marginBottom: theme.spacing.sm }}>📍</div>
              <div style={{ fontSize: '14px', color: theme.colors.textTertiary, fontWeight: '600' }}>Location</div>
              <div style={{ fontSize: '16px', color: theme.colors.text, fontWeight: '500' }}>San Francisco, CA</div>
            </div>
          </div>

          <div>
            <h2 style={{
              fontSize: '24px',
              fontWeight: '600',
              color: theme.colors.text,
              marginBottom: theme.spacing.md,
            }}>
              About this event
            </h2>
            <p style={{ fontSize: '16px', color: theme.colors.textSecondary, lineHeight: '1.7' }}>
              Join us for the most anticipated tech summit of 2025. Connect with industry leaders,
              discover cutting-edge technologies, and network with fellow innovators.
            </p>
          </div>
        </div>

        <div>
          <div style={{
            position: 'sticky' as const,
            top: theme.spacing.lg,
            backgroundColor: theme.colors.background,
            padding: theme.spacing.xl,
            borderRadius: theme.radius.lg,
            border: `2px solid ${theme.colors.border}`,
            boxShadow: theme.shadows.lg,
          }}>
            <div style={{ marginBottom: theme.spacing.lg }}>
              <div style={{ fontSize: '14px', color: theme.colors.textSecondary, marginBottom: theme.spacing.sm }}>
                Event Capacity
              </div>
              <div style={{
                width: '100%',
                height: '8px',
                backgroundColor: theme.colors.backgroundTertiary,
                borderRadius: theme.radius.full,
                overflow: 'hidden',
                marginBottom: theme.spacing.sm,
              }}>
                <div style={{
                  height: '100%',
                  backgroundColor: theme.colors.success,
                  width: '65%',
                }} />
              </div>
              <div style={{ fontSize: '20px', fontWeight: '600', color: theme.colors.text }}>
                120 spots left
              </div>
            </div>

            <button style={{
              width: '100%',
              padding: `${theme.spacing.md} ${theme.spacing.lg}`,
              backgroundColor: theme.colors.primary,
              color: theme.colors.background,
              border: 'none',
              borderRadius: theme.radius.md,
              fontSize: '16px',
              fontWeight: '600',
              cursor: 'pointer',
              marginBottom: theme.spacing.md,
            }}>
              Register Now
            </button>
            <button style={{
              width: '100%',
              padding: `${theme.spacing.md} ${theme.spacing.lg}`,
              backgroundColor: theme.colors.background,
              color: theme.colors.text,
              border: `2px solid ${theme.colors.border}`,
              borderRadius: theme.radius.md,
              fontSize: '16px',
              fontWeight: '600',
              cursor: 'pointer',
            }}>
              Join Waitlist
            </button>

            <div style={{
              padding: theme.spacing.lg,
              backgroundColor: theme.colors.backgroundSecondary,
              borderRadius: theme.radius.md,
              fontSize: '14px',
              color: theme.colors.textSecondary,
              lineHeight: '1.6',
              marginTop: theme.spacing.md,
            }}>
              Upon registration, you'll receive a calendar invite with Outlook integration and a
              universal .ics file for all calendar apps.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
