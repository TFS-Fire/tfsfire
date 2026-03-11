export default function EmergencyBanner() {
  return (
    <div
      className="fixed top-20 left-0 right-0 z-40 bg-fire-red text-white text-center py-2 text-sm font-semibold"
      role="complementary"
      aria-label="Emergency information"
    >
      In case of emergency, dial 911
    </div>
  )
}
