-- Users table
CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  email VARCHAR(255) UNIQUE NOT NULL,
  password_hash VARCHAR(255) NOT NULL,
  first_name VARCHAR(100),
  last_name VARCHAR(100),
  bio TEXT,
  profile_image_url VARCHAR(500),
  role VARCHAR(20) DEFAULT 'author' CHECK (role IN ('author', 'reader', 'admin', 'moderator')),
  is_active BOOLEAN DEFAULT TRUE,
  email_verified BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Categories table
CREATE TABLE categories (
  id SERIAL PRIMARY KEY,
  name VARCHAR(100) UNIQUE NOT NULL,
  slug VARCHAR(100) UNIQUE NOT NULL,
  description TEXT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Essays table
CREATE TABLE essays (
  id SERIAL PRIMARY KEY,
  author_id INTEGER NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  title VARCHAR(255) NOT NULL,
  content TEXT NOT NULL,
  category_id INTEGER REFERENCES categories(id),
  status VARCHAR(20) DEFAULT 'draft' CHECK (status IN ('draft', 'submitted', 'under_review', 'revision_requested', 'accepted', 'published', 'rejected')),
  excerpt VARCHAR(500),
  featured_image_url VARCHAR(500),
  view_count INTEGER DEFAULT 0,
  published_at TIMESTAMP,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Review submissions table
CREATE TABLE submissions (
  id SERIAL PRIMARY KEY,
  essay_id INTEGER NOT NULL REFERENCES essays(id) ON DELETE CASCADE,
  submitted_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  reviewed_by INTEGER REFERENCES users(id),
  review_decision VARCHAR(20) CHECK (review_decision IN ('approved', 'rejected', 'revision_requested')),
  reviewer_comments TEXT,
  reviewed_at TIMESTAMP,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Comments table
CREATE TABLE comments (
  id SERIAL PRIMARY KEY,
  essay_id INTEGER NOT NULL REFERENCES essays(id) ON DELETE CASCADE,
  author_id INTEGER NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  content TEXT NOT NULL,
  parent_comment_id INTEGER REFERENCES comments(id) ON DELETE CASCADE,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Indexes for performance
CREATE INDEX idx_essays_author_id ON essays(author_id);
CREATE INDEX idx_essays_category_id ON essays(category_id);
CREATE INDEX idx_essays_status ON essays(status);
CREATE INDEX idx_essays_published_at ON essays(published_at DESC);
CREATE INDEX idx_submissions_essay_id ON submissions(essay_id);
CREATE INDEX idx_comments_essay_id ON comments(essay_id);
CREATE INDEX idx_comments_author_id ON comments(author_id);
CREATE INDEX idx_users_email ON users(email);
