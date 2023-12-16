import React from "react";
import countryCodes from "../../../assets/currency.json";
import useSettings from "../../hooks/useSettings";
import MainSectionContainer from "../common/MainSectionContainer";
import "./SettingsPage.css";
import { toast } from "react-toastify";
import { updateSetting } from "../../api/setting.api";
import { isAxiosError } from "axios";
const SettingsPage = () => {
  const settingContext = useSettings();
  const settings = settingContext.settings;
  const countryCode = settings ? settings.countryCode : "IN";
  const currencyCode = settings ? settings.currencyCode : "INR";
  const onChangeCurrencyCode = async (e) => {
    try {
      const [countryCode, currencyCode] = e.currentTarget.value.split(":");
      if (settings && settingContext.onSetSettings) {
        const { data } = await updateSetting(settings._id, {
          countryCode,
          currencyCode,
        });
        settingContext.onSetSettings(data.data);
      }
      toast.success("Setting updated");
    } catch (error) {
      toast.error(
        isAxiosError(error) ? error.response.data.message : "Some error occured"
      );
    }
  };

  return (
    <MainSectionContainer>
      <h2>Settings</h2>
      <p className="instruction">
        Update your settings here and navigate to dashboard.
      </p>
      {settings ? (
        <div className="settings__form">
          <select
            value={`${countryCode}:${currencyCode}`}
            onChange={onChangeCurrencyCode}
            className="settings__currency"
            name="currencyCode"
            id="currencyCode"
          >
            {countryCodes.map((countryCode) => (
              <option
                value={`${countryCode.CountryCode}:${countryCode.Code}`}
                key={`${countryCode.CountryCode}:${countryCode.Code}:${countryCode.Country}`}
              >{`${countryCode.Country} : ${countryCode.Currency} - ${countryCode.Code}`}</option>
            ))}
          </select>
        </div>
      ) : null}
    </MainSectionContainer>
  );
};

export default SettingsPage;
