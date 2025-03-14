// Global variables
let currentRating = 0;

// DOM content loaded event
document.addEventListener('DOMContentLoaded', function() {
    // Check which page we're on
    const currentPath = window.location.pathname;
    
    // Initialize page-specific functionality
    if (currentPath.includes('index.html') || currentPath === '/') {
        initHomePage();
    } else if (currentPath.includes('hospital.html')) {
        initHospitalPage();
    } else if (currentPath.includes('doctor.html')) {
        initDoctorPage();
    }
});

// Home page initialization
function initHomePage() {
    const searchButton = document.getElementById('searchButton');
    const hospitalSearch = document.getElementById('hospitalSearch');
    
    if (searchButton && hospitalSearch) {
        searchButton.addEventListener('click', function() {
            searchHospitals(hospitalSearch.value);
        });
        
        hospitalSearch.addEventListener('keyup', function(event) {
            if (event.key === 'Enter') {
                searchHospitals(hospitalSearch.value);
            }
        });
    }
    
    // Load hospitals list
    fetchHospitals();
}

// Hospital page initialization
function initHospitalPage() {
    // Get hospital ID from URL
    const urlParams = new URLSearchParams(window.location.search);
    const hospitalId = urlParams.get('id');
    
    if (hospitalId) {
        // Load hospital details
        fetchHospitalDetails(hospitalId);
        
        // Load doctors for this hospital
        fetchDoctorsForHospital(hospitalId);
        
        // Load categories data
        fetchBestRatedDoctors(hospitalId);
        fetchWorstRatedDoctors(hospitalId);
        fetchMostRatedDoctors(hospitalId);
        fetchLatestComments(hospitalId);
        
        // Initialize doctor search
        const doctorSearch = document.getElementById('doctorSearch');
        if (doctorSearch) {
            doctorSearch.addEventListener('keyup', function() {
                filterDoctorsList(this.value);
            });
        }
    } else {
        // Handle error - no hospital ID provided
        document.body.innerHTML = '<div class="container"><h2>Error: Hospital not found</h2><p>Please return to the <a href="index.html">home page</a>.</p></div>';
    }
}

// Doctor page initialization
function initDoctorPage() {
    // Get doctor ID from URL
    const urlParams = new URLSearchParams(window.location.search);
    const doctorId = urlParams.get('id');
    
    if (doctorId) {
        // Load doctor details
        fetchDoctorDetails(doctorId);
        
        // Load doctor comments
        fetchDoctorComments(doctorId);
        
        // Initialize rating stars
        initRatingStars();
        
        // Initialize comment form
        initCommentForm(doctorId);
        
        // Initialize like/dislike buttons
        initLikeDislikeButtons();
    } else {
        // Handle error - no doctor ID provided
        document.body.innerHTML = '<div class="container"><h2>Error: Doctor not found</h2><p>Please return to the <a href="index.html">home page</a>.</p></div>';
    }
}

// API functions (Will be replaced with actual API calls)
function fetchHospitals() {
    // This would be an API call in a real application
    console.log('Fetching hospitals...');
    // For demo purposes, we'll use the static HTML
}

function fetchHospitalDetails(hospitalId) {
    // This would be an API call in a real application
    console.log(`Fetching details for hospital ID: ${hospitalId}`);
    
    // For demo purposes, set a placeholder name
    const hospitalName = document.getElementById('hospitalName');
    if (hospitalName) {
        hospitalName.textContent = `Hospital #${hospitalId}`;
    }
}

function fetchDoctorsForHospital(hospitalId) {
    // This would be an API call in a real application
    console.log(`Fetching doctors for hospital ID: ${hospitalId}`);
    // For demo purposes, we'll use the static HTML
}

function fetchBestRatedDoctors(hospitalId) {
    // This would be an API call in a real application
    console.log(`Fetching best rated doctors for hospital ID: ${hospitalId}`);
    
    // For demo purposes, add some placeholder data
    const bestRatedDoctors = document.getElementById('bestRatedDoctors');
    if (bestRatedDoctors) {
        bestRatedDoctors.innerHTML = `
            <li>Dr. Ana Kovač - 4.9 ★★★★★</li>
            <li>Dr. Janez Novak - 4.8 ★★★★★</li>
            <li>Dr. Maja Horvat - 4.7 ★★★★★</li>
        `;
    }
}

function fetchWorstRatedDoctors(hospitalId) {
    // This would be an API call in a real application
    console.log(`Fetching worst rated doctors for hospital ID: ${hospitalId}`);
    
    // For demo purposes, add some placeholder data
    const worstRatedDoctors = document.getElementById('worstRatedDoctors');
    if (worstRatedDoctors) {
        worstRatedDoctors.innerHTML = `
            <li>Dr. Matej Kovačič - 2.1 ★★☆☆☆</li>
            <li>Dr. Nina Vidmar - 2.3 ★★☆☆☆</li>
            <li>Dr. Tomaž Kranjc - 2.5 ★★★☆☆</li>
        `;
    }
}

