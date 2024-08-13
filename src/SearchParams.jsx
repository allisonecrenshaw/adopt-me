import { useState } from 'react';

function SearchParams() {
  const [location, setLocation] = useState('');
  return (
    <div className="search-params">
      <form>
        <label htmlFor="location">
          Location
          <input
            onChange={(event) => {
              console.log(event);
              setLocation(event.target.value);
            }}
            id="location"
            value={location}
            placeholder="Type your location here"
          />
        </label>
        <button>Submit</button>
      </form>
    </div>
  );
}

export default SearchParams;
