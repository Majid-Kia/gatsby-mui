import React from "react";
import DefaultLayout from "./DefaultLayout";
import NavbarSection from "../../sections/navbar-section/NavbarSection";
import Container from "../container/CustomizedContainer";
// import FooterContainer from "../container/FooterContainer";
// import FooterSection from "../../sections/footer-section/FooterSection";
// import SubFooterSection from "../../sections/sub-footer-section/SubFooterSection";
import PropTypes from "prop-types";
import GdprSection from "../../sections/gdpr-section/GdprSection";

const PagesDefaultLayout = ({ children, addProgressBar }) => {
  return (
    <DefaultLayout>
      <NavbarSection />
      <Container>{children}</Container>
      <GdprSection />
    </DefaultLayout>
  );
};

PagesDefaultLayout.prototype = {
  children: PropTypes.element.isRequired,
  addProgressBar: PropTypes.bool,
};

export default PagesDefaultLayout;
