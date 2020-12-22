import React, { useState, useEffect } from "react";
import { Row, Col, Container } from 'react-bootstrap';
import { useParams } from "react-router-dom";
import { useAppContext } from "../../utils/contextLib";
import FoldersPreviewComponent from "../../components/FoldersPreview";
import Query from "../../components/Query";
import ALL_FOLDERS_PREVIEW_QUERY from "../../queries/folders/allfolderspreview";

const FoldersPreview = ({ navbarData }) => {  
  const { isAuthenticated } = useAppContext();
  const { setNavbarData } = useAppContext();
  
  useEffect(() => {
    setNavbarData({
      edit: false,
      selectedId: "",
      page:"folderspreview",
    });
  }, []); 

  if(isAuthenticated){
    return (
      <>
        <br />
        <Row>
          <Col>
              
            <Query query={ALL_FOLDERS_PREVIEW_QUERY} >
                {({ loading, error, data: { issues } }) => {
                  
                  return <FoldersPreviewComponent data={{ issues }}/>
                  
                }
              }
            </Query>


          </Col>
        </Row>
      </>
    );
  }

    
  return (
    <div>
      <div className="uk-section">
        <div className="uk-container uk-container-large">
          You are not logged in. Logout and log in again.          
        </div>
      </div>
    </div>
  ); 

};

export default FoldersPreview;