import "./footer.css";
import cgvFoot from "../../img/cgv-foot.png";
import {Link} from "react-router-dom";

function Footer() {
  return (
    <div id="footer-container">
      <div className="footer-cgv-policy">
        <div className="footer-container">
          <div className="footer-title footer-item footer-item2">

            <h6>D3K Việt Nam</h6>
            <li>
              <a href="https://github.com/huudong03uet/ProjectCNPM"
              >Giới thiệu
              </a>
            </li>
            <li>
              <a href="https://www.cgv.vn/default/cgv-online/">Tiện ích Online</a>
            </li>
            <li>
              <Link to="/newsoffer">
                Tin mới & ưu đãi
              </Link>
              </li>
            <li>
                <Link to="contact">Liên hệ quảng cáo</Link>
            </li>
          </div>
          <div className="footer-title footer-item cgv-follow-us">
            <h6>Kết nối với chúng tôi</h6>
            <a href="https://www.facebook.com/profile.php?id=100033353748879">
              <img
                style={{ width: "120%" }}
                src="https://www.cgv.vn/skin/frontend/cgv/default/images/bg-cgv/bg-social-footer-40.png"
                alt=""
              />
            </a>
            <a href="https://www.facebook.com/">
              <img
                src="https://www.cgv.vn/skin/frontend/cgv/default/images/cong-thuong.PNG"
                alt=""
              />
            </a>
          </div>
          <div className="footer-title customer-cgv">
            <h6>Chăm sóc khách hàng</h6>
            <li>Hotline: 1900 0404</li>
            <li>
              Giờ làm việc: 8:00 - 22:00 <br /> (Tất cả các ngày trong tuần)
            </li>
            <li>Email hỗ trợ: contact@d3k.vn</li>
          </div>
          
        </div>
      </div>
      <div className="footer-cgv-address">
        <div className="cgv-cover">
          <div className="cgv-foot">
            <img src={cgvFoot} alt="cgvFoot" />
          </div>

          <div className="cgv-end">
            <h6>CÔNG TY TNHH D3K VIETNAM</h6>
            <p>
              Giấy CNĐKDN: 0303040405, đăng ký lần đầu ngày 13/5/2023,  
            </p>
            <p>cấp bởi Sở KHĐT thành phố Hà Nội.</p>
            <p>
              Địa Chỉ: Toà E3, 144 Xuân Thủy, Cầu Giấy, Hà Nội.
            </p>
            <p>Hotline: 1900 0404</p>
            <p>COPYRIGHT 2017 D3K. All RIGHTS RESERVED.</p>
          </div>
        </div>
      </div>

      <div className="footer-brick"></div>
    </div>
  );
}

export default Footer;
