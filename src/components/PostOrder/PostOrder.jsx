import React from 'react';
import './PostOrder.css';

//component that sorts posts by date (newest to oldest - or - oldest to newest)
export default function PostSorter({ sortOrder, setSortOrder }) {
	return (
		<section className="post-sorter">
			<label htmlFor="sort" className="sr-only">
				Sort by date:
			</label>
			<select
				id="sort"
				value={sortOrder}
				onChange={(e) => setSortOrder(e.target.value)}>
				<option value="descending" className="post-sorter__desc">
					Newest first
				</option>
				<option value="ascending" className="post-sorter__asc">
					Oldest first
				</option>
			</select>
		</section>
	);
}