function fetchMostRatedDoctors(hospitalId) {
    // This would be an API call in a real application
    console.log(`Fetching most rated doctors for hospital ID: ${hospitalId}`);
    
    // For demo purposes, add some placeholder data
    const mostRatedDoctors = document.getElementById('mostRatedDoctors');
    if (mostRatedDoctors) {
        mostRatedDoctors.innerHTML = `
            <li>Dr. Janez Novak - 42 ratings</li>
            <li>Dr. Ana Kovač - 38 ratings</li>
            <li>Dr. Maja Horvat - 27 ratings</li>
        `;
    }
}

function fetchLatestComments(hospitalId) {
    // This would be an API call in a real application
    console.log(`Fetching latest comments for hospital ID: ${hospitalId}`);
    
    // For demo purposes, add some placeholder data
    const latestComments = document.getElementById('latestComments');
    if (latestComments) {
        latestComments.innerHTML = `
            <li>Great experience with Dr. Kovač - Marko, 2 hours ago</li>
            <li>Dr. Novak was very helpful - Jana, 1 day ago</li>
            <li>Long waiting time, but good service - Luka, 2 days ago</li>
        `;
    }
}

function fetchDoctorDetails(doctorId) {
    // This would be an API call in a real application
    console.log(`Fetching details for doctor ID: ${doctorId}`);
    
    // For demo purposes, set placeholder data
    const doctorName = document.getElementById('doctorName');
    const doctorHospital = document.getElementById('doctorHospital');
    const averageRating = document.getElementById('averageRating');
    const ratingCount = document.getElementById('ratingCount');
    
    if (doctorName) doctorName.textContent = `Dr. Example Doctor #${doctorId}`;
    if (doctorHospital) doctorHospital.textContent = 'University Medical Centre Ljubljana';
    if (averageRating) averageRating.textContent = '4.5';
    if (ratingCount) ratingCount.textContent = '27';
    
    // Update star display
    updateStarDisplay(document.querySelector('.doctor-rating .stars'), 4.5);
}

function fetchDoctorComments(doctorId) {
    // This would be an API call in a real application
    console.log(`Fetching comments for doctor ID: ${doctorId}`);
    // For demo purposes, we'll use the static HTML
}

// Helper functions
function searchHospitals(query) {
    // This would filter the hospitals list based on the search query
    console.log(`Searching for hospitals with query: ${query}`);
    
    // For demo purposes, we'll just log the query
    // In a real application, this would filter the list or make an API call
}

function filterDoctorsList(query) {
    // This would filter the doctors list based on the search query
    console.log(`Filtering doctors with query: ${query}`);
    
    // For demo purposes, we'll just log the query
    // In a real application, this would filter the list
}

function initRatingStars() {
    const stars = document.querySelectorAll('.rating-stars i');
    
    stars.forEach(star => {
        star.addEventListener('mouseover', function() {
            const rating = parseInt(this.dataset.rating);
            highlightStars(rating);
        });
        
        star.addEventListener('mouseout', function() {
            highlightStars(currentRating);
        });
        
        star.addEventListener('click', function() {
            currentRating = parseInt(this.dataset.rating);
            highlightStars(currentRating);
            // Here you would typically send this rating to the server
            console.log(`Selected rating: ${currentRating}`);
        });
    });
}

function highlightStars(rating) {
    const stars = document.querySelectorAll('.rating-stars i');
    
    stars.forEach(star => {
        const starRating = parseInt(star.dataset.rating);
        if (starRating <= rating) {
            star.classList.remove('far');
            star.classList.add('fas');
        } else {
            star.classList.remove('fas');
            star.classList.add('far');
        }
    });
}

function updateStarDisplay(container, rating) {
    if (!container) return;
    
    // Clear existing stars
    container.innerHTML = '';
    
    // Add filled stars
    for (let i = 1; i <= Math.floor(rating); i++) {
        const star = document.createElement('i');
        star.classList.add('fas', 'fa-star');
        container.appendChild(star);
    }
    
    // Add half star if needed
    if (rating % 1 >= 0.5) {
        const halfStar = document.createElement('i');
        halfStar.classList.add('fas', 'fa-star-half-alt');
        container.appendChild(halfStar);
    }
    
    // Add empty stars
    const emptyStarsCount = 5 - Math.ceil(rating);
    for (let i = 0; i < emptyStarsCount; i++) {
        const emptyStar = document.createElement('i');
        emptyStar.classList.add('far', 'fa-star');
        container.appendChild(emptyStar);
    }
}

