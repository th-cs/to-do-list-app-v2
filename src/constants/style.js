import { Platform, StatusBar } from "react-native";

export const priorities = {
	High: "#C53961",
	Medium: "#DDA044",
	Low: "#3DC591"
}

export const STATUS_BAR_HEIGHT = Platform.OS === "android" ?
	StatusBar.currentHeight : 0;

export const PRIMARY_COLOR = "#6200EE";
export const ACCENT_COLOR_YELLOW = "#FFC107";
export const ACCENT_COLOR_RED = "#F44336";

export const TEXT_COLOR_DARK = "#333333";
export const TEXT_COLOR_WHITE = "#FFFFFF";
export const TEXT_COLOR_MEDIUM = "#555555";
export const TEXT_COLOR_DISABLED = "#AAAAAA";

export const BACKGROUND_COLOR_LIGHT = "#F5F5F5";
export const BACKGROUND_COLOR_WHITE = "#FFFFFF";

export const BORDER_COLOR_LIGHT = "#CCCCCC";
export const BACKGROUND_COLOR_INPUT = "#F9F9F9";
export const OVERLAY_COLOR = "rgb(0,0,0,0.6)";
