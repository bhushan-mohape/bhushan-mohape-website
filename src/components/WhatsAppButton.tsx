import { whatsappUrl } from '../data/site'
import { WhatsappIcon } from './icons/BrandIcons'

/** Fixed floating action button offering a direct WhatsApp chat. */
export function WhatsAppButton() {
  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-5 right-5 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_12px_32px_-8px_rgba(37,211,102,0.6)] transition-transform hover:scale-105 sm:bottom-7 sm:right-7"
    >
      <WhatsappIcon size={26} />
    </a>
  )
}
