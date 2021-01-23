import React, {Component} from 'react';
import {Row, Col, Layout, PageHeader, Button} from 'antd';


export default class MainPage extends Component{

    title = '20 회 갱매'


    render() {
        return (
            <div>
                <Layout>
                    <PageHeader> {this.title} </PageHeader>
                </Layout>
                <Row>

                    <Col span={10}>

                    </Col>
                    <Col span={10}>
                        <span>
                            agsdfadsf
                        </span>
                    </Col>
                    <Col span={4}>
                        sdafff
                    </Col>
                </Row>
                <Row>
                    sadfasdfsdaf
                </Row>
            </div>
        )
    }
}
