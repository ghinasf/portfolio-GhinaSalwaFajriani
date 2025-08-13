export default function Skills() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-pink-50 p-6">
      <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition duration-300">
        <h1 className="text-3xl font-bold text-pink-600 mb-6 text-center">Skills</h1>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
          {["JavaScript / Next.js", "UI/UX Design", "Database MySQL", "Data Analysis"].map((skill, i) => (
            <div
              key={i}
              className="bg-pink-100 text-pink-700 font-semibold py-3 rounded-lg shadow-sm hover:shadow-md transition duration-300"
            >
              {skill}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
