import React from "react";
import Link from "next/link";

const ProjectsPage = () => {
    return (
        <div className="flex flex-col p-20 gap-16 text-3xl font-bold">
            <div>
                <Link
                    href="https://github.com/HaoDuong1141/Pokedex"
                    className="underline underline-offset-8 "
                >
                    Pokedex
                </Link>
                <div className="flex flex-col text-xl p-4 gap-4">
                    Created a Pokedex website where you can search up the Pokemon name and it will
                    display its species, type, and basic stats using the PokeAPI and React with
                    TailwindCSS
                    <li>
                        Uses React to fetch the data from the PokeAPI site when user search for the
                        Pokemon
                    </li>
                    <li>
                        Display the fetched data from the PokeAPI such as species, type, and basic
                        stats
                    </li>
                    <li>Learned how to access, fetch, and use the fetched data from an API</li>
                </div>
            </div>
            <div>
                <Link
                    href="https://github.com/HaoDuong1141/Chat-App"
                    className="underline underline-offset-8 "
                >
                    Chat App
                </Link>
                <div className="flex flex-col text-xl p-4 gap-4">
                    Created a social media chatting app like Facebook using React and Firebase to
                    host the app
                    <li>Private chat application that fetches user conversations real time</li>
                    <li>Learn how to create an app, host it, and deploy it</li>
                    <li>
                        Used React to create an interactive chat app with user sign up, user login,
                        search bar for users to find their friends, and chat history
                    </li>
                    <li>
                        Used Firebase to host the web app for authentication, cloud storge of users,
                        cloud database to store user data for users to search for their friends
                    </li>
                    <li>Learned how to use SassScript to write and stylize the application</li>
                </div>
            </div>
            <div>
                <Link
                    href="https://github.com/HaoDuong1141/Food-Delivery-App"
                    className="underline underline-offset-8"
                >
                    Resturant Deliver App
                </Link>
                <div className="flex flex-col text-xl p-4 gap-4">
                    Created an Uber Eats/Postmates like food delivery app using NextJS, TypeScript,
                    React, ESLint, and Tailwind CSS
                    <li>
                        Food delivery website that has a navigation bar, menu, cart, checkout, phone
                        number, and pictures
                    </li>
                    <li>
                        Has a responsive design with sliders, interactable items, use effects, and
                        dynamic cost calculations
                    </li>
                    <li>
                        Divided into multiple different pages like the homepage, the menu page, the
                        cart page, the payment page, product page, etc
                    </li>
                    <li>
                        Uses Tailwind CSS to create a modern and sleek looking website that is
                        pleasing on the eyes
                    </li>
                    <li>
                        Learned how to create multiple pages and in line styling with NodeJS and
                        Tailwind CSS
                    </li>
                    <li>
                        Learned how to design a website the scales itself based on the size of the
                        users screen
                    </li>
                    <li>
                        Learned how to design a good looking website that is attractive to look at
                    </li>
                </div>
            </div>
            <div>
                <Link
                    href="https://github.com/HaoDuong1141/Movie-Search-App"
                    className="underline underline-offset-8"
                >
                    Movie Search App
                </Link>
                <div className="flex flex-col text-xl p-4 gap-4">
                    Created a Netflix like movie search app using pure JS, HTML, and CSS with
                    dynamic scalling and dark/light mode
                    <li>
                        Movie search app with differnt displays of movies like new relaesed and
                        recommened
                    </li>
                    <li>Light/Dark mode toggle with toggle ball</li>
                    <li>
                        Uses Googlt Fonts and Font Awsome icons for smooth movie transition
                        scrolling
                    </li>
                </div>
            </div>
            <div>
                <Link
                    href="https://www.youtube.com/watch?v=glMfedW3XwA&feature=youtu.be"
                    className="underline underline-offset-8"
                >
                    Thermdal Danger Sensor with SMS Notification
                </Link>
                <div className="flex flex-col text-xl p-4 gap-4">
                    Created a thermal danger sensor that sends SMS messages to your phone when a
                    dangerous temperature is detected. For car use to prevent babies/animals from
                    being trapped and dying in a hot car
                    <li>
                        Was the group leader that helped to create and delegate tasks by following
                        the agile development method to keep members on track and to meet deadlines
                    </li>
                    <li>
                        Despite it being my first experience and many of my group members first
                        experience working on a project that involved both software and hardware, we
                        were able to navigate through the challenges by working as a team, seeking
                        guidance, proactively learning, and research
                    </li>
                    <li>
                        Use a Jira board to create and manage tasks, weekly hourly group meetings,
                        and split into software and hardware development teams
                    </li>
                    <li>
                        Used python to create a program to take data from the thermal sensor,
                        display the temperature, and send the SMS along with a raspberry pi 0 with
                        Wi-Fi capabilities as hardware
                    </li>
                </div>
            </div>
            <div>
                <Link
                    href="https://play.unity.com/mg/other/webgl-builds-371471"
                    className="underline underline-offset-8"
                >
                    3D Zombie Survival Shooter
                </Link>
                <div className="flex flex-col text-xl p-4 gap-4">
                    Created a 3D first person endless survival shooter game with powerups, character
                    upgrades, and multiple unique weapons as a group of four using Unity and C#
                    <li>
                        Achieved the intended goals of learning how to develop a game and work in a
                        team environment using the Unity engine and C#
                    </li>
                    <li>
                        Took leadership of the group and helped to organized the goals of the
                        project and delegate tasks to group members to make sure the development of
                        the project stayed on track
                    </li>
                    <li>
                        Learned a multitude of new programming skills and learned how to apply
                        learned knowledge into practical knowledge under the guidance of a working
                        programmer at PlayStation
                    </li>
                </div>
            </div>
            <div>
                <Link
                    href="https://play.unity.com/mg/other/webgl-builds-254478"
                    className="underline underline-offset-8"
                >
                    2D Boss Fight Platformer
                </Link>
                <div className="flex flex-col text-xl p-4 gap-4">
                    Created a 2D boss fighting platformer with multiple levels and unique boss
                    mechanics Unity and C#
                    <li>
                        Achieved the intended goals of learning the basics of game development using
                        the Unity engine and C#
                    </li>
                    <li>
                        Learned a multitude of new skills besides programming like animation, sound
                        implementations, and how to properly plan and design a new project from
                        scratch
                    </li>
                    <li>
                        Design and implemented the game using coding skills learned in class to gain
                        hands on experience
                    </li>
                    <li>
                        Fully animated character and enemies with background music and sound effects
                    </li>
                </div>
            </div>
        </div>
    );
};

export default ProjectsPage;
