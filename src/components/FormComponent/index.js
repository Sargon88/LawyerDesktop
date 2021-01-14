import React, { useState } from "react";
import { Row, Col, Form } from 'react-bootstrap';
import * as FormModel from "../../config/forms";

//var DateTimeField = require('react-bootstrap-datetimepicker');


const FormComponent = ({ entity, customerModel, errorModel, hiddenFields }) => {
    const [error, setError] = useState({});
    const [reload, setReload] = useState(false);
	const layout = entity && entity.layouts ? entity.layouts.edit : [];
    const components = FormModel.Components;

    function handleChange(event){
		const target = event.target;
    	const name = target.name;
        const value = target.value;
        
        customerModel[name]=value;
        setReload(!reload);
    }

    function handleChecked(event){
		const target = event.target;
    	const name = target.name;
        const value = target.checked;
        
        customerModel[name]=value;
        setReload(!reload);
    }

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
                                                    <Form.Label className={metadata['visible_label'] == null || metadata['visible_label'] === true  ? "" : "ld_hideelement"} >{eval(metadata['label'])}</Form.Label>
                                        {                                                    
                                            attributes.type === "string" ?
                                                <Form.Control type="text"  
                                                    name={ l.name } 
                                                    onChange={ handleChange }
                                                    value={ customerModel[l.name] }
                                                    disabled={ typeof(metadata['editable']) === "string" ? !eval(metadata['editable']) :  !metadata['editable'] } />
                                                        
                                            : attributes.type === "enumeration" ?
                                                
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
                                                
                                            : attributes.type === "component" ?
                                                
                                                <FormComponent entity={ components[attributes.component] } customerModel={ customerModel[l.name] } errorModel={ errorModel } hiddenFields={[]} />
                                            
                                            : attributes.type === "biginteger" ?
                                                <Form.Control type="text"  
                                                    name={ l.name } 
                                                    onChange={ handleChange }
                                                    value={ customerModel[l.name] }
                                                    disabled={ typeof(metadata['editable']) === "string" ? !eval(metadata['editable']) :  !metadata['editable'] } />
                                            
                                            : attributes.type === "datetime" ?
                                                <Form.Control type="text"  
                                                    name={ l.name } 
                                                    onChange={ handleChange }
                                                    value={ customerModel[l.name] }
                                                    disabled={ typeof(metadata['editable']) === "string" ? !eval(metadata['editable']) :  !metadata['editable'] } />

                                            : attributes.type === "boolean" ?                                                    
                                                <Form.Switch
                                                    id={'switch_' + l.name}
                                                    name={ l.name } 
                                                    onChange={ handleChecked }
                                                    checked = { customerModel[l.name] }
                                                    label={eval(metadata['label'])}
                                                    disabled={ typeof(metadata['editable']) === "string" ? !eval(metadata['editable']) :  !metadata['editable'] } />
                                                
                                            : attributes.type === "email" ?
                                                <Form.Control type="email"  
                                                    name={ l.name } 
                                                    onChange={ handleChange }
                                                    value={ customerModel[l.name] }
                                                    disabled={ typeof(metadata['editable']) === "string" ? !eval(metadata['editable']) :  !metadata['editable'] } />
                                            
                                            : attributes.type === "text" ?
                                                <Form.Control as="textarea"  
                                                    name={ l.name } 
                                                    onChange={ handleChange }
                                                    value={ customerModel[l.name] }
                                                    disabled={ typeof(metadata['editable']) === "string" ? !eval(metadata['editable']) :  !metadata['editable'] } />
                                            
                                            : attributes.model ?
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