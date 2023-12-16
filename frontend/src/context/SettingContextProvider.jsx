import { useEffect } from "react";
import useSettingsForm from "../hooks/useSettingsForm";
import SettingContext from "./SettingContext";
import { getUserSetting } from "../api/setting.api";

export default function SettingContextProvider({ children }) {
  const { settings, onSetSettings } = useSettingsForm();
  useEffect(() => {
    (async () => {
      try {
        const { data } = await getUserSetting();
        onSetSettings(data.data);
      } catch (error) {
        throw error;
      }
    })();
  }, []);

  return (
    <SettingContext.Provider
      value={{
        settings,
        onSetSettings,
      }}
    >
      {children}
    </SettingContext.Provider>
  );
}
