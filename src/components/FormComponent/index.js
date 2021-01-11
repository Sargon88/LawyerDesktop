import React, { useState } from "react";
import { Row, Col, Form } from 'react-bootstrap';
import * as FormModel from "../../config/forms";


const FormComponent = ({ entity, customerModel, errorModel, children, hiddenFields }) => {
    const [error, setError] = useState({});
	const layout = entity && entity.layouts ? entity.layouts.edit : [];
    const components = FormModel.Components;

    function handleChange(event){
		const target = event.target;
    	const name = target.name;
    	const value = target.value;

    	customerModel[name]=value;              
    }
    
    console.log("CUSTOMERMODEL", customerModel);

	return (
		<>		
		{
			layout.map((lys, j) => {
				return(
					<Row key={"layout"+j}>
						{
							lys.map((l, i) => {
								var metadata = entity.metadatas[l.name].edit;
                                var attributes = entity.attributes[l.name];
                                
                                if(!hiddenFields || hiddenFields.filter(x => x === l.name).length === 0){
                                    return(
                                        <Col xs={eval(l.size)} 
                                            key={"att"+j+"_"+i} 
                                            className={eval(metadata['visible']) ? "" : "ld_hideelement"}  >
                                                <Form.Group controlId={l.name}>
                                                    <Form.Label className={metadata['visible_label'] ? "" : "ld_hideelement"} >{eval(metadata['label'])}</Form.Label>
                                        {                                                    
                                            attributes.type === "string" ?
                                                <Form.Control type="text"  
                                                    name={ l.name } 
                                                    onChange={ handleChange }
                                                    value={ customerModel[l.name] }
                                                    disabled={ typeof(metadata['editable']) === "string" ? !eval(metadata['editable']) :  !metadata['editable'] } />
                                                        
                                            : attributes.type === "enumeration" ?
                                                <>
                                                {
                                                    console.log("EDITABLE", metadata['editable'])
                                                }
                                                        <Form.Control as="select" 
                                                                    name={ l.name } 
                                                                    onChange={ handleChange } 
                                                                    disabled={ typeof(metadata['editable']) === "string" ? !eval(metadata['editable']) :  !metadata['editable']} 
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
                                                    
                                                
                                                </>
                                            
                                            : attributes.type === "component" ?
                                                
                                                <FormComponent entity={ components[attributes.component] } customerModel={ customerModel[l.name] } errorModel={ errorModel } children={children} hiddenFields={[]} />
                                            
                                            : attributes.type === "biginteger" ?
                                                <Form.Control type="text"  
                                                    name={ l.name } 
                                                    onChange={ handleChange }
                                                    value={ customerModel[l.name] }
                                                    disabled={ typeof(metadata['editable']) === "string" ? !eval(metadata['editable']) :  !metadata['editable'] } />
                                            
                                            : attributes.type === "email" ?
                                                <Form.Control type="email"  
                                                    name={ l.name } 
                                                    onChange={ handleChange }
                                                    value={ customerModel[l.name] }
                                                    disabled={ typeof(metadata['editable']) === "string" ? !eval(metadata['editable']) :  !metadata['editable'] } />
                                            
                                            : attributes.model && children === true ?
                                                <></>
                                            :
                                            <></>
                                        }
                                            <small className="text-danger">{error[l.name]}</small>
                                            </Form.Group>
                                        </Col>
                                    );
                                }                            
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