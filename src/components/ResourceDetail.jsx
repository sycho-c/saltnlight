import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import './ResourceDetail.css';

const ResourceDetail = () => {
  const { id } = useParams();
  const [content, setContent] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    fetch(`/saltnlight/data/${id}.md`)
      .then((res) => {
        if (!res.ok) throw new Error('자료를 찾을 수 없습니다.');
        return res.text();
      })
      .then((text) => {
        // HTML 태그와 스크립트 참조 제거
        const cleanedText = text.replace(/<[^>]*>/g, '');
        setContent(cleanedText);
      })
      .catch((e) => setError(e.message))
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) return <div className="resource-detail-loading">로딩 중...</div>;
  if (error) return <div className="resource-detail-error">에러: {error}</div>;

  return (
    <article className="resource-detail">
      <div className="resource-detail-content">
        <ReactMarkdown>{content}</ReactMarkdown>
      </div>
    </article>
  );
};

export default ResourceDetail; 
