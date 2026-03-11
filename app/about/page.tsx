import Image from 'next/image'

export const metadata = {
  title: 'About Us',
  description: 'Learn about the TFS Volunteer Fire Department, our history, mission, and dedicated team serving Trego, Fortine and Stryker Montana.',
}

export default function AboutPage() {
  const teamMembers = [
    {
      name: 'Chief Isaiah Williams',
      role: 'Department Chief',
      bio: 'Chief Williams has served with TFS for over 10 years, bringing extensive experience in wildfire management, emergency response, and departmental leadership.',
      image: '/placeholder.png.webp'
    },
    {
      name: 'Chief Jarrell Miller',
      role: 'Station 1 Chief',
      bio: 'Chief Miller is responsible for the overall administration and operations of Station 1, supporting leadership, personnel, and day-to-day activities.',
      image: '/placeholder.png.webp',
    },
   /* {
      name: 'Chief Corey Graham',
      role: 'Station 2 Chief',
      bio: 'Chief Graham is responsible for the overall administration and operations of Station 2, supporting leadership, personnel, and day-to-day activities.',
    }, */
    {
      name: 'Tristan Miske',
      role: 'Training Officer',
      bio: 'The Training Officer is responsible for coordinating training programs, maintaining certifications, and ensuring firefighters are prepared for both structural and wildland incidents.',
      image: '/placeholder.png.webp',
    },
  ]

  return (
    <>
      {/* Hero */}
      <section className="relative h-[400px] flex items-center justify-center text-white bg-fire-dark">
        <div className="container-custom text-center">
          <h1 className="mb-4">About TFS Volunteer Fire Department</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Serving Fortine and the surrounding communities with dedication and expertise
          </p>
        </div>
      </section>

      {/* History & Mission */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="mb-6">Our History</h2>
            <p className="text-lg mb-6">
              The TFS Volunteer Fire Department was established in the 1950s to serve the rural communities of Trego, Fortine, and Stryker Montana, and the surrounding forested areas. What began as a small group of dedicated volunteers has grown into a professional, well-equipped department ready to respond to any emergency.
            </p>
            <p className="mb-6">
              Over the years, we have expanded our capabilities to include specialized wildfire response and comprehensive fire prevention programs. Our department operates two fire stations strategically located to ensure rapid response times across our coverage area.
            </p>
            
            <h2 className="mb-6 mt-12">Our Mission</h2>
            <div className="bg-fire-red/5 border-l-4 border-fire-red p-6 mb-6">
              <p className="text-lg font-semibold mb-2">
                To protect lives, property, and the environment through:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Rapid, professional emergency response</li>
                <li>Fire prevention education and community outreach</li>
                <li>Specialized wildfire management and suppression</li>
                <li>Continuous training and professional development</li>
                <li>Building strong community partnerships</li>
              </ul>
            </div>

            <h2 className="mb-6 mt-12">Department Overview</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-fire-dark/5 p-6 rounded-lg">
                <div className="text-3xl font-bold text-fire-red mb-2">2</div>
                <div className="font-semibold">Fire Stations</div>
                <p className="text-sm text-fire-dark/70 mt-2">Strategically located for optimal coverage</p>
              </div>
              <div className="bg-fire-dark/5 p-6 rounded-lg">
                <div className="text-3xl font-bold text-fire-orange mb-2">24</div>
                <div className="font-semibold">Active Volunteers</div>
                <p className="text-sm text-fire-dark/70 mt-2">Dedicated community members</p>
              </div>
              <div className="bg-fire-dark/5 p-6 rounded-lg">
                <div className="text-3xl font-bold text-fire-yellow mb-2">160+</div>
                <div className="font-semibold">Square Miles</div>
                <p className="text-sm text-fire-dark/70 mt-2">Coverage area</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section 
      <section className="section-padding bg-fire-dark/5">
        <div className="container-custom">
          <h2 className="text-center mb-12">Leadership Team</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {teamMembers.map((member, index) => (
                <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="relative h-64">
                  <Image
                    src={member.image || ''}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                  <p className="text-fire-orange font-semibold mb-3">{member.role}</p>
                  <p className="text-fire-dark/70">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Values */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-center mb-12">Our Core Values</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-6 border border-fire-red/20 rounded-lg">
                <h3 className="text-xl font-bold mb-3 text-fire-red">Courage</h3>
                <p>Facing danger with determination and bravery to protect our community.</p>
              </div>
              <div className="p-6 border border-fire-orange/20 rounded-lg">
                <h3 className="text-xl font-bold mb-3 text-fire-orange">Commitment</h3>
                <p>Dedicated service to our community, always ready to respond.</p>
              </div>
              <div className="p-6 border border-fire-yellow/20 rounded-lg">
                <h3 className="text-xl font-bold mb-3 text-fire-yellow">Community</h3>
                <p>Building strong relationships and partnerships with residents and organizations.</p>
              </div>
              <div className="p-6 border border-fire-red/20 rounded-lg">
                <h3 className="text-xl font-bold mb-3 text-fire-red">Excellence</h3>
                <p>Continuous improvement through training, education, and professional development.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
