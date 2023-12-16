import { useState } from "react";
import { toast } from "react-toastify";

const useSettingsForm = () => {
  const [settings, setSettings] = useState(null);

  const onSetSettings = (newSetting) => {
    setSettings(newSetting);
  };
  return { settings, onSetSettings };
};

export default useSettingsForm;
