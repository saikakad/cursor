/**
 * USER AUTHENTICATION SYSTEM
 * Handles user registration, login, and session management
 */

// User Database Class
class UserDatabase {
    constructor() {
        // Load users from localStorage or initialize empty array
        this.users = JSON.parse(localStorage.getItem('scholarHub_users')) || [];
    }

    // Save users to localStorage
    save() {
        localStorage.setItem('scholarHub_users', JSON.stringify(this.users));
    }

    // Register new user
    register(userData) {
        // Check if email already exists
        if (this.users.find(u => u.email === userData.email)) {
            return { success: false, message: 'Email already registered!' };
        }

        // Create new user object
        const newUser = {
            id: Date.now(),
            name: userData.name,
            grade: parseInt(userData.grade),
            board: userData.board,
            state: userData.state,
            email: userData.email,
            password: userData.password, // In real app, this should be hashed
            bookmarks: [],
            registeredDate: new Date().toISOString()
        };

        // Add to database and save
        this.users.push(newUser);
        this.save();

        return { success: true, message: 'Account created successfully!', user: newUser };
    }

    // Login user
    login(email, password) {
        const user = this.users.find(u => u.email === email && u.password === password);
        
        if (user) {
            return { success: true, user: user };
        }
        
        return { success: false, message: 'Invalid email or password!' };
    }

    // Get user by ID
    getUserById(id) {
        return this.users.find(u => u.id === id);
    }

    // Update user bookmarks
    updateBookmarks(userId, bookmarks) {
        const user = this.users.find(u => u.id === userId);
        if (user) {
            user.bookmarks = bookmarks;
            this.save();
        }
    }
}

// Initialize user database
const userDB = new UserDatabase();

// Current logged-in user
let currentUser = null;
