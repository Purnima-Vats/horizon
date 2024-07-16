import HeaderBox from "@/components/HeaderBox";
import RightSidebar from "@/components/RightSidebar";
import TotalBalanceBox from "@/components/TotalBalanceBox";
import { getLoggedInUser } from "@/lib/actions/user.actions";
import React from "react";

const Home = async () => {
    const loggedIn = await getLoggedInUser();
    // const loggedIn = { name: "Purnima", email: "purnimavats6789@gmail.com" }
    console.log(loggedIn);

    return (
        <section className="home">
            <div className="home-content">
                <header className="home-header">
                    <HeaderBox
                        type="greeting"
                        title="Welcome"
                        user={loggedIn?.name || "Guest"}
                        subtext="Access and manage your account and transactions efficiently."
                    />

                    <TotalBalanceBox
                        accounts={[]}
                        totalBanks={1}
                        totalCurrentBalance={1250.35}
                    />
                </header>
                RECENT TRANSACTIONS
            </div>

            {!loggedIn && (
                <p className="flex-center">
                    Please login to access your dashboard.
                </p>
            )}
            
            {loggedIn && (
                <RightSidebar
                    user={loggedIn}
                    transactions={[]}
                    banks={[
                        { currentBalance: 900.35 },
                        { currentBalance: 350.35 },
                    ]}
                />
            )}
        </section>
    );
};

export default Home;
