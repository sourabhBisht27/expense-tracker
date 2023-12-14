import React from "react";
import useAuth from "../../hooks/useAuth";
import MainSectionContainer from "../common/MainSectionContainer";
import './DashboardPage.css';
import TransCategoryCard from "./TransCategoryCard";
import TransactionHead from "./TransactionHead";
import WeekExpense from "./WeekExpense";
import FloatingAddButton from "./FloatingAddButton";
export default function DashboardPage() {
    const auth = useAuth();
    const name = auth.user ? auth.user.name : undefined
    return <MainSectionContainer>
        <h2 className="dash__name">Hello {name},</h2>
        <WeekExpense />
        <TransactionHead />
        <ul className="dash__transList">
            <TransCategoryCard />
            <TransCategoryCard />
            <TransCategoryCard />
            <TransCategoryCard />
            <TransCategoryCard />
            <TransCategoryCard />
            <TransCategoryCard />
        </ul>
        <FloatingAddButton />
    </MainSectionContainer>
}