import { InstagramOutlined, LinkedinOutlined, MailOutlined, WhatsAppOutlined } from "@ant-design/icons"
import { Button, Divider } from "antd";
import { useLocation } from "react-router-dom";
import PublicRoutes from "../../common/constants/PublicRoutes"
import "./Footer.css"

const FooterComponent = () => {

    const location = useLocation();

    return (
        <>
            {!(PublicRoutes.includes(location.pathname)) && <div className="footer-content">
                <Divider />
                <div>
                    <Button shape="circle" target="blank" href="https://www.instagram.com/sss_lenz_2299/" size="large" className="footerIcon insta-icon">
                        <InstagramOutlined />
                    </Button>
                </div>
                <div>
                    <Button shape="circle" href="mailto:ssslenz2299@gmail.com" size="large" className="footerIcon mail-icon">
                        <MailOutlined />
                    </Button>
                </div>
                <div>
                    <Button shape="circle" target="blank" href="https://www.linkedin.com/in/sanjith-sivapuram-b2b029172/" size="large" className="footerIcon linkedin-icon">
                        <LinkedinOutlined />
                    </Button>
                </div>
                <div>
                    <Button shape="circle" target="blank" href="https://api.whatsapp.com/send?phone=9602201838&text=Hello I would like to connect" size="large" className="footerIcon whatsapp-icon">
                        <WhatsAppOutlined />
                    </Button>
                </div>
            </div>}
        </>
    )
}

export default FooterComponent