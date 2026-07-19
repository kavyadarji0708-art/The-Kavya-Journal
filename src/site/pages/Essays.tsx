export default function Essays() {
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
        <h2 className="text-heading font-heading text-5xl md:text-6xl mb-12 font-light">Essays</h2>
        <div className="grid gap-8">
          <div className="bg-subtle rounded-lg p-8">
            <h3 className="text-heading font-heading text-2xl mb-2">No essays yet</h3>
            <p className="text-muted">Check back soon for new philosophical essays and reflections.</p>
          </div>
        </div>
      </main>

      <footer className="border-t border-default bg-subtle mt-24 py-12">
        <div className="container max-w-6xl px-4 text-center text-muted">
          <p>&copy; 2024 The Kavya Journal. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
