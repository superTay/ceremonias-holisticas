import { useContent } from '../i18n/useContent'

export default function WhatsAppFab() {
  const { whatsapp } = useContent()

  return (
    <a
      href={whatsapp.url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={whatsapp.fabAria}
      className="fixed bottom-5 right-5 z-40 inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] shadow-xl transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#20BD5A] hover:shadow-2xl"
    >
      <WhatsAppIcon />
    </a>
  )
}

function WhatsAppIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="white"
      width="28"
      height="28"
      aria-hidden="true"
    >
      <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91C21.95 6.45 17.5 2 12.04 2zm5.52 14.15c-.23.64-1.35 1.26-1.86 1.34-.48.08-1.08.11-1.73-.11-.4-.13-.91-.3-1.57-.59-2.74-1.18-4.54-3.92-4.68-4.1-.14-.18-1.14-1.52-1.14-2.9 0-1.38.72-2.06 1-2.34.26-.28.57-.35.76-.35.19 0 .38.01.55.01.18 0 .42-.07.66.5.25.6.84 2.05.91 2.2.08.15.12.32.02.51-.1.2-.15.31-.3.48-.14.17-.3.38-.43.51-.15.15-.3.3-.13.59.17.29.75 1.23 1.6 1.99 1.1.98 2.02 1.28 2.31 1.43.29.14.46.12.63-.07.17-.2.74-.86.94-1.15.2-.29.39-.24.66-.15.27.1 1.73.82 2.03.96.29.15.49.22.56.34.07.12.07.7-.16 1.34z" />
    </svg>
  )
}
