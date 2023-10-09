import { HomeOutlined, SettingOutlined, UserOutlined, AppstoreOutlined } from "@ant-design/icons";

export const navigationConfig = [
    {
        title: "HomeItem",
        key: "home",
        type: "item",
        label: "Home",
        icon: <HomeOutlined />,
        url: "/home",
    },
    {
        title: "AboutItem",
        key: "about",
        type: "item",
        label: "About",
        icon: <UserOutlined />,
        url: "/about",
    },
    {
        title: "PhotosItem",
        key: "photos",
        type: "item",
        label: "Photos",
        icon: <AppstoreOutlined />,
        url: "/photos",
    },
    {
        title: "SettingsItem",
        key: "settings",
        type: "item",
        label: "Settings",
        icon: <SettingOutlined />,
        url: "/settings",
    }
]