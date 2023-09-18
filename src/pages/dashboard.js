import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./dashboard.css";

const Dashboard = () => {
  const navigate = useNavigate();

  const onButtonContainer2Click = useCallback(() => {
    navigate("/dashboard");
  }, [navigate]);

  const onButtonText2Click = useCallback(() => {
    navigate("/dashboard1");
  }, [navigate]);

  return (
    <div className="dashboard1">
      <div className="navigation1">
        <div className="left-side1" />
        <div className="help1">Help</div>
        <div className="contact-us1">Contact Us</div>
        <div className="settings1">Settings</div>
        <div className="users1">Users</div>
        <div className="schedules1">Schedules</div>
        <div className="transactions1">Transactions</div>
        <b className="dashboard2">Dashboard</b>
        <img className="transaction-icon1" alt="" src="/transaction-icon.svg" />
        <img className="schedule-icon1" alt="" src="/schedule-icon1.svg" />
        <img className="dashboard-icon1" alt="" src="/dashboard-icon1.svg" />
        <img className="setting-icon1" alt="" src="/setting-icon.svg" />
        <img className="user-icon1" alt="" src="/user-icon1.svg" />
        <b className="board2">Board.</b>
      </div>
      <div className="frame-parent">
        <div className="total-revenues-parent">
          <div className="total-revenues">
            <div className="card2">
              <div className="card3" />
            </div>
            <div className="total-revenues-child" />
          </div>
          <div className="frame-child" />
          <img className="vector-icon5" alt="" src="/vector5.svg" />
        </div>
        <div className="total-revenues-parent">
          <div className="total-revenues">
            <div className="card2">
              <div className="card3" />
            </div>
            <div className="total-revenues-child" />
          </div>
          <div className="frame-item" />
          <img className="vector-icon6" alt="" src="/vector6.svg" />
          <div className="frame-group">
            <div className="total-transactions-parent">
              <div className="total-transactions">Total Transactions</div>
              <b className="b">1,520</b>
            </div>
            <div className="label">
              <div className="label-text">+1.7%</div>
            </div>
          </div>
        </div>
        <div className="total-revenues-parent">
          <div className="total-revenues">
            <div className="card2">
              <div className="card3" />
            </div>
            <div className="total-revenues-child" />
          </div>
          <div className="frame-inner" />
          <div className="frame-container">
            <div className="total-transactions-parent">
              <div className="total-transactions">Total Likes</div>
              <b className="b1">9,721</b>
            </div>
            <div className="label">
              <div className="label-text1">+1.4%</div>
            </div>
          </div>
          <img className="vector-icon7" alt="" src="/vector7.svg" />
        </div>
        <div className="total-revenues-parent">
          <div className="total-revenues">
            <div className="card2">
              <div className="card3" />
            </div>
            <div className="total-revenues-child" />
          </div>
          <div className="ellipse-div" />
          <div className="frame-container">
            <div className="total-transactions-parent">
              <div className="total-transactions">Total Users</div>
              <b className="b1">9,721</b>
            </div>
            <div className="label">
              <div className="label-text1">+4.2%</div>
            </div>
          </div>
          <img className="vector-icon8" alt="" src="/vector8.svg" />
        </div>
      </div>
      <div className="frame-parent2">
        <div className="total-transactions-parent">
          <div className="total-transactions">Total Revenues</div>
          <b className="b">$2,129,430</b>
        </div>
        <div className="label">
          <div className="label-text1">+2.5%</div>
        </div>
      </div>
      <div className="activities-card">
        <div className="card10">
          <div className="card11" />
        </div>
        <div className="guest">Guest</div>
        <div className="user">User</div>
        <b className="activities">Activities</b>
        <div className="may-june-2021-parent">
          <div className="may-june">May - June 2021</div>
          <img className="vector-icon9" alt="" src="/vector9.svg" />
        </div>
        <div className="chart">
          <div className="parent">
            <div className="div1">500</div>
            <div className="group-child" />
          </div>
          <div className="group">
            <div className="div1">300</div>
            <div className="group-child" />
          </div>
          <div className="container">
            <div className="div1">400</div>
            <div className="group-child" />
          </div>
          <div className="group-div">
            <div className="div1">200</div>
            <div className="group-child" />
          </div>
          <div className="parent1">
            <div className="div1">100</div>
            <div className="group-child" />
          </div>
          <div className="parent2">
            <div className="div6">0</div>
            <div className="group-child2" />
          </div>
        </div>
        <div className="activities-card-child" />
        <div className="activities-card-item" />
      </div>
      <div className="top-products-card">
        <div className="card12">
          <div className="card13" />
        </div>
        <div className="div7">
          <div className="child" />
          <b className="basic-tees">Basic Tees</b>
          <div className="div8">55%</div>
        </div>
        <div className="may-june-2021-wrapper">
          <div className="may-june1">May - June 2021</div>
        </div>
        <div className="div9">
          <div className="item" />
          <b className="basic-tees">Custom Short Pants</b>
          <div className="div8">31%</div>
        </div>
        <div className="div11">
          <div className="inner" />
          <b className="basic-tees">Super Hoodies</b>
          <div className="div8">14%</div>
        </div>
        <b className="top-products">Top products</b>
      </div>
      <img className="schedules-card-icon" alt="" src="/schedules-card.svg" />
      <div className="chart-weeks">
        <div className="week-1">Week 1</div>
        <div className="week-2">Week 2</div>
        <div className="week-3">Week 3</div>
        <div className="week-4">Week 4</div>
      </div>
      <div className="header">
        <b className="dashboard3">Dashboard</b>
        <div className="search-bar">
          <input className="white1" type="text" />
          <div className="search">Search...</div>
          <img className="search-icon" alt="" src="/search-icon.svg" />
        </div>
        <img className="mask-group-icon1" alt="" src="/mask-group@2x.png" />
        <img className="vector-icon10" alt="" src="/vector10.svg" />
      </div>
      <img className="bar-1-1-icon" alt="" src="/bar-1-1.svg" />
      <img className="bar-1-1-icon1" alt="" src="/bar-1-11.svg" />
      <img className="bar-1-1-icon2" alt="" src="/bar-1-12.svg" />
      <img className="bar-1-1-icon3" alt="" src="/bar-1-13.svg" />
      <img className="bar-1-1-icon4" alt="" src="/bar-1-14.svg" />
      <img className="bar-1-1-icon5" alt="" src="/bar-1-15.svg" />
      <img className="bar-1-1-icon6" alt="" src="/bar-1-16.svg" />
      <img className="bar-1-1-icon7" alt="" src="/bar-1-17.svg" />
      <div className="chart-parent">
        <div className="chart1">
          <img className="donut-chart-icon" alt="" src="/donut-chart.svg" />
          <div className="legend" />
        </div>
        <img className="donut-1-icon" alt="" src="/donut-1.svg" />
        <img className="donut-1-icon1" alt="" src="/donut-11.svg" />
        <img className="ellipse-icon" alt="" src="/ellipse-4.svg" />
      </div>
      <div className="card14">
        <div className="card13" />
        <div className="group-parent">
          <img className="group-icon" alt="" src="/group-7558.svg" />
          <div className="add-profile">Add Profile</div>
        </div>
      </div>
      <div className="dashboard-child" />
      <div className="modal-dialog">
        <div className="header-module">
          <div className="header-holder">
            <div className="title">Add New Profile</div>
            <div className="button1">
              <img className="icon1" alt="" src="/icon1.svg" />
            </div>
          </div>
          <div className="divider" />
        </div>
        <div className="content-placeholder-module">
          <div className="frame-parent3">
            <div className="frame-child1" />
            <div className="input-title">Basic</div>
            <div className="input-title1">Social</div>
            <div className="rectangle-div" />
            <div className="frame-child2" />
          </div>
          <div className="text-input-wrapper">
            <div className="text-input">
              <div className="placeholder-text">
                <span>{`Instagram Link `}</span>
                <span className="optional">{`(Optional)  `}</span>
              </div>
              <div className="input-container">
                <div className="placeholder-text">
                  Eg. ..instagram.com/username
                </div>
              </div>
            </div>
          </div>
          <div className="text-input1">
            <div className="placeholder-text">
              <span>{`Youtube Link `}</span>
              <span className="optional">(Optional)</span>
            </div>
          </div>
          <div className="input-container">
            <div className="placeholder-text">Eg. ..youtebe/username</div>
          </div>
        </div>
        <div className="footer-module">
          <div className="seperator" />
          <div className="header-holder">
            <div className="button2">
              <div className="button-text" />
            </div>
            <div className="button-group">
              <div className="button3" onClick={onButtonContainer2Click}>
                <div className="add-profile">Back</div>
              </div>
              <div className="button4">
                <div className="button-text2" onClick={onButtonText2Click}>
                  Done
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
