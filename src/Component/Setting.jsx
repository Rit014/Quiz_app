import React from 'react';

const Setting = ({numQuestions, setNumQuestions, difficulty, setDifficulty, category, setCategory }) => {
    return (
        <>
            <div>
                <h2>Settings</h2>
                <form>
                    <label>
                        Difficulty:
                        <select value={difficulty} onChange={(e) => setDifficulty(e.target.value)}>
                            <option value="easy">Easy</option>
                            <option value="medium">Medium</option>
                            <option value="hard">Hard</option>
                        </select>
                    </label>
                    <br />
                    <label>
                        Category:
                        <select value={category} onChange={(e) => setCategory(e.target.value)}>
                            <option value="any">Any</option>
                            <option value="history">History</option>
                            <option value="science">Science</option>
                            <option value="sports">Sports</option>
                        </select>
                    </label>
                    <br />
                    <label>
                        Number of Questions:
                        <input
                            type="number"
                            value={numQuestions}
                            onChange={(e) => setNumQuestions(e.target.value)}
                            min="1"
                            max="50"
                        />
                    </label>
                </form>
            </div>
        </>
    )
}

export default Setting
