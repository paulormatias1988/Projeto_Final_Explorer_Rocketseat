import { createContext, useContext, useState, useEffect } from "react";

import { api } from "../services/api";

export const AuthContext = createContext({});

function AuthProvider({ children }) {
    const [data, setData] = useState({});

    function updateLastInteraction() {
        localStorage.setItem('@foodexplorer:lastInteractionTime', Date.now());
    }

    async function signIn({ email, password }) {
        try {
            const response = await api.post("/sessions", { email, password });
            const { user, token } = response.data;
            
            localStorage.setItem("@foodexplorer:user", JSON.stringify(user));
            localStorage.setItem("@foodexplorer:token", token);

            api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
            setData({ user, token });

            updateLastInteraction();

        } catch (error) {
            if (error.response) {
                alert(error.response.data.message);
            } else {
                alert("Não foi possível entrar.");
            }
        }
        localStorage.removeItem("@foodexplorer:order");
    }

    function signOut() {
        localStorage.removeItem("@foodexplorer:user");
        localStorage.removeItem("@foodexplorer:token");
        localStorage.removeItem("@foodexplorer:order");
        localStorage.removeItem('@foodexplorer:lastInteraction');

        setData({});
    }

    /*
    async function updateProfile({ user, avatarFile }) {
        if (avatarFile) {
            const fileUploadForm = new FormData();
            fileUploadForm.append("avatar", avatarFile);

            const response = await api.patch("/users/avatar", fileUploadForm);
            user.avatar = response.data.avatar;
        }
        try {
            await api.put("/users", user);
            localStorage.setItem("@foodexplorer:user", JSON.stringify(user));

            setData({ user, token: data.token });
            alert("Perfil atualizado");

        } catch (error) {
            if (error.response) {
                alert(error.response.data.message);
            } else {
                alert("Não foi possível atualizar o perfil.");
            }
        }
    }
    */

    useEffect(() => {
        const user = localStorage.getItem("@foodexplorer:user");
        const token = localStorage.getItem("@foodexplorer:token");
        const lastInteractionTime = localStorage.getItem('@foodexplorer:lastInteractionTime');

        if (lastInteractionTime) {
            const currentTime = Date.now();
            const timeElapsed = currentTime - parseInt(lastInteractionTime, 10);
    
            if (timeElapsed > 2 * 60 * 60 * 1000) {
                signOut();
            }
        }

        if (token && user) {
            api.defaults.headers.common['Authorization'] = `Bearer ${token}`;

            setData({
                token,
                user: JSON.parse(user)
            });

            updateLastInteraction();
        }

    }, []);

    return (
        <AuthContext.Provider value={{
            signIn,
            signOut,
            //updateProfile,
            user: data.user
        }}
        >
            {children}
        </AuthContext.Provider>
    )
}

function useAuth() {
    const context = useContext(AuthContext);

    return context;
}

export { AuthProvider, useAuth };