import { useState } from 'react';
import Layout from '../components/Layout';
import ContentCard from '../components/ContentCard';
import { contentData } from '../data/mockData';

export default function Home() {
  const [contents, setContents] = useState(contentData);
  const [selectedTag, setSelectedTag] = useState('Semua');
  const [searchQuery, setSearchQuery] = useState('');

  const tags = ['Semua', ...new Set(contentData.flatMap((c) => c.tags))];
  const filteredContents = contents.filter((content) => selectedTag === 'Semua' ? true : content.tags.includes(selectedTag)).filter((content) =>content.title.toLowerCase().includes(searchQuery.toLowerCase()));
  const handleLike = (id) => {setContents(contents.map((c) =>c.id === id ? { ...c, liked: !c.liked } : c));};

  return (
    <Layout>
      <div className="mb-4 flex flex-col sm:flex-row justify-between">
        <div>
          <label className="mr-2">Filter berdasarkan tag:</label>
          <select
            value={selectedTag}
            onChange={(e) => setSelectedTag(e.target.value)}
            className="border rounded p-2"
          >
            {tags.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label className="mr-2">Cari konten:</label>
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Masukkan judul"
            className="border rounded p-2 w-full sm:w-64"
          />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {filteredContents.map((content) => (
          <ContentCard key={content.id} content={content} onLike={handleLike} />
        ))}
      </div>
    </Layout>
  );
}