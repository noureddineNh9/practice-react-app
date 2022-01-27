import React from "react";
import Page1 from "./Page1";
import AsyncComponent from "./AsyncComponent";

class Performance extends React.Component {
   constructor() {
      super();
      this.state = {
         route: "page1",
         component: null,
      };
   }
   OnRouteChange = (route) => {
      if (route === "page1") {
         this.setState({ route: route });
      } else if (route === "page2") {
         import("./Page2").then((page2) => {
            this.setState({ route: route, component: page2.default });
            console.log(page2.default);
         });
      } else if (route === "page3") {
         import("./Page3").then((page3) => {
            this.setState({ route: route, component: page3.default });
         });
      }
   };

   render() {
      /*
      if (this.state.route === "page1")
         return <Page1 OnRouteChange={this.OnRouteChange} />;
      else return <this.state.component OnRouteChange={this.OnRouteChange} />;
      */

      if (this.state.route === "page1")
         return <Page1 OnRouteChange={this.OnRouteChange} />;
      else return <this.state.component OnRouteChange={this.OnRouteChange} />;
   }
}

export default Performance;
