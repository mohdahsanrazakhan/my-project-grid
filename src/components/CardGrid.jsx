import React, { useState, useEffect } from 'react';
import Card from "./Card"

const CardGrid = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/project-info.json');
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }
    fetchData();
  }, []);

  // Render loading state while fetching data
  if(!data) {
    return <p>Loading...</p>;
  }

  return (
    <section className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 p-10 justify-center items-center place-items-center m-auto transition-all duration-500 ease-in-out bg-white dark:bg-slate-800'>
      {data.map((item, index) => (
        <Card 
        key={index}
        imgUrl={item.imgUrl}
        projectTitle={item.projectTitle}
        skill={item.skills}
        externalUrl={item.externalUrl} 
        githubUrl={item.githubUrl} 
      />
      ))}
    </section>
  )
}

export default CardGrid