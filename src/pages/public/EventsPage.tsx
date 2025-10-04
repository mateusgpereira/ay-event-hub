import { Link } from 'react-router-dom';
import { theme } from '../../theme';

const events = [
  { id: 1, title: 'Tech Summit 2025', date: 'Mar 15, 2025', time: '9:00 AM', location: 'San Francisco, CA', capacity: '120 spots left', image: 'https://images.pexels.com/photos/2774556/pexels-photo-2774556.jpeg', badge: 'Featured' },
  { id: 2, title: 'Design Workshop', date: 'Mar 20, 2025', time: '2:00 PM', location: 'New York, NY', capacity: '45 spots left', image: 'https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg', badge: 'Available' },
  { id: 3, title: 'Startup Networking Night', date: 'Mar 22, 2025', time: '6:00 PM', location: 'Austin, TX', capacity: 'Join Waitlist', image: 'https://images.pexels.com/photos/2608517/pexels-photo-2608517.jpeg', badge: 'Waitlist' },
];

export default function EventsPage() {
  return (
    <div style={{ maxWidth: '1280px', margin: '0 auto', padding: `${theme.spacing.xxl} ${theme.spacing.xl}` }}>
      <div style={{ marginBottom: theme.spacing.xxl }}>
        <h1 style={{
          fontSize: '48px',
          fontWeight: '700',
          color: theme.colors.text,
          marginBottom: theme.spacing.md,
          letterSpacing: '-0.03em',
        }}>
          Discover Events
        </h1>
        <p style={{ fontSize: '20px', color: theme.colors.textSecondary, lineHeight: '1.6' }}>
          Find and join events that match your interests
        </p>
      </div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
        gap: theme.spacing.lg,
      }}>
        {events.map((event) => (
          <Link key={event.id} to={`/events/${event.id}`} style={{
            backgroundColor: theme.colors.background,
            borderRadius: theme.radius.lg,
            overflow: 'hidden',
            border: `1px solid ${theme.colors.border}`,
            textDecoration: 'none',
            display: 'block',
          }}>
            <img src={event.image} alt={event.title} style={{
              width: '100%',
              height: '200px',
              objectFit: 'cover' as const,
              backgroundColor: theme.colors.backgroundTertiary,
            }} />
            <div style={{ padding: theme.spacing.lg }}>
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
                {event.badge}
              </div>
              <h3 style={{
                fontSize: '20px',
                fontWeight: '600',
                color: theme.colors.text,
                marginBottom: theme.spacing.sm,
                lineHeight: '1.3',
              }}>
                {event.title}
              </h3>
              <div style={{
                display: 'flex',
                flexDirection: 'column' as const,
                gap: theme.spacing.sm,
                color: theme.colors.textSecondary,
                fontSize: '14px',
              }}>
                <div>📅 {event.date} at {event.time}</div>
                <div>📍 {event.location}</div>
                <div>👥 {event.capacity}</div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
