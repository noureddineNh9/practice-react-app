import React, { Suspense, lazy } from "react";
import { Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

// parameter state comes from index.js provider store state(rootReducers)

const HomePage = React.lazy(() => import("./pages/HomePage"));
const Employees = React.lazy(() => import("./pages/Employees"));
const Performance = React.lazy(() => import("./pages/performance/Performance"));

class App extends React.Component {
   componentDidMount() {}
   render() {
      return (
         <>
            <div
               style={{
                  display: "grid",
                  gridTemplateColumns: "200px auto",
               }}
            >
               <div className="border-r border-gray-400">
                  <Navbar />
               </div>
               <div className="bg-gray-100 p-12">
                  <div className="bg-white p-10  border rounded-xl min-h-screen shadow-lg">
                     <Suspense fallback={<div>Loading...</div>}>
                        <Switch>
                           <Route exact path="/">
                              <HomePage />
                           </Route>
                           <Route path="/employees">
                              <Employees />
                           </Route>
                           <Route path="/performance">
                              <Performance />
                           </Route>
                        </Switch>
                     </Suspense>
                  </div>
               </div>
            </div>
         </>
      );
   }
}

export default App;
