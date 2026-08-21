CREATE DATABASE IF NOT EXISTS quiz_db;
USE quiz_db;

CREATE TABLE IF NOT EXISTS players (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS questions (
    id INT AUTO_INCREMENT PRIMARY KEY,
    question VARCHAR(255) NOT NULL,
    option_a VARCHAR(255) NOT NULL,
    option_b VARCHAR(255) NOT NULL,
    option_c VARCHAR(255) NOT NULL,
    option_d VARCHAR(255) NOT NULL,
    correct_answer VARCHAR(255) NOT NULL
);

CREATE TABLE IF NOT EXISTS scores (
    id INT AUTO_INCREMENT PRIMARY KEY,
    player_id INT NOT NULL,
    score INT NOT NULL,
    total_questions INT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (player_id) REFERENCES players(id)
);

INSERT INTO questions
(question, option_a, option_b, option_c, option_d, correct_answer)
VALUES
('Which keyword is used to define a function in Python?', 'func', 'define', 'def', 'function', 'def'),
('Which data type stores key-value pairs?', 'list', 'tuple', 'dictionary', 'set', 'dictionary'),
('Which symbol starts a Python comment?', '//', '#', '--', '/*', '#'),
('Which function displays output in Python?', 'echo()', 'display()', 'print()', 'write()', 'print()'),
('Which keyword is used for a loop over a sequence?', 'repeat', 'for', 'loop', 'iterate', 'for'),
('Which value represents a Boolean false value?', '0', 'False', 'None', 'Empty', 'False'),
('Which file extension is normally used for Python source files?', '.java', '.py', '.js', '.python', '.py'),
('Which collection is ordered and changeable?', 'tuple', 'set', 'list', 'frozenset', 'list'),
('Which keyword handles exceptions?', 'catch', 'except', 'error', 'handle', 'except'),
('What is used to install Python packages?', 'npm', 'pip', 'apt-only', 'gem', 'pip');
