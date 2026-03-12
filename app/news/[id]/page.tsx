import Link from 'next/link'
import { Calendar, ArrowLeft } from 'lucide-react'
import { notFound } from 'next/navigation'

// In a real app, fetch from CMS or API
const getArticle = (id: string) => {
  const articles: Record<string, any> = {
    '1': {
      id: 1,
      title: 'TFS Launches New Website',
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
      date: '2026-01-13',
      image: '/station1.jpg',
      category: 'Department News',
    },
  }
  return articles[id] || null
}

export default function NewsArticlePage({ params }: { params: { id: string } }) {
  const article = getArticle(params.id)

  if (!article) {
    notFound()
  }

  return (
    <>
      {/* Hero */}
      <section className="relative h-[400px] flex items-center justify-center text-white bg-fire-dark">
        <div className="container-custom">
          <Link
            href="/news"
            className="inline-flex items-center text-white/80 hover:text-white mb-4 focus:outline-none focus:ring-2 focus:ring-fire-red rounded"
          >
            <ArrowLeft className="w-4 h-4 mr-2" aria-hidden="true" />
            Back to News
          </Link>

          <div className="mb-4">
            <span className="bg-fire-red text-white px-3 py-1 rounded-full text-sm font-semibold">
              {article.category}
            </span>
          </div>

          <h1 className="mb-4">{article.title}</h1>

          <div className="flex items-center text-white/80">
            <Calendar className="w-5 h-5 mr-2" aria-hidden="true" />
            {new Date(article.date).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            })}
          </div>
        </div>
      </section>

      {/* Article Content (no card, no gray background — just clean article typography) */}
      <article className="bg-white py-12 md:py-16">
        <div className="container-custom">
          {/* This is the “measure” — keeps line length readable */}
          <div className="max-w-3xl mx-auto">
            {/* A subtle top rule gives the body a “beginning” */}
            <div className="h-px w-full bg-fire-dark/10 mb-8" />

            {/* Typography */}
            <div
              className="
                text-fire-dark
                leading-relaxed

                /* Paragraph rhythm */
                [&_p]:mb-6
                [&_p]:text-[17px]
                md:[&_p]:text-[18px]
                [&_p]:leading-8
                [&_p]:text-fire-dark/80

                /* Lede (first paragraph) */
                [&_p:first-child]:text-[19px]
                md:[&_p:first-child]:text-[20px]
                [&_p:first-child]:leading-9
                [&_p:first-child]:font-medium
                [&_p:first-child]:text-fire-dark/90

                /* Strong + links */
                [&_strong]:text-fire-dark
                [&_a]:text-fire-red
                [&_a]:font-semibold
                [&_a:hover]:underline

                /* Lists (in case you add them later) */
                [&_ul]:my-6
                [&_ol]:my-6
                [&_li]:mb-2
                [&_ul]:pl-6
                [&_ol]:pl-6
                [&_li]:text-fire-dark/80
                [&_ul>li]:list-disc
                [&_ol>li]:list-decimal

                /* Blockquotes (in case you add them later) */
                [&_blockquote]:my-8
                [&_blockquote]:border-l-4
                [&_blockquote]:border-fire-red/60
                [&_blockquote]:pl-5
                [&_blockquote]:italic
                [&_blockquote]:text-fire-dark/70

                /* Headings (future-proofing) */
                [&_h2]:mt-10
                [&_h2]:mb-4
                [&_h2]:text-2xl
                [&_h2]:font-bold
                [&_h2]:text-fire-dark
                [&_h3]:mt-8
                [&_h3]:mb-3
                [&_h3]:text-xl
                [&_h3]:font-bold
                [&_h3]:text-fire-dark
              "
              dangerouslySetInnerHTML={{ __html: article.content }}
            />

            {/* Subtle footer rule + navigation */}
            <div className="mt-12 pt-8 border-t border-fire-dark/10">
              <Link
                href="/news"
                className="inline-flex items-center text-fire-dark/70 hover:text-fire-dark transition-colors"
              >
                <ArrowLeft className="w-4 h-4 mr-2" aria-hidden="true" />
                Back to News
              </Link>
            </div>
          </div>
        </div>
      </article>
    </>
  )
}
