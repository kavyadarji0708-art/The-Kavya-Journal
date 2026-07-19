export default function Privacy() {
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
        <h2 className="text-heading font-heading text-5xl md:text-6xl mb-12 font-light">Privacy Policy</h2>
        
        <article className="prose max-w-none space-y-6">
          <section>
            <h3 className="text-heading font-heading text-2xl mb-4">Information We Collect</h3>
            <p className="text-lg leading-relaxed">
              When you submit an essay through our form, we collect your name, email address, and the essay text you provide.
            </p>
          </section>

          <section>
            <h3 className="text-heading font-heading text-2xl mb-4">How We Use Your Information</h3>
            <p className="text-lg leading-relaxed">
              We use the information you provide to contact you about your submission and to potentially feature your work in The Kavya Journal.
            </p>
          </section>

          <section>
            <h3 className="text-heading font-heading text-2xl mb-4">Contact Us</h3>
            <p className="text-lg leading-relaxed">
              If you have questions about this privacy policy, please reach out to us at
              <a href="mailto:contact@kavyajournal.com" className="text-primary hover:underline ml-1">
                contact@kavyajournal.com
              </a>
            </p>
          </section>
        </article>
      </main>

      <footer className="border-t border-default bg-subtle mt-24 py-12">
        <div className="container max-w-6xl px-4 text-center text-muted">
          <p>&copy; 2024 The Kavya Journal. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
