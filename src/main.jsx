import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

function QaryaalaLandingPage() {
  return (
    <div className="min-h-screen bg-white text-gray-800 p-4 md:p-10">
      <header className="text-center mb-10">
        <h1 className="text-4xl font-bold mb-2">QaryaaL</h1>
        <p className="text-lg text-gray-600">
          Somali + Islamic Weekly News Digest — In Somali and English
        </p>
      </header>

      <main>
        <section className="grid gap-6 md:grid-cols-2 mb-12">
          <div>
            <h2 className="text-2xl font-semibold mb-4">Why QaryaaL?</h2>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Verified Somali news — summarized & translated</li>
              <li>Islamic quotes, events, and reminders</li>
              <li>Scholarships, diaspora updates, halal lifestyle tips</li>
              <li>Delivered via Telegram & Email — once a week</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4">Sample Digest</h2>
            <div className="border rounded-xl p-4 bg-gray-50 text-sm">
              <p className="mb-2">📰 <strong>Somali:</strong> Dowladda Soomaaliya waxay sheegtay in ay fashilisay weerar argagixiso...</p>
              <p className="mb-2">📰 <strong>English:</strong> The Somali government reported that it foiled a terrorist attack...</p>
              <p className="mb-2">🕌 <strong>Islamic Reminder:</strong> "Whoever fasts a day for the sake of Allah..."</p>
              <p>🧠 <strong>Somali Proverb:</strong> "Mar i dage, laba i ma dage..."</p>
            </div>
          </div>
        </section>

        <section className="text-center mb-16">
          <h2 className="text-2xl font-semibold mb-4">Subscribe to QaryaaL</h2>
          <p className="text-gray-700 mb-6">Get your digest every week on Telegram or via email.</p>
          <div className="flex justify-center gap-4 flex-wrap">
            <a href="https://t.me/QaryaalaBot" aria-label="Join QaryaaL Telegram bot" title="Join Telegram Bot" className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-xl text-lg">Join Telegram</a>
            <a href="#email" aria-label="Join QaryaaL Email List" title="Join Email List" className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-xl text-lg">Join Email List</a>
          </div>
        </section>
      </main>

      <footer className="text-center text-gray-500 text-sm">
        &copy; {new Date().getFullYear()} QaryaaL. Built for the diaspora and ummah.
      </footer>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<QaryaalaLandingPage />);
