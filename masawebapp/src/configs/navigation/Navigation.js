import { Button, Dropdown, Menu } from "antd"
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { navigationConfig } from "./navigationConfig";
import { Layout } from 'antd';
import PublicRoutes from "../../common/constants/PublicRoutes";
import { LogoutOutlined, UserOutlined } from "@ant-design/icons";
import "./Navigation.css";
import { useDispatch, useSelector } from "react-redux";
import { firebaseLogout } from "../../services/firebase/FirebaseConfig";

const { Header } = Layout;

const Navigation = () => {

    const [currentNav, setCurrentNav] = useState(null)

    const navigate = useNavigate();
    const location = useLocation();
    const dispatch = useDispatch()

    // Selectors
    const user = useSelector(state => state.user.data)

    useEffect(() => {
        navigationConfig.map((navItem) => {
            if (navItem.url === location.pathname) {
                setCurrentNav(navItem.key)
            }
        })
        if (currentNav === null) {
            console.log("Checking user item", currentNav);
            userItems.map(userItem => {
                if (userItem.key === location.pathname) {
                    setCurrentNav(userItem.key)
                }
            })
        }
    }, [location, currentNav])

    const handleMenuClick = (e) => {
        if (e.key !== "/logout") {
            navigate(e.key);
        }
        else {
            dispatch(firebaseLogout())
        }
    };

    const handleUserMenuSelect = (e) => {
        if (e.key !== "/logout") {
            setCurrentNav(e.key)
        }
    }

    const userItems = [
        {
            label: user.displayName,
            key: '/home',
            // disabled: true
        },
        {
            type: "divider",
        },
        {
            label: 'Profile',
            key: '/profile',
            icon: <UserOutlined />,
        },
        {
            label: 'Logout',
            key: '/logout',
            danger: true,
            icon: <LogoutOutlined />,
        }
    ]

    const userMenuProps = {
        items: userItems,
        selectable: true,
        onSelect: handleUserMenuSelect,
        selectedKeys: [currentNav],
        onClick: handleMenuClick,
    };

    return (
        <>
            {!(PublicRoutes.includes(location.pathname)) && <Header
                style={{
                    position: 'sticky',
                    top: 0,
                    zIndex: 1,
                    width: '100%',
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between"
                }}
            >
                <div>
                    <img
                        src="logos/SSS_LOGO_WHITE.png"
                        alt="SSS Logo White"
                        style={{
                            float: 'left',
                            width: 100,
                            height: 31,
                            margin: '16px 24px 16px 0',
                        }}
                    />
                    <Menu
                        theme="dark"
                        mode="horizontal"
                        defaultSelectedKeys={['home']}
                        selectedKeys={[currentNav]}
                        onSelect={(e) => setCurrentNav(e.key)}
                        items={navigationConfig.map((navItem) => ({
                            key: navItem.key,
                            label: navItem.label,
                            icon: navItem.icon,
                            type: navItem.type,
                            onClick: () => navigate(navItem.url)
                        }))}
                    />
                </div>
                <div>
                    <Dropdown menu={userMenuProps} >
                        <Button shape="circle" className="user-button">
                            {user?.displayName.split("")[0]}
                        </Button>
                    </Dropdown>
                </div>
            </Header>}
        </>
    )
}

export default Navigation;