import Container from "./Container";
import PrivateRoute from "./PrivateRoute";

export default function PrivateContainer({ children }) {
    return <PrivateRoute>
        <Container>
            {children}
        </Container>
    </PrivateRoute>
}