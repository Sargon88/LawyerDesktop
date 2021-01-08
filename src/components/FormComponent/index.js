import React, { useState } from "react";
import { Row, Col, Form } from 'react-bootstrap';
import * as FormModel from "../../config/forms";


const FormComponent = ({ entity, customerModel }) => {
	const layout = entity.layouts.edit;
	const components = FormModel.Components;

	return (
		<>		
		{
			layout.map((lys, j) => {
				return(
					<Row>
						{
							lys.map((l, i) => {
								var metadata = FormModel.Person.metadatas[l.name].edit;
                                var attributes = FormModel.Person.attributes[l.name];
                                
                                return(
                                    attributes.type == "string" ?

                                            <Col xs={l.size} 
                                                key={{j}+"_"+{i}} 
                                                className={metadata['visible'] ? "" : "ld_hideelement"}  >
                                                    String: {metadata['label']}
                                            </Col>

                                    : attributes.type == "enumeration" ?

                                            <Col xs={l.size} 
                                                key={{j}+"_"+{i}} 
                                                className={metadata['visible'] ? "" : "ld_hideelement"}  >
                                                    Enumeration: {metadata['label']}
                                            </Col>
                                    
                                    : attributes.type == "component" ?
            
                                            <Col xs={l.size} 
                                                key={{j}+"_"+{i}} 
                                                className={metadata['visible'] ? "" : "ld_hideelement"}  >
                                                    Component: {metadata['label']}
                                            </Col>
                                    
                                    :
                                    ""
                                );
							})
						}
					</Row>
				)
			})
		}

		</>
	);

	
};

export default FormComponent;