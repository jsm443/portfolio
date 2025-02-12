import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import { dataportfolio, meta } from "../../content_option";

export const Portfolio = () => {
  return (
    <HelmetProvider>
      <Container className="About-header">
        <Helmet>
          <meta charSet="utf-8" />
          <title> Portfolio | {meta.title} </title>
          <meta name="description" content={meta.description} />
        </Helmet>
        <Row className="mb-5 mt-3 pt-md-3">
          <Col lg="8">
            <h1 className="display-4 mb-4"> Portfolio </h1>
            <hr className="t_border my-4 ml-0 text-left" />
          </Col>
        </Row>
        <div className="po_items_ho">
          {dataportfolio.map((data, i) => (
            <div key={i} className="po_item">
              <div className="po_content">
                <div className="image">
                  <a href={data.link} target="_blank" >
                    <img src={data.img} alt="" />
                  </a>
                </div>
                <div className="content">
                  <h5 className="added_title">{data.title}</h5>
                  <div className="description">
                    <p>{data.description}</p>
                    <a href={data.link} target="_blank">
                      <div id="button_default" className="ac_btn btn">
                        View Project
                        <div className="ring one"></div>
                        <div className="ring two"></div>
                        <div className="ring three"></div>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </HelmetProvider>
  );
};
