import Link from 'next/link';
import Tag from './Tag';

export default function ContentCard({ content, onLike }) {
  return (
    <div className="border rounded-lg p-4 shadow-md">
      <h2 className="text-xl font-semibold">{content.title}</h2>
      <p className="text-gray-600 mt-2">{content.summary}</p>
      <div className="flex flex-wrap gap-2 mt-2">
        {content.tags.map((t) => (
          <Tag key={t} name={t} />
        ))}
      </div>
      <div className="mt-4 flex justify-between">
        <Link href={`/konten/${content.id}`} className="text-blue-500">
          Lihat Detail
        </Link>
        <button
          onClick={() => onLike(content.id)}
          className={content.liked ? 'bg-red-500 text-white px-2 py-1 rounded' : 'bg-gray-200 px-2 py-1 rounded'}
        >
          {content.liked ? 'Unlike' : 'Like'}
        </button>
      </div>
    </div>
  );
}