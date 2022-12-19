import React, { useState } from "react";
import { Formik, Form, Field } from "formik";

const Availability = ({ categories, setCategories }) => {
	const [selected, setSelected] = useState(categories[0].id);

	const onSelect = (category) => {
		setSelected(category.id);
		let newClasses = [...categories];
		const oldSelectedId = categories.findIndex((group) => group.selected);
		const newSelectedId = categories.findIndex(
			(group) => group.id === category.id,
		);
		newClasses[oldSelectedId] = {
			...newClasses[oldSelectedId],
			selected: false,
		};
		newClasses[newSelectedId] = {
			...newClasses[newSelectedId],
			selected: true,
		};
		setCategories(newClasses);
	};

	return (
		<>
			<div tabIndex={0} className="collapse collapse-arrow">
				<input type="checkbox" />
				<div className="collapse-title text-xl font-medium">Availability</div>
				<div className="collapse-content">
					<Formik
						initialValues={{ picked: selected, options: categories }}
						onSubmit={() => {}}
					>
						<Form className="form-control">
							<div role="group">
								{categories.map((option, iO) => (
									<label key={`avb-opt-${iO}`} className="label cursor-pointer">
										<Field
											type="radio"
											name="picked"
											value="option.id"
											className="radio checked:bg-red-500"
											checked={selected === option.id}
											onClick={() => onSelect(option)}
										/>
										<span className="label-text">{option.title}</span>
									</label>
								))}
							</div>
						</Form>
					</Formik>
				</div>
			</div>
		</>
	);
};

export default Availability;
