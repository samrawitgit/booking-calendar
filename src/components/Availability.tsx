import React, { useEffect, useState } from "react";
import { Formik, Form } from "formik";
import { SetterOrUpdater } from "recoil";
import { Reorder } from "framer-motion";
import { Item, Category } from "./index";

interface AvailabilityProps {
	categories: Category[], setCategories: SetterOrUpdater<Category[]>
}

const Availability = ({ categories, setCategories }: AvailabilityProps) => {
	const [isDragging, setIsDragging] = useState<boolean>(false)
	const [selected, setSelected] = useState<string>("");

	useEffect(() => {
		const selected = categories.find(cat => cat.selected)
		if (selected) {
			setSelected(selected.id)
		}
	}, [])

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
			<div tabIndex={0} className="availability collapse collapse-arrow h-full mt-[4em]">
				<input type="checkbox" />
				<div className="collapse-title text-xl font-medium">Availability</div>
				<div className="collapse-content">
					<Formik
						initialValues={{ picked: selected, options: categories }}
						onSubmit={() => { }}
					>
						<Form className="form-control">
							<div role="group">
								<Reorder.Group
									axis="y"
									values={categories}
									onReorder={(newOrder) => { setCategories(newOrder) }}
									onDragStart={() => setIsDragging(true)}
									onDragEnd={() => setIsDragging(false)}
								>
									{categories.map((option, iO) => (
										<Item key={iO} option={option} onSelect={onSelect} isDragging={isDragging}
											setIsDragging={setIsDragging} drag={false} /> /* Pass drag={true} to see drag motion (not fully functional) */
									))}
								</Reorder.Group>
							</div>
						</Form>
					</Formik>
				</div>
			</div>
		</>
	);
};

export default Availability;
