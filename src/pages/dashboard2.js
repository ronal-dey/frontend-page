import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./dashboard2.css";

const Dashboard2 = () => {
  const navigate = useNavigate();

  const onGroupClick = useCallback(() => {
    navigate("/dashboard");
  }, [navigate]);

  return (
    <div className="dashboard7">
      <div className="navigation3">
        <div className="left-side3" />
        <div className="help3">Help</div>
        <div className="contact-us3">Contact Us</div>
        <div className="settings3">Settings</div>
        <div className="users3">Users</div>
        <div className="schedules3">Schedules</div>
        <div className="transactions3">Transactions</div>
        <b className="dashboard8">Dashboard</b>
        <img className="transaction-icon3" alt="" src="/transaction-icon.svg" />
        <img className="schedule-icon3" alt="" src="/schedule-icon.svg" />
        <img className="dashboard-icon3" alt="" src="/dashboard-icon.svg" />
        <img className="setting-icon3" alt="" src="/setting-icon.svg" />
        <img className="user-icon3" alt="" src="/user-icon.svg" />
        <b className="board4">Board.</b>
      </div>
      <div className="frame-parent10">
        <div className="total-revenues-parent7">
          <div className="total-revenues10">
            <div className="card30">
              <div className="card31" />
            </div>
            <div className="total-revenues-child6" />
          </div>
          <div className="frame-child11" />
          <img className="vector-icon17" alt="" src="/vector12.svg" />
        </div>
        <div className="total-revenues-parent7">
          <div className="total-revenues10">
            <div className="card30">
              <div className="card31" />
            </div>
            <div className="total-revenues-child6" />
          </div>
          <div className="frame-child12" />
          <img className="vector-icon18" alt="" src="/vector6.svg" />
          <div className="frame-parent11">
            <div className="total-transactions-container">
              <div className="total-transactions2">Total Transactions</div>
              <b className="b8">1,520</b>
            </div>
            <div className="label16">
              <div className="label-text16">+1.7%</div>
            </div>
          </div>
        </div>
        <div className="total-revenues-parent7">
          <div className="total-revenues10">
            <div className="card30">
              <div className="card31" />
            </div>
            <div className="total-revenues-child6" />
          </div>
          <div className="frame-child13" />
          <div className="frame-parent12">
            <div className="total-transactions-container">
              <div className="total-transactions2">Total Likes</div>
              <b className="b9">9,721</b>
            </div>
            <div className="label16">
              <div className="label-text17">+1.4%</div>
            </div>
          </div>
          <img className="vector-icon19" alt="" src="/vector11.svg" />
        </div>
        <div className="total-revenues-parent7">
          <div className="total-revenues10">
            <div className="card30">
              <div className="card31" />
            </div>
            <div className="total-revenues-child6" />
          </div>
          <div className="frame-child14" />
          <div className="frame-parent12">
            <div className="total-transactions-container">
              <div className="total-transactions2">Total Users</div>
              <b className="b9">9,721</b>
            </div>
            <div className="label16">
              <div className="label-text17">+4.2%</div>
            </div>
          </div>
          <img className="vector-icon20" alt="" src="/vector13.svg" />
        </div>
      </div>
      <div className="frame-parent14">
        <div className="total-transactions-container">
          <div className="total-transactions2">Total Revenues</div>
          <b className="b8">$2,129,430</b>
        </div>
        <div className="label16">
          <div className="label-text17">+2.5%</div>
        </div>
      </div>
      <div className="activities-card2">
        <div className="card38">
          <div className="card39" />
        </div>
        <div className="guest2">Guest</div>
        <div className="user2">User</div>
        <b className="activities2">Activities</b>
        <div className="may-june-2021-parent1">
          <div className="may-june4">May - June 2021</div>
          <img className="vector-icon21" alt="" src="/vector9.svg" />
        </div>
        <div className="chart4">
          <div className="parent9">
            <div className="div25">500</div>
            <div className="group-child10" />
          </div>
          <div className="parent10">
            <div className="div25">300</div>
            <div className="group-child10" />
          </div>
          <div className="parent11">
            <div className="div25">400</div>
            <div className="group-child10" />
          </div>
          <div className="parent12">
            <div className="div25">200</div>
            <div className="group-child10" />
          </div>
          <div className="parent13">
            <div className="div25">100</div>
            <div className="group-child10" />
          </div>
          <div className="parent14">
            <div className="div30">0</div>
            <div className="group-child15" />
          </div>
        </div>
        <div className="activities-card-child2" />
        <div className="activities-card-child3" />
      </div>
      <div className="top-products-card2">
        <div className="card40">
          <div className="card41" />
        </div>
        <div className="div31">
          <div className="child4" />
          <b className="basic-tees2">Basic Tees</b>
          <div className="div32">55%</div>
        </div>
        <div className="may-june-2021-frame">
          <div className="may-june5">May - June 2021</div>
        </div>
        <div className="div33">
          <div className="child5" />
          <b className="basic-tees2">Custom Short Pants</b>
          <div className="div32">31%</div>
        </div>
        <div className="div35">
          <div className="child6" />
          <b className="basic-tees2">Super Hoodies</b>
          <div className="div32">14%</div>
        </div>
        <b className="top-products2">Top products</b>
      </div>
      <img className="schedules-card-icon2" alt="" src="/schedules-card.svg" />
      <div className="chart-weeks2">
        <div className="week-12">Week 1</div>
        <div className="week-22">Week 2</div>
        <div className="week-32">Week 3</div>
        <div className="week-42">Week 4</div>
      </div>
      <div className="header2">
        <b className="dashboard9">Dashboard</b>
        <div className="search-bar2">
          <input className="white3" type="text" />
          <div className="search2">Search...</div>
          <img className="search-icon2" alt="" src="/search-icon.svg" />
        </div>
        <img className="mask-group-icon3" alt="" src="/mask-group@2x.png" />
        <img className="vector-icon22" alt="" src="/vector14.svg" />
      </div>
      <img className="bar-1-1-icon16" alt="" src="/bar-1-1.svg" />
      <img className="bar-1-1-icon17" alt="" src="/bar-1-11.svg" />
      <img className="bar-1-1-icon18" alt="" src="/bar-1-18.svg" />
      <img className="bar-1-1-icon19" alt="" src="/bar-1-13.svg" />
      <img className="bar-1-1-icon20" alt="" src="/bar-1-14.svg" />
      <img className="bar-1-1-icon21" alt="" src="/bar-1-15.svg" />
      <img className="bar-1-1-icon22" alt="" src="/bar-1-19.svg" />
      <img className="bar-1-1-icon23" alt="" src="/bar-1-17.svg" />
      <div className="chart-container">
        <div className="chart5">
          <img className="donut-chart-icon2" alt="" src="/donut-chart1.svg" />
          <div className="legend2" />
        </div>
        <img className="donut-1-icon4" alt="" src="/donut-12.svg" />
        <img className="donut-1-icon5" alt="" src="/donut-11.svg" />
        <img className="group-child16" alt="" src="/ellipse-41.svg" />
      </div>
      <div className="card42">
        <div className="card41" />
        <div className="group-parent1">
          <img
            className="frame-child15"
            alt=""
            src="/group-75582.svg"
            onClick={onGroupClick}
          />
          <div className="add-profile2">Add Profile</div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard2;
