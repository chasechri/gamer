import React from 'react'


export default function Filters({handleRank, handleHours, handlePlatform, handleComms, clearFilters}) {
    const ranks = ['pubs', 'gold', 'plat', 'master', 'pred']
	const hours = ['AM', 'PM']
	const comms = ['yes', 'no', 'ping']
	const platform = ['PC', 'PS4', 'PS5', 'XBOX']
    return (
    <div className='flex flex-row mx-1'>
	    <h4 className='mx-5'>Filters</h4>
        {/* <button onClick={clearFilters}>Clear Filters</button> */}
            {ranks.map((r, i) => {
                return(
                    <div key={i}>
                        <input
                            id='checkbox'
                            value={r}
                            type='checkbox'
                            
                            onChange={handleRank}
                        />
                        <span>{r}</span>
                    </div>
            )
        })}
        {hours.map((h, index) => {
                return(
                    <div key={index}>
                        <input
                            value={h}
                            type='checkbox'
                            onChange={handleHours}
                        />
                        <span>{h}</span>
                    </div>
            )
        })}
        {comms.map((c, index) => {
                return(
                    <div key={index}>
                        <input
                            value={c}
                            type='checkbox'
                            onChange={handleComms}
                        />
                        <span>{c}</span>
                    </div>
            )
        })}
        {platform.map((p, index) => {
                return(
                    <div key={index}>
                        <input
                            value={p}
                            type='checkbox'
                            onChange={handlePlatform}
                        />
                        <span>{p}</span>
                    </div>
            )
        })}
        </div>
  )
}


