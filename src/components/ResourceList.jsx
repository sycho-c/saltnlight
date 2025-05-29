import React from 'react';
import ResourceItem from './ResourceItem';
import { Link } from 'react-router-dom';

const resourcesData = [
  {
    id: '1',
    title: '생각의 전쟁과 전신갑주',
  },
];

const ResourceList = () => (
  <div className="resources">
    {resourcesData.map((resource, idx) => (
      <Link key={resource.id} to={`/saltnlight/resource/${resource.id}`} style={{ textDecoration: 'none' }}>
        <ResourceItem title={resource.title} />
      </Link>
    ))}
  </div>
);

export default ResourceList; 
