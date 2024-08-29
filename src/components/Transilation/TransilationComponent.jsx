

import React from 'react';

const TransilationComponent = () => {
  
  const [searchValue, setSearchValue] = React.useState('');


  const handleSearchTranslate = async (e) => {
    e.preventDefault(); 



    const url = 'https://deep-translate1.p.rapidapi.com/language/translate/v2';
    const options = {
      method: 'POST',
      headers: {
        'x-rapidapi-key': '216aaa2687msh91ec62caa74c1a8p1888b2jsnd4414ee7bbf9',
        'x-rapidapi-host': 'deep-translate1.p.rapidapi.com',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        q: searchValue, 
        source: 'uz',
        target: 'en'
      })
    };

    try {
      const response = await fetch(url, options);
      const result = await response.json();
      console.log(result); 
    } catch (error) {
      console.error(error); 
    }
   

  }

  return (
    <>
    <form onSubmit={handleSearchTranslate} className="border max-w-[600px] flex-1 flex border-gray-300 p-4 rounded-[30px]">
      <input
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
        type="text"
        className="flex-1 border-none outline-none text-lg"
        placeholder="Search translate"
      />
      <button type="submit" className="ml-4 p-2 bg-blue-500 text-white rounded">Translate</button>
    </form>
    
    <h1>Translateni korish uchun consolega qarang</h1>
    
    </>
  );
};

export default TransilationComponent;
