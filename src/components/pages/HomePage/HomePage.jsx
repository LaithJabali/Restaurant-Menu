import React from "react";
import { List } from "antd";
import { ArrowRightOutlined } from "@ant-design/icons";
import styles from "./HomePage.module.css"; // Import CSS module

const locations = ["Al Tireh", "Al Masyoun", "Al Irsal", "Nablus"];

const HomePage = () => {
  const handleClick = (location) => {
    console.log("Clicked:", location);
  };

  return (
    <List
      dataSource={locations}
      renderItem={(item) => (
        <List.Item
          className={styles.listItem}
          onClick={() => handleClick(item)}
        >
          <span className={styles.listText}>{item}</span>
          <div className={styles.arrowWrapper}>
            <ArrowRightOutlined className={styles.arrowIcon} />
          </div>
        </List.Item>
      )}
    />
  );
};

export default HomePage;