import React from "react";

export default function Friends () {

    return (
        <>
            <h1> friend page </h1>
            <p> at top, search bar to search users by username, search will either return results or if results is empty will say no user found with that username. if results, can click on the username and a modal will pop up with the searched user's info and if user is not already signed-in-user's friend (will need a query to check if the searched user is already in current user's friends array) will be a button to add as friend. below the search area, will be displayed the user's current friends and their visits/reviews.</p>
        </>
        

    )
}