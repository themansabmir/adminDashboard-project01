import Sidebar from "../../component/sidebar/Sidebar";
import "./home.scss";
import Navbar from "../../component/navbar/Navbar";
import Widget from "../../component/widget/Widget";
import Featured from "../../component/featured/Featured";
import Chart from "../../component/chart/Chart";
import List from "../../component/table/Table";
const Home = () => {
  return (
    <div className='home'>
      <Sidebar />
      <div className='homeContainer'>
        <Navbar />
        <div className='widgets'>
          <Widget type={"user"} />
          <Widget type={"order"} />
          <Widget type={"earning"} />
          <Widget type={"balance"} />
        </div>
        <div className='charts'>
          <Featured />
          <Chart />
        </div>
        <div className='listContainer'>
          <div className='listtitle'>Latest Transaction</div>
          <List />
        </div>
      </div>
    </div>
  );
};

export default Home;
