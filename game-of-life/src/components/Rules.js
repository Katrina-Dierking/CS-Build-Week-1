import React from 'react'

function Rules() {
    return (
        <div className = 'rules'>
            <h3>Rules of Life</h3>
            <ul>
                <li>Any live cell with fewer than two  live neighbors will die due to underpopulation</li>
                <li>Any live cell with two or three live neighbors lives onto the next generation</li>
                <li>Any live cell with greater than three live neighbors will die due to overpopulation</li>
                <li>Any dead cell with exactly three live neighbors become a live cell by reproduction</li>
            </ul>
        </div>
    );
}

export default Rules;