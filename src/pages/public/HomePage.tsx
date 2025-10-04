import { Link } from 'react-router-dom';
import { theme } from '../../theme';

const featuredEvents = [
  {
    id: 1,
    title: 'Tech Summit 2025',
    date: 'Mar 15, 2025',
    time: '9:00 AM',
    location: 'San Francisco, CA',
    capacity: '120 spots left',
    image: 'https://images.pexels.com/photos/2774556/pexels-photo-2774556.jpeg',
    badge: 'Featured',
  },
  {
    id: 2,
    title: 'Design Workshop',
    date: 'Mar 20, 2025',
    time: '2:00 PM',
    location: 'New York, NY',
    capacity: '45 spots left',
    image: 'https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg',
    badge: 'Popular',
  },
  {
    id: 3,
    title: 'Startup Networking Night',
    date: 'Mar 22, 2025',
    time: '6:00 PM',
    location: 'Austin, TX',
    capacity: 'Waitlist Available',
    image: 'https://images.pexels.com/photos/2608517/pexels-photo-2608517.jpeg',
    badge: 'Trending',
  },
];

const features = [
  { icon: '🎫', title: 'Smart Capacity Management', description: 'Automatic waitlist management with FCFS rules and auto-promotions when spots open up.' },
  { icon: '📧', title: 'Email & Calendar Flows', description: 'Automated invites, reminders, and calendar integration with Outlook and universal .ics support.' },
  { icon: '📊', title: 'Powerful Analytics', description: 'Track attendance, engagement, and event performance with detailed insights.' },
  { icon: '👥', title: 'Audience Segmentation', description: 'Target specific groups with personalized invitations and newsletters.' },
  { icon: '🔒', title: 'Role-Based Access', description: 'Granular permissions for team members with admin console management.' },
  { icon: '⚡', title: 'Lightning Fast', description: 'Instant registration, real-time updates, and seamless event discovery.' },
];

export default function HomePage() {
  return (
    <>
      <section style={{ padding: `${theme.spacing.xxxl} ${theme.spacing.xl}`, textAlign: 'center' as const }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <h1 style={{
            fontSize: '56px',
            fontWeight: '700',
            lineHeight: '1.1',
            color: theme.colors.text,
            marginBottom: theme.spacing.lg,
            letterSpacing: '-0.03em',
          }}>
            Discover and manage
            <br />
            unforgettable events
          </h1>
          <p style={{
            fontSize: '20px',
            color: theme.colors.textSecondary,
            lineHeight: '1.6',
            maxWidth: '600px',
            margin: '0 auto',
            marginBottom: theme.spacing.xl,
          }}>
            The modern platform for event organizers and attendees. Create, discover, and join
            amazing experiences with smart capacity management and seamless integrations.
          </p>
          <div style={{ display: 'flex', gap: theme.spacing.md, justifyContent: 'center', flexWrap: 'wrap' as const }}>
            <Link to="/events" style={{
              backgroundColor: theme.colors.primary,
              color: theme.colors.background,
              padding: `${theme.spacing.md} ${theme.spacing.xl}`,
              borderRadius: theme.radius.md,
              fontSize: '16px',
              fontWeight: '600',
              textDecoration: 'none',
              display: 'inline-block',
            }}>
              Explore Events
            </Link>
            <Link to="/admin" style={{
              backgroundColor: theme.colors.background,
              color: theme.colors.text,
              padding: `${theme.spacing.md} ${theme.spacing.xl}`,
              borderRadius: theme.radius.md,
              border: `2px solid ${theme.colors.border}`,
              fontSize: '16px',
              fontWeight: '600',
              textDecoration: 'none',
              display: 'inline-block',
            }}>
              Create an Event
            </Link>
          </div>
        </div>
      </section>

      <section style={{
        padding: `${theme.spacing.xxxl} ${theme.spacing.xl}`,
        backgroundColor: theme.colors.backgroundSecondary,
      }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center' as const, marginBottom: theme.spacing.xxl }}>
            <h2 style={{
              fontSize: '36px',
              fontWeight: '700',
              color: theme.colors.text,
              marginBottom: theme.spacing.md,
              letterSpacing: '-0.02em',
            }}>
              Featured Events
            </h2>
            <p style={{ fontSize: '16px', color: theme.colors.textSecondary, lineHeight: '1.6' }}>
              Join thousands of people discovering incredible events every day
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
            gap: theme.spacing.lg,
          }}>
            {featuredEvents.map((event) => (
              <Link
                key={event.id}
                to={`/events/${event.id}`}
                style={{
                  backgroundColor: theme.colors.background,
                  borderRadius: theme.radius.lg,
                  overflow: 'hidden',
                  border: `1px solid ${theme.colors.border}`,
                  textDecoration: 'none',
                  display: 'block',
                }}
              >
                <img
                  src={event.image}
                  alt={event.title}
                  style={{
                    width: '100%',
                    height: '200px',
                    objectFit: 'cover' as const,
                    backgroundColor: theme.colors.backgroundTertiary,
                  }}
                />
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
                    <div style={{ display: 'flex', alignItems: 'center', gap: theme.spacing.sm }}>
                      <span>📅</span>
                      <span>{event.date} at {event.time}</span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: theme.spacing.sm }}>
                      <span>📍</span>
                      <span>{event.location}</span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: theme.spacing.sm }}>
                      <span>👥</span>
                      <span>{event.capacity}</span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: `${theme.spacing.xxxl} ${theme.spacing.xl}` }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center' as const, marginBottom: theme.spacing.xxl }}>
            <h2 style={{
              fontSize: '36px',
              fontWeight: '700',
              color: theme.colors.text,
              marginBottom: theme.spacing.md,
              letterSpacing: '-0.02em',
            }}>
              Everything you need
            </h2>
            <p style={{ fontSize: '16px', color: theme.colors.textSecondary, lineHeight: '1.6' }}>
              Powerful features to create and manage exceptional events
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: theme.spacing.xl,
          }}>
            {features.map((feature, index) => (
              <div
                key={index}
                style={{
                  padding: theme.spacing.xl,
                  backgroundColor: theme.colors.background,
                  borderRadius: theme.radius.lg,
                  border: `1px solid ${theme.colors.border}`,
                }}
              >
                <div style={{ fontSize: '36px', marginBottom: theme.spacing.md }}>{feature.icon}</div>
                <h3 style={{
                  fontSize: '20px',
                  fontWeight: '600',
                  color: theme.colors.text,
                  marginBottom: theme.spacing.md,
                }}>
                  {feature.title}
                </h3>
                <p style={{ fontSize: '16px', color: theme.colors.textSecondary, lineHeight: '1.6' }}>
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
