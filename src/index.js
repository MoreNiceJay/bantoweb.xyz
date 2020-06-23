import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route } from "react-router-dom";

import App from "./App";
import EventList from "./app/eventList/EventList";
import Event555 from "./app/popUps/event_555";
import DetailPage from "./app/detailPages/DetailPage";
import PaymentRegistSelection from "./app/paymentRegistSelection/PaymentRegistSelection";
import KakaoPayRegistration from "./app/kakaoPayRegistration/KakaoPayRegistration";
import CouponSelection from "./app/couponSelection/CouponSelection";
import CouponList from "./app/couponList/CouponList";

import Hi from "./app/hi/Hi";

import WebFont from "webfontloader";
WebFont.load({
  google: {
    families: [
      "Titillium Web:300,400,700",
      "sans-serif",
      "Noto Sans KR : 300 400 700",
      "Roboto"
    ]
  }
});
const rootElement = document.getElementById("root");
ReactDOM.render(
  <BrowserRouter>
    <React.StrictMode>
      <Route Z exact path="/" component={App} />
      <Route exact path="/eventlist" component={EventList} />
      <Route exact path="/event555" component={Event555} />
      <Route exact path="/detailPage" component={DetailPage} />
      <Route
        exact
        path="/paymentregistselection"
        component={PaymentRegistSelection}
      />
      <Route
        exact
        path="/kakaopayregistration"
        component={KakaoPayRegistration}
      />
      <Route exact path="/couponselection" component={CouponSelection} />
      <Route exact path="/couponlist" component={CouponList} />
      <Route exact path="/hi" component={Hi} />
    </React.StrictMode>
  </BrowserRouter>,

  rootElement
);
