import React from "react";
import DropDownItem from "./DropDownItem";
import AccountBoxOutlinedIcon from "@mui/icons-material/AccountBoxOutlined";
import DvrOutlinedIcon from "@mui/icons-material/DvrOutlined";
import SwitchAccountOutlinedIcon from "@mui/icons-material/SwitchAccountOutlined";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
import MonetizationOnOutlinedIcon from "@mui/icons-material/MonetizationOnOutlined";
import PersonPinOutlinedIcon from "@mui/icons-material/PersonPinOutlined";
import Brightness2OutlinedIcon from "@mui/icons-material/Brightness2Outlined";
import TranslateOutlinedIcon from "@mui/icons-material/TranslateOutlined";
import AdminPanelSettingsOutlinedIcon from "@mui/icons-material/AdminPanelSettingsOutlined";
import MyLocationOutlinedIcon from "@mui/icons-material/MyLocationOutlined";
import KeyboardAltOutlinedIcon from "@mui/icons-material/KeyboardAltOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import FeedbackOutlinedIcon from "@mui/icons-material/FeedbackOutlined";

function DropdownListItems() {
  return (
    <div>
      <ul>
        <hr style={{ border: "1px solid #525252", marginBottom: "10px" }} />
        <DropDownItem
          icon={
            <AccountBoxOutlinedIcon
              width={12}
              height={12}
              style={{ color: "white" }}
            />
          }
          text={"Your channel"}
        />
        <DropDownItem
          icon={
            <DvrOutlinedIcon
              width={12}
              height={12}
              style={{ color: "white" }}
            />
          }
          text={"Youtube Studio"}
        />
        <DropDownItem
          icon={
            <SwitchAccountOutlinedIcon
              width={12}
              height={12}
              style={{ color: "white" }}
            />
          }
          text={"Switch account"}
        />
        <DropDownItem
          icon={
            <LogoutOutlinedIcon
              width={12}
              height={12}
              style={{ color: "white" }}
            />
          }
          text={"Log out"}
        />

        <hr
          style={{
            border: "1px solid #525252",
            marginTop: "10px",
            marginBottom: "10px",
          }}
        />

        <DropDownItem
          icon={
            <MonetizationOnOutlinedIcon
              width={12}
              height={12}
              style={{ color: "white" }}
            />
          }
          text={"Purchases and memberships"}
        />

        <DropDownItem
          icon={
            <PersonPinOutlinedIcon
              width={12}
              height={12}
              style={{ color: "white" }}
            />
          }
          text={"Your data in Youtube"}
        />
        <hr
          style={{
            border: "1px solid #525252",
            marginBottom: "10px",
            marginTop: "10px",
          }}
        />
        <DropDownItem
          icon={
            <Brightness2OutlinedIcon
              width={12}
              height={12}
              style={{ color: "white" }}
            />
          }
          text={"Appearance: Device theme "}
        />

        <DropDownItem
          icon={
            <TranslateOutlinedIcon
              width={12}
              height={12}
              style={{ color: "white" }}
            />
          }
          text={"Language: English "}
        />

        <DropDownItem
          icon={
            <AdminPanelSettingsOutlinedIcon
              width={12}
              height={12}
              style={{ color: "white" }}
            />
          }
          text={"Restricted Mode: Off "}
        />

        <DropDownItem
          icon={
            <MyLocationOutlinedIcon
              width={12}
              height={12}
              style={{ color: "white" }}
            />
          }
          text={"Location: Romania "}
        />
        <DropDownItem
          icon={
            <KeyboardAltOutlinedIcon
              width={12}
              height={12}
              style={{ color: "white" }}
            />
          }
          text={"Keyboard shortcuts"}
        />

        <hr
          style={{
            border: "1px solid #525252",
            marginTop: "10px",
            marginBottom: "10px",
          }}
        />

        <DropDownItem
          icon={
            <SettingsOutlinedIcon
              width={12}
              height={12}
              style={{ color: "white" }}
            />
          }
          text={"Settings"}
        />
        <hr
          style={{
            border: "1px solid #525252",
            marginTop: "10px",
            marginBottom: "10px",
          }}
        />

        <DropDownItem
          icon={
            <HelpOutlineOutlinedIcon
              width={12}
              height={12}
              style={{ color: "white" }}
            />
          }
          text={"Help"}
        />
        <hr
          style={{
            border: "1px solid #525252",
            marginTop: "10px",
            marginBottom: "10px",
          }}
        />

        <DropDownItem
          icon={
            <FeedbackOutlinedIcon
              width={12}
              height={12}
              style={{ color: "white" }}
            />
          }
          text={"Send feedback"}
        />
      </ul>
    </div>
  );
}

export default DropdownListItems;
