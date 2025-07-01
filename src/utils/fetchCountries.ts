const fetchCountries = async () => {
  try {
    const response = await fetch("https://api.first.org/data/v1/countries");

    const data = await response.json();
    const countryList = Object.values(data.data).map(
      (item: any) => item.country
    );
    return countryList;
  } catch (err) {
    console.log(err);
  }
};
