import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import NavBar from './component/navbar';
import MenuGridList from './component/menugridlist/MenuGridList';
import {Container} from '@material-ui/core';

ReactDOM.render(
    <React.StrictMode>
        <NavBar />
        <Container maxWidth="md" >
          <MenuGridList />
        </Container>
        {/*<ItemDialog id={0} open={true}/>*/}
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
