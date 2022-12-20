import React from "react";

const Navbar = () => {
	return (
		<>
			<div className="navbar bg-base-100">
				<a className="btn bg-green border-green normal-case text-xl hover:bg-bg-color hover:text-green hover:border-green hover:border-2">Create Availability</a>
				<a className="btn btn-ghost normal-case text-xl">Create Event</a>
			</div>
		</>
	);
};

export default Navbar;
