/**
 * MAIN APPLICATION LOGIC
 * Handles UI rendering, event listeners, and app initialization
 */

/**
 * Render scholarship cards in the grid
 */
function renderScholarships(scholarships) {
    const grid = document.getElementById('examsGrid');
    
    if (scholarships.length === 0) {
        grid.innerHTML = '<div class="no-results">No scholarships found matching your criteria. Try adjusting filters.</div>';
        return;
    }

    grid.innerHTML = scholarships.map(exam => {
        const isBookmarked = currentUser && currentUser.bookmarks.includes(exam.id);
        const isUrgent = isDeadlineUrgent(exam.deadline);
        const isMatched = currentUser && 
            currentUser.grade >= exam.gradeMin && 
            currentUser.grade <= exam.gradeMax &&
            (exam.board === 'Both' || exam.board === currentUser.board);

        return `
            <div class="exam-card" data-id="${exam.id}">
                <div class="exam-header">
                    <div>
                        <h3 class="exam-name">${exam.name}</h3>
                        ${isMatched ? '<span style="color: #00ff88; font-size: 0.85rem;">✨ Matched for you</span>' : ''}
                    </div>
                    <button class="bookmark-btn ${isBookmarked ? 'bookmarked' : ''}" onclick="toggleBookmark(${exam.id})">
                        ${isBookmarked ? '⭐' : '☆'}
                    </button>
                </div>
                <p style="color: #aaa; margin-bottom: 1rem; font-size: 0.9rem;">${exam.description}</p>
                <div class="exam-detail">
                    <strong>Eligibility:</strong> Grade ${exam.gradeMin}${exam.gradeMin !== exam.gradeMax ? '-' + exam.gradeMax : ''}
                </div>
                <div class="exam-detail">
                    <strong>Board:</strong> ${exam.board}
                </div>
                <div class="exam-detail">
                    <strong>Subject:</strong> ${exam.subject}
                </div>
                <div class="exam-detail ${isUrgent ? 'deadline-urgent' : ''}">
                    <strong>Deadline:</strong> ${new Date(exam.deadline).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' })}
                    ${isUrgent ? ' ⚠️ URGENT' : ''}
                </div>
                <div class="exam-detail">
                    <strong>Reward:</strong> ${exam.reward}
                </div>
                <div class="card-actions">
                    <button class="btn-secondary" onclick="showTips(${exam.id})">📚 Prep Tips</button>
                    <button class="btn-secondary" onclick="toggleBookmark(${exam.id})">
                        ${isBookmarked ? '✓ Saved' : '💾 Save'}
                    </button>
                </div>
            </div>
        `;
    }).join('');
}

/**
 * Update dashboard statistics
 */
function updateStats() {
    if (!currentUser) return;

    const allScholarships = scholarshipDatabase;
    const matchedScholarships = getMatchedScholarships(currentUser);
    const urgentCount = getUrgentCount(allScholarships);
    const savedCount = currentUser.bookmarks.length;

    document.getElementById('totalExams').textContent = allScholarships.length;
    document.getElementById('matchedExams').textContent = matchedScholarships.length;
    document.getElementById('urgentCount').textContent = urgentCount;
    document.getElementById('savedCount').textContent = savedCount;

    // Show deadline banner if there are urgent scholarships
    const banner = document.getElementById('deadlineBanner');
    if (urgentCount > 0) {
        banner.classList.add('active');
    } else {
        banner.classList.remove('active');
    }
}

/**
 * Show preparation tips in modal
 */
function showTips(examId) {
    const exam = scholarshipDatabase.find(e => e.id === examId);
    if (!exam) return;

    const modal = document.getElementById('tipsModal');
    const title = document.getElementById('modalTitle');
    const body = document.getElementById('modalBody');

    title.textContent = exam.name + ' - Preparation Guide';
    body.innerHTML = `
        <p><strong>About:</strong> ${exam.description}</p>
        <p><strong>Reward:</strong> ${exam.reward}</p>
        <h3>📝 Preparation Tips:</h3>
        <ul>
            ${exam.preparationTips.map(tip => `<li>${tip}</li>`).join('')}
        </ul>
        <h3>💡 Expert Advice:</h3>
        <p>${exam.tips}</p>
        <h3>📅 Important Information:</h3>
        <p><strong>Deadline:</strong> ${new Date(exam.deadline).toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' })}</p>
        <p><strong>Eligibility:</strong> Grade ${exam.gradeMin} to ${exam.gradeMax}, ${exam.board} Board</p>
    `;

    modal.classList.add('active');
}

/**
 * Toggle bookmark for a scholarship
 */
function toggleBookmark(examId) {
    if (!currentUser) return;

    const index = currentUser.bookmarks.indexOf(examId);
    if (index > -1) {
        currentUser.bookmarks.splice(index, 1);
    } else {
        currentUser.bookmarks.push(examId);
    }

    // Update database
    userDB.updateBookmarks(currentUser.id, currentUser.bookmarks);
    
    // Re-render
    applyFilters();
    updateStats();
}

/**
 * Show dashboard after login
 */
function showDashboard() {
    console.log('Showing dashboard for user:', currentUser);
    
    // Hide auth screens
    document.getElementById('loginScreen').classList.add('hidden');
    document.getElementById('signupScreen').classList.add('hidden');
    
    // Show dashboard
    const dashboard = document.getElementById('dashboard');
    dashboard.style.display =
