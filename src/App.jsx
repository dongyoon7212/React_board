import RootLayout from "./components/RootLayout/RootLayout";
import AuthRoute from "./routes/AuthRoute";

function App() {
    return (
        <>
            <RootLayout>
                <AuthRoute />
            </RootLayout>
        </>
    );
}

export default App;
