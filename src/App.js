import styled from "styled-components";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Layout from "./containers/Layout/Layout";
import MainComponent from "./containers/MainComponent/MainComponent";
import About from "./components/Contents/About/About";
import Blogs from "./components/Contents/Blogs/Blogs";
import DishDetails from "./components/Contents/Dishes/DishDetails/DishDetails";

const StyledApp = styled.div`
  overflow: hidden;
  scroll-behavior: smooth;
  font-family: "Josefin Sans", sans-serif;
`;

function App() {
  return (
    <BrowserRouter>
      <StyledApp>
        <Layout>
          <Switch>
            <Route path="/" exact={true} component={MainComponent} />
            <Route path="/about" component={About} />
            <Route path="/blogs" component={Blogs} />
            <Route path="/:id" component={DishDetails} />
          </Switch>
        </Layout>
      </StyledApp>
    </BrowserRouter>
  );
}

export default App;
