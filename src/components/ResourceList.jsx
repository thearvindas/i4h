import React from 'react';

const ResourceList = ({ resources, searchTerm, selectedCategory }) => {
  const filteredResources = resources.filter(resource => {
    const matchesSearch = 
      resource.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      resource.description.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesCategory = 
      selectedCategory === 'all' || resource.category === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });

  return (
    <ul className="resource-list">
      {filteredResources.map(resource => (
        <li key={resource.id} className="resource-item">
          <h3>{resource.title}</h3>
          <p>{resource.description}</p>
          {resource.link && (
            <a href={resource.link} className="resource-link">Learn More</a>
          )}
        </li>
      ))}
    </ul>
  );
};

export default ResourceList; 