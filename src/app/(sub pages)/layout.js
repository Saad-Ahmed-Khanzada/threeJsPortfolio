import SubPageNav from "@/components/navigation/SubPageNav";

export default function SubPagesLayout({ children }) {
  return (
    /*
      justify-start rather than justify-center: these pages are now long
      enough that centring the content vertically pushed the top of the
      page off-screen on shorter viewports.
    */
    <main className="flex min-h-screen flex-col items-center justify-start px-4 pb-20 pt-24 xs:px-8 sm:px-10 lg:px-16 xl:px-20">
      {/*
        Scrim between the decorative background photographs and the content.
        Several of the background images are busy and bright in places, and
        body copy sitting directly on them was legible but visually noisy.
        This sits above the images (-z-40) and below all content.
      */}
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 -z-40
          bg-[linear-gradient(to_bottom,rgb(var(--background)/0.92),rgb(var(--background)/0.80)_35%,rgb(var(--background)/0.88))]"
      />

      <SubPageNav />
      {children}
    </main>
  );
}
