import React from 'react';

import { Route, Switch } from 'react-router-dom';

import Bundle from './Bundle';
import Loading from 'components/Loading/Loading';

import Home from 'bundle-loader?lazy&name=home!pages/Home/Home';
import Page1 from 'bundle-loader?lazy&name=page1!pages/Page1/Page1';
import Counter from 'bundle-loader?lazy&name=counter!pages/Counter/Counter';
import UserInfo from 'bundle-loader?lazy&name=userInfo!pages/UserInfo/UserInfo';
import NotFound from 'bundle-loader?lazy&name=notFound!pages/NotFound/NotFound';
import TableTest from 'bundle-loader?lazy&name=tableTest!pages/TableTest/TableTest';
import adminList from 'bundle-loader?lazy&name=adminList!pages/adminManage/adminList';
import adminAdd from 'bundle-loader?lazy&name=adminAdd!pages/adminManage/adminAdd';
import govList from 'bundle-loader?lazy&name=govList!pages/govManage/govList';
import govAdd from 'bundle-loader?lazy&name=govAdd!pages/govManage/govAdd';
import userList from 'bundle-loader?lazy&name=userList!pages/userManage/userList';
import govInformation from 'bundle-loader?lazy&name=govInformation!pages/projectManage/govInformation';
import projectCheck from 'bundle-loader?lazy&name=projectCheck!pages/projectManage/projectCheck';
import productCheck from 'bundle-loader?lazy&name=productCheck!pages/projectManage/productCheck';
import releaseManage from 'bundle-loader?lazy&name=releaseManage!pages/projectManage/releaseManage';
import overdueManage from 'bundle-loader?lazy&name=overdueManage!pages/projectManage/overdueManage';
import newsList from 'bundle-loader?lazy&name=newsList!pages/newsManage/newsList';
import newsAdd from 'bundle-loader?lazy&name=newsAdd!pages/newsManage/newsAdd';
import sysNoticeList from 'bundle-loader?lazy&name=sysNoticeList!pages/sysNoticeManage/sysNoticeList';
import sysNoticeAdd from 'bundle-loader?lazy&name=sysNoticeAdd!pages/sysNoticeManage/sysNoticeAdd';
import test from 'bundle-loader?lazy&name=test!pages/test/test';

const createComponent = (component) => () => (
    <Bundle load={component}>
        {
            (Component) => Component ? <Component /> : <Loading />
        }
    </Bundle>
);

export default () => (
    <div>
        <Switch>
            <Route exact path="/" component={createComponent(Home)} />
            <Route path="/page1" component={createComponent(Page1)} />
            <Route path="/counter" component={createComponent(Counter)} />
            <Route path="/userinfo" component={createComponent(UserInfo)} />
            <Route path="/tabletest" component={createComponent(TableTest)} />
            <Route path="/adminList" component={createComponent(adminList)} />
            <Route path="/adminAdd" component={createComponent(adminAdd)} />
            <Route path="/govList" component={createComponent(govList)} />
            <Route path="/govAdd" component={createComponent(govAdd)} />
            <Route path="/userList" component={createComponent(userList)} />
            <Route path="/govInformation" component={createComponent(govInformation)} />
            <Route path="/projectCheck" component={createComponent(projectCheck)} />
            <Route path="/productCheck" component={createComponent(productCheck)} />
            <Route path="/releaseManage" component={createComponent(releaseManage)} />
            <Route path="/overdueManage" component={createComponent(overdueManage)} />
            <Route path="/newsList" component={createComponent(newsList)} />
            <Route path="/newsAdd" component={createComponent(newsAdd)} />
            <Route path="/sysNoticeList" component={createComponent(sysNoticeList)} />
            <Route path="/sysNoticeAdd" component={createComponent(sysNoticeAdd)} />
            <Route path="/test" component={createComponent(test)} />
            <Route component={createComponent(NotFound)} />
        </Switch>
    </div>
);