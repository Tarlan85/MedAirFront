import "./App.css";


import { Layout } from "antd";
import RoutComponent from "./components/RoutComponent";
import { useGlobalContext } from "./context/context";
import Login from "./pages/Login";
import MySider from "./components/MySider";

const { Content } = Layout;

//V5

function App() {
    const {  token } = useGlobalContext();

    if (!token) return <Login />;
    return (
        <Layout hasSider>
            <MySider />
            <Layout
                className="site-layout"
                style={{
                    marginLeft: 200,
                }}
            >
                <Content
                    style={{
                        margin: "24px 16px 0",
                        overflow: "scroll",
                    }}
                >
                    <RoutComponent />
                </Content>
            </Layout>
        </Layout>
    );
}

export default App;
