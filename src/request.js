const API_KEY= "cd27e7d96b1871bb1f0f6972616cf43a&page=7";
const request={
    theatres :`/discover/movie?primary_release_date.gte=2014-09-15&primary_release_date.lte=2014-10-22&api_key=${API_KEY}`,
    popular  :`/discover/movie?sort_by=popularity.desc&api_key=${API_KEY}`,
    highest_rated :`/discover/movie/?certification_country=US&certification=R&sort_by=vote_average.desc&api_key=${API_KEY}`,
    most_popular_kids :`/discover/movie?certification_country=US&certification.lte=G&sort_by=popularity.desc&api_key=${API_KEY}`,
    best_drama :`/discover/movie?with_genres=18&sort_by=vote_average.desc&vote_count.gte=10&api_key=${API_KEY}`,
    comedies :`/discover/movie?with_genres=18&primary_release_year=2014&api_key=${API_KEY}`,
    best_movies :`/discover/movie?certification_country=US&certification.lte=G&sort_by=popularity.desc&api_key=${API_KEY}`,
}
export default request;