export default {
    search: function (searchTerm, searchLimit, sortBy) {
        // Return a promise
        return fetch(`https://cors-anywhere.herokuapp.com/https://www.reddit.com/search.json?q=${searchTerm}&sort=${sortBy}&limit=${searchLimit}`)
            .then(res => res.json())
            .then(data => data.data.children.map(data => data.data))
            .catch(err => console.log(err));
    }
}
