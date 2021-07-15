import React from 'react'
import Typewriter from 'typewriter-effect'
import "./Profile.css"

function Profile() {
    return (
        <section className="profile">
            <div className="profile__container">
                <h1>Eric Wang</h1>
                <p>I'm
                    <span>
                        <Typewriter
                            options={{
                                strings: [' Full Stack Developer', ' Problem Solver', ' Hiker'],
                                autoStart: true,
                                loop: true,
                                pauseFor: 2500
                            }}
                        />
                    </span>
                </p>
            </div>
        </section>
    )
}

export default Profile
