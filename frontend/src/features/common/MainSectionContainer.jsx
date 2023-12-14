import React from "react";
import './MainSectionContainer.css'
import Header from "./Header";
import PrivateContainer from './PrivateContainer';
export default function MainSectionContainer({ children }) {
    return <React.Fragment>
        <Header />
        <PrivateContainer>
            <section className="main__section">{children}</section>
        </PrivateContainer>
    </React.Fragment>
}