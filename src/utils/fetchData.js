export const exerciseOptions = {
        method: 'GET',
        url: 'https://exercisedb.p.rapidapi.com/exercises/bodyPartList',
        headers: {
          'X-RapidAPI-Key': '0f36dba87emsha8e9401628ee692p1f51c7jsnacfe5280232a',
          'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
        }
};

export const fetchData = async (url, options) => {
    const response = await fetch(url, options);
    const data = await response.json();

    return data;
}