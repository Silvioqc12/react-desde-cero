import React from "react"
import Users from "../Pages/Users"

const UserCard = ({name, username, email}) => (
    <article className="card">
        <div className="card__data s-border s-radius-br s-radius-bl s-pxy-2">
            <h3 className="center">{name}</h3>
            <div className="s-main-center">
                {username}
            </div>
            <div className="s-main-center">
                <a className="button--ghost-alert button--tiny" href="http://ed.team">{email}</a>
            </div>
        </div>
    </article>
)
export default UserCard