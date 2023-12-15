import React from "react";
import MainSectionContainer from "../common/MainSectionContainer";
import countryCodes from "../../../assets/currency.json";
import Button from "../transactions/Button";
import "./SettingsPage.css";
const SettingsPage = () => {
  return (
    <MainSectionContainer>
      <h2>Settings</h2>
      <form className="settings__form">
        <select className="settings__currency" name="currency" id="currency">
          {countryCodes.map((countryCode) => (
            <option
              key={countryCode.CountryCode}
            >{`${countryCode.Country} : ${countryCode.Currency} - ${countryCode.Code}`}</option>
          ))}
        </select>
        <Button />
      </form>
    </MainSectionContainer>
  );
};

export default SettingsPage;
