import React, { useState } from 'react';
import SearchBar from '../components/SearchBar';
import ResourceList from '../components/ResourceList';
import recommendations from '../data/recommendations.json';

const PatientRecs = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = ['all', 'education', 'lifestyle', 'community'];

  return (
    <div className="patient-recs">
      <h1>Patient Recommendations</h1>
      
      <div className="filters">
        <SearchBar onSearch={setSearchTerm} />
        
        <select 
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="category-filter"
        >
          {categories.map(category => (
            <option key={category} value={category}>
              {category === 'all' ? 'All Categories' : category.replace('-', ' ')}
            </option>
          ))}
        </select>
      </div>

      <ResourceList 
        resources={recommendations}
        searchTerm={searchTerm}
        selectedCategory={selectedCategory}
      />
    </div>
  );
};

export default PatientRecs; 