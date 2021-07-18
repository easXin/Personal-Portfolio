import React from 'react'
import Typewriter from 'typewriter-effect'
import "./Profile.css"

function Profile() {

    return (
        <section id="profile">
            <div className="profile__container">
                <h1>Eric Wang</h1>
                <p>I'm {" "}
                    <span>
                        <Typewriter
                            options={{
                                strings: ['Developer', 'Photographer', 'Hiker'],
                                autoStart: true,
                                loop: true,
                                pauseFor: 2500,
                                deleteSpeed: 30
                            }}
                        />
                    </span>
                </p>

                <h3>
                    Based in <span>New York.</span> I like hiking, coding and using React
                </h3>
            </div>
        </section>
    )
}

export default Profile
