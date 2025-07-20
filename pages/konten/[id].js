import { useRouter } from 'next/router';
import Layout from '../../components/Layout';
import Tag from '../../components/Tag';
import { contentData } from '../../data/mockData';

export default function ContentDetail() {
  const router = useRouter();
  const { id } = router.query;
  const content = contentData.find((c) => c.id === parseInt(id));

  if (!content) {
    return <Layout><p>Memuat...</p></Layout>;
  }

  return (
    <Layout>
      <div className="border rounded-lg p-6 max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold mb-4">{content.title}</h1>
        <p className="text-gray-600 mb-4">{content.summary}</p>
        <p className="mb-4">{content.fullDescription}</p>
        <div className="flex flex-wrap gap-2">
          {content.tags.map((t) => (
            <Tag key={t} name={t} />
          ))}
        </div>
      </div>
    </Layout>
  );
}