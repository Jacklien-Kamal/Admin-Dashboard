import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import PopupState, { bindTrigger, bindMenu } from "material-ui-popup-state";
import { useLocalization } from "../../localization/LocalizationContext";
import { useTranslation } from "react-i18next";

export default function LanguageSelector() {
  const { language, changeLanguage } = useLocalization();
  const { t } = useTranslation();
  return (
    <PopupState variant="popover" popupId="demo-popup-menu"  >
      {(popupState) => (
        <React.Fragment>
         <Button 
            variant="contained"
            {...bindTrigger(popupState)}
            style={{
              display: "flex",
              alignItems: "start",
              justifyContent:'flex-start',
                  backgroundColor: "transparent",
                  padding:'0px',
                width:'30px',
               boxShadow: "none",
              borderRadius:'50%'
            }}
          >
            <img
              src={language === "ar" ? "./public/egFlag.png" : "./public/enFlag.svg"}
              alt={language}
              width='30%'
              height={30}
            />
          </Button>
          <Menu {...bindMenu(popupState)} className="mt-4">
            <MenuItem
              className="flex gap-3 " 
              onClick={() => {
                changeLanguage("en");
                popupState.close();
              }}
            >
              <img
                src="./public/enFlag.svg"
                width={20}
              />{" "}
              English
            </MenuItem>
            <MenuItem
              className="flex gap-3 "
              onClick={() => {
                changeLanguage("ar");
                popupState.close();
              }}
            >
              <img src="./public/egFlag.png" width={20} /> Arabic{" "}
            </MenuItem>
          </Menu>
        </React.Fragment>
      )}
    </PopupState>
  );
}
