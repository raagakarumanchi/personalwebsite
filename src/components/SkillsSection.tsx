'use client';

import { useState } from 'react';
import { Code, Brain, Heart, Star, Award, Activity } from 'lucide-react';

interface Skill {
  name: string;
  category: 'technical' | 'research' | 'interests' | 'achievements';
  level?: 'beginner' | 'intermediate' | 'advanced' | 'expert';
  icon?: React.ReactNode;
  description?: string;
}

const skills: Skill[] = [
  {
    name: 'Python',
    category: 'technical',
    level: 'advanced',
    icon: <Code />,
    description: 'Data analysis, machine learning, and scientific computing'
  },
  {
    name: 'Neuroscience Research',
    category: 'research',
    level: 'expert',
    icon: <Brain />,
    description: 'Specializing in cerebrovascular research and neuroimaging'
  },
  {
    name: 'Public Speaking',
    category: 'interests',
    level: 'advanced',
    icon: <Heart />,
    description: 'Conference presentations and scientific communication'
  },
  {
    name: 'NIH Award',
    category: 'achievements',
    icon: <Award />,
    description: 'Youngest person to receive this prestigious award'
  },
  {
    name: 'Taekwondo',
    category: 'achievements',
    level: 'expert',
    icon: <Activity />,
    description: 'Black Belt in Taekwondo, demonstrating dedication to martial arts and physical discipline'
  },
  {
    name: 'Martial Arts',
    category: 'interests',
    level: 'advanced',
    icon: <Activity />,
    description: 'Passionate about martial arts, practicing and teaching techniques'
  }
];

export const SkillsSection = () => {
  const [selectedCategory, setSelectedCategory] = useState<Skill['category'] | 'all'>('all');
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  const filteredSkills = skills.filter(
    skill => selectedCategory === 'all' || skill.category === selectedCategory
  );

  const getCategoryIcon = (category: Skill['category']) => {
    switch (category) {
      case 'technical':
        return <Code size={16} />;
      case 'research':
        return <Brain size={16} />;
      case 'interests':
        return <Heart size={16} />;
      case 'achievements':
        return <Award size={16} />;
      default:
        return <Star size={16} />;
    }
  };

  const getLevelColor = (level?: Skill['level']) => {
    switch (level) {
      case 'beginner':
        return 'var(--text-secondary)';
      case 'intermediate':
        return 'var(--accent)';
      case 'advanced':
        return 'var(--success)';
      case 'expert':
        return 'var(--highlight)';
      default:
        return 'var(--text)';
    }
  };

  return (
    <div className="skills-section">
      <div className="skills-header">
        <h3>Skills & Interests</h3>
        <div className="category-filters">
          <button
            className={selectedCategory === 'all' ? 'active' : ''}
            onClick={() => setSelectedCategory('all')}
          >
            All
          </button>
          {Array.from(new Set(skills.map(skill => skill.category))).map(category => (
            <button
              key={category}
              className={selectedCategory === category ? 'active' : ''}
              onClick={() => setSelectedCategory(category)}
            >
              {getCategoryIcon(category)}
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>
      </div>

      <div className="skills-grid">
        {filteredSkills.map((skill, index) => (
          <div
            key={index}
            className="skill-card"
            onMouseEnter={() => setHoveredSkill(skill.name)}
            onMouseLeave={() => setHoveredSkill(null)}
            style={{
              '--level-color': getLevelColor(skill.level),
              '--category-color': `var(--${skill.category}-color)`
            } as React.CSSProperties}
          >
            <div className="skill-icon">
              {skill.icon || getCategoryIcon(skill.category)}
            </div>
            <div className="skill-content">
              <h4>{skill.name}</h4>
              {skill.level && (
                <span className="skill-level">{skill.level}</span>
              )}
              {skill.description && (
                <p className={`skill-description ${hoveredSkill === skill.name ? 'visible' : ''}`}>
                  {skill.description}
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}; 