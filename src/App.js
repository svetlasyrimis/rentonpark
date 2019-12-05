import React, { useEffect } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import ReactDynamicImport from "react-dynamic-import";

let loader = () => import(`./components/Landing`);
const Landing = ReactDynamicImport({ loader });

loader = () => import(`./components/Admin`);
const Admin = ReactDynamicImport({ loader });

let token = window.sessionStorage.getItem("token");
let role = window.sessionStorage.getItem("role");
var isAuth = false;
if (token) {
  isAuth = true;
}
var isAdmin = isAuth && role == "admin";

const App = () => {
  const AddScript = source => {
    let script = document.createElement("script");
    script.src = source;
    script.async = false;
    document.body.appendChild(script);
  };

  useEffect(() => {
    var current_url = window.location.href;
    if (current_url.includes("/admin")) {
      AddScript("assets/js_admin/jquery.min.js");
      AddScript("assets/js_admin/jquery-ui.min.js");
      AddScript("assets/js_admin/popper.min.js");
      AddScript("assets/js_admin/bootstrap.min.js");
      AddScript("assets/js_admin/waves.min.js");
      AddScript("assets/js_admin/jquery.slimscroll.js");
      AddScript("assets/js_admin/pcoded.min.js");
      AddScript("assets/js_admin/horizontal-layout.min.js");
      AddScript("assets/js_admin/script.min.js");
    } else {
      AddScript("assets/js_home/jquery.js");
      AddScript("assets/js_home/jquery_migrate.js");
      AddScript("assets/js_home/bootstrap.js");
      AddScript("assets/js_home/riders.js");
      AddScript("assets/js_home/moment.js");
      AddScript("assets/js_home/calendar.js");
      AddScript("assets/js_home/langes.js");
      AddScript("assets/js_home/tables_jquery.js");
      AddScript("assets/js_home/tables_bootstrap.js");
      AddScript("assets/js_home/cropper.js");
      AddScript("assets/js_home/general.js");
      AddScript("assets/js_home/flexslider.js");
      AddScript("assets/js_home/flickr.js");
      AddScript("assets/js_home/lightbox.js");
      AddScript("assets/js_home/parallax.js");
    }
  }, []);
  return (
    <BrowserRouter>
      <Switch>
        {isAdmin && <Route path="/admin" component={Admin} />}
        <Route path="/" component={Landing} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
