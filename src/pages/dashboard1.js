import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./dashboard1.css";

const Dashboard1 = () => {
  const navigate = useNavigate();

  const onButtonGroupContainerClick = useCallback(() => {
    navigate("/dashboard2");
  }, [navigate]);

  return (
    <div className="dashboard4">
      <div className="navigation2">
        <div className="left-side2" />
        <div className="help2">Help</div>
        <div className="contact-us2">Contact Us</div>
        <div className="settings2">Settings</div>
        <div className="users2">Users</div>
        <div className="schedules2">Schedules</div>
        <div className="transactions2">Transactions</div>
        <b className="dashboard5">Dashboard</b>
        <img className="transaction-icon2" alt="" src="/transaction-icon.svg" />
        <img className="schedule-icon2" alt="" src="/schedule-icon2.svg" />
        <img className="dashboard-icon2" alt="" src="/dashboard-icon1.svg" />
        <img className="setting-icon2" alt="" src="/setting-icon.svg" />
        <img className="user-icon2" alt="" src="/user-icon2.svg" />
        <b className="board3">Board.</b>
      </div>
      <div className="frame-parent4">
        <div className="total-revenues-parent2">
          <div className="total-revenues5">
            <div className="card16">
              <div className="card17" />
            </div>
            <div className="total-revenues-child2" />
          </div>
          <div className="frame-child3" />
          <img className="vector-icon11" alt="" src="/vector5.svg" />
        </div>
        <div className="total-revenues-parent2">
          <div className="total-revenues5">
            <div className="card16">
              <div className="card17" />
            </div>
            <div className="total-revenues-child2" />
          </div>
          <div className="frame-child4" />
          <img className="vector-icon12" alt="" src="/vector6.svg" />
          <div className="frame-parent5">
            <div className="total-transactions-group">
              <div className="total-transactions1">Total Transactions</div>
              <b className="b4">1,520</b>
            </div>
            <div className="label4">
              <div className="label-text4">+1.7%</div>
            </div>
          </div>
        </div>
        <div className="total-revenues-parent2">
          <div className="total-revenues5">
            <div className="card16">
              <div className="card17" />
            </div>
            <div className="total-revenues-child2" />
          </div>
          <div className="frame-child5" />
          <div className="frame-parent6">
            <div className="total-transactions-group">
              <div className="total-transactions1">Total Likes</div>
              <b className="b5">9,721</b>
            </div>
            <div className="label4">
              <div className="label-text5">+1.4%</div>
            </div>
          </div>
          <img className="vector-icon13" alt="" src="/vector11.svg" />
        </div>
        <div className="total-revenues-parent2">
          <div className="total-revenues5">
            <div className="card16">
              <div className="card17" />
            </div>
            <div className="total-revenues-child2" />
          </div>
          <div className="frame-child6" />
          <div className="frame-parent6">
            <div className="total-transactions-group">
              <div className="total-transactions1">Total Users</div>
              <b className="b5">9,721</b>
            </div>
            <div className="label4">
              <div className="label-text5">+4.2%</div>
            </div>
          </div>
          <img className="vector-icon14" alt="" src="/vector8.svg" />
        </div>
      </div>
      <div className="frame-parent8">
        <div className="total-transactions-group">
          <div className="total-transactions1">Total Revenues</div>
          <b className="b4">$2,129,430</b>
        </div>
        <div className="label4">
          <div className="label-text5">+2.5%</div>
        </div>
      </div>
      <div className="activities-card1">
        <div className="card24">
          <div className="card25" />
        </div>
        <div className="guest1">Guest</div>
        <div className="user1">User</div>
        <b className="activities1">Activities</b>
        <div className="may-june-2021-group">
          <div className="may-june2">May - June 2021</div>
          <img className="vector-icon15" alt="" src="/vector9.svg" />
        </div>
        <div className="chart2">
          <div className="parent3">
            <div className="div13">500</div>
            <div className="group-child3" />
          </div>
          <div className="parent4">
            <div className="div13">300</div>
            <div className="group-child3" />
          </div>
          <div className="parent5">
            <div className="div13">400</div>
            <div className="group-child3" />
          </div>
          <div className="parent6">
            <div className="div13">200</div>
            <div className="group-child3" />
          </div>
          <div className="parent7">
            <div className="div13">100</div>
            <div className="group-child3" />
          </div>
          <div className="parent8">
            <div className="div18">0</div>
            <div className="group-child8" />
          </div>
        </div>
        <div className="activities-card-inner" />
        <div className="activities-card-child1" />
      </div>
      <div className="top-products-card1">
        <div className="card26">
          <div className="card27" />
        </div>
        <div className="div19">
          <div className="child1" />
          <b className="basic-tees1">Basic Tees</b>
          <div className="div20">55%</div>
        </div>
        <div className="may-june-2021-container">
          <div className="may-june3">May - June 2021</div>
        </div>
        <div className="div21">
          <div className="child2" />
          <b className="basic-tees1">Custom Short Pants</b>
          <div className="div20">31%</div>
        </div>
        <div className="div23">
          <div className="child3" />
          <b className="basic-tees1">Super Hoodies</b>
          <div className="div20">14%</div>
        </div>
        <b className="top-products1">Top products</b>
      </div>
      <img className="schedules-card-icon1" alt="" src="/schedules-card.svg" />
      <div className="chart-weeks1">
        <div className="week-11">Week 1</div>
        <div className="week-21">Week 2</div>
        <div className="week-31">Week 3</div>
        <div className="week-41">Week 4</div>
      </div>
      <div className="header1">
        <b className="dashboard6">Dashboard</b>
        <div className="search-bar1">
          <input className="white2" type="text" />
          <div className="search1">Search...</div>
          <img className="search-icon1" alt="" src="/search-icon.svg" />
        </div>
        <img className="mask-group-icon2" alt="" src="/mask-group@2x.png" />
        <img className="vector-icon16" alt="" src="/vector10.svg" />
      </div>
      <img className="bar-1-1-icon8" alt="" src="/bar-1-1.svg" />
      <img className="bar-1-1-icon9" alt="" src="/bar-1-11.svg" />
      <img className="bar-1-1-icon10" alt="" src="/bar-1-18.svg" />
      <img className="bar-1-1-icon11" alt="" src="/bar-1-13.svg" />
      <img className="bar-1-1-icon12" alt="" src="/bar-1-14.svg" />
      <img className="bar-1-1-icon13" alt="" src="/bar-1-15.svg" />
      <img className="bar-1-1-icon14" alt="" src="/bar-1-19.svg" />
      <img className="bar-1-1-icon15" alt="" src="/bar-1-17.svg" />
      <div className="chart-group">
        <div className="chart3">
          <img className="donut-chart-icon1" alt="" src="/donut-chart.svg" />
          <div className="legend1" />
        </div>
        <img className="donut-1-icon2" alt="" src="/donut-1.svg" />
        <img className="donut-1-icon3" alt="" src="/donut-11.svg" />
        <img className="group-child9" alt="" src="/ellipse-4.svg" />
      </div>
      <div className="card28">
        <div className="card27" />
        <div className="group-container">
          <img className="frame-child7" alt="" src="/group-75581.svg" />
          <div className="add-profile1">Add Profile</div>
        </div>
      </div>
      <div className="dashboard-item" />
      <div className="modal-dialog1">
        <div className="header-module1">
          <div className="header-holder1">
            <div className="title1">Add New Profile</div>
            <div className="button5">
              <img className="icon2" alt="" src="/icon2.svg" />
            </div>
          </div>
          <div className="divider1" />
        </div>
        <div className="content-placeholder-module1">
          <div className="frame-parent9">
            <div className="frame-child8" />
            <div className="input-title4">Basic</div>
            <div className="input-title5">Contact</div>
            <div className="frame-child9" />
            <div className="frame-child10" />
          </div>
          <div className="text-input-container">
            <div className="text-input2">
              <div className="input-title6">Enter Name*</div>
              <div className="input-container2">
                <div className="input-title6">Eg. John Doe</div>
              </div>
            </div>
          </div>
          <div className="text-input3">
            <div className="input-title6">Enter Email*</div>
            <div className="chip-holder">
              <div className="left-container">
                <div className="label8">
                  <div className="label-text8">TAG 1</div>
                  <img className="controls-icon" alt="" src="/icon3.svg" />
                </div>
                <div className="label8">
                  <div className="label-text8">TAG 2</div>
                  <img className="controls-icon" alt="" src="/icon3.svg" />
                </div>
                <div className="label10">
                  <div className="label-text8">your label</div>
                  <img className="controls-icon" alt="" src="/icon3.svg" />
                </div>
                <div className="label10">
                  <div className="label-text8">your label</div>
                  <img className="controls-icon" alt="" src="/icon3.svg" />
                </div>
              </div>
              <div className="placeholder-text3">Eg. John@xyz.com</div>
              <div className="right-container">
                <div className="button5">
                  <img className="controls-icon" alt="" src="/controls.svg" />
                </div>
              </div>
            </div>
          </div>
          <div className="text-input3">
            <div className="input-title6">Enter Phone*</div>
            <div className="chip-holder">
              <div className="left-container">
                <div className="label8">
                  <div className="label-text8">TAG 1</div>
                  <img className="controls-icon" alt="" src="/icon4.svg" />
                </div>
                <div className="label8">
                  <div className="label-text8">TAG 2</div>
                  <img className="controls-icon" alt="" src="/icon4.svg" />
                </div>
                <div className="label10">
                  <div className="label-text8">your label</div>
                  <img className="controls-icon" alt="" src="/icon4.svg" />
                </div>
                <div className="label10">
                  <div className="label-text8">your label</div>
                  <img className="controls-icon" alt="" src="/icon4.svg" />
                </div>
              </div>
              <div className="placeholder-text3">Eg. 9123456789</div>
              <div className="right-container">
                <div className="button5">
                  <img className="controls-icon" alt="" src="/controls.svg" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-module1">
          <div className="seperator1" />
          <div className="button-container1">
            <div className="button8">
              <div className="button-text3" />
            </div>
            <div
              className="button-group1"
              onClick={onButtonGroupContainerClick}
            >
              <div className="button9">
                <div className="button-text4">Next</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard1;
