export type NewsArticle = {
    id: number
    title: string
    excerpt: string
    content: string // HTML string for now
    date: string // ISO yyyy-mm-dd
    image: string
    category: string
  }
  
  export const newsArticles: NewsArticle[] = [
    {
      id: 1,
      title: 'TFS Launches New Website',
      excerpt:
        'TFS Volunteer Fire Department announces the launch of its new official website, designed to improve public access to department information, safety resources, updates, and community engagement.',
      content: `
        <p>
          The TFS Volunteer Fire Department is proud to announce the launch of its new official website, created to provide residents and visitors with a reliable, centralized source of department information and public resources.
        </p>
        <p>
          The website is intended to improve communication with the community by making important information easier to access. Visitors can use the site to learn more about the department, view contact information, access public safety resources, and stay informed on department news and updates.
        </p>
        <p>
          As the website continues to develop, additional features and content will be added to better serve the community. Planned additions include expanded safety and preparedness resources, department news and announcements, event information, and other tools intended to improve public access to important information.
        </p>
        <p>
          The department is also working toward adding online donation functionality to the website. This will provide community members with a convenient way to support the department’s mission, training efforts, equipment needs, and ongoing service to the area.
        </p>
        <p>
          The launch of the website reflects the department’s continued commitment to transparency, preparedness, and community involvement. By strengthening its digital presence, the TFS Volunteer Fire Department aims to improve accessibility, keep the public informed, and create a more effective platform for future communication and support.
        </p>
        <p>
          Community members are encouraged to visit the site regularly as new features, resources, and updates are added over time. The TFS Volunteer Fire Department appreciates the continued support of the community and looks forward to using this platform to strengthen public awareness and connection.
        </p>
      `,
      date: '2026-03-12',
      image: '/station1.jpg',
      category: 'Department News',
    },
  ];
    /*
    {
      id: 2,
      ...
    }
    */