import emailjs from '@emailjs/browser'

const SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID
const PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY

export const CONTACT_TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_CONTACT_TEMPLATE_ID
export const VOLUNTEER_TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_VOLUNTEER_TEMPLATE_ID

export class EmailJSConfigError extends Error {
  constructor(message: string) {
    super(message)
    this.name = 'EmailJSConfigError'
  }
}

export async function sendEmail(
  templateId: string | undefined,
  params: Record<string, unknown>
) {
  if (!SERVICE_ID || !PUBLIC_KEY || !templateId) {
    throw new EmailJSConfigError(
      'EmailJS is not configured. Set NEXT_PUBLIC_EMAILJS_SERVICE_ID, NEXT_PUBLIC_EMAILJS_PUBLIC_KEY, and the relevant template ID in .env.local.'
    )
  }

  return emailjs.send(
    SERVICE_ID,
    templateId,
    params as Record<string, string>,
    { publicKey: PUBLIC_KEY }
  )
}
