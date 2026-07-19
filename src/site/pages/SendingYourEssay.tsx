import { useState } from 'react';

export default function SendingYourEssay() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you for your submission! This feature is currently a placeholder.');
    setSubmitted(true);
  };

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
        <h2 className="text-heading font-heading text-5xl md:text-6xl mb-12 font-light">Send Your Essay</h2>
        
        <form onSubmit={handleSubmit} className="space-y-6 bg-subtle rounded-lg p-8">
          <div>
            <label htmlFor="name" className="block text-default mb-2">Name</label>
            <input
              id="name"
              type="text"
              required
              className="w-full px-4 py-2 border border-default rounded-lg bg-canvas text-default"
              placeholder="Your name"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-default mb-2">Email</label>
            <input
              id="email"
              type="email"
              required
              className="w-full px-4 py-2 border border-default rounded-lg bg-canvas text-default"
              placeholder="your@email.com"
            />
          </div>
          <div>
            <label htmlFor="essay" className="block text-default mb-2">Your Essay</label>
            <textarea
              id="essay"
              required
              rows={8}
              className="w-full px-4 py-2 border border-default rounded-lg bg-canvas text-default"
              placeholder="Share your thoughts and reflections..."
            />
          </div>
          <button
            type="submit"
            className="w-full bg-primary text-on-primary px-6 py-3 rounded-lg font-medium hover:opacity-90"
          >
            Send Your Essay
          </button>
        </form>
      </main>

      <footer className="border-t border-default bg-subtle mt-24 py-12">
        <div className="container max-w-6xl px-4 text-center text-muted">
          <p>&copy; 2024 The Kavya Journal. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
