import React from 'react';

export default function Recommendations() {
  return (
    <section id="recommendations-section" className="py-20 bg-white dark:bg-slate-900 min-h-[600px]">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-extrabold font-headline mb-12">Colleague Feedback</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {[
            { quote: "Darshil effectively managed offshore QA. Handled ambiguous requirements beautifully on a massive rewrite. Strong mentor.", author: "Software Engineering Manager @ KP", tag: "Management" },
            { quote: "Extensive QA expertise and problem-solving. Fostered collaborative culture and ensured seamless delivery of testing efforts.", author: "Agile Delivery Lead @ KP", tag: "Delivery" }
          ].map((rec, i) => (
            <div key={i} className="bg-[#f8f9ff] dark:bg-slate-800 rounded-2xl p-8 border border-slate-100 dark:border-slate-700 relative">
              <div className="absolute top-4 right-6 text-6xl text-[#00685f]/10 font-serif">"</div>
              <p className="text-slate-600 dark:text-slate-300 italic mb-6 relative z-10 leading-relaxed text-sm">"{rec.quote}"</p>
              <div className="flex gap-4 items-center">
                <div className="w-10 h-10 rounded-full bg-[#00685f] text-white flex items-center justify-center font-bold text-sm">KP</div>
                <div>
                  <h4 className="font-bold text-sm">{rec.author}</h4>
                  <span className="text-[10px] uppercase tracking-wider text-[#00685f] dark:text-[#6bd8cb] font-bold">{rec.tag}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
