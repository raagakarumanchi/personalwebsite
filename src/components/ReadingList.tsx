'use client';

import { useState } from 'react';
import { Book, ExternalLink, ChevronDown, ChevronUp } from 'lucide-react';

interface ReadingItem {
  title: string;
  author?: string;
  type: 'book' | 'article';
  url?: string;
  status: 'reading' | 'completed' | 'planned';
  progress?: number;
  description?: string;
}

const readingList: ReadingItem[] = [
  {
    title: "The Midnight Library",
    author: "Matt Haig",
    type: "book",
    status: "reading",
    progress: 65,
    description: "A novel about the choices that go into a life well lived."
  },
  {
    title: "Atomic Habits",
    author: "James Clear",
    type: "book",
    status: "completed",
    description: "An easy and proven way to build good habits and break bad ones."
  },
  {
    title: "The Future of AI in Healthcare",
    type: "article",
    url: "https://example.com/ai-healthcare",
    status: "planned",
    description: "An in-depth look at how artificial intelligence is transforming healthcare."
  }
];

export const ReadingList = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [selectedStatus, setSelectedStatus] = useState<ReadingItem['status'] | 'all'>('all');

  const filteredItems = readingList.filter(
    item => selectedStatus === 'all' || item.status === selectedStatus
  );

  const getStatusColor = (status: ReadingItem['status']) => {
    switch (status) {
      case 'reading':
        return 'var(--accent)';
      case 'completed':
        return 'var(--success)';
      case 'planned':
        return 'var(--text-secondary)';
      default:
        return 'var(--text)';
    }
  };

  return (
    <div className="reading-list">
      <div className="reading-list-header">
        <h3>
          <Book size={20} />
          Reading List
        </h3>
        <div className="reading-list-controls">
          <select
            value={selectedStatus}
            onChange={(e) => setSelectedStatus(e.target.value as ReadingItem['status'] | 'all')}
            className="status-filter"
          >
            <option value="all">All</option>
            <option value="reading">Reading</option>
            <option value="completed">Completed</option>
            <option value="planned">Planned</option>
          </select>
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="expand-button"
            aria-label={isExpanded ? 'Collapse list' : 'Expand list'}
          >
            {isExpanded ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
          </button>
        </div>
      </div>

      <div className={`reading-list-items ${isExpanded ? 'expanded' : ''}`}>
        {filteredItems.map((item, index) => (
          <div
            key={index}
            className="reading-item"
            style={{ '--status-color': getStatusColor(item.status) } as React.CSSProperties}
          >
            <div className="reading-item-header">
              <div className="reading-item-title">
                {item.type === 'book' ? <Book size={16} /> : <ExternalLink size={16} />}
                {item.url ? (
                  <a href={item.url} target="_blank" rel="noopener noreferrer">
                    {item.title}
                  </a>
                ) : (
                  <span>{item.title}</span>
                )}
              </div>
              <span className="reading-item-status">{item.status}</span>
            </div>
            
            {item.author && (
              <div className="reading-item-author">by {item.author}</div>
            )}
            
            {item.description && (
              <div className="reading-item-description">{item.description}</div>
            )}
            
            {item.progress !== undefined && (
              <div className="reading-item-progress">
                <div
                  className="progress-bar"
                  style={{ width: `${item.progress}%` }}
                />
                <span>{item.progress}%</span>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}; 