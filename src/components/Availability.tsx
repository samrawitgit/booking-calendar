import React, { useState } from "react";
import { Formik, Form, Field } from "formik";
import {useRecoilValue} from 'recoil'
import { classesState } from "src/recoil/classes";

const Availability = () => {
  const classes = useRecoilValue(classesState)
	const [selected, setSelected] = useState(classes[0].id);

	return (
		<>
			<div tabIndex={0} className="collapse collapse-arrow">
				<input type="checkbox" />
				<div className="collapse-title text-xl font-medium">Availability</div>
				<div className="collapse-content">
					<Formik
						initialValues={{ picked: selected, options: classes }}
						onSubmit={() => {}}
					>
						<Form className="form-control">
							<div role="group">
								{classes.map((option, iO) => (
									<label key={`avb-opt-${iO}`} className="label cursor-pointer">
										<Field
											type="radio"
											name="picked"
											value="option.id"
											className="radio checked:bg-red-500"
											checked={selected === option.id}
											onClick={() => setSelected(option.id)}
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
