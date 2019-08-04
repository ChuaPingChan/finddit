import reddit from './reddit_api';

const searchForm = document.getElementById('search-form');
const searchInput = document.getElementById('search-input');

searchForm.addEventListener('submit', e => {
    e.preventDefault();

    // Get search term
    const searchTerm = searchInput.value;
    searchInput.value = '';
    // Get sort
    const sortBy = document.querySelector('input[name="sortby"]:checked').value;
    // Get limit
    const searchLimit = document.getElementById('limit').value;

    // Check input
    if (searchTerm === '') {
        showMessage('Please add a search term', 'alert-danger');
        return;
    }

    // Search Reddit
    reddit.search(searchTerm, searchLimit, sortBy)
        .then(results => {
            let output = '<div class="card-columns">';

            // Loop through posts
            results.forEach(post => {
                output += '<div class="card">'
                // Check for image
                const image = post.preview ? post.preview.images[0].source.url : null;
                if (image) {
                    output += `<img src="${image}" class="card-img-top" alt="...">`
                }
                output += `
                    <div class="card-body">
                        <h5 class="card-title">${post.title}</h5>
                        <p class="card-text">${truncateText(post.selftext, 200)}</p>
                        <a href="${post.url}" target="_blank" class="btn btn-primary">Read More</a>
                        <hr>
                        <span class="badge badge-secondary">Subreddit: ${post.subreddit}</span>
                        <span class="badge badge-dark">Score: ${post.score}</span>
                    </div>
                `;
                output += "</div>";
            })

            output += '</div>';
            document.getElementById('results').innerHTML = output;
        });
});

function showMessage(message, className) {
    const div = document.createElement('div');
    div.className = `alert ${className}`;
    div.appendChild(document.createTextNode(message));

    const searchContainer = document.getElementById('search-container');
    const search = document.getElementById('search');
    searchContainer.insertBefore(div, search);

    setTimeout(() => document.querySelector('.alert').remove(), 3000);
}

// Some reddit post have long messages, need truncation
function truncateText(text, limit) {
    const shortened = text.indexOf(' ', limit);
    if (shortened == -1) return text;
    return text.substring(0, shortened);
}
