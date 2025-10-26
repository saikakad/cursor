/**
 * FILTERING AND SEARCH ENGINE
 * Handles scholarship filtering, searching, and matching
 */

/**
 * Get scholarships matched to user profile
 */
function getMatchedScholarships(user) {
    return scholarshipDatabase.filter(exam => {
        const gradeMatch = user.grade >= exam.gradeMin && user.grade <= exam.gradeMax;
        const boardMatch = exam.board === "Both" || exam.board === user.board;
        return gradeMatch && boardMatch;
    });
}

/**
 * Filter scholarships based on multiple criteria
 */
function filterScholarships(filters = {}) {
    let filtered = scholarshipDatabase;

    // Filter by search query
    if (filters.search) {
        const query = filters.search.toLowerCase();
        filtered = filtered.filter(exam => 
            exam.name.toLowerCase().includes(query) ||
            exam.description.toLowerCase().includes(query) ||
            exam.subject.toLowerCase().includes(query)
        );
    }

    // Filter by grade range
    if (filters.gradeRange && filters.gradeRange !== 'all' && currentUser) {
        const [min, max] = filters.gradeRange.split('-').map(Number);
        filtered = filtered.filter(exam => 
            currentUser.grade >= exam.gradeMin && 
            currentUser.grade <= exam.gradeMax &&
            exam.gradeMin >= min && 
            exam.gradeMax <= max
        );
    }

    // Filter by board
    if (filters.board && filters.board !== 'all') {
        filtered = filtered.filter(exam => 
            exam.board === filters.board || exam.board === 'Both'
        );
    }

    // Filter by subject
    if (filters.subject && filters.subject !== 'all') {
        filtered = filtered.filter(exam => exam.subject === filters.subject);
    }

    // Show only matched scholarships
    if (filters.matchedOnly && currentUser) {
        filtered = getMatchedScholarships(currentUser);
    }

    return filtered;
}

/**
 * Check if deadline is urgent (within 30 days)
 */
function isDeadlineUrgent(deadline) {
    const deadlineDate = new Date(deadline);
    const today = new Date();
    const diffTime = deadlineDate - today;
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays <= 30 && diffDays > 0;
}

/**
 * Get count of urgent scholarships
 */
function getUrgentCount(scholarships) {
    return scholarships.filter(exam => isDeadlineUrgent(exam.deadline)).length;
}

/**
 * Apply all active filters and render scholarships
 */
function applyFilters() {
    const filters = {
        search: document.getElementById('searchInput').value,
        gradeRange: document.getElementById('gradeFilter').value,
        board: document.getElementById('boardFilter').value,
        subject: document.getElementById('subjectFilter').value,
        matchedOnly: document.getElementById('showMatchedOnly').classList.contains('active')
    };

    const filtered = filterScholarships(filters);
    renderScholarships(filtered);
}