function initCommentForm(doctorId) {
    const addCommentBtn = document.getElementById('addCommentBtn');
    const commentForm = document.getElementById('commentForm');
    const cancelComment = document.getElementById('cancelComment');
    const commentSubmissionForm = document.getElementById('commentSubmissionForm');
    
    if (addCommentBtn && commentForm) {
        addCommentBtn.addEventListener('click', function() {
            commentForm.style.display = 'block';
            addCommentBtn.style.display = 'none';
        });
    }
    
    if (cancelComment) {
        cancelComment.addEventListener('click', function() {
            commentForm.style.display = 'none';
            addCommentBtn.style.display = 'block';
            // Reset form
            commentSubmissionForm.reset();
            currentRating = 0;
            highlightStars(0);
        });
    }
    
    if (commentSubmissionForm) {
        commentSubmissionForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form values
            const nickname = document.getElementById('nickname').value || 'Anonymous';
            const email = document.getElementById('email').value;
            const comment = document.getElementById('comment').value;
            
            // Validate rating
            if (currentRating === 0) {
                alert('Please select a rating before submitting your comment.');
                return;
            }
            
            // Submit comment (this would be an API call in a real application)
            submitComment(doctorId, nickname, email, comment, currentRating);
            
            // Hide form and show button
            commentForm.style.display = 'none';
            addCommentBtn.style.display = 'block';
            
            // Reset form
            commentSubmissionForm.reset();
            currentRating = 0;
            highlightStars(0);
        });
    }
}

function submitComment(doctorId, nickname, email, comment, rating) {
    // This would be an API call in a real application
    console.log(`Submitting comment for doctor ID: ${doctorId}`);
    console.log(`Nickname: ${nickname}, Email: ${email}, Rating: ${rating}`);
    console.log(`Comment: ${comment}`);
    
    // For demo purposes, we'll add the comment to the page
    const commentsContainer = document.getElementById('comments');
    if (commentsContainer) {
        const newComment = document.createElement('div');
        newComment.className = 'comment';
        
        const currentDate = new Date().toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
        
        newComment.innerHTML = `
            <div class="comment-header">
                <span class="comment-author">${nickname}</span>
                <span class="comment-date">${currentDate}</span>
                <div class="comment-rating">
                    ${getStarIcons(rating)}
                </div>
            </div>
            <div class="comment-content">
                ${comment}
            </div>
            <div class="comment-actions">
                <button class="like-btn"><i class="far fa-thumbs-up"></i> <span>0</span></button>
                <button class="dislike-btn"><i class="far fa-thumbs-down"></i> <span>0</span></button>
            </div>
        `;
        
        // Add the new comment at the top
        commentsContainer.insertBefore(newComment, commentsContainer.firstChild);
        
        // Initialize like/dislike buttons for the new comment
        initLikeDislikeButtonsFor(newComment);
    }
}

function getStarIcons(rating) {
    let stars = '';
    for (let i = 1; i <= 5; i++) {
        if (i <= rating) {
            stars += '<i class="fas fa-star"></i>';
        } else {
            stars += '<i class="far fa-star"></i>';
        }
    }
    return stars;
}

function initLikeDislikeButtons() {
    const comments = document.querySelectorAll('.comment');
    comments.forEach(comment => {
        initLikeDislikeButtonsFor(comment);
    });
}

function initLikeDislikeButtonsFor(comment) {
    const likeBtn = comment.querySelector('.like-btn');
    const dislikeBtn = comment.querySelector('.dislike-btn');
    
    if (likeBtn) {
        likeBtn.addEventListener('click', function() {
            if (this.classList.contains('active')) {
                // Unlike
                this.classList.remove('active');
                const countSpan = this.querySelector('span');
                countSpan.textContent = parseInt(countSpan.textContent) - 1;
            } else {
                // Like
                this.classList.add('active');
                const countSpan = this.querySelector('span');
                countSpan.textContent = parseInt(countSpan.textContent) + 1;
                
                // Remove dislike if present
                if (dislikeBtn.classList.contains('active')) {
                    dislikeBtn.classList.remove('active');
                    const dislikeCountSpan = dislikeBtn.querySelector('span');
                    dislikeCountSpan.textContent = parseInt(dislikeCountSpan.textContent) - 1;
                }
            }
            
            // In a real application, you would send this to the server
            console.log('Like button clicked');
        });
    }
    
    if (dislikeBtn) {
        dislikeBtn.addEventListener('click', function() {
            if (this.classList.contains('active')) {
                // Undislike
                this.classList.remove('active');
                const countSpan = this.querySelector('span');
                countSpan.textContent = parseInt(countSpan.textContent) - 1;
            } else {
                // Dislike
                this.classList.add('active');
                const countSpan = this.querySelector('span');
                countSpan.textContent = parseInt(countSpan.textContent) + 1;
                
                // Remove like if present
                if (likeBtn.classList.contains('active')) {
                    likeBtn.classList.remove('active');
                    const likeCountSpan = likeBtn.querySelector('span');
                    likeCountSpan.textContent = parseInt(likeCountSpan.textContent) - 1;
                }
            }
            
            // In a real application, you would send this to the server
            console.log('Dislike button clicked');
        });
    }
}
