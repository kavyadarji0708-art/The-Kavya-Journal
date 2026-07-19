export default function About() {
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

      <main className="container max-w-2xl px-4 py-24">
        <h2 className="text-heading font-heading text-5xl md:text-6xl mb-12 font-light">About the Author</h2>
        
        <section className="prose max-w-none">
          <p className="text-lg leading-relaxed mb-6">
            The Kavya Journal is a personal publication by Kavya Darji, exploring philosophy, lived experience, and the issues shaping our world.
          </p>
          <p className="text-lg leading-relaxed mb-6">
            Each piece draws from real life and applies to the broader human condition, connecting personal reflection to universal themes. The journal covers everything from philosophical ideas and world issues to literary quotes and cultural observations.
          </p>
          <p className="text-lg leading-relaxed">
            It is written for curious teens and open-minded adults who are willing to question and expand their worldview. Through honest and thoughtful writing, The Kavya Journal invites readers to pause, reflect, and see their lives from a new angle.
          </p>
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
