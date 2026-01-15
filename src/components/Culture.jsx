import { culturePosts } from "../data";

export default function Culture() {
  return (
    <div className="section container mx-auto px-4">
      <h2 className="text-3xl font-heading text-center text-brand-maroon mb-8">
        Punjabi Culture
      </h2>

      <div className="grid md:grid-cols-3 gap-8">
        {culturePosts.map((post, idx) => (
          <div key={idx} className="card hover:shadow-lg transition">
            <img
              src={post.img}
              alt={post.title}
              className="w-full h-40 object-cover rounded-lg mb-3"
              loading="lazy"
              decoding="async"
            />
            <h3 className="font-heading text-lg text-brand-maroon">{post.title}</h3>
            <p className="text-sm text-gray-600 mt-1">{post.excerpt}</p>
            <a
              href={post.link}
              className="mt-3 inline-block text-sm text-brand-gold hover:underline"
            >
              Read More →
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
