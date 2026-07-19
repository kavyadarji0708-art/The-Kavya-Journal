import React from 'react';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <header className="bg-white border-b border-gray-200">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-900">The Kavya Journal</h1>
          <div className="flex gap-4">
            <button className="text-gray-600 hover:text-gray-900">Home</button>
            <button className="text-gray-600 hover:text-gray-900">Browse Essays</button>
            <button className="text-gray-600 hover:text-gray-900">Sign In</button>
          </div>
        </nav>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <section className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Share Your Voice
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            A platform for young writers to publish thoughtful essays and engage with a community of readers.
          </p>
          <div className="mt-8 flex gap-4 justify-center">
            <button className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
              Start Writing
            </button>
            <button className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:border-gray-400">
              Browse Essays
            </button>
          </div>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          <div className="text-center">
            <div className="text-4xl mb-4">📝</div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Write with Purpose</h3>
            <p className="text-gray-600">Express your unique perspective on topics that matter to you.</p>
          </div>
          <div className="text-center">
            <div className="text-4xl mb-4">✅</div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Quality Assurance</h3>
            <p className="text-gray-600">Our editors review submissions to maintain high editorial standards.</p>
          </div>
          <div className="text-center">
            <div className="text-4xl mb-4">🌍</div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Share Globally</h3>
            <p className="text-gray-600">Connect with readers and writers from around the world.</p>
          </div>
        </section>
      </main>

      <footer className="bg-gray-50 border-t border-gray-200 mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 text-center text-gray-600">
          <p>&copy; 2024 The Kavya Journal. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
