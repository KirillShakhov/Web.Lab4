import React from "react";
import AuthForm from "../../components/auth-form/AuthForm";
import {useSelector} from "react-redux";
import {AppState} from "../../store/ducks";
import {isError, isLoggedIn} from "../../store/ducks/Auth";
import history from "../../routes/history";
import Alert from "../../components/alert/Alert";
import Card from "../../components/card/Card";

const LoginPage = () => {
    const isAuthenticated = useSelector((state: AppState) => isLoggedIn(state));

    return (
        <>
        {isAuthenticated ?
                history.push("/") :
                (
                    <>
                        <div className="jumbotron">
                            <h1 className="text-align-center">
                                Шахов Кирилл(Back) Никита Федоров(Front) <br/> - P3232 Вариант 28254
                            </h1>
                        </div>

                        <div className="flex-container">
                            <Card title="Здорова, православный!">
                                <AuthForm />
                            </Card>
                        </div>
                    </>
                )
        }
        </>
    );
};

export default LoginPage;

