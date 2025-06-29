import { useEffect, useState } from 'react';

const SpaceGame = () => {
    // Game state
    const [gameOver, setGameOver] = useState(false);
    const [score, setScore] = useState(0);
    const [highScore, setHighScore] = useState(localStorage.getItem('highScore') || 0);
    const [spaceshipPosition, setSpaceshipPosition] = useState(250); // Starting position of spaceship
    const [asteroids, setAsteroids] = useState([]);

    // Game settings
    const canvasWidth = 330; // Width of the canvas
    const canvasHeight = 400; // Height of the canvas
    const asteroidSpeed = 5; // Speed at which asteroids fall
    const spaceshipWidth = 50; // Width of the spaceship

    // Movement control
    const moveLeft = () => {
        setSpaceshipPosition((prev) => Math.max(prev - 20, 0)); // Prevent moving out of bounds on left
    };

    const moveRight = () => {
        setSpaceshipPosition((prev) => Math.min(prev + 20, canvasWidth - spaceshipWidth)); // Prevent moving out of bounds on right
    };

    // Listen to key presses to move the spaceship
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === 'ArrowLeft') moveLeft();
            if (e.key === 'ArrowRight') moveRight();
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, []);

    // Generate and move asteroids
    useEffect(() => {
        if (gameOver) return;

        const interval = setInterval(() => {
            setAsteroids((prevAsteroids) => {
                // Move existing asteroids
                const newAsteroids = prevAsteroids.map((asteroid) => ({
                    ...asteroid,
                    y: asteroid.y + asteroidSpeed, // Move asteroids down
                }));

                // Check if spaceship hits any asteroid
                newAsteroids.forEach((asteroid) => {
                    const spaceshipLeft = spaceshipPosition;
                    const spaceshipRight = spaceshipPosition + spaceshipWidth; // spaceship width
                    const asteroidLeft = asteroid.x;
                    const asteroidRight = asteroid.x + 30; // asteroid width

                    if (
                        asteroid.y >= canvasHeight - 30 && // asteroid is near the bottom
                        asteroid.y <= canvasHeight - 10 && // asteroid is near the bottom
                        ((asteroidLeft >= spaceshipLeft && asteroidLeft <= spaceshipRight) ||
                            (asteroidRight >= spaceshipLeft && asteroidRight <= spaceshipRight) ||
                            (asteroidLeft <= spaceshipLeft && asteroidRight >= spaceshipRight))
                    ) {
                        setGameOver(true); // End game if asteroid hits spaceship
                        clearInterval(interval);
                    }
                });

                // Remove off-screen asteroids
                const updatedAsteroids = newAsteroids.filter((asteroid) => asteroid.y < canvasHeight);

                // Add new asteroid every interval
                if (Math.random() < 0.05) {
                    updatedAsteroids.push({
                        x: Math.random() * (canvasWidth - 30), // random x position within canvas width (30px is the asteroid width)
                        y: -30, // start above the screen
                    });
                }

                // Count asteroids passing the spaceship as score
                newAsteroids.forEach((asteroid) => {
                    if (asteroid.y >= canvasHeight) {
                        setScore((prev) => prev + 1); // Increase score by 1 for each asteroid that passes
                    }
                });

                return updatedAsteroids;
            });
        }, 100);

        return () => clearInterval(interval);
    }, [gameOver, spaceshipPosition]);

    // Update high score if necessary
    useEffect(() => {
        if (score > highScore) {
            setHighScore(score);
            localStorage.setItem('highScore', score); // Save high score in local storage
        }
    }, [score, highScore]);

    // Reset the game
    const resetGame = () => {
        setSpaceshipPosition(250); // Reset spaceship position to center
        setScore(0); // Reset score
        setAsteroids([]); // Clear existing asteroids
        setGameOver(false); // Reset game over state
    };

    return (
        <div
            className="game-container"
            style={{
                position: 'relative',
                height: `${canvasHeight}px`,
                width: `${canvasWidth}px`, // Set the width of the canvas to fit the popup
                backgroundColor: 'black',
                borderRadius: '12px',
                overflow: 'hidden', // Prevent asteroids from going out of the canvas
            }}
        >
            {/* Game Over state */}
            {gameOver ? (
                <div
                    style={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        color: 'white',
                        fontSize: '30px',
                        textAlign: 'center',
                    }}
                >
                    <p>Game Over!</p>
                    <p>Score: {score}</p>
                    <p>High Score: {highScore}</p>
                    <button
                        onClick={resetGame}
                        style={{
                            padding: '10px 20px',
                            backgroundColor: '#FFD369',
                            border: 'none',
                            cursor: 'pointer',
                            fontSize: '18px',
                            borderRadius: '8px',
                        }}
                    >
                        Restart
                    </button>
                </div>
            ) : (
                <div>
                    <p style={{ color: '#FFD369', textAlign: 'center', fontSize: '20px' }}>
                        Score: {score} | High Score: {highScore}
                    </p>
                </div>
            )}

            {/* Spaceship */}
            <div
                style={{
                    position: 'absolute',
                    bottom: '20px',
                    left: `${spaceshipPosition}px`,
                    width: `${spaceshipWidth}px`,
                    height: '50px',
                    backgroundColor: 'limegreen',
                    clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)',
                }}
            ></div>

            {/* Asteroids */}
            {asteroids.map((asteroid, index) => (
                <div
                    key={index}
                    style={{
                        position: 'absolute',
                        top: `${asteroid.y}px`,
                        left: `${asteroid.x}px`,
                        width: '30px',
                        height: '30px',
                        backgroundColor: 'gray',
                        borderRadius: '50%',
                    }}
                ></div>
            ))}
        </div>
    );
};

export default SpaceGame;
