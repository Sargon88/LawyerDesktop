import React, { useState } from "react";
import { Row, Col, Form } from 'react-bootstrap';
import * as FormModel from "../../config/forms";


const FormComponent = ({ entity, customerModel, errorModel }) => {
    console.log("ENTITY", entity)
    const [error, setError] = useState({});
	const layout = entity && entity.layouts ? entity.layouts.edit : [];
    const components = FormModel.Components;

    function handleChange(event){
		const target = event.target;
    	const name = target.name;
    	const value = target.value;
/*
    	var e = error;
    	var rule = validateRules.find(x => x.field === name);

		if(rule.isMandatory && value.length === 0){
			errorModel.[name] = "Campo obbligatorio";
			
		} else if(rule.isMandatory && value.length > 0 && rule.regex && !rule.regex.test(value)){
			errorModel.[name] = "Valore non valido";

		} else {
			errorModel.[name] = "";

		} 	
*/    	  
    	customerModel[name]=value;  
/*    	customerModel.type = type;
    	e.[name] = errorModel.[name];  	

    	setError({
    		...error,
            e});
*/            
	}

	return (
		<>		
		{
			layout.map((lys, j) => {
				return(
					<Row>
						{
							lys.map((l, i) => {
								var metadata = entity.metadatas[l.name].edit;
                                var attributes = entity.attributes[l.name];
                                
                                return(
                                    <Col xs={l.size} 
                                        key={"att"+j+"_"+i} 
                                        className={metadata['visible'] ? "" : "ld_hideelement"}  >
                                            <Form.Group controlId={l.name}>
                                                <Form.Label className={metadata['visible_label'] ? "" : "ld_hideelement"} >{metadata['label']}</Form.Label>
                                    {                                                    
                                        attributes.type == "string" ?
                                            <Form.Control type="text"  
                                                name={ l.name } 
                                                onChange={ handleChange }
                                                value={ customerModel[l.name] }
                                                disabled={ !metadata['editable'] } />
                                                    
                                        : attributes.type == "enumeration" ?

                                            <Form.Control as="select" 
                                                          name={ l.name } 
                                                          onChange={ handleChange } 
                                                          disabled={ !metadata['editable'] } 
                                                          value={ customerModel[l.name] }>
                                                              <option value=""></option>
                                                              {
                                                                  attributes.enum.map((e, i) => {
                                                                      return(
                                                                        <option key={"opt" + i} value={e}>{e}</option>
                                                                      )
                                                                  })
                                                              }
                                            </Form.Control>
                                        
                                        : attributes.type == "component" ?
                                            
                                            <FormComponent entity={ components[attributes.component] } customerModel={ customerModel } errorModel={ errorModel } />
                                        
                                        : attributes.type == "biginteger" ?
                                            <Form.Control type="text"  
                                                name={ l.name } 
                                                onChange={ handleChange }
                                                value={ customerModel[l.name] }
                                                disabled={ !metadata['editable'] } />
                                        
                                        : attributes.type == "email" ?
                                            <Form.Control type="email"  
                                                name={ l.name } 
                                                onChange={ handleChange }
                                                value={ customerModel[l.name] }
                                                disabled={ !metadata['editable'] } />
                                                    
                                        :
                                        <></>
                                    }
                                        <small className="text-danger">{error[l.name]}</small>
                                        </Form.Group>
                                    </Col>
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