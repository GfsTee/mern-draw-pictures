import { useState, useEffect } from 'react'

const GameAdd = () => {
    const [fields, setFields] = useState({
        rows: "", cols: ""
    })
    const [divs, setDivs] = useState([])
    const handleFields = (target) => {
        setFields(prev => {
            return {
                ...prev,
                [target.name]: target.value * 1
            }
        })
    }
    const handleActive = (target) => {
        console.log(target.dataset.active)
        // finding the match
        const res = divs.filter(ele => ele.col == target.dataset.col && ele.row == target.dataset.row)
        res[0].active = !res[0].active
        console.log(res[0])
        // finding the rest
        const rest = divs.filter(ele => ele.col != target.dataset.col || ele.row != target.dataset.row)
        // console.log(res)
        // console.log(rest)
        let temp = [
            ...res,
            ...rest
        ]
        // Sorting by col AND row!
        temp.sort((a, b) => (a.row - b.row) || (a.col - b.col))
        // temp.sort((a, b) => a.row - b.row)
        // console.log(temp)
        setDivs(() => temp)
    }
    useEffect(() => {
        setDivs([])
        for (let i = 0; i < fields.rows; i++) {
            for (let j = 0; j < fields.cols; j++) {
                setDivs(prev =>
                    [...prev,
                    {
                        row: i,
                        col: j,
                        active: false,
                    }
                    ])
            }
        }
    }, [fields]);
    return (
        <>
            <label htmlFor="cols">Colums</label>
            <input type="number" id="cols" name="cols" min="1" max="25" value={fields.cols} onChange={({ target }) => handleFields(target)} />
            <label htmlFor="rows">Rows</label>
            <input type="number" id="rows" name="rows" min="1" max="25" value={fields.rows} onChange={({ target }) => handleFields(target)} />
            <main style={{
                display: 'grid',
                gridTemplateColumns: `repeat(${fields.cols}, 25px)`,
                gridAutoRows: '25px',
                gap: '5px'
            }}>
                {divs.map((ele, i) => <div
                    key={i}
                    style={{ background: ele.active ? `#000` : `#ddd` }}
                    data-col={ele.col}
                    data-row={ele.row}
                    data-active={ele.active}
                    onClick={({ target }) => handleActive(target)}></div>)}
                {/* {divs.map(ele => <div style={{ background: `#333` }}>Col: {ele.col}, Row: {ele.row}</div>)} */}
            </main>
        </>
    );
}

export default GameAdd;