import React, { useState } from 'react';
import SearchBar from '../components/SearchBar';
import ResourceList from '../components/ResourceList';
import treatments from '../data/treatments.json';

const Treatment = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = ['all', 'physical-therapy', 'psychological', 'medical'];

  return (
    <div className="treatment-page">
      <h1>Treatment & Management</h1>
      
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
        resources={treatments}
        searchTerm={searchTerm}
        selectedCategory={selectedCategory}
      />
    </div>
  );
};

export default Treatment; 