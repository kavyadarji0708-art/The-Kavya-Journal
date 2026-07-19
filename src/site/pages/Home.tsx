export default function Home() {
  return (
    <div className="min-h-screen bg-canvas text-default">
      <header className="border-b border-default bg-canvas sticky top-0 z-50">
        <nav className="container max-w-6xl px-4 py-4 flex justify-between items-center">
          <h1 className="text-heading font-heading text-2xl font-bold">The Kavya Journal</h1>
          <ul className="flex gap-6">
            <li><a href="/essays" className="text-default hover:text-heading">Essays</a></li>
            <li><a href="/about" className="text-default hover:text-heading">About</a></li>
            <li><a href="/sending-your-essay" className="text-default hover:text-heading">Send</a></li>
            <li><a href="/privacy" className="text-default hover:text-heading">Privacy</a></li>
          </ul>
        </nav>
      </header>

      <main className="container max-w-6xl px-4 py-24">
        <section className="text-center mb-24">
          <h2 className="text-heading font-heading text-5xl md:text-6xl mb-6 font-light">A journal for curious minds</h2>
          <p className="text-lg text-muted mb-8 max-w-2xl mx-auto">
            The Kavya Journal publishes philosophical essays and reflections that help readers see their lives and the world differently.
          </p>
          <a href="/essays" className="inline-block bg-primary text-on-primary px-6 py-3 rounded-lg font-medium hover:opacity-90">
            Read Essays
          </a>
        </section>

        <section className="py-24 border-t border-default">
          <h3 className="text-heading font-heading text-3xl mb-8">Latest Essay</h3>
          <div className="bg-subtle rounded-lg p-8">
            <h4 className="text-heading font-heading text-2xl mb-4">Coming Soon</h4>
            <p className="text-muted">Essays will appear here as they are published.</p>
          </div>
        </section>
      </main>

      <footer className="border-t border-default bg-subtle mt-24 py-12">
        <div className="container max-w-6xl px-4 text-center text-muted">
          <p>&copy; 2024 The Kavya Journal. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
