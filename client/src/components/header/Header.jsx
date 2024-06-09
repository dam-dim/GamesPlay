export default function () {
    return (
        <header>
            {/* <!-- Navigation --> */}
            <h1>
                <a className="home" href="/">
                    GamesPlay
                </a>
            </h1>
            <nav>
                <a href="/catalogue">All games</a>
                {/* <!-- Logged-in users --> */}
                <div id="user">
                    <a href="/users/create">Create Game</a>
                    <a href="/users/logout">Logout</a>
                </div>
                {/* <!-- Guest users --> */}
                <div id="guest">
                    <a href="/users/login">Login</a>
                    <a href="/users/register">Register</a>
                </div>
            </nav>
        </header>
    );
}
