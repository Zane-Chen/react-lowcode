import { Col, Row } from 'antd';
import React from 'react';
import styles from './index.module.less'
import cls from 'classnames'

const Index: React.FC = () => (
  <>
    <Row className={styles.title}>
      <Col span={24}>顶部菜单栏</Col>
    </Row>
    <Row className={styles.body}>
      <Col span={4}>菜单区</Col>
      <Col span={16} className={styles.draw}>作图区</Col>
      <Col span={4}>属性区</Col>
    </Row>
  </>
);

export default Index


