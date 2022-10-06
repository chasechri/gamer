import React from 'react';

export default function Filters({
	handleRank,
	handleHours,
	handlePlatform,
	handleComms,
	clearFilters,
}) {
	const ranks = ['Silver', 'Gold', 'Platinum', 'Predator'];
	const hours = ['AM', 'PM'];
	const comms = ['Yes', 'No'];
	const platform = ['PC', 'PS4', 'PS5', 'XBOX'];
	return (
		<div id='filters' className='flex'>
			<h4 className='mx-5'></h4>
			{/* <button onClick={clearFilters}>Clear Filters</button> */}
			<div className='flex border-black border-2 mx-1 w-5/11'>
				{ranks.map((r, i) => {
					return (
						<div id='filter-group' className='flex-col px-1 mx-1' key={i}>
							<h2>{r}</h2>
							<input
								id='checkbox'
								value={r}
								type='checkbox'
								onChange={handleRank}
								className='form-checkbox rounded text-pink-500'
							/>
						</div>
					);
				})}
			</div>
			<div className='flex border-black border-2 mx-1'>
				{hours.map((h, index) => {
					return (
						<div key={index} id='filter-group' className='flex-col px-5 mx-1'>
							<h2>{h}</h2>
							<input value={h} type='checkbox' onChange={handleHours} />
						</div>
					);
				})}
			</div>
			<div className='flex border-black border-2 mx-1'>
				{comms.map((c, index) => {
					return (
						<div key={index} id='filter-group' className='flex-col px-5 mx-1'>
							<h2>{c}</h2>
							<input value={c} type='checkbox' onChange={handleComms} />
						</div>
					);
				})}
			</div>
			<div className='flex border-black border-2 mx-1'>
				{platform.map((p, index) => {
					return (
						<div key={index} id='filter-group' className='flex-col px-5 mx-1'>
							<h2>{p}</h2>
							<input value={p} type='checkbox' onChange={handlePlatform} />
						</div>
					);
				})}
			</div>
		</div>
	);
}
