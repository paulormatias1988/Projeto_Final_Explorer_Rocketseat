import { BrowserRouter } from "react-router-dom";
import { useAuth } from "../hooks/auth";
import { AdminRoutes } from "./admin.routes";
import { SaleRoutes } from "./sale.routes";
import { AuthRoutes } from "./auth.routes";

export function Routes() {
    const { user } = useAuth();

    function AccessRoute() {
        switch (user.type_user) {
            case "admin":
                return <AdminRoutes />;
            case "sale":
                return <SaleRoutes />;
            default:
                return <SaleRoutes />;
        }
    }

    return (
        <BrowserRouter>
            {user ? <AccessRoute /> : <AuthRoutes />}
        </BrowserRouter>
    )
}