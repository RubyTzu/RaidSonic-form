const CitiesList = ({ citiesData, searchData }) => {
  const filterWords = (text, keyword) => {
    const index = text.toLowerCase().indexOf(keyword.toLowerCase());
  
    if (index !== -1) {
      return (
        <>
          {text.substring(0, index)}
          <span className="hl">
            {text.substring(index, index + keyword.length)}
          </span>
          {text.substring(index + keyword.length)}
        </>
      );
    }
     
    return text;

    
  };

  const numberWithCommas = (x) => {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  return (
    <>
      {searchData ? (
        <ul className="suggestions">
          {citiesData.map((cityData, idx) => {
            return (
              <li key={idx}>
                <span className="name">
                  {filterWords(cityData.city, searchData)},{" "}
                  {filterWords(cityData.state, searchData)}
                </span>
                <span className="population">
                  {numberWithCommas(cityData.population)}
                </span>
              </li>
            );
          })}
        </ul>
      ) : (
        <ul className="suggestions">
          <li>Filter for a city</li>
          <li>or a state</li>
        </ul>
      )}
      {citiesData.length === 0 && (
        <ul className="suggestions">
          <li>No matching results</li>
        </ul>
      )}
    </>
  );
};

export default CitiesList;
